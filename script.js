document.addEventListener("DOMContentLoaded", () => {

  const grid = document.getElementById("productGrid");
  if(!grid) return;

  strains.forEach(strain => {

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div class="product-image">
        <img src="${strain.image}" alt="${strain.name}">
      </div>
      <div class="product-info">
        <h3>${strain.name}</h3>
        <p class="tier">${strain.tier} Tier</p>
        <p class="thc">THC ${strain.thc}</p>
        <p class="price">THB ${strain.price}</p>
        <p class="desc">${strain.description}</p>
      </div>
    `;

    grid.appendChild(card);

  });

});
