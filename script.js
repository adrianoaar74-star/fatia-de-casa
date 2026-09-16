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

const nav=document.querySelector('.nav');
const materialsLink=document.createElement('a');
materialsLink.href='#materiais';
materialsLink.textContent='Cardápio PDF';
nav.insertBefore(materialsLink, nav.querySelector('.nav-cta'));

const cta=document.querySelector('.cta-band');
const materials=document.createElement('section');
materials.className='section alt';
materials.id='materiais';
materials.innerHTML=`
  <div class="section-heading">
    <div><span class="eyebrow dark">Materiais</span><h2>Cardápio e plano de vendas</h2></div>
    <p>Arquivos em PDF para apresentar os bolos, consultar preços aproximados e organizar os primeiros passos de divulgação.</p>
  </div>
  <div class="product-grid" style="grid-template-columns:repeat(2,minmax(0,1fr));max-width:900px">
    <article class="product-card">
      <div style="padding:34px 24px 6px;font-size:46px">📋</div>
      <div class="product-info">
        <div class="product-top"><h3>Cardápio Fatia de Casa</h3><span class="price">PDF</span></div>
        <p>Tamanhos pequeno, médio e grande, sabores e preços aproximados para envio pelo WhatsApp.</p>
        <a class="mini-btn" href="materiais/cardapio-fatia-de-casa.pdf" target="_blank" rel="noreferrer">Abrir cardápio →</a>
      </div>
    </article>
    <article class="product-card">
      <div style="padding:34px 24px 6px;font-size:46px">📈</div>
      <div class="product-info">
        <div class="product-top"><h3>Plano de vendas — 14 dias</h3><span class="price">PDF</span></div>
        <p>Estratégia prática para buscar os primeiros 10 clientes usando site, WhatsApp, indicação e parcerias locais.</p>
        <a class="mini-btn" href="materiais/plano-vendas-14-dias.pdf" target="_blank" rel="noreferrer">Abrir plano →</a>
      </div>
    </article>
  </div>`;
cta.parentNode.insertBefore(materials,cta);

const menuBtn=document.querySelector('.menu-btn');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));