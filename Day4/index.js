const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const progressE1 = document.querySelector('.progress-bar-front')
const stepsE1 = document.querySelectorAll(".step");

let currentChecked = 1;

nextEl.addEventListener("click", ()=>{
    currentChecked++;
    if(currentChecked > stepsE1.length){
        currentChecked = stepsE1.length
    }
    updateStepProgress();
})

prevEl.addEventListener("click", ()=>{
    currentChecked--;
    if(currentChecked < 1){
        currentChecked = 1
    }
    updateStepProgress();
})

function updateStepProgress() {
    stepsE1.forEach((stepE1, idx) => {
       if(idx<currentChecked){
        stepE1.classList.add("checked");
        stepE1.innerHTML = `
        <i class="fa-solid fa-check"></i>
        <small>${idx === 0 ? "Start" : idx === stepsE1.length-1 ? "Final" : "Step "+idx}</small>`
       }
       else{
        stepE1.classList.remove("checked");
        stepE1.innerHTML=` <i class="fas fa-times"></i>`
       }
    })

    const checkedNumber = document.querySelectorAll(".checked")
    
    progressE1.style.width = ((checkedNumber.length-1)/(stepsE1.length-1)) * 100 + "%"
}