// your JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    const container = document.querySelector('#container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';
    container.appendChild(content);

    const red = document.createElement('p');
    red.textContent = 'Hey I`m red!';
    red.style.color = 'red'; // Corrected CSS property assignment
    container.appendChild(red);

    const blue = document.createElement('h3');
    blue.textContent = 'I`m a blue h3!';
    blue.style.color = 'blue'
    container.appendChild(blue);

    const border = document.createElement('div')
    border.style.border = '20px solid black'
    border.style.padding = '10px';

    const h1 = document.createElement('h1')
    h1.textContent = "I'm in a div";
    const p = document.createElement('p')
    p.textContent = 'ME TOOOO!'

    border.appendChild(h1);
    border.appendChild(p);

    container.appendChild(border);


});






