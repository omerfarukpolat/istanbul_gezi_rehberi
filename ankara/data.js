// Ankara Gezi Rehberi — çark verisi (8 kategori × 18 öneri = 144 öneri)
// Öneri ya "Ad" ya da ["Ad", "Google Haritalar araması"] biçimindedir.
// "ink": açık renkli alt kategori halkasındaki yazı rengi.
window.SEHIR = "Ankara";
window.REHBER = [
  {
    name: "Tarih ve Miras",
    icon: "♜",
    color: "#da5b78",
    sub: "#e08195",
    light: "#f4d3da",
    ink: "#1f2a37",
    groups: [
      { name: "Antik Ankara", items: ["Ankara Kalesi", "Augustus Tapınağı", "Roma Hamamı", "Julianus Sütunu", "Roma Tiyatrosu", ["Akkale", "Akkale Ankara Kalesi"]] },
      { name: "Selçuklu ve Osmanlı", items: ["Hacı Bayram Camii", "Arslanhane Camii", "Ahi Elvan Camii", "Cenab-ı Ahmet Paşa Camii", ["Alaaddin Camii", "Alaaddin Camii Ankara Kalesi"], ["Suluhan", "Suluhan Ulus"]] },
      { name: "Cumhuriyet İzleri", items: ["Anıtkabir", "I. TBMM Binası", "II. TBMM Binası", "Ankara Palas", ["Pembe Köşk", "Pembe Köşk Çankaya"], "Ulus Zafer Anıtı"] }
    ]
  },
  {
    name: "Müzeler ve Sanat",
    icon: "✦",
    color: "#e6a041",
    sub: "#edb26c",
    light: "#fbe6cb",
    ink: "#1f2a37",
    groups: [
      { name: "Tarih Müzeleri", items: ["Anadolu Medeniyetleri Müzesi", ["Etnografya Müzesi", "Ankara Etnografya Müzesi"], "Kurtuluş Savaşı Müzesi", "Cumhuriyet Müzesi", "İş Bankası İktisadi Bağımsızlık Müzesi", "Beypazarı Yaşayan Müze"] },
      { name: "Sanat Müzeleri", items: ["CerModern", "Ankara Resim ve Heykel Müzesi", "Erimtan Arkeoloji ve Sanat Müzesi", "Rahmi M. Koç Müzesi", "PTT Pul Müzesi", "Gökyay Satranç Müzesi"] },
      { name: "Sahne ve Kültür", items: ["CSO Ada Ankara", "Ankara Opera Sahnesi", ["Büyük Tiyatro", "Büyük Tiyatro Ankara"], ["Küçük Tiyatro", "Küçük Tiyatro Ankara"], "Ankara Devlet Tiyatrosu", "Nazım Hikmet Kültür Merkezi"] }
    ]
  },
  {
    name: "Parklar ve Doğa",
    icon: "☘︎",
    color: "#78b99b",
    sub: "#93c9b1",
    light: "#dbece4",
    ink: "#1f2a37",
    groups: [
      { name: "Parklar", items: ["Gençlik Parkı", "Kuğulu Park", "Seğmenler Parkı", ["Kurtuluş Parkı", "Kurtuluş Parkı Cebeci"], ["Botanik Parkı", "Botanik Parkı Çankaya"], "50. Yıl Parkı"] },
      { name: "Göller ve Doğa", items: ["Mogan Gölü", "Eymir Gölü", ["Göksu Parkı", "Göksu Parkı Eryaman"], "Çubuk-1 Barajı", ["Karagöl Tabiat Parkı", "Karagöl Tabiat Parkı Çubuk"], "Harikalar Diyarı"] },
      { name: "Manzara ve Yürüyüş", items: ["Atatürk Orman Çiftliği", "Dikmen Vadisi", "Altınpark", "Atakule", ["Atakule Seyir Terası", "Atakule"], ["İnözü Vadisi", "İnözü Vadisi Beypazarı"]] }
    ]
  },
  {
    name: "Çarşılar ve Sokaklar",
    icon: "◆",
    color: "#51b6a8",
    sub: "#78c5bd",
    light: "#d3edea",
    ink: "#1f2a37",
    groups: [
      { name: "Tarihî Çarşılar", items: ["Samanpazarı", ["Ulus Çarşısı", "Ulus Çarşı"], ["Anafartalar Çarşısı", "Anafartalar Çarşısı Ulus"], ["Bakırcılar Çarşısı", "Bakırcılar Çarşısı Ankara"], "Çıkrıkçılar Yokuşu", ["Atpazarı", "Atpazarı Ankara Kalesi"]] },
      { name: "Hanlar ve Pasajlar", items: [["Gazi Pasajı", "Gazi Pasajı Ulus"], ["Zafer Çarşısı", "Zafer Çarşısı Kızılay"], "Pirinç Han", "Kurşunlu Han", "Çengelhan", "Mahmut Paşa Bedesteni"] },
      { name: "Meydanlar ve Sokaklar", items: ["Karanfil Sokak", "Konur Sokak", "Kızılay Meydanı", "Ulus Meydanı", ["Sakarya Caddesi", "Sakarya Caddesi Kızılay"], "Tunalı Hilmi Caddesi"] }
    ]
  },
  {
    name: "Yeme ve İçme",
    icon: "♨︎",
    color: "#4bbcc2",
    sub: "#70c9cf",
    light: "#ceedef",
    ink: "#1f2a37",
    groups: [
      { name: "Ankara Mutfağı", items: [["Aspava kebab", "Aspava"], "Ankara tava", ["Ankara döneri", "döner"], ["Ankara simidi", "simit fırını"], "Çubuk turşusu", ["Beypazarı güveci", "Beypazarı güveç"]] },
      { name: "Yerel Lezzetler", items: ["Beypazarı kurusu", "Beypazarı baklavası", "Höşmerim", "İnceğiz çorbası", "Kızılcahamam bazlaması", "Efelek sarması"] },
      { name: "Yöresel Ürünler", items: ["Kalecik Karası", ["Ayaş domatesi", "Ayaş"], "Beypazarı tarhanası", ["Çubuk vişnesi", "Çubuk"], ["Ankara tiftiği", "Ankara tiftik"], ["Beypazarı havucu", "Beypazarı"]] }
    ]
  },
  {
    name: "Kitap ve Kültür",
    icon: "✎",
    color: "#5a95cf",
    sub: "#7ea8d8",
    light: "#d2e2f2",
    ink: "#1f2a37",
    groups: [
      { name: "Kitabevleri", items: ["Dost Kitabevi", "Olgunlar Kitapçılar Çarşısı", "Adilhan Kitapçılar Çarşısı", ["Zafer Çarşısı sahafları", "Zafer Çarşısı sahaf"], ["Kızılay sahafları", "Kızılay sahaf"], ["Tunalı kitabevleri", "Tunalı Hilmi Caddesi kitabevi"]] },
      { name: "Kütüphaneler", items: ["Millet Kütüphanesi", ["Milli Kütüphane", "Milli Kütüphane Başkanlığı"], "Cebeci Halk Kütüphanesi", "Adnan Ötüken İl Halk Kütüphanesi", "Ankara Üniversitesi Kütüphanesi", "ODTÜ Kütüphanesi"] },
      { name: "Kültür Durakları", items: ["Türk Tarih Kurumu", "Türk Dil Kurumu", "Dil ve Tarih-Coğrafya Fakültesi", "Somut Olmayan Kültürel Miras Müzesi", "Ulucanlar Cezaevi Müzesi", "Hacı Bayram Veli Türbesi"] }
    ]
  },
  {
    name: "Semtler ve Rotalar",
    icon: "⌂",
    color: "#4882cb",
    sub: "#719fd3",
    light: "#ceddf0",
    ink: "#1f2a37",
    groups: [
      { name: "Eski Ankara", items: ["Ulus", "Hamamönü", ["Kale Mahallesi", "Ankara Kalesi"], ["Hacı Bayram çevresi", "Hacı Bayram Veli Camii"], "Sıhhiye", "Cebeci"] },
      { name: "Çankaya Rotası", items: ["Kavaklıdere", "Ayrancı", "Bahçelievler 7. Cadde", "Çankaya Köşkü", "Bestekâr Sokak", "Arjantin Caddesi"] },
      { name: "Başkent Yürüyüşü", items: ["Atatürk Bulvarı", "Güvenpark", "Meşrutiyet Caddesi", "Tahir Hanım Sokak", "Abdi İpekçi Parkı", "Kore Şehitleri Anıtı"] }
    ]
  },
  {
    name: "Günübirlik Kaçamaklar",
    icon: "⛰︎",
    color: "#9985c0",
    sub: "#b09fd5",
    light: "#e5def0",
    ink: "#1f2a37",
    groups: [
      { name: "Tarihî İlçeler", items: ["Beypazarı", "Güdül", "Ayaş", "Kalecik", "Gordion Antik Kenti", "Gavurkale"] },
      { name: "Doğa Rotaları", items: ["Nallıhan Kuş Cenneti", "Soğuksu Milli Parkı", "Işık Dağı", "Eğriova Yaylası", "Çamlıdere", ["Beypazarı İnözü", "İnözü Vadisi Beypazarı"]] },
      { name: "Yakın Keşifler", items: ["Haymana Kaplıcaları", "Kızılcahamam Kaplıcaları", "Elmadağ Kayak Merkezi", "Çubuk Karagöl", "Kalecik Kalesi", "Beypazarı Evleri"] }
    ]
  }
];
