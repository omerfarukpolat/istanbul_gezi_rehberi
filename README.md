# Gezi Çarkı 🎡

Şehir gezi önerilerini çevrilebilir bir çarka dönüştüren statik web sayfası. Her şehirde 8 kategori ve her kategoride 3 alt kategori var.

| Şehir | Öneri | Canlı sürüm |
| --- | --- | --- |
| İstanbul | 128 | https://omerfarukpolat.github.io/istanbul_gezi_rehberi/ |
| İzmir | 128 | https://omerfarukpolat.github.io/istanbul_gezi_rehberi/izmir/ |
| Ankara | 144 | https://omerfarukpolat.github.io/istanbul_gezi_rehberi/ankara/ |

- Ortadaki **ÇEVİR** düğmesine, alttaki düğmeye ya da **Boşluk** tuşuna basarak çarkı çevir.
- Çark durduğunda kazanan dilim kategorisinin rengiyle parlar, ışıklar yanıp söner, konfeti patlar ve sonuç kartı açılır.
- Sonuç kartından öneriyi Google Haritalar'da açabilirsin.
- Sayfanın üstündeki düğmeyle şehirler arasında geçiş yapabilirsin.

## Dosyalar

| Dosya | İçerik |
| --- | --- |
| `index.html`, `data.js` | İstanbul sayfası ve önerileri |
| `izmir/index.html`, `izmir/data.js` | İzmir sayfası ve önerileri |
| `ankara/index.html`, `ankara/data.js` | Ankara sayfası ve önerileri |
| `app.js` | Çarkın çizimi, dönüş animasyonu, ses ve konfeti (tüm şehirler kullanır) |
| `style.css` | Görünüm (tüm şehirler kullanır) |

Öneri eklemek ya da değiştirmek için ilgili şehrin `data.js` dosyasını düzenlemek yeterli; çark otomatik olarak yeniden bölünür ve uzun adlar dilime sığacak şekilde küçültülür. Bir öneri `"Ad"` ya da `["Ad", "harita araması"]` biçiminde yazılabilir; ikinci biçimde "Haritada aç" düğmesi verilen aramayı kullanır. Bir kategoriye `ink` rengi verilirse alt kategori yazıları o renkte çizilir (açık renkli halkalar için).

## Yerelde çalıştırma

Derleme adımı yok — `index.html` (ya da `izmir/index.html`, `ankara/index.html`) dosyasını tarayıcıda açman yeterli.

## Yayınlama

`.github/workflows/pages.yml`, her push'ta siteyi GitHub Pages'e yayınlar.
