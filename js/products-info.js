/**
 * Anaya Food — Product details (Specifications + Uses) for products that do not
 * have a printed cooking method. Shown in the product popup instead of the
 * "Cooking Method" / "On the Box" tabs.
 *
 * Each entry:
 *   weight : optional { en, ur }  (only where the net weight is printed on the pack)
 *   specs  : [ [key, en, ur], ... ]  key = form | ingredient | flavour | colour
 *   uses   : [ [en, ur], ... ]
 *   tip    : [ en, ur ]
 * Pack type, quality, hygiene and storage rows are added automatically
 * (they are printed on every Anaya Food pack).
 */
window.ANAYA_PRODUCT_INFO = {
  'red-chilli': {
    weight: { en: '50 g', ur: '50 گرام' },
    specs: [
      ['form', 'Fine ground powder', 'باریک پسا ہوا پاؤڈر'],
      ['ingredient', 'Red chilli', 'لال مرچ'],
      ['flavour', 'Hot & pungent', 'تیز اور چرپرا'],
      ['colour', 'Deep, rich red', 'گہرا سرخ']
    ],
    uses: [
      ['Adds heat and colour to karahi, salan and gravies', 'کڑاہی، سالن اور گریوی میں تیزی اور خوبصورت رنگ کے لیے'],
      ['Mix into marinades for tikka, BBQ and fried chicken', 'تکہ، بار بی کیو اور فرائیڈ چکن کی میرینیشن میں'],
      ['Tarka for daal, plus chutneys and pickles', 'دال کے تڑکے، چٹنی اور اچار میں'],
      ['Sprinkle over chaat, fries and snacks', 'چاٹ، فرائز اور اسنیکس پر چھڑکنے کے لیے']
    ],
    tip: ['Add it to warm oil for a few seconds, not a smoking-hot pan, so the colour blooms without burning.',
          'مرچ کو ہلکے گرم تیل میں چند سیکنڈ پکائیں، بہت تیز آنچ پر نہیں، تاکہ رنگ کھلے اور مرچ جلے نہیں۔']
  },

  'turmeric': {
    weight: { en: '100 g', ur: '100 گرام' },
    specs: [
      ['form', 'Fine ground powder', 'باریک پسا ہوا پاؤڈر'],
      ['ingredient', 'Turmeric root', 'ہلدی کی جڑ'],
      ['flavour', 'Earthy, mildly bitter', 'قدرتی خوشبو اور ہلکی تلخی'],
      ['colour', 'Golden yellow', 'سنہری پیلا']
    ],
    uses: [
      ['Base spice for almost every daal, salan and sabzi', 'تقریباً ہر دال، سالن اور سبزی کا بنیادی مصالحہ'],
      ['Gives a golden colour to pulao, zarda and rice dishes', 'پلاؤ، زردہ اور چاول کو سنہری رنگ دینے کے لیے'],
      ['Marinades for chicken, fish and meat', 'چکن، مچھلی اور گوشت کی میرینیشن میں'],
      ['Traditional haldi doodh, pickles and chutneys', 'روایتی ہلدی والے دودھ، اچار اور چٹنی میں']
    ],
    tip: ['Fry it in oil for a few seconds first to remove the raw taste. A little goes a long way.',
          'پہلے تیل میں چند سیکنڈ بھون لیں تاکہ کچا پن ختم ہو جائے۔ تھوڑی مقدار ہی کافی ہے۔']
  },

  'garam-masala': {
    specs: [
      ['form', 'Fine blended powder', 'باریک مصالحہ پاؤڈر'],
      ['ingredient', 'Blend of aromatic whole spices', 'خوشبودار ثابت مصالحوں کا امتزاج'],
      ['flavour', 'Warm & aromatic', 'گرم اور خوشبودار'],
      ['colour', 'Rich brown', 'گہرا بھورا']
    ],
    uses: [
      ['Finishing spice for curries, korma and karahi', 'سالن، قورمہ اور کڑاہی کے آخر میں خوشبو اور ذائقے کے لیے'],
      ['Layer into biryani and pulao for aroma', 'بریانی اور پلاؤ میں خوشبو بڑھانے کے لیے'],
      ['Marinades for kebabs, tikka and roasts', 'کباب، تکہ اور روسٹ کی میرینیشن میں'],
      ['Sprinkle over daal, sabzi and qeema at the end', 'دال، سبزی اور قیمے پر آخر میں چھڑکنے کے لیے']
    ],
    tip: ['Add it near the end of cooking so its aroma stays fresh. A pinch is usually enough.',
          'پکانے کے آخر میں ڈالیں تاکہ خوشبو تازہ رہے۔ عموماً ایک چٹکی کافی ہوتی ہے۔']
  },

  'kali-mirch': {
    specs: [
      ['form', 'Freshly ground powder', 'تازہ پسا ہوا پاؤڈر'],
      ['ingredient', 'Black pepper', 'کالی مرچ'],
      ['flavour', 'Sharp & pungent', 'تیز اور چرپرا'],
      ['colour', 'Dark grey-black', 'گہرا سیاہی مائل']
    ],
    uses: [
      ['Soups, yakhni and stews', 'سوپ، یخنی اور اسٹو میں'],
      ['Rubs and marinades for steaks, tikka and grills', 'اسٹیک، تکہ اور گرل کی میرینیشن اور رب میں'],
      ['Eggs, salads, fries and raita', 'انڈوں، سلاد، فرائز اور رائتے پر'],
      ['Masala chai and kahwa blends', 'مصالحہ چائے اور قہوے میں']
    ],
    tip: ['Add at the end for a sharp bite, or early in cooking for a mellower warmth.',
          'آخر میں ڈالیں تو تیز چبھن ملتی ہے، شروع میں ڈالیں تو نرم گرماہٹ۔']
  },

  'kasuri-methi': {
    specs: [
      ['form', 'Dried leaves', 'خشک پتے'],
      ['ingredient', 'Dried fenugreek (methi) leaves', 'خشک میتھی کے پتے'],
      ['flavour', 'Fragrant, slightly bitter-sweet', 'خوشبودار، ہلکا کڑوا میٹھا'],
      ['colour', 'Green', 'سبز']
    ],
    uses: [
      ['Crush over karahi, handi and butter chicken for a rich aroma', 'کڑاہی، ہانڈی اور بٹر چکن پر مسل کر ڈالیں، بھرپور خوشبو آئے گی'],
      ['Stir into daal, qeema and sabzi', 'دال، قیمے اور سبزی میں شامل کریں'],
      ['Knead into paratha, naan and roti dough', 'پراٹھے، نان اور روٹی کے آٹے میں گوندھیں'],
      ['Mix into marinades and masala gravies', 'میرینیشن اور مصالحے دار گریوی میں ملائیں']
    ],
    tip: ['Rub the leaves between your palms and add in the last 2 minutes to release the full aroma.',
          'پتوں کو ہتھیلیوں میں مسل کر پکانے کے آخری 2 منٹ میں ڈالیں تاکہ خوشبو پوری طرح آئے۔']
  },

  'adrak': {
    specs: [
      ['form', 'Fine ground powder', 'باریک پسا ہوا پاؤڈر'],
      ['ingredient', 'Dried ginger', 'خشک ادرک'],
      ['flavour', 'Zesty & warm', 'تیز اور گرم'],
      ['colour', 'Light golden tan', 'ہلکا سنہری بھورا']
    ],
    uses: [
      ['Quick substitute for fresh ginger in salan and gravies', 'سالن اور گریوی میں تازہ ادرک کا آسان متبادل'],
      ['Marinades for chicken, mutton and kebabs', 'چکن، مٹن اور کباب کی میرینیشن میں'],
      ['Chai, kahwa and warm winter drinks', 'چائے، قہوہ اور سردیوں کے گرم مشروبات میں'],
      ['Soups, baking and sweet dishes', 'سوپ، بیکنگ اور میٹھے پکوانوں میں']
    ],
    tip: ['Dried ginger is stronger than fresh, so start with a small amount and adjust to taste.',
          'خشک ادرک تازہ سے زیادہ تیز ہوتی ہے، اس لیے کم مقدار سے شروع کریں اور ذائقے کے مطابق بڑھائیں۔']
  },

  'lehsan': {
    specs: [
      ['form', 'Fine ground powder', 'باریک پسا ہوا پاؤڈر'],
      ['ingredient', 'Dehydrated garlic', 'خشک کیا ہوا لہسن'],
      ['flavour', 'Strong & savoury', 'تیز اور لذیذ'],
      ['colour', 'Creamy off-white', 'کریمی سفید']
    ],
    uses: [
      ['Karahi, qeema, daal and salan', 'کڑاہی، قیمے، دال اور سالن میں'],
      ['Marinades and BBQ rubs', 'میرینیشن اور بار بی کیو رب میں'],
      ['Garlic bread, fries and pizza', 'گارلک بریڈ، فرائز اور پیزا پر'],
      ['Dips, raita and chutneys', 'ڈپ، رائتے اور چٹنی میں']
    ],
    tip: ['Stir it in with the onions or a little water. Avoid frying it dry for long, as it can turn bitter.',
          'پیاز کے ساتھ یا تھوڑے پانی میں گھول کر ڈالیں۔ خشک حالت میں زیادہ دیر نہ بھونیں، ورنہ کڑوا ہو سکتا ہے۔']
  },

  'dhania': {
    specs: [
      ['form', 'Fine ground powder', 'باریک پسا ہوا پاؤڈر'],
      ['ingredient', 'Coriander seeds', 'ثابت دھنیا'],
      ['flavour', 'Mild & earthy with a citrus note', 'ہلکا، قدرتی خوشبو کے ساتھ لیموں جیسی تازگی'],
      ['colour', 'Greenish brown', 'سبزی مائل بھورا']
    ],
    uses: [
      ['Base masala for salan, qeema, chana and daal', 'سالن، قیمے، چنے اور دال کے بنیادی مصالحے میں'],
      ['Adds body and aroma to gravies', 'گریوی کو گاڑھا پن اور خوشبو دینے کے لیے'],
      ['Marinades and kebab mixes', 'میرینیشن اور کباب کے آمیزے میں'],
      ['Chutneys, raita and spice blends', 'چٹنی، رائتے اور مصالحہ جات کے آمیزے میں']
    ],
    tip: ['Add it with the onions and sauté briefly so the flavour deepens.',
          'پیاز کے ساتھ ڈال کر ہلکا بھونیں تاکہ ذائقہ گہرا ہو جائے۔']
  }
};
