import{a as l,S as m,N as b,P as g,K as x}from"./assets/vendor-4gpOitLe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();async function E(){return(await l.get("https://paw-hut.b.goit.study/api/categories")).data}async function S(t,s,e){return(await l.get("https://paw-hut.b.goit.study/api/animals",{params:{page:t,limit:s,categoryId:e}})).data}const y=document.querySelector(".pets-nav"),f=document.querySelector(".pets-card-list"),c=document.querySelector(".pets-btn-more");let d=1,v=window.innerWidth<1440?8:9,h=null,w=0;E().then(t=>{const s=t.map(e=>`<li class="pets-nav-item" data-id="${e._id}">${e.name}</li>`).join("");y.insertAdjacentHTML("beforeend",s)});p();y.addEventListener("click",t=>{if(t.target.nodeName==="LI"){for(const s of t.target.parentElement.children)s.classList.remove("active");t.target.classList.add("active"),h=t.target.getAttribute("data-id"),f.innerHTML="",d=1,p()}});c.addEventListener("click",()=>{d+=1,p(),c.blur()});function p(){S(d,v,h).then(t=>{k(t.animals),w=t.totalItems,$()})}function $(){w<=d*v?c.classList.add("hide-pets-btn"):c.classList.remove("hide-pets-btn")}function k(t){const s=t.map(e=>`
        <li class="pets-card-items">
        <div class="pets-card-top">
        <img src="${e.image}" class="pets-icons" alt="${e.shortDescription}"/>
          <span class="pets-species">${e.species}</span>
          <span class="pets-name">${e.name}</span>
          <ul class="pets-filter-list">
            ${e.categories.map(a=>`<li class="pets-filter-items">${a.name}</li>`).join("")}
          </ul>
        </div>
          
          <div class="pets-card-bottom">
           <div class="pets-special-group">
            <span>${e.age}</span>
            <span>${e.gender}</span>
          </div>
          <p class="pets-behavior">${e.behavior}</p>
          <button class="pets-btn-info btnsecond" type="button">Дізнатись більше</button>
          </div>
         
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",s)}const A=[{id:1,imageUrl:"./about/mobile-photo/about-mob-p1-1x.jpg",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:"./about/mobile-photo/about-mob-p2-1x.jpg",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:"./about/mobile-photo/about-mob-p3-1x.jpg",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:"./about/mobile-photo/about-mob-p4-1x.jpg",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:"./about/mobile-photo/about-mob-p5-1x.jpg",text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],j=A.map(({id:t,text:s,imageUrl:e})=>`
    <div class="swiper-slide about-slide">
      <picture>
        <source media="(min-width: 1440px)"
          srcset="./about/desktop-photo/about-desk-p${t}-1x.jpg 1x,
        ./about/desktop-photo/about-desk-p${t}-2x.jpg 2x">

        <source media="(min-width: 768px)"
        srcset="./about/tablet-photo/about-tab-p${t}-1x.jpg 1x,
        ./about/tablet-photo/about-tab-p${t}-2x.jpg 2x">
        
        <source media="(min-width: 320px)"
        srcset="./about/mobile-photo/about-mob-p${t}-1x.jpg 1x,
        ./about/mobile-photo/about-mob-p${t}-2x.jpg 2x"></source>

        <img src="${e}" alt="about" class="about-img"></img>
      </picture>
      <div class="about-overlay qwe">
        <p class="about-id">${s}</p>
      </div>
    </div> 
 `);document.querySelector(".swiper-wrapper").innerHTML=j.join("");new m(".swiper",{modules:[b,g,x],loop:!1,slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".accordion-item");t.forEach(s=>{const e=s.querySelector(".accordion-title"),a=s.querySelector("svg use"),o=s.nextElementSibling,i=[e,s.querySelector("svg")];o.style.maxHeight=null,i.forEach(r=>{r.addEventListener("click",()=>{const L=o.style.maxHeight&&o.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(n=>{n.style.maxHeight=null}),t.forEach(n=>{const u=n.querySelector("svg use");u&&u.setAttribute("href","./public/icon/sprite.svg#icon-icon-add"),n.classList.remove("open")}),L||(o.style.maxHeight=o.scrollHeight+"px",a&&a.setAttribute("href","./public/icon/sprite.svg#icon-icon-close"),s.classList.add("open"))})})})});const q="https://paw-hut.b.goit.study/api";l.defaults.baseURL=q;async function B(t,s){try{const{data:e}=await l.get("/feedbacks",{params:{page:1,limit:15}});return e}catch(e){console.error(e)}}document.querySelector(".swiper-wrapper-story");function P(t){const s=document.querySelector(".swiper-wrapper-story"),e=t.map(({rate:a,description:o,author:i})=>`<div class="swiper-slide swiper-slide-story" role="listitem">
                <div class="story-card">
                  <div class="story-rating">${a}</div>
                  <p class="story-review">${o}</p>
                  <p class="story-author">${i}</p>
                </div>
              </div>`).join("");s.innerHTML=e}function U(){return new m(".swiper-story",{modules:[b,g],slidesPerView:1,spaceBetween:32,wrapperClass:"swiper-wrapper-story",slideClass:"swiper-slide-story",navigation:{nextEl:".story-button-next",prevEl:".story-button-prev"},pagination:{el:".swiper-pagination-story",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:2}}})}async function M(){const t=await B();t&&t.feedbacks&&(P(t.feedbacks),U())}M();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".mobile-menu-btn"),s=document.querySelector(".mobile-menu-close"),e=document.getElementById("mobileMenu");t.addEventListener("click",()=>{e.classList.add("active"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}),s.addEventListener("click",()=>{e.classList.remove("active"),e.setAttribute("aria-hidden","true"),document.body.style.overflow=""}),e.addEventListener("click",a=>{a.target===e&&(e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="")}),document.addEventListener("keydown",a=>{a.key==="Escape"&&e.classList.contains("active")&&(e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="")})});
//# sourceMappingURL=index.js.map
