const e=document.getElementsByClassName("country-container"),t=document.getElementsByClassName("region"),n=document.getElementById("search");localStorage.setItem("visited","true");let l=localStorage.getItem("visited");const o=document.querySelector(".wrapper"),s=document.getElementById("info"),c=document.querySelector("body");function d(){o.classList.remove("wrapper"),s.style.opacity="0",c.style.overflowY="auto",setTimeout(()=>{s.style.display="none"},400)}"true"===l&&d();const i=document.getElementById("enter"),r=document.getElementById("info-btn"),a=document.getElementById("clear-search"),m=document.getElementById("filter");i.addEventListener("click",d),r.addEventListener("click",()=>{o.classList.add("wrapper"),c.style.overflowY="none",s.style.display="flex",s.style.opacity="1"}),a.addEventListener("click",function(){document.getElementById("search").value="",document.getElementById("filter").value="filter";for(let t=0;t<e.length;t++)e[t].classList.remove("hidden")}),n.addEventListener("change",function(){let t=document.getElementById("search").value,n=t.charAt(0).toUpperCase()+t.slice(1);for(let t=0;t<e.length;t++){let l=e[t].innerText,o=e[t];console.log(l),l.includes(n)?console.log("test"):o.classList.add("hidden")}}),m.addEventListener("change",function(){let n=document.getElementById("filter").value;console.log(n);for(let l=0;l<e.length;l++){let o=e[l],s=t[l].innerText;o.classList.remove("hidden"),n==s?console.log("REGION MATCHES SELECTION"):"filter"==n?o.classList.remove("hidden"):o.classList.add("hidden")}});//# sourceMappingURL=index.a88b4f98.js.map

//# sourceMappingURL=index.a88b4f98.js.map