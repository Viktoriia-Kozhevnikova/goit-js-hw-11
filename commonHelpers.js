import{i as u,S as p}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="45141895-b62da3b06f4b18f1184207a2c";function d(i){const t=new URLSearchParams({key:m,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${t}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let a;function h(i,t){if(t.innerHTML="",i.hits.length===0){u.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",timeout:3e3,position:"topRight"});return}const o=i.hits.map(s=>`
            <li class="gallery-item-wrapper">
                <a href="${s.largeImageURL}" class="gallery-item">
                    <img src="${s.webformatURL}" alt="${s.tags}" class="img" />
                    <div class="container-properties">
                        <ul class="list-properties">
                            <li class="properties"><p class="text"><strong>Likes</strong> ${s.likes}</p></li>
                            <li class="properties"><p class="text"><strong>Views</strong> ${s.views}</p></li>
                            <li class="properties"><p class="text"><strong>Comments</strong> ${s.comments}</p></li>
                            <li class="properties"><p class="text"><strong>Downloads</strong> ${s.downloads}</p></li>
                        </ul>
                    </div>
                </a>
            </li>
        `).join("");t.innerHTML=o,a?a.refresh():a=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}const g=document.querySelector(".form"),l=document.querySelector(".search"),y=document.querySelector(".btn"),c=document.querySelector(".loader"),L=document.querySelector(".gallery");l.addEventListener("input",S);g.addEventListener("submit",q);function b(){c.style.display="block"}function w(){c.style.display="none"}function S(){y.disabled=l.value.trim()===""}function q(i){i.preventDefault();const t=l.value.trim();if(t===""){iziToast.error({title:"Error",message:"Please enter a search query.",timeout:3e3,position:"topRight"});return}b(),d(t).then(o=>{h(o,L)}).catch(o=>{iziToast.error({title:"Error",message:"An error occurred while fetching images. Please try again!",timeout:3e3,position:"topRight"})}).finally(()=>{w()})}
//# sourceMappingURL=commonHelpers.js.map
