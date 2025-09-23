import{a as d,S as g,N as y,P as f,K as $}from"./assets/vendor-4gpOitLe.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();async function k(){return(await d.get("https://paw-hut.b.goit.study/api/categories")).data}async function q(e,s,t){return(await d.get("https://paw-hut.b.goit.study/api/animals",{params:{page:e,limit:s,categoryId:t}})).data}const v=document.querySelector(".pets-nav"),h=document.querySelector(".pets-card-list"),l=document.querySelector(".pets-btn-more");let p=1,w=window.innerWidth<1440?8:9,L=null,x=0;k().then(e=>{const s=e.map(t=>`<li class="pets-nav-item" data-id="${t._id}">${t.name}</li>`).join("");v.insertAdjacentHTML("beforeend",s)});u();v.addEventListener("click",e=>{if(e.target.nodeName==="LI"){for(const s of e.target.parentElement.children)s.classList.remove("active");e.target.classList.add("active"),L=e.target.getAttribute("data-id"),h.innerHTML="",p=1,u()}});l.addEventListener("click",()=>{p+=1,u(),l.blur()});function u(){q(p,w,L).then(e=>{j(e.animals),x=e.totalItems,A()})}function A(){x<=p*w?l.classList.add("hide-pets-btn"):l.classList.remove("hide-pets-btn")}function j(e){const s=e.map(t=>`
        <li class="pets-card-items">
        <div class="pets-card-top">
        <img src="${t.image}" class="pets-icons" alt="${t.shortDescription}"/>
          <span class="pets-species">${t.species}</span>
          <span class="pets-name">${t.name}</span>
          <ul class="pets-filter-list">
            ${t.categories.map(i=>`<li class="pets-filter-items">${i.name}</li>`).join("")}
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
      `).join("");h.insertAdjacentHTML("beforeend",s)}const B=[{id:1,imageUrl:"./about/mobile-photo/about-mob-p1-1x.jpg",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:"./about/mobile-photo/about-mob-p2-1x.jpg",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:"./about/mobile-photo/about-mob-p3-1x.jpg",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:"./about/mobile-photo/about-mob-p4-1x.jpg",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:"./about/mobile-photo/about-mob-p5-1x.jpg",text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],P=B.map(({id:e,text:s,imageUrl:t})=>`
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
        <p class="about-id">${s}</p>
      </div>
    </div> 
 `);document.querySelector(".swiper-wrapper").innerHTML=P.join("");new g(".swiper",{modules:[y,f,$],loop:!1,slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach(s=>{const t=s.querySelector(".accordion-title"),i=s.querySelector("svg use"),o=s.nextElementSibling,n=[t,s.querySelector("svg")];o.style.maxHeight=null,n.forEach(r=>{r.addEventListener("click",()=>{const S=o.style.maxHeight&&o.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(c=>{c.style.maxHeight=null}),e.forEach(c=>{const m=c.querySelector("svg use");m&&m.setAttribute("href","./icon/sprite.svg#icon-icon-add"),c.classList.remove("open")}),S||(o.style.maxHeight=o.scrollHeight+"px",i&&i.setAttribute("href","./icon/sprite.svg#icon-icon-close"),s.classList.add("open"))})})})});const U="https://paw-hut.b.goit.study/api";d.defaults.baseURL=U;async function M(){try{const{data:e}=await d.get("/feedbacks",{params:{page:1,limit:15}});return e}catch(e){console.error(e)}}const H=document.querySelector(".swiper-wrapper-story");let b=null;function I(e){const s=e.map(({rate:t,description:i,author:o})=>`<div class="swiper-slide swiper-slide-story" role="listitem">
                <div class="story-card">
                 <div class="story-rating">${t}</div>
                  <p class="story-review">${i}</p>
                  <p class="story-author">${o}</p>
                </div>
              </div>`).join("");H.innerHTML=s}function O(){return b=new g(".swiper-story",{modules:[y,f],slidesPerView:1,spaceBetween:32,wrapperClass:"swiper-wrapper-story",slideClass:"swiper-slide-story",navigation:{nextEl:".story-button-next",prevEl:".story-button-prev"},pagination:{el:".swiper-pagination-story",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:2}}}),b}async function R(){const e=await M();e&&e.feedbacks&&(I(e.feedbacks),O())}R();const E=document.querySelector(".backdrop-order"),C=document.querySelector(".modal-order-close"),a=document.querySelector(".modal-form");C.addEventListener("click",()=>{E.style.display="none"});a.addEventListener("submit",e=>{e.preventDefault();const s=a.querySelector('[name="name"]'),t=a.querySelector('[name="phone"]'),i=a.querySelector('[name="comment"]'),o=s.value.trim(),n=t.value.trim();if(!o||!n){iziToast.error({title:"Помилка",message:"Будь ласка, заповніть ім'я та номер телефону!",position:"topRight",timeout:3e3});return}console.log("Відправляємо:",{name:o,phone:n,comment:i.value}),a.reset(),E.style.display="none",iziToast.success({title:"Успіх",message:"Ваша заявка надіслана!",position:"topRight",timeout:3e3})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".mobile-menu-btn"),s=document.querySelector(".mobile-menu-close"),t=document.getElementById("mobileMenu");e.addEventListener("click",()=>{t.classList.add("active"),t.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}),s.addEventListener("click",()=>{t.classList.remove("active"),t.setAttribute("aria-hidden","true"),document.body.style.overflow=""}),t.addEventListener("click",i=>{i.target===t&&(t.classList.remove("is-open"),t.setAttribute("aria-hidden","true"),document.body.style.overflow="")}),document.addEventListener("keydown",i=>{i.key==="Escape"&&t.classList.contains("active")&&(t.classList.remove("is-open"),t.setAttribute("aria-hidden","true"),document.body.style.overflow="")})});
//# sourceMappingURL=index.js.map
