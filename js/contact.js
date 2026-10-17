(function () {
  'use strict';
  var sec = document.getElementById('contact-us');
  if (!sec) return;
  var root = document.documentElement;

  var P1 = { show: '0325 773 5000', tel: '03257735000', wa: '923257735000' };
  var P2 = { show: '0326 773 5000', tel: '03267735000', wa: '923267735000' };
  var MAP_Q = encodeURIComponent('Vehari Road Multan, Punjab, Pakistan');

  var T = {
    en: {
      title: 'Contact Us', sub: 'Visit us, call, or message on WhatsApp. We are happy to help.',
      addr: 'Address', addrV: 'Vehari Road Multan, Punjab, Pakistan',
      phone: 'Phone / WhatsApp', call: 'Call', wa: 'WhatsApp',
      cert: 'Certifications / Registration', pfa: 'PFA License No.', tm: 'T.M. No.',
      map: 'Open in Google Maps', foot: '© 2026 Anaya Food. All rights reserved.', msg: 'Assalam o Alaikum, I would like to know more about Anaya masalay.'
    },
    ur: {
      title: 'ہم سے رابطہ کریں', sub: 'تشریف لائیں، کال کریں یا واٹس ایپ پر میسج کریں۔ ہمیں آپ کی خدمت کر کے خوشی ہوگی۔',
      addr: 'پتہ', addrV: 'وہاڑی روڈ، ملتان، پنجاب، پاکستان',
      phone: 'فون / واٹس ایپ', call: 'کال', wa: 'واٹس ایپ',
      cert: 'سرٹیفیکیشن / رجسٹریشن', pfa: 'پی ایف اے لائسنس نمبر', tm: 'ٹریڈ مارک نمبر',
      map: 'گوگل میپس میں کھولیں', foot: '© 2026 عنایہ فوڈ۔ جملہ حقوق محفوظ ہیں۔', msg: 'Assalam o Alaikum, I would like to know more about Anaya masalay.'
    }
  };

  var I = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="22" height="22"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    go: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" width="15" height="15"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>'
  };

  function L() { return root.lang === 'ur' ? 'ur' : 'en'; }

  function phoneRow(p, t) {
    return '<div class="ct-phone"><a class="ct-num" href="tel:' + p.tel + '">' + p.show + '</a><div class="ct-acts">' +
      '<a class="ct-btn" href="tel:' + p.tel + '">' + t.call + '</a>' +
      '<a class="ct-btn wa" target="_blank" rel="noopener" href="https://wa.me/' + p.wa + '?text=' + encodeURIComponent(t.msg) + '">' + I.wa + t.wa + '</a></div></div>';
  }

  function render() {
    var t = T[L()];
    sec.innerHTML =
      '<div class="ct-inner">' +
        '<div class="ct-head"><h2 id="contact-title">' + t.title + '</h2><p>' + t.sub + '</p></div>' +
        '<div class="ct-grid">' +
          '<div class="ct-list">' +
            '<div class="ct-card"><span class="ct-ic">' + I.pin + '</span><div class="ct-body"><h3>' + t.addr + '</h3><address>' + t.addrV + '</address></div></div>' +
            '<div class="ct-card"><span class="ct-ic">' + I.phone + '</span><div class="ct-body"><h3>' + t.phone + '</h3>' + phoneRow(P1, t) + phoneRow(P2, t) + '</div></div>' +
            '<div class="ct-card"><span class="ct-ic">' + I.shield + '</span><div class="ct-body"><h3>' + t.cert + '</h3><div class="ct-certs">' +
              '<div class="ct-cert">' + I.check + '<span><small>' + t.pfa + '</small><b>03861927</b></span></div>' +
              '<div class="ct-cert">' + I.check + '<span><small>' + t.tm + '</small><b>8391950</b></span></div>' +
            '</div></div></div>' +
          '</div>' +
          '<div class="ct-map"><iframe title="Anaya Food location" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=' + MAP_Q + '&output=embed"></iframe>' +
            '<a class="ct-map-link" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' + MAP_Q + '">' + I.go + t.map + '</a></div>' +
        '</div>' +
      '</div>';
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { sec.classList.add('is-in'); io.disconnect(); } }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    io.observe(sec);
  } else { sec.classList.add('is-in'); }

  new MutationObserver(render).observe(root, { attributes: true, attributeFilter: ['lang'] });
  render();

  var links = document.querySelectorAll('.nav-link,.mobile-nav-link');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) {
      if (!en[0].isIntersecting) return;
      links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#contact-us'); });
      window.dispatchEvent(new Event('resize'));
    }, { rootMargin: '-35% 0px -35% 0px' }).observe(sec);
  }
})();
