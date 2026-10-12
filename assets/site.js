/* ====== EDIT THIS: your WhatsApp number (country code + number, digits only) ====== */
const HMH_CONFIG={whatsapp:"919347863031",display:"+91 93478 63031",email:"hello@yourdomain.in"};
const PRODUCTS=[
{id:1,name:"Fresh Beef Cuts",price:620,bs:"341% 341%",bp:"1.6% 96.7%",tag:"BEST SELLER"},
{id:2,name:"Premium Ribeye",price:1150,bs:"404% 269%",bp:"45% 99.4%",tag:"BEST SELLER"},
{id:3,name:"Boneless Beef Cubes",price:540,bs:"614% 410%",bp:"100% 95.6%",tag:"TOP PICK"},
{id:4,name:"Chuck Roast",price:480,bs:"404% 269%",bp:"0% 99.4%"},
{id:5,name:"Sirloin Steak",price:980,bs:"698% 465%",bp:"48.6% 95.8%",tag:"TOP PICK"},
{id:6,name:"Butcher's Chops",price:700,bs:"512% 341%",bp:"64.7% 96.7%"}];
const inr=n=>"₹"+Number(n).toLocaleString("en-IN");
const HMH={
 get(){try{return JSON.parse(localStorage.getItem("hmh_cart")||"{}")}catch(e){return{}}},
 save(c){try{localStorage.setItem("hmh_cart",JSON.stringify(c))}catch(e){}HMH.badge()},
 add(id,q=1){const c=HMH.get();c[id]=(c[id]||0)+q;HMH.save(c);HMH.toast("Added to cart ✓")},
 set(id,q){const c=HMH.get();if(q<=0)delete c[id];else c[id]=q;HMH.save(c)},
 clear(){HMH.save({})},
 items(){const c=HMH.get();return Object.keys(c).map(id=>({p:PRODUCTS.find(x=>x.id==id),q:c[id]})).filter(x=>x.p)},
 total(){return HMH.items().reduce((a,i)=>a+i.p.price*i.q,0)},
 count(){return HMH.items().length},
 badge(){document.querySelectorAll("#count").forEach(e=>e.textContent=HMH.count())},
 toast(t){let e=document.getElementById("toast");if(!e){e=document.createElement("div");e.id="toast";document.body.appendChild(e)}
  e.textContent=t;e.classList.add("on");clearTimeout(HMH._t);HMH._t=setTimeout(()=>e.classList.remove("on"),1600)},
 img(p){return `<div style="background-size:${p.bs};background-position:${p.bp}"></div>`}
};
/* shared UI: toast + mobile menu */
(function(){
 const css=document.createElement("style");
 css.textContent=`#toast{position:fixed;left:50%;bottom:28px;transform:translate(-50%,30px);background:#101010;color:#fff;padding:12px 22px;border-radius:99px;font:700 14px 'Space Grotesk',sans-serif;opacity:0;pointer-events:none;transition:.35s;z-index:300}
#toast.on{opacity:1;transform:translate(-50%,0)}
.burger{display:none;width:38px;height:38px;border-radius:50%;place-items:center}
.burger svg{width:22px;height:22px;stroke:currentColor;fill:none;stroke-width:2}
.mmenu{position:fixed;left:0;right:0;top:0;z-index:49;background:#fff;color:#101010;padding:78px 6vw 22px;display:none;flex-direction:column;box-shadow:0 20px 40px -20px rgba(0,0,0,.4)}
.mmenu.open{display:flex}
.mmenu a{padding:14px 0;border-bottom:1px solid #eee;text-decoration:none;color:inherit;font:700 18px 'Space Grotesk',sans-serif}
@media(max-width:820px){.burger{display:grid}nav .logo{display:block}}`;
 document.head.appendChild(css);
 document.addEventListener("DOMContentLoaded",()=>{
  HMH.badge();
  const nav=document.querySelector("nav");if(!nav)return;
  const links=[["index.html","Home"],["our-meat.html","Our Meat"],["quality.html","Quality"],["about.html","About"],["contact.html","Contact"],["cart.html","Cart"]];
  const m=document.createElement("div");m.className="mmenu";m.innerHTML=links.map(l=>`<a href="${l[0]}">${l[1]}</a>`).join("");
  document.body.appendChild(m);
  const b=document.createElement("button");b.className="burger";b.setAttribute("aria-label","Menu");
  b.innerHTML='<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
  b.onclick=()=>m.classList.toggle("open");nav.appendChild(b);
 });
})();
