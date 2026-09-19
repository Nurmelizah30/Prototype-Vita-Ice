const products = [
  {name:'VITA-IRON', image:'1.png', category:'01 / iron blend', ingredient:'Daun kelor / Moringa oleifera', benefit:'Mendukung pencegahan anemia dan stunting dengan kandungan zat besi serta asam folat.', nutrition:[['80','kkal'],['3,2 g','lemak'],['4,2 g','protein'],['9,5 g','karbo'],['5,2 g','gula'],['2,8 mg','zat besi'],['125 mg','kalsium']]},
  {name:'VITA-HEART', image:'2.png', category:'02 / heart blend', ingredient:'Bunga rosella / Hibiscus sabdariffa', benefit:'Membantu memelihara kesehatan pembuluh darah dan jantung dengan antosianin.', nutrition:[['75','kkal'],['3,2 g','lemak'],['3,5 g','protein'],['8,8 g','karbo'],['4,8 g','gula'],['tinggi','antioksidan'],['110 mg','kalsium']]},
  {name:'VITA-BALANCE', image:'3.png', category:'03 / balance blend', ingredient:'Kayu manis / Cinnamomum burmannii', benefit:'Mendukung pengelolaan kadar gula darah dengan karbohidrat berindeks glikemik rendah.', nutrition:[['78','kkal'],['3,3 g','lemak'],['3,6 g','protein'],['8,5 g','karbo'],['4,5 g','gula'],['1,5 g','serat'],['115 mg','kalsium']]},
  {name:'VITA-GUT', image:'4.png', category:'04 / gut friendly', ingredient:'Umbi porang / Amorphophallus muelleri', benefit:'Mendukung kesehatan pencernaan melalui serat glucomannan sebagai prebiotik untuk mikrobioma usus.', nutrition:[['72','kkal'],['3,1 g','lemak'],['3,5 g','protein'],['9,0 g','karbo'],['5,0 g','gula'],['3,2 g','glucomannan'],['110 mg','kalsium']]},
  {name:'VITA-ANTIOX', image:'5.png', category:'05 / antioxidant blend', ingredient:'Ubi ungu / Ipomoea batatas L.', benefit:'Membantu melindungi sel tubuh dari stres oksidatif melalui pigmen ungu aktif.', nutrition:[['85','kkal'],['3,3 g','lemak'],['3,8 g','protein'],['11,2 g','karbo'],['5,8 g','gula'],['tinggi','antosianin'],['112 mg','kalsium']]},
  {name:'VITA-IMMUNE', image:'6.png', category:'06 / immune blend', ingredient:'Jahe merah / Zingiber officinale var. rubrum', benefit:'Mendukung daya tahan tubuh dan anti-inflamasi alami melalui gingerol serta oleoresin.', nutrition:[['76','kkal'],['3,2 g','lemak'],['3,5 g','protein'],['8,9 g','karbo'],['4,9 g','gula'],['aktif','gingerol'],['110 mg','kalsium']]},
  {name:'VITABONE', image:'7.png', category:'07 / bone support', ingredient:'Kedelai lokal / Glycine max', benefit:'Mendukung kesehatan tulang dan gigi dengan protein nabati, isoflavon, dan kalsium.', nutrition:[['88','kkal'],['3,5 g','lemak'],['5,5 g','protein'],['8,5 g','karbo'],['4,7 g','gula'],['aktif','isoflavon'],['140 mg','kalsium']]},
  {name:'VITA-GROWTH', image:'8.png', category:'08 / growth blend', ingredient:'Labu kuning / Cucurbita moschata', benefit:'Mendukung kesehatan mata dan pertumbuhan anak melalui beta-karoten atau provitamin A.', nutrition:[['82','kkal'],['3,2 g','lemak'],['3,6 g','protein'],['10,5 g','karbo'],['5,5 g','gula'],['tinggi','beta-karoten'],['112 mg','kalsium']]},
  {name:'VITABEET', image:'9.png', category:'09 / vibrant roots', ingredient:'Buah bit / Beta vulgaris', benefit:'Mendukung kelancaran sirkulasi darah, stamina, dan antioksidan melalui nitrat organik.', nutrition:[['79','kkal'],['3,2 g','lemak'],['3,7 g','protein'],['9,8 g','karbo'],['5,4 g','gula'],['aktif','nitrat organik'],['113 mg','kalsium']]},
  {name:'VITA-BRAIN', image:'10.png', category:'10 / focus blend', ingredient:'Pegagan / Centella asiatica', benefit:'Mendukung fungsi kognitif, daya ingat, dan konsentrasi melalui senyawa neuroprotektif.', nutrition:[['75','kkal'],['3,2 g','lemak'],['3,5 g','protein'],['8,7 g','karbo'],['4,8 g','gula'],['aktif','asiaticoside'],['110 mg','kalsium']]}
];

const grid = document.querySelector('#productGrid');
const modal = document.querySelector('#productModal');
const modalImage = document.querySelector('#modalImage');
products.forEach((product, index) => {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.tabIndex = 0;
  card.innerHTML = `<div class="product-image"><img src="${product.image}" alt="${product.name}" loading="lazy"></div><div class="product-info"><div><span class="product-number">0${index + 1}</span><h3>${product.name}</h3></div><span class="product-arrow">↗</span></div>`;
  card.addEventListener('click', () => openProduct(product));
  card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') openProduct(product); });
  grid.appendChild(card);
});

function openProduct(product) {
  modalImage.src = product.image;
  modalImage.alt = product.name;
  document.querySelector('#modalCategory').textContent = product.category;
  document.querySelector('#modalName').textContent = product.name;
  document.querySelector('#modalBenefit').textContent = product.benefit;
  document.querySelector('#modalIngredient').textContent = product.ingredient;
  document.querySelector('#nutritionGrid').innerHTML = product.nutrition.map(item => `<div class="nutrition-item"><strong>${item[0]}</strong><span>${item[1]}</span></div>`).join('');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() { modal.classList.remove('is-open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; }
document.querySelectorAll('[data-close]').forEach(element => element.addEventListener('click', closeModal));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeModal(); });