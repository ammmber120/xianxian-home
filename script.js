const LINE_URL = "https://line.me/R/ti/p/@你的LINE官方帳號ID";

const properties = [
  {
    id: 1,
    no: "NO.1",
    title: "農十六・景觀四房雙平車",
    location: "鼓山區｜近凹子底森林公園",
    price: "3,680 萬",
    tags: ["景觀視野", "雙平面車位", "永久棟距"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    info: { 坪數: "78.65坪", 格局: "4房2廳2衛", 樓層: "15/24F", 車位: "雙平車" },
    points: [
      "農十六特區核心地段，生活機能成熟",
      "高樓層景觀戶，採光通風佳",
      "室內空間方正，家庭成長首選",
      "社區質感佳，公設完善，管理嚴謹"
    ]
  },
  {
    id: 2,
    no: "NO.2",
    title: "美術館特區・質感三房平車",
    location: "鼓山區｜美術館生活圈",
    price: "1,988 萬",
    tags: ["質感裝潢", "邊間採光", "生活機能佳"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80"
    ],
    info: { 坪數: "45.32坪", 格局: "3房2廳2衛", 樓層: "8/15F", 車位: "平面車位" },
    points: [
      "美術館生活圈，環境舒適有質感",
      "格局方正，室內好規劃",
      "採光明亮，適合首購與小家庭",
      "近公園、商圈，生活採買便利"
    ]
  },
  {
    id: 3,
    no: "NO.3",
    title: "巨蛋商圈・精品三房平車",
    location: "左營區｜近巨蛋捷運站",
    price: "1,598 萬",
    tags: ["近捷運站", "屋齡新", "精緻裝潢"],
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80",
    photos: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],
    info: { 坪數: "32.14坪", 格局: "3房2廳1衛", 樓層: "6/14F", 車位: "平面車位" },
    points: [
      "近捷運、百貨商圈，生活便利",
      "屋齡新，公設與管理維護佳",
      "適合小家庭、首購族群",
      "總價帶漂亮，市場詢問度高"
    ]
  }
];

const list = document.getElementById("propertyList");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

function reserveText(propertyTitle) {
  return `${LINE_URL}?text=${encodeURIComponent("您好，我想預約看「" + propertyTitle + "」")}`;
}

function renderCards() {
  list.innerHTML = properties.map((p, index) => `
    <article class="card">
      <div class="image-wrap">
        <img src="${p.image}" alt="${p.title}">
        <span class="badge">${p.no}</span>
      </div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <p class="location">${p.location}</p>
        <p class="price">${p.price}</p>
        <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
        <div class="info">
          ${Object.entries(p.info).map(([k, v]) => `<div><small>${k}</small><strong>${v}</strong></div>`).join("")}
        </div>
        <div class="actions">
          <button class="detail-btn" onclick="openDetail(${index})">查看詳情</button>
          <a class="reserve-btn" href="${reserveText(p.title)}" target="_blank">預約看屋</a>
        </div>
      </div>
    </article>
  `).join("");
}

function openDetail(index) {
  const p = properties[index];
  modalContent.innerHTML = `
    <div class="gallery">
      ${p.photos.map(photo => `<img src="${photo}" alt="${p.title}">`).join("")}
    </div>
    <div class="detail-content">
      <h2>${p.title}</h2>
      <p class="location">${p.location}</p>
      <p class="price">${p.price}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
      <div class="info">
        ${Object.entries(p.info).map(([k, v]) => `<div><small>${k}</small><strong>${v}</strong></div>`).join("")}
      </div>
      <h3>物件亮點</h3>
      <ul class="points">${p.points.map(point => `<li>${point}</li>`).join("")}</ul>
      <a class="reserve-btn" style="display:block; margin-top:18px;" href="${reserveText(p.title)}" target="_blank">LINE 預約看屋</a>
    </div>
  `;
  modal.classList.remove("hidden");
}

closeModal.onclick = () => modal.classList.add("hidden");
modal.onclick = (e) => {
  if (e.target === modal) modal.classList.add("hidden");
};

renderCards();
