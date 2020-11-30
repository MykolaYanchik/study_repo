var button = document.querySelector('button'),
    body = document.querySelector('body'),
    colors = ['red', 'purple', 'green', 'pink'];

body.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground);

function changeBackground(){
    var colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
}