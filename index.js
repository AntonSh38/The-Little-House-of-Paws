import{a as y,i as b,b as S,S as x,N as k,P as q,K as I,R as M}from"./assets/vendor-DvvmSQtX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();async function T(){return(await y.get("https://paw-hut.b.goit.study/api/categories")).data}async function P(e,o,t){return(await y.get("https://paw-hut.b.goit.study/api/animals",{params:{page:e,limit:o,categoryId:t}})).data}function D(){const e=document.querySelector(".backdrop-order").innerHTML,o=S.create(e,{onShow:r=>{r.element().querySelector(".modal-order-close").addEventListener("click",()=>r.close()),document.body.style.overflow="hidden",document.addEventListener("keydown",t)},onClose:r=>{document.body.style.overflow="",document.removeEventListener("keydown",t)}});function t(r){r.key==="Escape"&&o.close()}o.show()}const $=document.querySelector(".backdrop-order"),_=document.querySelector(".modal-order-close"),d=document.querySelector(".modal-form");function A(){d.reset(),d.querySelectorAll(".error").forEach(e=>{e.classList.remove("error")})}_.addEventListener("click",()=>{$.style.display="none",document.body.classList.remove("modal-open"),A()});d.addEventListener("submit",e=>{e.preventDefault();const o=d.querySelector('[name="name"]'),t=d.querySelector('[name="phone"]'),r=d.querySelector('[name="comment"]');o.classList.remove("error"),t.classList.remove("error");const s=o.value.trim(),n=t.value.trim();if(!s||!n){s||o.classList.add("error"),n||t.classList.add("error"),b.error({message:"Будь ласка, заповніть ім'я та номер телефону!",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body});return}console.log("Відправляємо:",{name:s,phone:n,comment:r.value}),A(),$.style.display="none",document.body.classList.remove("modal-open"),b.success({title:"Успіх",message:"Ваша заявка надіслана!",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body})});d.querySelectorAll("input, textarea").forEach(e=>{e.addEventListener("input",()=>{e.value.trim()&&e.classList.remove("error")})});const F=document.querySelector(".pets-card-list");F.addEventListener("click",e=>{if(e.target.nodeName!=="BUTTON")return;const o=e.target.closest(".pets-card-items"),t=JSON.parse(decodeURIComponent(o.getAttribute("data-animal"))),r=S.create(`
    <div class="pets-modal modal">

        <div class="pets-container-modal modal-container">
          <div>
            <button type="button" class="modal-pet-btn-close">
              <svg class="modal-pet-svg" height="24" width="24">
                <use href="./icon/sprite.svg#icon-icon-close"></use>
              </svg>
            </button>
          </div>
          <div class="pets-wrapper-modal">
              <img src="${t.image}" class="pets-icons-modal" alt="${t.shortDescription}"/>
          </div>
          <div class="pets-wrapper-modal">
            <div class="modal-pet-info">
                <span class="modal-pet-info-species">${t.species}</span>
                <span class="modal-pet-info-name">${t.name}</span>
                <div class="modal-pet-info-special-group">
                    <span>${t.age}</span>
                    <span>${t.gender}</span>
                </div>
            </div>
            <div class="modal-pet-description">
              <div class="modal-pet-description-item">
                  <span class="modal-pet-title">Опис:</span>
                  <p class="modal-pet-text">${t.description}</p>
              </div>
              <div class="modal-pet-description-item">
                  <span class="modal-pet-title">Здоров’я:</span>
                  <p class="modal-pet-text">${t.healthStatus}</p>
              </div>
              <div class="modal-pet-description-item">
                  <span class="modal-pet-title">Поведінка:</span>
                  <p class="modal-pet-text">${t.behavior}</p>
              </div>

              <button class="modal-pet-btn btnfirst" data-id="${t._id}" type="button">Взяти додому</button>
            </div>
          </div>
        </div>
    </div>
  `,{closable:!0,onShow:n=>{n.element().querySelector(".modal-pet-btn-close").addEventListener("click",()=>n.close()),document.body.style.overflow="hidden",document.addEventListener("keydown",s),n.element().querySelector(".modal-pet-btn").addEventListener("click",()=>{n.close(),D();const p=document.querySelector(".backdrop-order");p.style.display="flex",document.body.classList.add("modal-open"),p.querySelector(".modal-form")})},onClose:()=>{document.body.style.overflow="",document.removeEventListener("keydown",s)}});function s(n){n.key==="Escape"&&r.close()}r.show()});const C=document.querySelector(".loader");function j(){C.classList.remove("is-hidden")}function O(){C.classList.add("is-hidden")}const R=document.querySelector(".pets-nav"),H=document.querySelector(".pets-card-list"),f=document.querySelector(".pets-btn-more");let g=1,U=window.innerWidth<1440?8:9,B=null,N=0;V();w();R.addEventListener("click",e=>{if(e.target.nodeName==="LI"){for(const o of e.target.parentElement.children)o.classList.remove("active");e.target.classList.add("active"),B=e.target.getAttribute("data-id"),H.innerHTML="",g=1,w()}});f.addEventListener("click",()=>{g+=1,w(),f.blur()});async function V(){try{const o=(await T()).map(t=>`<li class="pets-nav-item" data-id="${t._id}">${t.name}</li>`).join("");R.insertAdjacentHTML("beforeend",o)}catch{b.error({title:"",message:"Наші пухнастики сперечаються, хто буде в якій категорії 😸. Повернемо їх незабаром!",position:"topRight"})}}async function w(){try{j();const e=await P(g,U,B);K(e.animals),N=e.totalItems,z()}catch{b.error({title:"",message:"Ой! Наші пухнастики сховалися 🐾. Спробуйте оновити сторінку або поверніться пізніше.",position:"topRight"})}finally{O()}}function z(){N<=g*U?f.classList.add("hide-pets-btn"):f.classList.remove("hide-pets-btn")}function K(e){const o=e.map(t=>`
        <li class="pets-card-items" data-animal="${encodeURIComponent(JSON.stringify(t))}">
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
      `).join("");H.insertAdjacentHTML("beforeend",o)}const Y=[{id:1,imageUrl:"./about/mobile-photo/about-mob-p1-1x.jpg",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:"./about/mobile-photo/about-mob-p2-1x.jpg",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:"./about/mobile-photo/about-mob-p3-1x.jpg",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:"./about/mobile-photo/about-mob-p4-1x.jpg",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:"./about/mobile-photo/about-mob-p5-1x.jpg",text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],J=Y.map(({id:e,text:o,imageUrl:t})=>`
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
      <div class="about-overlay mobile">
        <p class="about-id">${o}</p>
      </div>
    </div> 
 `);document.querySelector(".swiper-wrapper").innerHTML=J.join("");new x(".about-js",{modules:[k,q,I],loop:!1,slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},wrapperClass:"swiper-wrapper-about",slideClass:"about-slide",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination-about",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach(o=>{const t=o.querySelector(".accordion-title"),r=o.querySelector("svg use"),s=o.nextElementSibling,n=[t,o.querySelector("svg")];s.style.maxHeight=null,n.forEach(i=>{i.addEventListener("click",()=>{const p=s.style.maxHeight&&s.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(u=>{u.style.maxHeight=null}),e.forEach(u=>{const c=u.querySelector("svg use");c&&c.setAttribute("href","./icon/sprite.svg#icon-icon-add"),u.classList.remove("open")}),p||(s.style.maxHeight=s.scrollHeight+"px",r&&r.setAttribute("href","./icon/sprite.svg#icon-icon-close"),o.classList.add("open"))})})})});const W="https://paw-hut.b.goit.study/api";y.defaults.baseURL=W;async function G(){var e;try{const{data:o}=await y.get("/feedbacks",{params:{page:1,limit:15}});return o}catch(o){if(o.response){const t=((e=o.response.data)==null?void 0:e.message)||`Помилка сервера: ${o.response.status}`;throw new Error(t)}else throw o.request?new Error("Не вдалося з'єднатися з сервером. Перевірте інтернет-з'єднання"):new Error("Помилка при відправці запиту")}}const Q=document.querySelector(".swiper-wrapper-story");let E=null;function X(e){const o=e.map(({rate:t,description:r,author:s})=>`<div class="swiper-slide swiper-slide-story" role="listitem">
                <div class="story-card">
                   <div class="story-rating" data-rate="${t}"></div>
                  <p class="story-review">${r}</p>
                  <p class="story-author">${s}</p>
                </div>
              </div>`).join("");Q.innerHTML=o}function Z(){const e=document.querySelectorAll(".story-rating");!e||e.length===0||e.forEach(o=>{if(o.classList.contains("jq-ry-container"))return;const t=o.dataset.rate;let r=Number(String(t).replace(",","."));Number.isNaN(r)&&(r=0),r<0&&(r=0),r>5&&(r=5);try{new M(o,{rating:r,starWidth:"21px",halfStar:!0,precision:2,readOnly:!0,normalFill:"#E0E0E0",ratedFill:"#c3b49d",spacing:"6px"}),o.setAttribute("role","img"),o.setAttribute("aria-label",`Рейтинг ${r} з 5`)}catch(s){console.error("❌ RateYo init failed",o,s)}})}function ee(){return E=new x(".swiper-story",{modules:[k,q],slidesPerView:1,spaceBetween:32,wrapperClass:"swiper-wrapper-story",slideClass:"swiper-slide-story",navigation:{nextEl:".story-button-next",prevEl:".story-button-prev"},pagination:{el:".swiper-pagination-story",type:"bullets",dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:2}}}),E}function h(e){b.error({title:"Помилка",message:e,position:"topRight",timeout:5e3,closeOnClick:!0,pauseOnHover:!0,progressBar:!0})}async function te(){try{j();const e=await G();if(e&&e.feedbacks&&e.feedbacks.length>0){if(e.feedbacks.length<3){h("Недостатньо відгуків для відображення");return}X(e.feedbacks),Z(),ee()}else h("Не вдалося завантажити відгуки")}catch{h("Сталася помилка при завантаженні відгуків")}finally{O()}}te();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".mobile-menu-btn"),o=document.querySelector(".mobile-menu-close"),t=document.getElementById("mobileMenu"),r=document.querySelector(".header-btn"),s=document.querySelector(".header"),n=document.querySelector('.mobile-nav-btn, .mobile-nav a[href="#pets"]'),i=a=>{if(!a)return!1;const l=getComputedStyle(a).position;return l==="sticky"||l==="fixed"},p=()=>i(s)?s.offsetHeight:0,u=()=>{t&&(t.classList.add("active"),t.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden")},c=()=>{t&&(t.classList.remove("active"),t.setAttribute("aria-hidden","true"),document.body.style.overflow="")},v=a=>{const l=document.getElementById(a);if(!l)return;const m=window.pageYOffset+l.getBoundingClientRect().top-p();window.scrollTo({top:m,behavior:"smooth"})};e==null||e.addEventListener("click",u),o==null||o.addEventListener("click",c),t==null||t.addEventListener("click",a=>{a.target===t&&c()}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(t!=null&&t.classList.contains("active"))&&c()}),r==null||r.addEventListener("click",a=>{a.preventDefault(),v("pets")}),n==null||n.addEventListener("click",a=>{a.preventDefault(),c(),v("pets")}),document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",l=>{const m=a.getAttribute("href"),L=m==null?void 0:m.slice(1);L&&(l.preventDefault(),c(),v(L))})})});
//# sourceMappingURL=index.js.map
