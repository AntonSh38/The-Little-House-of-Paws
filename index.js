import{a as g,b as N,i as b,S,N as x,P as k,K as I,R as P}from"./assets/vendor-DvvmSQtX.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();async function T(){return(await g.get("https://paw-hut.b.goit.study/api/categories")).data}async function M(e,s,t){return(await g.get("https://paw-hut.b.goit.study/api/animals",{params:{page:e,limit:s,categoryId:t}})).data}const D=document.querySelector(".pets-card-list");D.addEventListener("click",e=>{if(e.target.nodeName!=="BUTTON")return;const s=e.target.closest(".pets-card-items"),t=JSON.parse(decodeURIComponent(s.getAttribute("data-animal"))),r=N.create(`
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
  `,{closable:!0,onShow:a=>{a.element().querySelector(".modal-pet-btn-close").addEventListener("click",()=>a.close()),document.body.style.overflow="hidden",document.addEventListener("keydown",o),a.element().querySelector(".modal-pet-btn").addEventListener("click",()=>{a.close();const p=document.querySelector(".backdrop-order");p.style.display="flex",document.body.classList.add("modal-open"),p.querySelector(".modal-form")})},onClose:()=>{document.body.style.overflow="",document.removeEventListener("keydown",o)}});function o(a){a.key==="Escape"&&r.close()}r.show()});const $=document.querySelector(".loader");function q(){$.classList.remove("is-hidden")}function A(){$.classList.add("is-hidden")}const j=document.querySelector(".pets-nav"),C=document.querySelector(".pets-card-list"),f=document.querySelector(".pets-btn-more");let y=1,R=window.innerWidth<1440?8:9,O=null,H=0;_();w();j.addEventListener("click",e=>{if(e.target.nodeName==="LI"){for(const s of e.target.parentElement.children)s.classList.remove("active");e.target.classList.add("active"),O=e.target.getAttribute("data-id"),C.innerHTML="",y=1,w()}});f.addEventListener("click",()=>{y+=1,w(),f.blur()});async function _(){try{const s=(await T()).map(t=>`<li class="pets-nav-item" data-id="${t._id}">${t.name}</li>`).join("");j.insertAdjacentHTML("beforeend",s)}catch{b.error({title:"",message:"Наші пухнастики сперечаються, хто буде в якій категорії 😸. Повернемо їх незабаром!",position:"topRight"})}}async function w(){try{q();const e=await M(y,R,O);V(e.animals),H=e.totalItems,F()}catch{b.error({title:"",message:"Ой! Наші пухнастики сховалися 🐾. Спробуйте оновити сторінку або поверніться пізніше.",position:"topRight"})}finally{A()}}function F(){H<=y*R?f.classList.add("hide-pets-btn"):f.classList.remove("hide-pets-btn")}function V(e){const s=e.map(t=>`
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
      `).join("");C.insertAdjacentHTML("beforeend",s)}const z=[{id:1,imageUrl:"./about/mobile-photo/about-mob-p1-1x.jpg",text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:"./about/mobile-photo/about-mob-p2-1x.jpg",text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:"./about/mobile-photo/about-mob-p3-1x.jpg",text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:"./about/mobile-photo/about-mob-p4-1x.jpg",text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:"./about/mobile-photo/about-mob-p5-1x.jpg",text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],K=z.map(({id:e,text:s,imageUrl:t})=>`
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
        <p class="about-id">${s}</p>
      </div>
    </div> 
 `);document.querySelector(".swiper-wrapper").innerHTML=K.join("");new S(".about-js",{modules:[x,k,I],loop:!1,slidesPerView:1,spaceBetween:30,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},wrapperClass:"swiper-wrapper-about",slideClass:"about-slide",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination-about",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach(s=>{const t=s.querySelector(".accordion-title"),r=s.querySelector("svg use"),o=s.nextElementSibling,a=[t,s.querySelector("svg")];o.style.maxHeight=null,a.forEach(n=>{n.addEventListener("click",()=>{const p=o.style.maxHeight&&o.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(u=>{u.style.maxHeight=null}),e.forEach(u=>{const c=u.querySelector("svg use");c&&c.setAttribute("href","./icon/sprite.svg#icon-icon-add"),u.classList.remove("open")}),p||(o.style.maxHeight=o.scrollHeight+"px",r&&r.setAttribute("href","./icon/sprite.svg#icon-icon-close"),s.classList.add("open"))})})})});const Y="https://paw-hut.b.goit.study/api";g.defaults.baseURL=Y;async function J(){var e;try{const{data:s}=await g.get("/feedbacks",{params:{page:1,limit:15}});return s}catch(s){if(s.response){const t=((e=s.response.data)==null?void 0:e.message)||`Помилка сервера: ${s.response.status}`;throw new Error(t)}else throw s.request?new Error("Не вдалося з'єднатися з сервером. Перевірте інтернет-з'єднання"):new Error("Помилка при відправці запиту")}}const W=document.querySelector(".swiper-wrapper-story");let E=null;function G(e){const s=e.map(({rate:t,description:r,author:o})=>`<div class="swiper-slide swiper-slide-story" role="listitem">
                <div class="story-card">
                   <div class="story-rating" data-rate="${t}"></div>
                  <p class="story-review">${r}</p>
                  <p class="story-author">${o}</p>
                </div>
              </div>`).join("");W.innerHTML=s}function Q(){const e=document.querySelectorAll(".story-rating");!e||e.length===0||e.forEach(s=>{if(s.classList.contains("jq-ry-container"))return;const t=s.dataset.rate;let r=Number(String(t).replace(",","."));Number.isNaN(r)&&(r=0),r<0&&(r=0),r>5&&(r=5);try{new P(s,{rating:r,starWidth:"21px",halfStar:!0,precision:2,readOnly:!0,normalFill:"#E0E0E0",ratedFill:"#c3b49d",spacing:"6px"}),s.setAttribute("role","img"),s.setAttribute("aria-label",`Рейтинг ${r} з 5`)}catch(o){console.error("❌ RateYo init failed",s,o)}})}function X(){return E=new S(".swiper-story",{modules:[x,k],slidesPerView:1,spaceBetween:32,wrapperClass:"swiper-wrapper-story",slideClass:"swiper-slide-story",navigation:{nextEl:".story-button-next",prevEl:".story-button-prev"},pagination:{el:".swiper-pagination-story",type:"bullets",dynamicBullets:!0,dynamicMainBullets:5},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:2}}}),E}function h(e){b.error({title:"Помилка",message:e,position:"topRight",timeout:5e3,closeOnClick:!0,pauseOnHover:!0,progressBar:!0})}async function Z(){try{q();const e=await J();if(e&&e.feedbacks&&e.feedbacks.length>0){if(e.feedbacks.length<3){h("Недостатньо відгуків для відображення");return}G(e.feedbacks),Q(),X()}else h("Не вдалося завантажити відгуки")}catch{h("Сталася помилка при завантаженні відгуків")}finally{A()}}Z();const U=document.querySelector(".backdrop-order"),ee=document.querySelector(".modal-order-close"),d=document.querySelector(".modal-form");function B(){d.reset(),d.querySelectorAll(".error").forEach(e=>{e.classList.remove("error")})}ee.addEventListener("click",()=>{U.style.display="none",document.body.classList.remove("modal-open"),B()});d.addEventListener("submit",e=>{e.preventDefault();const s=d.querySelector('[name="name"]'),t=d.querySelector('[name="phone"]'),r=d.querySelector('[name="comment"]');s.classList.remove("error"),t.classList.remove("error");const o=s.value.trim(),a=t.value.trim();if(!o||!a){o||s.classList.add("error"),a||t.classList.add("error"),b.error({message:"Будь ласка, заповніть ім'я та номер телефону!",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body});return}console.log("Відправляємо:",{name:o,phone:a,comment:r.value}),B(),U.style.display="none",document.body.classList.remove("modal-open"),b.success({title:"Успіх",message:"Ваша заявка надіслана!",position:"topRight",timeout:3e3,zindex:999999,appendTo:document.body})});d.querySelectorAll("input, textarea").forEach(e=>{e.addEventListener("input",()=>{e.value.trim()&&e.classList.remove("error")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".mobile-menu-btn"),s=document.querySelector(".mobile-menu-close"),t=document.getElementById("mobileMenu"),r=document.querySelector(".header-btn"),o=document.querySelector(".header"),a=document.querySelector('.mobile-nav-btn, .mobile-nav a[href="#pets"]'),n=i=>{if(!i)return!1;const l=getComputedStyle(i).position;return l==="sticky"||l==="fixed"},p=()=>n(o)?o.offsetHeight:0,u=()=>{t&&(t.classList.add("active"),t.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden")},c=()=>{t&&(t.classList.remove("active"),t.setAttribute("aria-hidden","true"),document.body.style.overflow="")},v=i=>{const l=document.getElementById(i);if(!l)return;const m=window.pageYOffset+l.getBoundingClientRect().top-p();window.scrollTo({top:m,behavior:"smooth"})};e==null||e.addEventListener("click",u),s==null||s.addEventListener("click",c),t==null||t.addEventListener("click",i=>{i.target===t&&c()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&(t!=null&&t.classList.contains("active"))&&c()}),r==null||r.addEventListener("click",i=>{i.preventDefault(),v("pets")}),a==null||a.addEventListener("click",i=>{i.preventDefault(),c(),v("pets")}),document.querySelectorAll('a[href^="#"]').forEach(i=>{i.addEventListener("click",l=>{const m=i.getAttribute("href"),L=m==null?void 0:m.slice(1);L&&(l.preventDefault(),c(),v(L))})})});
//# sourceMappingURL=index.js.map
