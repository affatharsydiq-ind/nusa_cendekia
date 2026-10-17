document.addEventListener("DOMContentLoaded",()=>{
 const toggle=document.getElementById("menu-toggle"),nav=document.getElementById("nav");
 if(toggle&&nav)toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"✕":"☰";});
 const form=document.getElementById("registration-form"),modal=document.getElementById("success-modal"),close=document.getElementById("modal-close"),err=document.getElementById("form-error");
 if(!form||!modal)return;
 form.addEventListener("submit",e=>{e.preventDefault();if(!form.checkValidity()){err.hidden=false;form.reportValidity();form.querySelector(":invalid")?.focus();return;}err.hidden=true;document.getElementById("reg-number").textContent="NC-2025-"+Math.floor(1000+Math.random()*9000);modal.hidden=false;document.body.style.overflow="hidden";close.focus();});
 form.addEventListener("reset",()=>{err.hidden=true;});
 function dismiss(){modal.hidden=true;document.body.style.overflow="";form.reset();}
 close.addEventListener("click",dismiss);modal.addEventListener("click",e=>{if(e.target===modal)dismiss();});document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.hidden)dismiss();});
});