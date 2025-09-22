import{a as l,S as h,N as y,P as v}from"./assets/vendor-Cv3ODtzV.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();async function x(){return(await l.get("https://paw-hut.b.goit.study/api/categories")).data}async function $(e,s,t){return(await l.get("https://paw-hut.b.goit.study/api/animals",{params:{page:e,limit:s,categoryId:t}})).data}const m=document.querySelector(".pets-nav"),g=document.querySelector(".pets-card-list"),L=document.querySelector(".pets-btn-more");let p=1,w=8,b=null;x().then(e=>{console.log(e);const s=e.map(t=>`<li class="pets-nav-item" data-id="${t._id}">${t.name}</li>`).join("");m.insertAdjacentHTML("beforeend",s)});m.addEventListener("click",e=>{if(e.target.nodeName==="LI"){for(const s of e.target.parentElement.children)s.classList.remove("active");e.target.classList.add("active"),b=e.target.getAttribute("data-id"),g.innerHTML="",p=1,u()}});u();L.addEventListener("click",()=>{p+=1,u()});function u(){$(p,w,b).then(e=>{E(e.animals),e.total})}function E(e){const s=e.map(t=>`
        <li class="pets-card-items">
        <div class="pets-card-top">
        <img src="${t.image}" class="pets-icons" alt="${t.shortDescription}"/>
          <span class="pets-species">${t.species}</span>
          <span class="pets-name">${t.name}</span>
          <ul class="pets-filter-list">
            ${t.categories.map(n=>`<li class="pets-filter-items">${n.name}</li>`).join("")}
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
      `).join("");g.insertAdjacentHTML("beforeend",s)}const a=window.location.hostname.includes("github.io")?"/project_team_js2":"",j=[{id:1,imageUrl:`${a}/img/about/mobile-photo/about-mob-p1-1x.jpg`,text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:`${a}/img/about/mobile-photo/about-mob-p2-1x.jpg`,text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:`${a}/img/about/mobile-photo/about-mob-p3-1x.jpg`,text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:`${a}/img/about/mobile-photo/about-mob-p4-1x.jpg`,text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:`${a}/img/about/mobile-photo/about-mob-p5-1x.jpg`,text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],S=j.map(({id:e,text:s,imageUrl:t})=>`
   <div class="swiper-slide about-slide">
    <picture>
      <!-- десктоп -->
      <source media="(min-width: 1440px)" srcset="${a}/img/about/desktop-photo/abot-desk-p${e}.jpg 1x,
      ${a}/img/about/desktop-photo/abot-desk-p${e}.jpg 2x">
      <!-- планшет -->
      <source media="(min-width: 768px)" srcset="${a}/img/about/tablet-photo/about-tab-p${e}.jpg 1x,
      ${a}/src/img/about/tablet-photo/about-tab-p${e}.jpg 2x">
      <!-- мобілка -->
      <source media="(min-width: 320px)" srcset="${a}/img/about/mobile-photo/about-mob-p${e}.jpg 1x,
       ${a}/img/about/mobile-photo/about-mob-p${e}.jpg 2x">
      <img src="${t}" alt="about" class="about-img"></img>;
    </picture>
    <div class="about-overlay qwe">
      <p class="about-id">${s}</p>
    </div>
  </div>  
  `);document.querySelector(".swiper-wrapper").innerHTML=S.join("");new h(".swiper",{modules:[y,v],loop:!1,slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach(s=>{const t=s.querySelector(".accordion-title"),n=s.querySelector("svg use"),o=s.nextElementSibling,i=[t,s.querySelector("svg")];o.style.maxHeight=null,i.forEach(r=>{r.addEventListener("click",()=>{const f=o.style.maxHeight&&o.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(c=>{c.style.maxHeight=null}),e.forEach(c=>{const d=c.querySelector("svg use");d&&d.setAttribute("href","./img/sprite.svg#icon-icon-add"),c.classList.remove("open")}),f||(o.style.maxHeight=o.scrollHeight+"px",n&&n.setAttribute("href","./img/sprite.svg#icon-icon-close"),s.classList.add("open"))})})})});const A="https://paw-hut.b.goit.study/api";l.defaults.baseURL=A;async function q(e,s){try{const{data:t}=await l.get("/feedbacks",{params:{page:1,limit:15}});return t}catch(t){console.error(t)}}q();
//# sourceMappingURL=index.js.map
