// const input = document.querySelector('.input')
// const div1 = document.querySelector('.about')
// const ul1 = document.querySelector('.ul1')
//
// fetch('https://restcountries.com/v3.1/all')
//     .then( res => res.json())
//     .then(result =>{
//         console.log(result)
//         result.sort((a,b)=> b.area - a.area).map(el =>(
//             div1.innerHTML += `<div class="promises">
// <div class="promises__one">
// <div>
// <img class="promise__one_img" src="${el.flags.png}" alt="img">
// <h1 class="promise__one_h1">${el.name.official}</h1>
// <h1 class="promise__one_h2"> Area: ${el.area} km</h1>
// </div>
// </div>
// </div>`
//         ))
//     })
//
// input.addEventListener('keyup', (e) =>{
//     if (e.key === 'Enter') {
//         ul1.innerHTML += `<li>${input.value}</li>`
//     }
// })
//
//
//
// // const addNewList = () => {
// //     if (input.value !== ''){
// //         ul1.innerHTML += `<li class="list-group-item d-flex justify-content-between">${input.value}
// // <button class="del-btn btn btn-danger">X</button>
// // </li>`
// //         input.value = ''
// //     }
// // }


// 'https://restcountries.com/v3.1/all'

const countryInput = document.querySelector('.countryInput')
const search = document.querySelector('.search')
const search_result = document.querySelector('.search-result')
const flag = document.querySelector('.flag')
const name = document.querySelector('.name')
const capital = document.querySelector('.capital')
const continent = document.querySelector('.continent')
const population = document.querySelector('.population')
const currency = document.querySelector('.currency')
const language = document.querySelector('.language')



search.addEventListener('click', () =>{
    const countryName = countryInput.value;
    const finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(finalUrl)
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) =>{
            search_result.style.display = 'block'
            countryData = data[0]
            console.log(countryData)
            flag.src = countryData.flags.svg
            name.innerHTML = countryData.name.common
            capital.innerHTML = countryData.capital
            continent.innerHTML = countryData.continents
            population.innerHTML = countryData.population
            currency.innerHTML = countryData.currencies[Object.keys(countryData.currencies)].name
            // language.innerHTML = Object.values(countryData.language).toString().split(',').join(',')
        })
})


































