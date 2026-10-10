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
}

// ===== SLIDER =====
function initSlider() {
    const featured = products.filter(p => p.featured);
    const track = document.getElementById('sliderTrack');
    const dots = document.getElementById('sliderDots');

    track.innerHTML = '';
    dots.innerHTML = '';

    featured.forEach((product, index) => {
        // Slide
        const slide = document.createElement('div');
        slide.className = 'slider-slide';
        slide.innerHTML = `
            <div class="slider-content">
                ${product.badge ? `<span class="slider-badge">${product.badge}</span>` : ''}
                <h2>${product.name}</h2>
                <p>${product.description.substring(0, 100)}...</p>
                <a href="#" class="slider-cta" onclick="navigate('product', ${product.id})">
                    Ürünü İncele
                    <span class="material-icons-outlined">arrow_forward</span>
                </a>
            </div>
            <div class="slider-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
        `;
        track.appendChild(slide);

        // Dot
        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        dots.appendChild(dot);
    });

    // Otomatik kayma
    startSlideInterval();
}

function startSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => slideHero(1), 4000);
}

function slideHero(direction) {
    const featured = products.filter(p => p.featured);
    currentSlide += direction;

    if (currentSlide >= featured.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = featured.length - 1;

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
    return `
        <div class="product-card" onclick="navigate('product', ${product.id})">
            <div class="product-card-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-card-body">
                <span class="product-card-category">${product.category === 'telefon' ? 'Telefon Aksesuarı' : 'Araba Aksesuarı'}</span>
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
            <div class="product-card-actions" onclick="event.stopPropagation()">
                <button class="btn-add-cart" onclick="addToCart(${product.id}); event.stopPropagation();">
                    <span class="material-icons-outlined" style="font-size:18px">add_shopping_cart</span>
                    Sepete Ekle
                </button>
                <button class="btn-buy-now" onclick="buyNow(${product.id}); event.stopPropagation();">
                    Satın Al
                </button>
            </div>
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
function loadProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        document.getElementById('productDetail').innerHTML = '<p>Ürün bulunamadı.</p>';
        return;
    }

    productQuantity = 1;

    const breadcrumb = document.getElementById('productBreadcrumb');
    const catName = product.category === 'telefon' ? 'Telefon Aksesuarları' : 'Araba Aksesuarları';
    breadcrumb.innerHTML = `
        <a href="#" onclick="navigate('home')">Ana Sayfa</a>
        <span class="separator">/</span>
        <a href="#" onclick="navigate('category', '${product.category}')">${catName}</a>
        <span class="separator">/</span>
        <span class="current">${product.name}</span>
    `;

    const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

    document.getElementById('productDetail').innerHTML = `
        <div class="product-gallery">
            <div class="product-main-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
        </div>
        <div class="product-info">
            <span class="product-category-tag">${catName}</span>
            <h1>${product.name}</h1>
            ${product.rating ? `
            <div class="star-rating">
                <div class="stars">${renderStars(product.rating)}</div>
                <span class="rating-text">${product.rating} / 5 (${product.reviewCount} değerlendirme)</span>
            </div>` : ''}
            <div class="product-price-section">
                <span class="current-price">${formatPrice(product.price)}</span>
                ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                ${discount > 0 ? `<span class="product-badge" style="position:static">%${discount} İndirim</span>` : ''}
            </div>
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
            <div class="quantity-selector">
                <button class="qty-btn" onclick="changeQuantity(-1)">−</button>
                <span class="qty-value" id="qtyValue">1</span>
                <button class="qty-btn" onclick="changeQuantity(1)">+</button>
            </div>
            <div class="product-detail-actions">
                <button class="btn-add-cart" onclick="addToCart(${product.id}, productQuantity)">
                    <span class="material-icons-outlined" style="font-size:20px">add_shopping_cart</span>
                    Sepete Ekle
                </button>
                <button class="btn-buy-now" onclick="buyNow(${product.id}, productQuantity)">
                    Hemen Satın Al
                </button>
            </div>
        </div>
    `;
}

function changeQuantity(delta) {
    productQuantity = Math.max(1, productQuantity + delta);
    document.getElementById('qtyValue').textContent = productQuantity;
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
    renderCart();
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

    container.innerHTML = `
        <div class="cart-items">${itemsHtml}</div>
        <div class="cart-summary">
            <div class="cart-summary-row">
                <span>Ürün Sayısı</span>
                <span>${cart.reduce((s, i) => s + i.quantity, 0)} adet</span>
            </div>
            <div class="cart-summary-row total">
                <span>Toplam</span>
                <span>${formatPrice(totalPrice)}</span>
            </div>
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

    document.getElementById('checkoutTotal').textContent = formatPrice(total);

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

    // Mesaj oluştur
    let message = '🛒 *YENİ SİPARİŞ - RotaGMC*\n';
    message += '━━━━━━━━━━━━━━━━━━\n\n';
    message += '📦 *Sipariş Detayları:*\n';

    let total = 0;
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.productId);
        if (product) {
            const itemTotal = product.price * cartItem.quantity;
            total += itemTotal;
            message += `• ${product.name} x${cartItem.quantity} - ${formatPrice(itemTotal)}\n`;
        }
    });

    message += `\n💰 *Toplam Tutar: ${formatPrice(total)}*\n\n`;
    message += '👤 *Müşteri Bilgileri:*\n';
    message += `• İsim: ${firstName} ${lastName}\n`;
    message += `• Telefon: ${phone}\n\n`;
    message += '📍 *Teslimat Adresi:*\n';
    message += `• ${province} / ${district} / ${neighborhood}\n`;
    message += `• ${addressDetail}\n\n`;
    message += '━━━━━━━━━━━━━━━━━━\n';
    message += '📱 RotaGMC Web Sitesi üzerinden gönderilmiştir.';

    // WhatsApp linkini oluştur
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

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
