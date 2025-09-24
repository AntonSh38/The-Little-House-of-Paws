import{a as y,b as x,i as m,S as k,N as $,P as q,K as D,R as I}from"./assets/vendor-DvvmSQtX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();async function M(){return(await y.get("https://paw-hut.b.goit.study/api/categories")).data}async function P(e,o,t){return(await y.get("https://paw-hut.b.goit.study/api/animals",{params:{page:e,limit:o,categoryId:t}})).data}function _(e){const o=document.querySelector(".backdrop-order").innerHTML;x.create(o,{onShow:r=>{const s=r.element(),a=s.querySelector(".modal-form");s.querySelector(".modal-order-close").addEventListener("click",()=>r.close());function g(i){i.key==="Escape"&&r.close()}document.body.style.overflow="hidden",document.addEventListener("keydown",g),r.element().addEventListener("basiclightbox:close",()=>{document.body.style.overflow="",document.removeEventListener("keydown",g)}),a.addEventListener("submit",async i=>{i.preventDefault();const c=a.querySelector('[name="name"]'),u=a.querySelector('[name="phone"]'),n=a.querySelector('[name="comment"]');c.classList.remove("error"),u.classList.remove("error");const l=c.value.trim(),p=u.value.trim(),f=n.value.trim();if(!l||!p){l||c.classList.add("error"),p||u.classList.add("error"),m.error({message:"Будь ласка, заповніть ім'я та номер телефону!",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body});return}const E=p.replace(/\D/g,"");if(E.length!==12){u.classList.add("error"),m.error({message:"Номер телефону повинен містити 12 цифр без + та пробілів.",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body});return}const U={name:l,phone:E,...f&&{comment:f},animalId:e};try{const N=(await y.post("https://paw-hut.b.goit.study/api/orders",U)).data;console.log("orderData :>>",N),i.target.reset()}catch(b){b.response?(console.error("Помилка відповіді сервера:",b.response.data),m.error({message:`Помилка: ${b.response.data.message}`,position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body})):(console.error("Помилка запиту:",b.message),m.error({message:`Помилка запиту: ${b.message}`,position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body}));return}a.reset(),m.success({title:"Успіх",message:"Ваша заявка надіслана!",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body}),r.close()}),a.querySelectorAll("input, textarea").forEach(i=>{i.addEventListener("input",()=>{i.value.trim()&&i.classList.remove("error")})})},onClose:()=>{document.body.style.overflow=""}}).show()}const z=document.querySelector(".pets-card-list");z.addEventListener("click",e=>{if(e.target.nodeName!=="BUTTON")return;const o=e.target.closest(".pets-card-items"),t=JSON.parse(decodeURIComponent(o.getAttribute("data-animal"))),r=x.create(`
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
  `,{closable:!0,onShow:a=>{a.element().querySelector(".modal-pet-btn-close").addEventListener("click",()=>a.close()),document.body.style.overflow="hidden",document.addEventListener("keydown",s),a.element().querySelector(".modal-pet-btn").addEventListener("click",()=>{a.close(),_(t._id)})},onClose:()=>{document.body.style.overflow="",document.removeEventListener("keydown",s)}});function s(a){a.key==="Escape"&&r.close()}r.show()});const A=document.querySelector(".loader");function C(){A.classList.remove("is-hidden")}function R(){A.classList.add("is-hidden")}const j=document.querySelector(".pets-nav"),O=document.querySelector(".pets-card-list"),v=document.querySelector(".pets-btn-more");let h=1,H=window.innerWidth<1440?8:9,T=null,B=0;V();L();j.addEventListener("click",e=>{if(e.target.nodeName==="LI"){for(const o of e.target.parentElement.children)o.classList.remove("active");e.target.classList.add("active"),T=e.target.getAttribute("data-id"),O.innerHTML="",h=1,L()}});v.addEventListener("click",()=>{h+=1,L(),v.blur()});async function V(){try{const o=(await M()).map(t=>`<li class="pets-nav-item" data-id="${t._id}">${t.name}</li>`).join("");j.insertAdjacentHTML("beforeend",o)}catch{m.error({title:"",message:"Наші пухнастики сперечаються, хто буде в якій категорії 😸. Повернемо їх незабаром!",position:"topRight"})}}async function L(){try{C();const e=await P(h,H,T);K(e.animals),B=e.totalItems,F()}catch{m.error({title:"",message:"Ой! Наші пухнастики сховалися 🐾. Спробуйте оновити сторінку або поверніться пізніше.",position:"topRight"})}finally{R()}}function F(){B<=h*H?v.classList.add("hide-pets-btn"):v.classList.remove("hide-pets-btn")}function K(e){const o=e.map(t=>`
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
      `).join("");O.insertAdjacentHTML("beforeend",o)}const Y=[{id:1,imageUrl:"./about/mobile-photo/about-mob-p1-1x.jpg",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:"./about/mobile-photo/about-mob-p2-1x.jpg",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:"./about/mobile-photo/about-mob-p3-1x.jpg",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:"./about/mobile-photo/about-mob-p4-1x.jpg",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:"./about/mobile-photo/about-mob-p5-1x.jpg",text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],J=Y.map(({id:e,text:o,imageUrl:t})=>`
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
 `);document.querySelector(".swiper-wrapper").innerHTML=J.join("");new k(".about-js",{modules:[$,q,D],loop:!1,slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},wrapperClass:"swiper-wrapper-about",slideClass:"about-slide",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination-about",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach(o=>{const t=o.querySelector(".accordion-title"),r=o.querySelector("svg use"),s=o.nextElementSibling,a=[t,o.querySelector("svg")];s.style.maxHeight=null,a.forEach(d=>{d.addEventListener("click",()=>{const g=s.style.maxHeight&&s.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(i=>{i.style.maxHeight=null}),e.forEach(i=>{const c=i.querySelector("svg use");c&&c.setAttribute("href","./icon/sprite.svg#icon-icon-add"),i.classList.remove("open")}),g||(s.style.maxHeight=s.scrollHeight+"px",r&&r.setAttribute("href","./icon/sprite.svg#icon-icon-close"),o.classList.add("open"))})})})});const W="https://paw-hut.b.goit.study/api";y.defaults.baseURL=W;async function G(){var e;try{const{data:o}=await y.get("/feedbacks",{params:{page:1,limit:15}});return o}catch(o){if(o.response){const t=((e=o.response.data)==null?void 0:e.message)||`Помилка сервера: ${o.response.status}`;throw new Error(t)}else throw o.request?new Error("Не вдалося з'єднатися з сервером. Перевірте інтернет-з'єднання"):new Error("Помилка при відправці запиту")}}const Q=document.querySelector(".swiper-wrapper-story");let S=null;function X(e){const o=e.map(({rate:t,description:r,author:s})=>`<div class="swiper-slide swiper-slide-story" role="listitem">
                <div class="story-card">
                   <div class="story-rating" data-rate="${t}"></div>
                  <p class="story-review">${r}</p>
                  <p class="story-author">${s}</p>
                </div>
              </div>`).join("");Q.innerHTML=o}function Z(){const e=document.querySelectorAll(".story-rating");!e||e.length===0||e.forEach(o=>{if(o.classList.contains("jq-ry-container"))return;const t=o.dataset.rate;let r=Number(String(t).replace(",","."));Number.isNaN(r)&&(r=0),r<0&&(r=0),r>5&&(r=5);try{new I(o,{rating:r,starWidth:"21px",halfStar:!0,precision:2,readOnly:!0,normalFill:"#E0E0E0",ratedFill:"#c3b49d",spacing:"6px"}),o.setAttribute("role","img"),o.setAttribute("aria-label",`Рейтинг ${r} з 5`)}catch(s){console.error("❌ RateYo init failed",o,s)}})}function ee(){return S=new k(".swiper-story",{modules:[$,q],slidesPerView:1,spaceBetween:32,wrapperClass:"swiper-wrapper-story",slideClass:"swiper-slide-story",navigation:{nextEl:".story-button-next",prevEl:".story-button-prev"},pagination:{el:".swiper-pagination-story",type:"bullets",dynamicBullets:!0,dynamicMainBullets:4},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:2}}}),S}function w(e){m.error({title:"Помилка",message:e,position:"topRight",timeout:5e3,closeOnClick:!0,pauseOnHover:!0,progressBar:!0})}async function te(){try{C();const e=await G();if(e&&e.feedbacks&&e.feedbacks.length>0){if(e.feedbacks.length<3){w("Недостатньо відгуків для відображення");return}X(e.feedbacks),Z(),ee()}else w("Не вдалося завантажити відгуки")}catch{w("Сталася помилка при завантаженні відгуків")}finally{R()}}te();document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".mobile-menu-btn"),o=document.querySelector(".mobile-menu-close"),t=document.getElementById("mobileMenu"),r=document.querySelector(".header-btn"),s=document.querySelector(".header"),a=document.querySelector('.mobile-nav-btn, .mobile-nav a[href="#pets"]'),d=n=>{if(!n)return!1;const l=getComputedStyle(n).position;return l==="sticky"||l==="fixed"},g=()=>d(s)?s.offsetHeight:0,i=()=>{t&&(t.classList.add("active"),t.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden")},c=()=>{t&&(t.classList.remove("active"),t.setAttribute("aria-hidden","true"),document.body.style.overflow="")},u=n=>{const l=document.getElementById(n);if(!l)return;const p=window.pageYOffset+l.getBoundingClientRect().top-g();window.scrollTo({top:p,behavior:"smooth"})};e==null||e.addEventListener("click",i),o==null||o.addEventListener("click",c),t==null||t.addEventListener("click",n=>{n.target===t&&c()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(t!=null&&t.classList.contains("active"))&&c()}),r==null||r.addEventListener("click",n=>{n.preventDefault(),u("pets")}),a==null||a.addEventListener("click",n=>{n.preventDefault(),c(),u("pets")}),document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",l=>{const p=n.getAttribute("href"),f=p==null?void 0:p.slice(1);f&&(l.preventDefault(),c(),u(f))})})});
//# sourceMappingURL=index.js.map
