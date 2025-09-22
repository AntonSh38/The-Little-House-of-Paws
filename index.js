import{a as l,S as f,N as x,P as y}from"./assets/vendor-Cv3ODtzV.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();async function v(){return(await l.get("https://paw-hut.b.goit.study/api/categories")).data}async function $(e,s,t){return(await l.get("https://paw-hut.b.goit.study/api/animals",{params:{page:e,limit:s,categoryId:t}})).data}const m=document.querySelector(".pets-nav"),g=document.querySelector(".pets-card-list"),L=document.querySelector(".pets-btn-more");let p=1,w=8,b=null;v().then(e=>{console.log(e);const s=e.map(t=>`<li class="pets-nav-item" data-id="${t._id}">${t.name}</li>`).join("");m.insertAdjacentHTML("beforeend",s)});m.addEventListener("click",e=>{if(e.target.nodeName==="LI"){for(const s of e.target.parentElement.children)s.classList.remove("active");e.target.classList.add("active"),b=e.target.getAttribute("data-id"),g.innerHTML="",p=1,d()}});d();L.addEventListener("click",()=>{p+=1,d()});function d(){$(p,w,b).then(e=>{E(e.animals),e.total})}function E(e){const s=e.map(t=>`
        <li class="pets-card-items">
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
      `).join("");g.insertAdjacentHTML("beforeend",s)}const a="/project_team_js2",j=[{id:1,imageUrl:`${a}/src/img/about/mobile-photo/mobile1x-photo1.jpg`,text:"Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили."},{id:2,imageUrl:`${a}/src/img/about/mobile-photo/mobile1x-photo2.jpg`,text:'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.'},{id:3,imageUrl:`${a}/src/img/about/mobile-photo/mobile1x-photo3.jpg`,text:'"Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.'},{id:4,imageUrl:`${a}/src/img/about/mobile-photo/mobile1x-photo4.jpg`,text:"Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках."},{id:5,imageUrl:`${a}/src/img/about/mobile-photo/mobile1x-photo5.jpg`,text:"Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин."}],S=j.map(({id:e,text:s,imageUrl:t})=>`
   <div class="swiper-slide about-slide">
    <picture>
      <!-- десктоп -->
      <source media="(min-width: 1440px)" srcset="${a}/src/img/about/desktop-photo/desktop1x-photo${e}.jpg 1x,
      ${a}/src/img/about/desktop-photo/desktop2x-photo${e}.jpg 2x">
      <!-- планшет -->
      <source media="(min-width: 768px)" srcset="${a}/src/img/about/tablet-photo/tablet1x-photo${e}.jpg 1x,
      ${a}/src/img/about/tablet-photo/tablet2x-photo${e}.jpg 2x">
      <!-- мобілка -->
      <source media="(min-width: 320px)" srcset="${a}/src/img/about/mobile-photo/mobile1x-photo${e}.jpg 1x,
       ${a}/src/img/about/mobile-photo/mobile2x-photo${e}.jpg 2x">
      <img src="${t}" alt="about" class="about-img"></img>;
    </picture>
    <div class="about-overlay qwe">
      <p class="about-id">${s}</p>
    </div>
  </div>  
  `);document.querySelector(".swiper-wrapper").innerHTML=S.join("");new f(".swiper",{modules:[x,y],loop:!1,slidesPerView:1,spaceBetween:30,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".accordion-item");e.forEach(s=>{const t=s.querySelector(".accordion-title"),r=s.querySelector("svg use"),o=s.nextElementSibling,i=[t,s.querySelector("svg")];o.style.maxHeight=null,i.forEach(n=>{n.addEventListener("click",()=>{const h=o.style.maxHeight&&o.style.maxHeight!=="0px";document.querySelectorAll(".accordion-content").forEach(c=>{c.style.maxHeight=null}),e.forEach(c=>{const u=c.querySelector("svg use");u&&u.setAttribute("href","./img/sprite.svg#icon-icon-add"),c.classList.remove("open")}),h||(o.style.maxHeight=o.scrollHeight+"px",r&&r.setAttribute("href","./img/sprite.svg#icon-icon-close"),s.classList.add("open"))})})})});const A="https://paw-hut.b.goit.study/api";l.defaults.baseURL=A;async function q(e,s){try{const{data:t}=await l.get("/feedbacks",{params:{page:1,limit:15}});return t}catch(t){console.error(t)}}q();
//# sourceMappingURL=index.js.map
