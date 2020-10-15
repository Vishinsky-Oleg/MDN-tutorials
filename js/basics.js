let pa = document.createElement('input');
pa.textContent = "Hello World this is my paragraph"
document.querySelector('body').appendChild(pa);
pa.style.visibility = 'hidden';

document.querySelector('button').addEventListener('click', show);

function show() {
    if (pa.style.visibility === 'hidden') {
        pa.style.visibility = 'visible';

    } else {
        pa.style.visibility = 'hidden';

    }
}



const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

for (i = 0; i < people.length; i++) {
    if (people[i] === 'Phil' || people[i] === 'Lola') {
        refused.textContent += people[i] + ', ';
    } else {
        admitted.textContent += people[i] + ', ';
    }
}

let a = admitted.textContent;
a = a.replace(a.slice(a.length - 2), '.');
refused.textContent = refused.textContent.replace(refused.textContent[admitted.textContent.length - 1], '.');



let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let para = document.createElement('p');

// Add your code here
function randNum(x,y) {
    let seq = [];
    for (let i = x; i <= y; i++) {
        seq.push(i);
    }
}
// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);