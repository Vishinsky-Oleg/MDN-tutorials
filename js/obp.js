/* obs stands for Objects building practice */
// setup canvas
const para = document.querySelector("p");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
let count = 0;
// function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

class Shape {
    constructor(x, y, velX, velY, exists) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.exists = exists;
    }
    draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    };
    update = function () {
        if (this.x + this.size >= width) {
            this.velX = -this.velX;
        }

        if (this.x - this.size <= 0) {
            this.velX = -this.velX;
        }

        if (this.y + this.size >= height) {
            this.velY = -this.velY;
        }

        if (this.y - this.size <= 0) {
            this.velY = -this.velY;
        }

        this.x += this.velX;
        this.y += this.velY;
    };
    collisionDetect = function () {
        for (let j = 0; j < balls.length; j++) {
            if (!(this === balls[j])) {
                const dx = this.x - balls[j].x;
                const dy = this.y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + balls[j].size) {
                    balls[j].color = this.color =
                        "rgb(" +
                        random(0, 255) +
                        "," +
                        random(0, 255) +
                        "," +
                        random(0, 255) +
                        ")";
                }
            }
        }
    };
}

class Ball extends Shape {
    constructor(x, y, velX, velY, exists, color, size) {
        super(x, y, velX, velY, exists);
        this.color = color;
        this.size = size;
    }
}

class EvilCircle extends Shape {
    constructor(x, y, exists) {
        super(x, y, 20, 20, exists);
        this.color = "white";
        this.size = 10;
        this.exists = exists;
    }
    draw = function () {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    };
    checkBounds = function () {
        if (this.x + this.size >= width) {
            this.x -= this.size;
        }

        if (this.x - this.size <= 0) {
            this.x += this.size;
        }

        if (this.y + this.size >= height) {
            this.y -= this.size;
        }

        if (this.y - this.size <= 0) {
            this.y += this.size;
        }
    };
    setControls = function () {
        let _this = this;
        window.onkeydown = function (e) {
            if (e.key === "a") {
                _this.x -= _this.velX;
            } else if (e.key === "d") {
                _this.x += _this.velX;
            } else if (e.key === "w") {
                _this.y -= _this.velY;
            } else if (e.key === "s") {
                _this.y += _this.velY;
            }
        };
    };
    collisionDetect = function () {
        for (let j = 0; j < balls.length; j++) {
            if (balls[j].exists) {
                const dx = this.x - balls[j].x;
                const dy = this.y - balls[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + balls[j].size) {
                    balls[j].exists = false;
                    count--;
                }
            }
        }
    };
}

let balls = [];

while (balls.length < 25) {
    let size = random(10, 20);
    count++;
    let ball = new Ball(
        // ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        true,
        "rgb(" +
            random(0, 255) +
            "," +
            random(0, 255) +
            "," +
            random(0, 255) +
            ")",
        size
    );

    balls.push(ball);
}

const evil = new EvilCircle(500, 500, true);
evil.setControls();

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        }
    }
    evil.draw();
    evil.checkBounds();
    evil.collisionDetect();
    para.textContent = count;
    requestAnimationFrame(loop);
}

loop();
