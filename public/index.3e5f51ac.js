const e=document.getElementsByClassName("country-container");document.getElementsByClassName("region");const t=document.querySelector(".wrapper"),n=document.getElementById("info"),l=document.querySelector("body"),o=document.getElementById("enter"),c=document.getElementById("info-btn"),s=document.getElementById("clear-search");o.addEventListener("click",function(){t.classList.remove("wrapper"),n.style.opacity="0",l.style.overflowY="auto",setTimeout(()=>{n.style.display="none",console.log(n)},400)}),c.addEventListener("click",()=>{t.classList.add("wrapper"),l.style.overflowY="none",n.style.display="flex",n.style.opacity="1"}),s.addEventListener("click",function(){document.getElementById("search").value="",document.getElementById("filter").value="filter";for(let t=0;t<e.length;t++)e[t].classList.remove("hidden")});//# sourceMappingURL=index.3e5f51ac.js.map

//# sourceMappingURL=index.3e5f51ac.js.map