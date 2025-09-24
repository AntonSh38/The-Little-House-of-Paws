import{a as y,b as E,i as b,S,N as x,P as k,K as I,R as D}from"./assets/vendor-DvvmSQtX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();async function M(){return(await y.get("https://paw-hut.b.goit.study/api/categories")).data}async function P(t,o,e){return(await y.get("https://paw-hut.b.goit.study/api/animals",{params:{page:t,limit:o,categoryId:e}})).data}function _(){const t=document.querySelector(".backdrop-order").innerHTML;E.create(t,{onShow:e=>{const r=e.element(),s=r.querySelector(".modal-form");r.querySelector(".modal-order-close").addEventListener("click",()=>e.close());function l(i){i.key==="Escape"&&e.close()}document.body.style.overflow="hidden",document.addEventListener("keydown",l),e.element().addEventListener("basiclightbox:close",()=>{document.body.style.overflow="",document.removeEventListener("keydown",l)}),s.addEventListener("submit",async i=>{i.preventDefault();const d=s.querySelector('[name="name"]'),c=s.querySelector('[name="phone"]'),m=s.querySelector('[name="comment"]');d.classList.remove("error"),c.classList.remove("error");const n=d.value.trim(),p=c.value.trim();if(m.value.trim(),!n||!p){n||d.classList.add("error"),p||c.classList.add("error"),b.error({message:"Будь ласка, заповніть ім'я та номер телефону!",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body});return}const{name:u,phone:g,comment:B}=i.target.elements,U={name:u.value,phone:g.value,comment:B.value};try{const T=(await axios.post("https://paw-hut.b.goit.study/api/orders",U)).data;console.log("orderData :>>",T),i.target.reset()}catch{}s.reset(),b.success({title:"Успіх",message:"Ваша заявка надіслана!",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body}),e.close()}),s.querySelectorAll("input, textarea").forEach(i=>{i.addEventListener("input",()=>{i.value.trim()&&i.classList.remove("error")})})},onClose:()=>{document.body.style.overflow=""}}).show()}const V=document.querySelector(".pets-card-list");V.addEventListener("click",t=>{if(t.target.nodeName!=="BUTTON")return;const o=t.target.closest(".pets-card-items"),e=JSON.parse(decodeURIComponent(o.getAttribute("data-animal"))),r=E.create(`
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
  `,{closable:!0,onShow:a=>{a.element().querySelector(".modal-pet-btn-close").addEventListener("click",()=>a.close()),document.body.style.overflow="hidden",document.addEventListener("keydown",s),a.element().querySelector(".modal-pet-btn").addEventListener("click",()=>{a.close(),_()})},onClose:()=>{document.body.style.overflow="",document.removeEventListener("keydown",s)}});function s(a){a.key==="Escape"&&r.close()}r.show()});const $=document.querySelector(".loader");function q(){$.classList.remove("is-hidden")}function A(){$.classList.add("is-hidden")}const C=document.querySelector(".pets-nav"),j=document.querySelector(".pets-card-list"),f=document.querySelector(".pets-btn-more");let v=1,O=window.innerWidth<1440?8:9,R=null,H=0;F();w();C.addEventListener("click",t=>{if(t.target.nodeName==="LI"){for(const o of t.target.parentElement.children)o.classList.remove("active");t.target.classList.add("active"),R=t.target.getAttribute("data-id"),j.innerHTML="",v=1,w()}});f.addEventListener("click",()=>{v+=1,w(),f.blur()});async function F(){try{const o=(await M()).map(e=>`<li class="pets-nav-item" data-id="${e._id}">${e.name}</li>`).join("");C.insertAdjacentHTML("beforeend",o)}catch{b.error({title:"",message:"Наші пухнастики сперечаються, хто буде в якій категорії 😸. Повернемо їх незабаром!",position:"topRight"})}}async function w(){try{q();const t=await P(v,O,R);K(t.animals),H=t.totalItems,z()}catch{b.error({title:"",message:"Ой! Наші пухнастики сховалися 🐾. Спробуйте оновити сторінку або поверніться пізніше.",position:"topRight"})}finally{A()}}function z(){H<=v*O?f.classList.add("hide-pets-btn"):f.classList.remove("hide-pets-btn")}function K(t){const o=t.map(e=>`
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
      `).join("");j.insertAdjacentHTML("beforeend",o)}const Y=[{id:1,imageUrl:"./about/mobile-photo/about-mob-p1-1x.jpg",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:"./about/mobile-photo/about-mob-p2-1x.jpg",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:"./about/mobile-photo/about-mob-p3-1x.jpg",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:"./about/mobile-photo/about-mob-p4-1x.jpg",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:"./about/mobile-photo/about-mob-p5-1x.jpg",text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],J=Y.map(({id:t,text:o,imageUrl:e})=>`
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
 `);document.querySelector(".swiper-wrapper").innerHTML=J.join("");new S(".about-js",{modules:[x,k,I],loop:!1,slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},wrapperClass:"swiper-wrapper-about",slideClass:"about-slide",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination-about",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelectorAll(".accordion-item");t.forEach(o=>{const e=o.querySelector(".accordion-title"),r=o.querySelector("svg use"),s=o.nextElementSibling,a=[e,o.querySelector("svg")];s.style.maxHeight=null,a.forEach(l=>{l.addEventListener("click",()=>{const i=s.style.maxHeight&&s.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(d=>{d.style.maxHeight=null}),t.forEach(d=>{const c=d.querySelector("svg use");c&&c.setAttribute("href","./icon/sprite.svg#icon-icon-add"),d.classList.remove("open")}),i||(s.style.maxHeight=s.scrollHeight+"px",r&&r.setAttribute("href","./icon/sprite.svg#icon-icon-close"),o.classList.add("open"))})})})});const W="https://paw-hut.b.goit.study/api";y.defaults.baseURL=W;async function G(){var t;try{const{data:o}=await y.get("/feedbacks",{params:{page:1,limit:15}});return o}catch(o){if(o.response){const e=((t=o.response.data)==null?void 0:t.message)||`Помилка сервера: ${o.response.status}`;throw new Error(e)}else throw o.request?new Error("Не вдалося з'єднатися з сервером. Перевірте інтернет-з'єднання"):new Error("Помилка при відправці запиту")}}const Q=document.querySelector(".swiper-wrapper-story");let L=null;function X(t){const o=t.map(({rate:e,description:r,author:s})=>`<div class="swiper-slide swiper-slide-story" role="listitem">
                <div class="story-card">
                   <div class="story-rating" data-rate="${e}"></div>
                  <p class="story-review">${r}</p>
                  <p class="story-author">${s}</p>
                </div>
              </div>`).join("");Q.innerHTML=o}function Z(){const t=document.querySelectorAll(".story-rating");!t||t.length===0||t.forEach(o=>{if(o.classList.contains("jq-ry-container"))return;const e=o.dataset.rate;let r=Number(String(e).replace(",","."));Number.isNaN(r)&&(r=0),r<0&&(r=0),r>5&&(r=5);try{new D(o,{rating:r,starWidth:"21px",halfStar:!0,precision:2,readOnly:!0,normalFill:"#E0E0E0",ratedFill:"#c3b49d",spacing:"6px"}),o.setAttribute("role","img"),o.setAttribute("aria-label",`Рейтинг ${r} з 5`)}catch(s){console.error("❌ RateYo init failed",o,s)}})}function ee(){return L=new S(".swiper-story",{modules:[x,k],slidesPerView:1,spaceBetween:32,wrapperClass:"swiper-wrapper-story",slideClass:"swiper-slide-story",navigation:{nextEl:".story-button-next",prevEl:".story-button-prev"},pagination:{el:".swiper-pagination-story",type:"bullets",dynamicBullets:!0,dynamicMainBullets:4},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:2}}}),L}function h(t){b.error({title:"Помилка",message:t,position:"topRight",timeout:5e3,closeOnClick:!0,pauseOnHover:!0,progressBar:!0})}async function te(){try{q();const t=await G();if(t&&t.feedbacks&&t.feedbacks.length>0){if(t.feedbacks.length<3){h("Недостатньо відгуків для відображення");return}X(t.feedbacks),Z(),ee()}else h("Не вдалося завантажити відгуки")}catch{h("Сталася помилка при завантаженні відгуків")}finally{A()}}te();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".mobile-menu-btn"),o=document.querySelector(".mobile-menu-close"),e=document.getElementById("mobileMenu"),r=document.querySelector(".header-btn"),s=document.querySelector(".header"),a=document.querySelector('.mobile-nav-btn, .mobile-nav a[href="#pets"]'),l=n=>{if(!n)return!1;const p=getComputedStyle(n).position;return p==="sticky"||p==="fixed"},i=()=>l(s)?s.offsetHeight:0,d=()=>{e&&(e.classList.add("active"),e.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden")},c=()=>{e&&(e.classList.remove("active"),e.setAttribute("aria-hidden","true"),document.body.style.overflow="")},m=n=>{const p=document.getElementById(n);if(!p)return;const u=window.pageYOffset+p.getBoundingClientRect().top-i();window.scrollTo({top:u,behavior:"smooth"})};t==null||t.addEventListener("click",d),o==null||o.addEventListener("click",c),e==null||e.addEventListener("click",n=>{n.target===e&&c()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(e!=null&&e.classList.contains("active"))&&c()}),r==null||r.addEventListener("click",n=>{n.preventDefault(),m("pets")}),a==null||a.addEventListener("click",n=>{n.preventDefault(),c(),m("pets")}),document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",p=>{const u=n.getAttribute("href"),g=u==null?void 0:u.slice(1);g&&(p.preventDefault(),c(),m(g))})})});
//# sourceMappingURL=index.js.map
