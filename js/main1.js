
// document.querySelector('h1').textContent = "Hello World!";

// document.querySelector('html').onclick = function () {
//     alert('Ouch! Stop poking me!');
// }


let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === './img/1.jpg') {
        myImage.setAttribute('src', './img/2.jpg');
    } else {
        myImage.setAttribute('src', './img/1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }

}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// myButton.onclick = setUserName();

myButton.onclick = function () {
    setUserName();
}