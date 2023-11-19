const e=document.querySelector(".details-container"),t=document.querySelector(".img");let o=localStorage.getItem("selectedCountry").replace(/["']/g,"");!async function(){try{let n=await fetch(`https://restcountries.com/v3.1/alpha?codes=${o}`);if(n.ok){let o=await n.json();document.querySelector(".countries-wrapper");let r=document.querySelector(".lds-roller"),s=Object.keys(o[0].currencies),c=Object.keys(o[0].languages);console.log(c),e.innerHTML=`
            <h2>${o[0].name.official}</h2>
            <div class="details">
                <div>
                    <strong><p>Native Name:</strong> ${o[0].name.official}</p>
                    <strong><p>Population:</strong> ${o[0].population.toLocaleString()}</p>
                    <strong><p>Region:</strong> ${o[0].region}</p>
                    <strong><p>Sub Region:</strong> ${o[0].subregion}</p>
                    <strong><p>Capital:</strong> ${o[0].capital}</p>
                </div>
                <div>
                    <strong><p id="currencies">Currency:</strong> ${s}</p>
                    <strong><p id="languages">Languages:</strong></p>
                </div> 
            </div>
            `,t.innerHTML=`
            <img src="${o[0].flags.svg}" alt="country flag">
        `,setTimeout(3e3),r.style.display="none"}}catch(e){console.log("error occured",e)}}();//# sourceMappingURL=country.fd400d45.js.map

//# sourceMappingURL=country.fd400d45.js.map
