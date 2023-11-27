const detailsContainer = document.querySelector('.details-container')
const imgContainer = document.querySelector('.img');
let dynamicCode = localStorage.getItem('selectedCountry');
let code = dynamicCode.replace(/["']/g, '');
async function getCountry() { 
    try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${code}`);
        if (response.ok) {
            const data = await response.json()
            const wrapper = document.querySelector(".countries-wrapper");
            const roller = document.querySelector('.lds-roller');
            const currencies = Object.keys(data[0].currencies);
            const languages = Object.keys(data[0].languages);
            console.log(languages);
            detailsContainer.innerHTML = `
            <h2>${data[0].name.official}</h2>
            <div class="details">
                <div>
                    <strong><p>Native Name:</strong> ${data[0].name.official}</p>
                    <strong><p>Population:</strong> ${data[0].population.toLocaleString()}</p>
                    <strong><p>Region:</strong> ${data[0].region}</p>
                    <strong><p>Sub Region:</strong> ${data[0].subregion}</p>
                    <strong><p>Capital:</strong> ${data[0].capital}</p>
                    <strong><p id="currencies">Currency:</strong> ${currencies}</p>

                </div>
            </div>
            `
        imgContainer.innerHTML = `
            <img src="${data[0].flags.svg}" alt="country flag">
        `
        setTimeout(3000);
        roller.style.display = 'none';
        }
    } catch (error) {
        console.log("error occured", error)
}
}

getCountry();