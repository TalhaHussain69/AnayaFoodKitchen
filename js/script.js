/**
 * Anaya Food — Home Hero Section
 * Interactive Controller:
 * - Bilingual Language Engine (English <-> Urdu with RTL)
 * - Mobile Navigation Menu & Drawer
 * - Smooth Underline & Visual Interactions
 */

(function () {
  'use strict';

  // ==========================================================================
  // Bilingual Content Dictionaries
  // ==========================================================================
  const translations = {
    en: {
      brandName: "Anaya Food",
      navHome: "Home",
      navProducts: "Our Products",
      navAbout: "About Us",
      navWhy: "Why Choose Us",
      navContact: "Contact Us",
      orderOnWhatsApp: "Order on WhatsApp",
      heroEyebrow: "AUTHENTIC PAKISTANI MASALAY",
      headingLine1: "Har Bite Mein",
      headingLine2: "Asli Zaiqa",
      heroSubheading: "Authentic Taste. Made with Care.",
      heroDescription: "Bringing the rich aroma of Pakistan’s spices to your kitchen.",
      btnExplore: "Explore Our Masalay",
      btnOrderWhatsApp: "Order on WhatsApp",
      trustBadgeText: "PFA Licensed • Quality You Can Trust",
      ribbonText: "Pure Spices • Rich Flavour",
      chipPfa: "PFA Licensed",
      chipCare: "Made with Care",
      aboutEyebrow: "ABOUT ANAYA FOOD",
      aboutHeading: "Bringing Flavour to Every Kitchen",
      aboutDesc: "Pure, aromatic masalay inspired by Pakistani tradition, made to make every home meal special.",
      aboutOwnersTitle: "Meet the Owners",
      aboutOwner1: "M Nasir Aziz",
      aboutOwner2: "M Nadeem",
      aboutOwnerRole: "Owner",
      aboutOwnerRole2: "Owner",
      aboutPillarPure: "100% Pure Spices",
      aboutPillarRecipe: "Authentic Recipes",
      aboutPillarFresh: "Aroma Locked & Fresh",
      aboutBtnExplore: "Explore Our Masalay",
      aboutBadgeMoments: "Made for Flavourful Moments",
      arrow: "→"
    },
    ur: {
      brandName: "عنایہ فوڈ",
      navHome: "ہوم",
      navProducts: "ہماری مصنوعات",
      navAbout: "ہمارے بارے میں",
      navWhy: "ہمیں کیوں چنیں",
      navContact: "ہم سے رابطہ کریں",
      orderOnWhatsApp: "واٹس ایپ پر آرڈر کریں",
      heroEyebrow: "خالص پاکستانی مصالحہ جات",
      headingLine1: "ہر بائٹ میں",
      headingLine2: "اصلی ذائقہ",
      heroSubheading: "خالص ذائقہ۔ محبت اور خلوص سے تیار کردہ۔",
      heroDescription: "پاکستان کے روایتی مصالحوں کی دلکش خوشبو آپ کے باورچی خانے تک۔",
      btnExplore: "ہمارے مصالحہ جات دیکھیں",
      btnOrderWhatsApp: "واٹس ایپ پر آرڈر کریں",
      trustBadgeText: "پی ایف اے سے تصدیق شدہ • قابل اعتماد معیار",
      ribbonText: "خالص مصالحہ جات • لاجواب ذائقہ",
      chipPfa: "پی ایف اے لائسنس یافتہ",
      chipCare: "محبت اور خلوص سے",
      aboutEyebrow: "عنایہ فوڈ کا تعارف",
      aboutHeading: "ہر کچن میں لذیذ ذائقے کی بہار",
      aboutDesc: "عنایہ فوڈ پاکستانی روایت سے جڑے خالص اور خوشبودار مصالحے پیش کرتا ہے، تاکہ ہر گھر کا کھانا خاص بن جائے۔",
      aboutOwnersTitle: "ہمارے مالکان",
      aboutOwner1: "محمد ناصر عزیز",
      aboutOwner2: "محمد ندیم",
      aboutOwnerRole: "مالک",
      aboutOwnerRole2: "مالک",
      aboutPillarPure: "۱۰۰٪ خالص مصالحہ جات",
      aboutPillarRecipe: "روایتی اور مستند ترکیبیں",
      aboutPillarFresh: "محفوظ خوشبو اور تازگی",
      aboutBtnExplore: "ہمارے مصالحہ جات دیکھیں",
      aboutBadgeMoments: "خوشگوار لمحات اور لذیذ ذائقوں کے لیے",
      arrow: "←"
    }
  };

  // State
  let currentLanguage = 'en';

  // Elements
  const htmlRoot = document.documentElement;
  const langEnBtns = [document.getElementById('lang-en-btn'), document.getElementById('mobile-lang-en')].filter(Boolean);
  const langUrBtns = [document.getElementById('lang-ur-btn'), document.getElementById('mobile-lang-ur')].filter(Boolean);
  const translatableElements = document.querySelectorAll('[data-i18n]');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const arrowIcon = document.querySelector('.arrow-icon');
  const aboutArrowIcon = document.querySelector('.about-btn-arrow');
  const underlinePath = document.querySelector('.underline-path');

  // ==========================================================================
  // Language Switcher Functionality
  // ==========================================================================
  function setLanguage(lang, triggerAnimation = true) {
    if (!translations[lang]) return;
    currentLanguage = lang;

    const isUrdu = lang === 'ur';

    // Update document attributes
    htmlRoot.setAttribute('lang', lang);
    htmlRoot.setAttribute('dir', isUrdu ? 'rtl' : 'ltr');

    // Update Active states for language buttons
    langEnBtns.forEach(btn => btn.classList.toggle('active', !isUrdu));
    langUrBtns.forEach(btn => btn.classList.toggle('active', isUrdu));

    // Update Arrow icon direction
    if (arrowIcon) {
      arrowIcon.textContent = translations[lang].arrow;
    }
    if (aboutArrowIcon) {
      aboutArrowIcon.textContent = translations[lang].arrow;
    }

    // Apply translations with subtle fade effect
    translatableElements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        if (triggerAnimation) {
          el.classList.add('lang-fade-out');
          setTimeout(() => {
            el.textContent = translations[lang][key];
            el.classList.remove('lang-fade-out');
            el.classList.add('lang-fade-in');
            setTimeout(() => el.classList.remove('lang-fade-in'), 250);
            moveIndicator();
          }, 120);
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Replay SVG underline draw animation
    if (underlinePath) {
      underlinePath.style.animation = 'none';
      // Trigger DOM reflow
      void underlinePath.offsetWidth;
      underlinePath.style.animation = 'drawUnderline 1.2s cubic-bezier(0.25, 1, 0.5, 1) 0.1s forwards';
    }

    // Store in localStorage for user session preference
    try {
      localStorage.setItem('anaya_lang_pref', lang);
    } catch (e) {
      // Storage unavailable or blocked
    }
  }

  // Bind Language Toggle Buttons
  langEnBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentLanguage !== 'en') {
        setLanguage('en');
      }
    });
  });

  langUrBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (currentLanguage !== 'ur') {
        setLanguage('ur');
      }
    });
  });

  // ==========================================================================
  // Mobile Navigation Drawer
  // ==========================================================================
  function toggleMobileMenu(forceClose = false) {
    if (!hamburgerBtn || !mobileDrawer) return;

    const isOpen = forceClose ? false : !mobileDrawer.classList.contains('open');
    mobileDrawer.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    mobileDrawer.setAttribute('aria-hidden', isOpen ? 'false' : 'true');

    // Lock body scroll when mobile menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';

    // Animate hamburger lines to X
    const bars = hamburgerBtn.querySelectorAll('.hamburger-bar');
    if (bars.length === 3) {
      if (isOpen) {
        bars[0].style.transform = 'translateY(7.2px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-7.2px) rotate(-45deg)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    }
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => toggleMobileMenu());
  }

  // Close mobile drawer when clicking any link inside it
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(true));
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      toggleMobileMenu(true);
    }
  });

  // ==========================================================================
  // Initialize Preference or System Default
  // ==========================================================================
  function init() {
    let savedLang = 'en';
    try {
      savedLang = localStorage.getItem('anaya_lang_pref') || 'en';
    } catch (e) {
      savedLang = 'en';
    }

    // Default is English as requested in spec
    setLanguage(savedLang, false);
  }

  // ==========================================================================
  // VIP Navbar: sliding pill indicator, scrolled state, hero parallax
  // ==========================================================================
  const navMenu = document.querySelector('.nav-menu');
  const indicator = document.querySelector('.nav-indicator');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const navHeader = document.getElementById('main-header');

  function moveTo(el) {
    if (!el || !indicator) return;
    const item = el.closest('li') || el;
    indicator.style.width = item.offsetWidth + 'px';
    indicator.style.transform = 'translateX(' + item.offsetLeft + 'px)';
    indicator.style.opacity = '1';
  }
  function moveIndicator() { moveTo(document.querySelector('.nav-link.active')); }

  navLinks.forEach(l => {
    l.addEventListener('mouseenter', () => moveTo(l));
    l.addEventListener('focus', () => moveTo(l));
  });
  if (navMenu) {
    navMenu.addEventListener('mouseleave', moveIndicator);
    navMenu.addEventListener('focusout', moveIndicator);
  }
  window.addEventListener('resize', moveIndicator);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveIndicator);
  window.addEventListener('load', moveIndicator);

  const navProgress = document.getElementById('nav-progress');
  function onScroll() {
    if (navHeader) navHeader.classList.toggle('scrolled', window.scrollY > 30);
    if (navProgress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      navProgress.style.setProperty('--p', p.toFixed(4));
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hover/parallax effect works ONLY while the mouse is over the spice image area
  const stage = document.getElementById('spice-stage');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (stage && canHover && !reduceMotion) {
    stage.addEventListener('mouseenter', () => stage.classList.add('is-hover'));
    stage.addEventListener('mousemove', (e) => {
      const r = stage.getBoundingClientRect();
      stage.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
      stage.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
    });
    stage.addEventListener('mouseleave', () => {
      stage.classList.remove('is-hover');
      stage.style.setProperty('--mx', 0);
      stage.style.setProperty('--my', 0);
    });
  }

  // About Us section scroll entrance observer
  const aboutSec = document.getElementById('about-us');
  if (aboutSec) {
    if ('IntersectionObserver' in window && !reduceMotion) {
      const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            aboutSec.classList.add('is-visible');
            aboutObserver.unobserve(aboutSec);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
      aboutObserver.observe(aboutSec);
    } else {
      aboutSec.classList.add('is-visible');
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
