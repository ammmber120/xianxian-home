const detailPage = document.getElementById("detailPage");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const property = properties.find(p => p.id === id && p.status);

function reserveUrl(title) {
  return `${LINE_URL}?text=${encodeURIComponent("您好，我想預約看「" + title + "」")}`;
}

if (!property) {
  detailPage.innerHTML = `
    <section class="not-found">
      <h2>找不到這個物件</h2>
      <p>可能已下架，歡迎回到精選物件查看其他房子。</p>
      <a class="reserve-btn" href="index.html">回精選物件</a>
    </section>
  `;
} else {
  document.title = `${property.title}｜仙仙精選物件`;

  detailPage.innerHTML = `
    <section class="detail-hero">
      <img src="${property.cover}" alt="${property.title}">
      <span class="badge">${property.no}</span>
    </section>

    <section class="detail-card">
      <h2>${property.title}</h2>
      <p class="location">${property.location}</p>
      <p class="price">${property.price}</p>
      <div class="tags">${property.tags.map(t => `<span>${t}</span>`).join("")}</div>

      <div class="section-title">物件基本資訊</div>
      <div class="info detail-info">
        ${Object.entries(property.info).map(([k, v]) => `<div><small>${k}</small><strong>${v}</strong></div>`).join("")}
      </div>

      <div class="section-title">物件照片</div>
      <div class="gallery">
        ${property.images.map(img => `<img src="${img}" alt="${property.title}">`).join("")}
      </div>

      <div class="section-title">物件亮點</div>
      <ul class="points">${property.points.map(point => `<li>${point}</li>`).join("")}</ul>

      <p class="note">${property.note}</p>

      <a class="fixed-reserve" href="${reserveUrl(property.title)}" target="_blank">LINE 預約看屋</a>
    </section>
  `;
}
