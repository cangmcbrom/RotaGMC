// =============================================
// ÜRÜN VERİLERİ - RotaGMC
// =============================================
// ÜRÜN EKLEMEK İÇİN: Bu diziye yeni bir obje ekleyin
// ÜRÜN SİLMEK İÇİN: İlgili objeyi silin
// GÖRSEL EKLEMEK İÇİN: images klasörüne resmi koyun ve yolu yazın
// =============================================

const WHATSAPP_NUMBER = "905330912450";

const products = [
    // Ürünlerini buraya ekle (aşağıdaki rehbere bak)
    {
        id: 1,                              // ← benzersiz numara (her ürün farklı)
        name: "Seni Seviyorum Kapüşonlu Sevgili Kombini",            // ← ürün adı
        category: "giyim",                  // ← kategori (aşağıdaki tablodan seç)
        subCategory: "cift-hoodie",        // ← alt kategori (opsiyonel, aşağıdaki tablodan seç)
        price: 1699.49,                      // ← satış fiyatı
        oldPrice: 2249.49,                   // ← eski fiyat (üzeri çizili gösterilir), indirim yoksa null yaz
        image: "images/cifthoodiebeyaz-1.jpg",          // ← ana görsel (images klasörüne at)
        description: "Seni Seviyorum Kalpli Erkek Kapüşonlu Sweatshirt, sevginizi en sıcak ve tarz şekilde göstermeniz için tasarlandı.Yumuşacık pamuklu kumaşıyla gün boyu konfor sunarken, göğsündeki zarif kalp detayı ve samimi mesajıyla kombinlerinize romantik ve modern bir dokunuş katar. İster sevgilinize unutulmaz anlamlı bir hediye edin, ister sokak modasında tarzınızı love-core esintisiyle öne çıkarın; kaliteli dikiş yapısı ve dayanıklı baskısıyla uzun yıllar dolabınızın favorisi olacak.",  // ← açıklama metni
        features: ["Yüksek Kaliteli Baskı: Uzun süre canlılığını ve renk netliğini koruyan üstün dayanıklı baskı teknolojisi.", "Göz Alıcı Tasarım: Detaylı yapısıyla tarzınızı en iyi şekilde yansıtmanıza olanak tanır.", "Gün Boyu Konfor: Şıklığı ve rahatlığı bir arada sunarak gün içindeki hareket özgürlüğünüzü destekler.","Mükemmel Hediye Seçeneği: Sevdiklerinize özel günlerde armağan etmek için idealdir.","Uzun Ömürlü Kullanım: Kaliteli materyali ve dayanıklı yapısıyla gardırobunuzun uzun yıllar favorisi olur."],  // ← özellik listesi
        featured: true,                     // ← ana sayfada öne çıksın mı? (true / false)
        badge: "Çok Satan",                      // ← etiket: "Yeni", "Çok Satan", "Popüler", "Premium" veya null
        stock: 150,                          // ← stok adedi (5 ve altı uyarı verir, 0 = tükenmiş)
        rating: 4.3,                        // ← yıldız puanı (1.0 - 5.0)
        reviewCount: 48                    // ← değerlendirme sayısı
    },
];


// =============================================
// ÜRÜN PUANLARI (opsiyonel - ürün içinde de yazabilirsin)
// =============================================
const productRatings = {
    // 1: { rating: 4.8, reviewCount: 124 },
};

products.forEach(p => {
    if (productRatings[p.id]) {
        p.rating = parseFloat(productRatings[p.id].rating);
        p.reviewCount = productRatings[p.id].reviewCount;
    }
});


// =============================================
// ÜRÜN STOKLARI (opsiyonel - ürün içinde de yazabilirsin)
// =============================================
const productStocks = {
    // 1: 50,
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
// images: ["images/urun1-1.jpg", "images/urun1-2.jpg"]
// video: "images/urun1-video.mp4"  (opsiyonel)
// =============================================
// products dizisinin DIŞINA, ALTINA yaz:
products.find(p => p.id === 1).images = [
    "images/cifthoodiebeyaz-1.jpg",
    "images/cifthoodiesiyah.jpg",
    "images/cifthoodiekirmizi.jpg",
    "images/cifthoodiemavi.jpg",
    "images/cifthoodiesarı.jpg"
];
// Otomatik olarak ana görseli images dizisine ekle (eğer yoksa)
products.forEach(p => {
    if (!p.images) {
        p.images = [p.image];
    }
});


// =============================================
// VARYASYON SİSTEMİ (Renk / Beden / Toptan Fiyat)
// =============================================
// Sadece istenen ürünlere eklenir. Eklenmeyenlerde görünmez.
//
// ÖRNEK:
// products.find(p => p.id === 1).variants = {
//     colors: [
//         { name: "Siyah", code: "#000000", images: ["images/u1-siyah1.jpg"], priceAdjust: 0 },
//         { name: "Kırmızı", code: "#d32f2f", images: ["images/u1-kirmizi1.jpg"], price: 799.99, oldPrice: 999.99 }
//     ],
//     sizes: [
//         { name: "S", priceAdjust: 0 },
//         { name: "M", priceAdjust: 0 },
//         { name: "L", priceAdjust: 10 },
//         { name: "XL", price: 899.99, oldPrice: 1099.99 }
//     ]
// };
//
// products.find(p => p.id === 1).bulkPricing = [
//     { minQty: 5, discountPercent: 10 },
//     { minQty: 10, discountPercent: 20 }
// ];
//
// NOT: priceAdjust = ana fiyata eklenen TL (0 = değişmez)
// NOT: price + oldPrice yazarsan → kendi fiyatı + kendi indirimi olur
// =============================================
products.find(p => p.id === 1).variants = {
    colors: [
        {
            name: "Siyah",
            code: "#000000",
            images: ["images/cifthoodiesiyah.jpg", "images/cifthoodiekirmizi.jpg", "images/cifthoodiemavi.jpg", "images/cifthoodiesarı.jpg", "images/cifthoodiebeyaz-1.jpg"],
            priceAdjust: 0
        },
        {
            name: "Kırmızı",
            code: "#d32f2f",
            images: ["images/cifthoodiekirmizi.jpg", "images/cifthoodiesiyah.jpg", "images/cifthoodiemavi.jpg", "images/cifthoodiesarı.jpg", "images/cifthoodiebeyaz-1.jpg"],
            priceAdjust: 0
        },
        {
            name: "Mavi",
            code: "#1976d2",
            images: ["images/cifthoodiemavi.jpg", "images/cifthoodiesiyah.jpg", "images/cifthoodiekirmizi.jpg", "images/cifthoodiesarı.jpg", "images/cifthoodiebeyaz-1.jpg"],
            priceAdjust: 0
        },
        {
            name: "Sarı",
            code: "#ffc107",
            images: ["images/cifthoodiesarı.jpg", "images/cifthoodiesiyah.jpg", "images/cifthoodiemavi.jpg", "images/cifthoodiekirmizi.jpg", "images/cifthoodiebeyaz-1.jpg"],
            priceAdjust: 0
        },
        {
            name: "Beyaz",
            code: "#ffffff",
            images: ["images/cifthoodiebeyaz-1.jpg", "images/cifthoodiesiyah.jpg", "images/cifthoodiemavi.jpg", "images/cifthoodiesarı.jpg", "images/cifthoodiekirmizi.jpg"],
            priceAdjust: 0
        }
    ],
    sizes: [
        { name: "XS", priceAdjust: 0 },
        { name: "S", priceAdjust: 0 },
        { name: "M", priceAdjust: 0 },
        { name: "L", priceAdjust: 0 },
        { name: "XL", priceAdjust: 0 },
        { name: "2XL", priceAdjust: 0 },
        { name: "3XL", priceAdjust: 0 },
        { name: "4XL", priceAdjust: 0 }
    ]
};
// =============================================
// KATEGORİ VE ALT KATEGORİ TANIMLARI
// =============================================
// Ürün yoksa kategori otomatik gizlenir.
// =============================================
const categoryConfig = {
    telefon: {
        name: "Telefon Aksesuarları",
        icon: "smartphone",
        desc: "Kılıf, şarj, kablo ve daha fazlası",
        image: "images/cat-telefon.png",
        subCategories: null
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
const restockedProducts = [];


// =============================================
// ONESIGNAL REST API KEY
// =============================================
const ONESIGNAL_REST_KEY = "oq4pnqazruwzuj3u5svopk4bv";


// =============================================
// KUPON / İNDİRİM KODU SİSTEMİ
// =============================================
const coupons = [
    // Kuponlarını buraya ekle
];


// =============================================
// ÜRÜN YORUMLARI
// =============================================
const productReviews = {
    // Yorumlarını buraya ekle
    1: [
        {
            name: "Kaan T.",       // müşteri adı (otomatik sansürlenir: A**** Y*)
            initial: "K",           // profil dairesindeki harf
            rating: 5,              // kaç yıldız (1-5)
            text: "Kumaşı cidden yumuşacık ve kalınlığı tam kararında, ne çok ince ne terletiyor. Baskısı da fotoğraftakinden bile daha canlı duruyor, eşime hediye almıştım bayıldı. Kargolama da hızlıydı, teşekkürler.",  // yorum metni
            date: "7 Ekim 2026"   // tarih
        },
        {
            name: "Mert K.",
            initial: "M",
            rating: 5,
            text: "Normalde bu tarz baskılı sweatshirtlerden çekinirim yıkamada çatlar diye ama birkaç kez yıkadım, baskısında zerre solma ya da çatlama olmadı. Kalıbı da tam istediğim gibi durdu, oversize seviyorsanız bir beden büyük alabilirsiniz.",
            date: "12 Ekim 2026"
        },
        {
            name: "Buse Ç.",
            initial: "B",
            rating: 5,
            text: "Sevgililer günü için almıştık, kalıbı ve duruşu o kadar tatlı ki anlatamam. Aşırı abartı durmuyor, günlük giyimde çok şık duran bi detay olmuş. Kalitesi de merdiven altı ürünler gibi değil, bayağı tok duruyo kumaşı.",
            date: "15 Ekim 2026"
        },
        {
            name: "Ahmet S.",
            initial: "A",
            rating: 4,
            text: "Ürün gayet başarılı, kumaş kalitesi fiyatına göre çok iyi. İçerisi pamuklu polar olduğu için sıcacık tutuyor. Sadece kargo poşeti biraz hırpalanmıştı ama ürün sağlam geldi, tavsiye ederim.",
            date: "19 Ekim 2026"
        },
        {
            name: "Eren D.",
            initial: "E",
            rating: 5,
            text: "Kumaşı yumuşak, içi pamuklu ve gün boyu rahat ettiriyo. Baskısının netliği de gayet başarılı. Fotoğrafta görünenin birebir aynısı geldi, güvenle alabilirsiniz.",
            date: "20 Ekim 2026"
        },
        {
            name: "Deniz Y.",
            initial: "D",
            rating: 4,
            text: "Kardeşime hediye olarak aldım, bayıldı. Kalitesi fena değil, dikişlerinde falan bi hata çıkmadı. Paketlemesi de özenliydi, satıcıya teşekkürler.",
            date: "22 Ekim 2026"
        }
    
    ],
   
};
