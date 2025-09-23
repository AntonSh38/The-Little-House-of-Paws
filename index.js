import{a as d,b as $,S as g,N as y,P as f,K as q,R as A}from"./assets/vendor-R-SZ1I8J.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();async function k(){return(await d.get("https://paw-hut.b.goit.study/api/categories")).data}async function j(t,s,e){return(await d.get("https://paw-hut.b.goit.study/api/animals",{params:{page:t,limit:s,categoryId:e}})).data}const B=document.querySelector(".pets-card-list");B.addEventListener("click",t=>{if(t.target.nodeName!=="BUTTON")return;const s=t.target.closest(".pets-card-items"),e=JSON.parse(decodeURIComponent(s.getAttribute("data-animal")));$.create(`
    <div class="pets-modal modal">
    
        <div class="pets-container-modal modal-container">
        
       
            <div class="pets-wrapper-modal">
                <img src="${e.image}" class="pets-icons-modal" alt="${e.shortDescription}"/>
            </div>
            <div class="pets-wrapper-modal">
                <div class="modal-pet-info">
                    <span class="modal-pet-info-species">${e.species}</span>
                    <span class="modal-pet-info-name">${e.name}</span>
                    <div class="modal-pet-info-special-group">
                        <span>${e.age}</span>
                        <span>${e.gender}</span>
                    </div>
                </div>

                <div class="modal-pet-description">
                    <div class="modal-pet-description-item">
                        <span class="modal-pet-title">Опис:</span>
                        <p class="modal-pet-text">${e.description}</p>
                    </div>
                    <div class="modal-pet-description-item">
                        <span class="modal-pet-title">Здоров’я:</span>
                        <p class="modal-pet-text">${e.healthStatus}</p>
                    </div>
                    <div class="modal-pet-description-item">
                        <span class="modal-pet-title">Поведінка:</span>
                        <p class="modal-pet-text">${e.behavior}</p>
                    </div>

                    <button class="modal-pet-btn btnfirst" type="button">Взяти додому</button>
                </div>
            </div>
        </div>
    </div>
  `,{onShow:()=>{document.body.style.overflow="hidden"},onClose:()=>{document.body.style.overflow=""}}).show()});const v=document.querySelector(".pets-nav"),h=document.querySelector(".pets-card-list"),l=document.querySelector(".pets-btn-more");let p=1,w=window.innerWidth<1440?8:9,L=null,x=0;k().then(t=>{const s=t.map(e=>`<li class="pets-nav-item" data-id="${e._id}">${e.name}</li>`).join("");v.insertAdjacentHTML("beforeend",s)});u();v.addEventListener("click",t=>{if(t.target.nodeName==="LI"){for(const s of t.target.parentElement.children)s.classList.remove("active");t.target.classList.add("active"),L=t.target.getAttribute("data-id"),h.innerHTML="",p=1,u()}});l.addEventListener("click",()=>{p+=1,u(),l.blur()});function u(){j(p,w,L).then(t=>{N(t.animals),x=t.totalItems,U()})}function U(){x<=p*w?l.classList.add("hide-pets-btn"):l.classList.remove("hide-pets-btn")}function N(t){const s=t.map(e=>`
        <li class="pets-card-items" data-animal="${encodeURIComponent(JSON.stringify(e))}">
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
      `).join("");h.insertAdjacentHTML("beforeend",s)}const R=[{id:1,imageUrl:"./about/mobile-photo/about-mob-p1-1x.jpg",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:"./about/mobile-photo/about-mob-p2-1x.jpg",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:"./about/mobile-photo/about-mob-p3-1x.jpg",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:"./about/mobile-photo/about-mob-p4-1x.jpg",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:"./about/mobile-photo/about-mob-p5-1x.jpg",text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],C=R.map(({id:t,text:s,imageUrl:e})=>`
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
 `);document.querySelector(".swiper-wrapper").innerHTML=C.join("");new g(".swiper",{modules:[y,f,q],loop:!1,slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".accordion-item");t.forEach(s=>{const e=s.querySelector(".accordion-title"),a=s.querySelector("svg use"),o=s.nextElementSibling,i=[e,s.querySelector("svg")];o.style.maxHeight=null,i.forEach(n=>{n.addEventListener("click",()=>{const E=o.style.maxHeight&&o.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(c=>{c.style.maxHeight=null}),t.forEach(c=>{const m=c.querySelector("svg use");m&&m.setAttribute("href","./icon/sprite.svg#icon-icon-add"),c.classList.remove("open")}),E||(o.style.maxHeight=o.scrollHeight+"px",a&&a.setAttribute("href","./icon/sprite.svg#icon-icon-close"),s.classList.add("open"))})})})});const O="https://paw-hut.b.goit.study/api";d.defaults.baseURL=O;async function P(){try{const{data:t}=await d.get("/feedbacks",{params:{page:1,limit:15}});return t}catch(t){console.error(t)}}const M=document.querySelector(".swiper-wrapper-story");let b=null;function H(t){const s=t.map(({rate:e,description:a,author:o})=>`<div class="swiper-slide swiper-slide-story" role="listitem">
                <div class="story-card">
                 <div class="story-rating" data-rate="${e}"></div>
                  <p class="story-review">${a}</p>
                  <p class="story-author">${o}</p>
                </div>
              </div>`).join("");M.innerHTML=s}function I(){const t=document.querySelectorAll(".story-rating");!t||t.length===0||t.forEach(s=>{if(s.classList.contains("jq-ry-container"))return;const e=s.dataset.rate;let a=Number(String(e).replace(",","."));Number.isNaN(a)&&(a=0),a<0&&(a=0),a>5&&(a=5);try{new A(s,{rating:a,starWidth:"21px",halfStar:!0,precision:2,readOnly:!0,normalFill:"#E0E0E0",ratedFill:"#c3b49d;",spacing:"6px"}),s.setAttribute("role","img"),s.setAttribute("aria-label",`Рейтинг ${a} з 5`)}catch(o){console.error("❌ RateYo init failed",s,o)}})}function T(){return b=new g(".swiper-story",{modules:[y,f],slidesPerView:1,spaceBetween:32,wrapperClass:"swiper-wrapper-story",slideClass:"swiper-slide-story",navigation:{nextEl:".story-button-next",prevEl:".story-button-prev"},pagination:{el:".swiper-pagination-story",clickable:!0,dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:2}}}),b}async function _(){const t=await P();t&&t.feedbacks&&(H(t.feedbacks),I(),T())}_();const S=document.querySelector(".backdrop-order"),D=document.querySelector(".modal-order-close"),r=document.querySelector(".modal-form");D.addEventListener("click",()=>{S.style.display="none"});r.addEventListener("submit",t=>{t.preventDefault();const s=r.querySelector('[name="name"]'),e=r.querySelector('[name="phone"]'),a=r.querySelector('[name="comment"]'),o=s.value.trim(),i=e.value.trim();if(!o||!i){iziToast.error({title:"Помилка",message:"Будь ласка, заповніть ім'я та номер телефону!",position:"topRight",timeout:3e3});return}console.log("Відправляємо:",{name:o,phone:i,comment:a.value}),r.reset(),S.style.display="none",iziToast.success({title:"Успіх",message:"Ваша заявка надіслана!",position:"topRight",timeout:3e3})});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".mobile-menu-btn"),s=document.querySelector(".mobile-menu-close"),e=document.getElementById("mobileMenu");t.addEventListener("click",()=>{e.classList.add("active"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}),s.addEventListener("click",()=>{e.classList.remove("active"),e.setAttribute("aria-hidden","true"),document.body.style.overflow=""}),e.addEventListener("click",a=>{a.target===e&&(e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="")}),document.addEventListener("keydown",a=>{a.key==="Escape"&&e.classList.contains("active")&&(e.classList.remove("is-open"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="")})});
//# sourceMappingURL=index.js.map
