var loadText = document.querySelector('.loading-text')
var bg = document.querySelector('.bg')

let load = 0;

// i want this blurring function to run after every 30ms
let int = setInterval(blurring, 30);

function blurring(){
    load++;
    if(load > 99){
        clearInterval(int)
    }
    loadText.innerHTML = `${load}%`

    // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
    // opacity value is between 0 and 1 so for this we use scale function below
    // which will help us to map it in between 0 to 100

    loadText.style.opacity = scale(load, 0, 100, 0, 1)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` 
    // i want to blur to only 30px
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}