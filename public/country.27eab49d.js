const e=document.querySelector(".details-container"),t=document.querySelector(".img");let o=localStorage.getItem("selectedCountry").replace(/["']/g,"");!async function(){try{let r=await fetch(`https://restcountries.com/v3.1/alpha?codes=${o}`);if(r.ok){let o=await r.json();document.querySelector(".countries-wrapper");let n=document.querySelector(".lds-roller"),c=Object.keys(o[0].currencies),s=Object.keys(o[0].languages);console.log(s),e.innerHTML=`
            <h2>${o[0].name.official}</h2>
            <div class="details">
                <div>
                    <strong><p>Native Name:</strong> ${o[0].name.official}</p>
                    <strong><p>Population:</strong> ${o[0].population.toLocaleString()}</p>
                    <strong><p>Region:</strong> ${o[0].region}</p>
                    <strong><p>Sub Region:</strong> ${o[0].subregion}</p>
                    <strong><p>Capital:</strong> ${o[0].capital}</p>
                    <strong><p id="currencies">Currency:</strong> ${c}</p>

                </div>
            </div>
            `,t.innerHTML=`
            <img src="${o[0].flags.svg}" alt="country flag">
        `,setTimeout(3e3),n.style.display="none"}}catch(e){console.log("error occured",e)}}();//# sourceMappingURL=country.27eab49d.js.map

//# sourceMappingURL=country.27eab49d.js.map
