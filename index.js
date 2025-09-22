import{a as p,S as x,N as L,P as $}from"./assets/vendor-Cv3ODtzV.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();async function w(){return(await p.get("https://paw-hut.b.goit.study/api/categories")).data}async function E(e,o,t){return(await p.get("https://paw-hut.b.goit.study/api/animals",{params:{page:e,limit:o,categoryId:t}})).data}const g=document.querySelector(".pets-nav"),b=document.querySelector(".pets-card-list"),l=document.querySelector(".pets-btn-more");let u=1,f=window.innerWidth<1440?8:9,h=null,y=0;w().then(e=>{const o=e.map(t=>`<li class="pets-nav-item" data-id="${t._id}">${t.name}</li>`).join("");g.insertAdjacentHTML("beforeend",o)});d();g.addEventListener("click",e=>{if(e.target.nodeName==="LI"){for(const o of e.target.parentElement.children)o.classList.remove("active");e.target.classList.add("active"),h=e.target.getAttribute("data-id"),b.innerHTML="",u=1,d()}});l.addEventListener("click",()=>{u+=1,d(),l.blur()});function d(){E(u,f,h).then(e=>{S(e.animals),y=e.totalItems,j()})}function j(){y<=u*f?l.classList.add("hide-pets-btn"):l.classList.remove("hide-pets-btn")}function S(e){const o=e.map(t=>`
        <li class="pets-card-items">
        <div class="pets-card-top">
        <img src="${t.image}" class="pets-icons" alt="${t.shortDescription}"/>
          <span class="pets-species">${t.species}</span>
          <span class="pets-name">${t.name}</span>
          <ul class="pets-filter-list">
            ${t.categories.map(n=>`<li class="pets-filter-items">${n.name}</li>`).join("")}
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
      `).join("");b.insertAdjacentHTML("beforeend",o)}const a=window.location.hostname.includes("github.io")?"/project_team_js2":"",A=[{id:1,imageUrl:`${a}/img/about/mobile-photo/about-mob-p1-1x.jpg`,text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:`${a}/img/about/mobile-photo/about-mob-p2-1x.jpg`,text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:`${a}/img/about/mobile-photo/about-mob-p3-1x.jpg`,text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:`${a}/img/about/mobile-photo/about-mob-p4-1x.jpg`,text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:`${a}/img/about/mobile-photo/about-mob-p5-1x.jpg`,text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],q=A.map(({id:e,text:o,imageUrl:t})=>`
   <div class="swiper-slide about-slide">
    <picture>
      <!-- десктоп -->
      <source media="(min-width: 1440px)" srcset="${a}/img/about/desktop-photo/abot-desk-p${e}.jpg 1x,
      ${a}/img/about/desktop-photo/abot-desk-p${e}.jpg 2x">
      <!-- планшет -->
      <source media="(min-width: 768px)" srcset="${a}/img/about/tablet-photo/about-tab-p${e}.jpg 1x,
      ${a}/src/img/about/tablet-photo/about-tab-p${e}.jpg 2x">
      <!-- мобілка -->
      <source media="(min-width: 320px)" srcset="${a}/img/about/mobile-photo/about-mob-p${e}.jpg 1x,
       ${a}/img/about/mobile-photo/about-mob-p${e}.jpg 2x">
      <img src="${t}" alt="about" class="about-img"></img>;
    </picture>
    <div class="about-overlay qwe">
      <p class="about-id">${o}</p>
    </div>
  </div>  
  `);document.querySelector(".swiper-wrapper").innerHTML=q.join("");new x(".swiper",{modules:[L,$],loop:!1,slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach(o=>{const t=o.querySelector(".accordion-title"),n=o.querySelector("svg use"),s=o.nextElementSibling,i=[t,o.querySelector("svg")];s.style.maxHeight=null,i.forEach(r=>{r.addEventListener("click",()=>{const v=s.style.maxHeight&&s.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(c=>{c.style.maxHeight=null}),e.forEach(c=>{const m=c.querySelector("svg use");m&&m.setAttribute("href","./img/sprite.svg#icon-icon-add"),c.classList.remove("open")}),v||(s.style.maxHeight=s.scrollHeight+"px",n&&n.setAttribute("href","./img/sprite.svg#icon-icon-close"),o.classList.add("open"))})})})});const U="https://paw-hut.b.goit.study/api";p.defaults.baseURL=U;async function P(e,o){try{const{data:t}=await p.get("/feedbacks",{params:{page:1,limit:15}});return t}catch(t){console.error(t)}}P();
//# sourceMappingURL=index.js.map
