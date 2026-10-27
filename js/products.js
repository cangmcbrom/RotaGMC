// =============================================
// ÜRÜN VERİLERİ - RotaGMC
// =============================================
// ÜRÜN EKLEMEK İÇİN: Bu diziye yeni bir obje ekleyin
// ÜRÜN SİLMEK İÇİN: İlgili objeyi silin
// GÖRSEL EKLEMEK İÇİN: images klasörüne resmi koyun ve yolu yazın
//   veya base64 formatında direkt kodu yapıştırın
// =============================================

const WHATSAPP_NUMBER = "905330912450"; // BURAYA KENDİ NUMARANIZI YAZIN (başında 90 olacak)

const products = [
    // ===== TELEFON AKSESUARLARI =====
    {
        id: 1,
        name: "Premium Silikon Telefon Kılıfı",
        category: "telefon",
        price: 149.99,
        oldPrice: 249.99,
        image: "https://placehold.co/400x400/1a1a2e/ffffff?text=Kilif",
        description: "Ultra ince, darbelere dayanıklı premium silikon kılıf. Tüm telefon modelleriyle uyumlu. Yüksek kaliteli TPU malzeme ile telefonunuzu her açıdan korur.",
        features: ["Darbelere dayanıklı", "Ultra ince tasarım", "Kaymaz yüzey", "Tüm modellere uygun"],
        featured: true,
        badge: "Çok Satan"
    },
    {
        id: 2,
        name: "Kablosuz Şarj Cihazı 15W",
        category: "telefon",
        price: 299.99,
        oldPrice: 449.99,
        image: "https://placehold.co/400x400/16213e/ffffff?text=Sarj",
        description: "15W hızlı kablosuz şarj özellikli, Qi uyumlu şarj cihazı. LED göstergeli, akıllı koruma sistemi. iPhone ve Android uyumlu.",
        features: ["15W hızlı şarj", "Qi teknolojisi", "LED gösterge", "Aşırı ısınma koruması"],
        featured: true,
        badge: "Yeni"
    },
    {
        id: 3,
        name: "Type-C Hızlı Şarj Kablosu 2m",
        category: "telefon",
        price: 79.99,
        oldPrice: 129.99,
        image: "https://placehold.co/400x400/e94560/ffffff?text=Kablo",
        description: "2 metre uzunluğunda, örgülü naylon kaplama Type-C şarj kablosu. 3A hızlı şarj destekli, 10.000+ bükülme testi geçmiş dayanıklı kablo.",
        features: ["2 metre uzunluk", "3A hızlı şarj", "Naylon örgü", "10.000+ bükülme"],
        featured: false,
        badge: null
    },
    {
        id: 4,
        name: "Bluetooth Kulaklık TWS",
        category: "telefon",
        price: 449.99,
        oldPrice: 699.99,
        image: "https://placehold.co/400x400/f5a623/ffffff?text=Kulaklik",
        description: "Gerçek kablosuz stereo kulaklık. Aktif gürültü engelleme, 24 saat pil ömrü, IPX5 su geçirmezlik. Kristal netliğinde ses kalitesi.",
        features: ["Gürültü engelleme", "24 saat pil ömrü", "IPX5 su geçirmez", "Dokunmatik kontrol"],
        featured: true,
        badge: "Popüler"
    },
    {
        id: 5,
        name: "Ekran Koruyucu Temperli Cam",
        category: "telefon",
        price: 59.99,
        oldPrice: 99.99,
        image: "https://placehold.co/400x400/4caf50/ffffff?text=Cam",
        description: "9H sertlik dereceli temperli cam ekran koruyucu. Anti-parmak izi, kolay uygulama. Tam kaplama, kabarcıksız montaj.",
        features: ["9H sertlik", "Anti-parmak izi", "Tam kaplama", "Kolay montaj"],
        featured: false,
        badge: null
    },
    {
        id: 6,
        name: "Telefon Yüzük Tutucu",
        category: "telefon",
        price: 49.99,
        oldPrice: null,
        image: "https://placehold.co/400x400/9c27b0/ffffff?text=Yuzuk",
        description: "360° dönebilen metal yüzük tutucu. Manyetik araç tutucuyla uyumlu. Telefonunuzu güvenle kavrayın.",
        features: ["360° dönüş", "Metal yapı", "Manyetik uyumlu", "Ultra ince"],
        featured: false,
        badge: null
    },
    {
        id: 7,
        name: "Powerbank 20000mAh",
        category: "telefon",
        price: 549.99,
        oldPrice: 799.99,
        image: "https://placehold.co/400x400/2196f3/ffffff?text=Powerbank",
        description: "20000mAh kapasiteli taşınabilir şarj cihazı. Çift USB çıkışı, LED gösterge, hızlı şarj destekli.",
        features: ["20000mAh kapasite", "Çift USB çıkış", "Hızlı şarj", "LED gösterge"],
        featured: true,
        badge: "Çok Satan"
    },
    {
        id: 8,
        name: "Telefon Tripod Standı",
        category: "telefon",
        price: 189.99,
        oldPrice: 279.99,
        image: "https://placehold.co/400x400/ff5722/ffffff?text=Tripod",
        description: "Esnek bacaklı mini tripod. Bluetooth uzaktan kumanda dahil. Video çekimi ve canlı yayın için ideal.",
        features: ["Esnek bacaklar", "Bluetooth kumanda", "Evrensel uyum", "Hafif tasarım"],
        featured: false,
        badge: "Yeni"
    },

    // ===== ARABA AKSESUARLARI =====
    {
        id: 9,
        name: "Manyetik Araç Telefon Tutucusu",
        category: "araba",
        price: 199.99,
        oldPrice: 349.99,
        image: "https://placehold.co/400x400/1a1a2e/ffffff?text=Tutucu",
        description: "Güçlü mıknatıslı araç içi telefon tutucusu. Havalandırma kanalına kolay montaj. 360° ayarlanabilir açı.",
        features: ["Güçlü mıknatıs", "360° döndürme", "Kolay montaj", "Tüm telefonlara uygun"],
        featured: true,
        badge: "Çok Satan"
    },
    {
        id: 10,
        name: "Araç İçi Koku - Premium Set",
        category: "araba",
        price: 129.99,
        oldPrice: 199.99,
        image: "https://placehold.co/400x400/e94560/ffffff?text=Koku",
        description: "3'lü premium araç kokusu seti. Vanilya, okyanus ve orman esansları. 60 gün etkili, zarif tasarım.",
        features: ["3 farklı koku", "60 gün etkili", "Zarif tasarım", "Doğal esans"],
        featured: true,
        badge: "Popüler"
    },
    {
        id: 11,
        name: "Araç Organizer - Bagaj Düzenleyici",
        category: "araba",
        price: 349.99,
        oldPrice: 499.99,
        image: "https://placehold.co/400x400/795548/ffffff?text=Organizer",
        description: "Katlanabilir bagaj düzenleyici. Su geçirmez malzeme, çoklu bölmeler. Aracınızın bagajını düzenli tutun.",
        features: ["Katlanabilir", "Su geçirmez", "Çoklu bölme", "Dayanıklı malzeme"],
        featured: false,
        badge: null
    },
    {
        id: 12,
        name: "Araç Şarj Cihazı Çift USB",
        category: "araba",
        price: 149.99,
        oldPrice: 229.99,
        image: "https://placehold.co/400x400/f5a623/ffffff?text=AracSarj",
        description: "36W çift USB çıkışlı araç şarj adaptörü. QC 3.0 hızlı şarj destekli. Metal gövde, kompakt tasarım.",
        features: ["36W güç", "QC 3.0", "Çift USB", "Metal gövde"],
        featured: false,
        badge: "Yeni"
    },
    {
        id: 13,
        name: "LED Araç Atmosfer Işığı",
        category: "araba",
        price: 179.99,
        oldPrice: 299.99,
        image: "https://placehold.co/400x400/9c27b0/ffffff?text=LED",
        description: "RGB LED araç içi aydınlatma seti. Müzikle senkron, uzaktan kumandalı, 16 milyon renk. USB ile çalışır.",
        features: ["16M renk", "Müzik senkron", "Uzaktan kumanda", "Kolay kurulum"],
        featured: true,
        badge: "Popüler"
    },
    {
        id: 14,
        name: "Araç Koltuk Arası Organizer",
        category: "araba",
        price: 99.99,
        oldPrice: 149.99,
        image: "https://placehold.co/400x400/607d8b/ffffff?text=KoltukOrg",
        description: "Deri kaplama koltuk arası düzenleyici. Bardak tutucu, telefon bölmesi, bozuk para gözü. 2'li set.",
        features: ["Deri kaplama", "Bardak tutucu", "2'li set", "Evrensel uyum"],
        featured: false,
        badge: null
    },
    {
        id: 15,
        name: "Araç Güneşlik Organizeri",
        category: "araba",
        price: 89.99,
        oldPrice: null,
        image: "https://placehold.co/400x400/00bcd4/ffffff?text=Guneslik",
        description: "Güneşliğe takılan pratik organizer. Kart, kalem, gözlük bölmeleri. PU deri, şık görünüm.",
        features: ["PU deri", "Çoklu bölme", "Kolay takma", "Şık tasarım"],
        featured: false,
        badge: null
    },
    {
        id: 16,
        name: "Direksiyon Kılıfı - Premium Deri",
        category: "araba",
        price: 249.99,
        oldPrice: 399.99,
        image: "https://placehold.co/400x400/3f51b5/ffffff?text=Direksiyon",
        description: "El yapımı premium deri direksiyon kılıfı. Nefes alabilir yapı, anti-kayma desen. 37-38cm çap uyumlu.",
        features: ["El yapımı", "Premium deri", "Anti-kayma", "Nefes alabilir"],
        featured: true,
        badge: "Premium"
    }
];


// =============================================
// ÜRÜN PUANLARI
// =============================================
const productRatings = {
    1: { rating: 4.8, reviewCount: 124 },
    2: { rating: 4.6, reviewCount: 89 },
    3: { rating: 4.3, reviewCount: 56 },
    4: { rating: 4.9, reviewCount: 203 },
    5: { rating: 4.5, reviewCount: 78 },
    6: { rating: 4.2, reviewCount: 34 },
    7: { rating: 4.7, reviewCount: 156 },
    8: { rating: 4.4, reviewCount: 42 },
    9: { rating: 4.8, reviewCount: 187 },
    10: { rating: 4.5, reviewCount: 95 },
    11: { rating: 4.3, reviewCount: 67 },
    12: { rating: 4.6, reviewCount: 73 },
    13: { rating: 4.7, reviewCount: 142 },
    14: { rating: 4.1, reviewCount: 38 },
    15: { rating: 4.0, reviewCount: 29 },
    16: { rating: 4.9, reviewCount: 112 }
};

products.forEach(p => {
    if (productRatings[p.id]) {
        p.rating = parseFloat(productRatings[p.id].rating);
        p.reviewCount = productRatings[p.id].reviewCount;
    }
});


// =============================================
// ÜRÜN STOKLARI
// =============================================
const productStocks = {
    1: 50, 2: 30, 3: 100, 4: 25, 5: 80,
    6: 60, 7: 20, 8: 35, 9: 45, 10: 70,
    11: 15, 12: 40, 13: 55, 14: 90, 15: 65, 16: 10
};

products.forEach(p => {
    if (productStocks[p.id]) {
        p.stock = productStocks[p.id];
    }
});


// =============================================
// ÜRÜN GALERİ VERİLERİ
// =============================================
// Her ürüne birden fazla fotoğraf ve opsiyonel video ekleyebilirsiniz.
// images: ["images/urun1-1.jpg", "images/urun1-2.jpg", "images/urun1-3.jpg"]
// video: "images/urun1-video.mp4"  (opsiyonel, yoksa sadece fotoğraflar gösterilir)
// =============================================

// Örnek: Ürünlere ek görseller tanımlayın
// Şimdilik her ürün kendi ana görselini kullanır.
// İstediğiniz ürüne birden fazla görsel eklemek için:
// products.find(p => p.id === 1).images = ["images/kilif-1.jpg", "images/kilif-2.jpg", "images/kilif-3.jpg"];
// products.find(p => p.id === 1).video = "images/kilif-video.mp4";

// Otomatik olarak ana görseli images dizisine ekle (eğer yoksa)
products.forEach(p => {
    if (!p.images) {
        p.images = [p.image];
    }
});


// =============================================
// VARYASYON SİSTEMİ (Renk / Beden / Toptan Fiyat)
// =============================================
// Sadece istenen ürünlere eklenir. Eklenmeyenlerde bu seçenekler görünmez.
//
// ÖRNEK KULLANIM:
//
// products.find(p => p.id === 1).variants = {
//     colors: [
//         { name: "Siyah", code: "#000000", images: ["images/urun1-siyah-1.jpg", "images/urun1-siyah-2.jpg"], priceAdjust: 0 },
//         { name: "Kırmızı", code: "#d32f2f", images: ["images/urun1-kirmizi-1.jpg", "images/urun1-kirmizi-2.jpg"], priceAdjust: 20 },
//         { name: "Mavi", code: "#1976d2", images: ["images/urun1-mavi-1.jpg"], priceAdjust: 0 }
//     ],
//     sizes: [
//         { name: "S", priceAdjust: 0 },
//         { name: "M", priceAdjust: 0 },
//         { name: "L", priceAdjust: 10 },
//         { name: "XL", priceAdjust: 20 }
//     ]
// };
//
// products.find(p => p.id === 1).bulkPricing = [
//     { minQty: 5, discountPercent: 10 },
//     { minQty: 10, discountPercent: 20 },
//     { minQty: 25, discountPercent: 30 }
// ];
//
// NOT: priceAdjust = ana fiyata eklenen/çıkarılan TL miktarı (0 = fiyat değişmez)
// NOT: discountPercent = o adetten itibaren uygulanan yüzde indirim
// NOT: images dizisini boş bırakırsanız ana görsel kullanılır
//
// ÖZELLEŞTİRİLMİŞ FİYAT SİSTEMİ:
// Bir renk veya bedenin kendi fiyat/indirimi olsun istiyorsan:
//   priceAdjust yerine price ve oldPrice yaz!
//
//   ÖRNEK - Renkte özel fiyat:
//   colors: [
//       { name: "Siyah", code: "#000", images: [...], priceAdjust: 0 },          ← ana fiyat kullanılır
//       { name: "Kırmızı", code: "#d00", images: [...], price: 799.99, oldPrice: 999.99 }  ← kendi fiyatı var, %25 indirimli görünür
//   ]
//
//   ÖRNEK - Bedende özel fiyat:
//   sizes: [
//       { name: "S", priceAdjust: 0 },                           ← ana fiyat
//       { name: "XL", price: 899.99, oldPrice: 1099.99 },        ← kendi fiyatı, kendi indirimi
//       { name: "2XL", price: 949.99, oldPrice: null },           ← kendi fiyatı, indirim yok
//   ]
// =============================================


products.push({
    id: 17,                          // benzersiz numara (sırayla arttır)
    name: "İstanbul Silüeti Bordo Erkek/Kadın %100 Pamuk T-Shirt – Galata Kulesi & Bosphorus Baskılı RG-TSHIRT-001", // ürün adı
    category: "giyim",               // "telefon", "araba", "giyim", "ev"
    subCategory: "erkek-tisort",     // alt kategori
    price: 699.99,                       // indirimli fiyat
    oldPrice: 849.99,                // indirimsizse null yaz
    image: "images/urun17.jpg",      // ana görsel
    description: "İstanbul’un Büyüsünü Üzerinizde Taşıyın! 🌉✨Tarihin ve modernliğin buluştuğu eşsiz İstanbul silüeti, özel tasarım ve yüksek kaliteli baskısıyla gardırobunuza şıklık katıyor. Galata Kulesi’nin zarafeti ve Boğaz Köprüsü’nün görkemli duruşu, bordo kumanın derin tonuyla mükemmel bir uyum yakaladı. 🧼 Yıkama ve Bakım Talimatı:30°C’de ters çevirerek yıkayınız.Ağartıcı ve çamaşır suyu kullanmayınız.Baskı üzerine doğrudan ütü basmayınız, tersten ütüleyiniz.",
    features: ["Kumaş Kalitesi: %100 Süprem Pamuk kumuş yapısı sayesinde nefes alabilir, yumuşak ve gün boyu konforlu bir kullanım sunar.", "Baskı Teknolojisi: Yüksek çözünürlüklü ve çevre dostu dijital baskı tekniği kullanılmıştır. Yıkamaya karşı dirençlidir, solma veya çatlama yapmaz."],
    featured: true,                  // ana sayfada öne çıksın mı? (true/false)
    badge: "Yeni",                   // "Yeni", "Çok Satan", "Popüler" veya null
    stock: 5,                       // stok adedi (5 ve altı uyarı verir)
    rating: 4.8,                     // yıldız puanı (1-5)
    reviewCount: 127                  // değerlendirme sayısı
});


products.find(p => p.id === 17).images = [
    "images/urun17-1.jpg"
];

products.find(p => p.id === 17).variants = {
    colors: [
        { name: "Siyah", code: "#000000", images: ["images/u17-siyah1.jpg", "images/u17-siyah2.jpg"], priceAdjust: 0 },
        { name: "Beyaz", code: "#ffffff", images: ["images/u17-beyaz1.jpg"], priceAdjust: 0 },
        { name: "Kırmızı", code: "#d32f2f", images: ["images/u17-kirmizi1.jpg"], price: 749.99, oldPrice: 949.99 },
        { name: "Turuncu", code: "#ff9500", images: ["images/u17-turuncu1.jpg"], price: 799.99, oldPrice: 999.99 }
    ],
    sizes: [
        { name: "S", priceAdjust: 0 },
        { name: "M", priceAdjust: 0 },
        { name: "L", priceAdjust: 10 },
        { name: "XL", priceAdjust: 20 },
        { name: "2XL", price: 799.99, oldPrice: 999.99 }
    ]
};


// =============================================
// ÖRNEK ÜRÜNLER - GİYİM ALT KATEGORİLERİ
// =============================================
// subCategory değerleri:
//   Erkek: "erkek-hoodie", "erkek-sweatshirt", "erkek-tisort", "erkek-aksesuar"
//   Kadın: "kadin-hoodie", "kadin-sweatshirt", "kadin-tisort", "kadin-aksesuar"
//   Çocuk: "cocuk-hoodie", "cocuk-sweatshirt", "cocuk-tisort"
//   Çiftler: "cift-hoodie", "cift-tisort", "cift-sweatshirt", "cift-aksesuar"
// =============================================

products.push(
    {
        id: 18,
        name: "Oversize Erkek Hoodie - Street Style",
        category: "giyim",
        subCategory: "erkek-hoodie",
        price: 899.99,
        oldPrice: 1199.99,
        image: "https://placehold.co/400x400/2d2d2d/ffffff?text=Erkek+Hoodie",
        description: "Oversize kesim, kalın kumaş yapısıyla soğuk havalarda sıcak tutan şık bir hoodie. %100 pamuk iç yüzeyi ile konforlu kullanım.",
        features: ["Oversize kesim", "Kalın polar astarlı", "Kanguru cep", "Ayarlanabilir kapüşon"],
        featured: false,
        badge: "Yeni",
        stock: 15,
        rating: 4.7,
        reviewCount: 45
    },
    {
        id: 19,
        name: "Erkek Sweatshirt - Minimal Logo",
        category: "giyim",
        subCategory: "erkek-sweatshirt",
        price: 749.99,
        oldPrice: 999.99,
        image: "https://placehold.co/400x400/1a1a2e/ffffff?text=Erkek+Sweat",
        description: "Minimal tasarımlı erkek sweatshirt. Günlük kullanıma uygun, rahat ve şık.",
        features: ["3 İplik kumaş", "Bisiklet yaka", "Regular fit", "Logo baskı"],
        featured: false,
        badge: null,
        stock: 20,
        rating: 4.5,
        reviewCount: 32
    },
    {
        id: 20,
        name: "Kadın Oversize Hoodie - Pastel",
        category: "giyim",
        subCategory: "kadin-hoodie",
        price: 849.99,
        oldPrice: 1099.99,
        image: "https://placehold.co/400x400/e8b4b8/333333?text=Kadin+Hoodie",
        description: "Pastel tonlarında kadın hoodie. Yumuşak dokulu, oversize kesim ile hem rahat hem şık.",
        features: ["Oversize kesim", "Yumuşak pamuklu kumaş", "Kanguru cep", "Kapüşonlu"],
        featured: false,
        badge: "Popüler",
        stock: 12,
        rating: 4.9,
        reviewCount: 78
    },
    {
        id: 21,
        name: "Kadın Basic Tişört - V Yaka",
        category: "giyim",
        subCategory: "kadin-tisort",
        price: 449.99,
        oldPrice: null,
        image: "https://placehold.co/400x400/f5e6cc/333333?text=Kadin+Tisort",
        description: "V yaka basic kadın tişört. Günlük kombinlerin vazgeçilmezi.",
        features: ["%100 Pamuk", "V yaka kesim", "Slim fit", "Kolay ütü"],
        featured: false,
        badge: null,
        stock: 30,
        rating: 4.4,
        reviewCount: 56
    },
    {
        id: 22,
        name: "Kadın Crop Sweatshirt",
        category: "giyim",
        subCategory: "kadin-sweatshirt",
        price: 649.99,
        oldPrice: 849.99,
        image: "https://placehold.co/400x400/d4a5a5/ffffff?text=Kadin+Sweat",
        description: "Crop kesim kadın sweatshirt. Yüksek bel pantolonlarla harika uyum.",
        features: ["Crop kesim", "3 İplik kumaş", "Bisiklet yaka", "Trend tasarım"],
        featured: false,
        badge: "Trend",
        stock: 18,
        rating: 4.6,
        reviewCount: 41
    },
    {
        id: 23,
        name: "Çocuk Kapüşonlu Sweatshirt",
        category: "giyim",
        subCategory: "cocuk-hoodie",
        price: 549.99,
        oldPrice: 699.99,
        image: "https://placehold.co/400x400/87ceeb/333333?text=Cocuk+Hoodie",
        description: "Renkli ve eğlenceli çocuk hoodie. Yumuşak kumaşıyla çocuklar için ideal.",
        features: ["Yumuşak pamuk", "Kapüşonlu", "Kanguru cep", "Canlı renkler"],
        featured: false,
        badge: null,
        stock: 25,
        rating: 4.8,
        reviewCount: 63
    },
    {
        id: 24,
        name: "Çocuk Baskılı Tişört - Dinozor",
        category: "giyim",
        subCategory: "cocuk-tisort",
        price: 349.99,
        oldPrice: null,
        image: "https://placehold.co/400x400/98d8c8/333333?text=Cocuk+Tisort",
        description: "Eğlenceli dinozor baskılı çocuk tişört. %100 pamuk, hassas ciltlere uygun.",
        features: ["%100 Organik pamuk", "Eğlenceli baskı", "Rahat kesim", "Alerjen içermez"],
        featured: false,
        badge: null,
        stock: 35,
        rating: 4.7,
        reviewCount: 29
    }
);


// =============================================
// ÇİFTLER & HEDİYELİK - ÖRNEK ÜRÜNLER
// =============================================
products.push(
    {
        id: 29,
        name: "Couple Hoodie Set - King & Queen",
        category: "giyim",
        subCategory: "cift-hoodie",
        price: 1599.99,
        oldPrice: 2199.99,
        image: "https://placehold.co/400x400/2c2c54/ffffff?text=Couple+Hoodie",
        description: "King & Queen baskılı couple hoodie seti. 2'li set olarak gönderilir. Sevgilinizle uyumlu kombinin adresi! %100 pamuk, oversize kesim.",
        features: ["2'li set (King + Queen)", "Oversize kesim", "%100 Pamuk", "Özel baskı tasarım"],
        featured: true,
        badge: "Çok Satan",
        stock: 10,
        rating: 4.9,
        reviewCount: 156
    },
    {
        id: 30,
        name: "Couple Tişört Set - Minimal Kalp",
        category: "giyim",
        subCategory: "cift-tisort",
        price: 899.99,
        oldPrice: 1299.99,
        image: "https://placehold.co/400x400/e8b4b8/333333?text=Couple+Tisort",
        description: "Minimal kalp tasarımlı couple tişört seti. 2'li set. Yaz aylarının vazgeçilmez çift kombini.",
        features: ["2'li set", "Slim fit kesim", "%100 Pamuk", "Kalp baskı tasarım"],
        featured: false,
        badge: "Yeni",
        stock: 20,
        rating: 4.7,
        reviewCount: 89
    }
);


// =============================================
// EV & YAŞAM KATEGORİSİ - ÖRNEK ÜRÜNLER
// =============================================
products.push(
    {
        id: 25,
        name: "El Yapımı Seramik Kupa Bardak",
        category: "ev",
        subCategory: "kupa",
        price: 249.99,
        oldPrice: 349.99,
        image: "https://placehold.co/400x400/d4a574/ffffff?text=Kupa+Bardak",
        description: "El yapımı seramik kupa bardak. Minimalist tasarımı ile kahve ve çay keyfinize eşlik eder. Bulaşık makinesinde yıkanabilir.",
        features: ["El yapımı seramik", "350ml kapasite", "Bulaşık makinesine uygun", "Minimalist tasarım"],
        featured: true,
        badge: "Yeni",
        stock: 40,
        rating: 4.9,
        reviewCount: 84
    },
    {
        id: 26,
        name: "Dekoratif Kırlent Yastık - Boho",
        category: "ev",
        subCategory: "yastik",
        price: 399.99,
        oldPrice: 549.99,
        image: "https://placehold.co/400x400/c4a882/ffffff?text=Kirlent",
        description: "Boho tarzı dekoratif kırlent yastık. 45x45 cm ebatlarında, iç dolgusu dahil. Koltuğunuza ve yatağınıza şıklık katın.",
        features: ["45x45 cm", "İç dolgu dahil", "Fermuar kapaklı", "Yıkanabilir kılıf"],
        featured: false,
        badge: "Popüler",
        stock: 22,
        rating: 4.6,
        reviewCount: 38
    },
    {
        id: 27,
        name: "Bambu Masa Düzenleyici",
        category: "ev",
        subCategory: "dekorasyon",
        price: 599.99,
        oldPrice: 799.99,
        image: "https://placehold.co/400x400/8fbc8f/ffffff?text=Masa+Duzenleyici",
        description: "Doğal bambudan üretilmiş masa düzenleyici. Kalem, telefon, not defteri gibi masaüstü eşyalarınızı düzenli tutun.",
        features: ["Doğal bambu", "Çok bölmeli", "Telefon standı", "Kompakt tasarım"],
        featured: false,
        badge: null,
        stock: 15,
        rating: 4.5,
        reviewCount: 21
    },
    {
        id: 28,
        name: "Kokulu Mum Seti - 3'lü Paket",
        category: "ev",
        subCategory: "dekorasyon",
        price: 349.99,
        oldPrice: 449.99,
        image: "https://placehold.co/400x400/e8d5b7/333333?text=Kokulu+Mum",
        description: "3 farklı koku seçeneğiyle kokulu mum seti. Vanilya, lavanta ve okyanus esintisi. Soya mumu bazlı, doğal.",
        features: ["Soya mumu bazlı", "3 farklı koku", "40 saat yanma süresi", "Cam kavanozda"],
        featured: false,
        badge: null,
        stock: 30,
        rating: 4.8,
        reviewCount: 52
    }
);


// =============================================
// KATEGORİ VE ALT KATEGORİ TANIMLARI
// =============================================
// Bu yapı navigasyon ve filtreleme için kullanılır.
// Ürün yoksa otomatik gizlenir.
// =============================================
const categoryConfig = {
    telefon: {
        name: "Telefon Aksesuarları",
        icon: "smartphone",
        desc: "Kılıf, şarj, kablo ve daha fazlası",
        image: "images/cat-telefon.png",
        subCategories: null  // alt kategorisi yok
    },
    araba: {
        name: "Araba Aksesuarları",
        icon: "directions_car",
        desc: "Tutucu, koku, organizer ve daha fazlası",
        image: "images/cat-araba.png",
        subCategories: null
    },
    giyim: {
        name: "Giyim",
        icon: "checkroom",
        desc: "Hoodie, sweatshirt, tişört ve daha fazlası",
        image: "images/cat-giyim.png",
        subCategories: {
            "erkek": {
                name: "Erkek Giyim",
                subs: {
                    "erkek-hoodie": "Hoodie",
                    "erkek-sweatshirt": "Sweatshirt",
                    "erkek-tisort": "Tişört",
                    "erkek-aksesuar": "Aksesuar"
                }
            },
            "kadin": {
                name: "Kadın Giyim",
                subs: {
                    "kadin-hoodie": "Hoodie",
                    "kadin-sweatshirt": "Sweatshirt",
                    "kadin-tisort": "Tişört",
                    "kadin-aksesuar": "Aksesuar"
                }
            },
            "cocuk": {
                name: "Çocuk Giyim",
                subs: {
                    "cocuk-hoodie": "Hoodie",
                    "cocuk-sweatshirt": "Sweatshirt",
                    "cocuk-tisort": "Tişört"
                }
            },
            "cift": {
                name: "Çiftler & Hediyelik",
                subs: {
                    "cift-hoodie": "Couple Hoodie",
                    "cift-tisort": "Couple Tişört",
                    "cift-sweatshirt": "Couple Sweatshirt",
                    "cift-aksesuar": "Hediyelik Aksesuar"
                }
            }
        }
    },
    ev: {
        name: "Ev & Yaşam",
        icon: "home",
        desc: "Kupa, yastık, dekorasyon ve daha fazlası",
        image: "images/cat-ev.png",
        subCategories: {
            "kupa": { name: "Kupa Bardak", subs: null },
            "yastik": { name: "Yastık & Kırlent", subs: null },
            "dekorasyon": { name: "Dekorasyon", subs: null }
        }
    }
};


// =============================================
// OTOMATİK STOK BİLDİRİM SİSTEMİ
// =============================================
// Bir ürünün stoğunu 0'dan yukarı çıkardığında
// o ürünün ID'sini buraya ekle. Bildirim otomatik gider.
// Bildirim gittikten sonra buradan sil.
//
// ÖRNEK: Ürün 17'nin stoğu geldi → [17] yaz
// Birden fazla: [17, 5, 9]
// Hepsi gittiyse: []
// =============================================
const restockedProducts = [];


// =============================================
// ONESIGNAL REST API KEY
// =============================================
// OneSignal paneli → Settings → Keys & IDs → REST API Key
// Aşağıya yapıştır:
const ONESIGNAL_REST_KEY = "oq4pnqazruwzuj3u5svopk4bv";


// =============================================
// KUPON / İNDİRİM KODU SİSTEMİ
// =============================================
// Yeni kupon eklemek için aşağıdaki diziye obje ekle.
//
// ALANLAR:
//   code       : Kupon kodu (büyük harf yaz, sistem otomatik büyük harf çevirir)
//   type       : "percent" = yüzde indirim, "fixed" = sabit TL indirim
//   value      : İndirim değeri (percent ise oran, fixed ise TL)
//   scope      : "all" = tüm site, "category" = belirli kategori, "product" = belirli ürün
//   scopeTarget: scope "category" ise kategori adı (örn: "telefon"), scope "product" ise ürün ID'si (örn: 5)
//   minAmount  : Minimum sepet tutarı (0 = sınır yok)
//   maxUses    : Maksimum toplam kullanım sayısı (0 = sınırsız)
//   perUser    : Bir kişi max kaç kere kullanabilir (1 = tek seferlik)
//   expiresAt  : Son kullanma tarihi/saati (ISO formatında) veya null = süresiz
//   active     : true = aktif, false = devre dışı
//
// ÖRNEK KUPONLAR:
// =============================================
const coupons = [
    {
        code: "HOSGELDIN",
        type: "percent",
        value: 10,
        scope: "all",
        scopeTarget: null,
        minAmount: 200,
        maxUses: 500,
        perUser: 1,
        expiresAt: null,
        active: true
    },
    {
        code: "TELEFON50",
        type: "fixed",
        value: 50,
        scope: "category",
        scopeTarget: "telefon",
        minAmount: 300,
        maxUses: 100,
        perUser: 1,
        expiresAt: null,
        active: true
    },
    {
        code: "GIYIM20",
        type: "percent",
        value: 20,
        scope: "category",
        scopeTarget: "giyim",
        minAmount: 250,
        maxUses: 0,
        perUser: 1,
        expiresAt: null,
        active: true
    }
];
// =============================================
// KUPON NASIL EKLENİR - HIZLI REHBER:
// =============================================
//
// 1) Tüm sitede %15 indirim, 24 saat geçerli, 200 kişilik:
//    {
//        code: "YAZ15",
//        type: "percent",
//        value: 15,
//        scope: "all",
//        scopeTarget: null,
//        minAmount: 0,
//        maxUses: 200,
//        perUser: 1,
//        expiresAt: "2026-10-15T23:59:00",   ← bitiş tarihi yaz
//        active: true
//    }
//
// 2) Sadece ürün ID 5'e özel 30 TL indirim:
//    {
//        code: "OZEL30",
//        type: "fixed",
//        value: 30,
//        scope: "product",
//        scopeTarget: 5,
//        minAmount: 0,
//        maxUses: 0,
//        perUser: 1,
//        expiresAt: null,
//        active: true
//    }
//
// 3) Kuponu devre dışı bırakmak: active: false yap
// =============================================


// =============================================
// ÜRÜN YORUMLARI
// =============================================
// Her ürüne yorum eklemek için aşağıdaki formatta obje ekle.
//
// ALANLAR:
//   productId : Yorum yapılan ürünün ID'si (products dizisindeki id)
//   reviews   : Yorum dizisi, her yorum:
//     name    : Müşteri adı (sansürlü gösterilecek, sadece ilk harf açık)
//     initial : Profil dairesinde gösterilecek harf (istediğini yaz)
//     rating  : Kaç yıldız (1-5 arası)
//     text    : Yorum metni
//     date    : Tarih (opsiyonel, yazarsan gösterilir)
//
// ÖRNEK:
// =============================================
const productReviews = {
    // Ürün ID 1 - Premium Silikon Telefon Kılıfı
    1: [
        {
            name: "Ahmet Y.",
            initial: "A",
            rating: 5,
            text: "Çok kaliteli bir ürün, telefonuma birebir oturdu. Darbelere karşı gerçekten koruyucu. Kesinlikle tavsiye ederim!",
            date: "12 Ekim 2026"
        },
        {
            name: "Merve K.",
            initial: "M",
            rating: 4,
            text: "Güzel kılıf, rengi fotoğraftaki gibi. Tek eksiği biraz kaygan olması ama genel olarak memnunum.",
            date: "10 Ekim 2026"
        },
        {
            name: "Burak S.",
            initial: "B",
            rating: 5,
            text: "3 tane aldım ailem için, hepsi mükemmel geldi. Kargo da çok hızlıydı teşekkürler.",
            date: "8 Ekim 2026"
        }
    ],

    // Ürün ID 4 - Bluetooth Kulaklık TWS
    4: [
        {
            name: "Elif D.",
            initial: "E",
            rating: 5,
            text: "Ses kalitesi bu fiyata inanılmaz! Gürültü engelleme özelliği de gayet başarılı.",
            date: "11 Ekim 2026"
        },
        {
            name: "Can T.",
            initial: "C",
            rating: 4,
            text: "Pil ömrü gerçekten uzun, günlük kullanımda 2-3 gün gidiyor. Tavsiye ederim.",
            date: "9 Ekim 2026"
        }
    ],

    // Ürün ID 9 - Manyetik Araç Telefon Tutucusu
    9: [
        {
            name: "Serkan A.",
            initial: "S",
            rating: 5,
            text: "Mıknatısı çok güçlü, telefon hiç düşmüyor. Montajı da çok kolay oldu.",
            date: "11 Ekim 2026"
        },
        {
            name: "Zeynep M.",
            initial: "Z",
            rating: 5,
            text: "Harika ürün! Araçta navigasyon kullanırken çok işime yarıyor. Çok sağlam tutuyor.",
            date: "7 Ekim 2026"
        },
        {
            name: "Oğuz R.",
            initial: "O",
            rating: 4,
            text: "Güzel tutucu, tasarımı da şık. Havalandırma kanalına tam oturuyor.",
            date: "5 Ekim 2026"
        },
        {
            name: "Fatma B.",
            initial: "F",
            rating: 5,
            text: "Eşime de aldım çok beğendi. Hızlı kargo için de ayrıca teşekkürler!",
            date: "3 Ekim 2026"
        }
    ]
};
// =============================================
// YORUM NASIL EKLENİR:
// =============================================
//
// 1) Mevcut ürüne yorum ekle:
//    productReviews[1].push({
//        name: "Ali V.",
//        initial: "A",
//        rating: 5,
//        text: "Süper ürün!",
//        date: "13 Ekim 2026"
//    });
//
// 2) Yeni ürüne ilk yorumu ekle (ürün ID 7 örneği):
//    productReviews[7] = [
//        {
//            name: "Deniz K.",
//            initial: "D",
//            rating: 4,
//            text: "Gayet güzel, memnunum.",
//            date: "13 Ekim 2026"
//        }
//    ];
//
// NOT: "name" alanında soyadını kısalt (Örn: "Ahmet Y.")
//      "initial" profil dairesinde gösterilecek harf
// =============================================