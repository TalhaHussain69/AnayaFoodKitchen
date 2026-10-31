/**
 * Anaya Food — Products Dataset
 * Extracted directly from anaya_all_boxes.html
 * Architecture designed for easy addition of future products
 * model = 3D pack (type box|pouch, h/d in px at 300px width, face images in assets/products/3d/)
 * (the "?v=" suffix on image paths busts browser cache when a pack image is replaced)
 * Entries with popup:false show only an Order button (no Explore popup)
 * Entries with a "model" use their own 3D faces (type: box | pouch, h/d = pack height/depth at 300px width)
 */
window.ANAYA_PRODUCTS = [
  {
    "id": "qorma",
    "name": "Qorma Masala",
    "nameUrdu": "قورمہ مصالحہ",
    "tagline": "Rich Royal Gravy Blend",
    "taglineUrdu": "شاہی اور لذیذ قورمہ کے لیے روایتی مصالحہ",
    "color": "#7b2a91",
    "img": {
      "front": "assets/products/3d/qorma-front.jpg?v=4"
    },
    "model": {
      "type": "box",
      "h": 441,
      "d": 88,
      "front": "assets/products/3d/qorma-front.jpg?v=4",
      "top": "assets/products/3d/qorma-top.jpg?v=4",
      "right": "assets/products/3d/qorma-right.jpg?v=4",
      "back": "assets/products/3d/qorma-back.jpg?v=4",
      "left": "assets/products/3d/qorma-left.jpg?v=4"
    }
  },
  {
    "id": "biryani",
    "name": "Biryani Masala",
    "nameUrdu": "بریانی مصالحہ",
    "tagline": "Fragrant & Spiced Rice Blend",
    "taglineUrdu": "خوشبودار اور ذائقے دار روایتی بریانی کے لیے",
    "color": "#f29b12",
    "img": {
      "front": "assets/products/3d/biryani-front.jpg?v=4"
    },
    "model": {
      "type": "box",
      "h": 441,
      "d": 88,
      "front": "assets/products/3d/biryani-front.jpg?v=4",
      "top": "assets/products/3d/biryani-top.jpg?v=4",
      "right": "assets/products/3d/biryani-right.jpg?v=4",
      "back": "assets/products/3d/biryani-back.jpg?v=4",
      "left": "assets/products/3d/biryani-left.jpg?v=4"
    }
  },
  {
    "id": "karahi",
    "name": "Karahi Gosht Masala",
    "nameUrdu": "کڑاہی گوشت مصالحہ",
    "tagline": "Zesty & Robust Karahi Spice",
    "taglineUrdu": "چٹخارے دار اور خوشبودار کڑاہی گوشت کے لیے",
    "color": "#b3141c",
    "img": {
      "front": "assets/products/3d/karahi-front.jpg?v=4"
    },
    "model": {
      "type": "box",
      "h": 441,
      "d": 88,
      "top": "assets/products/3d/karahi-top.jpg?v=4",
      "front": "assets/products/3d/karahi-front.jpg?v=4",
      "right": "assets/products/3d/karahi-right.jpg?v=4",
      "back": "assets/products/3d/karahi-back.jpg?v=4",
      "left": "assets/products/3d/karahi-left.jpg?v=4"
    }
  },
  {
    "id": "fish",
    "name": "Fish Masala",
    "nameUrdu": "مچھلی مصالحہ",
    "tagline": "Crispy & Tangy Seafood Blend",
    "taglineUrdu": "کرسپی اور چٹپٹی فرائیڈ و سالن مچھلی کے لیے",
    "color": "#1b86d6",
    "img": {
      "front": "assets/products/3d/fish-front.jpg?v=2"
    },
    "model": {
      "type": "box",
      "h": 450,
      "d": 82,
      "top": "assets/products/3d/fish-top.jpg?v=2",
      "front": "assets/products/3d/fish-front.jpg?v=2",
      "right": "assets/products/3d/fish-right.jpg?v=2",
      "back": "assets/products/3d/fish-back.jpg?v=2",
      "left": "assets/products/3d/fish-left.jpg?v=2"
    }
  },
  {
    "id": "achar",
    "name": "Achar Gosht Masala",
    "nameUrdu": "اچار گوشت مصالحہ",
    "tagline": "Tangy Pickled Curry Flavours",
    "taglineUrdu": "کھٹے میٹھے روایتی اچاری ذائقے کے ساتھ",
    "color": "#2e3192",
    "img": {
      "front": "assets/products/3d/achar-front.jpg?v=2"
    },
    "model": {
      "type": "box",
      "h": 450,
      "d": 82,
      "top": "assets/products/3d/achar-top.jpg?v=2",
      "front": "assets/products/3d/achar-front.jpg?v=2",
      "right": "assets/products/3d/achar-right.jpg?v=2",
      "back": "assets/products/3d/achar-back.jpg?v=2",
      "left": "assets/products/3d/achar-left.jpg?v=2"
    }
  },
  {
    "id": "chaat",
    "name": "Chaat Masala",
    "nameUrdu": "چاٹ مصالحہ",
    "tagline": "All-Round Tangy Spice Sprinkle",
    "taglineUrdu": "ہر قسم کی چاٹ اور پھلوں کو لاجواب بنائیں",
    "color": "#d8141f",
    "img": {
      "front": "assets/products/3d/chaat-front.jpg?v=4"
    },
    "model": {
      "type": "box",
      "h": 441,
      "d": 88,
      "top": "assets/products/3d/chaat-top.jpg?v=4",
      "front": "assets/products/3d/chaat-front.jpg?v=4",
      "right": "assets/products/3d/chaat-right.jpg?v=4",
      "back": "assets/products/3d/chaat-back.jpg?v=4",
      "left": "assets/products/3d/chaat-left.jpg?v=4"
    }
  },
  {
    "id": "red-chilli",
    "name": "Red Chilli Powder",
    "nameUrdu": "لال مرچ پاؤڈر",
    "tagline": "Bold Heat & Rich Colour",
    "taglineUrdu": "تیز مرچ اور گہرا سرخ رنگ",
    "color": "#b3141c",
    "img": {
      "front": "assets/products/red-chilli.webp?v=2"
    },
    "model": {
      "type": "pouch",
      "h": 393,
      "d": 26,
      "sil": "assets/products/3d/red-chilli-sil.png?v=2",
      "front": "assets/products/3d/red-chilli-front.png?v=2"
    }
  },
  {
    "id": "turmeric",
    "name": "Turmeric Powder",
    "nameUrdu": "ہلدی پاؤڈر",
    "tagline": "Golden Colour & Earthy Flavour",
    "taglineUrdu": "سنہری رنگ اور خالص ذائقہ",
    "color": "#f2a900",
    "img": {
      "front": "assets/products/turmeric-powder.webp?v=2"
    },
    "model": {
      "type": "pouch",
      "h": 390,
      "d": 26,
      "front": "assets/products/3d/turmeric-front.png?v=2",
      "sil": "assets/products/3d/turmeric-sil.png?v=2"
    }
  },
  {
    "id": "garam-masala",
    "name": "Garam Masala Powder",
    "nameUrdu": "گرم مصالحہ پاؤڈر",
    "tagline": "Warm, Aromatic Whole-Spice Blend",
    "taglineUrdu": "خوشبودار اور گرم مصالحوں کا امتزاج",
    "color": "#b8702f",
    "img": {
      "front": "assets/products/3d/garam-masala-front.jpg?v=2"
    },
    "model": {
      "type": "box",
      "h": 425,
      "d": 81,
      "front": "assets/products/3d/garam-masala-front.jpg?v=2",
      "back": "assets/products/3d/garam-masala-back.jpg?v=2",
      "top": "assets/products/3d/garam-masala-top.jpg?v=2",
      "right": "assets/products/3d/garam-masala-right.jpg?v=2",
      "left": "assets/products/3d/garam-masala-left.jpg?v=2"
    }
  },
  {
    "id": "kali-mirch",
    "name": "Kali Mirch Powder",
    "nameUrdu": "کالی مرچ پاؤڈر",
    "tagline": "Freshly Ground Black Pepper",
    "taglineUrdu": "تازہ پسی ہوئی کالی مرچ",
    "color": "#5f5551",
    "img": {
      "front": "assets/products/3d/kali-mirch-front.jpg?v=2"
    },
    "model": {
      "type": "box",
      "h": 425,
      "d": 81,
      "front": "assets/products/3d/kali-mirch-front.jpg?v=2",
      "back": "assets/products/3d/kali-mirch-back.jpg?v=2",
      "top": "assets/products/3d/kali-mirch-top.jpg?v=2",
      "right": "assets/products/3d/kali-mirch-right.jpg?v=2",
      "left": "assets/products/3d/kali-mirch-left.jpg?v=2"
    }
  },
  {
    "id": "kasuri-methi",
    "name": "Kasuri Methi Leaves",
    "nameUrdu": "قصوری میتھی",
    "tagline": "Fragrant Dried Fenugreek Leaves",
    "taglineUrdu": "خوشبودار خشک میتھی کے پتے",
    "color": "#3a9d48",
    "img": {
      "front": "assets/products/3d/kasuri-methi-front.jpg?v=2"
    },
    "model": {
      "type": "box",
      "h": 413,
      "d": 86,
      "front": "assets/products/3d/kasuri-methi-front.jpg?v=2",
      "back": "assets/products/3d/kasuri-methi-back.jpg?v=2",
      "top": "assets/products/3d/kasuri-methi-top.jpg?v=2",
      "right": "assets/products/3d/kasuri-methi-right.jpg?v=2",
      "left": "assets/products/3d/kasuri-methi-left.jpg?v=2"
    }
  },
  {
    "id": "adrak",
    "name": "Adrak Powder",
    "nameUrdu": "ادرک پاؤڈر",
    "tagline": "Pure & Zesty Ginger",
    "taglineUrdu": "خالص اور تیز ذائقے والی ادرک",
    "color": "#c9a56b",
    "img": {
      "front": "assets/products/3d/adrak-front.jpg?v=2"
    },
    "model": {
      "type": "box",
      "h": 425,
      "d": 81,
      "front": "assets/products/3d/adrak-front.jpg?v=2",
      "back": "assets/products/3d/adrak-back.jpg?v=2",
      "top": "assets/products/3d/adrak-top.jpg?v=2",
      "right": "assets/products/3d/adrak-right.jpg?v=2",
      "left": "assets/products/3d/adrak-left.jpg?v=2"
    }
  },
  {
    "id": "lehsan",
    "name": "Lehsan Powder",
    "nameUrdu": "لہسن پاؤڈر",
    "tagline": "Fine & Flavourful Garlic",
    "taglineUrdu": "باریک اور لذیذ لہسن",
    "color": "#d9c274",
    "img": {
      "front": "assets/products/3d/lehsan-front.jpg?v=2"
    },
    "model": {
      "type": "box",
      "h": 425,
      "d": 81,
      "front": "assets/products/3d/lehsan-front.jpg?v=2",
      "back": "assets/products/3d/lehsan-back.jpg?v=2",
      "top": "assets/products/3d/lehsan-top.jpg?v=2",
      "right": "assets/products/3d/lehsan-right.jpg?v=2",
      "left": "assets/products/3d/lehsan-left.jpg?v=2"
    }
  },
  {
    "id": "dhania",
    "name": "Dhania Powder",
    "nameUrdu": "دھنیا پاؤڈر",
    "tagline": "Fresh Ground Coriander",
    "taglineUrdu": "تازہ پسا ہوا دھنیا",
    "color": "#35b34a",
    "img": {
      "front": "assets/products/3d/dhania-front.jpg?v=2"
    },
    "model": {
      "type": "box",
      "h": 413,
      "d": 86,
      "front": "assets/products/3d/dhania-front.jpg?v=2",
      "back": "assets/products/3d/dhania-back.jpg?v=2",
      "top": "assets/products/3d/dhania-top.jpg?v=2",
      "right": "assets/products/3d/dhania-right.jpg?v=2",
      "left": "assets/products/3d/dhania-left.jpg?v=2"
    }
  }
];
