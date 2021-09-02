const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>displayCountries(data))
}
loadCountries()

const displayCountries = countries =>{
    const countryDiv = document.getElementById('countries');
    countries.forEach(country =>{
        const div = document.createElement('div');
        div.classList.add('countries');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
     countryDiv.appendChild(div);
    })
}  


const loadCountryByName =name => {
    const url =`https://restcountries.eu/rest/v2/name/${name}`
   fetch(url)
   .then((response) => response.json())
   .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h5>${country.name}</h5>
    <p>population :${country.population}</p>
    <img width='200px' src="${country.flag}">
    `
}