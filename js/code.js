var button = document.querySelectorAll('button');
var img = document.querySelectorAll('img');

button[0].addEventListener('click', function() {
    var valueBrightness = 'brightness(150%)';
    img[0].style.filter = img[1].style.filter = img[2].style.filter = img[3].style.filter = valueBrightness;
})

button[1].addEventListener('click', function() {
    var valueContrast = 'contrast(150%)';
    img[0].style.filter = img[1].style.filter = img[2].style.filter = img[3].style.filter = valueContrast;
})

button[2].addEventListener('click', function() {
    var valueGrayscale = 'grayscale(150%)';
    img[0].style.filter = img[1].style.filter = img[2].style.filter = img[3].style.filter = valueGrayscale;
})

button[3].addEventListener('click', function() {
    var valueSaturate = 'saturate(150%)';
    img[0].style.filter = img[1].style.filter = img[2].style.filter = img[3].style.filter = valueSaturate;
})

button[4].addEventListener('click', function() {
    var valueSepia = 'sepia(150%)';
    img[0].style.filter = img[1].style.filter = img[2].style.filter = img[3].style.filter = valueSepia;
})

button[5].addEventListener('click', function() {
    var valueHueRotate = 'hue-rotate(270deg)';
    img[0].style.filter = img[1].style.filter = img[2].style.filter = img[3].style.filter = valueHueRotate;
})

button[6].addEventListener('click', function() {
    var valueInvert = 'invert(150%)';
    img[0].style.filter = img[1].style.filter = img[2].style.filter = img[3].style.filter = valueInvert;
})

button[7].addEventListener('click', function() {
    var valueBlur = 'blur(3px)';
    img[0].style.filter = img[1].style.filter = img[2].style.filter = img[3].style.filter = valueBlur;
})

button[8].addEventListener('click', function() {
    var valueOpacity = 'opacity(50%)';
    img[0].style.filter = img[1].style.filter = img[2].style.filter = img[3].style.filter = valueOpacity;
})

button[9].addEventListener('click', function() {
    var valueDropShadow = 'drop-shadow(0 0 10px #fff)';
    img[0].style.filter = img[1].style.filter = img[2].style.filter = img[3].style.filter = valueDropShadow;
})

button[10].addEventListener('click', function() {
    var valueBrightness = 'none';
    img[0].style.filter = img[1].style.filter = img[2].style.filter = img[3].style.filter = valueBrightness;
})