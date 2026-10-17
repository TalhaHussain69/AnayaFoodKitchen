(function () {
  'use strict';

  var WA = 'https://wa.me/923257735000';
  var root = document.documentElement;
  var sec = document.getElementById('why-choose-us');
  if (!sec) return;

  /* ---------- Copy (English / Urdu) ---------- */
  var T = {
    en: {
      title: 'Why Choose Anaya Food',
      sub: 'Pure spices, honest recipes and a kitchen you can trust.',
      f: [
        ['PFA Licensed', 'A licensed kitchen, so you cook with peace of mind.'],
        ['100% Pure Spices', 'Real spices, honestly blended. No shortcuts.'],
        ['Authentic Recipes', 'Pakistani tradition in every blend.'],
        ['Fresh & Easy', 'Aroma locked in, with the method printed on every pack.']
      ],
      revT: 'What Our Customers Say', avgLbl: function (n) { return 'Average rating from ' + n + ' reviews'; }
    },
    ur: {
      title: 'عنایہ فوڈ ہی کیوں؟',
      sub: 'خالص مصالحے، سچی ترکیبیں اور ایک قابلِ بھروسہ کچن۔',
      f: [
        ['پی ایف اے لائسنس یافتہ', 'لائسنس یافتہ کچن، تاکہ آپ بے فکر ہو کر پکائیں۔'],
        ['۱۰۰٪ خالص مصالحے', 'اصلی مصالحے، ایمانداری سے ملائے ہوئے۔'],
        ['مستند ترکیبیں', 'ہر مکسچر میں پاکستانی روایت۔'],
        ['تازہ اور آسان', 'خوشبو محفوظ، اور ہر پیک پر طریقہ درج۔']
      ],
      revT: 'ہمارے گاہک کیا کہتے ہیں', avgLbl: function (n) { return n + ' تبصروں کی اوسط ریٹنگ'; }
    }
  };

  /* ---------- Customer reviews (sample copy: replace with real ones when available) ---------- */
  var REV = [
    { r: 5, n: 'Ayesha Khan', nu: 'عائشہ خان', c: 'Lahore', cu: 'لاہور', p: 'Biryani Masala', pu: 'بریانی مصالحہ',
      en: 'Made biryani for a family dinner and everyone asked for the recipe. The aroma took me straight back to my dadi’s kitchen.',
      ur: 'خاندانی دعوت میں بریانی بنائی تو سب نے ترکیب پوچھی۔ خوشبو مجھے سیدھی دادی کے باورچی خانے میں لے گئی۔' },
    { r: 4, n: 'Hamza Malik', nu: 'حمزہ ملک', c: 'Karachi', cu: 'کراچی', p: 'Karahi Gosht Masala', pu: 'کڑاہی گوشت مصالحہ',
      en: 'Proper dhaba-style karahi at home. Taste is great, though I would add a bit more chilli for my liking.',
      ur: 'گھر پر ڈھابے جیسی کڑاہی بن گئی۔ ذائقہ بہت اچھا ہے، بس میرے حساب سے تھوڑی مرچ اور ہو تو مزہ دوگنا۔' },
    { r: 5, n: 'Fatima Zahra', nu: 'فاطمہ زہرا', c: 'Islamabad', cu: 'اسلام آباد', p: 'Qorma Masala', pu: 'قورمہ مصالحہ',
      en: 'Rich, balanced qorma without adding ten extra things. The steps printed on the pack made it so easy.',
      ur: 'بغیر کچھ اضافی ڈالے بھرپور اور متوازن قورمہ بنا۔ پیک پر لکھا طریقہ بہت آسان لگا۔' },
    { r: 3, n: 'Bilal Ahmed', nu: 'بلال احمد', c: 'Multan', cu: 'ملتان', p: 'Achar Gosht Masala', pu: 'اچار گوشت مصالحہ',
      en: 'Flavour is good, but it was a little tangy for my family. Will use less next time and see.',
      ur: 'ذائقہ اچھا ہے مگر ہمارے گھر والوں کے لیے تھوڑا زیادہ کھٹا لگا۔ اگلی بار کم ڈال کر دیکھوں گا۔' },
    { r: 5, n: 'Sana Chaudhry', nu: 'ثنا چوہدری', c: 'Faisalabad', cu: 'فیصل آباد', p: 'Chaat Masala', pu: 'چاٹ مصالحہ',
      en: 'Fruit chaat and fries are not the same without it now. The tang is spot on.',
      ur: 'اب فروٹ چاٹ اور فرائز اس کے بغیر ادھورے لگتے ہیں۔ چٹخارہ بالکل صحیح ہے۔' },
    { r: 4, n: 'Usman Qureshi', nu: 'عثمان قریشی', c: 'Rawalpindi', cu: 'راولپنڈی', p: 'Fish Masala', pu: 'مچھلی مصالحہ',
      en: 'Fried fish came out crisp and full of flavour. Would love a bigger pack size too.',
      ur: 'تلی ہوئی مچھلی کرسپی اور ذائقے دار بنی۔ بس پیک کا سائز تھوڑا بڑا ملے تو اور اچھا ہو۔' },
    { r: 5, n: 'Hira Siddiqui', nu: 'ہیرا صدیقی', c: 'Karachi', cu: 'کراچی', p: 'Biryani Masala', pu: 'بریانی مصالحہ',
      en: 'I could smell the spices the moment I opened the pack. You can tell it is fresh.',
      ur: 'پیک کھولتے ہی مصالحوں کی خوشبو آ گئی۔ صاف پتا چلتا ہے کہ تازہ ہے۔' },
    { r: 4, n: 'Ali Raza', nu: 'علی رضا', c: 'Vehari', cu: 'وہاڑی', p: 'Karahi Gosht Masala', pu: 'کڑاہی گوشت مصالحہ',
      en: 'Ordered on WhatsApp and got a quick reply. Quality is consistent, would like more flavours soon.',
      ur: 'واٹس ایپ پر آرڈر کیا، فوراً جواب ملا۔ معیار ایک جیسا اچھا ہے، امید ہے مزید ذائقے بھی آئیں گے۔' },
    { r: 3, n: 'Maryam Javed', nu: 'مریم جاوید', c: 'Sialkot', cu: 'سیالکوٹ', p: 'Qorma Masala', pu: 'قورمہ مصالحہ',
      en: 'Nice aroma and decent taste. I needed to adjust the salt a little, but overall a good everyday masala.',
      ur: 'خوشبو اچھی ہے اور ذائقہ بھی ٹھیک۔ نمک تھوڑا اپنے حساب سے کرنا پڑا، مگر روزمرہ کے لیے اچھا مصالحہ ہے۔' },
    { r: 5, n: 'Zain Abbas', nu: 'زین عباس', c: 'Lahore', cu: 'لاہور', p: 'Achar Gosht Masala', pu: 'اچار گوشت مصالحہ',
      en: 'Tried it once for guests, and now it is the only achar gosht masala I buy.',
      ur: 'مہمانوں کے لیے ایک بار آزمایا، اب اچار گوشت کے لیے یہی مصالحہ لیتا ہوں۔' }
  ];

  var AVATARS = [['#FFE9DF', '#C7491B'], ['#E3EEF5', '#273F4F'], ['#FFF1CF', '#9A6A00'], ['#E6F2E6', '#2F6B3A'], ['#F3E6F7', '#7b2a91']];
  var avg = REV.reduce(function (a, r) { return a + r.r; }, 0) / REV.length;
  var avgTxt = avg.toFixed(1);

  /* ---------- Icons ---------- */
  var IC = [
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.5 6-6.5 3-.8 5-2.5 6-5"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M12 3c2 3 5 4 5 8a5 5 0 0 1-10 0c0-4 3-5 5-8z"/><path d="M12 21v-4"/></svg>'
  ];

  function L() { return root.lang === 'ur' ? 'ur' : 'en'; }
  function initials(n) { var p = n.split(' '); return (p[0][0] + (p[1] ? p[1][0] : '')).toUpperCase(); }
  function stars(v) { return '<span class="stars-fill" style="--p:' + (v / 5 * 100).toFixed(0) + '%" aria-hidden="true">★★★★★</span>'; }

  function reviewCard(r, i, l, dup) {
    var ur = l === 'ur', av = AVATARS[i % AVATARS.length];
    return '<article class="rev-card' + (ur ? ' is-ur' : '') + '"' + (dup ? ' aria-hidden="true"' : '') + '>' +
      '<div class="rev-top"><span class="rev-rate" aria-label="' + r.r + ' out of 5 stars">' + stars(r.r) + '<b>' + r.r + '.0</b></span>' +
      '<span class="rev-tag">' + (ur ? r.pu : r.p) + '</span></div>' +
      '<p class="rev-text">' + (ur ? r.ur : r.en) + '</p>' +
      '<div class="rev-foot"><span class="rev-avatar" style="--av-bg:' + av[0] + ';--av-fg:' + av[1] + '" aria-hidden="true">' + initials(r.n) + '</span>' +
      '<div class="rev-who"><span class="rev-name">' + (ur ? r.nu : r.n) + '</span><span class="rev-city">' + (ur ? r.cu : r.c) + '</span></div></div>' +
      '</article>';
  }

  function render() {
    var l = L(), t = T[l];
    var cards = REV.map(function (r, i) { return reviewCard(r, i, l, false); }).join('');
    var dup = REV.map(function (r, i) { return reviewCard(r, i, l, true); }).join('');
    sec.innerHTML =
      '<div class="why-inner">' +
        '<div class="why-head"><h2 id="why-title">' + t.title + '</h2><p>' + t.sub + '</p></div>' +
        '<div class="why-strip">' + t.f.map(function (f, i) {
          return '<div class="why-cell"><span class="why-ic">' + IC[i] + '</span><div><h3>' + f[0] + '</h3><p>' + f[1] + '</p></div></div>';
        }).join('') + '</div>' +
      '</div>' +
      '<div class="rev-wrap">' +
        '<div class="rev-head"><h2>' + t.revT + '</h2>' +
          '<div class="rev-avg"><span class="rev-avg-num">' + avgTxt + '</span><span class="rev-avg-meta">' + stars(avg) + '<small>' + t.avgLbl(REV.length) + '</small></span></div></div>' +
        '<div class="rev-strip" role="region" aria-label="' + t.revT + '"><div class="rev-track">' + cards + dup + '</div></div>' +
      '</div>';
  }

  /* ---------- Entrance reveal ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function reveal() { sec.classList.add('is-in'); }
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (en) {
      if (en[0].isIntersecting) { reveal(); io.disconnect(); }
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });
    io.observe(sec);
  } else { reveal(); }

  /* ---------- Re-render on language switch ---------- */
  new MutationObserver(render).observe(root, { attributes: true, attributeFilter: ['lang'] });
  render();

  /* ---------- Navbar scroll-spy ---------- */
  var links = document.querySelectorAll('.nav-link,.mobile-nav-link');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) {
      if (!en[0].isIntersecting) return;
      links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#why-choose-us'); });
      window.dispatchEvent(new Event('resize'));
    }, { rootMargin: '-35% 0px -35% 0px' }).observe(sec);
  }
})();
