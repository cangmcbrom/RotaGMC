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
