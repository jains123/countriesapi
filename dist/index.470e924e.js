function createCountryContainer(country) {
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="${country.flags.svg}" loading="lazy">
    <div class="country-info">
      <h2>${country.name.common}</h2>
      <br> 
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> <span class="region">${country.region}</span></p>
      <p><strong>Capital:</strong> ${country.capital}</p>
    <div>
      <button class="country-value">More details</button>
    </div>
    </div>
  `;
    const button = div.querySelector(".country-value");
    button.addEventListener("click", ()=>{
        navigateToCountryDetails(country);
    });
    div.className = "country-container";
    return div;
}
function navigateToCountryDetails(country) {
    localStorage.setItem("selectedCountry", JSON.stringify(country.cca2));
    window.location.href = `/country.html`;
}
const apiUrl = "https://restcountries.com/v3.1/all";
async function getData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            const wrapper = document.querySelector(".countries-wrapper");
            const roller = document.querySelector(".lds-roller");
            setTimeout(2000);
            if (Array.isArray(data)) {
                data.forEach((country)=>{
                    const container = createCountryContainer(country);
                    wrapper.append(container);
                });
                wrapper.style.display = "flex";
                roller.style.display = "none";
            } else console.error("Data not in an array");
        } else console.error("API request failed");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
getData();

//# sourceMappingURL=index.470e924e.js.map
