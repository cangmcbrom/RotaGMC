// =============================================
// RotaGMC - Ana Uygulama JavaScript
// =============================================

// ===== SAYFA YÖNETİMİ =====
let currentPage = 'home';
let currentCategory = '';
let currentSlide = 0;
let slideInterval;
let productQuantity = 1;

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    loadFeaturedProducts();
    loadNewProducts();
    initSlider();
    updateCartCount();
    updateCategoryCounts();
    initMobileMenu();
    initSearch();

    // URL hash ile sayfa yönetimi
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
}

// ===== ROUTING =====
function handleRoute() {
    const hash = window.location.hash.slice(1);
    if (!hash || hash === 'home') {
        showPage('home');
    } else if (hash.startsWith('category/')) {
        const cat = hash.split('/')[1];
        showPage('category', cat);
    } else if (hash.startsWith('product/')) {
        const id = parseInt(hash.split('/')[1]);
        showPage('product', id);
    } else if (hash === 'cart') {
        showPage('cart');
    } else if (hash === 'checkout') {
        showPage('checkout');
    } else if (hash === 'about') {
        showPage('about');
    } else if (hash === 'return') {
        showPage('return');
    } else if (hash === 'privacy') {
        showPage('privacy');
    } else if (hash === 'faq') {
        showPage('faq');
    }
}

function navigate(page, param) {
    if (page === 'home') {
        window.location.hash = 'home';
    } else if (page === 'category') {
        window.location.hash = `category/${param}`;
    } else if (page === 'product') {
        window.location.hash = `product/${param}`;
    } else if (page === 'cart') {
        window.location.hash = 'cart';
    } else if (page === 'checkout') {
        window.location.hash = 'checkout';
    } else if (page === 'about') {
        window.location.hash = 'about';
    } else if (page === 'return') {
        window.location.hash = 'return';
    } else if (page === 'privacy') {
        window.location.hash = 'privacy';
    } else if (page === 'faq') {
        window.location.hash = 'faq';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showPage(page, param) {
    currentPage = page;

    // Tüm sayfaları gizle
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));

    if (page === 'home') {
        document.getElementById('homePage').classList.remove('hidden');
    } else if (page === 'category') {
        document.getElementById('categoryPage').classList.remove('hidden');
        loadCategoryProducts(param);
    } else if (page === 'product') {
        document.getElementById('productPage').classList.remove('hidden');
        loadProductDetail(param);
    } else if (page === 'cart') {
        document.getElementById('cartPage').classList.remove('hidden');
        renderCart();
    } else if (page === 'checkout') {
        document.getElementById('checkoutPage').classList.remove('hidden');
        renderCheckout();
    } else if (page === 'about') {
        document.getElementById('aboutPage').classList.remove('hidden');
    } else if (page === 'return') {
        document.getElementById('returnPage').classList.remove('hidden');
    } else if (page === 'privacy') {
        document.getElementById('privacyPage').classList.remove('hidden');
    } else if (page === 'faq') {
        document.getElementById('faqPage').classList.remove('hidden');
    }

    // Mobil alt menü aktif durumu güncelle
    updateMobileNav(page);

    // Sepet ile inline seçicileri senkronla
    if (page === 'home' || page === 'category') {
        setTimeout(() => syncAllInlineSelectors(), 50);
    }
}

// ===== SLIDER =====
function initSlider() {
    // Slider ürünleri: featured + stok tükenen + indirimli
    const lowStock = products.filter(p => p.stock && p.stock <= 5 && !p.featured);
    const deals = products.filter(p => p.oldPrice && !p.featured && !(p.stock && p.stock <= 5));
    const featured = products.filter(p => p.featured);

    const sliderProducts = [];

    // Stok tükenenleri ekle
    lowStock.forEach(p => {
        sliderProducts.push({ ...p, sliderBadge: '🔥 Stok Tükeniyor!' });
    });

    // Fırsat ürünlerini ekle
    deals.forEach(p => {
        const discount = Math.round((1 - p.price / p.oldPrice) * 100);
        sliderProducts.push({ ...p, sliderBadge: `🏷️ Fırsat! %${discount} İndirim` });
    });

    // Featured ürünleri ekle
    featured.forEach(p => {
        sliderProducts.push({ ...p, sliderBadge: p.badge || 'Öne Çıkan' });
    });

    const track = document.getElementById('sliderTrack');
    const dots = document.getElementById('sliderDots');

    track.innerHTML = '';
    dots.innerHTML = '';

    sliderProducts.forEach((product, index) => {
        const slide = document.createElement('div');
        slide.className = 'slider-slide';
        slide.innerHTML = `
            <div class="slider-content">
                <span class="slider-badge">${product.sliderBadge}</span>
                <h2>${product.name}</h2>
                <p>${product.description.substring(0, 100)}...</p>
                ${product.oldPrice ? `<p style="font-size:14px;opacity:0.9"><del style="opacity:0.6">${formatPrice(product.oldPrice)}</del> → <strong style="font-size:18px">${formatPrice(product.price)}</strong></p>` : ''}
                <a href="javascript:void(0)" class="slider-cta" onclick="navigate('product', ${product.id})">
                    Ürünü İncele
                    <span class="material-icons-outlined">arrow_forward</span>
                </a>
            </div>
            <div class="slider-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
        `;
        track.appendChild(slide);

        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        dots.appendChild(dot);
    });

    startSlideInterval();
}

function getSliderProducts() {
    const lowStock = products.filter(p => p.stock && p.stock <= 5 && !p.featured);
    const deals = products.filter(p => p.oldPrice && !p.featured && !(p.stock && p.stock <= 5));
    const featured = products.filter(p => p.featured);
    return [...lowStock, ...deals, ...featured];
}

function startSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => slideHero(1), 4000);
}

function slideHero(direction) {
    const sliderProducts = getSliderProducts();
    currentSlide += direction;

    if (currentSlide >= sliderProducts.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = sliderProducts.length - 1;

    updateSlider();
    startSlideInterval();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
    startSlideInterval();
}

function updateSlider() {
    const track = document.getElementById('sliderTrack');
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// ===== ÜRÜN KARTLARI =====
function createProductCard(product) {
    const isOutOfStock = product.stock !== undefined && product.stock <= 0;
    const catLabel = product.category === 'telefon' ? 'Telefon Aksesuarı' : product.category === 'araba' ? 'Araba Aksesuarı' : product.category === 'giyim' ? 'Giyim' : 'Ürün';

    let actionsHTML = '';
    if (isOutOfStock) {
        actionsHTML = `
            <div class="product-card-actions" onclick="event.stopPropagation()">
                <button class="btn-notify" onclick="notifyWhenAvailable(${product.id}); event.stopPropagation();" id="notifyBtn_${product.id}">
                    <span class="material-icons-outlined">notifications_active</span>
                    Gelince Haber Ver
                </button>
            </div>`;
    } else {
        actionsHTML = `
            <div class="product-card-actions" onclick="event.stopPropagation()">
                <div id="cartAction_${product.id}" class="cart-action-wrapper" style="flex:1;display:flex;">
                    <button class="btn-add-cart" onclick="onAddToCartClick(${product.id}); event.stopPropagation();" id="addBtn_${product.id}">
                        <span class="material-icons-outlined" style="font-size:18px">add_shopping_cart</span>
                        Sepete Ekle
                    </button>
                </div>
                <button class="btn-buy-now" onclick="buyNow(${product.id}); event.stopPropagation();">
                    Satın Al
                </button>
            </div>`;
    }

    return `
        <div class="product-card ${isOutOfStock ? 'out-of-stock' : ''}" onclick="navigate('product', ${product.id})">
            <div class="product-card-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge && !isOutOfStock ? `<span class="product-badge">${product.badge}</span>` : ''}
                ${!isOutOfStock && product.stock && product.stock <= 5 ? `<span class="stock-warning"><span class="material-icons-outlined">warning</span> Stok Tükeniyor!</span>` : ''}
                ${isOutOfStock ? `<span class="out-of-stock-label">Stokta Kalmadı<br><small>Stok takibi için tıklayın</small></span>` : ''}
            </div>
            <div class="product-card-body">
                <span class="product-card-category">${catLabel}</span>
                <h3 class="product-card-title">${product.name}</h3>
                <div class="product-card-price">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                </div>
                ${product.rating ? `
                <div class="star-rating">
                    <div class="stars">${renderStars(product.rating)}</div>
                    <span class="rating-text">${product.rating} (${product.reviewCount})</span>
                </div>` : ''}
            </div>
            ${actionsHTML}
        </div>
    `;
}

function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    const featured = products.filter(p => p.featured);
    container.innerHTML = featured.map(createProductCard).join('');
}

function loadNewProducts() {
    const container = document.getElementById('newProducts');
    // Son 4 ürünü göster
    const recent = products.slice(-4);
    container.innerHTML = recent.map(createProductCard).join('');
}

// ===== KATEGORİ SAYFASI =====
function loadCategoryProducts(category) {
    currentCategory = category;

    const titleEl = document.getElementById('categoryTitle');
    const breadcrumb = document.getElementById('breadcrumb');

    if (category === 'telefon') {
        titleEl.textContent = 'Telefon Aksesuarları';
        breadcrumb.innerHTML = `<a href="#" onclick="navigate('home')">Ana Sayfa</a> <span class="separator">/</span> <span class="current">Telefon Aksesuarları</span>`;
    } else if (category === 'araba') {
        titleEl.textContent = 'Araba Aksesuarları';
        breadcrumb.innerHTML = `<a href="#" onclick="navigate('home')">Ana Sayfa</a> <span class="separator">/</span> <span class="current">Araba Aksesuarları</span>`;
    } else if (category === 'giyim') {
        titleEl.textContent = 'Giyim';
        breadcrumb.innerHTML = `<a href="#" onclick="navigate('home')">Ana Sayfa</a> <span class="separator">/</span> <span class="current">Giyim</span>`;
    } else {
        titleEl.textContent = 'Tüm Ürünler';
        breadcrumb.innerHTML = `<a href="#" onclick="navigate('home')">Ana Sayfa</a> <span class="separator">/</span> <span class="current">Tüm Ürünler</span>`;
    }

    applySorting();
}

function applySorting() {
    const sortValue = document.getElementById('sortSelect').value;
    let filtered;

    if (currentCategory === 'tumu' || !currentCategory) {
        filtered = [...products];
    } else {
        filtered = products.filter(p => p.category === currentCategory);
    }

    switch (sortValue) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filtered.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
            break;
    }

    const container = document.getElementById('categoryProducts');
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#9e9e9e;padding:40px;">Bu kategoride ürün bulunamadı.</p>';
    } else {
        container.innerHTML = filtered.map(createProductCard).join('');
    }
}

// ===== ÜRÜN DETAY =====
let gallerySlide = 0;

function loadProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        document.getElementById('productDetail').innerHTML = '<p>Ürün bulunamadı.</p>';
        return;
    }

    productQuantity = 1;
    gallerySlide = 0;

    const breadcrumb = document.getElementById('productBreadcrumb');
    const catName = product.category === 'telefon' ? 'Telefon Aksesuarları' : product.category === 'araba' ? 'Araba Aksesuarları' : product.category === 'giyim' ? 'Giyim' : 'Ürünler';
    breadcrumb.innerHTML = `
        <a href="javascript:void(0)" onclick="navigate('home')">Ana Sayfa</a>
        <span class="separator">/</span>
        <a href="javascript:void(0)" onclick="navigate('category', '${product.category}')">${catName}</a>
        <span class="separator">/</span>
        <span class="current">${product.name}</span>
    `;

    const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
    const galleryItems = [];
    const maxStock = product.stock || 99;

    // Video varsa ilk sıraya ekle
    if (product.video) {
        galleryItems.push({ type: 'video', src: product.video });
    }
    // Görselleri ekle
    (product.images || [product.image]).forEach(img => {
        galleryItems.push({ type: 'image', src: img });
    });

    const galleryHTML = galleryItems.map((item, i) => {
        if (item.type === 'video') {
            return `<div class="gallery-slide"><video src="${item.src}" controls playsinline preload="metadata"></video></div>`;
        }
        return `<div class="gallery-slide"><img src="${item.src}" alt="${product.name}"></div>`;
    }).join('');

    const dotsHTML = galleryItems.map((item, i) =>
        `<button class="gallery-dot ${i === 0 ? 'active' : ''} ${item.type === 'video' ? 'video-dot' : ''}" onclick="goToGallerySlide(${i})"></button>`
    ).join('');

    const thumbsHTML = galleryItems.map((item, i) => {
        if (item.type === 'video') {
            return `<div class="gallery-thumb video-thumb ${i === 0 ? 'active' : ''}" onclick="goToGallerySlide(${i})"><img src="${(product.images || [product.image])[0]}" alt="Video"></div>`;
        }
        return `<div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="goToGallerySlide(${i})"><img src="${item.src}" alt="${product.name}"></div>`;
    }).join('');

    // Varyasyon HTML'leri (sadece tanımlıysa)
    const hasColors = product.variants && product.variants.colors && product.variants.colors.length > 0;
    const hasSizes = product.variants && product.variants.sizes && product.variants.sizes.length > 0;
    const hasBulk = product.bulkPricing && product.bulkPricing.length > 0;

    let colorHTML = '';
    if (hasColors) {
        const firstColor = product.variants.colors[0];
        colorHTML = `
        <div class="variant-section">
            <div class="variant-label">Renk: <span class="selected-name" id="selectedColorName">${firstColor.name}</span></div>
            <div class="color-swatches">
                ${product.variants.colors.map((c, i) => `
                    <button class="color-swatch ${i === 0 ? 'active' : ''}" style="background:${c.code}" title="${c.name}" onclick="selectColor(${product.id}, ${i})" data-index="${i}"></button>
                `).join('')}
            </div>
        </div>`;
    }

    let sizeHTML = '';
    if (hasSizes) {
        sizeHTML = `
        <div class="variant-section">
            <div class="variant-label">Beden: <span class="selected-name" id="selectedSizeName">${product.variants.sizes[0].name}</span></div>
            <div class="size-options">
                ${product.variants.sizes.map((s, i) => `
                    <button class="size-btn ${i === 0 ? 'active' : ''}" onclick="selectSize(${product.id}, ${i})" data-index="${i}">${s.name}</button>
                `).join('')}
            </div>
        </div>`;
    }

    let bulkHTML = '';
    if (hasBulk) {
        bulkHTML = `
        <div class="bulk-pricing">
            <div class="bulk-pricing-title"><span class="material-icons-outlined" style="font-size:16px;color:#4caf50;">sell</span> Toptan Fiyatlandırma</div>
            <div class="bulk-tiers">
                ${product.bulkPricing.map(t => `
                    <div class="bulk-tier" data-min="${t.minQty}">
                        <span class="tier-qty">${t.minQty}+ adet</span>
                        <span>%${t.discountPercent} indirim</span>
                    </div>
                `).join('')}
            </div>
        </div>`;
    }

    document.getElementById('productDetail').innerHTML = `
        <div class="product-gallery">
            <div class="gallery-slider" id="gallerySlider">
                <div class="gallery-track" id="galleryTrack">
                    ${galleryHTML}
                </div>
                ${galleryItems.length > 1 ? `
                <button class="gallery-btn gallery-prev" onclick="slideGallery(-1)"><span class="material-icons-outlined">chevron_left</span></button>
                <button class="gallery-btn gallery-next" onclick="slideGallery(1)"><span class="material-icons-outlined">chevron_right</span></button>
                <div class="gallery-dots">${dotsHTML}</div>
                ` : ''}
            </div>
            ${galleryItems.length > 1 ? `<div class="gallery-thumbs">${thumbsHTML}</div>` : ''}
        </div>
        <div class="product-info">
            <span class="product-category-tag">${catName}</span>
            <h1>${product.name}</h1>
            ${product.rating ? `
            <div class="star-rating">
                <div class="stars">${renderStars(product.rating)}</div>
                <span class="rating-text">${product.rating} / 5 (${product.reviewCount} değerlendirme)</span>
            </div>` : ''}
            <div class="product-price-section" id="productPriceSection">
                <span class="current-price" id="detailCurrentPrice">${formatPrice(product.price)}</span>
                ${product.oldPrice ? `<span class="old-price" id="detailOldPrice">${formatPrice(product.oldPrice)}</span>` : ''}
                ${discount > 0 ? `<span class="product-badge" style="position:static">%${discount} İndirim</span>` : ''}
            </div>
            ${product.stock !== undefined && product.stock <= 0 ? `
            <p style="color:var(--accent);font-weight:700;font-size:15px;display:flex;align-items:center;gap:6px;background:#fff3f3;padding:10px 14px;border-radius:8px;border:1px solid #ffcdd2;">
                <span class="material-icons-outlined" style="font-size:20px">remove_shopping_cart</span> Bu ürün şu an stokta bulunmamaktadır
            </p>` : ''}
            ${product.stock && product.stock > 0 && product.stock <= 5 ? `<p style="color:var(--accent);font-weight:600;font-size:13px;display:flex;align-items:center;gap:4px;"><span class="material-icons-outlined" style="font-size:16px">warning</span> Son ${product.stock} adet kaldı!</p>` : ''}
            ${colorHTML}
            ${sizeHTML}
            ${bulkHTML}
            ${product.stock === undefined || product.stock > 0 ? `
            <div class="quantity-selector">
                <button class="qty-btn" onclick="changeQuantity(-1)">−</button>
                <span class="qty-value" id="qtyValue">1</span>
                <button class="qty-btn" onclick="changeQuantity(1, ${maxStock})">+</button>
            </div>
            <div class="product-detail-actions">
                <button class="btn-add-cart" onclick="addToCart(${product.id}, productQuantity)">
                    <span class="material-icons-outlined" style="font-size:20px">add_shopping_cart</span>
                    Sepete Ekle
                </button>
                <button class="btn-buy-now" onclick="buyNow(${product.id}, productQuantity)">
                    Hemen Satın Al
                </button>
            </div>` : `
            <div class="product-detail-actions">
                <button class="btn-notify" onclick="notifyWhenAvailable(${product.id})" id="notifyBtn_${product.id}" style="width:100%;">
                    <span class="material-icons-outlined">notifications_active</span>
                    Gelince Haber Ver
                </button>
            </div>`}
            <div class="product-desc-section">
                <h3>Ürün Açıklaması</h3>
                <p class="product-desc">${product.description}</p>
                ${product.features ? `
                    <ul class="product-features">
                        ${product.features.map(f => `
                            <li>
                                <span class="material-icons-outlined">check_circle</span>
                                ${f}
                            </li>
                        `).join('')}
                    </ul>
                ` : ''}
            </div>
            ${renderProductReviews(product.id)}
        </div>
    `;

    // Galeri swipe desteği
    initGallerySwipe();

    // Varyasyon state kaydet
    window._currentVariant = { colorIndex: 0, sizeIndex: 0, productId: product.id };
}

function changeQuantity(delta, maxStock) {
    const max = maxStock || 99;
    productQuantity = Math.max(1, Math.min(max, productQuantity + delta));
    document.getElementById('qtyValue').textContent = productQuantity;
    if (productQuantity >= max) {
        showToast(`Bu üründen en fazla ${max} adet ekleyebilirsiniz.`);
    }
}

// Galeri Slider fonksiyonları
function slideGallery(direction) {
    const track = document.getElementById('galleryTrack');
    if (!track) return;
    const totalSlides = track.children.length;
    gallerySlide += direction;
    if (gallerySlide >= totalSlides) gallerySlide = 0;
    if (gallerySlide < 0) gallerySlide = totalSlides - 1;
    updateGallery();
}

function goToGallerySlide(index) {
    gallerySlide = index;
    updateGallery();
}

function updateGallery() {
    const track = document.getElementById('galleryTrack');
    if (!track) return;
    track.style.transform = `translateX(-${gallerySlide * 100}%)`;

    document.querySelectorAll('.gallery-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === gallerySlide);
    });
    document.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === gallerySlide);
    });
}

function initGallerySwipe() {
    const slider = document.getElementById('gallerySlider');
    if (!slider) return;
    let startX = 0;
    let diff = 0;

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    slider.addEventListener('touchmove', (e) => {
        diff = e.touches[0].clientX - startX;
    }, { passive: true });

    slider.addEventListener('touchend', () => {
        if (Math.abs(diff) > 50) {
            slideGallery(diff > 0 ? -1 : 1);
        }
        diff = 0;
    });
}

// ===== SEPET YÖNETİMİ =====
function getCart() {
    const cart = localStorage.getItem('rotagmc_cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem('rotagmc_cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = total;
    // Mobil alt menü sepet sayısı
    const mobCount = document.getElementById('mobCartCount');
    if (mobCount) {
        mobCount.textContent = total;
        mobCount.style.display = total > 0 ? 'flex' : 'none';
    }
    // Kargo progress bar güncelle
    updateKargoBar();
}

const KARGO_FREE_LIMIT = 1500;
const KARGO_UCRETI = 100;

function getCartTotal() {
    const cart = getCart();
    let total = 0;
    cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        if (product) total += product.price * item.quantity;
    });
    return total;
}

function updateKargoBar() {
    const total = getCartTotal();
    const bar = document.getElementById('kargoBar');
    const progress = document.getElementById('kargoProgress');
    const text = document.getElementById('kargoText');

    if (!bar || !progress || !text) return;

    if (total <= 0) {
        progress.style.width = '0%';
        text.innerHTML = '🚚 <strong>1.500 ₺</strong> ve üzeri siparişlerde <strong>kargo ücretsiz!</strong>';
        bar.classList.remove('kargo-free');
        return;
    }

    const pct = Math.min(100, (total / KARGO_FREE_LIMIT) * 100);
    progress.style.width = pct + '%';

    if (total >= KARGO_FREE_LIMIT) {
        text.innerHTML = '✅ Tebrikler! <strong>Kargo ücretsiz!</strong>';
        bar.classList.add('kargo-free');
    } else {
        const kalan = KARGO_FREE_LIMIT - total;
        text.innerHTML = `🚚 Ücretsiz kargoya <strong>${formatPrice(kalan)}</strong> kaldı!`;
        bar.classList.remove('kargo-free');
    }
}

function addToCart(productId, qty = 1) {
    const cart = getCart();
    const existing = cart.find(item => item.productId === productId);

    if (existing) {
        existing.quantity += qty;
    } else {
        cart.push({ productId, quantity: qty });
    }

    saveCart(cart);
    showToast('Ürün sepete eklendi!');
}

function buyNow(productId, qty = 1) {
    addToCart(productId, qty);
    navigate('checkout');
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.productId !== productId);
    saveCart(cart);
    resetInlineSelector(productId);
    renderCart();
}

// Sepetten silinen ürünün inline seçicisini sıfırla
function resetInlineSelector(productId) {
    const wrapper = document.getElementById(`cartAction_${productId}`);
    if (wrapper && wrapper.querySelector('.inline-qty-selector')) {
        wrapper.innerHTML = `
            <button class="btn-add-cart" onclick="onAddToCartClick(${productId}); event.stopPropagation();" id="addBtn_${productId}">
                <span class="material-icons-outlined" style="font-size:18px">add_shopping_cart</span>
                Sepete Ekle
            </button>
        `;
    }
}

// Sayfadaki tüm inline seçicileri sepet ile senkronla
function syncAllInlineSelectors() {
    const cart = getCart();
    document.querySelectorAll('.cart-action-wrapper').forEach(wrapper => {
        const id = wrapper.id.replace('cartAction_', '');
        const productId = parseInt(id);
        const cartItem = cart.find(i => i.productId === productId);

        if (!cartItem && wrapper.querySelector('.inline-qty-selector')) {
            // Sepette yok ama seçici açık - sıfırla
            wrapper.innerHTML = `
                <button class="btn-add-cart" onclick="onAddToCartClick(${productId}); event.stopPropagation();" id="addBtn_${productId}">
                    <span class="material-icons-outlined" style="font-size:18px">add_shopping_cart</span>
                    Sepete Ekle
                </button>
            `;
        } else if (cartItem && wrapper.querySelector('.inline-qty-selector')) {
            // Sepette var - sayıyı güncelle
            const countEl = document.getElementById(`iqCount_${productId}`);
            if (countEl) countEl.textContent = cartItem.quantity;
        }
    });
}

function updateCartItemQty(productId, delta) {
    const cart = getCart();
    const item = cart.find(i => i.productId === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
            return;
        }
        saveCart(cart);
        renderCart();
    }
}

function renderCart() {
    const cart = getCart();
    const container = document.getElementById('cartContent');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <span class="material-icons-outlined">shopping_cart</span>
                <h3>Sepetiniz Boş</h3>
                <p>Henüz sepetinize ürün eklemediniz.</p>
                <button class="cart-empty-btn" onclick="navigate('home')">
                    <span class="material-icons-outlined">storefront</span>
                    Alışverişe Başla
                </button>
            </div>
        `;
        return;
    }

    let totalPrice = 0;

    const itemsHtml = cart.map(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        if (!product) return '';
        const itemTotal = product.price * cartItem.quantity;
        totalPrice += itemTotal;

        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="cart-item-info">
                    <h4>${product.name}</h4>
                    <span class="cart-item-price">${formatPrice(product.price)}</span>
                </div>
                <div class="cart-item-qty">
                    <button onclick="updateCartItemQty(${product.id}, -1)">−</button>
                    <span>${cartItem.quantity}</span>
                    <button onclick="updateCartItemQty(${product.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${product.id})">
                    <span class="material-icons-outlined">delete</span>
                </button>
            </div>
        `;
    }).join('');

    const kargoFree = totalPrice >= KARGO_FREE_LIMIT;
    const kargoUcreti = kargoFree ? 0 : KARGO_UCRETI;
    const genelToplam = totalPrice + kargoUcreti;
    const kalanKargo = KARGO_FREE_LIMIT - totalPrice;

    container.innerHTML = `
        <div class="cart-items">${itemsHtml}</div>
        ${!kargoFree && totalPrice > 0 ? `
        <div class="cart-kargo-info needs-more">
            <span class="material-icons-outlined">local_shipping</span>
            Ücretsiz kargoya <strong>${formatPrice(kalanKargo)}</strong> kaldı!
        </div>` : ''}
        ${kargoFree ? `
        <div class="cart-kargo-info">
            <span class="material-icons-outlined">check_circle</span>
            Tebrikler! Siparişinize <strong>ücretsiz kargo</strong> uygulandı.
        </div>` : ''}
        ${getCouponHTML('cartCouponInput')}
        <div class="cart-summary">
            <div class="cart-summary-row">
                <span>Ürünler (${cart.reduce((s, i) => s + i.quantity, 0)} adet)</span>
                <span>${formatPrice(totalPrice)}</span>
            </div>
            ${appliedCoupon ? `<div class="cart-summary-row coupon-discount-row">
                <span><span class="material-icons-outlined" style="font-size:16px;vertical-align:middle;color:#4caf50">confirmation_number</span> Kupon (${appliedCoupon.code})</span>
                <span style="color:#4caf50;font-weight:700">-${formatPrice(appliedCoupon.discountAmount)}</span>
            </div>` : ''}
            <div class="cart-summary-row kargo">
                <span>Kargo</span>
                <span>${kargoFree ? '<span class="kargo-free-tag">Ücretsiz</span>' : formatPrice(KARGO_UCRETI)}</span>
            </div>
            <div class="cart-summary-divider"></div>
            <div class="cart-summary-row total">
                <span>Toplam</span>
                <span>${formatPrice(genelToplam - (appliedCoupon ? appliedCoupon.discountAmount : 0))}</span>
            </div>
            <div class="cart-summary-note">Fiyatlara KDV dahildir.</div>
            <div class="cart-summary-note" style="margin-top:4px;color:#2e7d32;font-size:12px;">🎁 Tüm siparişleriniz darbelere korumalı özel kutusunda gönderilir.</div>
            <div class="cart-actions">
                <button class="btn-continue-shopping" onclick="navigate('home')">Alışverişe Devam</button>
                <button class="btn-checkout" onclick="navigate('checkout')">Siparişi Tamamla</button>
            </div>
        </div>
    `;
}

// ===== CHECKOUT (SİPARİŞ) =====
function renderCheckout() {
    const cart = getCart();
    if (cart.length === 0) {
        navigate('cart');
        return;
    }

    // Sipariş özetini doldur
    const checkoutItems = document.getElementById('checkoutItems');
    let total = 0;

    checkoutItems.innerHTML = cart.map(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        if (!product) return '';
        const itemTotal = product.price * cartItem.quantity;
        total += itemTotal;

        return `
            <div class="checkout-item">
                <span class="checkout-item-name">${product.name}</span>
                <span class="checkout-item-qty">x${cartItem.quantity}</span>
                <span class="checkout-item-price">${formatPrice(itemTotal)}</span>
            </div>
        `;
    }).join('');

    const kargoFree = total >= KARGO_FREE_LIMIT;
    const kargo = kargoFree ? 0 : KARGO_UCRETI;
    const couponDiscount = appliedCoupon ? appliedCoupon.discountAmount : 0;
    const genelToplam = total + kargo - couponDiscount;

    // Kargo satırı ekle
    checkoutItems.innerHTML += `
        <div class="checkout-item" style="border-top:1px solid var(--gray-200);padding-top:10px;margin-top:6px;">
            <span class="checkout-item-name">Kargo</span>
            <span class="checkout-item-qty"></span>
            <span class="checkout-item-price" style="${kargoFree ? 'color:#4caf50;' : ''}">${kargoFree ? 'Ücretsiz' : formatPrice(KARGO_UCRETI)}</span>
        </div>
    `;

    // Kupon satırı
    if (appliedCoupon) {
        checkoutItems.innerHTML += `
            <div class="checkout-item" style="color:#4caf50;font-weight:600;">
                <span class="checkout-item-name"><span class="material-icons-outlined" style="font-size:16px;vertical-align:middle">confirmation_number</span> Kupon (${appliedCoupon.code})</span>
                <span class="checkout-item-qty"></span>
                <span class="checkout-item-price" style="color:#4caf50">-${formatPrice(couponDiscount)}</span>
            </div>
        `;
    }

    document.getElementById('checkoutTotal').textContent = formatPrice(genelToplam);

    // Kupon kutusu ekle (checkout-total'ın altına)
    const totalEl = document.getElementById('checkoutTotal').parentElement;
    if (totalEl && !document.getElementById('checkoutCouponBox')) {
        totalEl.insertAdjacentHTML('afterend', '<div id="checkoutCouponBox">' + getCouponHTML('checkoutCouponInput') + '</div>');
    }

    // KDV notu
    if (totalEl && !document.getElementById('checkoutKdvNote')) {
        var couponBox = document.getElementById('checkoutCouponBox');
        var afterEl = couponBox || totalEl;
        afterEl.insertAdjacentHTML('afterend', '<p id="checkoutKdvNote" style="text-align:center;font-size:11px;color:#9e9e9e;margin-top:6px;">Fiyatlara KDV ve kargo dahildir.</p>');
    }

    // İl listesini yükle
    loadProvinces();
}

// ===== ADRES SİSTEMİ =====
function loadProvinces() {
    const select = document.getElementById('province');
    select.innerHTML = '<option value="">İl Seçiniz</option>';

    const provinces = Object.keys(turkeyLocations).sort((a, b) => a.localeCompare(b, 'tr'));
    provinces.forEach(province => {
        const option = document.createElement('option');
        option.value = province;
        option.textContent = province;
        select.appendChild(option);
    });
}

function loadDistricts() {
    const province = document.getElementById('province').value;
    const districtSelect = document.getElementById('district');
    const neighborhoodSelect = document.getElementById('neighborhood');

    districtSelect.innerHTML = '<option value="">İlçe Seçiniz</option>';
    neighborhoodSelect.innerHTML = '<option value="">Önce İlçe Seçiniz</option>';

    if (!province || !turkeyLocations[province]) return;

    const districts = Object.keys(turkeyLocations[province]).sort((a, b) => a.localeCompare(b, 'tr'));
    districts.forEach(district => {
        const option = document.createElement('option');
        option.value = district;
        option.textContent = district;
        districtSelect.appendChild(option);
    });
}

function loadNeighborhoods() {
    const province = document.getElementById('province').value;
    const district = document.getElementById('district').value;
    const neighborhoodSelect = document.getElementById('neighborhood');

    neighborhoodSelect.innerHTML = '<option value="">Mahalle Seçiniz</option>';

    if (!province || !district || !turkeyLocations[province] || !turkeyLocations[province][district]) return;

    const neighborhoods = turkeyLocations[province][district].sort((a, b) => a.localeCompare(b, 'tr'));
    neighborhoods.forEach(n => {
        const option = document.createElement('option');
        option.value = n;
        option.textContent = n;
        neighborhoodSelect.appendChild(option);
    });
}

// ===== WHATSAPP SİPARİŞ =====
function sendWhatsApp() {
    // Form doğrulaması
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const province = document.getElementById('province').value;
    const district = document.getElementById('district').value;
    const neighborhood = document.getElementById('neighborhood').value;
    const addressDetail = document.getElementById('addressDetail').value.trim();

    if (!firstName || !lastName || !phone || !province || !district || !neighborhood || !addressDetail) {
        showToast('Lütfen tüm alanları doldurunuz!');
        return;
    }

    const cart = getCart();
    if (cart.length === 0) {
        showToast('Sepetiniz boş!');
        return;
    }

    // Mesaj oluştur - temiz format
    let lines = [];
    lines.push('--- YENI SIPARIS - RotaGMC ---');
    lines.push('');
    lines.push('SIPARIS DETAYLARI:');

    let total = 0;
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        if (product) {
            const itemTotal = product.price * cartItem.quantity;
            total += itemTotal;
            lines.push('- ' + product.name + ' x' + cartItem.quantity + ' = ' + formatPrice(itemTotal));
        }
    });

    const kargoFree = total >= KARGO_FREE_LIMIT;
    const kargo = kargoFree ? 0 : KARGO_UCRETI;
    const couponDisc = appliedCoupon ? appliedCoupon.discountAmount : 0;
    lines.push('');
    lines.push('Urun Toplami: ' + formatPrice(total));
    lines.push('Kargo: ' + (kargoFree ? 'Ucretsiz' : formatPrice(KARGO_UCRETI)));
    if (appliedCoupon) {
        lines.push('Kupon (' + appliedCoupon.code + '): -' + formatPrice(couponDisc));
    }
    lines.push('GENEL TOPLAM: ' + formatPrice(total + kargo - couponDisc));
    lines.push('');
    lines.push('MUSTERI BILGILERI:');
    lines.push('Isim: ' + firstName + ' ' + lastName);
    lines.push('Telefon: ' + phone);
    lines.push('');
    lines.push('TESLIMAT ADRESI:');
    lines.push(province + ' / ' + district + ' / ' + neighborhood);
    lines.push(addressDetail);
    lines.push('');
    lines.push('--- RotaGMC Web Sitesi ---');

    const message = lines.join('\n');

    // WhatsApp linkini oluştur
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Kupon kullanımını kaydet
    finalizeCouponUsage();

    // Yeni sekmede aç
    window.open(whatsappUrl, '_blank');
}

// ===== ARAMA =====
function initSearch() {
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();

        if (query.length < 2) {
            results.classList.remove('active');
            return;
        }

        const matches = products.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
            results.innerHTML = '<div class="search-result-item"><div class="search-result-info"><h4>Sonuç bulunamadı</h4></div></div>';
        } else {
            results.innerHTML = matches.map(p => `
                <div class="search-result-item" onclick="navigate('product', ${p.id}); closeSearch();">
                    <img src="${p.image}" alt="${p.name}">
                    <div class="search-result-info">
                        <h4>${p.name}</h4>
                        <span>${formatPrice(p.price)}</span>
                    </div>
                </div>
            `).join('');
        }

        results.classList.add('active');
    });

    // Dışarı tıklayınca kapat
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-bar')) {
            results.classList.remove('active');
        }
    });

    // Mobil arama butonu
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    if (mobileSearchBtn) {
        mobileSearchBtn.addEventListener('click', () => {
            const searchBar = document.getElementById('searchBar');
            searchBar.classList.toggle('mobile-active');
            if (searchBar.classList.contains('mobile-active')) {
                searchBar.querySelector('input').focus();
            }
        });
    }
}

function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query.length < 2) return;

    // Arama sonuçlarını kategori sayfasında göster
    currentCategory = '';
    const matches = products.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );

    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById('categoryPage').classList.remove('hidden');
    document.getElementById('categoryTitle').textContent = `"${query}" için sonuçlar`;
    document.getElementById('breadcrumb').innerHTML = `<a href="#" onclick="navigate('home')">Ana Sayfa</a> <span class="separator">/</span> <span class="current">Arama: ${query}</span>`;

    const container = document.getElementById('categoryProducts');
    if (matches.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#9e9e9e;padding:40px;">Aradığınız ürün bulunamadı.</p>';
    } else {
        container.innerHTML = matches.map(createProductCard).join('');
    }

    closeSearch();
}

function closeSearch() {
    document.getElementById('searchResults').classList.remove('active');
    document.getElementById('searchBar').classList.remove('mobile-active');
    document.getElementById('searchInput').value = '';
}

// ===== MOBİL MENÜ =====
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const closeBtn = document.getElementById('closeMenuBtn');
    const overlay = document.getElementById('mobileOverlay');

    menuBtn.addEventListener('click', openMobileMenu);
    closeBtn.addEventListener('click', closeMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);
}

function openMobileMenu() {
    document.getElementById('mobileMenu').classList.add('active');
    document.getElementById('mobileOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
    document.getElementById('mobileOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== TOAST BİLDİRİM =====
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('active');

    setTimeout(() => {
        toast.classList.remove('active');
    }, 2500);
}

// ===== FİYAT FORMATLAMA =====
function formatPrice(price) {
    return price.toLocaleString('tr-TR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) + ' ₺';
}

// ===== YILDIZ PUANLAMA =====
function renderStars(rating) {
    let html = '';
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.3;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        html += '<span class="material-icons-outlined">star</span>';
    }
    if (hasHalf) {
        html += '<span class="material-icons-outlined">star_half</span>';
    }
    for (let i = 0; i < emptyStars; i++) {
        html += '<span class="material-icons-outlined" style="color:#ddd">star_outline</span>';
    }
    return html;
}

// ===== FAQ TOGGLE =====
function toggleFaq(element) {
    // Diğerlerini kapat
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== element) item.classList.remove('active');
    });
    element.classList.toggle('active');
}

// ===== MOBİL ALT MENÜ =====
function updateMobileNav(page) {
    document.querySelectorAll('.mobile-nav-item').forEach(item => {
        item.classList.remove('active');
    });

    const navMap = {
        'home': 'mobNavHome',
        'category': 'mobNavCategory',
        'cart': 'mobNavCart',
        'checkout': 'mobNavCart',
        'faq': 'mobNavFaq',
        'about': 'mobNavFaq',
        'return': 'mobNavFaq',
        'privacy': 'mobNavFaq'
    };

    const navId = navMap[page];
    if (navId) {
        const el = document.getElementById(navId);
        if (el) el.classList.add('active');
    }
}

// ===== SEPETE EKLE - INLINE MİKTAR SEÇİCİ =====
function onAddToCartClick(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Sepete 1 adet ekle
    addToCart(productId, 1);

    // Butonu miktar seçiciye dönüştür
    const wrapper = document.getElementById(`cartAction_${productId}`);
    if (!wrapper) return;

    const cart = getCart();
    const cartItem = cart.find(i => i.productId === productId);
    const currentQty = cartItem ? cartItem.quantity : 1;
    const maxStock = product.stock || 99;

    wrapper.innerHTML = `
        <div class="inline-qty-selector">
            <button class="iq-btn" onclick="inlineQtyChange(${productId}, -1); event.stopPropagation();">−</button>
            <span class="iq-count" id="iqCount_${productId}">${currentQty}</span>
            <button class="iq-btn" onclick="inlineQtyChange(${productId}, 1); event.stopPropagation();">+</button>
        </div>
    `;
}

function inlineQtyChange(productId, delta) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cart = getCart();
    const cartItem = cart.find(i => i.productId === productId);
    if (!cartItem) return;

    const maxStock = product.stock || 99;
    const newQty = cartItem.quantity + delta;

    if (newQty <= 0) {
        // Sil ve butonu geri getir
        removeFromCart(productId);
        const wrapper = document.getElementById(`cartAction_${productId}`);
        if (wrapper) {
            wrapper.innerHTML = `
                <button class="btn-add-cart" onclick="onAddToCartClick(${productId}); event.stopPropagation();" id="addBtn_${productId}">
                    <span class="material-icons-outlined" style="font-size:18px">add_shopping_cart</span>
                    Sepete Ekle
                </button>
            `;
        }
        return;
    }

    if (newQty > maxStock) {
        showToast(`Bu üründen en fazla ${maxStock} adet ekleyebilirsiniz.`);
        return;
    }

    cartItem.quantity = newQty;
    saveCart(cart);

    const countEl = document.getElementById(`iqCount_${productId}`);
    if (countEl) {
        countEl.textContent = newQty;
        // Kısa animasyon
        countEl.style.transform = 'scale(1.3)';
        setTimeout(() => { countEl.style.transform = 'scale(1)'; }, 150);
    }
}


// ===== KATEGORİ ÜRÜN SAYILARI =====
function updateCategoryCounts() {
    const telefonCount = products.filter(p => p.category === 'telefon').length;
    const arabaCount = products.filter(p => p.category === 'araba').length;
    const giyimCount = products.filter(p => p.category === 'giyim').length;

    const telEl = document.getElementById('catCountTelefon');
    const arabaEl = document.getElementById('catCountAraba');
    const giyimEl = document.getElementById('catCountGiyim');

    if (telEl) telEl.textContent = `${telefonCount} ürün`;
    if (arabaEl) arabaEl.textContent = `${arabaCount} ürün`;
    if (giyimEl) giyimEl.textContent = `${giyimCount} ürün`;
}


// ===== GMC DESTEK CHAT ASISTAN =====
let chatOpen = false;
let chatInited = false;

function toggleChat() {
    chatOpen = !chatOpen;
    const widget = document.getElementById('chatWidget');
    const badge = document.getElementById('chatFabBadge');

    if (chatOpen) {
        widget.classList.add('active');
        if (badge) badge.style.display = 'none';
        if (!chatInited) {
            chatInited = true;
            setTimeout(() => {
                addBotMessage('Merhaba! 👋 Ben GMC Destek asistanıyım. Size nasıl yardımcı olabilirim?');
                setTimeout(() => showQuickActions('main'), 400);
            }, 300);
        }
        document.getElementById('chatInput').focus();
    } else {
        widget.classList.remove('active');
    }
}

function addBotMessage(text) {
    const body = document.getElementById('chatBody');
    const msg = document.createElement('div');
    msg.className = 'chat-msg';
    msg.innerHTML = `
        <img src="images/destek-icon.png" alt="GMC" class="chat-msg-avatar">
        <div class="chat-msg-bubble">${text}</div>
    `;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
}

function addUserMessage(text) {
    const body = document.getElementById('chatBody');
    const msg = document.createElement('div');
    msg.className = 'chat-msg user';
    msg.innerHTML = `<div class="chat-msg-bubble">${text}</div>`;
    body.appendChild(msg);
    body.scrollTop = body.scrollHeight;
}

function showQuickActions(type) {
    const body = document.getElementById('chatBody');
    const div = document.createElement('div');
    div.className = 'chat-quick-actions';

    const actions = {
        main: [
            ['📦 Sipariş Nasıl Verilir?', 'siparis'],
            ['🔄 İade & Değişim', 'iade'],
            ['🚚 Kargo Bilgisi', 'kargo'],
            ['📱 Telefon Aksesuarları', 'telefon'],
            ['🚗 Araba Aksesuarları', 'araba'],
            ['👕 Giyim', 'giyim'],
            ['🔒 Gizlilik Politikası', 'gizlilik'],
            ['📞 İletişim', 'iletisim'],
            ['❓ Sıkça Sorulan Sorular', 'sss']
        ],
        iade_menu: [
            ['📋 İade Koşulları', 'iade_kosul'],
            ['🔄 Değişim Süreci', 'degisim'],
            ['⚠️ İade Edilemeyenler', 'iade_edilemez'],
            ['📞 İade Başvurusu Yap', 'iade_basvuru'],
            ['🔙 Ana Menü', 'menu']
        ],
        sss_menu: [
            ['💳 Ödeme Nasıl Yapılır?', 'odeme'],
            ['📦 Kargo Süresi Ne Kadar?', 'kargo'],
            ['🔄 İade Edebilir miyim?', 'iade'],
            ['✅ Ürünler Orijinal mi?', 'orijinal'],
            ['📍 Sipariş Takibi', 'takip'],
            ['🔙 Ana Menü', 'menu']
        ],
        back: [
            ['🔙 Ana Menü', 'menu'],
            ['📞 İletişim', 'iletisim']
        ]
    };

    const btns = actions[type] || actions.main;
    btns.forEach(([label, action]) => {
        const btn = document.createElement('button');
        btn.className = 'chat-quick-btn';
        btn.textContent = label;
        btn.onclick = () => handleQuickAction(action);
        div.appendChild(btn);
    });

    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
}

function handleQuickAction(action) {
    const responses = {
        siparis: {
            msg: '📦 <strong>Sipariş vermek çok kolay!</strong><br><br>1️⃣ Beğendiğiniz ürünü <span class="chat-link" onclick="navigate(\'category\',\'tumu\');toggleChat()">ürünlerimiz</span> arasından seçin<br>2️⃣ "Sepete Ekle" butonuna tıklayın<br>3️⃣ Sepetinizi kontrol edip "Siparişi Tamamla" deyin<br>4️⃣ Bilgilerinizi doldurun<br>5️⃣ WhatsApp ile siparişinizi gönderin<br><br>Ekibimiz hemen sizinle iletişime geçecektir! 😊',
            next: 'back'
        },
        iade: {
            msg: '🔄 <strong>İade & Değişim hakkında bilgi almak isterseniz aşağıdan seçim yapabilirsiniz.</strong><br><br>Detaylı bilgi için <span class="chat-link" onclick="navigate(\'return\');toggleChat()">İade Politikası</span> sayfamızı da ziyaret edebilirsiniz.',
            next: 'iade_menu'
        },
        iade_kosul: {
            msg: '📋 <strong>İade Koşulları:</strong><br><br>✅ Teslim tarihinden itibaren <strong>7 iş günü</strong> içinde iade talebi<br>✅ Ürün kullanılmamış ve orijinal ambalajında olmalı<br>✅ Tüm etiket, bant ve aksesuarlar eksiksiz olmalı<br>✅ Fatura iade paketine eklenmeli<br>✅ Önce WhatsApp\'tan onay alınmalı<br>✅ İade kargo ücreti müşteriye aittir<br><br>Sorularınız için her zaman buradayız! 🤝',
            next: 'back'
        },
        degisim: {
            msg: '🔄 <strong>Değişim Süreci:</strong><br><br>1️⃣ WhatsApp üzerinden bize ulaşın<br>2️⃣ Değiştirmek istediğiniz ürünü belirtin<br>3️⃣ Yeni ürününüz <strong>3-5 iş günü</strong> içinde kapınızda!<br><br>Değişim kargo ücreti tarafımızca karşılanır. 📦',
            next: 'back'
        },
        iade_edilemez: {
            msg: '⚠️ <strong>İade Edilemeyen Ürünler:</strong><br><br>❌ Ambalajı açılmış hijyenik ürünler<br>❌ Kişiye özel üretilen ürünler<br>❌ Kullanım sonrası hasar görmüş ürünler<br><br>Bunun dışındaki tüm ürünlerimiz iade edilebilir! ✅',
            next: 'back'
        },
        iade_basvuru: {
            msg: '📞 <strong>İade başvurusu için:</strong><br><br>📱 <a href="https://wa.me/' + WHATSAPP_NUMBER + '" target="_blank" class="chat-link">WhatsApp ile yazın</a><br>📧 <a href="mailto:rotagmcdestek@gmail.com" class="chat-link">rotagmcdestek@gmail.com</a><br>📞 <a href="tel:+905330912450" class="chat-link">+90 533 091 24 50</a><br><br>Sipariş numaranız ve iade sebebinizle birlikte bize ulaşın. En kısa sürede dönüş yapacağız! ⚡',
            next: 'back'
        },
        kargo: {
            msg: '🚚 <strong>Kargo Bilgisi:</strong><br><br>📦 Siparişler <strong>1-3 iş günü</strong> içinde PTT Kargo ile kargoya verilir<br>🕐 Teslimat süresi: bölgenize göre <strong>1-4 iş günü</strong><br>💰 Kargo ücreti: sabit <strong>100 ₺</strong><br>🎉 <strong>1.500 ₺ ve üzeri</strong> siparişlerde <strong>kargo ücretsiz!</strong><br><br>Kargo takip numarası WhatsApp\'tan iletilir. 📱',
            next: 'back'
        },
        telefon: {
            msg: '📱 <strong>Telefon Aksesuarları</strong> kategorimizde birçok kaliteli ürün bulunuyor!<br><br>Kılıf, şarj cihazı, kablo, kulaklık, ekran koruyucu ve daha fazlası...<br><br>👉 <span class="chat-link" onclick="navigate(\'category\',\'telefon\');toggleChat()">Telefon Aksesuarlarına Göz At</span>',
            next: 'back'
        },
        araba: {
            msg: '🚗 <strong>Araba Aksesuarları</strong> kategorimizi keşfedin!<br><br>Telefon tutucusu, araç kokusu, organizer, LED aydınlatma ve daha fazlası...<br><br>👉 <span class="chat-link" onclick="navigate(\'category\',\'araba\');toggleChat()">Araba Aksesuarlarına Göz At</span>',
            next: 'back'
        },
        giyim: {
            msg: '👕 <strong>Giyim</strong> kategorimize göz atın!<br><br>Tişört, sweatshirt, pantolon ve daha fazlası...<br><br>👉 <span class="chat-link" onclick="navigate(\'category\',\'giyim\');toggleChat()">Giyim Ürünlerine Göz At</span>',
            next: 'back'
        },
        gizlilik: {
            msg: '🔒 <strong>Gizlilik ve Güvenlik:</strong><br><br>✅ Kişisel verileriniz üçüncü şahıslarla <strong>paylaşılmaz</strong><br>✅ Yalnızca sipariş işlemi için kullanılır<br>✅ Sepet bilgileri sadece sizin cihazınızda saklanır<br>✅ Ödeme bilgileri sitemizde tutulmaz<br><br>Detaylar için: <span class="chat-link" onclick="navigate(\'privacy\');toggleChat()">Gizlilik Politikası</span>',
            next: 'back'
        },
        iletisim: {
            msg: '📞 <strong>Bize Ulaşın:</strong><br><br>📱 <a href="https://wa.me/' + WHATSAPP_NUMBER + '" target="_blank" class="chat-link">WhatsApp ile Yazın</a><br>📧 <a href="mailto:rotagmcdestek@gmail.com" class="chat-link">rotagmcdestek@gmail.com</a><br><br>📸 <a href="https://www.instagram.com/rotagmc.tr/" target="_blank" class="chat-link">Instagram @rotagmc.tr</a><br>🎵 <a href="https://www.tiktok.com/@rotagmc.tr" target="_blank" class="chat-link">TikTok @rotagmc.tr</a><br><br>7/24 size yardımcı olmaktan mutluluk duyarız! 😊',
            next: 'back'
        },
        sss: {
            msg: '❓ <strong>Sıkça Sorulan Sorular</strong><br><br>Aşağıdan merak ettiğiniz konuyu seçebilirsiniz. Daha fazlası için <span class="chat-link" onclick="navigate(\'faq\');toggleChat()">SSS sayfamızı</span> ziyaret edin!',
            next: 'sss_menu'
        },
        odeme: {
            msg: '💳 <strong>Ödeme Bilgisi:</strong><br><br>Siparişinizi WhatsApp üzerinden onayladıktan sonra ödeme detayları tarafımızca iletilir.<br><br>✅ Havale/EFT ile güvenli ödeme<br>✅ Ödeme onayı sonrası hemen kargoya verilir<br><br>Güvenle alışveriş yapabilirsiniz! 🛡️',
            next: 'back'
        },
        orijinal: {
            msg: '✅ <strong>Evet, tüm ürünlerimiz orijinaldir!</strong><br><br>🏷️ Kalite kontrol sürecinden geçmiştir<br>📦 Orijinal ambalajında teslim edilir<br>🤝 Memnun kalmazsanız 14 gün iade hakkınız var<br><br>Güvenle alışveriş yapabilirsiniz! 💯',
            next: 'back'
        },
        takip: {
            msg: '📍 <strong>Sipariş Takibi:</strong><br><br>Siparişiniz kargoya verildikten sonra kargo takip numarası <strong>WhatsApp üzerinden</strong> tarafınıza iletilir.<br><br>Bu numara ile kargo firmasının sitesinden takip edebilirsiniz. 📦',
            next: 'back'
        },
        menu: {
            msg: 'Başka bir konuda yardımcı olabilir miyim? 😊',
            next: 'main'
        }
    };

    const resp = responses[action];
    if (resp) {
        setTimeout(() => {
            addBotMessage(resp.msg);
            if (resp.next) setTimeout(() => showQuickActions(resp.next), 300);
        }, 400);
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    addUserMessage(text);
    input.value = '';

    // Anahtar kelime eşleştirme
    const lower = text.toLowerCase();
    let action = null;

    if (/merhaba|selam|hey|sa |naber|günaydın|iyi günler|iyi akşamlar/.test(lower)) {
        setTimeout(() => {
            addBotMessage('Merhaba! 😊 Hoş geldiniz! Size nasıl yardımcı olabilirim?');
            setTimeout(() => showQuickActions('main'), 300);
        }, 500);
        return;
    } else if (/teşekkür|sağol|eyvallah|tşk/.test(lower)) {
        setTimeout(() => {
            addBotMessage('Rica ederim! 😊 Başka bir sorunuz olursa her zaman buradayım. İyi alışverişler! 🛍️');
            setTimeout(() => showQuickActions('main'), 300);
        }, 500);
        return;
    } else if (/sipariş|nasıl.*al|nasıl.*ver|satın/.test(lower)) {
        action = 'siparis';
    } else if (/iade|değişim|geri.*gönder|iade.*et/.test(lower)) {
        action = 'iade';
    } else if (/kargo|teslimat|gönderim|kaç.*gün/.test(lower)) {
        action = 'kargo';
    } else if (/telefon|kılıf|şarj|kulaklık|kablo/.test(lower)) {
        action = 'telefon';
    } else if (/araba|araç|oto|direksiyon|tutucu/.test(lower)) {
        action = 'araba';
    } else if (/giyim|tişört|sweatshirt|pantolon|kıyafet|elbise/.test(lower)) {
        action = 'giyim';
    } else if (/gizlilik|güven|güvenilir|veri|kişisel/.test(lower)) {
        action = 'gizlilik';
    } else if (/iletişim|numara|telefon.*no|ulaş|whatsapp|mail|email/.test(lower)) {
        action = 'iletisim';
    } else if (/ödeme|havale|eft|nasıl.*öde/.test(lower)) {
        action = 'odeme';
    } else if (/orijinal|kalite|sahte|gerçek/.test(lower)) {
        action = 'orijinal';
    } else if (/takip|nerede|kargom/.test(lower)) {
        action = 'takip';
    } else if (/soru|sss|faq|yardım/.test(lower)) {
        action = 'sss';
    } else if (/fiyat|indirim|kampanya|ucuz/.test(lower)) {
        setTimeout(() => {
            addBotMessage('🏷️ En güncel fiyatlar ve indirimler için <span class="chat-link" onclick="navigate(\'category\',\'tumu\');toggleChat()">tüm ürünlerimize</span> göz atabilirsiniz! İndirimli ürünler ana sayfadaki slider\'da öne çıkarılmaktadır. 🎉');
            setTimeout(() => showQuickActions('back'), 300);
        }, 500);
        return;
    }

    if (action) {
        handleQuickAction(action);
    } else {
        setTimeout(() => {
            addBotMessage('Anlıyorum 🤔 Size daha iyi yardımcı olabilmem için aşağıdaki seçeneklerden birini tercih edebilirsiniz. Ya da doğrudan <a href="https://wa.me/' + WHATSAPP_NUMBER + '" target="_blank" class="chat-link">WhatsApp ile bize yazabilirsiniz</a>!');
            setTimeout(() => showQuickActions('main'), 300);
        }, 500);
    }
}


// ===== YUKARI ÇIK BUTONU =====
window.addEventListener('scroll', () => {
    const btn = document.getElementById('backToTop');
    if (btn) {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }
});


// ===== VARYASYON SİSTEMİ =====
function selectColor(productId, colorIndex) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.variants || !product.variants.colors) return;

    window._currentVariant.colorIndex = colorIndex;
    const color = product.variants.colors[colorIndex];

    // Aktif renk güncelle
    document.querySelectorAll('.color-swatch').forEach((s, i) => s.classList.toggle('active', i === colorIndex));
    document.getElementById('selectedColorName').textContent = color.name;

    // Görselleri güncelle
    if (color.images && color.images.length > 0) {
        gallerySlide = 0;
        const track = document.getElementById('galleryTrack');
        const dotsWrap = document.querySelector('.gallery-dots');
        const thumbsWrap = document.querySelector('.gallery-thumbs');

        track.innerHTML = color.images.map(img => `<div class="gallery-slide"><img src="${img}" alt="${product.name}"></div>`).join('');

        if (dotsWrap) {
            dotsWrap.innerHTML = color.images.map((_, i) => `<button class="gallery-dot ${i === 0 ? 'active' : ''}" onclick="goToGallerySlide(${i})"></button>`).join('');
        }
        if (thumbsWrap) {
            thumbsWrap.innerHTML = color.images.map((img, i) => `<div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="goToGallerySlide(${i})"><img src="${img}" alt="${product.name}"></div>`).join('');
        }
        updateGallery();
        initGallerySwipe();
    }

    // Fiyat güncelle
    updateVariantPrice(product);
}

function selectSize(productId, sizeIndex) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.variants || !product.variants.sizes) return;

    window._currentVariant.sizeIndex = sizeIndex;
    const size = product.variants.sizes[sizeIndex];

    document.querySelectorAll('.size-btn').forEach((s, i) => s.classList.toggle('active', i === sizeIndex));
    document.getElementById('selectedSizeName').textContent = size.name;

    updateVariantPrice(product);
}

function updateVariantPrice(product) {
    let price = product.price;

    // Renk fark
    if (product.variants && product.variants.colors) {
        const ci = window._currentVariant.colorIndex || 0;
        price += product.variants.colors[ci].priceAdjust || 0;
    }
    // Beden fark
    if (product.variants && product.variants.sizes) {
        const si = window._currentVariant.sizeIndex || 0;
        price += product.variants.sizes[si].priceAdjust || 0;
    }
    // Toptan indirim
    if (product.bulkPricing) {
        let discount = 0;
        product.bulkPricing.forEach(t => {
            if (productQuantity >= t.minQty) discount = t.discountPercent;
        });
        if (discount > 0) price = price * (1 - discount / 100);

        // Aktif tier güncelle
        document.querySelectorAll('.bulk-tier').forEach(el => {
            const min = parseInt(el.dataset.min);
            el.classList.toggle('active', productQuantity >= min);
        });
    }

    const priceEl = document.getElementById('detailCurrentPrice');
    if (priceEl) priceEl.textContent = formatPrice(price);
}

// changeQuantity'de toptan fiyat güncelle
const _origChangeQuantity = changeQuantity;
changeQuantity = function(delta, maxStock) {
    _origChangeQuantity(delta, maxStock);
    if (window._currentVariant) {
        const product = products.find(p => p.id === window._currentVariant.productId);
        if (product) updateVariantPrice(product);
    }
};


// ===== ONESIGNAL - GELİNCE HABER VER =====
function notifyWhenAvailable(productId) {
    const btn = document.getElementById('notifyBtn_' + productId);

    // Önce localStorage'a kaydet + butonu hemen güncelle
    let notifyList = JSON.parse(localStorage.getItem('notifyProducts') || '[]');
    if (!notifyList.includes(productId)) {
        notifyList.push(productId);
        localStorage.setItem('notifyProducts', JSON.stringify(notifyList));
    }

    // Butonu anında griye çevir
    if (btn) {
        btn.classList.add('subscribed');
        btn.disabled = true;
        btn.innerHTML = '<span class="material-icons-outlined">check_circle</span> Stok gelince bildirim gönderilecek';
    }

    showToast('Stok takibine alındı! Ürün gelince bildirim alacaksınız.');

    // OneSignal varsa tag ekle (arka planda)
    try {
        if (window.OneSignal) {
            OneSignal.Notifications.requestPermission();
            setTimeout(function() {
                try { OneSignal.User.addTag('urun_' + productId, 'bekliyor'); } catch(e) {}
            }, 1000);
        }
    } catch(e) {}
}

// Sayfa yüklendiğinde daha önce takibe alınan ürünlerin butonlarını güncelle
function checkNotifiedProducts() {
    const notifyList = JSON.parse(localStorage.getItem('notifyProducts') || '[]');
    notifyList.forEach(function(pid) {
        const btn = document.getElementById('notifyBtn_' + pid);
        if (btn) {
            btn.classList.add('subscribed');
            btn.disabled = true;
            btn.innerHTML = '<span class="material-icons-outlined">check_circle</span> Stok gelince bildirim gönderilecek';
        }
    });
}

// Her sayfa geçişinde kontrol et
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(checkNotifiedProducts, 500);
});


// ===== OTOMATİK STOK BİLDİRİM GÖNDERİCİ =====
// Sayfa yüklendiğinde restockedProducts dizisini kontrol eder.
// Yeni stok gelen ürünler varsa, "Gelince Haber Ver" basanlara otomatik bildirim gönderir.
const ONESIGNAL_APP_ID = document.querySelector('script[src*="OneSignal"]') ?
    (document.querySelector('meta[name="onesignal-app-id"]')?.content || '') : '';

function autoSendRestockNotifications() {
    if (typeof restockedProducts === 'undefined' || restockedProducts.length === 0) return;

    // Daha önce gönderilenleri kontrol et
    const sentList = JSON.parse(localStorage.getItem('restockSent') || '[]');

    restockedProducts.forEach(productId => {
        // Zaten gönderilmişse atla
        if (sentList.includes(productId)) return;

        const product = products.find(p => p.id === productId);
        if (!product) return;

        // OneSignal REST API ile bildirim gönder
        sendRestockNotification(productId, product.name);

        // Gönderildi olarak işaretle
        sentList.push(productId);
        localStorage.setItem('restockSent', JSON.stringify(sentList));
    });
}

function sendRestockNotification(productId, productName) {
    // OneSignal APP ID'yi HTML'den al
    let appId = '';
    const scriptTag = document.querySelector('script:not([src])');
    const htmlContent = document.documentElement.innerHTML;
    const match = htmlContent.match(/appId:\s*"([^"]+)"/);
    if (match && match[1] && match[1] !== 'BURAYA_ONESIGNAL_APP_ID_YAZ') {
        appId = match[1];
    }

    if (!appId) {
        console.log('OneSignal App ID bulunamadı, bildirim gönderilemedi.');
        return;
    }

    // REST API Key gerekli - products.js'de tanımlı olmalı
    if (typeof ONESIGNAL_REST_KEY === 'undefined' || !ONESIGNAL_REST_KEY) {
        console.log('OneSignal REST API Key tanımlı değil.');
        return;
    }

    fetch('https://onesignal.com/api/v1/notifications', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + ONESIGNAL_REST_KEY
        },
        body: JSON.stringify({
            app_id: appId,
            filters: [
                { field: 'tag', key: 'urun_' + productId, value: 'bekliyor' }
            ],
            headings: { tr: 'RotaGMC - Stok Bildirimi', en: 'RotaGMC - Stock Alert' },
            contents: {
                tr: productName + ' ürünü tekrar stoklarda! Hemen sipariş verin.',
                en: productName + ' is back in stock!'
            },
            url: window.location.origin + '/#product-' + productId
        })
    })
    .then(r => r.json())
    .then(data => console.log('Bildirim gönderildi: urun_' + productId, data))
    .catch(err => console.log('Bildirim hatası:', err));
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(autoSendRestockNotifications, 3000);
});

// ===== KUPON / İNDİRİM KODU SİSTEMİ =====
let appliedCoupon = null; // Şu an uygulanan kupon

function getCouponUsage() {
    return JSON.parse(localStorage.getItem('rotagmc_coupon_usage') || '{}');
}

function saveCouponUsage(usage) {
    localStorage.setItem('rotagmc_coupon_usage', JSON.stringify(usage));
}

function getTotalCouponUseCount(code) {
    return parseInt(localStorage.getItem('coupon_total_' + code) || '0');
}

function incrementCouponUseCount(code) {
    const count = getTotalCouponUseCount(code) + 1;
    localStorage.setItem('coupon_total_' + code, count.toString());
}

function getUserCouponUseCount(code) {
    const usage = getCouponUsage();
    return usage[code] || 0;
}

function incrementUserCouponUse(code) {
    const usage = getCouponUsage();
    usage[code] = (usage[code] || 0) + 1;
    saveCouponUsage(usage);
    incrementCouponUseCount(code);
}

function validateCoupon(code) {
    if (!code || code.trim() === '') return { valid: false, message: 'Lütfen bir kupon kodu girin.' };

    code = code.trim().toUpperCase();

    // Kupon bul
    if (typeof coupons === 'undefined') return { valid: false, message: 'Kupon sistemi yüklenemedi.' };
    const coupon = coupons.find(function(c) { return c.code === code && c.active; });
    if (!coupon) return { valid: false, message: 'Geçersiz veya süresi dolmuş kupon kodu.' };

    // Süre kontrolü
    if (coupon.expiresAt) {
        const expiry = new Date(coupon.expiresAt);
        if (new Date() > expiry) {
            return { valid: false, message: 'Bu kuponun süresi dolmuş.' };
        }
    }

    // Toplam kullanım kontrolü
    if (coupon.maxUses > 0) {
        const totalUsed = getTotalCouponUseCount(code);
        if (totalUsed >= coupon.maxUses) {
            return { valid: false, message: 'Bu kuponun kullanım limiti dolmuş.' };
        }
    }

    // Kişi başı kullanım kontrolü
    if (coupon.perUser > 0) {
        const userUsed = getUserCouponUseCount(code);
        if (userUsed >= coupon.perUser) {
            return { valid: false, message: 'Bu kuponu daha önce kullandınız.' };
        }
    }

    // Sepet tutarı hesapla (scope'a göre)
    const cart = getCart();
    let eligibleTotal = 0;
    let hasEligibleItem = false;

    cart.forEach(function(cartItem) {
        const product = products.find(function(p) { return p.id === cartItem.productId; });
        if (!product) return;

        var isEligible = false;
        if (coupon.scope === 'all') {
            isEligible = true;
        } else if (coupon.scope === 'category' && product.category === coupon.scopeTarget) {
            isEligible = true;
        } else if (coupon.scope === 'product' && product.id === coupon.scopeTarget) {
            isEligible = true;
        }

        if (isEligible) {
            eligibleTotal += product.price * cartItem.quantity;
            hasEligibleItem = true;
        }
    });

    if (!hasEligibleItem) {
        var scopeText = 'Bu kupon sepetinizdeki ürünlerde geçerli değil.';
        if (coupon.scope === 'category') {
            var catNames = { telefon: 'Telefon Aksesuarları', araba: 'Araba Aksesuarları', giyim: 'Giyim' };
            scopeText = 'Bu kupon sadece ' + (catNames[coupon.scopeTarget] || coupon.scopeTarget) + ' kategorisinde geçerlidir.';
        } else if (coupon.scope === 'product') {
            var targetProduct = products.find(function(p) { return p.id === coupon.scopeTarget; });
            scopeText = 'Bu kupon sadece "' + (targetProduct ? targetProduct.name : 'belirli bir ürün') + '" için geçerlidir.';
        }
        return { valid: false, message: scopeText };
    }

    // Minimum tutar kontrolü
    if (coupon.minAmount > 0 && eligibleTotal < coupon.minAmount) {
        return { valid: false, message: 'Bu kupon en az ' + formatPrice(coupon.minAmount) + ' tutarında alışverişlerde geçerlidir. Mevcut tutar: ' + formatPrice(eligibleTotal) };
    }

    // İndirim hesapla
    var discountAmount = 0;
    if (coupon.type === 'percent') {
        discountAmount = Math.round(eligibleTotal * coupon.value / 100 * 100) / 100;
    } else if (coupon.type === 'fixed') {
        discountAmount = Math.min(coupon.value, eligibleTotal);
    }

    return {
        valid: true,
        coupon: coupon,
        discountAmount: discountAmount,
        message: coupon.type === 'percent'
            ? '%' + coupon.value + ' indirim uygulandı! (-' + formatPrice(discountAmount) + ')'
            : formatPrice(coupon.value) + ' indirim uygulandı!'
    };
}

function applyCouponFromInput(inputId) {
    var input = document.getElementById(inputId);
    if (!input) return;

    var code = input.value.trim().toUpperCase();
    var result = validateCoupon(code);

    // Mevcut mesajı temizle
    var msgEl = input.parentElement.querySelector('.coupon-message');
    if (!msgEl) {
        msgEl = document.createElement('div');
        msgEl.className = 'coupon-message';
        input.parentElement.appendChild(msgEl);
    }

    if (result.valid) {
        appliedCoupon = { code: code, coupon: result.coupon, discountAmount: result.discountAmount };
        msgEl.innerHTML = '<span class="material-icons-outlined" style="font-size:16px;vertical-align:middle">check_circle</span> ' + result.message;
        msgEl.className = 'coupon-message coupon-success';
        input.disabled = true;
        var applyBtn = input.parentElement.querySelector('.coupon-apply-btn');
        if (applyBtn) {
            applyBtn.textContent = 'Kaldır';
            applyBtn.disabled = false;
            applyBtn.className = 'coupon-remove-btn';
            applyBtn.onclick = function() { removeCoupon(inputId); };
        }
        // Sepeti güncelle
        renderCart();
        if (document.getElementById('checkoutPage') && !document.getElementById('checkoutPage').classList.contains('hidden')) {
            renderCheckout();
        }
    } else {
        appliedCoupon = null;
        msgEl.innerHTML = '<span class="material-icons-outlined" style="font-size:16px;vertical-align:middle">error</span> ' + result.message;
        msgEl.className = 'coupon-message coupon-error';
    }
}

function removeCoupon(inputId) {
    appliedCoupon = null;
    var input = document.getElementById(inputId);
    if (input) {
        input.value = '';
        input.disabled = false;
    }
    var msgEl = input ? input.parentElement.querySelector('.coupon-message') : null;
    if (msgEl) msgEl.remove();

    // Sepeti güncelle
    renderCart();
    if (document.getElementById('checkoutPage') && !document.getElementById('checkoutPage').classList.contains('hidden')) {
        renderCheckout();
    }
}

function getCouponHTML(inputId) {
    var existingCode = appliedCoupon ? appliedCoupon.code : '';
    var isApplied = appliedCoupon !== null;
    return '<div class="coupon-box">' +
        '<div class="coupon-header">' +
            '<span class="material-icons-outlined" style="font-size:18px;color:var(--accent)">confirmation_number</span>' +
            '<span>İndirim Kodunuz Var mı?</span>' +
        '</div>' +
        '<div class="coupon-input-row">' +
            '<input type="text" id="' + inputId + '" class="coupon-input" placeholder="Kupon kodunu girin..." value="' + existingCode + '" ' + (isApplied ? 'disabled' : '') +
            ' onkeydown="if(event.key===\'Enter\')applyCouponFromInput(\'' + inputId + '\')">' +
            (isApplied
                ? '<button class="coupon-remove-btn" onclick="removeCoupon(\'' + inputId + '\')">Kaldır</button>'
                : '<button class="coupon-apply-btn" onclick="applyCouponFromInput(\'' + inputId + '\')">Uygula</button>'
            ) +
        '</div>' +
        (isApplied ? '<div class="coupon-message coupon-success"><span class="material-icons-outlined" style="font-size:16px;vertical-align:middle">check_circle</span> %' + (appliedCoupon.coupon.type === 'percent' ? appliedCoupon.coupon.value + ' indirim uygulandı! (-' + formatPrice(appliedCoupon.discountAmount) + ')' : formatPrice(appliedCoupon.coupon.value) + ' indirim uygulandı!') + '</div>' : '') +
    '</div>';
}

function finalizeCouponUsage() {
    if (appliedCoupon) {
        incrementUserCouponUse(appliedCoupon.code);
    }
}


// ===== ÜRÜN YORUM SİSTEMİ =====
function censorName(name) {
    if (!name) return '***';
    var parts = name.split(' ');
    var censored = parts.map(function(part) {
        if (part.length <= 1) return part;
        return part.charAt(0) + '*'.repeat(part.length - 1);
    });
    return censored.join(' ');
}

function renderReviewStars(rating) {
    var stars = '';
    for (var i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="review-star filled">&#9733;</span>';
        } else {
            stars += '<span class="review-star empty">&#9733;</span>';
        }
    }
    return stars;
}

function renderProductReviews(productId) {
    if (typeof productReviews === 'undefined') return '';
    var reviews = productReviews[productId];
    if (!reviews || reviews.length === 0) return '';

    var INITIAL_SHOW = 3;
    var hasMore = reviews.length > INITIAL_SHOW;

    // Ortalama puan hesapla
    var totalRating = 0;
    reviews.forEach(function(r) { totalRating += r.rating; });
    var avgRating = (totalRating / reviews.length).toFixed(1);

    var reviewsHTML = reviews.map(function(review, index) {
        var hiddenClass = (index >= INITIAL_SHOW && hasMore) ? ' review-hidden' : '';
        return '<div class="review-item' + hiddenClass + '">' +
            '<div class="review-header">' +
                '<div class="review-avatar">' + review.initial + '</div>' +
                '<div class="review-meta">' +
                    '<span class="review-name">' + censorName(review.name) + '</span>' +
                    '<div class="review-stars">' + renderReviewStars(review.rating) + '</div>' +
                '</div>' +
                (review.date ? '<span class="review-date">' + review.date + '</span>' : '') +
            '</div>' +
            '<p class="review-text">' + review.text + '</p>' +
        '</div>';
    }).join('');

    var showMoreBtn = hasMore
        ? '<button class="review-show-more-btn" onclick="showAllReviews(this)">' +
            '<span class="material-icons-outlined" style="font-size:18px;vertical-align:middle">expand_more</span> ' +
            'Tüm Yorumları Gör (' + reviews.length + ')' +
          '</button>'
        : '';

    return '<div class="product-reviews-section">' +
        '<div class="reviews-header">' +
            '<h3><span class="material-icons-outlined" style="vertical-align:middle;margin-right:6px">rate_review</span>Müşteri Yorumları</h3>' +
            '<div class="reviews-summary">' +
                '<span class="reviews-avg">' + avgRating + '</span>' +
                '<div class="reviews-avg-stars">' + renderReviewStars(Math.round(avgRating)) + '</div>' +
                '<span class="reviews-count">(' + reviews.length + ' yorum)</span>' +
            '</div>' +
        '</div>' +
        '<div class="reviews-notice">' +
            '<span class="material-icons-outlined" style="font-size:16px;flex-shrink:0">verified</span>' +
            '<span>Buradaki tüm yorumlar, WhatsApp üzerinden bizden alışveriş yapan müşterilerimiz tarafından iletilmiştir. Bir ürün hakkında yorum bırakmak için ilgili ürünü satın almış olmanız ve bize WhatsApp üzerinden ulaşmanız gerekmektedir.</span>' +
        '</div>' +
        '<div class="reviews-list">' + reviewsHTML + '</div>' +
        showMoreBtn +
    '</div>';
}

function showAllReviews(btn) {
    var section = btn.parentElement;
    var hiddenItems = section.querySelectorAll('.review-hidden');
    hiddenItems.forEach(function(item) {
        item.classList.remove('review-hidden');
        item.style.animation = 'fadeInUp 0.3s ease forwards';
    });
    btn.style.display = 'none';
}
