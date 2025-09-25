import{a as y,b as k,i as g,S as $,N as q,P as A,K as I,R as B}from"./assets/vendor-DvvmSQtX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();async function M(){return(await y.get("https://paw-hut.b.goit.study/api/categories")).data}async function _(t,o,e){return(await y.get("https://paw-hut.b.goit.study/api/animals",{params:{page:t,limit:o,categoryId:e}})).data}function P(t){const o=document.querySelector(".backdrop-order").innerHTML;k.create(o,{onShow:r=>{const s=r.element(),a=s.querySelector(".modal-form");s.querySelector(".modal-order-close").addEventListener("click",()=>r.close());function m(i){i.key==="Escape"&&r.close()}document.body.style.overflow="hidden",document.addEventListener("keydown",m),r.element().addEventListener("basiclightbox:close",()=>{document.body.style.overflow="",document.removeEventListener("keydown",m)}),a.addEventListener("submit",async i=>{i.preventDefault();const b=a.querySelector('[name="name"]'),v=a.querySelector('[name="phone"]'),L=a.querySelector('[name="comment"]');b.classList.remove("error"),v.classList.remove("error");const c=b.value.trim(),d=v.value.trim(),n=L.value.trim();if(!c||!d){c||b.classList.add("error"),d||v.classList.add("error"),g.error({message:"Будь ласка, заповніть ім'я та номер телефону!",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body});return}const p=d.replace(/\D/g,"");if(p.length!==12){v.classList.add("error"),g.error({message:"Номер телефону повинен містити 12 цифр без + та пробілів.",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body});return}const f={name:c,phone:p,...n&&{comment:n},animalId:t};try{const N=(await y.post("https://paw-hut.b.goit.study/api/orders",f)).data;console.log("orderData :>>",N),i.target.reset()}catch(u){u.response?(console.error("Помилка відповіді сервера:",u.response.data),g.error({message:`Помилка: ${u.response.data.message}`,position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body})):(console.error("Помилка запиту:",u.message),g.error({message:`Помилка запиту: ${u.message}`,position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body}));return}a.reset(),g.success({title:"Успіх",message:"Ваша заявка надіслана!",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body}),r.close()}),a.querySelectorAll("input, textarea").forEach(i=>{i.addEventListener("input",()=>{i.value.trim()&&i.classList.remove("error")})})},onClose:()=>{document.body.style.overflow=""}}).show()}const z=document.querySelector(".pets-card-list");z.addEventListener("click",t=>{if(t.target.nodeName!=="BUTTON")return;const o=t.target.closest(".pets-card-items"),e=JSON.parse(decodeURIComponent(o.getAttribute("data-animal"))),r=k.create(`
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

              <button class="modal-pet-btn btnfirst" data-id="${e._id}" type="button">Взяти додому</button>
            </div>
          </div>
        </div>
    </div>
  `,{closable:!0,onShow:a=>{a.element().querySelector(".modal-pet-btn-close").addEventListener("click",()=>a.close()),document.body.style.overflow="hidden",document.addEventListener("keydown",s),a.element().querySelector(".modal-pet-btn").addEventListener("click",()=>{a.close(),P(e._id)})},onClose:()=>{document.body.style.overflow="",document.removeEventListener("keydown",s)}});function s(a){a.key==="Escape"&&r.close()}r.show()});const C=document.querySelector(".loader");function R(){C.classList.remove("is-hidden")}function j(){C.classList.add("is-hidden")}const O=document.querySelector(".pets-nav"),H=document.querySelector(".pets-card-list"),h=document.querySelector(".pets-btn-more");let w=1,T=window.innerWidth<1440?8:9,D=null,U=0;V();S();O.addEventListener("click",t=>{if(t.target.nodeName==="LI"){for(const o of t.target.parentElement.children)o.classList.remove("active");t.target.classList.add("active"),D=t.target.getAttribute("data-id"),H.innerHTML="",w=1,S()}});h.addEventListener("click",()=>{w+=1,S(),h.blur()});async function V(){try{const o=(await M()).sort((e,r)=>e._id.localeCompare(r._id)).map(e=>`<li class="pets-nav-item" data-id="${e._id}">${e.name}</li>`).join("");O.insertAdjacentHTML("beforeend",o)}catch{g.error({title:"",message:"Наші пухнастики сперечаються, хто буде в якій категорії 😸. Повернемо їх незабаром!",position:"topRight"})}}async function S(){try{R();const t=await _(w,T,D);K(t.animals),U=t.totalItems,F()}catch{g.error({title:"",message:"Ой! Наші пухнастики сховалися 🐾. Спробуйте оновити сторінку або поверніться пізніше.",position:"topRight"})}finally{j()}}function F(){U<=w*T?h.classList.add("hide-pets-btn"):h.classList.remove("hide-pets-btn")}function K(t){const o=t.map(e=>`
        <li class="pets-card-items" data-animal="${encodeURIComponent(JSON.stringify(e))}">
        <div class="pets-card-top">
        <img src="${e.image}" class="pets-icons" alt="${e.shortDescription}"/>
          <span class="pets-species">${e.species}</span>
          <span class="pets-name">${e.name}</span>
          <ul class="pets-filter-list">
            ${e.categories.map(r=>`<li class="pets-filter-items">${r.name}</li>`).join("")}
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
      `).join("");H.insertAdjacentHTML("beforeend",o)}const Y=[{id:1,imageUrl:"./about/mobile-photo/about-mob-p1-1x.jpg",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:"./about/mobile-photo/about-mob-p2-1x.jpg",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:"./about/mobile-photo/about-mob-p3-1x.jpg",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:"./about/mobile-photo/about-mob-p4-1x.jpg",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:"./about/mobile-photo/about-mob-p5-1x.jpg",text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],J=Y.map(({id:t,text:o,imageUrl:e})=>`
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
      <div class="about-overlay mobile">
        <p class="about-id">${o}</p>
      </div>
    </div> 
 `);document.querySelector(".swiper-wrapper").innerHTML=J.join("");new $(".about-js",{modules:[q,A,I],loop:!1,slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},wrapperClass:"swiper-wrapper-about",slideClass:"about-slide",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination-about",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".accordion-item");t.forEach(o=>{const e=o.querySelector(".accordion-title"),r=o.querySelector("svg use"),s=o.nextElementSibling,a=[e,o.querySelector("svg")];s.style.maxHeight=null,a.forEach(l=>{l.addEventListener("click",()=>{const m=s.style.maxHeight&&s.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(i=>{i.style.maxHeight=null}),t.forEach(i=>{const b=i.querySelector("svg use");b&&b.setAttribute("href","./icon/sprite.svg#icon-icon-add"),i.classList.remove("open")}),m||(s.style.maxHeight=s.scrollHeight+"px",r&&r.setAttribute("href","./icon/sprite.svg#icon-icon-close"),o.classList.add("open"))})})})});const W="https://paw-hut.b.goit.study/api";y.defaults.baseURL=W;async function G(){var t;try{const{data:o}=await y.get("/feedbacks",{params:{page:1,limit:15}});return o}catch(o){if(o.response){const e=((t=o.response.data)==null?void 0:t.message)||`Помилка сервера: ${o.response.status}`;throw new Error(e)}else throw o.request?new Error("Не вдалося з'єднатися з сервером. Перевірте інтернет-з'єднання"):new Error("Помилка при відправці запиту")}}const Q=document.querySelector(".swiper-wrapper-story");let x=null;function X(t){const o=t.map(({rate:e,description:r,author:s})=>`<div class="swiper-slide swiper-slide-story" role="listitem">
                <div class="story-card">
                   <div class="story-rating" data-rate="${e}"></div>
                  <p class="story-review">${r}</p>
                  <p class="story-author">${s}</p>
                </div>
              </div>`).join("");Q.innerHTML=o}function Z(){const t=document.querySelectorAll(".story-rating");!t||t.length===0||t.forEach(o=>{if(o.classList.contains("jq-ry-container"))return;const e=o.dataset.rate;let r=Number(String(e).replace(",","."));Number.isNaN(r)&&(r=0),r<0&&(r=0),r>5&&(r=5);try{new B(o,{rating:r,starWidth:"21px",halfStar:!0,precision:2,readOnly:!0,normalFill:"#E0E0E0",ratedFill:"#c3b49d",spacing:"6px"}),o.setAttribute("role","img"),o.setAttribute("aria-label",`Рейтинг ${r} з 5`)}catch(s){console.error("❌ RateYo init failed",o,s)}})}function ee(){return x=new $(".swiper-story",{modules:[q,A],slidesPerView:1,spaceBetween:32,wrapperClass:"swiper-wrapper-story",slideClass:"swiper-slide-story",navigation:{nextEl:".story-button-next",prevEl:".story-button-prev"},pagination:{el:".swiper-pagination-story",type:"bullets",dynamicBullets:!0,dynamicMainBullets:4},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:2}}}),x}function E(t){g.error({title:"Помилка",message:t,position:"topRight",timeout:5e3,closeOnClick:!0,pauseOnHover:!0,progressBar:!0})}async function te(){try{R();const t=await G();if(t&&t.feedbacks&&t.feedbacks.length>0){if(t.feedbacks.length<3){E("Недостатньо відгуків для відображення");return}X(t.feedbacks),Z(),ee()}else E("Не вдалося завантажити відгуки")}catch{E("Сталася помилка при завантаженні відгуків")}finally{j()}}te();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".mobile-menu-btn"),o=document.querySelector(".mobile-menu-close"),e=document.getElementById("mobileMenu"),r=document.querySelector(".header-btn"),s=document.querySelector(".header"),a=document.querySelector('.mobile-nav-btn, .mobile-nav a[href="#pets"]'),l=document.querySelector('.mobile-nav-btn, .mobile-nav a[href="#about"]'),m=document.querySelector('.mobile-nav-btn, .mobile-nav a[href="#faq"]'),i=document.querySelector('.mobile-nav-btn, .mobile-nav a[href="#stories"]'),b=n=>{if(!n)return!1;const p=getComputedStyle(n).position;return p==="sticky"||p==="fixed"},v=()=>b(s)?s.offsetHeight:0,L=()=>{e&&(e.classList.add("active"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden")},c=()=>{e&&(e.classList.remove("active"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="")},d=n=>{const p=document.getElementById(n);if(!p)return;const f=window.pageYOffset+p.getBoundingClientRect().top-v();window.scrollTo({top:f,behavior:"smooth"})};t==null||t.addEventListener("click",L),o==null||o.addEventListener("click",c),e==null||e.addEventListener("click",n=>{n.target===e&&c()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(e!=null&&e.classList.contains("active"))&&c()}),r==null||r.addEventListener("click",n=>{n.preventDefault(),d("pets")}),a==null||a.addEventListener("click",n=>{n.preventDefault(),c(),d("pets")}),l==null||l.addEventListener("click",n=>{n.preventDefault(),c(),d("about")}),m==null||m.addEventListener("click",n=>{n.preventDefault(),c(),d("faq")}),i==null||i.addEventListener("click",n=>{n.preventDefault(),c(),d("stories")}),document.querySelectorAll('a[href^="#stories"]').forEach(n=>{n.addEventListener("click",p=>{const f=n.getAttribute("href"),u=f==null?void 0:f.slice(1);u&&(p.preventDefault(),c(),d(u))})})});
//# sourceMappingURL=index.js.map
