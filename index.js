import{a as u,b as R,i as c,S as v,N as h,P as w,K as C,R as U}from"./assets/vendor-DvvmSQtX.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();async function N(){return(await u.get("https://paw-hut.b.goit.study/api/categories")).data}async function O(e,s,t){return(await u.get("https://paw-hut.b.goit.study/api/animals",{params:{page:e,limit:s,categoryId:t}})).data}const H=document.querySelector(".pets-card-list");H.addEventListener("click",e=>{if(e.target.nodeName!=="BUTTON")return;const s=e.target.closest(".pets-card-items"),t=JSON.parse(decodeURIComponent(s.getAttribute("data-animal"))),a=R.create(`
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
  `,{closable:!0,onShow:r=>{r.element().querySelector(".modal-pet-btn-close").addEventListener("click",()=>r.close()),document.body.style.overflow="hidden",document.addEventListener("keydown",o),r.element().querySelector(".modal-pet-btn").addEventListener("click",()=>{r.close();const l=document.querySelector(".backdrop-order");l.style.display="flex",document.body.classList.add("modal-open"),l.querySelector(".modal-form")})},onClose:()=>{document.body.style.overflow="",document.removeEventListener("keydown",o)}});function o(r){r.key==="Escape"&&a.close()}a.show()});const L=document.querySelector(".loader");function E(){L.classList.remove("is-hidden")}function x(){L.classList.add("is-hidden")}const S=document.querySelector(".pets-nav"),$=document.querySelector(".pets-card-list"),p=document.querySelector(".pets-btn-more");let m=1,k=window.innerWidth<1440?8:9,q=null,A=0;M();g();S.addEventListener("click",e=>{if(e.target.nodeName==="LI"){for(const s of e.target.parentElement.children)s.classList.remove("active");e.target.classList.add("active"),q=e.target.getAttribute("data-id"),$.innerHTML="",m=1,g()}});p.addEventListener("click",()=>{m+=1,g(),p.blur()});async function M(){try{const s=(await N()).map(t=>`<li class="pets-nav-item" data-id="${t._id}">${t.name}</li>`).join("");S.insertAdjacentHTML("beforeend",s)}catch{c.error({title:"",message:"Наші пухнастики сперечаються, хто буде в якій категорії 😸. Повернемо їх незабаром!",position:"topRight"})}}async function g(){try{E();const e=await O(m,k,q);I(e.animals),A=e.totalItems,P()}catch{c.error({title:"",message:"Ой! Наші пухнастики сховалися 🐾. Спробуйте оновити сторінку або поверніться пізніше.",position:"topRight"})}finally{x()}}function P(){A<=m*k?p.classList.add("hide-pets-btn"):p.classList.remove("hide-pets-btn")}function I(e){const s=e.map(t=>`
        <li class="pets-card-items" data-animal="${encodeURIComponent(JSON.stringify(t))}">
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
      `).join("");$.insertAdjacentHTML("beforeend",s)}const T=[{id:1,imageUrl:"./about/mobile-photo/about-mob-p1-1x.jpg",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:"./about/mobile-photo/about-mob-p2-1x.jpg",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:"./about/mobile-photo/about-mob-p3-1x.jpg",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:"./about/mobile-photo/about-mob-p4-1x.jpg",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:"./about/mobile-photo/about-mob-p5-1x.jpg",text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],_=T.map(({id:e,text:s,imageUrl:t})=>`
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
 `);document.querySelector(".swiper-wrapper").innerHTML=_.join("");new v(".swiper",{modules:[h,w,C],loop:!1,slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach(s=>{const t=s.querySelector(".accordion-title"),a=s.querySelector("svg use"),o=s.nextElementSibling,r=[t,s.querySelector("svg")];o.style.maxHeight=null,r.forEach(n=>{n.addEventListener("click",()=>{const l=o.style.maxHeight&&o.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(d=>{d.style.maxHeight=null}),e.forEach(d=>{const y=d.querySelector("svg use");y&&y.setAttribute("href","./icon/sprite.svg#icon-icon-add"),d.classList.remove("open")}),l||(o.style.maxHeight=o.scrollHeight+"px",a&&a.setAttribute("href","./icon/sprite.svg#icon-icon-close"),s.classList.add("open"))})})})});const D="https://paw-hut.b.goit.study/api";u.defaults.baseURL=D;async function F(){var e;try{const{data:s}=await u.get("/feedbacks",{params:{page:1,limit:15}});return s}catch(s){if(s.response){const t=((e=s.response.data)==null?void 0:e.message)||`Помилка сервера: ${s.response.status}`;throw new Error(t)}else throw s.request?new Error("Не вдалося з'єднатися з сервером. Перевірте інтернет-з'єднання"):new Error("Помилка при відправці запиту")}}const V=document.querySelector(".swiper-wrapper-story");let f=null;function z(e){const s=e.map(({rate:t,description:a,author:o})=>`<div class="swiper-slide swiper-slide-story" role="listitem">
                <div class="story-card">
                   <div class="story-rating" data-rate="${t}"></div>
                  <p class="story-review">${a}</p>
                  <p class="story-author">${o}</p>
                </div>
              </div>`).join("");V.innerHTML=s}function K(){const e=document.querySelectorAll(".story-rating");!e||e.length===0||e.forEach(s=>{if(s.classList.contains("jq-ry-container"))return;const t=s.dataset.rate;let a=Number(String(t).replace(",","."));Number.isNaN(a)&&(a=0),a<0&&(a=0),a>5&&(a=5);try{new U(s,{rating:a,starWidth:"21px",halfStar:!0,precision:2,readOnly:!0,normalFill:"#E0E0E0",ratedFill:"#c3b49d",spacing:"6px"}),s.setAttribute("role","img"),s.setAttribute("aria-label",`Рейтинг ${a} з 5`)}catch(o){console.error("❌ RateYo init failed",s,o)}})}function J(){return f=new v(".swiper-story",{modules:[h,w],slidesPerView:1,spaceBetween:32,wrapperClass:"swiper-wrapper-story",slideClass:"swiper-slide-story",navigation:{nextEl:".story-button-next",prevEl:".story-button-prev"},pagination:{el:".swiper-pagination-story",type:"bullets",dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:2}}}),f}function b(e){c.error({title:"Помилка",message:e,position:"topRight",timeout:5e3,closeOnClick:!0,pauseOnHover:!0,progressBar:!0})}async function W(){try{E();const e=await F();if(e&&e.feedbacks&&e.feedbacks.length>0){if(e.feedbacks.length<3){b("Недостатньо відгуків для відображення");return}z(e.feedbacks),K(),J()}else b("Не вдалося завантажити відгуки")}catch{b("Сталася помилка при завантаженні відгуків")}finally{x()}}W();const j=document.querySelector(".backdrop-order"),Y=document.querySelector(".modal-order-close"),i=document.querySelector(".modal-form");function B(){i.reset(),i.querySelectorAll(".error").forEach(e=>{e.classList.remove("error")})}Y.addEventListener("click",()=>{j.style.display="none",document.body.classList.remove("modal-open"),B()});i.addEventListener("submit",e=>{e.preventDefault();const s=i.querySelector('[name="name"]'),t=i.querySelector('[name="phone"]'),a=i.querySelector('[name="comment"]');s.classList.remove("error"),t.classList.remove("error");const o=s.value.trim(),r=t.value.trim();if(!o||!r){o||s.classList.add("error"),r||t.classList.add("error"),c.error({message:"Будь ласка, заповніть ім'я та номер телефону!",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body});return}console.log("Відправляємо:",{name:o,phone:r,comment:a.value}),B(),j.style.display="none",document.body.classList.remove("modal-open"),c.success({title:"Успіх",message:"Ваша заявка надіслана!",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body})});i.querySelectorAll("input, textarea").forEach(e=>{e.addEventListener("input",()=>{e.value.trim()&&e.classList.remove("error")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".mobile-menu-btn"),s=document.querySelector(".mobile-menu-close"),t=document.getElementById("mobileMenu");e.addEventListener("click",()=>{t.classList.add("active"),t.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}),s.addEventListener("click",()=>{t.classList.remove("active"),t.setAttribute("aria-hidden","true"),document.body.style.overflow=""}),t.addEventListener("click",a=>{a.target===t&&(t.classList.remove("is-open"),t.setAttribute("aria-hidden","true"),document.body.style.overflow="")}),document.addEventListener("keydown",a=>{a.key==="Escape"&&t.classList.contains("active")&&(t.classList.remove("is-open"),t.setAttribute("aria-hidden","true"),document.body.style.overflow="")})});
//# sourceMappingURL=index.js.map
