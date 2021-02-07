//index.js for FESD FET Week4

let button = document.getElementById('my-button');
console.log(button);

let buttonsByTag = document.getElementsByTagName('button');
console.log(buttonsByTag);

let buttonsByClassName = document.getElementsByClassName('my-class');
console.log(buttonsByClassName);

let buttonsByCssSelector = document.querySelectorAll('button.my-class');
console.log(buttonsByCssSelector);

let buttonsByCssSelector2 = document.querySelectorAll('.my-class');
console.log(buttonsByCssSelector2);

let button2 = document.getElementById('btn');
let content = document.getElementById('content');
let content2 = document.getElementById('content2');

button2.addEventListener('click', () => {
    if (content.innerHTML == 'Goodbye.') {
        content.innerHTML = 'Hello.';
    } else {
        content.innerHTML = 'Goodbye.'
    }
});

document.getElementById('remove').addEventListener('click', () => {
    content.parentNode.removeChild(content);
});

document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = 'This is a new paragraph';
    parent.appendChild(newElement);
});

document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p');
    newElement.innerHTML = document.getElementById('new-text').value;
    parent.appendChild(newElement);
    document.getElementById('new-text').value = '';
});



// document.getElementById('content').innerHTML = 'Good bye.';