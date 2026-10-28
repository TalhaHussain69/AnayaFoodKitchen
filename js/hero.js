/* Hero background slider: crossfade, Ken Burns, progress dots, swipe, golden dust */
(function(){
'use strict';
var bg=document.getElementById('hero-bg');if(!bg)return;
var slides=[].slice.call(bg.querySelectorAll('.hero-slide')),dotsBox=document.getElementById('hero-dots'),dust=document.getElementById('hero-dust');
var DUR=6500,cur=0,timer=null,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
bg.style.setProperty('--dur',DUR+'ms');dotsBox.style.setProperty('--dur',DUR+'ms');
var dots=slides.map(function(_,i){var b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.setAttribute('aria-label','Slide '+(i+1));b.addEventListener('click',function(){go(i,true)});dotsBox.appendChild(b);return b});
function go(i,user){i=(i+slides.length)%slides.length;
 slides.forEach(function(s,k){s.classList.toggle('is-active',k===i)});
 dots.forEach(function(d,k){d.classList.remove('is-active');d.setAttribute('aria-selected',k===i);if(k===i){void d.offsetWidth;d.classList.add('is-active')}});
 bg.dataset.active=slides[i].dataset.slide;cur=i;schedule()}
function schedule(){clearTimeout(timer);timer=setTimeout(function(){document.hidden?schedule():go(cur+1)},DUR)}
document.addEventListener('visibilitychange',function(){if(!document.hidden)go(cur)});
/* swipe */
var sx=null;bg.parentNode.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
bg.parentNode.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>50)go(cur+(dx<0?1:-1),true)},{passive:true});
/* dust */
if(!reduce){var n=window.innerWidth<700?10:18,h='';for(var k=0;k<n;k++){var s=3+Math.random()*6;h+='<i style="left:'+(Math.random()*100).toFixed(1)+'%;width:'+s.toFixed(1)+'px;height:'+s.toFixed(1)+'px;animation-duration:'+(9+Math.random()*9).toFixed(1)+'s;animation-delay:-'+(Math.random()*14).toFixed(1)+'s;--dx:'+((Math.random()*80-40)).toFixed(0)+'px"></i>'}dust.innerHTML=h}
go(0);
})();

/* Hero (mobile): tell the CSS how tall the artwork area can be = where the copy block begins */
(function(){
'use strict';
var sc=document.getElementById('home-hero'),col=document.getElementById('hero-text-content');if(!sc||!col)return;
function fit(){var top=col.getBoundingClientRect().top-sc.getBoundingClientRect().top;sc.style.setProperty('--art-h',Math.max(240,Math.round(top+56))+'px')}
fit();window.addEventListener('resize',fit);window.addEventListener('orientationchange',fit);
if(window.ResizeObserver)new ResizeObserver(fit).observe(col);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
})();
