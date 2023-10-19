
const RANDOM_QUOTE_API_URL = "http://api.quotable.io/random"
const thought = document.getElementById("thought");
const quoteInput = document.getElementById("box")
const timer = document.getElementById("timer")

const correct = true;

quoteInput.addEventListener('input', ()=>{
    const arrayQuote = thought.querySelectorAll('span')
    const arrayValue = quoteInput.value.split('')

    arrayQuote.forEach((charspan,index)=>{
        const character = arrayValue[index]
        if(character == null){
            charspan.classList.remove('correct')
            charspan.classList.remove('incorrect')
            correct = false
        }
        else if(character === charspan.innerText){
            charspan.classList.add('correct')
            charspan.classList.remove('incorrect')
        }
        else{
            charspan.classList.remove('correct')
            charspan.classList.add('incorrect')
            correct = false
        }
    })
    if(correct){
        getNextQuote()
    }
})


function getRandomquote(){
   return  fetch(RANDOM_QUOTE_API_URL)
    .then((res)=>res.json())
    .then((data)=>data.content)
}


async function getNextQuote(){
    const quote = await getRandomquote();
    
    thought.innerHTML =  '';
    quote.split('').forEach(character => {
        const charspan = document.createElement('span')
        // charspan.classList.add('correct')
        charspan.innerText = character
        thought.appendChild(charspan)
    });
    quoteInput.value = null
    startTimer()
}

function startTimer(){
      timer.innerText = 0
      setInterval(()=>{
        timer.innerText++;
      }, 1000)
}
getNextQuote()