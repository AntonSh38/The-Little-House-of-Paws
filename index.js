import{a as c}from"./assets/vendor-CWxt7QI6.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function h(){return(await c.get("https://paw-hut.b.goit.study/api/categories")).data}async function y(s,n,t){return(await c.get("https://paw-hut.b.goit.study/api/animals",{params:{page:s,limit:n,categoryId:t}})).data}const u=document.querySelector(".pets-nav"),m=document.querySelector(".pets-card-list"),L=document.querySelector(".pets-btn-more");let l=1,b=8,f=null;h().then(s=>{console.log(s);const n=s.map(t=>`<li class="pets-nav-item" data-id="${t._id}">${t.name}</li>`).join("");u.insertAdjacentHTML("beforeend",n)});u.addEventListener("click",s=>{if(s.target.nodeName==="LI"){for(const n of s.target.parentElement.children)n.classList.remove("active");s.target.classList.add("active"),f=s.target.getAttribute("data-id"),m.innerHTML="",l=1,d()}});d();L.addEventListener("click",()=>{l+=1,d()});function d(){y(l,b,f).then(s=>{v(s.animals),s.total})}function v(s){const n=s.map(t=>`
        <li class="pets-card-items">
        <div class="pets-card-top">
        <img src="${t.image}" class="pets-icons" alt="${t.shortDescription}"/>
          <span class="pets-species">${t.species}</span>
          <span class="pets-name">${t.name}</span>
          <ul class="pets-filter-list">
            ${t.categories.map(r=>`<li class="pets-filter-items">${r.name}</li>`).join("")}
          </ul>
        </div>
          
          <div class="pets-card-bottom">
           <div class="pets-special-group">
            <span>${t.age}</span>
            <span>${t.gender}</span>
          </div>
          <p class="pets-behavior">${t.behavior}</p>
          <button class="pets-btn-info btnsecond" type="button">Дізнатись більше</button>
          </div>
         
        </li>
      `).join("");m.insertAdjacentHTML("beforeend",n)}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".accordion-item");s.forEach(n=>{const t=n.querySelector(".accordion-title"),r=n.querySelector("svg use"),e=n.nextElementSibling,o=[t,n.querySelector("svg")];e.style.maxHeight=null,o.forEach(i=>{i.addEventListener("click",()=>{const g=e.style.maxHeight&&e.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(a=>{a.style.maxHeight=null}),s.forEach(a=>{const p=a.querySelector("svg use");p&&p.setAttribute("href","./img/sprite.svg#icon-icon-add"),a.classList.remove("open")}),g||(e.style.maxHeight=e.scrollHeight+"px",r&&r.setAttribute("href","./img/sprite.svg#icon-icon-close"),n.classList.add("open"))})})})});const E="https://paw-hut.b.goit.study/api";c.defaults.baseURL=E;async function S(s,n){try{const{data:t}=await c.get("/feedbacks",{params:{page:1,limit:15}});return t}catch(t){console.error(t)}}S();
//# sourceMappingURL=index.js.map
