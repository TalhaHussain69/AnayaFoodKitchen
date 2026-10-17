(function () {
  'use strict';
  var root = document.documentElement;
  var WA = '923257735000';

  var T = {
    en: {
      title: 'Share Your Experience', sub: 'Your feedback helps us make every pack better.',
      name: 'Your Name', addr: 'City / Address', prod: 'Product Reviewed', rate: 'Your Rating', text: 'Your Review',
      ph: { name: 'e.g. Ayesha Khan', addr: 'e.g. Model Town, Lahore', text: 'Tell us how the masalay worked in your kitchen…' },
      all: 'Anaya masalay (general)', send: 'Submit Review', note: 'Your review is sent to us on WhatsApp so our team can read it.',
      labels: ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'],
      doneT: 'Thank you!', doneP: 'Your review has been prepared in WhatsApp. Please press Send there so it reaches us.', close: 'Close',
      msgHead: 'Assalam o Alaikum, I would like to share my review of Anaya Food.',
      mName: 'Name', mAddr: 'Address', mProd: 'Product', mRate: 'Rating', mRev: 'Review', btn: 'Write a Review'
    },
    ur: {
      title: 'اپنا تجربہ شیئر کریں', sub: 'آپ کی رائے ہمیں ہر پیک مزید بہتر بنانے میں مدد دیتی ہے۔',
      name: 'آپ کا نام', addr: 'شہر / پتہ', prod: 'کون سا مصالحہ', rate: 'آپ کی ریٹنگ', text: 'آپ کا تبصرہ',
      ph: { name: 'مثلاً عائشہ خان', addr: 'مثلاً ماڈل ٹاؤن، لاہور', text: 'بتائیں کہ مصالحے آپ کے کچن میں کیسے رہے…' },
      all: 'عنایہ مصالحے (عمومی)', send: 'تبصرہ بھیجیں', note: 'آپ کا تبصرہ واٹس ایپ کے ذریعے ہم تک پہنچے گا۔',
      labels: ['', 'خراب', 'ٹھیک ٹھاک', 'اچھا', 'بہت اچھا', 'لاجواب'],
      doneT: 'شکریہ!', doneP: 'آپ کا تبصرہ واٹس ایپ میں تیار ہو گیا ہے۔ براہِ کرم وہاں "Send" دبائیں تاکہ ہم تک پہنچ جائے۔', close: 'بند کریں',
      msgHead: 'Assalam o Alaikum, I would like to share my review of Anaya Food.',
      mName: 'Name', mAddr: 'Address', mProd: 'Product', mRate: 'Rating', mRev: 'Review', btn: 'تبصرہ لکھیں'
    }
  };
  var PRODS = [['Qorma Masala', 'قورمہ مصالحہ'], ['Biryani Masala', 'بریانی مصالحہ'], ['Karahi Gosht Masala', 'کڑاہی گوشت مصالحہ'], ['Fish Masala', 'مچھلی مصالحہ'], ['Achar Gosht Masala', 'اچار گوشت مصالحہ'], ['Chaat Masala', 'چاٹ مصالحہ']];

  var STAR = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/></svg>';
  var WAI = '<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

  function L() { return root.lang === 'ur' ? 'ur' : 'en'; }
  var rating = 0, lastFocus = null;

  /* ---- build modal once ---- */
  var ov = document.createElement('div');
  ov.className = 'rv-overlay';
  ov.innerHTML =
    '<div class="rv-box" role="dialog" aria-modal="true" aria-labelledby="rv-title">' +
      '<button type="button" class="rv-close" aria-label="Close">×</button>' +
      '<div class="rv-head">' +
        '<span class="rv-bgstar s1">' + STAR + '</span><span class="rv-bgstar s2">' + STAR + '</span><span class="rv-bgstar s3">' + STAR + '</span>' +
        '<h3 id="rv-title" data-t="title"></h3><p data-t="sub"></p></div>' +
      '<form class="rv-form" novalidate>' +
        '<div class="rv-row" style="--n:0">' +
          '<div class="rv-field" data-f="name"><label for="rv-name"><span data-t="name"></span> <i>*</i></label><input id="rv-name" type="text" maxlength="60" autocomplete="name" data-p="name"></div>' +
          '<div class="rv-field" data-f="addr"><label for="rv-addr"><span data-t="addr"></span> <i>*</i></label><input id="rv-addr" type="text" maxlength="90" autocomplete="street-address" data-p="addr"></div>' +
        '</div>' +
        '<div class="rv-field" style="--n:1"><label for="rv-prod" data-t="prod"></label><select id="rv-prod"></select></div>' +
        '<div class="rv-field" data-f="rate" style="--n:2"><span class="rv-lbl"><span data-t="rate"></span> <i style="color:var(--color-orange);font-style:normal">*</i></span>' +
          '<div class="rv-stars" role="radiogroup">' +
            [1, 2, 3, 4, 5].map(function (n) { return '<button type="button" class="rv-star" role="radio" aria-checked="false" data-v="' + n + '" style="--k:' + (n - 1) + '" aria-label="' + n + '">' + STAR + '</button>'; }).join('') +
            '<span class="rv-rlabel" aria-live="polite"></span></div></div>' +
        '<div class="rv-field" data-f="text" style="--n:3"><label for="rv-text"><span data-t="text"></span> <i>*</i></label><textarea id="rv-text" maxlength="400" data-p="text"></textarea><span class="rv-count">0 / 400</span></div>' +
        '<button type="submit" class="rv-submit" style="--n:4">' + WAI + '<span data-t="send"></span></button>' +
        '<p class="rv-note" style="--n:5" data-t="note"></p>' +
      '</form>' +
      '<div class="rv-done"><div class="rv-confetti" aria-hidden="true"></div>' +
        '<svg class="rv-check" viewBox="0 0 92 92" aria-hidden="true"><circle cx="46" cy="46" r="40"/><path d="M28 47l12 12 24-26"/></svg>' +
        '<h3 data-t="doneT"></h3><p data-t="doneP"></p>' +
        '<button type="button" class="rv-submit rv-close2"><span data-t="close"></span></button></div>' +
    '</div>';
  document.body.appendChild(ov);

  var box = ov.querySelector('.rv-box'), form = ov.querySelector('.rv-form');
  var stars = ov.querySelectorAll('.rv-star'), rlabel = ov.querySelector('.rv-rlabel');
  var nameI = ov.querySelector('#rv-name'), addrI = ov.querySelector('#rv-addr'), prodS = ov.querySelector('#rv-prod'), textA = ov.querySelector('#rv-text');
  var count = ov.querySelector('.rv-count');

  function applyLang() {
    var t = T[L()], l = L();
    ov.querySelectorAll('[data-t]').forEach(function (e) { e.textContent = t[e.dataset.t]; });
    ov.querySelectorAll('[data-p]').forEach(function (e) { e.placeholder = t.ph[e.dataset.p]; });
    var cur = prodS.value;
    prodS.innerHTML = '<option value="">' + t.all + '</option>' + PRODS.map(function (p) { return '<option value="' + p[0] + '">' + p[l === 'ur' ? 1 : 0] + '</option>'; }).join('');
    prodS.value = cur;
    rlabel.textContent = t.labels[rating] || '';
    var b = document.querySelector('.ft-review span'); if (b) b.textContent = t.btn;
  }

  function paint(v, anim) {
    stars.forEach(function (s, i) {
      s.classList.toggle('on', i < v);
      s.setAttribute('aria-checked', String(i + 1 === rating));
      if (anim) { s.classList.remove('pop'); void s.offsetWidth; if (i < v) s.classList.add('pop'); }
    });
  }
  stars.forEach(function (s) {
    s.addEventListener('mouseenter', function () { paint(+s.dataset.v, false); rlabel.textContent = T[L()].labels[+s.dataset.v]; });
    s.addEventListener('click', function () { rating = +s.dataset.v; paint(rating, true); rlabel.textContent = T[L()].labels[rating]; setErr('rate', false); });
  });
  ov.querySelector('.rv-stars').addEventListener('mouseleave', function () { paint(rating, false); rlabel.textContent = T[L()].labels[rating] || ''; });

  textA.addEventListener('input', function () { count.textContent = textA.value.length + ' / 400'; if (textA.value.trim()) setErr('text', false); });
  nameI.addEventListener('input', function () { if (nameI.value.trim()) setErr('name', false); });
  addrI.addEventListener('input', function () { if (addrI.value.trim()) setErr('addr', false); });

  function setErr(k, on) {
    var f = ov.querySelector('[data-f="' + k + '"]');
    if (!f) return;
    f.classList.remove('err');
    if (on) { void f.offsetWidth; f.classList.add('err'); }
  }

  function confetti() {
    var c = ov.querySelector('.rv-confetti'), cols = ['#FE7743', '#FFB020', '#E5484D', '#25D366', '#273F4F'], h = '';
    for (var i = 0; i < 16; i++) {
      var a = (i / 16) * Math.PI * 2, d = 90 + (i % 4) * 28;
      h += '<i style="--c:' + cols[i % 5] + ';--x:' + Math.round(Math.cos(a) * d) + 'px;--y:' + Math.round(Math.sin(a) * d) + 'px;--r:' + (i * 47) + 'deg">' + STAR + '</i>';
    }
    c.innerHTML = h;
  }

  function open() {
    lastFocus = document.activeElement;
    box.classList.remove('sent');
    applyLang();
    ov.classList.remove('closing'); ov.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(function () { nameI.focus(); }, 350);
  }
  function close() {
    if (!ov.classList.contains('open')) return;
    ov.classList.add('closing');
    setTimeout(function () {
      ov.classList.remove('open', 'closing');
      document.body.style.overflow = '';
      if (box.classList.contains('sent')) { form.reset(); rating = 0; paint(0); count.textContent = '0 / 400'; box.classList.remove('sent'); }
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }, 250);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var bad = false;
    if (!nameI.value.trim()) { setErr('name', true); bad = true; }
    if (!addrI.value.trim()) { setErr('addr', true); bad = true; }
    if (!rating) { setErr('rate', true); bad = true; }
    if (!textA.value.trim()) { setErr('text', true); bad = true; }
    if (bad) { var f = ov.querySelector('.err input,.err textarea,.err .rv-star'); if (f) f.focus(); return; }
    var t = T[L()];
    var msg = t.msgHead + '\n\n' + t.mName + ': ' + nameI.value.trim() + '\n' + t.mAddr + ': ' + addrI.value.trim() +
      '\n' + t.mProd + ': ' + (prodS.value || 'General') + '\n' + t.mRate + ': ' + rating + '/5\n' + t.mRev + ': ' + textA.value.trim();
    window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    confetti();
    box.classList.add('sent');
    box.scrollTop = 0;
  });

  ov.addEventListener('click', function (e) {
    if (e.target === ov || e.target.closest('.rv-close') || e.target.closest('.rv-close2')) close();
  });
  window.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  document.addEventListener('click', function (e) { if (e.target.closest('[data-open-review]')) open(); });
  new MutationObserver(applyLang).observe(root, { attributes: true, attributeFilter: ['lang'] });
  applyLang();
})();
