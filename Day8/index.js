const result = document.getElementById('result');
const filter = document.getElementById('filter');

const listItems = []



const getData = async () => {
     const res = await fetch('https://randomuser.me/api?results=50')
     const data  = await res.json();

     //clear results
     result.innerHTML = ''
     data.results.forEach(user=>{
        const li = document.createElement('li')

        listItems.push(li)
        li.innerHTML = `
          <img src="${user.picture.large}" alt="${user.name.first}">
          <div class="user-info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.location.city} ${user.location.country}</p>
          </div>
        `
         result.appendChild(li)

     })
}
getData()

filter.addEventListener('input', (e) => filterData(e.target.value));

function filterData(searchTerm){
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide');
        }
        else{
            item.classList.add('hide');
        }
    })
}