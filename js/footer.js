(function () {
  'use strict';
  var ft = document.getElementById('site-footer');
  if (!ft) return;
  var root = document.documentElement;

  /* ---- Edit these links to your real pages ---- */
  var SOCIAL = {
    whatsapp: 'https://wa.me/923257735000',
    facebook: 'https://www.facebook.com/anayafoodkitchen',
    tiktok: 'https://www.tiktok.com/@anayafoodkitchen',
    instagram: 'https://www.instagram.com/anayafoodkitchen'
  };
  var MAP = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Vehari Road Multan, Punjab, Pakistan');

  var T = {
    en: {
      brand: 'Anaya Food',
      about: 'Pure, aromatic masalay inspired by Pakistani tradition, made to make every home meal special.',
      qTitle: 'Quick Links', pTitle: 'Our Masalay', cTitle: 'Get in Touch',
      nav: [['#', 'Home'], ['#our-products', 'Our Products'], ['#about-us', 'About Us'], ['#why-choose-us', 'Why Choose Us'], ['#contact-us', 'Contact Us']],
      prods: { qorma: 'Qorma Masala', biryani: 'Biryani Masala', karahi: 'Karahi Gosht Masala', fish: 'Fish Masala', achar: 'Achar Gosht Masala', chaat: 'Chaat Masala' },
      addr: 'Vehari Road Multan, Punjab, Pakistan', pfa: 'PFA License No. 03861927', tm: 'T.M. No. 8391950',
      ctaT: 'Hungry for real flavour?', ctaP: 'Order your masalay directly on WhatsApp.', ctaB: 'Order on WhatsApp',
      ticker: ['Pure Spices', 'Authentic Taste', 'Made with Care', 'PFA Licensed', 'Har Bite Mein Asli Zaiqa'],
      rights: '© 2026 Anaya Food. All rights reserved.', review: 'Write a Review', top: 'Back to top', follow: 'Follow us',
      msg: 'Assalam o Alaikum, I want to order Anaya masalay.'
    },
    ur: {
      brand: 'عنایہ فوڈ',
      about: 'پاکستانی روایت سے جڑے خالص اور خوشبودار مصالحے، تاکہ ہر گھر کا کھانا خاص بن جائے۔',
      qTitle: 'فوری لنکس', pTitle: 'ہمارے مصالحے', cTitle: 'رابطہ کریں',
      nav: [['#', 'ہوم'], ['#our-products', 'ہماری مصنوعات'], ['#about-us', 'ہمارے بارے میں'], ['#why-choose-us', 'ہمیں کیوں چنیں'], ['#contact-us', 'ہم سے رابطہ کریں']],
      prods: { qorma: 'قورمہ مصالحہ', biryani: 'بریانی مصالحہ', karahi: 'کڑاہی گوشت مصالحہ', fish: 'مچھلی مصالحہ', achar: 'اچار گوشت مصالحہ', chaat: 'چاٹ مصالحہ' },
      addr: 'وہاڑی روڈ، ملتان، پنجاب، پاکستان', pfa: 'پی ایف اے لائسنس نمبر 03861927', tm: 'ٹریڈ مارک نمبر 8391950',
      ctaT: 'اصلی ذائقے کی طلب ہے؟', ctaP: 'اپنے مصالحے براہِ راست واٹس ایپ پر منگوائیں۔', ctaB: 'واٹس ایپ پر آرڈر کریں',
      ticker: ['خالص مصالحے', 'مستند ذائقہ', 'محبت سے تیار', 'پی ایف اے لائسنس یافتہ', 'ہر بائٹ میں اصلی ذائقہ'],
      rights: '© 2026 عنایہ فوڈ۔ جملہ حقوق محفوظ ہیں۔', review: 'تبصرہ لکھیں', top: 'اوپر جائیں', follow: 'ہمیں فالو کریں',
      msg: 'Assalam o Alaikum, I want to order Anaya masalay.'
    }
  };

  var I = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"/></svg>',
    tt: '<svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    ph: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M12 19V5M5 12l7-7 7 7"/></svg>'
  };

  function L() { return root.lang === 'ur' ? 'ur' : 'en'; }

  function dots() {
    var c = ['#FE7743', '#FFB020', '#E5484D', '#F2A65A'], h = '';
    for (var i = 0; i < 16; i++) {
      h += '<i style="--x:' + ((i * 6.3 + (i % 3) * 2) % 100).toFixed(1) + '%;--s:' + (4 + (i % 4) * 2) + 'px;--c:' + c[i % c.length] +
           ';--d:' + (11 + (i % 5) * 3) + 's;--dl:-' + ((i * 1.7) % 14).toFixed(1) + 's;--dx:' + ((i % 2 ? 1 : -1) * (20 + (i % 4) * 14)) + 'px"></i>';
    }
    return h;
  }

  function render() {
    var t = T[L()], wp = '#16262F';
    var wave = '<svg viewBox="0 0 1440 60" preserveAspectRatio="none"><path fill="' + wp + '" d="M0 30 C 180 0, 360 60, 540 30 S 900 0, 1080 30 S 1260 60, 1440 30 S 1620 0, 1800 30 S 2160 60, 2340 30 S 2700 0, 2880 30 V60 H0z"/></svg>';
    ft.innerHTML =
      '<div class="ft-wave" aria-hidden="true">' + wave + wave + '</div>' +
      '<div class="ft-dots" aria-hidden="true">' + dots() + '</div>' +
      '<div class="ft-inner">' +
        '<div class="ft-grid">' +
          '<div class="ft-col" style="--i:0"><a class="ft-brand" href="#" aria-label="' + t.brand + '"><span class="ft-logo"><img src="assets/logo.png" alt="" width="56" height="56"></span><b>' + t.brand + '</b></a>' +
            '<p class="ft-about">' + t.about + '</p>' +
            '<div class="ft-soc" aria-label="' + t.follow + '">' +
              '<a class="s-wa" style="--k:0" target="_blank" rel="noopener" href="' + SOCIAL.whatsapp + '" aria-label="WhatsApp">' + I.wa + '</a>' +
              '<a class="s-fb" style="--k:1" target="_blank" rel="noopener" href="' + SOCIAL.facebook + '" aria-label="Facebook">' + I.fb + '</a>' +
              '<a class="s-tt" style="--k:2" target="_blank" rel="noopener" href="' + SOCIAL.tiktok + '" aria-label="TikTok">' + I.tt + '</a>' +
              '<a class="s-ig" style="--k:3" target="_blank" rel="noopener" href="' + SOCIAL.instagram + '" aria-label="Instagram">' + I.ig + '</a>' +
            '</div></div>' +
          '<div class="ft-col" style="--i:1"><h4>' + t.qTitle + '</h4><ul class="ft-links">' +
            t.nav.map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + '</a></li>'; }).join('') + '</ul></div>' +
          '<div class="ft-col" style="--i:2"><h4>' + t.cTitle + '</h4><ul class="ft-contact">' +
            '<li>' + I.pin + '<a target="_blank" rel="noopener" href="' + MAP + '">' + t.addr + '</a></li>' +
            '<li>' + I.ph + '<span><a class="ltr" href="tel:03257735000">0325 773 5000</a><br><a class="ltr" href="tel:03267735000">0326 773 5000</a></span></li>' +
            '</ul><div class="ft-reg"><span>' + t.pfa + '</span><span>' + t.tm + '</span></div></div>' +
        '</div>' +
        '<div class="ft-bottom"><span>' + t.rights + '</span><div class="ft-actions"><button type="button" class="ft-review" data-open-review>' + I.star + '<span>' + t.review + '</span></button><button type="button" class="ft-top" id="ft-top">' + I.up + t.top + '</button></div></div>' +
      '</div>';
  }

  /* product links open that product's popup */
  ft.addEventListener('click', function (e) {
    var b = e.target.closest('[data-prod]');
    if (b) {
      var btn = document.querySelector('#products-grid .explore[data-id="' + b.dataset.prod + '"]');
      if (btn) btn.click();
      return;
    }
    if (e.target.closest('#ft-top')) window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { ft.classList.add('is-in'); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(ft);
  } else { ft.classList.add('is-in'); }

  /* keep "Contact Us" highlighted while the footer is on screen */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) {
      if (!en[0].isIntersecting) return;
      document.querySelectorAll('.nav-link,.mobile-nav-link').forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#contact-us'); });
      window.dispatchEvent(new Event('resize'));
    }, { threshold: 0.3 }).observe(ft);
  }

  new MutationObserver(render).observe(root, { attributes: true, attributeFilter: ['lang'] });
  render();
})();
