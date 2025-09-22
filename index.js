import{a as c,S as h,N as f,P as y}from"./assets/vendor-Cv3ODtzV.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();async function v(){return(await c.get("https://paw-hut.b.goit.study/api/categories")).data}async function x(e,s,t){return(await c.get("https://paw-hut.b.goit.study/api/animals",{params:{page:e,limit:s,categoryId:t}})).data}const u=document.querySelector(".pets-nav"),m=document.querySelector(".pets-card-list"),L=document.querySelector(".pets-btn-more");let l=1,E=8,g=null;v().then(e=>{console.log(e);const s=e.map(t=>`<li class="pets-nav-item" data-id="${t._id}">${t.name}</li>`).join("");u.insertAdjacentHTML("beforeend",s)});u.addEventListener("click",e=>{if(e.target.nodeName==="LI"){for(const s of e.target.parentElement.children)s.classList.remove("active");e.target.classList.add("active"),g=e.target.getAttribute("data-id"),m.innerHTML="",l=1,p()}});p();L.addEventListener("click",()=>{l+=1,p()});function p(){x(l,E,g).then(e=>{w(e.animals),e.total})}function w(e){const s=e.map(t=>`
        <li class="pets-card-items">
        <div class="pets-card-top">
        <img src="${t.image}" class="pets-icons" alt="${t.shortDescription}"/>
          <span class="pets-species">${t.species}</span>
          <span class="pets-name">${t.name}</span>
          <ul class="pets-filter-list">
            ${t.categories.map(a=>`<li class="pets-filter-items">${a.name}</li>`).join("")}
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
      `).join("");m.insertAdjacentHTML("beforeend",s)}const S=[{id:1,imageUrl:"./img/about/mobile-photo/mobile1x-photo1.jpg",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:"./img/about/mobile-photo/mobile1x-photo2.jpg",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:"./img/about/mobile-photo/mobile1x-photo3.jpg",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:"./img/about/mobile-photo/mobile1x-photo4.jpg",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин.",imageUrl:"./img/about/mobile-photo/mobile1x-photo5.jpg"}],$=S.map(({id:e,text:s,imageUrl:t})=>`
   <div class="swiper-slide about-slide">
    <picture>
      <!-- десктоп -->
      <source media="(min-width: 1440px)" srcset="./img/about/desktop-photo/desktop1x-photo${e}.jpg 1x,
       ./img/about/desktop-photo/desktop2x-photo${e}.jpg 2x">
      <!-- планшет -->
      <source media="(min-width: 768px)" srcset="./img/about/tablet-photo/tablet1x-photo${e}.jpg 1x,
      ./img/about/tablet-photo/tablet2x-photo${e}.jpg 2x">
      <!-- мобілка -->
      <img src="${t}" alt="about" class="about-img">
    </picture>
    <div class="about-overlay qwe">
      <p class="about-id">${s}</p>
    </div>
  </div>
  `);document.querySelector(".swiper-wrapper").innerHTML=$.join("");new h(".swiper",{modules:[f,y],loop:!1,slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach(s=>{const t=s.querySelector(".accordion-title"),a=s.querySelector("svg use"),o=s.nextElementSibling,i=[t,s.querySelector("svg")];o.style.maxHeight=null,i.forEach(r=>{r.addEventListener("click",()=>{const b=o.style.maxHeight&&o.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(n=>{n.style.maxHeight=null}),e.forEach(n=>{const d=n.querySelector("svg use");d&&d.setAttribute("href","./img/sprite.svg#icon-icon-add"),n.classList.remove("open")}),b||(o.style.maxHeight=o.scrollHeight+"px",a&&a.setAttribute("href","./img/sprite.svg#icon-icon-close"),s.classList.add("open"))})})})});const j="https://paw-hut.b.goit.study/api";c.defaults.baseURL=j;async function A(e,s){try{const{data:t}=await c.get("/feedbacks",{params:{page:1,limit:15}});return t}catch(t){console.error(t)}}A();
//# sourceMappingURL=index.js.map
