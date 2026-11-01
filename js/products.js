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
    {
        id: 2,                              // ← benzersiz numara (her ürün farklı)
        name: "Erkek Bisiklet Yaka Tişört",            // ← ürün adı
        category: "giyim",                  // ← kategori (aşağıdaki tablodan seç)
        subCategory: "erkek-tisort",        // ← alt kategori (opsiyonel, aşağıdaki tablodan seç)
        price: 559.90,                      // ← satış fiyatı
        oldPrice: 849.50,                   // ← eski fiyat (üzeri çizili gösterilir), indirim yoksa null yaz
        image: "images/erkekbisiklettişörtbeyaz.jpg",          // ← ana görsel (images klasörüne at)
        description: "Kendi tarzını gardırobuna yansıtmak, gün boyu nefes alan kumaşıyla konforu doruklarda yaşamak artık çok kolay! İster en sevdiğin anı ölümsüzleştiren bir fotoğrafı, ister sana ilham veren bir yazıyı ya da kendi logonu ekle; tamamen sana özel bu tasarım tişörtle dikkatleri üzerine çek. Cilt dostu %100 pamuk yapısı, sağlığa zararsız sertifikalı baskıları ve geniş renk alternatifleriyle günlük kombinlerinin vazgeçilmezi olmaya aday. Şimdi hayalindeki tasarımı gerçeğe dönüştür, tarzınla fark yarat!",  // ← açıklama metni
        features: ["%100 Pamuklu Kumaş: Cilt dostu, nefes alabilen ve terletmeyen yapısıyla gün boyu konforlu bir kullanım sunar.", "İdeal Gramaj: 165-170 gr/m² gramajı sayesinde ne çok ince ne de çok kalın, günlük kullanım için mükemmel bir denge sağlar.", "Kolay Bakım: Kısa programda 30°C'de tersten yıkanarak kalitesini uzun süre korur."],  // ← özellik listesi
        featured: true,                     // ← ana sayfada öne çıksın mı? (true / false)
        badge: "Popüler",                      // ← etiket: "Yeni", "Çok Satan", "Popüler", "Premium" veya null
        stock: 150,                          // ← stok adedi (5 ve altı uyarı verir, 0 = tükenmiş)
        rating: 4.8,                        // ← yıldız puanı (1.0 - 5.0)
        reviewCount: 124                    // ← değerlendirme sayısı
    },
    {
        id: 3,                              // ← benzersiz numara (her ürün farklı)
        name: "Bozkurt, Türk Bayrağı ve Göktürkçe Türk Yazılı Erkek Kapüşonlu Hoodie",            // ← ürün adı
        category: "giyim",                  // ← kategori (aşağıdaki tablodan seç)
        subCategory: "erkek-hoodie",        // ← alt kategori (opsiyonel, aşağıdaki tablodan seç)
        price: 524.90,                      // ← satış fiyatı
        oldPrice: 1094.90,                   // ← eski fiyat (üzeri çizili gösterilir), indirim yoksa null yaz
        image: "images/bozkurterkekhoodie.png",          // ← ana görsel (images klasörüne at)
        description: "Soğuk kış günlerinde şıklığınızdan ödün vermeden sıcacık kalmanız için tasarlanan bu kapüşonlu hoodie sweatshirt, kalın kışlık kumaşı sayesinde soğuk havalarda en büyük yardımcınız olacak. %100 pamuklu 1. sınıf compact penye kumaşı, özel dikimi ve özenli işçiliğiyle üstün bir konfor sunarken, tarzınızı en güçlü şekilde yansıtmanıza olanak tanır.",  // ← açıklama metni
        features: ["Kalın Kışlık Kumaş: Kalın yapısı sayesinde soğuk kış günlerinde sizi etkili bir şekilde korur.", "%100 Pamuklu Compact Penye: 1. sınıf kalitedeki pamuklu penye kumaşı cilt dostudur ve gün boyu rahatlık sağlar.", "İdeal Gramaj: Ortalama 260 gr/m² kumaş m² gramajıyla ne çok ağır ne de hafif, ideal bir kışlık kalınlığa sahiptir.", "Özel Dikim ve İşçilik: Kendi fabrikamızda özenle üretilen birinci sınıf özel dikim ve işçilik detayları barındırır.", "Kapüşonlu ve Rahat Tasarım: Günlük kombinlerinizde hem şık hem de son derece kullanışlı bir yapı sunar.", "Kolay Bakım: Kısa programda maksimum 30°C'de tersten yıkanabilir; orta ısıda tersten ütülenmeye uygundur (kuru temizleme ve kurutma makinesi önerilmez)"],  // ← özellik listesi
        featured: true,                     // ← ana sayfada öne çıksın mı? (true / false)
        badge: "Premium",                      // ← etiket: "Yeni", "Çok Satan", "Popüler", "Premium" veya null
        stock: 150,                          // ← stok adedi (5 ve altı uyarı verir, 0 = tükenmiş)
        rating: 4.4,                        // ← yıldız puanı (1.0 - 5.0)
        reviewCount: 82                    // ← değerlendirme sayısı
    },
    {
        id: 4,                              // ← benzersiz numara (her ürün farklı)
        name: "Kadın V Yaka Tişört",            // ← ürün adı
        category: "giyim",                  // ← kategori (aşağıdaki tablodan seç)
        subCategory: "kadin-tisort",        // ← alt kategori (opsiyonel, aşağıdaki tablodan seç)
        price: 549.90,                      // ← satış fiyatı
        oldPrice: 874.90,                   // ← eski fiyat (üzeri çizili gösterilir), indirim yoksa null yaz
        image: "images/kadınvyakabeyaz.png",          // ← ana görsel (images klasörüne at)
        description: "Klasik kesimlerden sıkılan ve her daim farklı, şık hissetmek isteyen kadınlar için tasarlanan V yaka tişört, gardırobunuzun vazgeçilmezi olmaya aday. Kendi fabrikamızda 1. sınıf penye kumaşla, özel dikim ve işçilikle üretilen bu kaliteli model; rahat kesimi ve zengin renk seçenekleriyle tarzınızı dilediğiniz gibi yansıtmanıza olanak tanır.",  // ← açıklama metni
        features: ["Kaliteli İçerik: %95 pamuk ve %5 likra karışımı sayesinde hem cildinizin nefes almasını sağlar hem de esnek yapısıyla hareket özgürlüğü tanır.", "İdeal Gramaj: 180 gr/m² yüksek metrekare gramajıyla tok, dayanıklı ve uzun ömürlü bir kullanım sunar.", "Özel Dikim ve İşçilik: Kendi fabrikamızda özenle üretilen 1. sınıf penye kumaştan imal edilmiştir.", "Şık ve Rahat V Yaka Tasarım: Klasik tişörtlerden sıyrılmak isteyenler için rahat kesimi ve çok sayıda renk alternatifiyle kişiselleştirmeye uygundur."],  // ← özellik listesi
        featured: true,                     // ← ana sayfada öne çıksın mı? (true / false)
        badge: "Popüler",                      // ← etiket: "Yeni", "Çok Satan", "Popüler", "Premium" veya null
        stock: 150,                          // ← stok adedi (5 ve altı uyarı verir, 0 = tükenmiş)
        rating: 4.7,                        // ← yıldız puanı (1.0 - 5.0)
        reviewCount: 224                    // ← değerlendirme sayısı
    },
    {
        id: 5,                              // ← benzersiz numara (her ürün farklı)
        name: "Rock Penguen Unisex Kapüşonlu Sweatshirt",            // ← ürün adı
        category: "giyim",                  // ← kategori (aşağıdaki tablodan seç)
        subCategory: ["erkek-hoodie", "kadin-hoodie"],        // ← alt kategori (opsiyonel, aşağıdaki tablodan seç)
        price: 464.49,                      // ← satış fiyatı
        oldPrice: null,                   // ← eski fiyat (üzeri çizili gösterilir), indirim yoksa null yaz
        image: "images/unisexpenguhoodiebeyaz.png",          // ← ana görsel (images klasörüne at)
        description: "Soğuk kış günlerinde şıklığınızdan ödün vermeden sıcacık kalmanız için tasarlanan bu kapüşonlu sweatshirt, eğlenceli tasarımı ve zengin renk seçenekleriyle tarzınıza sıcak bir dokunuş katıyor. Kendi fabrikamızda %100 pamuklu 1. sınıf compact penye kumaştan özel dikimle üretilen bu kaliteli model, sertifikalı ve güvenli baskılarıyla hem şık hem de son derece rahat bir kullanım sunar.",  // ← açıklama metni
        features: ["%100 Pamuk & Compact Penye: Kendi fabrikamızda 1. sınıf compact penye kumaş kullanılarak özel dikim ve işçilikle üretilmiştir.", "Sıcak Tutan İdeal Kumaş: Kalın kışlık yapısı ve ortalama 260 gr/m² gramajı sayesinde soğuk havalarda üstün koruma ve konfor sağlar.", "Güvenli ve Sertifikalı Baskı: Baskılarda kullanılan boyalar sertifikalıdır, insan sağlığına zarar vermez ve güvenle giyilebilir.", "Kolay Bakım & Zengin Renk Seçenekleri: Farklı renk alternatiflerine sahip olup, maksimum 30°C'de tersten yıkanarak kalitesini ve renk canlılığını uzun süre korur."],  // ← özellik listesi
        featured: true,                     // ← ana sayfada öne çıksın mı? (true / false)
        badge: "Premium",                      // ← etiket: "Yeni", "Çok Satan", "Popüler", "Premium" veya null
        stock: 150,                          // ← stok adedi (5 ve altı uyarı verir, 0 = tükenmiş)
        rating: 4.8,                        // ← yıldız puanı (1.0 - 5.0)
        reviewCount: 49                    // ← değerlendirme sayısı
    },
    {
        id: 6,                              // ← benzersiz numara (her ürün farklı)
        name: "5'li Kışlık Unisex Kapşonlu Sweatshirt Seti (Siyah, Haki Yeşil, Bordo, Mor, Buz Mavi)",            // ← ürün adı
        category: "giyim",                  // ← kategori (aşağıdaki tablodan seç)
        subCategory: ["erkek-hoodie", "kadin-hoodie"],        // ← alt kategori (opsiyonel, aşağıdaki tablodan seç)
        price: 3249.90,                      // ← satış fiyatı
        oldPrice: 4699.90,                   // ← eski fiyat (üzeri çizili gösterilir), indirim yoksa null yaz
        image: "images/5liunisexkıslıkset-1.png",          // ← ana görsel (images klasörüne at)
        description: "Soğuk kış günlerinde şıklığınızdan ödün vermeden sıcak kalmanız için hazırlanan bu 5'li kapüşonlu sweatshirt seti, kış gardırobunuzun tüm ihtiyacını tek seferde karşılıyor. Siyah, haki yeşil, bordo, mor ve buz mavi renk seçenekleriyle sunulan bu özel set; %100 pamuklu 1. sınıf compact penye kumaşı, özel dikimi ve kalın yapısıyla gün boyu üstün konfor sağlar.",  // ← açıklama metni
        features: ["Avantajlı 5'li Set & Zengin Renkler: Siyah, haki yeşil, bordo, mor ve buz mavi olmak üzere 5 farklı renk seçeneğini bir arada sunar.", "%100 Pamuk & Compact Penye: Kendi fabrikamızda 1. sınıf compact penye kumaş kullanılarak özel dikim ve işçilikle üretilmiştir.", "Sıcak Tutan İdeal Kumaş: Kalın kışlık yapısı ve ortalama 260 gr/m² m² gramajı sayesinde soğuk günlerde ekstra koruma ve konfor sağlar.","Güvenli Baskı & Kolay Bakım: Sertifikalı, insan sağlığına zararsız boyalarla hazırlanmış olup maksimum 30°C'de tersten yıkanarak uzun ömürlü kullanım sunar."],  // ← özellik listesi
        featured: true,                     // ← ana sayfada öne çıksın mı? (true / false)
        badge: "Çok Satan",                      // ← etiket: "Yeni", "Çok Satan", "Popüler", "Premium" veya null
        stock: 150,                          // ← stok adedi (5 ve altı uyarı verir, 0 = tükenmiş)
        rating: 4.8,                        // ← yıldız puanı (1.0 - 5.0)
        reviewCount: 96                    // ← değerlendirme sayısı
    },
    {
        id: 7,                              // ← benzersiz numara (her ürün farklı)
        name: "5'li Kışlık Unisex Kapşonlu Sweatshirt Seti (Siyah, Füme, Lacivert, Gri, Beyaz)",            // ← ürün adı
        category: "giyim",                  // ← kategori (aşağıdaki tablodan seç)
        subCategory: ["erkek-hoodie", "kadin-hoodie"],        // ← alt kategori (opsiyonel, aşağıdaki tablodan seç)
        price: 3249.90,                      // ← satış fiyatı
        oldPrice: 4699.90,                   // ← eski fiyat (üzeri çizili gösterilir), indirim yoksa null yaz
        image: "images/5liunisexkıslıkset-2.png",          // ← ana görsel (images klasörüne at)
        description: "Soğuk kış günlerinde şıklığınızdan ödün vermeden sıcak kalmanız için hazırlanan bu 5'li kapüşonlu sweatshirt seti, kış gardırobunuzun tüm ihtiyacını tek seferde karşılıyor. Siyah, haki yeşil, bordo, mor ve buz mavi renk seçenekleriyle sunulan bu özel set; %100 pamuklu 1. sınıf compact penye kumaşı, özel dikimi ve kalın yapısıyla gün boyu üstün konfor sağlar.",  // ← açıklama metni
        features: ["Avantajlı 5'li Set & Zengin Renkler: Siyah, haki yeşil, bordo, mor ve buz mavi olmak üzere 5 farklı renk seçeneğini bir arada sunar.", "%100 Pamuk & Compact Penye: Kendi fabrikamızda 1. sınıf compact penye kumaş kullanılarak özel dikim ve işçilikle üretilmiştir.", "Sıcak Tutan İdeal Kumaş: Kalın kışlık yapısı ve ortalama 260 gr/m² m² gramajı sayesinde soğuk günlerde ekstra koruma ve konfor sağlar.","Güvenli Baskı & Kolay Bakım: Sertifikalı, insan sağlığına zararsız boyalarla hazırlanmış olup maksimum 30°C'de tersten yıkanarak uzun ömürlü kullanım sunar."],  // ← özellik listesi
        featured: true,                     // ← ana sayfada öne çıksın mı? (true / false)
        badge: "Çok Satan",                      // ← etiket: "Yeni", "Çok Satan", "Popüler", "Premium" veya null
        stock: 150,                          // ← stok adedi (5 ve altı uyarı verir, 0 = tükenmiş)
        rating: 4.9,                        // ← yıldız puanı (1.0 - 5.0)
        reviewCount: 122                    // ← değerlendirme sayısı
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

// products dizisinin DIŞINA, ALTINA yaz:
products.find(p => p.id === 2).images = [
    "images/erkekbisiklettişörtbeyaz.jpg",
    "images/bedentablosu2022.png"
];

products.find(p => p.id === 3).images = [
    "images/bozkurterkekhoodie.png",
    "images/erkek-kapusonlu-beden-tablosu.jpg"
];

products.find(p => p.id === 4).images = [
    "images/kadınvyakabeyaz.png",
    "images/kadin-v-yaka-tshirt-beden-tablosu.jpg"
];

products.find(p => p.id === 5).images = [
    "images/unisexpenguhoodiebeyaz.png",
    "images/bedentablosu2022.png"
];

products.find(p => p.id === 6).images = [
    "images/5liunisexkıslıkset-1.png",
    "images/5liunisexkıslıksiyah.png",
    "images/5liunisexkıslıkhakiyeşil.png",
    "images/5liunisexkıslıkbordo.png",
    "images/5liunisexkıslıkmor.png",
    "images/5liunisexkıslıkbuzmavi.png",
    "images/bedentablosu2022.png"
];

products.find(p => p.id === 7).images = [
    "images/5liunisexkıslıkset-2.png",
    "images/5liunisexkıslıksiyah.png",
    "images/5liunisexkıslıkfüme.png",
    "images/5liunisexkıslıklacivert.png",
    "images/5liunisexkıslıkgri.png",
    "images/5liunisexkıslıkbeyaz.png",
    "images/bedentablosu2022.png"
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

products.find(p => p.id === 2).variants = {
    colors: [
        {
            name: "Siyah",
            code: "#000000",
            images: ["images/erkekbisiklettişörtsiyah1.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Kırmızı",
            code: "#d32f2f",
            images: ["images/erkekbisiklettişörtkırmızı.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Mavi",
            code: "#1976d2",
            images: ["images/erkekbisiklettişörtsaksmavi.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Sarı",
            code: "#ffc107",
            images: ["images/erkekbisiklettişörtsarı.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Beyaz",
            code: "#ffffff",
            images: ["images/erkekbisiklettişörtbeyaz.jpg", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Gri",
            code: "#808080",
            images: ["images/erkekbisiklettişörtgri.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Füme",
            code: "#3A3A3A",
            images: ["images/erkekbisiklettişörtfüme.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Lacivert",
            code: "#000080",
            images: ["images/erkekbisiklettişörtlacivert.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Saks Mavi",
            code: "#0000C8",
            images: ["images/erkekbisiklettişörtsaksmavi.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Buz Mavisi",
            code: "#739BD0",
            images: ["images/erkekbisiklettişörtbuzmavisi.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Bordo",
            code: "#6A1B29",
            images: ["images/erkekbisiklettişörtbordo.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Camel",
            code: "#C19A6B",
            images: ["images/erkekbisiklettişörtcamel.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Çimen Yeşili",
            code: "#1B5E20",
            images: ["images/erkekbisiklettişörtçimenyeşili.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Fıstık Yeşili",
            code: "#7CB342",
            images: ["images/erkekbisiklettişörtfıstıkyeşili.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Fuşya",
            code: "#C2185B",
            images: ["images/erkekbisiklettişörtfuşya.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Haki Yeşili",
            code: "#556B2F",
            images: ["images/erkekbisiklettişörthakiyeşili.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Kahverengi",
            code: "#4E3629",
            images: ["images/erkekbisiklettişörtkahverengi.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Koyu Mor",
            code: "#381E38",
            images: ["images/erkekbisiklettişörtkoyumor.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Krem",
            code: "#FDF5E6",
            images: ["images/erkekbisiklettişörtkrem.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Lila",
            code: "#C8A2C8",
            images: ["images/erkekbisiklettişörtlila.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Mor",
            code: "#4A148C",
            images: ["images/erkekbisiklettişörtmor.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Pembe",
            code: "#F48FB1",
            images: ["images/erkekbisiklettişörtpembe.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Su Yeşili",
            code: "#A2D9CE",
            images: ["images/erkekbisiklettişörtsuyeşili.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Turkuaz",
            code: "#00ACC1",
            images: ["images/erkekbisiklettişörtturkuaz.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Turuncu",
            code: "#EF6C00",
            images: ["images/erkekbisiklettişörtturuncu.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        }
    ],
    sizes: [
        { name: "XS", priceAdjust: 0 },
        { name: "S", priceAdjust: 0 },
        { name: "M", priceAdjust: 0 },
        { name: "L", priceAdjust: 0 },
        { name: "XL", priceAdjust: 0 },
        { name: "2XL", price: 584.90, oldPrice: 874.50 },
        { name: "3XL", price: 594.90, oldPrice: 884.50 },
        { name: "4XL", price: 604.90, oldPrice: 894.50 },
        { name: "5XL", price: 614.90, oldPrice: 904.50 }
    ]
};

products.find(p => p.id === 3).variants = {
    sizes: [
        { name: "XS", priceAdjust: 0 },     // ana fiyat
        { name: "S", priceAdjust: 0 },
        { name: "M", priceAdjust: 0 },
        { name: "L", priceAdjust: 0 },     // +10₺
        { name: "XL", priceAdjust: 0 },
        { name: "2XL", priceAdjust: 8 },    // +20₺
        { name: "3XL", priceAdjust: 16 },
        { name: "4XL", priceAdjust: 24 },
        { name: "5XL", priceAdjust: 32 }
    ]
};

products.find(p => p.id === 4).variants = {
    colors: [
        {
            name: "Beyaz",
            code: "#ffffff",
            images: ["images/kadınvyakabeyaz.png", "images/kadin-v-yaka-tshirt-beden-tablosu.jpg"],
            priceAdjust: 0
        },
        {
            name: "Füme",
            code: "#3A3A3A",
            images: ["images/kadınvyakafüme.png", "images/kadin-v-yaka-tshirt-beden-tablosu.jpg"],
            priceAdjust: 0
        },
        {
            name: "Gri",
            code: "#808080",
            images: ["images/kadınvyakagri.png", "images/kadin-v-yaka-tshirt-beden-tablosu.jpg"],
            priceAdjust: 0
        },
        {
            name: "Kırmızı",
            code: "#d32f2f",
            images: ["images/kadınvyakakırmızı.png", "images/kadin-v-yaka-tshirt-beden-tablosu.jpg"],
            priceAdjust: 0
        },
        {
            name: "Lacivert",
            code: "#000080",
            images: ["images/kadınvyakalacivert.png", "images/kadin-v-yaka-tshirt-beden-tablosu.jpg"],
            priceAdjust: 0
        },
        {
            name: "Pembe",
            code: "#F48FB1",
            images: ["images/kadınvyakapembe.png", "images/kadin-v-yaka-tshirt-beden-tablosu.jpg"],
            priceAdjust: 0
        },
        {
            name: "Sarı",
            code: "#ffc107",
            images: ["images/kadınvyakasarı.png", "images/kadin-v-yaka-tshirt-beden-tablosu.jpg"],
            priceAdjust: 0
        },
        {
            name: "Siyah",
            code: "#000000",
            images: ["images/kadınvyakasiyah.png", "images/kadin-v-yaka-tshirt-beden-tablosu.jpg"],
            priceAdjust: 0
        }
    ],
    sizes: [
        { name: "XS", priceAdjust: 0 },
        { name: "S", priceAdjust: 0 },
        { name: "M", priceAdjust: 0 },
        { name: "L", priceAdjust: 0 },
        { name: "XL", priceAdjust: 0 },
        { name: "2XL", price: 562.90, oldPrice: 887.90 },
        { name: "3XL", price: 575.90, oldPrice: 900.90 },
        { name: "4XL", price: 588.90, oldPrice: 913.90 }
    ]
};

products.find(p => p.id === 5).variants = {
    colors: [
        {
            name: "Beyaz",
            code: "#ffffff",
            images: ["images/unisexpenguhoodiebeyaz.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Kırmızı",
            code: "#d32f2f",
            images: ["images/unisexpenguhoodiekırmızı.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Lacivert",
            code: "#000080",
            images: ["images/unisexpenguhoodielacivert.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Pembe",
            code: "#F48FB1",
            images: ["images/unisexpenguhoodiepembe.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        },
        {
            name: "Sarı",
            code: "#ffc107",
            images: ["images/unisexpenguhoodiesarı.png", "images/bedentablosu2022.png"],
            priceAdjust: 0
        }
    ],
    sizes: [
        { name: "XS", priceAdjust: 0 },
        { name: "S", priceAdjust: 0 },
        { name: "M", priceAdjust: 0 },
        { name: "L", priceAdjust: 0 },
        { name: "XL", priceAdjust: 0 },
        { name: "2XL", priceAdjust: 15 },
        { name: "3XL", priceAdjust: 30 },
        { name: "4XL", priceAdjust: 45 }
    ]
};

products.find(p => p.id === 6).variants = {
    sizes: [
        { name: "XS", priceAdjust: 0 },     // ana fiyat
        { name: "S", priceAdjust: 0 },
        { name: "M", priceAdjust: 0 },
        { name: "L", priceAdjust: 0 },     // +10₺
        { name: "XL", priceAdjust: 0 },
        { name: "2XL", priceAdjust: 0 }
    ]
};

products.find(p => p.id === 7).variants = {
    sizes: [
        { name: "XS", priceAdjust: 0 },     // ana fiyat
        { name: "S", priceAdjust: 0 },
        { name: "M", priceAdjust: 0 },
        { name: "L", priceAdjust: 0 },     // +10₺
        { name: "XL", priceAdjust: 0 },
        { name: "2XL", priceAdjust: 0 }
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

    2: [
    {
        name: "Emre A.",
        initial: "E",
        rating: 5,
        text: "Kanka kumaşı harbiden iyi çıktı, boyu posu da tam oturdu üzerime. Terletmeyen cinsinden, günlük giymelik ideal bi tişört olmuş. Paketleme de sağlamdı, elinize sağlık.",
        date: "8 Ekim 2026"
    },
    {
        name: "Burak Ç.",
        initial: "B",
        rating: 5,
        text: "30 derecede iki kere yıkadım ne baskıda bi atma oldu ne de tişört çekti. Pamuklu olduğu dokununca anlaşılıyor zaten, bu fiyata bu kalite gayet başarılı.",
        date: "11 Ekim 2026"
    },
    {
        name: "Gizem S.",
        initial: "G",
        rating: 5,
        text: "Erkek arkadaşıma hediye olarak aldım bayıldı. Kumaşı ne kaşındırıyo ne kalın, tam kararında yazlık-geçişlik bi parça. Görseldekiyle birebir aynı geldi.",
        date: "14 Ekim 2026"
    },
    {
        name: "Oğuzhan K.",
        initial: "O",
        rating: 4,
        text: "Kargo biraz geç gelebilir diye tırsmıştım ama hızlı ulaştı. Kumaşı yumuşak, öyle naylonumsu durmuyor. Sadece rengi ekrandakine göre bi tık ton farkı var gibi ama bu haliyle de güzel.",
        date: "18 Ekim 2026"
    },
    {
        name: "Tolga M.",
        initial: "T",
        rating: 5,
        text: "Valla alt tarafı tişört diyip geçiyodum ama adamlar kumaşa özenmiş. Ne bol ne dar, tam üzerime göre oldu. Gönül rahatlığıyla alabilirsiniz.",
        date: "21 Ekim 2026"
    },
    {
        name: "Selin D.",
        initial: "S",
        rating: 4,
        text: "Kardeşime aldım, yumuşacık pamuklu bi kumaşı var. Dikişlerinde falan bi sökük yoktu, temiz dikmişler. Paketleme özenliydi teşekkürler.",
        date: "23 Ekim 2026"
    }
    ],

    3: [
    {
        name: "Kerem T.",
        initial: "K",
        rating: 5,
        text: "Kanka sweatshirt harbiden kalın ve ağır tok bi kumaşı var, içi pamuklu polar olduğu için soğukta bayağı sıcak tutuyo. Baskısı da fotoğraftakinden bile net duruyo, tavsiye ederim.",
        date: "25 Ekim 2026"
    },
    {
        name: "Onur K.",
        initial: "O",
        rating: 5,
        text: "30 derecede tersten yıkadım, ne baskısında çatlama oldu ne de rengi soldu. 260 gramajı tam kışlık ideal kalınlıkta, ne ince ne patates bi ürün çıktı. Eline sağlık satıcının.",
        date: "27 Ekim 2026"
    },
    {
        name: "Melis S.",
        initial: "M",
        rating: 3.3,
        text: "Sevgilime hediye olarak aldım bayıldı. Oversize dursun diye bir beden büyük söyledik, üzerindeki duruşu o kadar tatlı ki anlatamam. Kumaşı da yumuşacık.",
        date: "29 Ekim 2026"
    }
],

4: [
    {
        name: "Gizem Ç.",
        initial: "G",
        rating: 5,
        text: "Kumaşı pamuklu ve yumuşacık, üzerindeki duruşu da gayet şık oldu. Ne çok dar ne bol, tam bedenimi aldım oturdu. Paketleme de özenliydi, teşekkürler.",
        date: "25 Ekim 2026"
    },
    {
        name: "Merve K.",
        initial: "M",
        rating: 5,
        text: "Günlük giymek için beyazını almıştım, içi göstermiyor kumaşı tok duruyor. 30 derecede yıkadım herhangi bir çekme ya da solma yapmadı. Tavsiye ederim.",
        date: "28 Ekim 2026"
    },
    {
        name: "Sibel A.",
        initial: "S",
        rating: 4,
        text: "Kargo iki günde elimde oldu. Rengi fotoğraftakinin birebir aynısı canlı geldi. Kumaşı nefes alıyor, yaz-geçiş dönemi için çok ideal.",
        date: "30 Ekim 2026"
    },
    {
        name: "Deniz T.",
        initial: "D",
        rating: 5,
        text: "V yaka kesimi ne çok açık ne kapalı, tam kararında olmuş. Dikişleri falan da temiz dikilmiş, ucuz durmayan kaliteli bir tişört.",
        date: "1 Kasım 2026"
    },
    {
        name: "Esra Y.",
        initial: "E",
        rating: 4,
        text: "Arkadaşıma hediye olarak aldım çok beğendi. Kumaşı terletmeyen cinsten günlük kullanım için gayet başarılı bulduk.",
        date: "2 Kasım 2026"
    }
],
5: [
    {
        name: "Kerem T.",
        initial: "K",
        rating: 5,
        text: "Kanka sweatshirtün kumaşı harbiden kalın ve ağır, içi pamuklu polar olduğu için soğuk havada bayağı sıcak tutuyo. Baskısı da canlı duruyo, tavsiye ederim.",
        date: "25 Ekim 2026"
    },
    {
        name: "Onur K.",
        initial: "O",
        rating: 5,
        text: "30 derecede tersten yıkadım, ne baskısında çatlama oldu ne de rengi soldu. 260 gramajı tam kışlık ideal kalınlıkta, ne ince ne kalitesiz bi ürün çıktı. Eline sağlık satıcının.",
        date: "27 Ekim 2026"
    },
    {
        name: "Melis S.",
        initial: "M",
        rating: 5,
        text: "Üzerindeki sevimli penguen baskısı çok tatlı duruyo. Oversize dursun diye bir beden büyük söyledik, duruşu harika oldu. Kumaşı da yumuşacık pamuklu.",
        date: "29 Ekim 2026"
    },
    {
        name: "Berk A.",
        initial: "B",
        rating: 4,
        text: "Kargo hızlı geldi paketlemesi de fena değildi. Ürünün kumaşı kaliteliyim diye bağırıyo, pamuklu olduğu dokununca hissediliyo. Soğuk günler için birebir.",
        date: "30 Ekim 2026"
    },
    {
        name: "Selin Y.",
        initial: "S",
        rating: 5,
        text: "Hem rahat hem de çok şık bi kapüşonlu olmuş. Kumaşı cildimi hiç rahatsız etmedi, terletmeyen kaliteli bi polar kumaşı var. Gönül rahatlığıyla alabilirsiniz.",
        date: "2 Kasım 2026"
    }
]
   
};
