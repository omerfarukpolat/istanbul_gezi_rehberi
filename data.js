// İstanbul Gezi Rehberi — çark verisi (8 kategori × 16 öneri = 128 öneri)
window.REHBER = [
  {
    name: "Tarihi Yarımada",
    icon: "♜",
    color: "#dc5a72",
    sub: "#e27386",
    light: "#f3c9d3",
    groups: [
      { name: "Sultanahmet", items: ["Sultanahmet Camii", "Ayasofya", "Yerebatan Sarnıcı", "Türk ve İslam Eserleri", "Dikilitaş"] },
      { name: "Saraylar ve Tarih", items: ["Arasta Çarşısı", "Topkapı Sarayı", "Gülhane Parkı", "İstanbul Arkeoloji", "Soğukçeşme Sokağı", "Küçük Ayasofya"] },
      { name: "Eminönü ve Çarşılar", items: ["Mısır Çarşısı", "Süleymaniye Camii", "Rüstem Paşa Camii", "Yeni Camii", "Kapalıçarşı"] }
    ]
  },
  {
    name: "Boğaz ve Sahiller",
    icon: "⚓",
    color: "#e89a32",
    sub: "#ebac4f",
    light: "#f7e0bd",
    groups: [
      { name: "Beşiktaş ve Ortaköy", items: ["Beşiktaş Çarşısı", "Ortaköy Camii", "Ortaköy sahili", "Çırağan çevresi", "Yıldız Parkı"] },
      { name: "Bebek ve Arnavutköy", items: ["Bebek sahili", "Arnavutköy sokakları", "Aşiyan Müzesi", "Rumeli Hisarı", "Emirgan Korusu"] },
      { name: "Üsküdar ve Kuzey Kıyı", items: ["Kuzguncuk", "Çengelköy", "Beylerbeyi Sarayı", "Çamlıca Tepesi", "Kız Kulesi seyri", "Salacak sahili"] }
    ]
  },
  {
    name: "Müzeler ve Sanat",
    icon: "✦",
    color: "#e8674a",
    sub: "#ec8268",
    light: "#f7d0c6",
    groups: [
      { name: "Klasik Müzeler", items: ["Pera Müzesi", "Sakıp Sabancı Müzesi", "Rahmi Koç Müzesi", "İstanbul Modern", "Panorama 1453"] },
      { name: "Galeriler ve Tasarım", items: ["Salt Galata", "Arter", "Borusan Contemporary", "Meşher", "Anna Laudel"] },
      { name: "Sahne ve Kültür", items: ["Atatürk Kültür Merkezi", "Zorlu PSM", "Babylon", "Süreyya Operası", "Cemal Reşit Rey", "Nardis"] }
    ]
  },
  {
    name: "Semtler ve Sokaklar",
    icon: "⌂",
    color: "#d45d86",
    sub: "#db7598",
    light: "#f2cad8",
    groups: [
      { name: "Galata ve Karaköy", items: ["Galata Kulesi", "Bankalar Caddesi", "Kamondo Merdivenleri", "Karaköy iskelesi", "Galataport"] },
      { name: "Beyoğlu ve Cihangir", items: ["İstiklal Caddesi", "Çiçek Pasajı", "Asmalımescit", "Cihangir sokakları", "Firuzağa"] },
      { name: "Balat, Fener ve Kadıköy", items: ["Balat renkli evler", "Fener Rum Lisesi", "Moda sahili", "Yeldeğirmeni", "Bahariye", "Kadife Sokak"] }
    ]
  },
  {
    name: "Yeme ve İçme",
    icon: "♨",
    color: "#43aebc",
    sub: "#5fbcc8",
    light: "#c3e5ea",
    groups: [
      { name: "Kahvaltı ve Çay", items: ["Van Kahvaltı Evi", "Çınaraltı Çay Bahçesi", "Moda Çay Bahçesi", "Namlı Gurme", "Dem"] },
      { name: "Sokak Lezzetleri", items: ["Balık ekmek", "Islak hamburger", "Midye dolma", "Kokoreç", "Kumpir"] },
      { name: "Tatlı ve Akşam", items: ["Kanaat Lokantası", "Pandeli", "Karaköy Güllüoğlu", "Hafız Mustafa", "Asmalı Cavit", "Meze by Lemon Tree"] }
    ]
  },
  {
    name: "Manzara ve Dinlenme",
    icon: "☼",
    color: "#36a96e",
    sub: "#55b886",
    light: "#bfe3cf",
    groups: [
      { name: "Gün Batımı ve Yürüyüş", items: ["Moda sahili", "Caddebostan sahili", "Salacak sahili", "Galataport sahili", "Haliç kıyısı"] },
      { name: "Parklar ve Korular", items: ["Maçka Parkı", "Fethi Paşa Korusu", "Yıldız Parkı", "Atatürk Arboretumu", "Belgrad Ormanı"] },
      { name: "Kuleler ve Tepeler", items: ["Pierre Loti Tepesi", "Galata manzarası", "Büyük Çamlıca Tepesi", "Nakkaştepe", "Otağtepe", "Ulus Parkı"] }
    ]
  },
  {
    name: "Adalar ve Kaçamaklar",
    icon: "⛵\uFE0E",
    color: "#4279c9",
    sub: "#5f8fd3",
    light: "#c2d4ef",
    groups: [
      { name: "Büyükada", items: ["Büyükada iskelesi", "Bisiklet turu", "Nizam sokakları", "Aya Yorgi", "Dilburnu"] },
      { name: "Heybeliada ve Burgazada", items: ["Heybeliada Ruhban Okulu", "Değirmenburnu", "İsmet İnönü Evi", "Sait Faik Müzesi", "Kalpazankaya"] },
      { name: "Vapur ve Kaçış Rotaları", items: ["Boğaz turu", "Kadıköy-Beşiktaş", "Eminönü-Kadıköy", "Kuzguncuk yürüyüşü", "Belgrad kaçamağı", "Polonezköy"] }
    ]
  },
  {
    name: "Alışveriş ve Pazarlar",
    icon: "◆",
    color: "#7755bb",
    sub: "#8b70c6",
    light: "#d6cbec",
    groups: [
      { name: "Tarihi Çarşılar", items: ["Kapalıçarşı", "Sahaflar", "Bakırcılar", "Mahmutpaşa", "Feriköy Antika"] },
      { name: "Kitap ve Tasarım", items: ["Robinson Crusoe 389", "Minoa", "Homer Kitabevi", "İstanbul Kitapçısı", "Yapı Kredi Kültür"] },
      { name: "Mahalle ve Pazar", items: ["Bomonti Organik Pazar", "Beşiktaş Pazarı", "Kadıköy Salı Pazarı", "Balat antikacılar", "Kuzguncuk bostanı", "Yeldeğirmeni pazarı"] }
    ]
  }
];
