const products = [
  {name:'Chocolate cremoso', desc:'Massa macia, cacau e cobertura brilhante de chocolate.', price:'a partir de R$ 42', img:'https://images.pexels.com/photos/19651179/pexels-photo-19651179.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {name:'Cenoura com chocolate', desc:'O clássico brasileiro com cobertura generosa e caseira.', price:'a partir de R$ 38', img:'https://images.pexels.com/photos/12118052/pexels-photo-12118052.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {name:'Laranja', desc:'Aromático, leve e úmido, perfeito para acompanhar café.', price:'a partir de R$ 34', img:'https://images.pexels.com/photos/37275983/pexels-photo-37275983.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {name:'Fubá', desc:'Textura delicada, perfume de erva-doce e sabor de casa.', price:'a partir de R$ 32', img:'https://images.pexels.com/photos/2957897/pexels-photo-2957897.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {name:'Milho', desc:'Cremoso por dentro, dourado por fora e cheio de memória afetiva.', price:'a partir de R$ 35', img:'https://images.pexels.com/photos/264892/pexels-photo-264892.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {name:'Coco', desc:'Massa macia com coco e finalização delicadamente úmida.', price:'a partir de R$ 36', img:'https://images.pexels.com/photos/6441083/pexels-photo-6441083.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {name:'Limão', desc:'Cítrico, fresco e equilibrado com cobertura cremosa.', price:'a partir de R$ 36', img:'https://images.pexels.com/photos/18061106/pexels-photo-18061106.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {name:'Formigueiro', desc:'Massa de baunilha com chocolate e aquele visual divertido.', price:'a partir de R$ 35', img:'https://images.pexels.com/photos/19940993/pexels-photo-19940993.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {name:'Banana com canela', desc:'Banana madura, canela e perfume de bolo recém-saído do forno.', price:'a partir de R$ 36', img:'https://images.pexels.com/photos/30575906/pexels-photo-30575906.jpeg?auto=compress&cs=tinysrgb&w=900'},
  {name:'Prestígio', desc:'Chocolate intenso com coco em uma combinação clássica.', price:'a partir de R$ 45', img:'https://images.pexels.com/photos/21820865/pexels-photo-21820865.jpeg?auto=compress&cs=tinysrgb&w=900'}
];
const grid = document.getElementById('productGrid');
grid.innerHTML = products.map(p => `<article class="product-card"><div class="product-photo" style="background-image:url('${p.img}')"></div><div class="product-info"><div class="product-top"><h3>${p.name}</h3><span class="price">${p.price}</span></div><p>${p.desc}</p><a class="mini-btn" target="_blank" rel="noreferrer" href="https://wa.me/5511999999999?text=${encodeURIComponent('Olá! Quero saber mais sobre o bolo '+p.name+'.')}">Quero esse →</a></div></article>`).join('');
const menuBtn=document.querySelector('.menu-btn'); const nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));