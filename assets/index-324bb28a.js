(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();window.addEventListener("DOMContentLoaded",()=>{const l=document.querySelector(".go-top");window.addEventListener("scroll",c),l.addEventListener("click",r);function c(){const t=window.pageYOffset,n=document.documentElement.clientHeight;t>n?l.classList.add("go-top--show"):l.classList.remove("go-top--show")}function r(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(r,0))}const i=document.querySelectorAll(".slide-desktop");for(const t of i)t.addEventListener("click",()=>{e(),t.classList.add("active")});function e(){i.forEach(t=>{t.classList.remove("active")})}$(".carousel").carousel({interval:3e3});const o=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),d=document.querySelector(".js-close-menu"),m=document.querySelector("body"),f=()=>{const t=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!t),o.classList.toggle("is-open"),m.classList.toggle("overflow-hidden")};s.addEventListener("click",f),d.addEventListener("click",f);function v(){s.style.display="flex",d.style.display="none"}function y(){s.style.display="none",d.style.display="flex"}s.addEventListener("click",()=>y()),d.addEventListener("click",()=>v()),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(o.classList.remove("is-open"),m.classList.remove("overflow-hidden"),s.setAttribute("aria-expanded",!1))});var p=document.querySelectorAll(".js-open-modal"),a=document.querySelector(".js-overlay-modal"),L=document.querySelectorAll(".js-modal-close");p.forEach(function(t){t.addEventListener("click",function(n){n.preventDefault();var u=this.getAttribute("data-modal"),g=document.querySelector('.modal[data-modal="'+u+'"]');g.classList.add("active"),a.classList.add("active")})}),L.forEach(function(t){t.addEventListener("click",function(n){var u=this.closest(".modal");u.classList.remove("active"),a.classList.remove("active")})}),document.body.addEventListener("keyup",function(t){var n=t.keyCode;n==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),a.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});