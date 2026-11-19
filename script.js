const WA = "6281234567890";
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
let brand="Semua",cat="Semua",query="",sort="",cart=(()=>{try{return JSON.parse(sessionStorage.getItem("infa-cart")||"[]")}catch(e){return[]}})();

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
   <article class="p" data-open="${p.id}" tabindex="0" role="link" aria-label="Lihat detail ${p.name}"><div class="img">${art(p)}${p.tag?`<span class="tag">${p.tag}</span>`:""}
   <span class="add">Lihat detail</span></div>
   <div class="meta"><div><b>${p.name}</b><span>${p.brand}</span><span>${lab(p.type)}</span></div><span style="color:var(--ink)">${rp(p.price)}</span></div></article>`).join(""):
   '<p class="none">Tidak ada produk yang cocok. Coba ubah filter atau kata kunci.</p>';
}
function save(){try{sessionStorage.setItem("infa-cart",JSON.stringify(cart))}catch(e){}renderCart()}
function renderCart(){
  const n=cart.reduce((a,c)=>a+c.q,0);$("#n").textContent=n;
  $("#items").innerHTML=cart.length?cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.id),k=c.id+"|"+c.size;return `
   <div class="it"><div class="th">${art(p)}</div><div><b style="font-weight:500">${p.name}</b><div style="color:var(--mute);font-size:13px">${p.brand}${c.size!=="All size"?", ukuran "+c.size:""}</div>
   <div class="q"><button data-d="${k}" aria-label="Kurangi">−</button>${c.q}<button data-i="${k}" aria-label="Tambah">+</button></div></div>
   <span>${rp(p.price*c.q)}</span></div>`}).join(""):'<p class="empty">Keranjang masih kosong.</p>';
  $("#tot").textContent=rp(cart.reduce((a,c)=>a+PRODUCTS.find(x=>x.id===c.id).price*c.q,0));
}
const toast=m=>{const t=document.createElement("div");t.className="toast";t.setAttribute("role","status");t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2600)};
function change(id,d,size){
  const p=PRODUCTS.find(x=>x.id===id),c=cart.find(x=>x.id===id&&x.size===size);
  const max=(stockOf(p).find(x=>x.s===size)||{n:0}).n;
  if(d>0&&(c?c.q:0)+d>max){toast("Stok ukuran "+size+" tinggal "+max+" pcs.");return}
  if(c){c.q+=d;if(c.q<=0)cart=cart.filter(x=>x!==c)}else if(d>0)cart.push({id,size,q:1});
  save();
}
const toggle=o=>document.body.classList.toggle("open",o);

document.addEventListener("click",e=>{
  const t=e.target;
  if(t.dataset.b){brand=t.dataset.b;renderBrands();renderGrid()}
  if(t.dataset.c){cat=t.dataset.c;renderBrands();renderGrid()}
    if(t.dataset.i){const[a,b]=t.dataset.i.split("|");change(+a,1,b)}
  if(t.dataset.d){const[a,b]=t.dataset.d.split("|");change(+a,-1,b)}
  if(t.id==="open")toggle(true);
  if(t.id==="close"||t.id==="shade")toggle(false);
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")toggle(false)});
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const KURIR=[{id:"jne",n:"JNE Reguler",b:18000,e:"2 sampai 3 hari"},{id:"jnt",n:"J&T Express",b:16000,e:"2 sampai 4 hari"},{id:"sicepat",n:"SiCepat Reguler",b:14000,e:"3 sampai 5 hari"}];
const ZONA=[["Pulau Jawa",1],["Bali dan Nusa Tenggara",1.4],["Sumatera",1.5],["Kalimantan dan Sulawesi",1.8],["Maluku dan Papua",2.4]];
const BAYAR=[["qris","QRIS","Semua e-wallet dan m-banking"],["bca","Transfer BCA","Virtual Account"],["mandiri","Transfer Mandiri","Virtual Account"],["gopay","GoPay","Tagihan ke aplikasi"],["dana","DANA","Tagihan ke aplikasi"]];
let CK={step:1,d:{nama:"",hp:"",alamat:"",kota:"",pos:"",zona:0},kurir:"jne",bayar:"qris",order:null,err:"",va:""};
const sub=()=>cart.reduce((a,c)=>a+PRODUCTS.find(x=>x.id===c.id).price*c.q,0);
const qty=()=>cart.reduce((a,c)=>a+c.q,0);
const fee=k=>Math.round(k.b*ZONA[CK.d.zona][1]/500)*500+Math.max(qty()-1,0)*4000;
const ongkir=()=>sub()>=500000?0:fee(KURIR.find(k=>k.id===CK.kurir));
const ckOpen=()=>{closePD();CK.step=1;CK.err="";CK.order=null;$("#ckov").hidden=false;document.body.style.overflow="hidden";ckRender()};
const ckClose=()=>{$("#ckov").hidden=true;document.body.style.overflow=""};
function ckRead(){if(!$("#f-nama"))return;const g=i=>($("#f-"+i).value||"").trim();Object.assign(CK.d,{nama:g("nama"),hp:g("hp"),alamat:g("alamat"),kota:g("kota"),pos:g("pos"),zona:+$("#f-zona").value||0})}
function ckSum(){
  const o=CK.order,items=o?o.items:cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.id);return{name:p.name,brand:p.brand,price:p.price,q:c.q,size:c.size}});
  const s=o?o.sub:sub(),g=o?o.ongkir:ongkir();
  $("#cksum").innerHTML=`<div class="sumbox"><h3>Ringkasan</h3>${items.map(i=>`<div class="sumrow"><span>${esc(i.name)}${sz(i)} x${i.q}<small class="note" style="display:block">${esc(i.brand)}</small></span><span>${rp(i.price*i.q)}</span></div>`).join("")}
  <div class="sumrow" style="border-top:1px solid var(--line);margin-top:8px;padding-top:12px"><span>Subtotal</span><span>${rp(s)}</span></div>
  <div class="sumrow"><span>Ongkos kirim</span><span>${g?rp(g):"Gratis"}</span></div>
  <div class="sumrow t"><span>Total</span><span>${rp(s+g)}</span></div></div>`;
}
function rcptText(o){return `Struk pesanan ${o.no} - infa.store\n${o.tgl}\n\n`+o.items.map(i=>`${i.brand} ${i.name}${sz(i)} x${i.q}: ${rp(i.price*i.q)}`).join("\n")+`\n\nSubtotal: ${rp(o.sub)}\nOngkir (${o.kurir}): ${o.ongkir?rp(o.ongkir):"Gratis"}\nTotal: ${rp(o.total)}\nPembayaran: ${o.bayar} (LUNAS)\n\nDikirim ke:\n${o.d.nama}, ${o.d.alamat}, ${o.d.kota} ${o.d.pos}\n\nTerima kasih sudah belanja di infa.store!`}
function ckRender(){
  const st=CK.step,d=CK.d;let m="";
  $("#steps").hidden=st===4;
  $("#steps").innerHTML=["Pengiriman","Pembayaran","Bayar"].map((t,i)=>`<li ${st===i+1?'aria-current="step"':""} class="${st>i+1?"done":""}">${i+1}. ${t}</li>`).join("");
  if(st===1){
    const f=(id,l,v,t="text")=>`<label>${l}<input id="f-${id}" type="${t}" value="${esc(v)}"></label>`;
    m=`<h3>Alamat pengiriman</h3><div class="fg">${f("nama","Nama penerima",d.nama)}${f("hp","Nomor WhatsApp",d.hp,"tel")}
    <label class="w">Alamat lengkap<textarea id="f-alamat" rows="2">${esc(d.alamat)}</textarea></label>
    ${f("kota","Kota atau kabupaten",d.kota)}${f("pos","Kode pos",d.pos)}
    <label class="w">Wilayah<select id="f-zona">${ZONA.map((z,i)=>`<option value="${i}" ${i===d.zona?"selected":""}>${z[0]}</option>`).join("")}</select></label></div>
    <h3>Pilih kurir</h3>${KURIR.map(k=>`<label class="opt"><input type="radio" name="kurir" value="${k.id}" ${k.id===CK.kurir?"checked":""}><span>${k.n}<small>Estimasi ${k.e}</small></span><span>${sub()>=500000?"Gratis":rp(fee(k))}</span></label>`).join("")}
    <p class="err" role="alert">${CK.err}</p><p class="note">Ongkir di pratinjau ini berupa perkiraan. Di versi Laravel, tarif diambil dari API kurir.</p>
    <div class="btnrow"><button class="btn" id="n1">Lanjut ke pembayaran</button><button class="btn ghost" id="back">Kembali belanja</button></div>`;
  }else if(st===2){
    m=`<h3>Metode pembayaran</h3>${BAYAR.map(b=>`<label class="opt"><input type="radio" name="bayar" value="${b[0]}" ${b[0]===CK.bayar?"checked":""}><span>${b[1]}<small>${b[2]}</small></span></label>`).join("")}
    <div class="btnrow"><button class="btn" id="n2">Lanjut</button><button class="btn ghost" id="b1">Kembali</button></div>`;
  }else if(st===3){
    const b=BAYAR.find(x=>x[0]===CK.bayar);CK.va=CK.va||"8077"+String(Math.floor(Math.random()*1e12)).padStart(12,"0");
    const inst=CK.bayar==="qris"?`<div class="qr" role="img" aria-label="Contoh kode QR"></div><p>Pindai dengan aplikasi e-wallet atau m-banking.</p>`:["bca","mandiri"].includes(CK.bayar)?`<p>Nomor Virtual Account ${b[1]}</p><div class="va">${CK.va}</div><p>Transfer sesuai total tagihan.</p>`:`<p>Tagihan dikirim ke aplikasi ${b[1]} dengan nomor ${esc(d.hp)}.</p>`;
    m=`<h3>Bayar dengan ${b[1]}</h3><p class="note">Dikirim ke ${esc(d.nama)}, ${esc(d.alamat)}, ${esc(d.kota)} ${esc(d.pos)} lewat ${KURIR.find(k=>k.id===CK.kurir).n}.</p>${inst}
    <p class="err">Mode simulasi: tidak ada uang sungguhan yang diproses.</p>
    <div class="btnrow"><button class="btn" id="pay">Simulasikan pembayaran berhasil</button><button class="btn ghost" id="b2">Kembali</button></div>`;
  }else{
    const o=CK.order;
    m=`<h3>Pembayaran diterima</h3><p class="note" style="margin-bottom:16px">Terima kasih, ${esc(o.d.nama)}. Pesanan Anda sedang disiapkan.</p>
    <div class="rcpt"><b>Struk ${o.no}</b><br>${o.tgl}<br><br>${o.items.map(i=>`${esc(i.brand)} ${esc(i.name)}${sz(i)} x${i.q}: ${rp(i.price*i.q)}`).join("<br>")}<br><br>
    Subtotal: ${rp(o.sub)}<br>Ongkir (${o.kurir}): ${o.ongkir?rp(o.ongkir):"Gratis"}<br><b>Total: ${rp(o.total)}</b><br>Pembayaran: ${o.bayar}, <b>LUNAS</b><br>Kirim ke: ${esc(o.d.nama)}, ${esc(o.d.alamat)}, ${esc(o.d.kota)} ${esc(o.d.pos)}</div>
    <div class="btnrow"><button class="btn" id="wa">Kirim struk ke WhatsApp</button><button class="btn ghost" id="done">Selesai</button></div>
    <p class="note" style="margin-top:12px">Di versi Laravel, struk dikirim otomatis ke WhatsApp pembeli oleh server.</p>`;
  }
  $("#ckmain").innerHTML=m;ckSum();$("#ckov").scrollTo(0,0);
}
document.addEventListener("click",e=>{
  const id=e.target.id;
  if(id==="ckx"||id==="back"||id==="done")ckClose();
  if(id==="n1"){ckRead();const d=CK.d,hp=d.hp.replace(/[\s-]/g,"");
    CK.err=!d.nama?"Nama penerima wajib diisi.":!/^(\+62|62|0)8\d{7,12}$/.test(hp)?"Nomor WhatsApp tidak valid.":d.alamat.length<10?"Alamat terlalu singkat.":!d.kota?"Kota wajib diisi.":!/^\d{5}$/.test(d.pos)?"Kode pos harus 5 angka.":"";
    if(!CK.err)CK.step=2;ckRender()}
  if(id==="n2"){CK.step=3;ckRender()}
  if(id==="b1"){CK.step=1;ckRender()}
  if(id==="b2"){CK.step=2;ckRender()}
  if(id==="pay"){
    const items=cart.map(c=>{const p=PRODUCTS.find(x=>x.id===c.id);return{brand:p.brand,name:p.name,price:p.price,q:c.q,size:c.size}});
    const s=sub(),g=ongkir();
    CK.order={no:"INF-"+Date.now().toString().slice(-8),tgl:new Date().toLocaleString("id-ID"),items,sub:s,ongkir:g,total:s+g,kurir:KURIR.find(k=>k.id===CK.kurir).n,bayar:BAYAR.find(b=>b[0]===CK.bayar)[1],d:{...CK.d}};
    cart=[];save();CK.step=4;ckRender()}
  if(id==="wa"){let n=CK.order.d.hp.replace(/\D/g,"");if(n.startsWith("0"))n="62"+n.slice(1);
    window.open("https://wa.me/"+n+"?text="+encodeURIComponent(rcptText(CK.order)),"_blank")}
});
document.addEventListener("change",e=>{const t=e.target;
  if(t.name==="kurir"){CK.kurir=t.value;ckSum()}
  if(t.name==="bayar"){CK.bayar=t.value;CK.va=""}
  if(t.id==="f-zona"){ckRead();ckRender()}});
$("#co").onclick=()=>{if(!cart.length)return;toggle(false);ckOpen()};
const sz=i=>i.size&&i.size!=="All size"?" ("+i.size+")":"";
const slug=t=>t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
// DATA CONTOH per kategori. Ganti dengan spesifikasi asli dari tiap brand.
const MAT={
 tee:{d:"Kaos dengan kain tebal yang jatuh rapi dan nyaman dipakai seharian.",b:"Katun combed 24s",t:"220 gsm",f:"Boxy fit",c:"Cuci terbalik dengan air dingin, setrika suhu rendah"},
 hoodie:{d:"Hoodie hangat dengan bagian dalam lembut, cocok untuk cuaca dingin dan malam hari.",b:"Katun fleece",t:"320 gsm",f:"Oversized",c:"Cuci terbalik, hindari pemutih, jemur di tempat teduh"},
 jacket:{d:"Jaket ringan yang mudah dipadukan, melindungi dari angin dan gerimis.",b:"Nilon dengan furing mesh",t:"Ringan",f:"Regular fit",c:"Lap dengan kain basah atau cuci tangan, jangan disetrika langsung"},
 pants:{d:"Celana dengan potongan santai dan saku fungsional untuk aktivitas sehari-hari.",b:"Katun twill",t:"Sedang",f:"Relaxed fit",c:"Cuci terbalik, jangan memakai pemutih"},
 cap:{d:"Topi dengan ukuran yang bisa diatur sehingga pas untuk berbagai bentuk kepala.",b:"Katun twill",t:"Sedang",f:"Ukuran bisa diatur",c:"Cuci tangan, jangan diperas"},
 beanie:{d:"Kupluk rajut elastis yang hangat dan mudah dipakai.",b:"Akrilik rajut",t:"Elastis",f:"All size",c:"Cuci tangan dengan air dingin, keringkan mendatar"},
 tote:{d:"Tote bag kanvas yang kuat untuk membawa buku, laptop, dan belanjaan.",b:"Kanvas katun",t:"12 oz",f:"Kapasitas sekitar 15 liter",c:"Cuci tangan, jangan direndam lama"},
 sneakers:{d:"Sneakers klasik yang nyaman dan mudah dipadukan dengan pakaian apa pun.",b:"Upper kanvas, sol karet",t:"Sol dengan bantalan tipis",f:"Ukuran standar, pilih sesuai panjang kaki",c:"Sikat lembut dengan sabun ringan, jangan direndam lama"},
 crocs:{d:"Clog ringan yang empuk dan mudah dibersihkan, nyaman untuk dipakai seharian.",b:"Busa EVA ringan",t:"Ringan dan empuk",f:"Ukuran standar, pilih sesuai panjang kaki",c:"Cuci dengan air dan sabun, keringkan di tempat teduh"}
};
const SIZES={shoes:["39","40","41","42","43","44"],one:["All size"],clothes:["S","M","L","XL"]};
const sizeSet=t=>["sneakers","crocs"].includes(t)?"shoes":["cap","beanie","tote","socks"].includes(t)?"one":"clothes";
const stockOf=p=>{if(p.variants&&p.variants.length)return p.variants.map(v=>({s:v.size,n:v.stock}));const a=SIZES[sizeSet(p.type)].map((s,i)=>({s,n:(p.id*7+i*5)%9}));if(!a.some(x=>x.n>0))a[0].n=5;return a};
const SLIDES=[["Tampak depan","none"],["Tampak belakang","scaleX(-1)"],["Detail bahan","scale(1.8)"],["Pilihan warna","none"]];
const svgOf=(p,tf)=>`<svg viewBox="0 0 120 120" fill="${p.color}" stroke="rgba(0,0,0,.18)" stroke-width="1.2" aria-hidden="true" style="transform:${tf}">${SHAPES[p.type]||SHAPES.tee}</svg>`;
const rm=()=>matchMedia("(prefers-reduced-motion:reduce)").matches?"auto":"smooth";
let PD={p:null,size:""};
function guide(t){
  const g=sizeSet(t);
  if(g==="one")return '<p class="note">Produk ini All size dan bisa disesuaikan.</p>';
  const rows=g==="shoes"?[["39","24,5"],["40","25,5"],["41","26"],["42","26,5"],["43","27,5"],["44","28"]]:[["S","52","68"],["M","54","70"],["L","56","72"],["XL","58","74"]];
  const head=g==="shoes"?"<tr><th>Ukuran EU</th><th>Panjang kaki (cm)</th></tr>":"<tr><th>Ukuran</th><th>Lebar dada (cm)</th><th>Panjang (cm)</th></tr>";
  return `<table class="spec">${head}${rows.map(r=>"<tr>"+r.map(c=>`<td>${c}</td>`).join("")+"</tr>").join("")}</table><p class="note">Ukuran contoh. Sesuaikan dengan tabel resmi dari brand.</p>`;
}
function openPD(id){
  PD.p=PRODUCTS.find(x=>x.id===id);PD.size="";
  const p=PD.p,M=MAT[p.type]||MAT.tee,st=stockOf(p),base=slug(p.brand+" "+p.name);
  const rel=PRODUCTS.filter(x=>x.brand===p.brand&&x.id!==p.id).slice(0,4);
  $("#pdmain").innerHTML=`<div class="pdg"><div class="gal">
   <button class="gb l" id="gp" aria-label="Foto sebelumnya">‹</button><button class="gb r" id="gn" aria-label="Foto berikutnya">›</button>
   <div class="trk" id="trk" tabindex="0" aria-label="Galeri foto produk">${SLIDES.map((s,i)=>`<div class="sl" style="background:color-mix(in srgb,var(--card) ${100-i*9}%,${p.color})">${svgOf(p,s[1])}<img src="${IMG_BASE}images/${base}${i?"-"+(i+1):""}.jpg" alt="${esc(p.name)}, ${s[0]}" loading="lazy" onerror="this.remove()"><small>${s[0]}</small></div>`).join("")}</div>
   <div class="dots" id="dots">${SLIDES.map((_,i)=>`<i class="${i?"":"on"}"></i>`).join("")}</div>
   <div class="thumbs" id="thumbs">${SLIDES.map((s,i)=>`<button data-sl="${i}" aria-label="Lihat ${s[0]}" ${i?"":'aria-current="true"'}>${svgOf(p,s[1])}</button>`).join("")}</div></div>
  <div class="pi"><span class="note">${esc(p.brand)}, ${esc(lab(p.type))}</span><h1>${esc(p.name)}</h1>
   <div class="pr">${rp(p.price)}${p.tag?` <span class="tag" style="position:static;margin-left:8px;background:var(--card)">${esc(p.tag)}</span>`:""}</div>
   <p>${esc(p.name)} dari ${esc(p.brand)}. ${M.d}</p>
   <b>Ukuran</b><div class="szs" role="group" aria-label="Pilih ukuran">${st.map(x=>`<button data-sz="${x.s}" aria-pressed="false" ${x.n?"":"disabled"}>${x.s}</button>`).join("")}</div>
   <p class="note" id="stk" style="margin-bottom:6px">Pilih ukuran untuk melihat stok.</p><p class="err" id="perr" role="alert"></p>
   <button class="btn" id="padd" style="width:100%;margin:6px 0 22px">Tambah ke keranjang</button>
   <details open><summary>Bahan dan spesifikasi</summary><table class="spec"><tr><td>Bahan</td><td>${M.b}</td></tr><tr><td>Ketebalan</td><td>${M.t}</td></tr><tr><td>Potongan</td><td>${M.f}</td></tr><tr><td>Perawatan</td><td>${M.c}</td></tr><tr><td>Brand</td><td>${esc(p.brand)}</td></tr></table></details>
   <details><summary>Panduan ukuran</summary>${guide(p.type)}</details>
   <details><summary>Pengiriman dan penukaran</summary><p class="note" style="margin-top:10px">Dikirim lewat JNE, J&T, atau SiCepat. Gratis ongkir di atas Rp500.000. Tukar ukuran maksimal 7 hari setelah barang diterima, selama label masih terpasang.</p></details></div></div>
  ${rel.length?`<h3 style="font:800 22px var(--f1);margin-top:40px;letter-spacing:-.02em">Lainnya dari ${esc(p.brand)}</h3><div class="rel">${rel.map(q=>`<article class="p" data-open="${q.id}" tabindex="0" role="link" aria-label="Lihat detail ${esc(q.name)}"><div class="img">${art(q)}</div><div class="meta"><div><b>${esc(q.name)}</b></div><span style="color:var(--ink)">${rp(q.price)}</span></div></article>`).join("")}</div>`:""}`;
  $("#trk").onscroll=()=>{const t=$("#trk"),i=Math.round(t.scrollLeft/t.clientWidth);
    document.querySelectorAll("#dots i").forEach((d,k)=>d.classList.toggle("on",k===i));
    document.querySelectorAll("#thumbs button").forEach((b,k)=>b.toggleAttribute("aria-current",k===i))};
  $("#pdov").hidden=false;$("#pdov").scrollTo(0,0);document.body.style.overflow="hidden";
}
function closePD(){$("#pdov").hidden=true;if($("#ckov").hidden)document.body.style.overflow=""}
document.addEventListener("click",e=>{
  const t=e.target,o=t.closest("[data-open]");
  if(o){openPD(+o.dataset.open);return}
  if(t.id==="pdx")closePD();
  const z=t.closest("[data-sz]");
  if(z&&!z.disabled){PD.size=z.dataset.sz;
    document.querySelectorAll("#pdmain [data-sz]").forEach(b=>b.setAttribute("aria-pressed",b===z));
    const n=stockOf(PD.p).find(x=>x.s===PD.size).n;
    $("#stk").textContent=n<=3?"Tinggal "+n+" pcs":"Stok tersedia";$("#perr").textContent=""}
  const g=t.closest("#gp,#gn");
  if(g){const k=$("#trk");k.scrollBy({left:(g.id==="gn"?1:-1)*k.clientWidth,behavior:rm()})}
  const th=t.closest("[data-sl]");
  if(th){const k=$("#trk");k.scrollTo({left:+th.dataset.sl*k.clientWidth,behavior:rm()})}
  if(t.id==="padd"){
    if(!PD.size){$("#perr").textContent="Pilih ukuran terlebih dahulu.";return}
    change(PD.p.id,1,PD.size);toggle(true)}
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape")closePD();
  if(e.key==="Enter"&&e.target.dataset&&e.target.dataset.open)openPD(+e.target.dataset.open);
  if(!$("#pdov").hidden&&(e.key==="ArrowRight"||e.key==="ArrowLeft")&&e.target.id==="trk"){}
});
$("#nf").onsubmit=e=>{e.preventDefault();$("#nmsg").textContent="Terima kasih, email kamu sudah tercatat.";e.target.reset()};
$("#q").oninput=e=>{query=e.target.value;renderGrid()};
$("#sort").onchange=e=>{sort=e.target.value;renderGrid()};
const CATS={"tee": "Kaos", "hoodie": "Hoodie", "jacket": "Jaket", "pants": "Celana", "cap": "Topi", "beanie": "Kupluk", "tote": "Tote bag", "sneakers": "Sneakers", "crocs": "Crocs"};
const LOCAL=[{"id": 17, "brand": "Converse", "name": "Chuck Taylor High", "price": 799000, "type": "sneakers", "color": "#1c1c1e", "tag": "Stok terbatas", "img": ""}, {"id": 16, "brand": "Converse", "name": "Chuck 70 Low", "price": 1199000, "type": "sneakers", "color": "#e8e4d8", "tag": "", "img": ""}, {"id": 15, "brand": "Crocs", "name": "Classic Clog Hitam", "price": 449000, "type": "crocs", "color": "#1c1c1e", "tag": "", "img": ""}, {"id": 14, "brand": "Crocs", "name": "Classic Clog", "price": 449000, "type": "crocs", "color": "#3b7dd8", "tag": "Baru", "img": ""}, {"id": 13, "brand": "Preface", "name": "Tote Bag Kanvas", "price": 119000, "type": "tote", "color": "#e6dfcf", "tag": "", "img": ""}, {"id": 12, "brand": "Preface", "name": "Topi Pengantar", "price": 179000, "type": "cap", "color": "#2f3e46", "tag": "", "img": ""}, {"id": 11, "brand": "Preface", "name": "Hoodie Prolog", "price": 499000, "type": "hoodie", "color": "#2b2d42", "tag": "", "img": ""}, {"id": 10, "brand": "Preface", "name": "Tee Pembuka", "price": 239000, "type": "tee", "color": "#e8e4d8", "tag": "", "img": ""}, {"id": 9, "brand": "Calle", "name": "Cargo Pants Trotoar", "price": 449000, "type": "pants", "color": "#4a4a3f", "tag": "Baru", "img": ""}, {"id": 8, "brand": "Calle", "name": "Tee Gang Sempit", "price": 229000, "type": "tee", "color": "#d9d3c7", "tag": "Stok terbatas", "img": ""}, {"id": 7, "brand": "Calle", "name": "Jaket Coach Jalanan", "price": 559000, "type": "jacket", "color": "#6b705c", "tag": "", "img": ""}, {"id": 6, "brand": "Telepati", "name": "Kupluk Antena", "price": 129000, "type": "beanie", "color": "#c8553d", "tag": "", "img": ""}, {"id": 5, "brand": "Telepati", "name": "Hoodie Gelombang", "price": 489000, "type": "hoodie", "color": "#3a3a40", "tag": "", "img": ""}, {"id": 4, "brand": "Telepati", "name": "Boxy Tee Sinyal", "price": 249000, "type": "tee", "color": "#2a3cff", "tag": "Baru", "img": ""}, {"id": 3, "brand": "CHMB", "name": "Track Pants Zip", "price": 429000, "type": "pants", "color": "#1c1c1e", "tag": "", "img": ""}, {"id": 2, "brand": "CHMB", "name": "Hoodie Ruang Tamu", "price": 519000, "type": "hoodie", "color": "#c8553d", "tag": "Baru", "img": ""}, {"id": 1, "brand": "CHMB", "name": "Heavy Tee Kamar", "price": 269000, "type": "tee", "color": "#8d99ae", "tag": "", "img": ""}];
// Alamat API Laravel (php artisan serve). Jika API tidak menyala, otomatis memakai data LOCAL.
const API_ORIGIN="http://127.0.0.1:8000/";
let IMG_BASE="";
async function init(){
  let sumber="data lokal";
  try{
    const r=await fetch(API_ORIGIN+"api/products");
    if(!r.ok)throw new Error("API error");
    const j=await r.json();
    PRODUCTS=j.data.map(p=>({id:p.id,brand:p.brand.name,name:p.name,price:p.price,type:p.category.slug,
      catName:p.category.name,color:p.color,tag:p.tag||"",img:"",variants:p.variants}));
    PRODUCTS.forEach(p=>{LABEL[p.type]=p.catName});
    IMG_BASE=API_ORIGIN;sumber="API Laravel";
  }catch(e){
    PRODUCTS=LOCAL;Object.assign(LABEL,CATS);
  }
  const f=document.querySelector("footer span");if(f)f.textContent="© 2026 infa.store | sumber data: "+sumber;
  cart=cart.filter(c=>c.size&&PRODUCTS.some(p=>p.id===c.id));
  renderBrands();renderGrid();renderCart();
}
init();
