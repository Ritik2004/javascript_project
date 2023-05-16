const slides = document.querySelectorAll(".slide");
var counter = 0;
var num = 0
slides.forEach(
    (slide,index)=>{
   slide.style.left = `${index*100}%`
   num++;
}
)
const goNext = () => {
    if(counter==4){
        counter = 0;
        slideImage()
    }
    counter++;
    slideImage()
}

const goPrev = () => {
    if(counter == 0){
        counter = 5;
        slideImage()
    }
    counter--;
    slideImage()
}

const slideImage = ()=>{
    slides.forEach(
        (slide)=>{
         slide.style.transform = `translateX(-${counter*100}%)`
    }
    )
}