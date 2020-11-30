(function() {
    var button = document.querySelector('#btn'),
        body = document.querySelector('body'),
        par = document.querySelector('a'),
        title = document.querySelector('h1'),
        hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'],
        value = document.querySelector('#hex-value');

    button.addEventListener('click', changeHex)

    function changeHex(){
        var hex = '#'

        for (i = 0; i < 6; i++){
            const index = Math.floor(Math.random()*hexValues.length)
            hex += hexValues[index]
        }
        value.textContent = hex;
        body.style.backgroundColor = hex;
        par.style.color = hex;
        title.style.color = hex
    }
} )()