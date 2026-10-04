// İzmir Gezi Rehberi — çark verisi (8 kategori × 16 öneri = 128 öneri)
// Öneri ya "Ad" ya da ["Ad", "Google Haritalar araması"] biçimindedir.
window.SEHIR = "İzmir";
window.REHBER = [
  {
    name: "Kemeraltı ve Konak",
    icon: "♜",
    color: "#dc5a72",
    sub: "#e27386",
    light: "#f3c9d3",
    groups: [
      { name: "Saat Kulesi ve Konak", items: ["Konak Saat Kulesi", "Konak Yalı Camii", "Konak Pier", ["Milli Kütüphane", "İzmir Milli Kütüphanesi"], ["Hisar Camii", "Hisar Camii Kemeraltı"]] },
      { name: "Kemeraltı Çarşısı", items: ["Kızlarağası Hanı", "Havra Sokağı", ["Abacıoğlu Hanı", "Abacıoğlu Hanı Kemeraltı"], ["Kemeraltı sinagogları", "Bikur Holim Sinagogu"], "Kestanepazarı Camii", ["Şadırvan Camii", "Şadırvan Camii Kemeraltı"]] },
      { name: "Smyrna'nın İzleri", items: [["Agora Ören Yeri", "İzmir Agora Ören Yeri"], "Kadifekale", ["St. Polycarp Kilisesi", "Saint Polycarp Kilisesi"], ["Aziz Vukolos Kilisesi", "Aziz Vukolos Kilisesi Kültür Merkezi"], "Basmane Garı"] }
    ]
  },
  {
    name: "Kordon ve Körfez",
    icon: "⚓︎",
    color: "#e89a32",
    sub: "#ebac4f",
    light: "#f7e0bd",
    groups: [
      { name: "Kordon", items: [["Kordon yürüyüşü", "Kordon Alsancak"], ["Kordon çimlerinde akşam", "Kordon Alsancak"], "Pasaport İskelesi", ["Cumhuriyet Meydanı", "Cumhuriyet Meydanı Konak"], "Gündoğdu Meydanı", ["Kordon'da bisiklet", "Kordon"]] },
      { name: "Vapur Keyfi", items: [["Konak–Karşıyaka vapuru", "Konak İskelesi"], ["Martılara gevrek", "Karşıyaka İskelesi"], ["Bergama Vapuru turu", "Konak İskelesi"], ["Gece vapuru", "Bostanlı İskelesi"], ["Tarihi Konak İskelesi", "Konak İskelesi"]] },
      { name: "Karşıyaka ve Bostanlı", items: [["Bostanlı Gün Batımı Terası", "Bostanlı Gün Batımı Seyir Terası"], ["Karşıyaka sahili", "Karşıyaka sahil"], "Karşıyaka Çarşısı", "Zübeyde Hanım Anıt Mezarı", ["Latife Hanım Köşkü", "Latife Hanım Köşkü Anı Evi"]] }
    ]
  },
  {
    name: "Müzeler ve Sanat",
    icon: "✦",
    color: "#e8674a",
    sub: "#ec8268",
    light: "#f7d0c6",
    groups: [
      { name: "Müzeler", items: ["İzmir Arkeoloji Müzesi", "İzmir Atatürk Müzesi", ["Kent Arşivi (APİKAM)", "Ahmet Piriştina Kent Arşivi ve Müzesi"], "İzmir Mask Müzesi", ["Kağıt ve Kitap Müzesi", "Kağıt ve Kitap Sanatları Müzesi"]] },
      { name: "Galeriler ve Sanat", items: ["Arkas Sanat Merkezi", "Selçuk Yaşar Resim Müzesi", ["Kültür Sanat Fabrikası", "İzmir Kültür Sanat Fabrikası"], ["Havagazı Fabrikası", "Tarihi Havagazı Fabrikası Kültür Merkezi"], ["Darağaç sanat kolektifi", "Darağaç Umurbey"]] },
      { name: "Sahne ve Kültür", items: [["Adnan Saygun Sanat Merkezi", "Ahmed Adnan Saygun Sanat Merkezi"], "Elhamra Sahnesi", "Sabancı Kültür Sarayı", ["Kültürpark Açıkhava", "Kültürpark Açıkhava Tiyatrosu"], ["Suat Taşer Açıkhava", "Bostanlı Suat Taşer Açıkhava Tiyatrosu"], ["İzmir Enternasyonal Fuarı", "Kültürpark"]] }
    ]
  },
  {
    name: "Semtler ve Sokaklar",
    icon: "⌂",
    color: "#d45d86",
    sub: "#db7598",
    light: "#f2cad8",
    groups: [
      { name: "Alsancak", items: ["Kıbrıs Şehitleri Caddesi", ["Gazi Kadınlar Sokağı", "Gazi Kadınlar Sokağı Alsancak"], "Alsancak Sevgi Yolu", ["Plevne Bulvarı", "Plevne Bulvarı Alsancak"], "Tarihi Alsancak Garı", ["Alsancak Rum evleri", "Alsancak"]] },
      { name: "Karataş ve Göztepe", items: ["Tarihi Asansör", "Dario Moreno Sokağı", ["Bet İsrael Sinagogu", "Bet Israel Sinagogu Karataş"], ["Göztepe sahili", "Göztepe sahil"]] },
      { name: "Bornova ve Buca", items: [["Bornova Levanten köşkleri", "Bornova köşkleri"], ["Santa Maria Kilisesi", "Santa Maria Kilisesi Bornova"], "Bornova Küçükpark", ["Yeşilova Höyüğü", "Yeşilova Höyüğü Ziyaretçi Merkezi"], ["Buca Forbes Köşkü", "Forbes Köşkü Buca"], "Kızılçullu Su Kemerleri"] }
    ]
  },
  {
    name: "Yeme ve İçme",
    icon: "♨︎",
    color: "#43aebc",
    sub: "#5fbcc8",
    light: "#c3e5ea",
    groups: [
      { name: "İzmir Klasikleri", items: [["Boyoz ve yumurta", "boyoz"], ["Gevrek ve çay", "gevrek fırını"], ["Kumru", "kumrucu"], ["Söğüş", "söğüşçü"], ["Midye dolma", "midyeci"], ["Tire köftesi", "Tire köftecisi"]] },
      { name: "Fırın ve Tatlıcı", items: ["Alsancak Dostlar Fırını", ["Hisarönü Şambalicisi", "Meşhur Hisarönü Şambalicisi"], ["Çarşı Lokmacısı", "Meşhur Çarşı Lokmacısı Kemeraltı"], ["Reyhan Pastanesi", "Reyhan Pastanesi Alsancak"], ["Kemeraltı'nda sübye", "sübye Kemeraltı"]] },
      { name: "Lokanta ve Meyhane", items: ["Topçu'nun Yeri", "Ayşa Boşnak Börekçisi", ["Deniz Restaurant", "Deniz Restaurant Alsancak"], ["Sakız Alsancak", "Sakız Alsancak Restaurant"], ["Güzelbahçe'de balık", "Güzelbahçe balık restoranı"]] }
    ]
  },
  {
    name: "Doğa ve Manzara",
    icon: "☘︎",
    color: "#36a96e",
    sub: "#55b886",
    light: "#bfe3cf",
    groups: [
      { name: "Parklar ve Ormanlar", items: [["Kültürpark", "Kültürpark İzmir"], "İnciraltı Kent Ormanı", "Aşık Veysel Rekreasyon Alanı", "Sasalı Doğal Yaşam Parkı", "Buca Gölet Parkı", ["Homeros Vadisi", "Homeros Vadisi Bornova"]] },
      { name: "Kuşlar ve Göller", items: [["İzmir Kuş Cenneti", "İzmir Kuş Cenneti Ziyaretçi Merkezi"], ["Flamingo Yolu turu", "Mavişehir Balıkçı Barınağı"], ["Yamanlar Karagöl", "Karagöl Tabiat Parkı"], ["Gölcük Gölü", "Gölcük Gölü Ödemiş"], ["Agamemnon Ilıcaları", "Balçova Termal"]] },
      { name: "Dağ ve Yayla", items: [["Bozdağ", "Bozdağ Kayak Merkezi"], ["Nif Dağı", "Nif Dağı Kemalpaşa"], ["Belkahve Seyir Terası", "Belkahve Ata Anı Evi"], ["Efeler Yolu", "Efeler Yolu Bornova"], ["Lübbey köyü", "Lübbey Ödemiş"]] }
    ]
  },
  {
    name: "Sahil ve Kaçamaklar",
    icon: "☀︎",
    color: "#4279c9",
    sub: "#5f8fd3",
    light: "#c2d4ef",
    groups: [
      { name: "Çeşme ve Alaçatı", items: [["Alaçatı sokakları", "Alaçatı"], "Alaçatı yel değirmenleri", ["Alaçatı'da sörf", "Alaçatı Surf"], "Çeşme Kalesi", ["Ilıca plajı", "Ilıca Plajı Çeşme"], ["Altınkum plajı", "Altınkum Plajı Çeşme"]] },
      { name: "Urla ve Seferihisar", items: ["Urla Bağ Yolu", "Urla İskele", "Sığacık Kalesi", ["Sığacık Pazarı", "Sığacık Pazarı Seferihisar"], ["Akkum plajı", "Akkum Plajı Seferihisar"]] },
      { name: "Kasabalar ve Koylar", items: ["Eski Foça", ["Siren Kayalıkları turu", "Siren Kayalıkları Foça"], ["Karaburun koyları", "Karaburun"], ["Birgi", "Birgi Ödemiş"], ["Tire Salı Pazarı", "Tire Pazarı"]] }
    ]
  },
  {
    name: "Antik Kentler",
    icon: "⚱︎",
    color: "#7755bb",
    sub: "#8b70c6",
    light: "#d6cbec",
    groups: [
      { name: "Efes ve Selçuk", items: ["Efes Antik Kenti", "Meryem Ana Evi", ["Artemis Tapınağı", "Artemis Tapınağı Selçuk"], ["St. Jean Bazilikası", "St. Jean Anıtı Selçuk"], ["Efes Müzesi", "Efes Müzesi Selçuk"], ["Şirince", "Şirince Selçuk"]] },
      { name: "Bergama", items: [["Bergama Akropolü", "Bergama Akropol"], ["Asklepion", "Bergama Asklepion"], ["Kızıl Avlu", "Kızıl Avlu Bergama"], "Bergama Müzesi", "Kozak Yaylası"] },
      { name: "Kıyı Antik Kentleri", items: [["Teos", "Teos Antik Kenti"], ["Klazomenai", "Klazomenai Zeytinyağı İşliği"], ["Erythrai", "Erythrai Antik Kenti Ildır"], ["Klaros", "Klaros Antik Kenti"], ["Metropolis", "Metropolis Antik Kenti Torbalı"]] }
    ]
  }
];
