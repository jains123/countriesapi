const apiUrl = 'https://restcountries.com/v3.1/all';


async function getData() {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (response.ok) {
        const data = await response.json();
        const wrapper = document.querySelector(".countries-wrapper");
        if (Array.isArray(data)) { 
          data.forEach(country => {
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
                  <button value="${country.name.common}" class="country-value">More details</button>
                </div>
              </div>
            `;
      
            wrapper.append(div);
            div.className = 'country-container';
            // localStorage.setItem('data', JSON.stringify(data));
            // console.log(localStorage.getItem('data'));

          });
        } else {
          console.error("Data not in an array");
        }
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
} 

export {getData};


