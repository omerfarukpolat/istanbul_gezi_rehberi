# Gezi Çarkı 🎡

Şehir gezi önerilerini çevrilebilir bir çarka dönüştüren statik web sayfası. Her şehirde 128 öneri var: 8 kategori, her kategoride 3 alt kategori.

| Şehir | Canlı sürüm |
| --- | --- |
| İstanbul | https://omerfarukpolat.github.io/istanbul_gezi_rehberi/ |
| İzmir | https://omerfarukpolat.github.io/istanbul_gezi_rehberi/izmir/ |

- Ortadaki **ÇEVİR** düğmesine, alttaki düğmeye ya da **Boşluk** tuşuna basarak çarkı çevir.
- Çark durduğunda kazanan dilim kategorisinin rengiyle parlar, ışıklar yanıp söner, konfeti patlar ve sonuç kartı açılır.
- Sonuç kartından öneriyi Google Haritalar'da açabilirsin.
- Sayfanın üstündeki düğmeyle şehirler arasında geçiş yapabilirsin.

## Dosyalar

| Dosya | İçerik |
| --- | --- |
| `index.html`, `data.js` | İstanbul sayfası ve önerileri |
| `izmir/index.html`, `izmir/data.js` | İzmir sayfası ve önerileri |
| `app.js` | Çarkın çizimi, dönüş animasyonu, ses ve konfeti (iki şehir de kullanır) |
| `style.css` | Görünüm (iki şehir de kullanır) |

Öneri eklemek ya da değiştirmek için ilgili şehrin `data.js` dosyasını düzenlemek yeterli; çark otomatik olarak yeniden bölünür ve uzun adlar dilime sığacak şekilde küçültülür. Bir öneri `"Ad"` ya da `["Ad", "harita araması"]` biçiminde yazılabilir; ikinci biçimde "Haritada aç" düğmesi verilen aramayı kullanır.

## Yerelde çalıştırma

Derleme adımı yok — `index.html` (ya da `izmir/index.html`) dosyasını tarayıcıda açman yeterli.

## Yayınlama

`.github/workflows/pages.yml`, her push'ta siteyi GitHub Pages'e yayınlar.
