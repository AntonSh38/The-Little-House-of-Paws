import{a as d,S as b,N as g,P as y,K as S}from"./assets/vendor-4gpOitLe.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();async function q(){return(await d.get("https://paw-hut.b.goit.study/api/categories")).data}async function $(t,o,e){return(await d.get("https://paw-hut.b.goit.study/api/animals",{params:{page:t,limit:o,categoryId:e}})).data}const f=document.querySelector(".pets-nav"),v=document.querySelector(".pets-card-list"),l=document.querySelector(".pets-btn-more");let p=1,h=window.innerWidth<1440?8:9,w=null,L=0;q().then(t=>{const o=t.map(e=>`<li class="pets-nav-item" data-id="${e._id}">${e.name}</li>`).join("");f.insertAdjacentHTML("beforeend",o)});u();f.addEventListener("click",t=>{if(t.target.nodeName==="LI"){for(const o of t.target.parentElement.children)o.classList.remove("active");t.target.classList.add("active"),w=t.target.getAttribute("data-id"),v.innerHTML="",p=1,u()}});l.addEventListener("click",()=>{p+=1,u(),l.blur()});function u(){$(p,h,w).then(t=>{A(t.animals),L=t.totalItems,k()})}function k(){L<=p*h?l.classList.add("hide-pets-btn"):l.classList.remove("hide-pets-btn")}function A(t){const o=t.map(e=>`
        <li class="pets-card-items">
        <div class="pets-card-top">
        <img src="${e.image}" class="pets-icons" alt="${e.shortDescription}"/>
          <span class="pets-species">${e.species}</span>
          <span class="pets-name">${e.name}</span>
          <ul class="pets-filter-list">
            ${e.categories.map(n=>`<li class="pets-filter-items">${n.name}</li>`).join("")}
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
      `).join("");v.insertAdjacentHTML("beforeend",o)}const j=[{id:1,imageUrl:"./about/mobile-photo/about-mob-p1-1x.jpg",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:"./about/mobile-photo/about-mob-p2-1x.jpg",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:"./about/mobile-photo/about-mob-p3-1x.jpg",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:"./about/mobile-photo/about-mob-p4-1x.jpg",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:"./about/mobile-photo/about-mob-p5-1x.jpg",text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],B=j.map(({id:t,text:o,imageUrl:e})=>`
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
        <p class="about-id">${o}</p>
      </div>
    </div> 
 `);document.querySelector(".swiper-wrapper").innerHTML=B.join("");new b(".swiper",{modules:[g,y,S],loop:!1,slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".accordion-item");t.forEach(o=>{const e=o.querySelector(".accordion-title"),n=o.querySelector("svg use"),s=o.nextElementSibling,i=[e,o.querySelector("svg")];s.style.maxHeight=null,i.forEach(r=>{r.addEventListener("click",()=>{const E=s.style.maxHeight&&s.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(c=>{c.style.maxHeight=null}),t.forEach(c=>{const m=c.querySelector("svg use");m&&m.setAttribute("href","./public/icon/sprite.svg#icon-icon-add"),c.classList.remove("open")}),E||(s.style.maxHeight=s.scrollHeight+"px",n&&n.setAttribute("href","./public/icon/sprite.svg#icon-icon-close"),o.classList.add("open"))})})})});const P="https://paw-hut.b.goit.study/api";d.defaults.baseURL=P;async function U(t,o){try{const{data:e}=await d.get("/feedbacks",{params:{page:1,limit:15}});return e}catch(e){console.error(e)}}document.querySelector(".swiper-wrapper-story");function M(t){const o=document.querySelector(".swiper-wrapper-story"),e=t.map(({rate:n,description:s,author:i})=>`<div class="swiper-slide swiper-slide-story" role="listitem">
                <div class="story-card">
                  <div class="story-rating">${n}</div>
                  <p class="story-review">${s}</p>
                  <p class="story-author">${i}</p>
                </div>
              </div>`).join("");o.innerHTML=e}function H(){return new b(".swiper-story",{modules:[g,y],slidesPerView:1,spaceBetween:32,wrapperClass:"swiper-wrapper-story",slideClass:"swiper-slide-story",navigation:{nextEl:".story-button-next",prevEl:".story-button-prev"},pagination:{el:".swiper-pagination-story",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:2}}})}async function I(){const t=await U();t&&t.feedbacks&&(M(t.feedbacks),H())}I();const x=document.querySelector(".backdrop-order"),O=document.querySelector(".modal-order-close"),a=document.querySelector(".modal-form");O.addEventListener("click",()=>{x.style.display="none"});a.addEventListener("submit",t=>{t.preventDefault();const o=a.querySelector('[name="name"]'),e=a.querySelector('[name="phone"]'),n=a.querySelector('[name="comment"]'),s=o.value.trim(),i=e.value.trim();if(!s||!i){iziToast.error({title:"Помилка",message:"Будь ласка, заповніть ім'я та номер телефону!",position:"topRight",timeout:3e3});return}console.log("Відправляємо:",{name:s,phone:i,comment:n.value}),a.reset(),x.style.display="none",iziToast.success({title:"Успіх",message:"Ваша заявка надіслана!",position:"topRight",timeout:3e3})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".mobile-menu-btn"),o=document.querySelector(".mobile-menu-close"),e=document.getElementById("mobileMenu");t.addEventListener("click",()=>{e.classList.add("active"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}),o.addEventListener("click",()=>{e.classList.remove("active"),e.setAttribute("aria-hidden","true"),document.body.style.overflow=""}),e.addEventListener("click",n=>{n.target===e&&(e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="")}),document.addEventListener("keydown",n=>{n.key==="Escape"&&e.classList.contains("active")&&(e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="")})});
//# sourceMappingURL=index.js.map
