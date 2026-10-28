(function(){
'use strict';
var P=window.ANAYA_PRODUCTS||[],INFO=window.ANAYA_PRODUCT_INFO||{},WA='https://wa.me/923267735000';
var T={en:{title:'Our Products',sub:'Our signature masalay, ground fresh and packed with care.',more:'More Products',less:'Show Less',allEyebrow:'Complete Collection',allTitle:'All Our Masalay',allSub:'Every Anaya masala and spice, all in one place.',ph:'Search, e.g. Biryani, Mirch…',clear:'Clear search',count:'Showing {n} of {t} products',none:'No products found',noneSub:'Try another name, or clear the search to see everything.',backTop:'Back to top products',explore:'Explore',order:'Order',steps:'Cooking Method',box:'On the Box',drag:'Drag to rotate',views:['Front','Back','Left','Right','Top'],ordertxt:'Order on WhatsApp',mfg:'Manufactured by',asOnBox:'Exactly as printed on the pack',noText:'Tap the image to zoom in. The full method is printed on the back of the pack.',zoom:'Tap to zoom',noText2:'Tap the image to zoom in and see the pack clearly.',specs:'Specifications',uses:'Uses',hSpecs:'Product Details',hUses:'Where to Use',tipL:'Tip',packBox:'Box pack',packPouch:'Pouch pack',chips:['100% Natural','Pure & Safe','Hygienically Packed','PFA Licensed'],sp:{form:'Form',pack:'Pack',weight:'Net weight',ingredient:'Ingredient',flavour:'Flavour',colour:'Colour',quality:'Quality',storage:'Storage'},qual:'100% natural, pure & safe',store:'Cool, dry place, away from direct sunlight'},
ur:{title:'ہماری مصنوعات',sub:'ہمارے خاص مصالحے، تازہ پسے ہوئے اور محبت سے پیک کیے گئے۔',more:'مزید مصنوعات',less:'کم دکھائیں',allEyebrow:'مکمل کلیکشن',allTitle:'ہمارے تمام مصالحے',allSub:'عنایہ کے تمام مصالحے اور مسالے ایک ہی جگہ۔',ph:'تلاش کریں، مثلاً بریانی، مرچ…',clear:'تلاش صاف کریں',count:'{t} میں سے {n} مصنوعات',none:'کوئی پروڈکٹ نہیں ملی',noneSub:'کوئی اور نام لکھیں، یا تلاش صاف کر کے سب دیکھیں۔',backTop:'اوپر مصنوعات پر واپس',explore:'تفصیل',order:'آرڈر',steps:'بنانے کا طریقہ',box:'پیک پر',drag:'گھمانے کے لیے ڈریگ کریں',views:['سامنے','پیچھے','بایاں','دایاں','اوپر'],ordertxt:'واٹس ایپ پر آرڈر کریں',mfg:'تیار کردہ',asOnBox:'بالکل ویسا ہی جیسا پیک پر لکھا ہے',noText:'تصویر پر ٹیپ کر کے بڑا کریں۔ پورا طریقہ پیک کے پچھلے حصے پر درج ہے۔',zoom:'بڑا کرنے کے لیے ٹیپ کریں',noText2:'پیک کو غور سے دیکھنے کے لیے تصویر پر ٹیپ کریں۔',specs:'خصوصیات',uses:'استعمال',hSpecs:'پروڈکٹ کی تفصیل',hUses:'کہاں استعمال کریں',tipL:'مشورہ',packBox:'ڈبہ پیک',packPouch:'پاؤچ پیک',chips:['100٪ قدرتی','خالص اور محفوظ','صاف ستھری پیکنگ','پی ایف اے لائسنس یافتہ'],sp:{form:'شکل',pack:'پیکنگ',weight:'خالص وزن',ingredient:'جزو',flavour:'ذائقہ',colour:'رنگ',quality:'معیار',storage:'محفوظ کرنے کا طریقہ'},qual:'100٪ قدرتی، خالص اور محفوظ',store:'ٹھنڈی خشک جگہ پر، براہِ راست دھوپ سے دور'}};
var R={"qorma": {"sec": [{"h": "Steps of Cooking", "ol": ["Heat oil fry, onions until light golden, remove and crush.", "In the same oil, add meat, yogurt and <b>Anaya Qorma Masala.</b> Cover and cook on low heat for 20-30 minutes", "Add julienne ginger and ½-1 cup water for gravy Cover and cook on low heat until meat is tender.", "Stir-in crushed onions Cover and cook on low heat for 5-10 minutes"], "p": "Remove excessive oil before serving"}, {"h": "Tips", "p": "Yogurt should not be sour. Do not use over browned fried onions."}, {"h": "Meat", "p": "Use ribs, saddle chops &amp; shoulder cut"}, {"h": "How to Fry Onions", "p": "In a small deep pan heat oil and add sliced onions. Stir fry on high heat until onions turn transparent. Reduce heat to low and continue frying until onions are light golden. Stir constantly. Remove fried onions from oil and spread on absorbent paper. Allow to cool and when crisp, crush it coarsely with a rolling pin. <b>Do not grind it into paste.</b> Use same oil for cooking."}]}, "biryani": {"sec": [{"h": "Steps of Cooking", "ol": ["Heat oil and fry, onions until light golden, Add meat, <b>Anaya Biryani</b> and stir fry for 5 minutes. Add yogurt and water (Beef/Lamb 4 cups. Chicken 2 cups. Cover and cook on low heat until meat is tender.", "Add tomatoes and stir fry on high heat until oil begins to separate from the gravy. Then keep aside.", "<b>Separately;</b> In 15 cups / 3 liters of boiling water, stir in 3 tablespoons of Anaya Salt and soaked rice. Boil rice until ¾ cooked. Remove and drain thoroughly", "Spread half rice in a pot and pour meat curry. Top with remaining rice. (Sprinkle a pinch of yellow food colour if desired). Spread fresh corianer and mint leaves on the rice. Cover and cook on low heat until rice is tender (5-10 minutes). Mix before serving."]}]}, "karahi": {"sec": [{"h": "Steps of Cooking", "ol": ["Mix garlic, ginger paste and <b>Anaya Karahi Mix.</b> Apply to meat and marinate (for: Chicken 15 minutes, Goat / Lamb / Beef 1-2 hours + ).", "Heat 1 cup oil and stir fry meat on high heat for 5 - 6 minutes. Add julienne ginger. Cover and cook on low heat until meat is tender (Chicken 10 minutes, Goat/ Lamb/ Beef 45 minutes).", "<b>Separately</b> heat ½ cup oil and add tomatoes. Cook on low heat until soft ( 5 - 6 minutes ). Stir periodically", "Add cooked tomatoes and green chilies to the cooked meat. on medium heat stir - fry meat until oil separates from masala. Stir constantly. if desired remove excessive oil Add fresh coriander and better. Stir fry and serve with hot naans."]}]}, "fish": {"sec": [{"h": "Steps of Cooking", "ol": ["Mix garlic paste, <b>Anaya Fish Masala</b> and one tablespoon oil. Apply on the fish, Set aside for 2-3 hours.", "Fry fish in hot oil until lightly golden. Enjoy tasty, Fish with Anaya Chaat Masala and lime juice."]}, {"h": "Fish / Prawn Curry", "ol": ["Fry onions in hot oil until golden. Add (curry leaves), garlic paste, tomatoes and <b>Anaya Fish Masala.</b> Stir fry for few minutes.", "Add fish / prawns stir fry for 5 minutes. Add 1/2-1 cup water if desired. Simmer on low heat until fish is tender."]}, {"h": "Batter Fried Fish", "ol": ["Follow step No. 1 Fried Fish", "In one cup gram flour add one egg and enough water to make a smooth/thin paste. Dip the fish and deep fry until golden."]}]}, "achar": {"sec": [{"h": "Steps of Cooking", "ol": ["Mix 2 tablespoons of <b>Anaya Achar Gosht Masala</b> with lemon juice and fill the green chilies.", "In hot oil add meat, garlic, ginger, yogurt and remaining <b>Anaya Achar Gosht Masala.</b> Stir fry on high heat for 7-10 minutes.", "Add 2-3 cups of water. Cover and cook on low heat until meat is tender.", "Add tomato puree, Stir fry for 5-6 minutes on high heat and place green chilies over the meat. Cover and cook on low heat until oil separates from gravy."], "p": "If desired remove excessive oil before serving."}, {"h": "Tips", "p": "For meat, use cuts from shoulder and T-bone."}]}};
var grid=document.getElementById('products-grid'),allGrid=document.getElementById('all-products-grid'),allSec=document.getElementById('all-products'),moreBtn=document.getElementById('more-products-btn'),search=document.getElementById('product-search'),clearBtn=document.getElementById('search-clear'),countEl=document.getElementById('search-count'),FEATURED=8,root=document.documentElement,cur=null,rx=0,ry=0,auto=true;
function L(){return root.lang==='ur'?'ur':'en'}
function $(s,c){return (c||document).querySelector(s)}
function box3d(p){var m=p.model,u=function(f){return 'background-image:url('+m[f]+')'};
 return '<div class="b3d" style="--r:'+(m.h/300).toFixed(4)+';--dr:'+(m.d/300).toFixed(4)+'"><div class="b3d-fl"><div class="b3d-sway"><div class="b3d-box"><i class="f" style="'+u('front')+'"></i><i class="r" style="'+u('right')+'"></i><i class="l" style="'+u('left')+'"></i><i class="t" style="'+u('top')+'"></i><i class="bt"></i></div></div></div><span class="b3d-sh"></span></div>'}
function card(p,i,l,t){var n=l==='ur'?p.nameUrdu:p.name,g=l==='ur'?p.taglineUrdu:p.tagline,pop=p.popup!==false;
  var ord='<a class="p-btn order" target="_blank" rel="noopener" href="'+WA+'?text='+encodeURIComponent('Assalam o Alaikum, I want to order '+p.name)+'">'+t.order+'</a>';
  return '<article class="p-card" style="--c:'+p.color+';--d:'+Math.min(i,12)+'"><div class="p-media'+(p.model&&p.model.type==='box'?' has3d" role="img" aria-label="'+p.name+'">'+box3d(p):'"><img src="'+p.img.front+'" alt="'+p.name+'" loading="lazy">')+'</div><div class="p-body"><h3>'+n+'</h3><p>'+g+'</p><div class="p-actions'+(pop?'':' single')+'">'+(pop?'<button class="p-btn explore" data-id="'+p.id+'">'+t.explore+'</button>':'')+ord+'</div></div></article>'}
var KW={'red-chilli':'lal mirch chili chilli cayenne','turmeric':'haldi','kali-mirch':'black pepper','kasuri-methi':'methi fenugreek','adrak':'ginger','lehsan':'garlic','dhania':'coriander dhaniya','fish':'machli machhli','achar':'pickle','qorma':'korma','karahi':'kadhai','chaat':'chat'};
function norm(x){return String(x||'').toLowerCase().replace(/[\u064B-\u065F\u0670]/g,'').trim()}
function matches(p,q){if(!q)return true;var h=norm(p.name+' '+p.nameUrdu+' '+p.tagline+' '+p.taglineUrdu+' '+p.id.replace(/-/g,' ')+' '+(KW[p.id]||''));return q.split(/\s+/).every(function(w){return h.indexOf(w)>-1})}
function renderAll(){var l=L(),t=T[l],q=norm(search.value),list=P.filter(function(p){return matches(p,q)});
 allGrid.innerHTML=list.length?list.map(function(p,i){return card(p,i,l,t)}).join(''):'<div class="p-empty"><svg viewBox="0 0 64 64" width="72" height="72" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><circle cx="28" cy="28" r="16"/><path d="M40 40l14 14"/><path d="M22 28h12" /></svg><h3>'+t.none+'</h3><p>'+t.noneSub+'</p></div>';
 countEl.textContent=t.count.replace('{n}',list.length).replace('{t}',P.length);
 clearBtn.classList.toggle('show',!!search.value);search.placeholder=t.ph;clearBtn.setAttribute('aria-label',t.clear)}
function render(){var l=L(),t=T[l];
 document.querySelectorAll('[data-ps]').forEach(function(e){e.textContent=t[e.dataset.ps]});
 grid.innerHTML=P.slice(0,FEATURED).map(function(p,i){return card(p,i,l,t)}).join('');
 var extra=P.length-FEATURED;moreBtn.querySelector('.more-count').textContent='+'+extra;
 renderAll();
 if(cur&&$('.pm.open'))fill(cur)}
var allOpen=false;
function openAll(){if(allOpen)return;allOpen=true;allSec.hidden=false;allSec.classList.remove('closing');void allSec.offsetWidth;allSec.classList.add('open');moreBtn.setAttribute('aria-expanded','true');moreBtn.classList.add('is-open');renderAll();
 setTimeout(function(){allSec.scrollIntoView({behavior:'smooth',block:'start'})},60)}
function closeAll(){if(!allOpen)return;allOpen=false;moreBtn.setAttribute('aria-expanded','false');moreBtn.classList.remove('is-open');allSec.classList.add('closing');
 document.getElementById('our-products').scrollIntoView({behavior:'smooth',block:'start'});
 setTimeout(function(){allSec.classList.remove('open','closing');allSec.hidden=true},450)}
moreBtn.addEventListener('click',function(){allOpen?closeAll():openAll()});
document.getElementById('all-products-close').addEventListener('click',closeAll);
var st=0;search.addEventListener('input',function(){clearTimeout(st);st=setTimeout(renderAll,120)});
search.addEventListener('keydown',function(e){if(e.key==='Escape'&&search.value){search.value='';renderAll()}});
clearBtn.addEventListener('click',function(){search.value='';renderAll();search.focus()});
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
function faces(p){var m=p.model,i=m||p.img;
 var W=200,H=300,D=55;
 if(m){H=Math.round(m.h*W/300);D=Math.max(10,Math.round(m.d*W/300))}
 cube.style.setProperty('--cw',W+'px');cube.style.setProperty('--ch',H+'px');cube.style.setProperty('--cd',D+'px');
 if(m&&m.type==='pouch'){var n=9,g=D/(n-1),h='';
  for(var k=0;k<n;k++){var z=(k-(n-1)/2)*g,st;
   if(k===n-1)st='class="pl" style="background-image:url('+m.front+');transform:translateZ('+z+'px)"';
   else if(k===0)st='class="pl" style="background-image:url('+m.front+');transform:rotateY(180deg) translateZ('+(-z)+'px)"';
   else st='class="pl m" style="background-image:url('+m.sil+');transform:translateZ('+z+'px)"';
   h+='<i '+st+'></i>'}
  return h}
 return '<i class="f" style="background-image:url('+i.front+')"></i><i class="b" style="background-image:url('+i.back+')"></i><i class="r" style="background-image:url('+i.right+')"></i><i class="l" style="background-image:url('+i.left+')"></i><i class="t" style="background-image:url('+i.top+')"></i><i class="bt"></i>'}
function infoPanes(p,inf,t,l){var k=l==='ur'?1:0,rows=[];
 rows.push(['pack',p.model&&p.model.type==='pouch'?t.packPouch:t.packBox]);
 if(inf.weight)rows.push(['weight',inf.weight[l]]);
 inf.specs.forEach(function(r){rows.push([r[0],r[1+k]])});
 rows.push(['quality',t.qual],['storage',t.store]);
 var ord=['pack','weight','ingredient','form','flavour','colour','quality','storage'];
 rows.sort(function(a,b){return ord.indexOf(a[0])-ord.indexOf(b[0])});
 var chips='<div class="chips">'+t.chips.map(function(c){return '<span class="asbox">'+c+'</span>'}).join('')+'</div>';
 var spec='<section class="sec" style="--i:1"><h4>'+t.hSpecs+'</h4><dl class="spec">'+rows.map(function(r){return '<div><dt>'+t.sp[r[0]]+'</dt><dd>'+r[1]+'</dd></div>'}).join('')+'</dl></section>';
 var n=2,uses='<section class="sec" style="--i:1"><h4>'+t.hUses+'</h4><ul>'+inf.uses.map(function(u){return '<li style="--i:'+(n++)+'"><span>'+u[k]+'</span></li>'}).join('')+'</ul><p class="note"><b>'+t.tipL+':</b> '+inf.tip[k]+'</p></section>';
 return {a:chips+spec,b:uses}}
function fill(p){var l=L(),t=T[l],i=p.model||p.img,r=R[p.id];
 box.style.setProperty('--c',p.color);
 cube.innerHTML=faces(p);
 vb.innerHTML=t.views.map(function(v,k){return '<button data-k="'+k+'">'+v+'</button>'}).join('');
 $('.hint3d',pm).textContent=t.drag;
 var pic='<figure class="boxpic"><img src="'+(i.back||i.front)+'" alt="'+p.name+' box"><figcaption>'+t.zoom+'</figcaption></figure>';
 var stepsPane=r?'<p class="asbox">'+t.asOnBox+'</p>'+secHTML(r.sec,1):'<p class="asbox">'+(p.model?t.noText2:t.noText)+'</p>'+pic;
 var inf=INFO[p.id],def=inf?'steps':((l==='ur'||!r)?'box':'steps'),ip=inf?infoPanes(p,inf,t,l):null;
 if(ip){stepsPane=ip.a;pic=ip.b}
 $('.pm-info',pm).innerHTML='<div class="pm-head"><span class="badge">'+(l==='ur'?p.nameUrdu:p.name)+'</span><h3>'+(l==='ur'?p.nameUrdu:p.name)+'</h3><p class="tag">'+(l==='ur'?p.taglineUrdu:p.tagline)+'</p></div>'
  +'<div class="tabs" data-on="'+def+'"><button data-t="steps">'+(ip?t.specs:t.steps)+'</button><button data-t="box">'+(ip?t.uses:t.box)+'</button><i class="bar"></i></div>'
  +'<div class="pane" data-t="steps">'+stepsPane+'</div><div class="pane" data-t="box">'+pic+'</div>';
 $('.pm-foot',pm).innerHTML='<div class="mfg"><span class="mfg-ic">AF</span><div><small>'+t.mfg+'</small><strong>Anaya Food</strong><em>Vehari Road, Multan, Pakistan</em></div></div><a class="p-btn explore" target="_blank" rel="noopener" href="'+WA+'?text='+encodeURIComponent('Assalam o Alaikum, I want to order '+p.name)+'">'+t.ordertxt+'</a>';
 tab(def)}
function open(id){cur=P.filter(function(p){return p.id===id})[0];if(!cur)return;fill(cur);rx=-8;ry=-25;auto=true;paint();pm.classList.add('open');document.body.style.overflow='hidden';$('.pm-close',pm).focus()}
function close(){if(!pm.classList.contains('open'))return;auto=false;pm.classList.add('closing');setTimeout(function(){pm.classList.remove('open','closing');document.body.style.overflow=''},260)}
pm.addEventListener('click',function(e){var b=e.target.closest('.tabs button');if(b)tab(b.dataset.t);var z=e.target.closest('.boxpic');if(z)z.classList.toggle('zoomed')});
[grid,allGrid].forEach(function(g){g.addEventListener('click',function(e){var b=e.target.closest('.explore');if(b)open(b.dataset.id)});
 g.addEventListener('pointermove',function(e){if(e.pointerType==='touch')return;var c=e.target.closest('.p-card'),b=c&&c.querySelector('.b3d-box');if(!b)return;var r=c.getBoundingClientRect();b.style.setProperty('--ry',(-30+((e.clientX-r.left)/r.width-.5)*80).toFixed(1)+'deg')});
 g.addEventListener('pointerout',function(e){var c=e.target.closest('.p-card');if(c&&!c.contains(e.relatedTarget)){var b=c.querySelector('.b3d-box');if(b)b.style.removeProperty('--ry')}})});
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
