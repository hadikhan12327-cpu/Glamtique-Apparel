const nv=document.querySelector('nav'),mb=document.querySelector('.mb');
mb.onclick=()=>{nv.classList.toggle('on');mb.setAttribute('aria-expanded',nv.classList.contains('on'))};
const f=document.getElementById('f');
if(f){const p=new URLSearchParams(location.search).get('p'),s=f.querySelector('[name=product]');
if(p){for(const o of s.options)if(o.text===p)s.value=p}
f.addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(f));
const t=encodeURIComponent('New inquiry - Glamtique Apparels\nName: '+d.name+'\nCompany: '+d.company+'\nEmail: '+d.email+'\nProduct: '+d.product+'\nQuantity: '+d.qty+'\nDetails: '+d.details);
document.getElementById('ms').textContent='Opening WhatsApp with your inquiry...';window.open('https://wa.me/923014818139?text='+t,'_blank')})}
