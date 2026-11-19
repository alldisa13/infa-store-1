<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>infa.store — Brand lokal pilihan</title>
<meta name="description" content="infa.store: kurasi brand fashion lokal Indonesia. Telepati, Calle, CHMB, Praedae dan lainnya.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=Inter+Tight:wght@400;500&display=swap" rel="stylesheet">
<style>
:root{--bg:#ecece9;--ink:#151515;--mute:#76767a;--line:#cfcfcb;--acc:#2a3cff;--card:#e1e1dd;
--f1:"Bricolage Grotesque","Helvetica Neue",Arial,sans-serif;--f2:"Inter Tight","Helvetica Neue",Arial,sans-serif}
@media(prefers-color-scheme:dark){:root{--bg:#151516;--ink:#ecece9;--mute:#97979b;--line:#2c2c2f;--card:#1f1f21;--acc:#7b88ff}}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{background:var(--bg);color:var(--ink);font:400 15px/1.5 var(--f2)}
a{color:inherit;text-decoration:none}button{font:inherit;color:inherit;background:none;border:0;cursor:pointer}
:focus-visible{outline:2px solid var(--acc);outline-offset:3px}
.bar{background:var(--ink);color:var(--bg);text-align:center;padding:8px 12px;font-size:13px}
header{position:sticky;top:0;z-index:20;background:var(--bg);border-bottom:1px solid var(--line);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;padding:14px 24px}
.logo{font:800 26px/1 var(--f1);letter-spacing:-.04em}
nav{display:flex;gap:22px}nav a:hover,.cartbtn:hover{color:var(--acc)}
.cartbtn{justify-self:end}
.hero{padding:7vw 24px 4vw;border-bottom:1px solid var(--line)}
.hero h1{font:800 clamp(56px,15.5vw,230px)/.82 var(--f1);letter-spacing:-.06em;margin-left:-.04em}
.hero h1 i{font-style:normal;color:var(--acc)}
.hero .row{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-top:36px;align-items:flex-end}
.hero p{max-width:36ch;color:var(--mute)}
.btn{display:inline-block;background:var(--ink);color:var(--bg);padding:13px 26px;border-radius:99px;font-weight:500;transition:background .2s}
.btn:hover{background:var(--acc);color:#fff}
.brands{display:flex;overflow-x:auto;border-bottom:1px solid var(--line);scrollbar-width:none}
.brands button{flex:1 0 auto;padding:18px 28px;font:800 22px var(--f1);letter-spacing:-.02em;border-right:1px solid var(--line);color:var(--mute);transition:color .2s,background .2s}
.brands button:hover{color:var(--ink)}
.brands button[aria-pressed=true]{background:var(--ink);color:var(--bg)}
.cats{display:flex;gap:8px;overflow-x:auto;padding:14px 24px;border-bottom:1px solid var(--line);scrollbar-width:none}
.cats button{flex:0 0 auto;padding:7px 16px;border:1px solid var(--line);border-radius:99px;color:var(--mute);transition:.2s}
.cats button:hover{color:var(--ink);border-color:var(--ink)}
.cats button[aria-pressed=true]{background:var(--acc);border-color:var(--acc);color:#fff}
.tools{display:flex;gap:10px;align-items:center;flex-wrap:wrap;justify-content:flex-end}
.tools input,.tools select{padding:8px 14px;border:1px solid var(--line);border-radius:99px;background:transparent;color:var(--ink);font:inherit}
#jml{color:var(--mute)}
.none{grid-column:1/-1;padding:60px 0;text-align:center;color:var(--mute)}
.sec{padding:40px 24px}
.head{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:24px}
.head h2{font:800 clamp(28px,4vw,44px)/1 var(--f1);letter-spacing:-.04em}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px 16px}
.p{display:block;text-align:left}
.img{aspect-ratio:4/5;background:var(--card);position:relative;display:grid;place-items:center;overflow:hidden}
.img img,.th img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .5s cubic-bezier(.2,.7,.2,1)}.p:hover .img img{transform:scale(1.04)}.th{position:relative}.tag,.add{z-index:2}
.img svg{width:64%;transition:transform .5s cubic-bezier(.2,.7,.2,1)}
.p:hover .img svg{transform:scale(1.07)}
.tag{position:absolute;top:10px;left:10px;font-size:12px;background:var(--bg);padding:3px 10px;border-radius:99px}
.add{position:absolute;left:10px;right:10px;bottom:10px;background:var(--ink);color:var(--bg);padding:11px;border-radius:99px;text-align:center;opacity:0;transform:translateY(8px);transition:.25s}
.p:hover .add,.p:focus-within .add{opacity:1;transform:none}
@media(hover:none){.add{opacity:1;transform:none}}
.meta{display:flex;justify-content:space-between;gap:8px;margin-top:10px}
.meta b{font-weight:500}.meta span{color:var(--mute);font-size:13px;display:block}
.about{display:grid;grid-template-columns:1fr 1fr;gap:48px;border-top:1px solid var(--line)}
.about h2{font:800 clamp(34px,5vw,64px)/.95 var(--f1);letter-spacing:-.05em}
.about p{color:var(--mute);max-width:46ch;margin-bottom:16px}
.news{border-top:1px solid var(--line);text-align:center;padding:64px 24px}
.news h2{font:800 clamp(28px,4vw,44px)/1 var(--f1);letter-spacing:-.04em;margin-bottom:20px}
.news form{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}
.news input{padding:13px 20px;border-radius:99px;border:1px solid var(--line);background:transparent;color:var(--ink);min-width:260px;font:inherit}
footer{display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;padding:24px;border-top:1px solid var(--line);color:var(--mute);font-size:13px}
.shade{position:fixed;inset:0;background:#0008;opacity:0;pointer-events:none;transition:.3s;z-index:30}
.drawer{position:fixed;top:0;right:0;bottom:0;width:min(420px,100%);background:var(--bg);z-index:31;transform:translateX(100%);transition:transform .35s cubic-bezier(.2,.7,.2,1);display:flex;flex-direction:column}
body.open .shade{opacity:1;pointer-events:auto}body.open .drawer{transform:none}
.dh{display:flex;justify-content:space-between;padding:18px 20px;border-bottom:1px solid var(--line);font:800 20px var(--f1)}
.items{flex:1;overflow:auto;padding:12px 20px}
.it{display:grid;grid-template-columns:64px 1fr auto;gap:12px;padding:12px 0;border-bottom:1px solid var(--line);align-items:center}
.it .th{background:var(--card);aspect-ratio:4/5;display:grid;place-items:center}.it .th svg{width:70%}
.q{display:flex;gap:10px;align-items:center;margin-top:4px}.q button{width:26px;height:26px;border:1px solid var(--line);border-radius:50%}
.empty{color:var(--mute);padding:40px 0;text-align:center}
.df{padding:20px;border-top:1px solid var(--line)}
.tot{display:flex;justify-content:space-between;margin-bottom:14px;font-weight:500}
.df .btn{width:100%;text-align:center}
@media(max-width:900px){.grid{grid-template-columns:repeat(2,1fr)}.about{grid-template-columns:1fr}nav{display:none}header{grid-template-columns:1fr auto}}
@media(prefers-reduced-motion:reduce){*{transition:none!important;scroll-behavior:auto!important}}
</style>
</head>
<body>
<div class="bar">Gratis ongkir se-Indonesia untuk pembelian di atas Rp500.000</div>
<header>
  <nav><a href="#koleksi">Koleksi</a><a href="#tentang">Tentang</a><a href="#kontak">Kontak</a></nav>
  <a class="logo" href="#">infa.store</a>
  <button class="cartbtn" id="open" aria-label="Buka keranjang">Keranjang (<span id="n">0</span>)</button>
</header>

<section class="hero">
  <h1>Brand lokal,<br>satu <i>toko.</i></h1>
  <div class="row">
    <p>Kurasi pakaian dan aksesori dari brand independen Indonesia. Dipilih satu per satu, dikirim ke seluruh nusantara.</p>
    <a class="btn" href="#koleksi">Belanja koleksi</a>
  </div>
</section>

<div class="brands" id="brands" role="group" aria-label="Filter brand"></div>
<div class="cats" id="cats" role="group" aria-label="Filter kategori"></div>

<section class="sec" id="koleksi">
  <div class="head"><h2 id="judul">Semua produk</h2><div class="tools"><input id="q" type="search" placeholder="Cari produk" aria-label="Cari produk">
  <select id="sort" aria-label="Urutkan"><option value="">Urutkan</option><option value="lo">Harga terendah</option><option value="hi">Harga tertinggi</option><option value="az">Nama A–Z</option></select>
  <span id="jml"></span></div></div>
  <div class="grid" id="grid"></div>
</section>

<section class="sec about" id="tentang">
  <h2>Dari studio kecil, untuk rak kamu.</h2>
  <div>
    <p>infa.store mengumpulkan brand lokal yang membuat pakaian dengan sudut pandang sendiri. Setiap rilis datang dalam jumlah terbatas.</p>
    <p>Mau brand kamu masuk? Kirim profil dan lookbook ke halo@@infa.store.</p>
  </div>
</section>

<section class="news" id="kontak">
  <h2>Info rilis terbaru</h2>
  <form id="nf"><input type="email" required placeholder="Alamat email" aria-label="Email"><button class="btn">Berlangganan</button></form>
  <p id="nmsg" style="margin-top:14px;color:var(--mute)" aria-live="polite"></p>
</section>

<footer><span>© 2026 infa.store</span><span>Instagram · TikTok · WhatsApp</span></footer>

<div class="shade" id="shade"></div>
<aside class="drawer" aria-label="Keranjang">
  <div class="dh"><span>Keranjang</span><button id="close" aria-label="Tutup">✕</button></div>
  <div class="items" id="items"></div>
  <div class="df"><div class="tot"><span>Total</span><span id="tot">Rp0</span></div><button class="btn" id="co">Checkout via WhatsApp</button></div>
</aside>

<script>
const WA = "{{ config('shop.wa') }}";
let PRODUCTS = [];
const SHAPES={
 tee:'<path d="M30 20 L10 34 L20 52 L32 46 V100 H88 V46 L100 52 L110 34 L90 20 Q60 38 30 20Z"/>',
 longsleeve:'<path d="M34 18 L8 70 L20 76 L36 46 V102 H84 V46 L100 76 L112 70 L86 18 Q60 34 34 18Z"/>',
 shirt:'<path d="M32 18 L10 36 L20 54 L32 46 V102 H88 V46 L100 54 L110 36 L88 18 L60 30Z"/><path d="M60 30 V102 M46 20 L60 36 L74 20" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="2.5"/>',
 hoodie:'<path d="M38 14 Q60 30 82 14 L108 32 L100 56 L88 50 V104 H32 V50 L20 56 L12 32Z"/><path d="M48 18 Q60 40 72 18" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="3"/>',
 crewneck:'<path d="M36 16 Q60 28 84 16 L110 34 L102 66 L88 60 V104 H32 V60 L18 66 L10 34Z"/><path d="M32 96 H88 M44 18 Q60 34 76 18" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="2.5"/>',
 jacket:'<path d="M36 14 L60 26 L84 14 L110 32 L102 72 L88 66 V104 H32 V66 L18 72 L10 32Z"/><path d="M60 26 V104" fill="none" stroke="rgba(0,0,0,.4)" stroke-width="3"/>',
 pants:'<path d="M38 12 H82 L92 108 H68 L60 44 L52 108 H28Z"/><path d="M38 22 H82" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="2.5"/>',
 shorts:'<path d="M34 22 H86 L96 82 H68 L60 54 L52 82 H24Z"/><path d="M34 32 H86" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="2.5"/>',
 cap:'<path d="M22 70 Q22 28 62 28 Q98 28 98 70Z"/><path d="M92 68 Q122 66 118 78 Q100 80 90 76Z"/>',
 beanie:'<path d="M26 74 Q26 24 60 24 Q94 24 94 74Z"/><path d="M20 72 H100 V94 H20Z"/><circle cx="60" cy="20" r="6"/>',
 tote:'<path d="M28 44 H92 L98 108 H22Z"/><path d="M46 44 V30 Q46 16 60 16 Q74 16 74 30 V44" fill="none" stroke="rgba(0,0,0,.4)" stroke-width="3.5"/>',
 sneakers:'<path d="M8 80 Q8 62 28 60 L48 44 Q60 58 82 62 Q112 64 114 82 V92 H8Z"/><path d="M8 84 H114" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="3"/>',
 crocs:'<path d="M12 72 Q12 44 52 44 H78 Q110 46 108 80 V92 H12Z"/><circle cx="44" cy="68" r="3.5" fill="rgba(0,0,0,.3)"/><circle cx="60" cy="66" r="3.5" fill="rgba(0,0,0,.3)"/><circle cx="76" cy="68" r="3.5" fill="rgba(0,0,0,.3)"/>',
 socks:'<path d="M44 12 H74 V68 L98 84 Q108 96 96 106 Q84 112 72 102 L44 80 Q38 74 38 68Z"/><path d="M44 24 H74" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="3"/>'
};
const LABEL={tee:"Kaos",longsleeve:"Kaos lengan panjang",shirt:"Kemeja",hoodie:"Hoodie",crewneck:"Sweater",jacket:"Jaket",pants:"Celana panjang",shorts:"Celana pendek",cap:"Topi",beanie:"Kupluk",tote:"Tote bag",socks:"Kaus kaki"};
const lab=t=>LABEL[t]||t;
const art=(p)=>`<svg viewBox="0 0 120 120" fill="${p.color}" stroke="rgba(0,0,0,.18)" stroke-width="1.2" aria-hidden="true">${SHAPES[p.type]||SHAPES.tee}</svg>`+(p.img?`<img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.remove()">`:"");
const rp=n=>"Rp"+n.toLocaleString("id-ID");
const $=s=>document.querySelector(s);
let brand="Semua",cat="Semua",query="",sort="",cart=JSON.parse(sessionStorage.getItem("infa-cart")||"[]");

const norm=t=>t.toLowerCase();
function chips(el,attr,list,cur){
  $(el).innerHTML=list.map(([v,txt])=>`<button data-${attr}="${v}" aria-pressed="${v===cur}">${txt}</button>`).join("");
}
function renderBrands(){
  chips("#brands","b",["Semua",...new Set(PRODUCTS.map(p=>p.brand))].map(b=>[b,b]),brand);
  const types=[...new Set(PRODUCTS.map(p=>p.type))];
  chips("#cats","c",[["Semua","Semua kategori"],...types.map(t=>[t,lab(t)])],cat);
}
function renderGrid(){
  let L=PRODUCTS.filter(p=>(brand==="Semua"||p.brand===brand)&&(cat==="Semua"||p.type===cat)&&norm(p.name+" "+p.brand+" "+lab(p.type)).includes(norm(query)));
  if(sort==="lo")L.sort((a,b)=>a.price-b.price);
  if(sort==="hi")L.sort((a,b)=>b.price-a.price);
  if(sort==="az")L.sort((a,b)=>a.name.localeCompare(b.name));
  $("#judul").textContent=brand==="Semua"?"Semua produk":brand;
  $("#jml").textContent=L.length+" produk";
  $("#grid").innerHTML=L.length?L.map(p=>`
   <article class="p"><div class="img">${art(p)}${p.tag?`<span class="tag">${p.tag}</span>`:""}
   <button class="add" data-add="${p.id}">Tambah ke keranjang</button></div>
   <div class="meta"><div><b>${p.name}</b><span>${p.brand}</span><span>${lab(p.type)}</span></div><span style="color:var(--ink)">${rp(p.price)}</span></div></article>`).join(""):
   '<p class="none">Tidak ada produk yang cocok. Coba ubah filter atau kata kunci.</p>';
}
function save(){try{sessionStorage.setItem("infa-cart",JSON.stringify(cart))}catch(e){}renderCart()}
function renderCart(){
  const n=cart.reduce((a,c)=>a+c.q,0);$("#n").textContent=n;
  $("#items").innerHTML=cart.length?cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.id);return `
   <div class="it"><div class="th">${art(p)}</div><div><b style="font-weight:500">${p.name}</b><div style="color:var(--mute);font-size:13px">${p.brand}</div>
   <div class="q"><button data-d="${p.id}" aria-label="Kurangi">−</button>${c.q}<button data-i="${p.id}" aria-label="Tambah">+</button></div></div>
   <span>${rp(p.price*c.q)}</span></div>`}).join(""):'<p class="empty">Keranjang masih kosong.</p>';
  $("#tot").textContent=rp(cart.reduce((a,c)=>a+PRODUCTS.find(x=>x.id===c.id).price*c.q,0));
}
function change(id,d){
  const c=cart.find(x=>x.id===id);
  if(c){c.q+=d;if(c.q<=0)cart=cart.filter(x=>x!==c)}else if(d>0)cart.push({id,q:1});
  save();
}
const toggle=o=>document.body.classList.toggle("open",o);

document.addEventListener("click",e=>{
  const t=e.target;
  if(t.dataset.b){brand=t.dataset.b;renderBrands();renderGrid()}
  if(t.dataset.c){cat=t.dataset.c;renderBrands();renderGrid()}
  if(t.dataset.add){change(+t.dataset.add,1);toggle(true)}
  if(t.dataset.i)change(+t.dataset.i,1);
  if(t.dataset.d)change(+t.dataset.d,-1);
  if(t.id==="open")toggle(true);
  if(t.id==="close"||t.id==="shade")toggle(false);
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")toggle(false)});
$("#co").onclick=()=>{
  if(!cart.length)return;
  const lines=cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.id);return `- ${p.brand} ${p.name} x${c.q} (${rp(p.price*c.q)})`});
  const msg=`Halo infa.store, saya mau pesan:\n${lines.join("\n")}\nTotal: ${$("#tot").textContent}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`,"_blank");
};
$("#nf").onsubmit=e=>{e.preventDefault();$("#nmsg").textContent="Terima kasih, email kamu sudah tercatat.";e.target.reset()};
$("#q").oninput=e=>{query=e.target.value;renderGrid()};
$("#sort").onchange=e=>{sort=e.target.value;renderGrid()};
async function load(){
  try{
    const r=await fetch("/api/products");
    if(!r.ok)throw new Error();
    const j=await r.json();
    PRODUCTS=j.data.map(p=>({id:p.id,brand:p.brand.name,name:p.name,price:p.price,type:p.category.slug,
      catName:p.category.name,color:p.color,tag:p.tag||"",img:p.image?"/"+p.image:"",
      stock:p.variants.reduce((a,v)=>a+v.stock,0)}));
    PRODUCTS.forEach(p=>{LABEL[p.type]=p.catName});
  }catch(e){$("#grid").innerHTML='<p class="none">Produk gagal dimuat dari API. Pastikan server Laravel berjalan.</p>';return}
  cart=cart.filter(c=>PRODUCTS.some(p=>p.id===c.id));
  renderBrands();renderGrid();renderCart();
}
load();
</script>
</body>
</html>
