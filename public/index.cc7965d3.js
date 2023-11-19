!async function(){try{let e=await fetch("https://restcountries.com/v3.1/all");if(e.ok){let t=await e.json();console.log(t);let o=document.querySelector(".countries-wrapper"),r=document.querySelector(".lds-roller");setTimeout(2e3),Array.isArray(t)?(t.forEach(e=>{let t=function(e){let t=document.createElement("div");t.innerHTML=`
    <img src="${e.flags.svg}" loading="lazy">
    <div class="country-info">
      <h2>${e.name.common}</h2>
      <br> 
      <p><strong>Population:</strong> ${e.population.toLocaleString()}</p>
      <p><strong>Region:</strong> <span class="region">${e.region}</span></p>
      <p><strong>Capital:</strong> ${e.capital}</p>
    <div>
      <button class="country-value">More details</button>
    </div>
    </div>
  `;let o=t.querySelector(".country-value");return o.addEventListener("click",()=>{localStorage.setItem("selectedCountry",JSON.stringify(e.cca2)),window.location.href="/country.html"}),t.className="country-container",t}(e);o.append(t)}),o.style.display="flex",r.style.display="none"):console.error("Data not in an array")}else console.error("API request failed")}catch(e){console.error("An error occurred:",e)}}();//# sourceMappingURL=index.cc7965d3.js.map

//# sourceMappingURL=index.cc7965d3.js.map
