import { useState } from "react";


/* ─────────────────────────────────────────
   MENU DATA  (updated prices from notebook)
───────────────────────────────────────── */
const MENU_DATA = {
  "Season Specials": [
    {
      id: 1, name: "Mango Cheesecake", description: "Classic NY-style baked cheesecake with fresh mangoes & buttery crust", details: "Our signature mango cheesecake features a velvety filling made with premium cream cheese and fresh Alphonso mangoes, set on a golden buttery biscuit crust. Perfect for celebrations or gifting.", category: "Season Specials", tag: "New", allergens: "Dairy, Gluten, Eggs", leadTime: "48 hrs", image: "./assets/mangock.jpg",
      weights: [{ label: "½ kg", price: 650 }, { label: "1 kg", price: 1200 }]
    },
    {
      id: 2, name: "Tres Leches", description: "Light sponge soaked in blend of milks, topped with fresh mangoes", details: "A dreamy Latin-inspired dessert — soft sponge soaked in three kinds of milk, crowned with lightly whipped cream and fresh mango slices. Moist, airy and indulgent.", category: "Season Specials", tag: "Chef's Pick", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/tl.jpg",
      weights: [{ label: "Slice", price: 450 }]
    },
    {
      id: 3, name: "Cocoa Mango Tart", description: "Crispy cocoa shell, dense chocolate ganache, fresh mango", details: "A crisp cocoa sablé shell filled with rich dark chocolate ganache, topped with fresh diced mangoes. The contrast of bitter chocolate and sweet mango is irresistible.", category: "Season Specials", tag: "Limited", allergens: "Dairy, Gluten", leadTime: "24 hrs", image: "./assets/mangotrt.jpg",
      weights: [{ label: "Piece", price: 150 }]
    },
  ],
  Pastries: [
    {
      id: 4, name: "Tiramisu", description: "Classic Italian layers of espresso-soaked ladyfingers & mascarpone", details: "Authentic tiramisu made with mascarpone cream, savoiardi dipped in strong espresso, dusted with fine cocoa. No shortcuts — the real deal.", category: "Pastries", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
      weights: [{ label: "180gm", price: 325 }]
    },
    {
      id: 5, name: "Lemon Tart", description: "Zesty lemon curd in a perfectly baked buttery shell", details: "Bright, tangy lemon curd made with fresh juice and zest, nestled in a crumbly buttery shortcrust shell. Finished with a light torched meringue.", category: "Pastries", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/lt.jpg",
      weights: [{ label: "Piece", price: 175 }]
    },
    {
      id: 6, name: "Dark Choco Mousse Slice", description: "Silky dark chocolate mousse on a crisp chocolate feuilletine base", details: "Layers of intense dark chocolate mousse on a crispy feuilletine base. Light airy mousse meets satisfying crunch in every bite.", category: "Pastries", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/ccc.jpg",
      weights: [{ label: "Slice", price: 225 }]
    },
  ],
  Cheesecakes: [
    {
      id: 7, name: "Chocolate Cheesecake", description: "Rich chocolate swirled into creamy baked cheesecake", details: "Baked cheesecake marbled with rich dark chocolate swirls on an Oreo cookie base. Creamy, dense and perfectly balanced.", category: "Cheesecakes", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/bacc.jpg",
      weights: [{ label: "Slice", price: 225 }]
    },
    {
      id: 8, name: "Basque Cheesecake", description: "Beautifully burnt top with a creamy, custardy molten centre", details: "Born in San Sebastián — intentionally 'burnt' outside for caramelised bitterness, while the centre stays custardy and almost lava-like.", category: "Cheesecakes", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/basque.jpeg",
      weights: [{ label: "Slice", price: 225 }]
    },
    {
      id: 9, name: "Caramel Cheesecake", description: "Smooth cheesecake with ribbons of salted caramel", details: "Classic NY baked cheesecake elevated with thick ribbons of house-made salted caramel. The pinch of fleur de sel on top brings it all together.", category: "Cheesecakes", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/cacc.jpg",
      weights: [{ label: "Slice", price: 225 }]
    },
    {
      id: 10, name: "Gulabjamun Cheesecake", description: "Fusion cheesecake with rose, cardamom & gulabjamun", details: "East-meets-West — creamy cheesecake infused with rose water and cardamom, topped with soft gulabjamun pieces in sugar syrup.", category: "Cheesecakes", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/gulabjam.jpg",
      weights: [{ label: "Slice", price: 250 }]
    },
  ],
  Cookies: [
    {
      id: 11, name: "Choco Chunk", description: "Loaded with premium chocolate chunks, perfectly chewy", details: "Thick bakery-style cookies with dark & milk chocolate chunks. Crisp edges, gooey centre — just how a perfect cookie should be. 180gm pack.", category: "Cookies", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80",
      weights: [{ label: "180gm", price: 275 }]
    },
    {
      id: 12, name: "Cranberry Oat", description: "Tart cranberries and hearty oats in a buttery cookie", details: "Buttery cookies with dried cranberries, toasted oats and a gentle tartness. A sophisticated snack that pairs beautifully with tea. 180gm pack.", category: "Cookies", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/cranoat.jpg",
      weights: [{ label: "180gm", price: 295 }]
    },
    {
      id: 13, name: "Dark Chocolate", description: "Intense double dark chocolate for true choco lovers", details: "Double dark cookies — cocoa in the dough AND dark chocolate chips folded in. Rich, intense and barely sweet. 180gm pack.", category: "Cookies", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/darkc.jpg",
      weights: [{ label: "180gm", price: 275 }]
    },
    {
      id: 14, name: "Cookie Bytes", description: "Mini bite-sized cookies in assorted flavours", details: "Adorable mini cookies perfect for gifting, snack boxes or party favours. Crisp, buttery and packed with flavour. 180gm pack.", category: "Cookies", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/cock.jpg",
      weights: [{ label: "180gm", price: 275 }]
    },
    {
      id: 15, name: "Butter Cookies", description: "Melt-in-mouth classic butter cookies, simply perfect", details: "Classic Danish-style butter cookies — delicate, lightly sweet and perfectly golden. They practically dissolve on the tongue. 180gm pack.", category: "Cookies", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/butcookies.jpg",
      weights: [{ label: "180gm", price: 250 }]
    },
    {
      id: 25, name: "Peanut Butter", description: "Rich peanut butter cookies with a soft chewy centre", details: "Made with real peanut butter for deep nutty flavour. Chewy, slightly salty and utterly addictive. 180gm pack.", category: "Cookies", tag: "New", allergens: "Dairy, Gluten, Eggs, Nuts", leadTime: "24 hrs", image: "./assets/peanutbut.jpg",
      weights: [{ label: "180gm", price: 295 }]
    },
    {
      id: 26, name: "Red Velvet", description: "Gorgeous red velvet cookies with cream cheese chips", details: "Vibrant red velvet cookies studded with cream cheese chips. A dramatic, indulgent treat that's as beautiful as it tastes. 180gm pack.", category: "Cookies", tag: "New", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/redwel.png",
      weights: [{ label: "180gm", price: 295 }]
    },
  ],
  Brownies: [
    {
      id: 16, name: "Chocolate Fudge", description: "Fudgy dark chocolate brownie with a crinkly top", details: "Dense, fudgy brownies with quality dark chocolate and real butter. Crinkly top, truffle-like interior. Generously cut squares. 180gm pack.", category: "Brownies", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs", image: "./assets/fudgeb.png",
      weights: [{ label: "180gm", price: 275 }]
    },
    {
      id: 17, name: "Peanut Butter Brownie", description: "Chocolate brownie swirled with thick peanut butter", details: "Classic chocolate brownie base swirled with thick creamy peanut butter before baking. The salty-sweet combo is absolutely addictive. 180gm pack.", category: "Brownies", allergens: "Dairy, Gluten, Eggs, Nuts", leadTime: "24 hrs", image: "./assets/pbb.png",
      weights: [{ label: "180gm", price: 275 }]
    },
    {
      id: 18, name: "Walnut Brownie", description: "Fudgy chocolate brownie loaded with chunky walnuts", details: "The original classic. Deep chocolate brownie with generous walnut chunks throughout, adding satisfying nutty crunch. 180gm pack.", category: "Brownies", allergens: "Dairy, Gluten, Eggs, Nuts", leadTime: "24 hrs", image: "./assets/almb.png",
      weights: [{ label: "180gm", price: 275 }]
    },
  ],
  Chocolates: [
    { id: 19, name: "Fudge", description: "Creamy hand-crafted chocolate fudge", details: "Hand-poured rich chocolate fudge — smooth, melt-in-mouth and deeply chocolatey. Made in small batches.", category: "Chocolates", allergens: "Dairy", leadTime: "24 hrs", image: "./assets/chocolatefudge.png", weights: [{ label: "Piece", price: 25 }] },
    { id: 20, name: "Caramel", description: "Silky caramel enrobed in dark chocolate", details: "Soft buttery caramel centre inside a crisp dark chocolate shell. The interplay of sweet caramel and bitter chocolate is elegant.", category: "Chocolates", allergens: "Dairy", leadTime: "24 hrs", image: "./assets/caramel.png", weights: [{ label: "Piece", price: 25 }] },
    { id: 21, name: "Paan", description: "Exotic paan flavoured chocolate bonbon", details: "Uniquely Indian — chocolate shell filled with fragrant paan ganache made with betel leaf essence, rose and fennel. Nostalgic and original.", category: "Chocolates", allergens: "Dairy", leadTime: "24 hrs", image: "./assets/paan.png", weights: [{ label: "Piece", price: 25 }] },
    { id: 22, name: "Gulkand", description: "Fragrant rose jam filled chocolate", details: "Dark chocolate shells filled with aromatic gulkand — rose petal preserve in sugar syrup. Floral, sweet and irresistible.", category: "Chocolates", allergens: "Dairy", leadTime: "24 hrs", image: "./assets/gulkandchocolate.png", weights: [{ label: "Piece", price: 25 }] },
    { id: 23, name: "Rum", description: "Dark rum infused chocolate truffle", details: "Dark chocolate ganache spiked with aged dark rum, rolled in cocoa powder. Rich, boozy and utterly indulgent.", category: "Chocolates", allergens: "Dairy, Alcohol", leadTime: "24 hrs", image: "./assets/rum.png", weights: [{ label: "Piece", price: 35 }] },
    { id: 24, name: "Baileys", description: "Smooth Baileys Irish Cream bonbon", details: "Milk chocolate shells filled with silky Baileys Irish Cream ganache. Creamy, boozy and delightful — always the first to go.", category: "Chocolates", allergens: "Dairy, Alcohol", leadTime: "24 hrs", image: "./assets/baileys.png", weights: [{ label: "Piece", price: 35 }] },
  ],
};

const ALL_ITEMS = Object.values(MENU_DATA).flat();
const MIN_ORDER = 249;

/* ─── CSS ─── */
const makeCSS = (dark) => `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: ${dark ? "#1A1410" : "#FAF6F0"}; color: ${dark ? "#EDE0D4" : "#3D2F23"}; transition: background 0.3s, color 0.3s; }

  /* TOKENS */
  :root {
    --p: #735F4D; --a: #A96A6F;
    --bg: ${dark ? "#1A1410" : "#FAF6F0"};
    --bg2: ${dark ? "#241C16" : "#F5EFE8"};
    --bg3: ${dark ? "#2E231C" : "#FFFFFF"};
    --border: ${dark ? "rgba(255,255,255,0.08)" : "rgba(115,95,77,0.15)"};
    --text: ${dark ? "#EDE0D4" : "#3D2F23"};
    --muted: ${dark ? "#9B8878" : "#9B8878"};
    --card-shadow: ${dark ? "0 4px 24px rgba(0,0,0,0.4)" : "0 4px 20px rgba(115,95,77,0.1)"};
  }

  /* NAV */
  .nav { position:fixed;top:0;left:0;right:0;z-index:100;background:${dark ? "rgba(26,20,16,0.96)" : "rgba(250,246,240,0.97)"};backdrop-filter:blur(14px);border-bottom:1px solid var(--border);transition:background 0.3s; }
  .nav-inner { max-width:1280px;margin:0 auto;padding:0 20px;height:64px;display:flex;align-items:center;justify-content:space-between;gap:10px; }
  .logo-area { display:flex;align-items:center;gap:9px;cursor:pointer;flex-shrink:0;user-select:none; }
  .logo-circle { width:38px;height:38px;border-radius:50%;background:var(--p);display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative; }
  .logo-circle img { width:100%;height:100%;object-fit:cover; }
  .logo-circle input { position:absolute;inset:0;opacity:0;cursor:pointer;width:100%; }
  .logo-text { font-family:'Playfair Display',serif;font-size:17px;font-weight:700;color:var(--text);line-height:1.1; }
  .logo-sub { font-size:9px;color:var(--muted);letter-spacing:0.1em;text-transform:uppercase; }
  .nav-links { display:flex;gap:2px;flex:1;justify-content:center; }
  .nav-link { padding:7px 13px;border-radius:20px;font-size:13px;font-weight:500;cursor:pointer;color:var(--muted);transition:all 0.2s;border:none;background:none;font-family:'DM Sans',sans-serif;white-space:nowrap; }
  .nav-link:hover,.nav-link.active { background:var(--bg2);color:var(--text); }
  .nav-actions { display:flex;gap:7px;align-items:center;flex-shrink:0; }
  .icon-btn { width:38px;height:38px;border-radius:50%;border:1.5px solid var(--border);background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:15px;transition:all 0.2s;color:var(--text); }
  .icon-btn:hover { background:var(--bg2); }
  .cart-wrap { position:relative; }
  .cart-badge { position:absolute;top:-4px;right:-4px;background:var(--a);color:white;border-radius:50%;width:17px;height:17px;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center; }

  /* DARK MODE TOGGLE */
  .dm-toggle { width:46px;height:26px;border-radius:13px;border:none;cursor:pointer;position:relative;transition:background 0.3s;background:${dark ? "#A96A6F" : "rgba(115,95,77,0.25)"};flex-shrink:0; }
  .dm-toggle::after { content:'${dark ? "🌙" : "☀️"}';position:absolute;top:50%;transform:translateY(-50%);${dark ? "right:4px" : "left:4px"};font-size:13px;transition:all 0.3s; }

  /* HAMBURGER */
  .hamburger { display:none;flex-direction:column;gap:5px;cursor:pointer;padding:7px;border:none;background:none; }
  .hamburger span { width:21px;height:2px;background:var(--text);border-radius:2px;transition:all 0.25s;display:block; }
  .hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
  .hamburger.open span:nth-child(2){opacity:0;}
  .hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
  .mobile-menu { display:none;position:fixed;top:64px;left:0;right:0;background:${dark ? "rgba(26,20,16,0.98)" : "rgba(250,246,240,0.98)"};backdrop-filter:blur(14px);border-bottom:1px solid var(--border);z-index:99;flex-direction:column;padding:8px 14px 16px; }
  .mobile-menu.open { display:flex; }
  .mob-link { padding:13px 14px;font-size:15px;font-weight:500;cursor:pointer;color:var(--text);border:none;background:none;text-align:left;border-radius:10px;width:100%;font-family:'DM Sans',sans-serif;transition:background 0.15s; }
  .mob-link:hover,.mob-link.active { background:var(--bg2); }

  @media(max-width:700px){ .nav-links{display:none;} .hamburger{display:flex;} }

  /* PAGE */
  .page { padding-top:64px;min-height:100vh; }

  /* HERO */
  .hero { background:${dark ? "linear-gradient(135deg,#241C16 0%,#1A1410 60%,#2E1F18 100%)" : "linear-gradient(135deg,#F5EFE8 0%,#FAF6F0 60%,#F0E8DF 100%)"};padding:72px 24px 58px;text-align:center;position:relative;overflow:hidden;transition:background 0.3s; }
  .hero::before{content:'';position:absolute;top:-60px;right:-60px;width:300px;height:300px;border-radius:50%;background:rgba(169,106,111,${dark ? ".12" : ".07"});}
  .hero::after{content:'';position:absolute;bottom:-80px;left:-80px;width:380px;height:380px;border-radius:50%;background:rgba(115,95,77,${dark ? ".1" : ".05"});}
  .hero-tag { display:inline-block;padding:6px 16px;background:rgba(169,106,111,0.15);border-radius:20px;font-size:11px;font-weight:500;color:var(--a);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:18px; }
  .hero-title { font-family:'Playfair Display',serif;font-size:clamp(34px,7vw,72px);font-weight:700;color:var(--text);line-height:1.05;margin-bottom:10px; }
  .hero-title em { color:var(--a);font-style:italic; }
  .hero-sub { font-size:14px;color:var(--muted);margin-bottom:28px;font-weight:300; }
  .hero-btns { display:flex;gap:12px;justify-content:center;flex-wrap:wrap; }
  .btn-p { padding:12px 28px;background:var(--p);color:white;border:none;border-radius:30px;font-size:14px;font-weight:500;cursor:pointer;transition:all 0.2s;font-family:'DM Sans',sans-serif; }
  .btn-p:hover { background:#5c4c3d;transform:translateY(-1px); }
  .btn-o { padding:12px 28px;background:transparent;color:var(--p);border:1.5px solid var(--p);border-radius:30px;font-size:14px;font-weight:500;cursor:pointer;transition:all 0.2s;font-family:'DM Sans',sans-serif; }
  .btn-o:hover { background:var(--bg2); }

  /* SECTIONS */
  .sec { max-width:1280px;margin:0 auto;padding:52px 20px; }
  .sec-title { font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:var(--text); }
  .sec-line { width:40px;height:3px;background:var(--a);border-radius:2px;margin-top:8px;margin-bottom:30px; }

  /* CATEGORY TABS */
  .cat-tabs { display:flex;gap:7px;flex-wrap:wrap;margin-bottom:28px; }
  .cat-tab { padding:7px 14px;border-radius:20px;font-size:12px;font-weight:500;cursor:pointer;border:1.5px solid var(--border);background:transparent;color:var(--muted);transition:all 0.18s;font-family:'DM Sans',sans-serif; }
  .cat-tab:hover,.cat-tab.active { background:var(--p);color:white;border-color:var(--p); }

  /* MENU GRID */
  .mgrid { display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:18px; }
  @media(max-width:500px){ .mgrid{grid-template-columns:1fr 1fr;gap:12px;} }
  @media(max-width:360px){ .mgrid{grid-template-columns:1fr;} }

  /* CARD */
  .card { background:var(--bg3);border-radius:16px;overflow:hidden;border:1px solid var(--border);transition:all 0.25s;cursor:pointer;box-shadow:var(--card-shadow); }
  .card:hover { transform:translateY(-4px);box-shadow:${dark ? "0 16px 40px rgba(0,0,0,0.5)" : "0 16px 40px rgba(115,95,77,0.18)"}; }
  .card-img { width:100%;height:175px;object-fit:cover;display:block; }
  .card-ph { width:100%;height:175px;background:var(--bg2);display:none;align-items:center;justify-content:center;font-size:34px; }
  .card-body { padding:13px; }
  .ctag { display:inline-block;padding:2px 8px;border-radius:8px;font-size:10px;font-weight:600;background:rgba(169,106,111,0.15);color:var(--a);margin-bottom:6px; }
  .cname { font-family:'Playfair Display',serif;font-size:15px;font-weight:600;color:var(--text);margin-bottom:4px;line-height:1.3; }
  .cdesc { font-size:11px;color:var(--muted);line-height:1.5;margin-bottom:11px; }
  .cfoot { display:flex;align-items:center;justify-content:space-between;gap:8px; }
  .cprice { font-size:13px;font-weight:700;color:var(--p);flex:1;min-width:0; }
  .add-btn { width:30px;height:30px;border-radius:50%;background:var(--p);color:white;border:none;font-size:17px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;flex-shrink:0; }
  .add-btn:hover { background:var(--a);transform:scale(1.1); }

  /* WEIGHT SELECTOR (in card) */
  .weight-pills { display:flex;gap:5px;flex-wrap:wrap;margin-bottom:9px; }
  .wpill { padding:3px 9px;border-radius:8px;font-size:11px;font-weight:500;border:1.5px solid var(--border);background:transparent;color:var(--muted);cursor:pointer;transition:all 0.15s;font-family:'DM Sans',sans-serif; }
  .wpill.sel { background:var(--p);color:white;border-color:var(--p); }

  /* ITEM MODAL */
  .modal-bg { position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:400;display:flex;align-items:flex-end;justify-content:center;padding:0; }
  @media(min-width:600px){ .modal-bg{align-items:center;padding:20px;} }
  .modal { background:var(--bg3);border-radius:24px 24px 0 0;width:100%;max-width:560px;max-height:92vh;overflow-y:auto;animation:sUp 0.28s ease;position:relative; }
  @media(min-width:600px){ .modal{border-radius:24px;max-height:88vh;} }
  @keyframes sUp{from{transform:translateY(40px);opacity:0}to{transform:translateY(0);opacity:1}}
  .modal-img { width:100%;height:220px;object-fit:cover;display:block; }
  .modal-body { padding:22px; }
  .mtag { display:inline-block;padding:3px 10px;border-radius:9px;font-size:11px;font-weight:600;background:rgba(169,106,111,0.15);color:var(--a);margin-bottom:9px; }
  .mname { font-family:'Playfair Display',serif;font-size:24px;font-weight:700;color:var(--text);margin-bottom:6px; }
  .mprice { font-size:18px;font-weight:700;color:var(--p);margin-bottom:14px; }
  .mdesc { font-size:13px;color:var(--muted);line-height:1.7;margin-bottom:13px; }
  .mdetail { font-size:13px;color:var(--text);line-height:1.75;margin-bottom:18px; }
  .mmeta { display:flex;gap:7px;flex-wrap:wrap;margin-bottom:18px; }
  .mpill { font-size:11px;color:var(--muted);background:var(--bg2);padding:5px 10px;border-radius:8px; }
  .modal-weights { margin-bottom:18px; }
  .modal-weights-label { font-size:12px;font-weight:600;color:var(--muted);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.08em; }
  .modal-weight-opts { display:flex;gap:8px;flex-wrap:wrap; }
  .mwopt { padding:9px 16px;border-radius:10px;border:1.5px solid var(--border);background:transparent;color:var(--text);cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;transition:all 0.15s;text-align:center; }
  .mwopt .wlabel { font-weight:600;display:block; }
  .mwopt .wprc { color:var(--p);font-size:14px;font-weight:700; }
  .mwopt.sel { border-color:var(--p);background:rgba(115,95,77,0.12); }
  .madd-btn { width:100%;padding:14px;background:var(--p);color:white;border:none;border-radius:30px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background 0.2s; }
  .madd-btn:hover { background:#5c4c3d; }
  .modal-x { position:absolute;top:13px;right:13px;width:32px;height:32px;border-radius:50%;background:${dark ? "rgba(36,28,22,0.9)" : "rgba(250,246,240,0.92)"};border:none;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;z-index:2;color:var(--text); }

  /* SEARCH */
  .sbg { position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:200;display:flex;align-items:flex-start;justify-content:center;padding-top:84px;padding-left:16px;padding-right:16px; }
  .sbox { background:var(--bg3);border-radius:18px;padding:18px;width:100%;max-width:540px;box-shadow:0 20px 60px rgba(0,0,0,0.3);max-height:76vh;display:flex;flex-direction:column; }
  .sinput-wrap { display:flex;align-items:center;gap:10px;border:1.5px solid var(--border);border-radius:11px;padding:9px 13px;margin-bottom:13px; }
  .sinput { flex:1;border:none;outline:none;font-size:15px;color:var(--text);background:transparent;font-family:'DM Sans',sans-serif; }
  .sresults { overflow-y:auto;flex:1; }
  .sitem { display:flex;align-items:center;gap:11px;padding:9px 7px;border-radius:10px;cursor:pointer;transition:background 0.15s; }
  .sitem:hover { background:var(--bg2); }
  .simg { width:40px;height:40px;border-radius:8px;object-fit:cover;flex-shrink:0; }
  .sname { font-weight:500;font-size:13px;color:var(--text); }
  .scat { font-size:11px;color:var(--muted); }
  .sprice { margin-left:auto;font-weight:700;font-size:13px;color:var(--p);white-space:nowrap; }
  .slabel { font-size:10px;color:var(--muted);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.08em;padding:0 7px; }

  /* CART */
  .cart-ov { position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:299; }
  .cart-panel { position:fixed;right:0;top:0;bottom:0;width:min(380px,100vw);background:var(--bg3);z-index:300;box-shadow:-8px 0 40px rgba(0,0,0,0.2);display:flex;flex-direction:column;transform:translateX(100%);transition:transform 0.3s ease; }
  .cart-panel.open { transform:translateX(0); }
  .cart-hd { padding:18px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between; }
  .cart-title { font-family:'Playfair Display',serif;font-size:19px;font-weight:700;color:var(--text); }
  .xbtn { width:32px;height:32px;border-radius:50%;border:1px solid var(--border);background:transparent;cursor:pointer;font-size:14px;color:var(--muted);display:flex;align-items:center;justify-content:center; }
  .xbtn:hover { background:var(--bg2); }
  .cart-body { flex:1;overflow-y:auto;padding:12px 18px; }
  .ci { display:flex;gap:10px;padding:11px 0;border-bottom:1px solid var(--border); }
  .ci-img { width:46px;height:46px;border-radius:8px;object-fit:cover;flex-shrink:0; }
  .ci-name { font-weight:500;font-size:13px;color:var(--text);margin-bottom:2px; }
  .ci-variant { font-size:11px;color:var(--muted);margin-bottom:3px; }
  .ci-price { font-size:12px;color:var(--a);font-weight:600; }
  .qty-row { display:flex;align-items:center;gap:7px;margin-top:6px; }
  .qb { width:24px;height:24px;border-radius:50%;border:1px solid var(--border);background:transparent;cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;color:var(--p); }
  .qb:hover { background:var(--bg2); }
  .qv { font-size:13px;font-weight:500;width:18px;text-align:center;color:var(--text); }
  .rmbtn { background:none;border:none;color:var(--border);cursor:pointer;font-size:14px;padding:3px;transition:color 0.15s;margin-left:auto;align-self:flex-start; }
  .rmbtn:hover { color:var(--a); }
  .empty-c { text-align:center;padding:48px 20px;color:var(--muted); }
  .cart-ft { padding:15px 18px;border-top:1px solid var(--border); }
  .cart-total { display:flex;justify-content:space-between;font-size:15px;font-weight:600;color:var(--text);margin-bottom:8px; }
  .warn-box { border-radius:10px;padding:9px 13px;font-size:12px;margin-bottom:10px;text-align:center; }
  .warn-red { background:${dark ? "rgba(169,106,111,0.15)" : "#FEF0F0"};border:1px solid rgba(169,106,111,0.3);color:#A96A6F; }
  .warn-grn { background:${dark ? "rgba(80,160,100,0.12)" : "#F0FEF4"};border:1px solid rgba(80,160,100,0.3);color:#3a8a52; }
  .co-btn { width:100%;padding:14px;background:var(--p);color:white;border:none;border-radius:30px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background 0.2s; }
  .co-btn:hover:not(:disabled) { background:#5c4c3d; }
  .co-btn:disabled { opacity:0.45;cursor:not-allowed; }

  /* CONTACT */
  .cw { max-width:660px;margin:0 auto;padding:52px 20px; }
  .chero { background:var(--bg2);border-radius:18px;padding:34px 24px;margin-bottom:26px;text-align:center; }
  .ctitle { font-family:'Playfair Display',serif;font-size:30px;color:var(--text);margin-bottom:8px; }
  .csub { color:var(--muted);font-size:14px;margin-bottom:22px; }
  .wa-btn { display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:#25D366;color:white;border:none;border-radius:30px;font-size:14px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all 0.2s;text-decoration:none; }
  .wa-btn:hover { background:#1aa358;transform:translateY(-1px); }
  .cc { background:var(--bg3);border-radius:13px;padding:18px;border:1px solid var(--border);margin-bottom:13px;display:flex;align-items:center;gap:14px; }
  .ci2 { width:44px;height:44px;border-radius:50%;background:var(--bg2);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0; }
  .cct { font-weight:600;font-size:13px;color:var(--text);margin-bottom:3px; }
  .ccv { font-size:12px;color:var(--muted); }
  .igrid { display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:22px; }
  @media(max-width:460px){ .igrid{grid-template-columns:1fr;} }
  .ibox { background:var(--bg2);border-radius:11px;padding:16px;text-align:center; }
  .ibt { font-size:10px;color:var(--muted);margin-bottom:4px;text-transform:uppercase;letter-spacing:0.07em; }
  .ibv { font-family:'Playfair Display',serif;font-size:14px;color:var(--text);font-weight:600; }

  /* ABOUT */
  .aw { max-width:860px;margin:0 auto;padding:52px 20px; }
  .agrid { display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;margin-bottom:48px; }
  @media(max-width:640px){ .agrid{grid-template-columns:1fr;} }
  .aimg { border-radius:16px;overflow:hidden;height:300px; }
  .aimg img { width:100%;height:100%;object-fit:cover; }
  .ah { font-family:'Playfair Display',serif;font-size:30px;font-weight:700;color:var(--text);line-height:1.2;margin-bottom:13px; }
  .ap { font-size:14px;color:var(--muted);line-height:1.8;margin-bottom:14px; }
  .fstrip { display:grid;grid-template-columns:repeat(3,1fr);gap:16px;background:var(--bg2);border-radius:16px;padding:26px; }
  @media(max-width:540px){ .fstrip{grid-template-columns:1fr;} }
  .feat { text-align:center; }
  .fi { font-size:24px;margin-bottom:7px; }
  .ft { font-weight:600;font-size:13px;color:var(--text);margin-bottom:4px; }
  .fd { font-size:12px;color:var(--muted);line-height:1.5; }

  /* CAT GRID */
  .cat-grid { display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:11px; }
  @media(max-width:400px){ .cat-grid{grid-template-columns:repeat(3,1fr);} }
  .cat-card { background:var(--bg3);border-radius:12px;padding:14px 8px;text-align:center;cursor:pointer;border:1px solid var(--border);transition:all 0.2s; }
  .cat-card:hover { transform:translateY(-3px);box-shadow:var(--card-shadow); }
  .cat-card-icon { font-size:22px;margin-bottom:6px; }
  .cat-card-name { font-size:11px;font-weight:500;color:var(--text); }
  .cat-card-count { font-size:10px;color:var(--muted);margin-top:2px; }

  /* CART SUMMARY IN CONTACT */
  .cart-summary { margin-top:24px;padding:18px;background:var(--bg2);border-radius:13px; }
`;

/* ─── WEIGHT SELECTOR HOOK ─── */
function useWeightState(item) {
  const [idx, setIdx] = useState(0);
  const weight = item.weights[idx] || item.weights[0];
  return { idx, setIdx, weight };
}

/* ─── MENU CARD ─── */
function MenuCard({ item, onOpen }) {
  const { idx, setIdx, weight } = useWeightState(item);
  return (
    <div className="card" onClick={() => onOpen(item, idx)}>
      <img src={item.image} alt={item.name} className="card-img"
        onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
      <div className="card-ph">🍰</div>
      <div className="card-body">
        {item.tag && <span className="ctag">{item.tag}</span>}
        <div className="cname">{item.name}</div>
        <div className="cdesc">{item.description}</div>
        {item.weights.length > 1 && (
          <div className="weight-pills">
            {item.weights.map((w, i) => (
              <button key={i} className={`wpill ${idx === i ? "sel" : ""}`}
                onClick={e => { e.stopPropagation(); setIdx(i); }}>
                {w.label}
              </button>
            ))}
          </div>
        )}
        <div className="cfoot">
          <div className="cprice">₹{weight.price}{item.weights.length > 1 ? ` · ${weight.label}` : item.weights[0].label !== "Piece" && item.weights[0].label !== "Slice" ? ` / ${weight.label}` : ""}</div>
          <button className="add-btn" onClick={e => { e.stopPropagation(); onOpen(item, idx); }} title="View & add">+</button>
        </div>
      </div>
    </div>
  );
}

/* ─── ITEM MODAL ─── */
function ItemModal({ item, initIdx, onAdd, onClose }) {
  const [selIdx, setSelIdx] = useState(initIdx || 0);
  const sel = item.weights[selIdx];
  return (
    <div className="modal-bg" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal">
        <button className="modal-x" onClick={onClose}>✕</button>
        <img src={item.image} alt={item.name} className="modal-img"
          onError={e => e.target.style.display = "none"} />
        <div className="modal-body">
          {item.tag && <span className="mtag">{item.tag}</span>}
          <div className="mname">{item.name}</div>
          <div className="mprice">₹{sel.price} <span style={{ fontSize: 13, fontWeight: 400, color: "var(--muted)" }}>/ {sel.label}</span></div>
          <div className="mdesc">{item.description}</div>
          <div className="mdetail">{item.details}</div>
          {item.weights.length > 1 && (
            <div className="modal-weights">
              <div className="modal-weights-label">Choose size</div>
              <div className="modal-weight-opts">
                {item.weights.map((w, i) => (
                  <button key={i} className={`mwopt ${selIdx === i ? "sel" : ""}`} onClick={() => setSelIdx(i)}>
                    <span className="wlabel">{w.label}</span>
                    <span className="wprc">₹{w.price}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="mmeta">
            <span className="mpill">⏱ {item.leadTime}</span>
            <span className="mpill">⚠ {item.allergens}</span>
            <span className="mpill">📦 Made to order</span>
          </div>
          <button className="madd-btn" onClick={() => { onAdd(item, selIdx); onClose(); }}>
            Add to Cart — ₹{sel.price} / {sel.label}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN APP ─── */
export default function App() {
  const [page, setPage] = useState("home");
  const [activeCat, setActiveCat] = useState("All");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");
  const [logoSrc, setLogoSrc] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [modal, setModal] = useState(null); // {item, idx}

  const categories = ["All", ...Object.keys(MENU_DATA)];
  const filteredItems = activeCat === "All" ? ALL_ITEMS : (MENU_DATA[activeCat] || []);
  const searchResults = searchQ.length > 1
    ? ALL_ITEMS.filter(i => i.name.toLowerCase().includes(searchQ.toLowerCase()) || i.category.toLowerCase().includes(searchQ.toLowerCase()))
    : [];
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const belowMin = cartTotal < MIN_ORDER;

  function addToCart(item, weightIdx = 0) {
    const w = item.weights[weightIdx];
    const key = `${item.id}-${weightIdx}`;
    setCart(prev => {
      const ex = prev.find(i => i.key === key);
      if (ex) return prev.map(i => i.key === key ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, key, weightIdx, label: w.label, price: w.price, qty: 1 }];
    });
  }

  function updateQty(key, delta) {
    setCart(prev => prev.map(i => i.key === key ? { ...i, qty: Math.max(0, i.qty + delta) } : i).filter(i => i.qty > 0));
  }

  function handleLogo(e) {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader(); r.onload = ev => setLogoSrc(ev.target.result); r.readAsDataURL(f);
  }

  function handleWhatsApp() {
    if (belowMin) return;
    const msg = `Hello! Order from Shortbreads by Mrigaya:\n\n${cart.map(i => `• ${i.name} (${i.label}) ×${i.qty} — ₹${i.price * i.qty}`).join('\n')}\n\nTotal: ₹${cartTotal}\nPrebook 24–48 hrs in advance.`;
    window.open(`https://wa.me/919810806933?text=${encodeURIComponent(msg)}`, "_blank");
  }

  function navTo(p) { setPage(p); setMobileOpen(false); if (p !== "menu") setActiveCat("All"); }
  const PAGES = ["home", "menu", "about", "contact"];
  const CAT_ICONS = { "Season Specials": "🌸", Pastries: "🥐", Cheesecakes: "🍰", Cookies: "🍪", Brownies: "🍫", Chocolates: "🍬" };

  return (
    <>
      <style>{makeCSS(darkMode)}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo-area" onClick={() => navTo("home")}>
            <div className="logo-circle" title="Click to upload logo">
              {logoSrc ? <img src={logoSrc} alt="logo" /> : <span style={{ color: "white", fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 15 }}>S</span>}
              <input type="file" accept="image/*" onChange={handleLogo} onClick={e => e.stopPropagation()} />
            </div>
            <div>
              <div className="logo-text">Shortbreads</div>
              <div className="logo-sub">by mrigaya</div>
            </div>
          </div>

          <div className="nav-links">
            {PAGES.map(p => (
              <button key={p} className={`nav-link ${page === p ? "active" : ""}`} onClick={() => navTo(p)}>
                {p[0].toUpperCase() + p.slice(1)}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button className="dm-toggle" onClick={() => setDarkMode(v => !v)} title="Toggle dark mode" />
            <button className="icon-btn" onClick={() => setSearchOpen(true)}>🔍</button>
            <div className="cart-wrap">
              <button className="icon-btn" onClick={() => setCartOpen(true)}>🛍</button>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
            <button className={`hamburger ${mobileOpen ? "open" : ""}`} onClick={() => setMobileOpen(v => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {PAGES.map(p => (
          <button key={p} className={`mob-link ${page === p ? "active" : ""}`} onClick={() => navTo(p)}>
            {p[0].toUpperCase() + p.slice(1)}
          </button>
        ))}
        <div style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 13, color: "var(--muted)" }}>Dark mode</span>
          <button className="dm-toggle" onClick={() => setDarkMode(v => !v)} />
        </div>
      </div>

      {/* SEARCH */}
      {searchOpen && (
        <div className="sbg" onClick={e => e.target === e.currentTarget && setSearchOpen(false)}>
          <div className="sbox">
            <div className="sinput-wrap">
              <span>🔍</span>
              <input className="sinput" autoFocus placeholder="Search cakes, cookies, brownies..."
                value={searchQ} onChange={e => setSearchQ(e.target.value)} />
              <button onClick={() => { setSearchOpen(false); setSearchQ(""); }}
                style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted)", fontSize: 16 }}>✕</button>
            </div>
            <div className="sresults">
              {searchResults.length > 0 ? (
                <>
                  <div className="slabel">{searchResults.length} result{searchResults.length !== 1 ? "s" : ""} — tap to view</div>
                  {searchResults.map(item => (
                    <div key={item.id} className="sitem" onClick={() => { setModal({ item, idx: 0 }); setSearchOpen(false); setSearchQ(""); }}>
                      <img src={item.image} alt={item.name} className="simg" onError={e => e.target.style.display = "none"} />
                      <div><div className="sname">{item.name}</div><div className="scat">{item.category}</div></div>
                      <div className="sprice">from ₹{item.weights[0].price}</div>
                    </div>
                  ))}
                </>
              ) : searchQ.length > 1 ? (
                <div style={{ padding: "20px", textAlign: "center", color: "var(--muted)" }}>No items found for "{searchQ}"</div>
              ) : (
                <>
                  <div className="slabel">Popular picks</div>
                  {ALL_ITEMS.slice(0, 6).map(item => (
                    <div key={item.id} className="sitem" onClick={() => { setModal({ item, idx: 0 }); setSearchOpen(false); }}>
                      <img src={item.image} alt={item.name} className="simg" onError={e => e.target.style.display = "none"} />
                      <div><div className="sname">{item.name}</div><div className="scat">{item.category}</div></div>
                      <div className="sprice">from ₹{item.weights[0].price}</div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ITEM MODAL */}
      {modal && (
        <ItemModal item={modal.item} initIdx={modal.idx}
          onAdd={(item, idx) => { addToCart(item, idx); setCartOpen(true); }}
          onClose={() => setModal(null)} />
      )}

      {/* CART */}
      {cartOpen && <div className="cart-ov" onClick={() => setCartOpen(false)} />}
      <div className={`cart-panel ${cartOpen ? "open" : ""}`}>
        <div className="cart-hd">
          <div className="cart-title">Your Order 🛍</div>
          <button className="xbtn" onClick={() => setCartOpen(false)}>✕</button>
        </div>
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="empty-c">
              <div style={{ fontSize: 40, marginBottom: 10 }}>🧁</div>
              <div style={{ fontWeight: 500, marginBottom: 5, color: "var(--text)" }}>Cart is empty</div>
              <div style={{ fontSize: 13 }}>Add some delicious treats!</div>
            </div>
          ) : cart.map(item => (
            <div key={item.key} className="ci">
              <img src={item.image} alt={item.name} className="ci-img" onError={e => e.target.style.display = "none"} />
              <div style={{ flex: 1 }}>
                <div className="ci-name">{item.name}</div>
                <div className="ci-variant">{item.label}</div>
                <div className="ci-price">₹{item.price} each</div>
                <div className="qty-row">
                  <button className="qb" onClick={() => updateQty(item.key, -1)}>−</button>
                  <span className="qv">{item.qty}</span>
                  <button className="qb" onClick={() => updateQty(item.key, 1)}>+</button>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "space-between" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: "var(--p)" }}>₹{item.price * item.qty}</div>
                <button className="rmbtn" onClick={() => updateQty(item.key, -item.qty)}>🗑</button>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="cart-ft">
            <div className="cart-total"><span>Total</span><span>₹{cartTotal}</span></div>
            {belowMin
              ? <div className="warn-box warn-red">Minimum order ₹{MIN_ORDER} · Add ₹{MIN_ORDER - cartTotal} more</div>
              : <div className="warn-box warn-grn">✓ Ready to order!</div>}
            <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 10, textAlign: "center" }}>Made to order · Prebook 24–48 hrs prior</div>
            <button className="co-btn" onClick={handleWhatsApp} disabled={belowMin}>
              {belowMin ? `Add ₹${MIN_ORDER - cartTotal} more` : "Order via WhatsApp 📱"}
            </button>
          </div>
        )}
      </div>

      {/* ── HOME ── */}
      {page === "home" && (
        <div className="page">
          <div className="hero">
            <div className="hero-tag">Homemade with love ✦ Made to order</div>
            <h1 className="hero-title">Artisan Bakes<br /><em>by Mrigaya</em></h1>
            <p className="hero-sub">Cakes · Cheesecakes · Cookies · Chocolates · Pastries</p>
            <div className="hero-btns">
              <button className="btn-p" onClick={() => navTo("menu")}>Browse Menu</button>
              <button className="btn-o" onClick={() => navTo("contact")}>Order Now</button>
            </div>
          </div>

          <div className="sec">
            <div className="sec-title">Season Specials ✨</div>
            <div className="sec-line" />
            <div className="mgrid">
              {MENU_DATA["Season Specials"].map(item => (
                <MenuCard key={item.id} item={item} onOpen={(it, idx) => setModal({ item: it, idx })} />
              ))}
            </div>
          </div>

          <div style={{ background: "var(--bg2)", padding: "44px 0" }}>
            <div className="sec" style={{ paddingTop: 0, paddingBottom: 0 }}>
              <div className="sec-title">Explore Categories</div>
              <div className="sec-line" />
              <div className="cat-grid">
                {Object.keys(MENU_DATA).map(cat => (
                  <div key={cat} className="cat-card" onClick={() => { navTo("menu"); setActiveCat(cat); }}>
                    <div className="cat-card-icon">{CAT_ICONS[cat]}</div>
                    <div className="cat-card-name">{cat}</div>
                    <div className="cat-card-count">{MENU_DATA[cat].length} items</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sec" style={{ textAlign: "center" }}>
            <div style={{ background: "var(--p)", borderRadius: 20, padding: "40px 26px" }}>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: "white", marginBottom: 0 }}>Custom & Personalised Orders</h2>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, marginBottom: 24 }}>All products made to order · Prebook 24–48 hours prior</p>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, marginBottom: 5 }}><p style={{ color: "rgba(255,255,255,0.75)", fontSize: 9, marginBottom: 5 }}>*NOTE: All images displayed are for representation purposes only.</p></p>
              <button onClick={() => window.open("https://wa.me/919810806933", "_blank")}
                style={{ padding: "12px 26px", background: "white", color: "var(--p)", border: "none", borderRadius: 30, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>
                WhatsApp Us 💬
              </button>

            </div>
          </div>
        </div>
      )}

      {/* ── MENU ── */}
      {page === "menu" && (
        <div className="page">
          <div style={{ background: "var(--bg2)", padding: "34px 20px 26px", textAlign: "center" }}>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, color: "var(--text)" }}>Our Menu</h1>
            <p style={{ color: "var(--muted)", marginTop: 7, fontSize: 13 }}>Handcrafted with finest ingredients · Made fresh to order</p>
          </div>
          <div className="sec">
            <div className="cat-tabs">
              {categories.map(cat => (
                <button key={cat} className={`cat-tab ${activeCat === cat ? "active" : ""}`} onClick={() => setActiveCat(cat)}>{cat}</button>
              ))}
            </div>
            <div className="mgrid">
              {filteredItems.map(item => (
                <MenuCard key={item.id} item={item} onOpen={(it, idx) => setModal({ item: it, idx })} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── ABOUT ── */}
      {page === "about" && (
        <div className="page">
          <div className="aw">
            <div className="agrid">
              <div>
                <div style={{ display: "inline-block", padding: "4px 12px", background: "rgba(169,106,111,0.15)", borderRadius: 20, fontSize: 11, color: "var(--a)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 13 }}>Our Story</div>
                <h1 className="ah">Baked fresh,<br />made with love</h1>
                <p className="ap"></p>
                <p className="ap">Hi, i’m mrigaya
                  a 22 yrs old baker by profession and passion, Creative by instinct, brand owner by hustle. I turn simple ideas into thoughtful little experiences — built with heart, good taste, and a lot of late-night perfectionism. Soft spot for aesthetics, honest ingredients, and making things people remember.</p>
                <button className="btn-p" onClick={() => navTo("menu")}>Explore Menu</button>
              </div>
              <div className="aimg">
                <img src="assets/mrigaya.jpeg" alt="Baking" />
              </div>
            </div>
            <div className="fstrip">
              <div className="feat"><div className="fi">🌿</div><div className="ft">Fresh Ingredients</div><div className="fd">Only the finest, freshest produce in every creation</div></div>
              <div className="feat"><div className="fi">🎨</div><div className="ft">Made to Order</div><div className="fd">Every product crafted fresh just for you</div></div>
              <div className="feat"><div className="fi">✨</div><div className="ft">Personalised</div><div className="fd">Custom and personalised designs always welcome</div></div>
            </div>
          </div>
        </div>
      )}

      {/* ── CONTACT ── */}
      {page === "contact" && (
        <div className="page">
          <div className="cw">
            <div className="chero">
              <h1 className="ctitle">Get in Touch 💬</h1>
              <p className="csub">Place your order or send us a message. We'd love to hear from you!</p>
              <a className="wa-btn" href="https://wa.me/919810806933" target="_blank" rel="noreferrer">
                <span style={{ fontSize: 17 }}>📱</span> Chat on WhatsApp
              </a>
            </div>
            <div className="cc">
              <div className="ci2">📞</div>
              <div><div className="cct">Phone / WhatsApp</div><div className="ccv">+91 9810806933</div></div>
              <button onClick={() => window.open("https://wa.me/919810806933", "_blank")}
                style={{ marginLeft: "auto", padding: "8px 16px", background: "var(--p)", color: "white", border: "none", borderRadius: 16, fontSize: 12, fontWeight: 500, cursor: "pointer" }}>
                Order Now
              </button>
            </div>
            <div className="cc">
              <div className="ci2">📸</div>
              <div><div className="cct">Instagram</div><div className="ccv">@_shortbreads_</div></div>
              <a href="https://instagram.com/_shortbreads_" target="_blank" rel="noreferrer"
                style={{ marginLeft: "auto", padding: "8px 16px", background: "linear-gradient(135deg,#E1306C,#833AB4)", color: "white", borderRadius: 16, fontSize: 12, fontWeight: 500, textDecoration: "none" }}>
                Follow
              </a>
            </div>
            <div className="igrid">
              {[["Order Lead Time", "24–48 hours"], ["Custom Orders", "Always welcome"], ["Made Fresh", "Every order"], ["Delivery", "Ask on WhatsApp"]].map(([t, v]) => (
                <div key={t} className="ibox"><div className="ibt">{t}</div><div className="ibv">{v}</div></div>
              ))}
            </div>
            {cart.length > 0 && (
              <div className="cart-summary">
                <div style={{ fontWeight: 600, marginBottom: 11, color: "var(--text)", fontSize: 14 }}>Your cart ({cartCount} item{cartCount !== 1 ? "s" : ""})</div>
                {cart.map(i => (
                  <div key={i.key} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 5, color: "var(--muted)" }}>
                    <span>{i.name} ({i.label}) × {i.qty}</span>
                    <span style={{ color: "var(--p)", fontWeight: 500 }}>₹{i.price * i.qty}</span>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: 9, marginTop: 8, display: "flex", justifyContent: "space-between", fontWeight: 600, fontSize: 13, color: "var(--text)" }}>
                  <span>Total</span><span style={{ color: "var(--p)" }}>₹{cartTotal}</span>
                </div>
                {belowMin && <div className="warn-box warn-red" style={{ marginTop: 10, marginBottom: 0 }}>Minimum order ₹{MIN_ORDER} — add ₹{MIN_ORDER - cartTotal} more</div>}
                <button className="co-btn" style={{ marginTop: 12 }} onClick={handleWhatsApp} disabled={belowMin}>
                  {belowMin ? `Add ₹${MIN_ORDER - cartTotal} more to order` : "Send Order via WhatsApp 📱"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}