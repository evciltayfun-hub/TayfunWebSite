# Tayfun Evcil — Personal Portfolio

Editorial / magazine-style personal website.

## Proje Yapısı

```
tayfun-portfolio/
├── index.html          ← Ana sayfa (HTML yapısı)
├── css/
│   └── style.css       ← Tüm stiller, renkler, layout
├── js/
│   └── main.js         ← Animasyonlar, scroll reveal, counter
└── README.md
```

## VS Code'da Kullanım

1. Klasörü VS Code'da aç
2. **Live Server** extension'ı kur (yoksa)
3. `index.html` üzerinde sağ tık → "Open with Live Server"

## Özelleştirme Rehberi

### Renkleri Değiştirmek
`css/style.css` dosyasının başındaki `:root` bloğu:
```css
:root {
  --black: #0a0a0a;   /* Ana renk */
  --white: #f5f2ed;   /* Arka plan (krem) → #ffffff saf beyaz yapar */
  --red:   #d4000a;   /* Aksanlar → başka renk dene */
  --gray:  #888;
  --light: #e8e4de;   /* Çizgiler ve ince detaylar */
}
```

### Hero Pillar Metinleri
`index.html` içinde `hero-pillars` bloğunu bul, `pillar-text` içeriğini değiştir.

### Yeni Proje Eklemek
`#projects` bölümünde `.proj-grid` içine yeni bir `.proj-card` div'i ekle.

### İletişim Bilgileri
`#contact` bölümündeki `.contact-link-list` linklerini güncelle.

## Deploy

Hazır olduğunda:
- **GitHub Pages**: Ücretsiz, repository'i public yap → Settings → Pages
- **Netlify**: index.html'i drag & drop
- **Vercel**: GitHub repo'dan otomatik deploy

## Font Kaynakları

Google Fonts (internet bağlantısı gerekir):
- Playfair Display — başlıklar
- Libre Baskerville — body text
- Barlow Condensed — etiketler ve nav
