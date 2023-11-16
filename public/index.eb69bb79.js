!async function(){try{let o=await fetch("https://restcountries.com/v3.1/all");if(o.ok){let n=await o.json(),r=document.querySelector(".countries-wrapper");console.log(r),Array.isArray(n)?n.forEach(o=>{let n=document.createElement("div");n.innerHTML=`
              <img src="${o.flags.svg}" loading="lazy">
              <div class="country-info">
                <h2>${o.name.common}</h2>
                <br> 
                <p><strong>Population:</strong> ${o.population}</p>
                <p><strong>Region:</strong> <span class="region">${o.region}</span></p>
                <p><strong>Capital:</strong> ${o.capital}</p>
                <div>
                  <button onClick="openDetails()">More details</button>
                </div>
              </div>
            `,r.append(n),n.className="country-container"}):console.error("Data not in an array")}else console.error("API request failed")}catch(o){console.error("An error occurred:",o)}console.log("DATA DOWNLOADED")}();//# sourceMappingURL=index.eb69bb79.js.map

//# sourceMappingURL=index.eb69bb79.js.map
