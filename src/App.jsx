import { useState, useRef } from "react";

const MENU_DATA = {
  "Season Specials": [
    { id: 1, name: "Mango Cheesecake", description: "A classic New York style baked cheesecake with fresh mangoes and buttery crust", details: "Our signature mango cheesecake features a velvety smooth filling made with premium cream cheese and fresh Alphonso mangoes, set on a golden buttery biscuit crust. Available in 1/2 kg and 1 kg sizes. Perfect for celebrations or gifting.", price: 650, priceNote: "₹650 (½kg) / ₹1200 (1kg)", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80", category: "Season Specials", tag: "New", allergens: "Dairy, Gluten, Eggs", leadTime: "48 hrs" },
    { id: 2, name: "Tres Leches", description: "Light sponge soaked in blend of milks, classic dessert with fresh mangoes", details: "A dreamy Latin-inspired dessert — soft sponge cake soaked in three kinds of milk: whole milk, condensed milk, and cream. Crowned with lightly whipped cream and fresh mango slices. Every bite is moist, airy and indulgent.", price: 450, priceNote: "₹450", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80", category: "Season Specials", tag: "Chef's Pick", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
    { id: 3, name: "Cocoa Mango Tart", description: "A crispy, golden-brown crust with dense chocolate and fresh mangoes", details: "A show-stopping petit four — a crisp cocoa sablé shell filled with rich dark chocolate ganache, topped with fresh diced mangoes. The contrast of bitter chocolate and sweet mango in every bite is irresistible.", price: 150, priceNote: "₹150/piece", image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&q=80", category: "Season Specials", tag: "Limited", allergens: "Dairy, Gluten", leadTime: "24 hrs" },
  ],
  Pastries: [
    { id: 4, name: "Tiramisu", description: "Classic Italian dessert with layers of espresso-soaked ladyfingers", details: "Authentic tiramisu made with mascarpone cream, savoiardi biscuits dipped in strong espresso, and a generous dusting of fine cocoa powder. No shortcuts — this is the real deal.", price: 250, priceNote: "₹250", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80", category: "Pastries", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
    { id: 5, name: "Lemon Tart", description: "Zesty lemon curd in a perfectly baked buttery shell", details: "A bright, tangy lemon curd made with fresh lemon juice and zest, nestled in a crumbly, buttery shortcrust pastry shell. Finished with a light torched meringue or a dusting of powdered sugar.", price: 150, priceNote: "₹150", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&q=80", category: "Pastries", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
    { id: 6, name: "Dark Chocolate Mousse Slice", description: "Silky dark chocolate mousse on a crisp chocolate base", details: "Layers of intense dark chocolate mousse on a thin crispy chocolate feuilletine base. Each slice is a study in contrasting textures — light and airy mousse with a satisfying crunch beneath.", price: 175, priceNote: "₹175", image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?w=600&q=80", category: "Pastries", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
  ],
  Cheesecakes: [
    { id: 7, name: "Chocolate Cheesecake", description: "Rich chocolate swirled into creamy cheesecake filling", details: "A luscious baked cheesecake marbled with rich dark chocolate swirls. Creamy, dense, and perfectly balanced between sweet and bittersweet. Served by the slice on an Oreo cookie base.", price: 175, priceNote: "₹175/slice", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80", category: "Cheesecakes", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
    { id: 8, name: "Basque Cheesecake", description: "Beautifully burnt top with a creamy molten centre", details: "Born in San Sebastián, this rustic cheesecake is intentionally 'burnt' on the outside to develop a caramelised bittersweet crust, while the centre stays custardy and almost lava-like. No base, no fuss — just pure flavour.", price: 175, priceNote: "₹175/slice", image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?w=600&q=80", category: "Cheesecakes", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
    { id: 9, name: "Salted Caramel", description: "Smooth cheesecake with ribbons of salted caramel", details: "A classic New York baked cheesecake elevated with thick ribbons of house-made salted caramel sauce swirled through. The pinch of fleur de sel on top brings everything together perfectly.", price: 175, priceNote: "₹175/slice", image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80", category: "Cheesecakes", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
    { id: 10, name: "Gulabjamun Cheesecake", description: "Fusion cheesecake with classic gulabjamun flavour", details: "A celebration of East-meets-West — a creamy cheesecake base infused with rose water and cardamom, topped with soft gulabjamun pieces soaked in sugar syrup.", price: 195, priceNote: "₹195/slice", image: "https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=600&q=80", category: "Cheesecakes", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
  ],
  Cookies: [
    { id: 11, name: "ChocoChunk", description: "Loaded with premium chocolate chunks, perfectly chewy", details: "Thick, bakery-style cookies loaded with premium dark and milk chocolate chunks. Crisp at the edges, gooey in the centre — just how a perfect cookie should be. 180gm pack.", price: 250, priceNote: "₹250/180gm", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80", category: "Cookies", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
    { id: 12, name: "Cranberry Almond", description: "Tart cranberries and toasted almonds in every bite", details: "Buttery cookies studded with dried cranberries for a gentle tartness and toasted slivered almonds for crunch. A sophisticated snack-time treat that pairs beautifully with tea or coffee. 180gm pack.", price: 275, priceNote: "₹275/180gm", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80", category: "Cookies", allergens: "Dairy, Gluten, Eggs, Nuts", leadTime: "24 hrs" },
    { id: 13, name: "Dark Chocolate Cookies", description: "Intense dark chocolate cookies for true choco lovers", details: "Double dark chocolate cookies made with cocoa powder in the dough AND dark chocolate chips folded in. Rich, intense and barely sweet — for serious chocolate lovers only. 180gm pack.", price: 275, priceNote: "₹275/180gm", image: "https://images.unsplash.com/photo-1590080877488-abb7f28c98a8?w=600&q=80", category: "Cookies", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
    { id: 14, name: "Cookie Bytes", description: "Mini bite-sized cookies perfect for snacking", details: "Adorable mini cookies in assorted flavours — perfect for gifting, snack boxes or party favours. Each bite-sized piece is crisp, buttery and packed with flavour. 180gm pack.", price: 250, priceNote: "₹250/180gm", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80", category: "Cookies", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
    { id: 15, name: "Butter Cookies", description: "Melt-in-mouth classic butter cookies, simply perfect", details: "Classic Danish-style butter cookies made with the finest quality butter. They practically dissolve on the tongue — delicate, lightly sweet and perfectly golden. A timeless favourite. 180gm pack.", price: 225, priceNote: "₹225/180gm", image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=600&q=80", category: "Cookies", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
  ],
  Brownies: [
    { id: 16, name: "Chocolate Brownie", description: "Fudgy dark chocolate brownie with a crinkly top", details: "Dense, fudgy brownies baked with quality dark chocolate and real butter. The signature crinkly top gives way to an intensely chocolatey, almost truffle-like interior. Cut into generous squares. 180gm pack.", price: 250, priceNote: "₹250/180gm", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80", category: "Brownies", allergens: "Dairy, Gluten, Eggs", leadTime: "24 hrs" },
    { id: 17, name: "Peanut Butter Brownie", description: "Rich chocolate brownie with swirls of peanut butter", details: "Our classic chocolate brownie base swirled with thick, creamy peanut butter before baking. The salty-sweet combo is absolutely addictive. Each pack contains generously-sized squares. 180gm pack.", price: 250, priceNote: "₹250/180gm", image: "https://images.unsplash.com/photo-1589375443985-9b3e5b5b2bca?w=600&q=80", category: "Brownies", allergens: "Dairy, Gluten, Eggs, Nuts", leadTime: "24 hrs" },
    { id: 18, name: "Walnut Brownie", description: "Chunky walnuts baked into fudgy chocolate brownie", details: "The original classic. Fudgy, deep chocolate brownie with generous chunks of walnuts folded throughout, adding a satisfying nutty crunch to every bite. 180gm pack.", price: 250, priceNote: "₹250/180gm", image: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&q=80", category: "Brownies", allergens: "Dairy, Gluten, Eggs, Nuts", leadTime: "24 hrs" },
  ],
  Chocolates: [
    { id: 19, name: "Fudge", description: "Creamy hand-crafted chocolate fudge piece", details: "Hand-poured rich chocolate fudge — smooth, melt-in-mouth and deeply chocolatey. Made in small batches for maximum freshness. Perfect as an after-dinner treat or a petite gift.", price: 15, priceNote: "₹15/piece", image: "https://images.unsplash.com/photo-1548741487-18d363dc4469?w=600&q=80", category: "Chocolates", allergens: "Dairy", leadTime: "24 hrs" },
    { id: 20, name: "Caramel Chocolate", description: "Silky caramel enrobed in dark chocolate", details: "A soft, buttery caramel centre enrobed in a thin crisp shell of dark chocolate. The interplay of sweet caramel and bitter chocolate makes this a truly elegant bonbon.", price: 15, priceNote: "₹15/piece", image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&q=80", category: "Chocolates", allergens: "Dairy", leadTime: "24 hrs" },
    { id: 21, name: "Paan Chocolate", description: "Exotic paan flavoured chocolate bonbon", details: "A uniquely Indian bonbon — white or milk chocolate shell filled with a fragrant paan-flavoured ganache made with betel leaf essence, rose and fennel. Nostalgic and utterly original.", price: 15, priceNote: "₹15/piece", image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=600&q=80", category: "Chocolates", allergens: "Dairy", leadTime: "24 hrs" },
    { id: 22, name: "Gulkand Chocolate", description: "Fragrant gulkand (rose jam) filled chocolate", details: "Dark chocolate shells filled with aromatic gulkand — a preserve of rose petals in sugar syrup. Floral, sweet and completely irresistible. A favourite at Indian weddings and celebrations.", price: 15, priceNote: "₹15/piece", image: "https://images.unsplash.com/photo-1548741487-18d363dc4469?w=600&q=80", category: "Chocolates", allergens: "Dairy", leadTime: "24 hrs" },
    { id: 23, name: "Rum Chocolate", description: "Dark rum infused indulgent chocolate truffle", details: "A grown-up treat — dark chocolate ganache spiked with a generous measure of aged dark rum, rolled in cocoa powder. Rich, boozy and utterly indulgent.", price: 20, priceNote: "₹20/piece", image: "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=600&q=80", category: "Chocolates", allergens: "Dairy, Alcohol", leadTime: "24 hrs" },
    { id: 24, name: "Baileys Chocolate", description: "Smooth Baileys Irish Cream chocolate bonbon", details: "Milk chocolate shells filled with a silky Baileys Irish Cream ganache. Creamy, boozy and delightful — these are the first to disappear at any gathering.", price: 20, priceNote: "₹20/piece", image: "https://images.unsplash.com/photo-1549007953-2f2dc0b24019?w=600&q=80", category: "Chocolates", allergens: "Dairy, Alcohol", leadTime: "24 hrs" },
  ],
};

const ALL_ITEMS = Object.values(MENU_DATA).flat();
const MIN_ORDER = 100;

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:'DM Sans',sans-serif;background:#FAF6F0;color:#3D2F23;}
  :root{--p:#735F4D;--a:#A96A6F;--l:#F5EFE8;--d:#3D2F23;--m:#9B8878;--w:#FFFFFF;}

  .nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(250,246,240,0.97);backdrop-filter:blur(12px);border-bottom:1px solid rgba(115,95,77,0.15);}
  .nav-inner{max-width:1200px;margin:0 auto;padding:0 16px;height:64px;display:flex;align-items:center;justify-content:space-between;gap:8px;}
  .logo-area{display:flex;align-items:center;gap:8px;cursor:pointer;flex-shrink:0;}
  .logo-circle{width:38px;height:38px;border-radius:50%;background:var(--p);display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;position:relative;cursor:pointer;}
  .logo-circle img{width:100%;height:100%;object-fit:cover;}
  .logo-circle input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;}
  .logo-text{font-family:'Playfair Display',serif;font-size:17px;font-weight:700;color:var(--d);line-height:1.1;}
  .logo-sub{font-size:10px;color:var(--m);letter-spacing:0.08em;text-transform:uppercase;}
  .nav-links{display:flex;gap:2px;flex:1;justify-content:center;}
  .nav-link{padding:7px 12px;border-radius:20px;font-size:13px;font-weight:500;cursor:pointer;color:var(--m);transition:all 0.2s;border:none;background:none;font-family:'DM Sans',sans-serif;}
  .nav-link:hover,.nav-link.active{background:var(--l);color:var(--d);}
  .nav-actions{display:flex;gap:8px;align-items:center;flex-shrink:0;}
  .icon-btn{width:38px;height:38px;border-radius:50%;border:1.5px solid rgba(115,95,77,0.25);background:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:15px;transition:all 0.2s;}
  .icon-btn:hover{background:var(--l);}
  .cart-wrap{position:relative;}
  .cart-badge{position:absolute;top:-4px;right:-4px;background:var(--a);color:white;border-radius:50%;width:17px;height:17px;font-size:10px;font-weight:600;display:flex;align-items:center;justify-content:center;}

  .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:8px;border:none;background:none;}
  .hamburger span{width:22px;height:2px;background:var(--d);border-radius:2px;transition:all 0.25s;display:block;}
  .hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
  .hamburger.open span:nth-child(2){opacity:0;}
  .hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

  .mobile-menu{display:none;position:fixed;top:64px;left:0;right:0;background:rgba(250,246,240,0.98);backdrop-filter:blur(14px);border-bottom:1px solid rgba(115,95,77,0.15);z-index:99;flex-direction:column;padding:8px 12px 16px;}
  .mobile-menu.open{display:flex;}
  .mob-link{padding:13px 14px;font-size:15px;font-weight:500;cursor:pointer;color:var(--d);border:none;background:none;text-align:left;border-radius:10px;width:100%;font-family:'DM Sans',sans-serif;transition:background 0.15s;}
  .mob-link:hover,.mob-link.active{background:var(--l);}

  @media(max-width:680px){
    .nav-links{display:none;}
    .hamburger{display:flex;}
  }

  .page{padding-top:64px;min-height:100vh;}
  .hero{background:linear-gradient(135deg,#F5EFE8 0%,#FAF6F0 60%,#F0E8DF 100%);padding:70px 24px 56px;text-align:center;position:relative;overflow:hidden;}
  .hero::before{content:'';position:absolute;top:-60px;right:-60px;width:300px;height:300px;border-radius:50%;background:rgba(169,106,111,0.07);}
  .hero::after{content:'';position:absolute;bottom:-80px;left:-80px;width:380px;height:380px;border-radius:50%;background:rgba(115,95,77,0.05);}
  .hero-tag{display:inline-block;padding:6px 16px;background:rgba(169,106,111,0.12);border-radius:20px;font-size:12px;font-weight:500;color:var(--a);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:18px;}
  .hero-title{font-family:'Playfair Display',serif;font-size:clamp(36px,8vw,74px);font-weight:700;color:var(--d);line-height:1.05;margin-bottom:8px;}
  .hero-title em{color:var(--a);font-style:italic;}
  .hero-sub{font-size:14px;color:var(--m);margin-bottom:28px;font-weight:300;}
  .hero-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  .btn-p{padding:13px 28px;background:var(--p);color:white;border:none;border-radius:30px;font-size:14px;font-weight:500;cursor:pointer;transition:all 0.2s;font-family:'DM Sans',sans-serif;}
  .btn-p:hover{background:var(--d);transform:translateY(-1px);}
  .btn-o{padding:13px 28px;background:transparent;color:var(--p);border:1.5px solid var(--p);border-radius:30px;font-size:14px;font-weight:500;cursor:pointer;transition:all 0.2s;font-family:'DM Sans',sans-serif;}
  .btn-o:hover{background:var(--l);}
  .sec{max-width:1200px;margin:0 auto;padding:52px 20px;}
  .sec-title{font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:var(--d);}
  .sec-line{width:40px;height:3px;background:var(--a);border-radius:2px;margin-top:8px;margin-bottom:32px;}

  .cat-tabs{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:28px;}
  .cat-tab{padding:7px 15px;border-radius:20px;font-size:12px;font-weight:500;cursor:pointer;border:1.5px solid rgba(115,95,77,0.2);background:transparent;color:var(--m);transition:all 0.18s;font-family:'DM Sans',sans-serif;}
  .cat-tab:hover,.cat-tab.active{background:var(--p);color:white;border-color:var(--p);}

  .mgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:18px;}
  .card{background:var(--w);border-radius:16px;overflow:hidden;border:1px solid rgba(115,95,77,0.1);transition:all 0.25s;cursor:pointer;}
  .card:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(115,95,77,0.14);}
  .card-img{width:100%;height:185px;object-fit:cover;display:block;}
  .card-ph{width:100%;height:185px;background:var(--l);display:none;align-items:center;justify-content:center;font-size:36px;}
  .card-body{padding:14px;}
  .ctag{display:inline-block;padding:3px 9px;border-radius:10px;font-size:11px;font-weight:500;background:rgba(169,106,111,0.12);color:var(--a);margin-bottom:7px;}
  .cname{font-family:'Playfair Display',serif;font-size:16px;font-weight:600;color:var(--d);margin-bottom:4px;}
  .cdesc{font-size:12px;color:var(--m);line-height:1.5;margin-bottom:12px;}
  .cfoot{display:flex;align-items:center;justify-content:space-between;}
  .cprice{font-size:14px;font-weight:600;color:var(--p);}
  .add-btn{width:32px;height:32px;border-radius:50%;background:var(--p);color:white;border:none;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;}
  .add-btn:hover{background:var(--a);transform:scale(1.08);}

  .modal-bg{position:fixed;inset:0;background:rgba(61,47,35,0.55);z-index:400;display:flex;align-items:flex-end;justify-content:center;}
  @media(min-width:600px){.modal-bg{align-items:center;}}
  .modal{background:var(--w);border-radius:24px 24px 0 0;width:100%;max-width:550px;max-height:92vh;overflow-y:auto;animation:sUp 0.28s ease;position:relative;}
  @media(min-width:600px){.modal{border-radius:24px;max-height:86vh;}}
  @keyframes sUp{from{transform:translateY(40px);opacity:0}to{transform:translateY(0);opacity:1}}
  .modal-img{width:100%;height:230px;object-fit:cover;display:block;}
  .modal-body{padding:22px;}
  .mtag{display:inline-block;padding:3px 10px;border-radius:10px;font-size:11px;font-weight:500;background:rgba(169,106,111,0.12);color:var(--a);margin-bottom:10px;}
  .mname{font-family:'Playfair Display',serif;font-size:24px;font-weight:700;color:var(--d);margin-bottom:6px;}
  .mprice{font-size:17px;font-weight:700;color:var(--p);margin-bottom:14px;}
  .mdesc{font-size:13px;color:var(--m);line-height:1.7;margin-bottom:14px;}
  .mdetail{font-size:14px;color:var(--d);line-height:1.75;margin-bottom:18px;}
  .mmeta{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px;}
  .mpill{font-size:11px;color:var(--m);background:var(--l);padding:5px 11px;border-radius:9px;}
  .madd-btn{width:100%;padding:14px;background:var(--p);color:white;border:none;border-radius:30px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background 0.2s;}
  .madd-btn:hover{background:var(--d);}
  .modal-x{position:absolute;top:14px;right:14px;width:32px;height:32px;border-radius:50%;background:rgba(250,246,240,0.92);border:none;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;z-index:2;}

  .sbg{position:fixed;inset:0;background:rgba(61,47,35,0.5);z-index:200;display:flex;align-items:flex-start;justify-content:center;padding-top:86px;}
  .sbox{background:var(--w);border-radius:20px;padding:18px;width:min(540px,calc(100vw - 28px));box-shadow:0 20px 60px rgba(61,47,35,0.25);max-height:76vh;display:flex;flex-direction:column;}
  .sinput-wrap{display:flex;align-items:center;gap:10px;border:1.5px solid rgba(115,95,77,0.25);border-radius:12px;padding:9px 14px;margin-bottom:14px;}
  .sinput{flex:1;border:none;outline:none;font-size:15px;color:var(--d);background:transparent;font-family:'DM Sans',sans-serif;}
  .sresults{overflow-y:auto;flex:1;}
  .sitem{display:flex;align-items:center;gap:11px;padding:9px 7px;border-radius:10px;cursor:pointer;transition:background 0.15s;}
  .sitem:hover{background:var(--l);}
  .simg{width:40px;height:40px;border-radius:8px;object-fit:cover;flex-shrink:0;}
  .sname{font-weight:500;font-size:13px;color:var(--d);}
  .scat{font-size:11px;color:var(--m);}
  .sprice{margin-left:auto;font-weight:600;font-size:13px;color:var(--p);white-space:nowrap;}
  .slabel{font-size:11px;color:var(--m);margin-bottom:8px;text-transform:uppercase;letter-spacing:0.08em;}

  .cart-ov{position:fixed;inset:0;background:rgba(61,47,35,0.4);z-index:299;}
  .cart-panel{position:fixed;right:0;top:0;bottom:0;width:min(380px,100vw);background:var(--w);z-index:300;box-shadow:-8px 0 40px rgba(61,47,35,0.15);display:flex;flex-direction:column;transform:translateX(100%);transition:transform 0.3s ease;}
  .cart-panel.open{transform:translateX(0);}
  .cart-hd{padding:18px 20px;border-bottom:1px solid rgba(115,95,77,0.12);display:flex;align-items:center;justify-content:space-between;}
  .cart-title{font-family:'Playfair Display',serif;font-size:19px;font-weight:700;color:var(--d);}
  .xbtn{width:32px;height:32px;border-radius:50%;border:1px solid rgba(115,95,77,0.2);background:transparent;cursor:pointer;font-size:15px;color:var(--m);display:flex;align-items:center;justify-content:center;}
  .xbtn:hover{background:var(--l);}
  .cart-body{flex:1;overflow-y:auto;padding:12px 18px;}
  .ci{display:flex;gap:10px;padding:11px 0;border-bottom:1px solid rgba(115,95,77,0.08);}
  .ci-img{width:48px;height:48px;border-radius:9px;object-fit:cover;flex-shrink:0;}
  .ci-name{font-weight:500;font-size:13px;color:var(--d);margin-bottom:3px;}
  .ci-price{font-size:12px;color:var(--a);font-weight:600;}
  .qty-row{display:flex;align-items:center;gap:7px;margin-top:6px;}
  .qb{width:24px;height:24px;border-radius:50%;border:1px solid rgba(115,95,77,0.25);background:transparent;cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;color:var(--p);}
  .qb:hover{background:var(--l);}
  .qv{font-size:13px;font-weight:500;width:18px;text-align:center;}
  .rmbtn{background:none;border:none;color:#ccc;cursor:pointer;font-size:14px;padding:3px;transition:color 0.15s;margin-left:auto;align-self:flex-start;}
  .rmbtn:hover{color:var(--a);}
  .empty-c{text-align:center;padding:48px 20px;color:var(--m);}
  .cart-ft{padding:16px 18px;border-top:1px solid rgba(115,95,77,0.12);}
  .cart-total{display:flex;justify-content:space-between;font-size:15px;font-weight:600;color:var(--d);margin-bottom:8px;}
  .warn-box{border-radius:10px;padding:10px 13px;font-size:12px;margin-bottom:11px;text-align:center;}
  .warn-red{background:#FEF0F0;border:1px solid rgba(169,106,111,0.3);color:#A96A6F;}
  .warn-grn{background:#F0FEF4;border:1px solid rgba(80,160,100,0.3);color:#3a8a52;}
  .co-btn{width:100%;padding:14px;background:var(--p);color:white;border:none;border-radius:30px;font-size:14px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background 0.2s;}
  .co-btn:hover:not(:disabled){background:var(--d);}
  .co-btn:disabled{opacity:0.5;cursor:not-allowed;}

  .cw{max-width:660px;margin:0 auto;padding:52px 20px;}
  .chero{background:var(--l);border-radius:18px;padding:34px;margin-bottom:28px;text-align:center;}
  .ctitle{font-family:'Playfair Display',serif;font-size:32px;color:var(--d);margin-bottom:8px;}
  .csub{color:var(--m);font-size:14px;margin-bottom:22px;}
  .wa-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:#25D366;color:white;border:none;border-radius:30px;font-size:14px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all 0.2s;text-decoration:none;}
  .wa-btn:hover{background:#1aa358;transform:translateY(-1px);}
  .cc{background:var(--w);border-radius:13px;padding:20px;border:1px solid rgba(115,95,77,0.1);margin-bottom:14px;display:flex;align-items:center;gap:14px;}
  .ci2{width:46px;height:46px;border-radius:50%;background:rgba(115,95,77,0.1);display:flex;align-items:center;justify-content:center;font-size:19px;flex-shrink:0;}
  .cct{font-weight:600;font-size:13px;color:var(--d);margin-bottom:3px;}
  .ccv{font-size:12px;color:var(--m);}
  .igrid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:22px;}
  @media(max-width:460px){.igrid{grid-template-columns:1fr;}}
  .ibox{background:var(--l);border-radius:11px;padding:16px;text-align:center;}
  .ibt{font-size:11px;color:var(--m);margin-bottom:4px;text-transform:uppercase;letter-spacing:0.07em;}
  .ibv{font-family:'Playfair Display',serif;font-size:14px;color:var(--d);font-weight:600;}

  .aw{max-width:860px;margin:0 auto;padding:52px 20px;}
  .agrid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;margin-bottom:48px;}
  @media(max-width:620px){.agrid{grid-template-columns:1fr;}}
  .aimg{border-radius:16px;overflow:hidden;height:320px;}
  .aimg img{width:100%;height:100%;object-fit:cover;}
  .ah{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:var(--d);line-height:1.2;margin-bottom:13px;}
  .ap{font-size:14px;color:var(--m);line-height:1.8;margin-bottom:14px;}
  .fstrip{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;background:var(--l);border-radius:16px;padding:26px;}
  @media(max-width:540px){.fstrip{grid-template-columns:1fr;}}
  .feat{text-align:center;}
  .fi{font-size:24px;margin-bottom:8px;}
  .ft{font-weight:600;font-size:13px;color:var(--d);margin-bottom:4px;}
  .fd{font-size:12px;color:var(--m);line-height:1.5;}
`;

export default function App() {
  const [page, setPage] = useState("home");
  const [activeCat, setActiveCat] = useState("All");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");
  const [logoSrc, setLogoSrc] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ["All", ...Object.keys(MENU_DATA)];
  const filteredItems = activeCat === "All" ? ALL_ITEMS : (MENU_DATA[activeCat] || []);
  const searchResults = searchQ.length > 1
    ? ALL_ITEMS.filter(i => i.name.toLowerCase().includes(searchQ.toLowerCase()) || i.category.toLowerCase().includes(searchQ.toLowerCase()))
    : [];
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const belowMin = cartTotal < MIN_ORDER;

  function addToCart(item) {
    setCart(prev => {
      const ex = prev.find(i => i.id === item.id);
      if (ex) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  }

  function updateQty(id, delta) {
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(0, i.qty + delta) } : i).filter(i => i.qty > 0));
  }

  function handleLogo(e) {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = ev => setLogoSrc(ev.target.result);
    r.readAsDataURL(f);
  }

  function handleWhatsApp() {
    if (belowMin) return;
    const msg = `Hello! I'd like to order from Shortbreads by Mrigaya:\n\n${cart.map(i => `• ${i.name} ×${i.qty} — ₹${i.price * i.qty}`).join('\n')}\n\nTotal: ₹${cartTotal}\n\nPrebook: 24–48 hours in advance.`;
    window.open(`https://wa.me/919810806933?text=${encodeURIComponent(msg)}`, "_blank");
  }

  function navTo(p) {
    setPage(p);
    setMobileOpen(false);
    if (p !== "menu") setActiveCat("All");
  }

  const PAGES = ["home", "menu", "about", "contact"];

  return (
    <>
      <style>{css}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="logo-area" onClick={() => navTo("home")}>
            <div className="logo-circle" title="Click to upload your logo">
              {logoSrc ? <img src={logoSrc} alt="logo" /> : <span style={{color:"white",fontFamily:"'Playfair Display',serif",fontWeight:700,fontSize:15}}>S</span>}
              <input type="file" accept="image/*" onChange={handleLogo} onClick={e => e.stopPropagation()} />
            </div>
            <div>
              <div className="logo-text">Shortbreads</div>
              <div className="logo-sub">by Mrigaya</div>
            </div>
          </div>

          <div className="nav-links">
            {PAGES.map(p => (
              <button key={p} className={`nav-link ${page===p?"active":""}`} onClick={() => navTo(p)}>
                {p.charAt(0).toUpperCase()+p.slice(1)}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setSearchOpen(true)}>🔍</button>
            <div className="cart-wrap">
              <button className="icon-btn" onClick={() => setCartOpen(true)}>🛍</button>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
            <button className={`hamburger ${mobileOpen?"open":""}`} onClick={() => setMobileOpen(v=>!v)} aria-label="Toggle menu">
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen?"open":""}`}>
        {PAGES.map(p => (
          <button key={p} className={`mob-link ${page===p?"active":""}`} onClick={() => navTo(p)}>
            {p.charAt(0).toUpperCase()+p.slice(1)}
          </button>
        ))}
      </div>

      {/* SEARCH */}
      {searchOpen && (
        <div className="sbg" onClick={e => e.target===e.currentTarget && setSearchOpen(false)}>
          <div className="sbox">
            <div className="sinput-wrap">
              <span style={{color:"#9B8878"}}>🔍</span>
              <input className="sinput" autoFocus placeholder="Search cakes, cookies, brownies..."
                value={searchQ} onChange={e => setSearchQ(e.target.value)} />
              <button onClick={()=>{setSearchOpen(false);setSearchQ("");}} style={{background:"none",border:"none",cursor:"pointer",color:"#9B8878",fontSize:16}}>✕</button>
            </div>
            <div className="sresults">
              {searchResults.length > 0 ? (
                <>
                  <div className="slabel">{searchResults.length} result{searchResults.length!==1?"s":""} — tap to view details</div>
                  {searchResults.map(item => (
                    <div key={item.id} className="sitem" onClick={() => { setSelectedItem(item); setSearchOpen(false); setSearchQ(""); }}>
                      <img src={item.image} alt={item.name} className="simg" onError={e=>e.target.style.display="none"} />
                      <div><div className="sname">{item.name}</div><div className="scat">{item.category}</div></div>
                      <div className="sprice">{item.priceNote||"₹"+item.price}</div>
                    </div>
                  ))}
                </>
              ) : searchQ.length > 1 ? (
                <div style={{padding:"20px",textAlign:"center",color:"#9B8878"}}>No items found for "{searchQ}"</div>
              ) : (
                <>
                  <div className="slabel">Popular picks — tap to view details</div>
                  {ALL_ITEMS.slice(0,6).map(item => (
                    <div key={item.id} className="sitem" onClick={() => { setSelectedItem(item); setSearchOpen(false); }}>
                      <img src={item.image} alt={item.name} className="simg" onError={e=>e.target.style.display="none"} />
                      <div><div className="sname">{item.name}</div><div className="scat">{item.category}</div></div>
                      <div className="sprice">{item.priceNote||"₹"+item.price}</div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ITEM MODAL */}
      {selectedItem && (
        <div className="modal-bg" onClick={e => e.target===e.currentTarget && setSelectedItem(null)}>
          <div className="modal">
            <button className="modal-x" onClick={() => setSelectedItem(null)}>✕</button>
            <img src={selectedItem.image} alt={selectedItem.name} className="modal-img" onError={e=>e.target.style.display="none"} />
            <div className="modal-body">
              {selectedItem.tag && <span className="mtag">{selectedItem.tag}</span>}
              <div className="mname">{selectedItem.name}</div>
              <div className="mprice">{selectedItem.priceNote||"₹"+selectedItem.price}</div>
              <div className="mdesc">{selectedItem.description}</div>
              <div className="mdetail">{selectedItem.details}</div>
              <div className="mmeta">
                <span className="mpill">⏱ {selectedItem.leadTime} lead time</span>
                <span className="mpill">⚠ {selectedItem.allergens}</span>
                <span className="mpill">📦 Made to order</span>
              </div>
              <button className="madd-btn" onClick={() => { addToCart(selectedItem); setSelectedItem(null); setCartOpen(true); }}>
                Add to Cart — {selectedItem.priceNote||"₹"+selectedItem.price}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CART */}
      {cartOpen && <div className="cart-ov" onClick={() => setCartOpen(false)} />}
      <div className={`cart-panel ${cartOpen?"open":""}`}>
        <div className="cart-hd">
          <div className="cart-title">Your Order 🛍</div>
          <button className="xbtn" onClick={() => setCartOpen(false)}>✕</button>
        </div>
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="empty-c">
              <div style={{fontSize:42,marginBottom:10}}>🧁</div>
              <div style={{fontWeight:500,marginBottom:5}}>Your cart is empty</div>
              <div style={{fontSize:13}}>Add some delicious treats!</div>
            </div>
          ) : cart.map(item => (
            <div key={item.id} className="ci">
              <img src={item.image} alt={item.name} className="ci-img" onError={e=>e.target.style.display="none"} />
              <div style={{flex:1}}>
                <div className="ci-name">{item.name}</div>
                <div className="ci-price">₹{item.price} each</div>
                <div className="qty-row">
                  <button className="qb" onClick={()=>updateQty(item.id,-1)}>−</button>
                  <span className="qv">{item.qty}</span>
                  <button className="qb" onClick={()=>updateQty(item.id,1)}>+</button>
                </div>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",justifyContent:"space-between"}}>
                <div style={{fontWeight:600,fontSize:13,color:"#735F4D"}}>₹{item.price*item.qty}</div>
                <button className="rmbtn" onClick={()=>updateQty(item.id,-item.qty)}>🗑</button>
              </div>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="cart-ft">
            <div className="cart-total"><span>Total</span><span>₹{cartTotal}</span></div>
            {belowMin ? (
              <div className="warn-box warn-red">
                Minimum order is ₹{MIN_ORDER} · Add ₹{MIN_ORDER - cartTotal} more to continue
              </div>
            ) : (
              <div className="warn-box warn-grn">✓ Ready to order!</div>
            )}
            <div style={{fontSize:11,color:"#9B8878",marginBottom:10,textAlign:"center"}}>
              All products made to order · Prebook 24–48 hrs prior
            </div>
            <button className="co-btn" onClick={handleWhatsApp} disabled={belowMin}>
              {belowMin ? `Add ₹${MIN_ORDER - cartTotal} more to order` : "Order via WhatsApp 📱"}
            </button>
          </div>
        )}
      </div>

      {/* HOME */}
      {page==="home" && (
        <div className="page">
          <div className="hero">
            <div className="hero-tag">Homemade with love ✦ Made to order</div>
            <h1 className="hero-title">Short Breads<br/><em>by Mrigaya</em></h1>
            <p className="hero-sub">Cakes · Cheesecakes · Cookies · Chocolates · Pastries</p>
            <div className="hero-btns">
              <button className="btn-p" onClick={()=>navTo("menu")}>Browse Menu</button>
              <button className="btn-o" onClick={()=>navTo("contact")}>Order Now</button>
            </div>
          </div>
          <div className="sec">
            <div className="sec-title">Season Specials ✨</div>
            <div className="sec-line"/>
            <div className="mgrid">
              {MENU_DATA["Season Specials"].map(item => <MenuCard key={item.id} item={item} onAdd={addToCart} onOpen={setSelectedItem}/>)}
            </div>
          </div>
          <div style={{background:"#F5EFE8",padding:"44px 0"}}>
            <div className="sec" style={{paddingTop:0,paddingBottom:0}}>
              <div className="sec-title">Explore Categories</div>
              <div className="sec-line"/>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(120px,1fr))",gap:12}}>
                {Object.keys(MENU_DATA).map(cat => (
                  <div key={cat} onClick={()=>{navTo("menu");setActiveCat(cat);}}
                    style={{background:"#FFFFFF",borderRadius:13,padding:"16px 10px",textAlign:"center",cursor:"pointer",border:"1px solid rgba(115,95,77,0.1)",transition:"all 0.2s"}}
                    onMouseEnter={e=>e.currentTarget.style.transform="translateY(-3px)"}
                    onMouseLeave={e=>e.currentTarget.style.transform=""}>
                    <div style={{fontSize:24,marginBottom:6}}>{cat==="Season Specials"?"🌸":cat==="Pastries"?"🥐":cat==="Cheesecakes"?"🍰":cat==="Cookies"?"🍪":cat==="Brownies"?"🍫":"🍬"}</div>
                    <div style={{fontSize:11,fontWeight:500,color:"#3D2F23"}}>{cat}</div>
                    <div style={{fontSize:10,color:"#9B8878",marginTop:2}}>{MENU_DATA[cat].length} items</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sec" style={{textAlign:"center"}}>
            <div style={{background:"#735F4D",borderRadius:20,padding:"40px 26px",color:"white"}}>
              <h2 style={{fontFamily:"'Playfair Display',serif",fontSize:26,marginBottom:9}}>Custom & Personalised Orders</h2>
              <p style={{opacity:0.8,fontSize:13,marginBottom:24}}>All products are made to order · Prebook 24–48 hours prior</p>
              <button onClick={()=>window.open("https://wa.me/919810806933","_blank")} style={{padding:"12px 26px",background:"white",color:"#735F4D",border:"none",borderRadius:30,fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"'DM Sans',sans-serif"}}>
                WhatsApp Us 💬
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MENU */}
      {page==="menu" && (
        <div className="page">
          <div style={{background:"#F5EFE8",padding:"34px 20px 26px",textAlign:"center"}}>
            <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:36,color:"#3D2F23"}}>Our Menu</h1>
            <p style={{color:"#9B8878",marginTop:7,fontSize:13}}>Handcrafted with finest ingredients · Made fresh to order</p>
          </div>
          <div className="sec">
            <div className="cat-tabs">
              {categories.map(cat => (
                <button key={cat} className={`cat-tab ${activeCat===cat?"active":""}`} onClick={()=>setActiveCat(cat)}>{cat}</button>
              ))}
            </div>
            <div className="mgrid">
              {filteredItems.map(item => <MenuCard key={item.id} item={item} onAdd={addToCart} onOpen={setSelectedItem}/>)}
            </div>
          </div>
        </div>
      )}

      {/* ABOUT */}
      {page==="about" && (
        <div className="page">
          <div className="aw">
            <div className="agrid">
              <div>
                <div style={{display:"inline-block",padding:"4px 12px",background:"rgba(169,106,111,0.12)",borderRadius:20,fontSize:11,color:"#A96A6F",letterSpacing:"0.08em",textTransform:"uppercase",marginBottom:13}}>Our Story</div>
                <h1 className="ah">Baked fresh,<br/>made with love</h1>
                <p className="ap"> Hi, i’m mrigaya 
a 22 yrs old baker by profession and passion, Creative by instinct, brand owner by hustle. I turn simple ideas into thoughtful little experiences — built with heart, good taste, and a lot of late-night perfectionism. Soft spot for aesthetics, honest ingredients, and making things people remember.</p>
                <p className="ap"></p>
                <button className="btn-p" onClick={()=>navTo("menu")}>Explore Menu</button>
              </div>
              <div className="aimg">
                <img src="/assets/mrigaya-pic.jpeg" alt="Baking" />
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

      {/* CONTACT */}
      {page==="contact" && (
        <div className="page">
          <div className="cw">
            <div className="chero">
              <h1 className="ctitle">Get in Touch 💬</h1>
              <p className="csub">Place your order or send us a message. We'd love to hear from you!</p>
              <a className="wa-btn" href="https://wa.me/919810806933" target="_blank" rel="noreferrer">
                <span style={{fontSize:17}}>📱</span> Chat on WhatsApp
              </a>
            </div>
            <div className="cc">
              <div className="ci2">📞</div>
              <div><div className="cct">Phone / WhatsApp</div><div className="ccv">+91 9810806933</div></div>
              <button onClick={()=>window.open("https://wa.me/919810806933","_blank")} style={{marginLeft:"auto",padding:"8px 16px",background:"#735F4D",color:"white",border:"none",borderRadius:16,fontSize:12,fontWeight:500,cursor:"pointer"}}>Order Now</button>
            </div>
            <div className="cc">
              <div className="ci2">📸</div>
              <div><div className="cct">Instagram</div><div className="ccv">@_shortbreads_</div></div>
              <a href="https://instagram.com/_shortbreads_" target="_blank" rel="noreferrer" style={{marginLeft:"auto",padding:"8px 16px",background:"linear-gradient(135deg,#E1306C,#833AB4)",color:"white",borderRadius:16,fontSize:12,fontWeight:500,textDecoration:"none"}}>Follow</a>
            </div>
            <div className="igrid">
              {[["Order Lead Time","24–48 hours"],["Custom Orders","Always welcome"],["Made Fresh","Every order"],["Delivery","Ask on WhatsApp"]].map(([t,v])=>(
                <div key={t} className="ibox"><div className="ibt">{t}</div><div className="ibv">{v}</div></div>
              ))}
            </div>
            {cart.length > 0 && (
              <div style={{marginTop:26,padding:20,background:"#F5EFE8",borderRadius:13}}>
                <div style={{fontWeight:600,marginBottom:11,color:"#3D2F23",fontSize:14}}>Your cart ({cartCount} item{cartCount!==1?"s":""})</div>
                {cart.map(i=>(
                  <div key={i.id} style={{display:"flex",justifyContent:"space-between",fontSize:13,marginBottom:5,color:"#9B8878"}}>
                    <span>{i.name} × {i.qty}</span>
                    <span style={{color:"#735F4D",fontWeight:500}}>₹{i.price*i.qty}</span>
                  </div>
                ))}
                <div style={{borderTop:"1px solid rgba(115,95,77,0.15)",paddingTop:9,marginTop:7,display:"flex",justifyContent:"space-between",fontWeight:600,fontSize:13}}>
                  <span>Total</span><span style={{color:"#735F4D"}}>₹{cartTotal}</span>
                </div>
                {belowMin && <div className="warn-box warn-red" style={{marginTop:10,marginBottom:0}}>Minimum order ₹{MIN_ORDER} — add ₹{MIN_ORDER-cartTotal} more</div>}
                <button className="co-btn" style={{marginTop:12}} onClick={handleWhatsApp} disabled={belowMin}>
                  {belowMin?`Add ₹${MIN_ORDER-cartTotal} more to order`:"Send Order via WhatsApp 📱"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function MenuCard({item, onAdd, onOpen}) {
  return (
    <div className="card" onClick={()=>onOpen(item)}>
      <img src={item.image} alt={item.name} className="card-img" onError={e=>{e.target.style.display="none";e.target.nextSibling.style.display="flex";}}/>
      <div className="card-ph">🍰</div>
      <div className="card-body">
        {item.tag && <span className="ctag">{item.tag}</span>}
        <div className="cname">{item.name}</div>
        <div className="cdesc">{item.description}</div>
        <div className="cfoot">
          <div className="cprice">{item.priceNote||"₹"+item.price}</div>
          <button className="add-btn" onClick={e=>{e.stopPropagation();onAdd(item);}} title="Add to cart">+</button>
        </div>
      </div>
    </div>
  );
}