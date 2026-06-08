// 之後維護物件，只需要改這個檔案。
// 注意：文字前後要保留引號，逗號也不要刪掉。
// 上架 true，下架 false。

const LINE_URL = "https://line.me/R/ti/p/@你的LINE官方帳號ID";
const BRAND_URL = "https://你的品牌專區網址";

const properties = [
  {
    id: "p1",
    status: true,
    no: "NO.1",
    title: "文化中心/科工館/雙商圈低總價公寓4樓",
    location: "苓雅區｜近科工館",
    price: "586 萬",
    tags: ["邊間採光佳", "鄰近學區"],
    cover: "images/A/01.jpg",
    images: [
      "images/A/01.jpg",
      "images/A/02.jpg",
      "images/A/03.jpg",
      "images/A/04.jpg",
      "images/A/05.jpg",
      "images/A/06.jpg",
      "images/A/07.jpg",
      "images/A/08.jpg",
      "images/A/09.jpg",
      "images/A/10.jpg"
    ],
    info: {
      坪數: "25.62坪",
      格局: "3房2廳1衛",
      樓層: "4/4F",
      車位: "無",
      類型: "公寓",
      屋齡: "依謄本為準"
    },
    points: [
      "苓雅核心生活圈，機能成熟",
      "邊間格局擁有雙面採光優勢",
      "低總價＋市區地段，具備穩定出租需求",
      "學區完整，家長接送方便"
    ],
    note: "資料僅供參考，實際資訊依現場與謄本為準。"
  },
  {
    id: "p2",
    status: true,
    no: "NO.2",
    title: "美術館特區・質感三房平車",
    location: "鼓山區｜美術館生活圈",
    price: "1,988 萬",
    tags: ["質感裝潢", "邊間採光", "生活機能佳"],
    cover: "images/B/01.jpg",
    images: [
      "images/B/01.jpg",
      "images/B/02.jpg",
      "images/B/03.jpg",
      "images/B/04.jpg",
      "images/B/05.jpg"
    ],
    info: {
      坪數: "45.32坪",
      格局: "3房2廳2衛",
      樓層: "8/15F",
      車位: "平面車位",
      類型: "大樓",
      屋齡: "依謄本為準"
    },
    points: [
      "美術館生活圈，環境舒適有質感",
      "格局方正，室內好規劃",
      "採光明亮，適合首購與小家庭",
      "近公園、商圈，生活採買便利"
    ],
    note: "資料僅供參考，實際資訊依現場與謄本為準。"
  },
  {
    id: "p3",
    status: true,
    no: "NO.3",
    title: "巨蛋商圈・精品三房平車",
    location: "左營區｜近巨蛋捷運站",
    price: "1,598 萬",
    tags: ["近捷運站", "屋齡新", "精緻裝潢"],
   cover: "images/C/01.jpg",
    images: [
      "images/A/01.jpg",
      "images/A/02.jpg",
      "images/A/03.jpg"
    ],
    info: {
      坪數: "32.14坪",
      格局: "3房2廳1衛",
      樓層: "6/14F",
      車位: "平面車位",
      類型: "大樓",
      屋齡: "依謄本為準"
    },
    points: [
      "近捷運、百貨商圈，生活便利",
      "屋齡新，公設與管理維護佳",
      "適合小家庭、首購族群",
      "總價帶漂亮，市場詢問度高"
    ],
    note: "資料僅供參考，實際資訊依現場與謄本為準。"
  }
];
