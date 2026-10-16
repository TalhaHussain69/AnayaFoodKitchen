(function(){
'use strict';
var P=window.ANAYA_PRODUCTS||[],WA='https://wa.me/923257735000';
var T={en:{title:'Our Products',sub:'Six signature masalay, ground fresh and packed with care.',explore:'Explore',order:'Order',steps:'Cooking Method',box:'On the Box',drag:'Drag to rotate',views:['Front','Back','Left','Right','Top'],ordertxt:'Order on WhatsApp',mfg:'Manufactured by',asOnBox:'Exactly as printed on the pack',noText:'Tap the image to zoom in. The full method is printed on the back of the pack.',zoom:'Tap to zoom'},
ur:{title:'ہماری مصنوعات',sub:'چھ خاص مصالحے، تازہ پسے ہوئے اور محبت سے پیک کیے گئے۔',explore:'تفصیل',order:'آرڈر',steps:'بنانے کا طریقہ',box:'پیک پر',drag:'گھمانے کے لیے ڈریگ کریں',views:['سامنے','پیچھے','بایاں','دایاں','اوپر'],ordertxt:'واٹس ایپ پر آرڈر کریں',mfg:'تیار کردہ',asOnBox:'بالکل ویسا ہی جیسا پیک پر لکھا ہے',noText:'تصویر پر ٹیپ کر کے بڑا کریں۔ پورا طریقہ پیک کے پچھلے حصے پر درج ہے۔',zoom:'بڑا کرنے کے لیے ٹیپ کریں'}};
var R={"qorma": {"sec": [{"h": "Steps of Cooking", "ol": ["Heat oil fry, onions until light golden, remove and crush.", "In the same oil, add meat, yogurt and <b>Anaya Qorma Masala.</b> Cover and cook on low heat for 20-30 minutes", "Add julienne ginger and ½-1 cup water for gravy Cover and cook on low heat until meat is tender.", "Stir-in crushed onions Cover and cook on low heat for 5-10 minutes"], "p": "Remove excessive oil before serving"}, {"h": "Tips", "p": "Yogurt should not be sour. Do not use over browned fried onions."}, {"h": "Meat", "p": "Use ribs, saddle chops &amp; shoulder cut"}, {"h": "How to Fry Onions", "p": "In a small deep pan heat oil and add sliced onions. Stir fry on high heat until onions turn transparent. Reduce heat to low and continue frying until onions are light golden. Stir constantly. Remove fried onions from oil and spread on absorbent paper. Allow to cool and when crisp, crush it coarsely with a rolling pin. <b>Do not grind it into paste.</b> Use same oil for cooking."}]}, "biryani": {"sec": [{"h": "Steps of Cooking", "ol": ["Heat oil and fry, onions until light golden, Add meat, <b>Anaya Biryani</b> and stir fry for 5 minutes. Add yogurt and water (Beef/Lamb 4 cups. Chicken 2 cups. Cover and cook on low heat until meat is tender.", "Add tomatoes and stir fry on high heat until oil begins to separate from the gravy. Then keep aside.", "<b>Separately;</b> In 15 cups / 3 liters of boiling water, stir in 3 tablespoons of Anaya Salt and soaked rice. Boil rice until ¾ cooked. Remove and drain thoroughly", "Spread half rice in a pot and pour meat curry. Top with remaining rice. (Sprinkle a pinch of yellow food colour if desired). Spread fresh corianer and mint leaves on the rice. Cover and cook on low heat until rice is tender (5-10 minutes). Mix before serving."]}]}, "karahi": {"sec": [{"h": "Steps of Cooking", "ol": ["Mix garlic, ginger paste and <b>Anaya Karahi Mix.</b> Apply to meat and marinate (for: Chicken 15 minutes, Goat / Lamb / Beef 1-2 hours + ).", "Heat 1 cup oil and stir fry meat on high heat for 5 - 6 minutes. Add julienne ginger. Cover and cook on low heat until meat is tender (Chicken 10 minutes, Goat/ Lamb/ Beef 45 minutes).", "<b>Separately</b> heat ½ cup oil and add tomatoes. Cook on low heat until soft ( 5 - 6 minutes ). Stir periodically", "Add cooked tomatoes and green chilies to the cooked meat. on medium heat stir - fry meat until oil separates from masala. Stir constantly. if desired remove excessive oil Add fresh coriander and better. Stir fry and serve with hot naans."]}]}, "fish": {"sec": [{"h": "Steps of Cooking", "ol": ["Mix garlic paste, <b>Anaya Fish Masala</b> and one tablespoon oil. Apply on the fish, Set aside for 2-3 hours.", "Fry fish in hot oil until lightly golden. Enjoy tasty, Fish with Anaya Chaat Masala and lime juice."]}, {"h": "Fish / Prawn Curry", "ol": ["Fry onions in hot oil until golden. Add (curry leaves), garlic paste, tomatoes and <b>Anaya Fish Masala.</b> Stir fry for few minutes.", "Add fish / prawns stir fry for 5 minutes. Add 1/2-1 cup water if desired. Simmer on low heat until fish is tender."]}, {"h": "Batter Fried Fish", "ol": ["Follow step No. 1 Fried Fish", "In one cup gram flour add one egg and enough water to make a smooth/thin paste. Dip the fish and deep fry until golden."]}]}, "achar": {"sec": [{"h": "Steps of Cooking", "ol": ["Mix 2 tablespoons of <b>Anaya Achar Gosht Masala</b> with lemon juice and fill the green chilies.", "In hot oil add meat, garlic, ginger, yogurt and remaining <b>Anaya Achar Gosht Masala.</b> Stir fry on high heat for 7-10 minutes.", "Add 2-3 cups of water. Cover and cook on low heat until meat is tender.", "Add tomato puree, Stir fry for 5-6 minutes on high heat and place green chilies over the meat. Cover and cook on low heat until oil separates from gravy."], "p": "If desired remove excessive oil before serving."}, {"h": "Tips", "p": "For meat, use cuts from shoulder and T-bone."}]}};
var grid=document.getElementById('products-grid'),root=document.documentElement,cur=null,rx=0,ry=0,auto=true;
function L(){return root.lang==='ur'?'ur':'en'}
function $(s,c){return (c||document).querySelector(s)}
function render(){var l=L(),t=T[l];
 document.querySelectorAll('[data-ps]').forEach(function(e){e.textContent=t[e.dataset.ps]});
 grid.innerHTML=P.map(function(p){var n=l==='ur'?p.nameUrdu:p.name,g=l==='ur'?p.taglineUrdu:p.tagline;
  return '<article class="p-card" style="--c:'+p.color+'"><div class="p-media"><img src="'+p.img.front+'" alt="'+p.name+'" loading="lazy"></div><div class="p-body"><h3>'+n+'</h3><p>'+g+'</p><div class="p-actions"><button class="p-btn explore" data-id="'+p.id+'">'+t.explore+'</button><a class="p-btn order" target="_blank" rel="noopener" href="'+WA+'?text='+encodeURIComponent('Assalam o Alaikum, I want to order '+p.name)+'">'+t.order+'</a></div></div></article>'}).join('');
 if(cur&&$('.pm.open'))fill(cur)}
var pm=document.createElement('div');pm.className='pm';pm.setAttribute('role','dialog');pm.setAttribute('aria-modal','true');
pm.innerHTML='<div class="pm-box"><button class="pm-close" aria-label="Close">×</button><div class="pm-view"><i class="glow g1"></i><i class="glow g2"></i><div class="ring"></div><div class="scene3d"><div class="cube"></div></div><div class="vbtns"></div><div class="hint3d"></div></div><div class="pm-side"><div class="pm-info"></div><div class="pm-foot"></div></div></div>';
document.body.appendChild(pm);
var cube=$('.cube',pm),scene=$('.scene3d',pm),vb=$('.vbtns',pm),box=$('.pm-box',pm);
var ANG=[[0,0],[0,180],[0,90],[0,-90],[-90,0]]; /* front, back, left, right, top */
function paint(){cube.style.transform='rotateX('+rx+'deg) rotateY('+ry+'deg)'}
function secHTML(sec,start){var n=start;return sec.map(function(s){var h='<section class="sec" style="--i:'+(n++)+'">'+(s.h?'<h4>'+s.h+'</h4>':'');
  if(s.ol)h+='<ol>'+s.ol.map(function(x){return '<li style="--i:'+(n++)+'"><span>'+x+'</span></li>'}).join('')+'</ol>';
  if(s.p)h+='<p class="note">'+s.p+'</p>';return h+'</section>'}).join('')}
function tab(k){var info=$('.pm-info',pm);info.querySelectorAll('.tabs button').forEach(function(b){b.classList.toggle('on',b.dataset.t===k)});info.querySelector('.tabs').dataset.on=k;info.querySelectorAll('.pane').forEach(function(x){x.classList.remove('show');if(x.dataset.t===k){void x.offsetWidth;x.classList.add('show')}})}
function fill(p){var l=L(),t=T[l],i=p.img,r=R[p.id];
 box.style.setProperty('--c',p.color);
 cube.innerHTML='<i class="f" style="background-image:url('+i.front+')"></i><i class="b" style="background-image:url('+i.back+')"></i><i class="r" style="background-image:url('+i.right+')"></i><i class="l" style="background-image:url('+i.left+')"></i><i class="t" style="background-image:url('+i.top+')"></i><i class="bt"></i>';
 vb.innerHTML=t.views.map(function(v,k){return '<button data-k="'+k+'">'+v+'</button>'}).join('');
 $('.hint3d',pm).textContent=t.drag;
 var pic='<figure class="boxpic"><img src="'+i.back+'" alt="'+p.name+' box"><figcaption>'+t.zoom+'</figcaption></figure>';
 var stepsPane=r?'<p class="asbox">'+t.asOnBox+'</p>'+secHTML(r.sec,1):'<p class="asbox">'+t.noText+'</p>'+pic;
 var def=(l==='ur'||!r)?'box':'steps';
 $('.pm-info',pm).innerHTML='<div class="pm-head"><span class="badge">'+(l==='ur'?p.nameUrdu:p.name)+'</span><h3>'+(l==='ur'?p.nameUrdu:p.name)+'</h3><p class="tag">'+(l==='ur'?p.taglineUrdu:p.tagline)+'</p></div>'
  +'<div class="tabs" data-on="'+def+'"><button data-t="steps">'+t.steps+'</button><button data-t="box">'+t.box+'</button><i class="bar"></i></div>'
  +'<div class="pane" data-t="steps">'+stepsPane+'</div><div class="pane" data-t="box">'+pic+'</div>';
 $('.pm-foot',pm).innerHTML='<div class="mfg"><span class="mfg-ic">AF</span><div><small>'+t.mfg+'</small><strong>Anaya Foods</strong><em>Vehari Road, Multan, Pakistan</em></div></div><a class="p-btn explore" target="_blank" rel="noopener" href="'+WA+'?text='+encodeURIComponent('Assalam o Alaikum, I want to order '+p.name)+'">'+t.ordertxt+'</a>';
 tab(def)}
function open(id){cur=P.filter(function(p){return p.id===id})[0];if(!cur)return;fill(cur);rx=-8;ry=-25;auto=true;paint();pm.classList.add('open');document.body.style.overflow='hidden';$('.pm-close',pm).focus()}
function close(){if(!pm.classList.contains('open'))return;auto=false;pm.classList.add('closing');setTimeout(function(){pm.classList.remove('open','closing');document.body.style.overflow=''},260)}
pm.addEventListener('click',function(e){var b=e.target.closest('.tabs button');if(b)tab(b.dataset.t);var z=e.target.closest('.boxpic');if(z)z.classList.toggle('zoomed')});
grid.addEventListener('click',function(e){var b=e.target.closest('.explore');if(b)open(b.dataset.id)});
pm.addEventListener('click',function(e){if(e.target===pm||e.target.closest('.pm-close'))close()});
window.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
vb.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;auto=false;var a=ANG[b.dataset.k];rx=a[0];ry=a[1];cube.style.transition='transform .7s ease';paint();vb.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b)})});
var drag=false,lx=0,ly=0;
scene.addEventListener('pointerdown',function(e){drag=true;auto=false;lx=e.clientX;ly=e.clientY;cube.style.transition='none';scene.setPointerCapture(e.pointerId)});
scene.addEventListener('pointermove',function(e){if(!drag)return;ry+=(e.clientX-lx)*.6;rx=Math.max(-90,Math.min(90,rx-(e.clientY-ly)*.6));lx=e.clientX;ly=e.clientY;paint()});
scene.addEventListener('pointerup',function(){drag=false});scene.addEventListener('pointercancel',function(){drag=false});
(function spin(){if(auto&&pm.classList.contains('open')){cube.style.transition='none';ry+=.5;paint()}requestAnimationFrame(spin)})();
new MutationObserver(render).observe(root,{attributes:true,attributeFilter:['lang']});
render();
/* nav scroll-spy */
var links=document.querySelectorAll('.nav-link,.mobile-nav-link');
function spy(target){links.forEach(function(a){var h=a.getAttribute('href');a.classList.toggle('active',h===target)});window.dispatchEvent(new Event('resize'))}
var secProd=document.getElementById('our-products');
var secAbout=document.getElementById('about-us');
if(secProd){
 new IntersectionObserver(function(en){if(en[0].isIntersecting)spy('#our-products');else if(window.scrollY<200)spy('#')},{rootMargin:'-35% 0px -35% 0px'}).observe(secProd);
}
if(secAbout){
 new IntersectionObserver(function(en){if(en[0].isIntersecting)spy('#about-us')},{rootMargin:'-35% 0px -35% 0px'}).observe(secAbout);
}
})();
