# İstanbul Gezi Çarkı 🎡

İstanbul Gezi Rehberi'ndeki 128 öneriyi (8 kategori × 3 alt kategori) çevrilebilir bir çarka dönüştüren statik web sayfası.

- Ortadaki **ÇEVİR** düğmesine, alttaki düğmeye ya da **Boşluk** tuşuna basarak çarkı çevir.
- Çark durduğunda kazanan dilim kategorisinin rengiyle parlar, ışıklar yanıp söner, konfeti patlar ve sonuç kartı açılır.
- Sonuç kartından öneriyi Google Haritalar'da açabilirsin.

**Canlı sürüm:** https://omerfarukpolat.github.io/istanbul_gezi_rehberi/

## Dosyalar

| Dosya | İçerik |
| --- | --- |
| `index.html` | Sayfa iskeleti |
| `data.js` | Kategoriler, alt kategoriler ve öneriler |
| `app.js` | Çarkın çizimi, dönüş animasyonu, ses ve konfeti |
| `style.css` | Görünüm |

Öneri eklemek/değiştirmek için yalnızca `data.js` dosyasını düzenlemek yeterli; çark otomatik olarak yeniden bölünür.

## Yerelde çalıştırma

Derleme adımı yok — `index.html` dosyasını tarayıcıda açman yeterli.

## Yayınlama

`.github/workflows/pages.yml`, her push'ta siteyi GitHub Pages'e yayınlar.
