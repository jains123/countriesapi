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
            <strong><p id="nativeName">Native Name: ${data[0].name.nativeName.rus.official}</p></strong>
            <strong><p id="population">Population:</p></strong>
            <strong><p id="region">Region:</p></strong>
            <strong><p id="subRegion">Sub Region:</p></strong>
            <strong><p id="capital">Capital:</p></strong>
        </div>
        <div>
            <strong><p id="topLevelDomain">Top Level Domain:</p></strong>
            <strong><p id="currencies">Currencies:</p></strong>
            <strong><p id="languages">Languages:</p></strong>
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