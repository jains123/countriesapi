// https://restcountries.com/v3.1/name/
const detailsContainer = document.getElementById('details');
const imgContainer = document.querySelector('.img');

async function getCountry() { 
    try {
        const response = await fetch("https://restcountries.com/v3.1/name/Uzbekistan")
        if (response.ok) {
            const data = await response.json()
            console.log(data[0].name.nativeName)
            detailsContainer.innerHTML = `
            <div>
            <strong><p>Native Name:</strong> ${data[0].name.nativeName.rus.official}</p>
            <strong><p>Population:</strong> ${data[0].population.toLocaleString()}</p>
            <strong><p>Region:</strong> ${data[0].region}</p>
            <strong><p>Sub Region:</strong> ${data[0].subRegion}</p>
            <strong><p>Capital:</strong></p>
        </div>
        <div>
            <strong><p id="topLevelDomain">Top Level Domain:</strong></p>
            <strong><p id="currencies">Currencies:</strong></p>
            <strong><p id="languages">Languages:</strong></p>
        </div> 
            `
        imgContainer.innerHTML = `
            <img src="${data[0].flags.svg}" alt="country flag">
        `

        }
    } catch (error) {
        console.log("error occured", error)
}
}


export {getCountry};