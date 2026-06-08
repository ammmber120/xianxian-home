const list = document.getElementById("propertyList");

function reserveUrl(title) {
  return `${LINE_URL}?text=${encodeURIComponent("您好，我想預約看「" + title + "」")}`;
}

function renderCards() {
  const activeProperties = properties.filter(p => p.status);

  list.innerHTML = activeProperties.map((p) => `
    <article class="card">
      <a class="image-wrap" href="property.html?id=${p.id}">
        <img src="${p.cover}" alt="${p.title}">
        <span class="badge">${p.no}</span>
      </a>
      <div class="card-body">
        <div class="title-price-row">
          <div class="title-area">
            <h3>${p.title}</h3>
            <p class="location">${p.location}</p>
          </div>
          <p class="price">${p.price}</p>
        </div>
        <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="info compact-info">
          ${Object.entries(p.info).slice(0, 4).map(([k, v]) => `<div><small>${k}</small><strong>${v}</strong></div>`).join("")}
        </div>
        <div class="actions">
          <a class="detail-btn" href="property.html?id=${p.id}">查看詳情</a>
          <a class="reserve-btn" href="${reserveUrl(p.title)}" target="_blank">預約看屋</a>
        </div>
      </div>
    </article>
  `).join("");
}

renderCards();
