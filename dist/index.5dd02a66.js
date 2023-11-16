const countries = document.getElementsByClassName("country-container");
const regions = document.getElementsByClassName("region");
function filter() {
    let selection = document.getElementById("filter").value;
    console.log(selection);
    for(let i = 0; i < countries.length; i++){
        let country = countries[i];
        let region = regions[i].innerText;
        country.classList.remove("hidden");
        if (selection == region) console.log("REGION MATCHES SELECTION");
        else if (selection == "filter") country.classList.remove("hidden");
        else country.classList.add("hidden");
    }
}
function search() {
    console.log("SEARCH STARTED");
    let searchTerm = document.getElementById("search").value;
    let firstLetter = searchTerm.charAt(0);
    let firstLetterCap = firstLetter.toUpperCase();
    let remainingWord = searchTerm.slice(1);
    let searchTermCap = firstLetterCap + remainingWord;
    for(let i = 0; i < countries.length; i++){
        let countryText = countries[i].innerText;
        let country = countries[i];
        console.log(countryText);
        if (countryText.includes(searchTermCap)) console.log("test");
        else country.classList.add("hidden");
    }
}
function clearSearch() {
    document.getElementById("search").value = "";
    document.getElementById("filter").value = "filter";
    for(let i = 0; i < countries.length; i++){
        let country = countries[i];
        country.classList.remove("hidden");
    }
}
const opacityWrapper = document.querySelector(".wrapper");
const info = document.getElementById("info");
const body = document.querySelector("body");
function hideInfo() {
    opacityWrapper.classList.remove("wrapper");
    info.style.opacity = "0";
    body.style.overflowY = "auto";
    setTimeout(()=>{
        info.style.display = "none";
        console.log(info);
    }, 400);
}
const showInfo = ()=>{
    opacityWrapper.classList.add("wrapper");
    body.style.overflowY = "none";
    info.style.display = "flex";
    info.style.opacity = "1";
};

//# sourceMappingURL=index.5dd02a66.js.map
