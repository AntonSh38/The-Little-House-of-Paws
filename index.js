import{a as l,S as m,N as b,P as g,K as L}from"./assets/vendor-4gpOitLe.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();async function E(){return(await l.get("https://paw-hut.b.goit.study/api/categories")).data}async function S(e,o,t){return(await l.get("https://paw-hut.b.goit.study/api/animals",{params:{page:e,limit:o,categoryId:t}})).data}const f=document.querySelector(".pets-nav"),y=document.querySelector(".pets-card-list"),c=document.querySelector(".pets-btn-more");let p=1,h=window.innerWidth<1440?8:9,w=null,v=0;E().then(e=>{const o=e.map(t=>`<li class="pets-nav-item" data-id="${t._id}">${t.name}</li>`).join("");f.insertAdjacentHTML("beforeend",o)});u();f.addEventListener("click",e=>{if(e.target.nodeName==="LI"){for(const o of e.target.parentElement.children)o.classList.remove("active");e.target.classList.add("active"),w=e.target.getAttribute("data-id"),y.innerHTML="",p=1,u()}});c.addEventListener("click",()=>{p+=1,u(),c.blur()});function u(){S(p,h,w).then(e=>{j(e.animals),v=e.totalItems,$()})}function $(){v<=p*h?c.classList.add("hide-pets-btn"):c.classList.remove("hide-pets-btn")}function j(e){const o=e.map(t=>`
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
      `).join("");y.insertAdjacentHTML("beforeend",o)}const A=[{id:1,imageUrl:"./about/mobile-photo/about-mob-p1-1x.jpg",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:"./about/mobile-photo/about-mob-p2-1x.jpg",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:"./about/mobile-photo/about-mob-p3-1x.jpg",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:"./about/mobile-photo/about-mob-p4-1x.jpg",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:"./about/mobile-photo/about-mob-p5-1x.jpg",text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],k=A.map(({id:e,text:o,imageUrl:t})=>`
    <div class="swiper-slide about-slide">
      <picture>
        <source media="(min-width: 1440px)"
          srcset="./about/desktop-photo/about-desk-p${e}-1x.jpg 1x,
        ./about/desktop-photo/about-desk-p${e}-2x.jpg 2x">

        <source media="(min-width: 768px)"
        srcset="./about/tablet-photo/about-tab-p${e}-1x.jpg 1x,
        ./about/tablet-photo/about-tab-p${e}-2x.jpg 2x">
        
        <source media="(min-width: 320px)"
        srcset="./about/mobile-photo/about-mob-p${e}-1x.jpg 1x,
        ./about/mobile-photo/about-mob-p${e}-2x.jpg 2x"></source>

        <img src="${t}" alt="about" class="about-img"></img>
      </picture>
      <div class="about-overlay qwe">
        <p class="about-id">${o}</p>
      </div>
    </div> 
 `);document.querySelector(".swiper-wrapper").innerHTML=k.join("");new m(".swiper",{modules:[b,g,L],loop:!1,slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach(o=>{const t=o.querySelector(".accordion-title"),a=o.querySelector("svg use"),s=o.nextElementSibling,i=[t,o.querySelector("svg")];s.style.maxHeight=null,i.forEach(r=>{r.addEventListener("click",()=>{const x=s.style.maxHeight&&s.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(n=>{n.style.maxHeight=null}),e.forEach(n=>{const d=n.querySelector("svg use");d&&d.setAttribute("href","./public/icon/sprite.svg#icon-icon-add"),n.classList.remove("open")}),x||(s.style.maxHeight=s.scrollHeight+"px",a&&a.setAttribute("href","./public/icon/sprite.svg#icon-icon-close"),o.classList.add("open"))})})})});const q="https://paw-hut.b.goit.study/api";l.defaults.baseURL=q;async function P(e,o){try{const{data:t}=await l.get("/feedbacks",{params:{page:1,limit:15}});return t}catch(t){console.error(t)}}document.querySelector(".swiper-wrapper-story");function U(e){const o=document.querySelector(".swiper-wrapper-story"),t=e.map(({rate:a,description:s,author:i})=>`<div class="swiper-slide swiper-slide-story" role="listitem">
                <div class="story-card">
                  <div class="story-rating">${a}</div>
                  <p class="story-review">${s}</p>
                  <p class="story-author">${i}</p>
                </div>
              </div>`).join("");o.innerHTML=t}function B(){return new m(".swiper-story",{modules:[b,g],slidesPerView:1,spaceBetween:32,wrapperClass:"swiper-wrapper-story",slideClass:"swiper-slide-story",navigation:{nextEl:".story-button-next",prevEl:".story-button-prev"},pagination:{el:".swiper-pagination-story",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:2}}})}async function H(){const e=await P();e&&e.feedbacks&&(U(e.feedbacks),B())}H();
//# sourceMappingURL=index.js.map
