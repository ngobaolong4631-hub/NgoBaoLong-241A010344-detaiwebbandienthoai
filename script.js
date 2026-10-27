// DỮ LIỆU 12 SẢN PHẨM TOÀN TRANG
const phoneData = [
    {
        id: 1,
        name: "iPhone 15 Pro Max 256GB",
        brand: "Apple",
        price: 29490000,
        oldPrice: 34990000,
        discount: 15,
        img: "https://m.media-amazon.com/images/I/51KLILQ67nL._AC_SX679_.jpg",
        storage: "8GB | 256GB",
        battery: "4422 mAh, Sạc 20W",
        screen: "6.7 inch, Super Retina XDR OLED, 120Hz",
        cpu: "Apple A17 Pro (3nm)",
        camera: "48MP + 12MP + 12MP (Zoom 5x)",
        os: "iOS 17",
        reviews: 120,
        colors: [
            { name: "Titan Tự Nhiên", img: "https://m.media-amazon.com/images/I/51KLILQ67nL._AC_SX679_.jpg" },
            { name: "Titan Xanh", img: "https://m.media-amazon.com/images/I/61c3S7l+afL._AC_SX679_.jpg" },
            { name: "Titan Đen", img: "https://m.media-amazon.com/images/I/81UKVHM77GL._AC_SX679_.jpg" }
        ],
        storageList: ["256GB", "512GB", "1TB"],
        desc: "Khung viền Titan hàng không vũ trụ siêu nhẹ. Vi xử lý A17 Pro đem lại hiệu năng đồ họa ray tracing đỉnh cao cùng nút Action Button đa năng."
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        price: 27990000,
        oldPrice: 33990000,
        discount: 17,
        img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569855_sd.jpg;maxHeight=1920;maxWidth=900?format=webp",
        storage: "12GB | 256GB",
        battery: "5000 mAh, Sạc 45W",
        screen: "6.8 inch, Dynamic AMOLED 2X, 120Hz",
        cpu: "Snapdragon 8 Gen 3 for Galaxy",
        camera: "200MP + 50MP + 12MP + 10MP",
        os: "Android 14 (One UI 6.1)",
        reviews: 98,
        colors: [
            { name: "Xám Titan", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600" },
            { name: "Đen Titan", img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6569/6569855_sd.jpg;maxHeight=1920;maxWidth=900?format=webp" },
            { name: "Vàng Titan", img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6570/6570299_sd.jpg;maxHeight=1920;maxWidth=900?format=webp" }
        ],
        storageList: ["256GB", "512GB"],
        desc: "Kỷ nguyên Galaxy AI vượt trội: khoanh tròn để tìm kiếm thông minh, dịch trực tiếp cuộc gọi đa ngôn ngữ và bút S-Pen chuyên nghiệp."
    },
    {
        id: 3,
        name: "Xiaomi 14 5G Leica",
        brand: "Xiaomi",
        price: 18490000,
        oldPrice: 22990000,
        discount: 19,
        img: "https://http2.mlstatic.com/D_NQ_NP_646239-MLB82547485530_032025-O.webp",
        storage: "12GB | 256GB",
        battery: "4610 mAh, Sạc 90W",
        screen: "6.36 inch, AMOLED 1.5K, 120Hz",
        cpu: "Snapdragon 8 Gen 3",
        camera: "3 ống kính Leica 50MP Summilux",
        os: "Xiaomi HyperOS",
        reviews: 76,
        colors: [
            { name: "Xanh Ngọc", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },
            { name: "Đen Huyền Bí", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" },
            { name: "Trắng Tuyết", img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600" }
        ],
        storageList: ["256GB", "512GB"],
        desc: "Hệ thống ống kính quang học Leica danh tiếng mang lại chất màu hoài niệm đậm chất điện ảnh, kích thước gọn gàng dễ cầm nắm."
    },
    {
        id: 4,
        name: "iPhone 13 128GB Chính Hãng",
        brand: "Apple",
        price: 13490000,
        oldPrice: 16990000,
        discount: 20,
        img: "https://tse3.mm.bing.net/th/id/OIP.QCN1__jgHa5iwSk59qJnLAHaHa?r=0&pid=Api&h=220&P=0",
        storage: "4GB | 128GB",
        battery: "3240 mAh, Sạc 20W",
        screen: "6.1 inch, Super Retina XDR",
        cpu: "Apple A15 Bionic",
        camera: "Kép 12MP chống rung cảm biến",
        os: "iOS 17",
        reviews: 150,
        colors: [
            { name: "Xanh Dương", img: "https://tse2.mm.bing.net/th/id/OIP.HNP4wl_XMMCDMq7YkS0U6AHaHa?r=0&pid=Api&h=220&P=0" },
            { name: "Trắng Starlight", img: "https://tse3.mm.bing.net/th/id/OIP.GyCf59AFGMiLc0__2SaROgHaHa?r=0&pid=Api&h=220&P=0" },
            { name: "Đen Midnight", img: "https://tse3.mm.bing.net/th/id/OIP.QCN1__jgHa5iwSk59qJnLAHaHa?r=0&pid=Api&h=220&P=0" }
        ],
        storageList: ["128GB", "256GB"],
        desc: "Mẫu iPhone quốc dân sở hữu thiết kế vuông vức thời thượng, thời lượng pin tối ưu và chế độ quay video Điện ảnh Cinematic Mode."
    },
    {
        id: 5,
        name: "Samsung Galaxy A55 5G",
        brand: "Samsung",
        price: 9490000,
        oldPrice: 10990000,
        discount: 13,
        img: "https://tse3.mm.bing.net/th/id/OIF.BwLwaA7h6DDDh2XdFM4aTw?r=0&pid=Api&h=220&P=0",
        storage: "8GB | 128GB",
        battery: "5000 mAh, Sạc 25W",
        screen: "6.6 inch, Super AMOLED 120Hz",
        cpu: "Exynos 1480 8 nhân",
        camera: "50MP OIS + 12MP + 5MP",
        os: "Android 14",
        reviews: 88,
        colors: [
            { name: "Xanh Iceblue", img: "https://tse3.mm.bing.net/th/id/OIF.BwLwaA7h6DDDh2XdFM4aTw?r=0&pid=Api&h=220&P=0" },
            { name: "Tím Lilac", img: "https://tse4.mm.bing.net/th/id/OIP.TN_ATf7UxmontXf04DB2BwHaE2?r=0&pid=Api&h=220&P=0" },
            { name: "Xanh Navy", img: "https://static.toiimg.com/thumb/resizemode-4,msid-118715948,width-1070/118715948.jpg" }
        ],
        storageList: ["128GB", "256GB"],
        desc: "Khung viền kim loại chắc chắn sang trọng, khả năng kháng nước chuẩn IP67 và bảo mật phần cứng Samsung Knox Vault."
    },
    {
        id: 6,
        name: "Xiaomi Redmi Note 13",
        brand: "Xiaomi",
        price: 4490000,
        oldPrice: 5290000,
        discount: 15,
        img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600",
        storage: "6GB | 128GB",
        battery: "5000 mAh, Sạc 33W",
        screen: "6.67 inch, AMOLED 120Hz",
        cpu: "Snapdragon 685",
        camera: "108MP + 8MP + 2MP",
        os: "MIUI 14",
        reviews: 65,
        colors: [
            { name: "Đen Dạ Minh", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600" },
            { name: "Xanh Băng", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" },
            { name: "Xanh Lá", img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600" }
        ],
        storageList: ["128GB"],
        desc: "Độ phân giải 108MP sắc nét phân khúc phổ thông, viền màn hình siêu mỏng 120Hz sống động."
    },
    {
        id: 7,
        name: "OPPO Reno11 F 5G",
        brand: "OPPO",
        price: 8490000,
        oldPrice: 9990000,
        discount: 15,
        img: "https://tse2.mm.bing.net/th/id/OIP.771J2h6EDaGLuLYcPTiIbgHaFb?r=0&pid=Api&h=220&P=0",
        storage: "8GB | 256GB",
        battery: "5000 mAh, SuperVOOC 67W",
        screen: "6.7 inch, AMOLED viền siêu mỏng",
        cpu: "MediaTek Dimensity 7050",
        camera: "64MP + 8MP + 2MP",
        os: "ColorOS 14",
        reviews: 72,
        colors: [
            { name: "Xanh Đại Dương", img: "https://tse3.mm.bing.net/th/id/OIP.2xQKcJTP0c1fsgWDv8G1_QAAAA?r=0&pid=Api&h=220&P=0" },
            { name: "Xanh Cọ", img: "https://www.oppo.com/content/dam/oppo/common/mkt/v2-2/reno11-5g-en/listpage/reno11-427-600-green.png" },
            { name: "Tím San Hô", img: "https://tse2.mm.bing.net/th/id/OIP.iqrFAREyFUUU1WNgVyC6UQHaFU?r=0&pid=Api&h=220&P=0" }
        ],
        storageList: ["256GB"],
        desc: "Thiết kế mặt lưng vân đá tự nhiên bắt mắt, thuật toán chuyên gia chụp chân dung xóa phông tự nhiên."
    },
    {
        id: 8,
        name: "OPPO Find N3 Flip",
        brand: "OPPO",
        price: 22490000,
        oldPrice: 26990000,
        discount: 16,
        img: "https://tse4.mm.bing.net/th/id/OIP.4W2tp7jusT3sIDHsV0SS0QHaHa?r=0&pid=Api&h=220&P=0",
        storage: "12GB | 256GB",
        battery: "4300 mAh, Sạc 44W",
        screen: "Chính 6.8 inch & Phụ 3.26 inch",
        cpu: "Dimensity 9200",
        camera: "Hasselblad 50MP + 48MP + 32MP",
        os: "ColorOS 13.2",
        reviews: 110,
        colors: [
            { name: "Vàng Thạch Anh", img: "https://tse4.mm.bing.net/th/id/OIP.4W2tp7jusT3sIDHsV0SS0QHaHa?r=0&pid=Api&h=220&P=0" },
            { name: "Đen Hổ Phách", img: "https://tse3.mm.bing.net/th/id/OIP.SZyTJCnT8ayzuhAr54jhvAHaE7?r=0&pid=Api&h=220&P=0" },
            { name: "Hồng Baby", img: "https://tse4.mm.bing.net/th/id/OIP.DG2UAoTePL5t2hIVbETD1gHaEK?r=0&pid=Api&h=220&P=0" }
        ],
        storageList: ["256GB"],
        desc: "Cụm 3 camera Hasselblad chuyên nghiệp, màn hình ngoài hiển thị thông báo ứng dụng tiện lợi."
    },
    {
        id: 9,
        name: "Samsung Galaxy Z Flip5",
        brand: "Samsung",
        price: 16490000,
        oldPrice: 25990000,
        discount: 36,
        img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
        storage: "8GB | 256GB",
        battery: "3700 mAh, Sạc 25W",
        screen: "6.7 inch Dynamic AMOLED 2X",
        cpu: "Snapdragon 8 Gen 2 for Galaxy",
        camera: "Kép 12MP + 12MP",
        os: "Android 13",
        reviews: 83,
        colors: [
            { name: "Xanh Mint", img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600" },
            { name: "Xám Indie", img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600" },
            { name: "Tím Fancy", img: "https://images.unsplash.com/photo-1584006682522-dc17d6c0d963?w=600" }
        ],
        storageList: ["256GB", "512GB"],
        desc: "Bản lề gập khít hoàn toàn, màn hình ngoài Flex Window 3.4 inch độc đáo và phong cách."
    },
    {
        id: 10,
        name: "Samsung Galaxy S23 FE 5G",
        brand: "Samsung",
        price: 12490000,
        oldPrice: 14890000,
        discount: 16,
        img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600",
        storage: "8GB | 128GB",
        battery: "4500 mAh, Sạc 25W",
        screen: "6.4 inch, Dynamic AMOLED 2X 120Hz",
        cpu: "Exynos 2200 (4nm)",
        camera: "50MP OIS + 12MP + 8MP (Zoom 3x)",
        os: "Android 14 (One UI 6.1)",
        reviews: 58,
        colors: [
            { name: "Xanh Mint", img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600" },
            { name: "Xám Graphite", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600" },
            { name: "Trắng Cream", img: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600" }
        ],
        storageList: ["128GB", "256GB"],
        desc: "Phiên bản Fan Edition hội tụ các tính năng flagship hàng đầu: camera chụp đêm Nightography, màn hình rực rỡ và tích hợp các tính năng Galaxy AI."
    },
    {
        id: 11,
        name: "iPhone 15 Plus 128GB",
        brand: "Apple",
        price: 22890000,
        oldPrice: 25990000,
        discount: 12,
        img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600",
        storage: "6GB | 128GB",
        battery: "4383 mAh, Sạc 20W",
        screen: "6.7 inch, Super Retina XDR OLED",
        cpu: "Apple A16 Bionic (4nm)",
        camera: "Chính 48MP & Góc siêu rộng 12MP",
        os: "iOS 17",
        reviews: 94,
        colors: [
            { name: "Xanh Lá Pastel", img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600" },
            { name: "Hồng Nhạt", img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600" },
            { name: "Đen Nhám", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600" }
        ],
        storageList: ["128GB", "256GB", "512GB"],
        desc: "Màn hình lớn 6.7 inch hiển thị ấn tượng cùng thời lượng pin tốt nhất dòng iPhone 15 series. Thiết kế mặt lưng kính pha màu cùng cổng sạc Type-C mới."
    },
    {
        id: 12,
        name: "Xiaomi Poco X6 Pro 5G",
        brand: "Xiaomi",
        price: 8990000,
        oldPrice: 9990000,
        discount: 10,
        img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600",
        storage: "8GB | 256GB",
        battery: "5000 mAh, Sạc Turbo 67W",
        screen: "6.67 inch, CrystalRes 1.5K Flow AMOLED 120Hz",
        cpu: "Dimensity 8300-Ultra (4nm)",
        camera: "64MP OIS + 8MP + 2MP",
        os: "Xiaomi HyperOS",
        reviews: 142,
        colors: [
            { name: "Vàng Đen Nổi Bật", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600" },
            { name: "Đen Nhám", img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600" },
            { name: "Xám Bạc", img: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600" }
        ],
        storageList: ["256GB", "512GB"],
        desc: "Quái thú hiệu năng tầm trung với vi xử lý Dimensity 8300-Ultra cực khủng đạt trên 1.4 triệu điểm AnTuTu, tản nhiệt buồng hơi LiquidCool 2.0."
    }
];

// Khởi tạo Giỏ hàng & Lịch sử đơn hàng từ localStorage
let shoppingCart = JSON.parse(localStorage.getItem("BLM_CART")) || [];
let orderHistory = JSON.parse(localStorage.getItem("BLM_ORDERS")) || [];

function formatPrice(number) {
    return number.toLocaleString('vi-VN') + " VNĐ";
}

function updateCartBadge() {
    const el = document.getElementById("cartCount");
    if (el) {
        const count = shoppingCart.reduce((sum, item) => sum + item.qty, 0);
        el.textContent = count;
    }
}

function saveCart() {
    localStorage.setItem("BLM_CART", JSON.stringify(shoppingCart));
    updateCartBadge();
}

function addToCart(id) {
    const phone = phoneData.find(p => p.id === id);
    if (!phone) return;

    const exist = shoppingCart.find(i => i.id === id);
    if (exist) {
        exist.qty += 1;
    } else {
        shoppingCart.push({
            id: phone.id,
            name: phone.name,
            price: phone.price,
            img: phone.img,
            qty: 1
        });
    }

    saveCart();
    alert(`Đã thêm "${phone.name}" vào giỏ hàng thành công!`);
}

// -------------------------------------------------------------
// 1. RENDER TRANG CHỦ & BỘ LỌC (index.html)
// -------------------------------------------------------------
function renderIndexProducts(list) {
    const grid = document.getElementById("productGrid");
    if (!grid) return;

    grid.innerHTML = "";
    if (list.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 50px; color: #64748b;">
            Không tìm thấy sản phẩm phù hợp với tìm kiếm của bạn!
        </div>`;
        return;
    }

    list.forEach(item => {
        const article = document.createElement("article");
        article.innerHTML = `
            <span class="badge-tag">Trả góp 0%</span>
            <a href="chitietsanpham.html?id=${item.id}" class="article-img-box">
                <img alt="${item.name}" src="${item.img}">
            </a>
            <div class="article-content">
                <h3><a href="chitietsanpham.html?id=${item.id}">${item.name}</a></h3>
                <div class="meta-tags">
                    <span>💾 ${item.storage}</span>
                    <span>🔋 ${item.battery.split(',')[0]}</span>
                </div>
                <div class="price-rating-row">
                    <span class="price-red">${formatPrice(item.price)}</span>
                    <div class="star-rating">★★★★★ <span>(${item.reviews})</span></div>
                </div>
                <div class="card-action-bar">
                    <a href="chitietsanpham.html?id=${item.id}" class="btn-detail-link">Xem chi tiết →</a>
                    <button class="btn-add-cart-mini" onclick="addToCart(${item.id})">Thêm giỏ</button>
                </div>
            </div>
        `;
        grid.appendChild(article);
    });
}

function filterPhones() {
    const searchVal = document.getElementById("searchInput").value.toLowerCase().trim();
    const brandVal = document.getElementById("brandSelect").value;
    const priceVal = document.getElementById("priceSelect").value;

    const filtered = phoneData.filter(item => {
        const matchName = item.name.toLowerCase().includes(searchVal);
        const matchBrand = (brandVal === "all") || (item.brand === brandVal);
        let matchPrice = true;
        if (priceVal === "under5") matchPrice = item.price < 5000000;
        else if (priceVal === "5to15") matchPrice = item.price >= 5000000 && item.price <= 15000000;
        else if (priceVal === "over15") matchPrice = item.price > 15000000;

        return matchName && matchBrand && matchPrice;
    });

    renderIndexProducts(filtered);
}

// -------------------------------------------------------------
// 2. RENDER TRANG CHI TIẾT SẢN PHẨM & TÍNH NĂNG ĐỔI ẢNH THEO MÀU
// -------------------------------------------------------------
function renderDetailPage() {
    const container = document.getElementById("productDetailSection");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id")) || 1;
    const phone = phoneData.find(p => p.id === id);

    if (!phone) {
        container.innerHTML = `<div style="text-align:center; padding: 50px;">
            <h2>Sản phẩm không tồn tại!</h2>
            <a href="index.html" class="btn-hero" style="margin-top:15px;">Quay lại trang chủ</a>
        </div>`;
        return;
    }

    document.title = `${phone.name} - Chi Tiết Sản Phẩm`;

    const colorBtns = phone.colors.map((c, i) => 
        `<button class="opt-btn color-opt-btn ${i === 0 ? 'active' : ''}" 
                 data-img="${c.img}" 
                 data-color-name="${c.name}"
                 onclick="changePhoneColor(this)">
            ${c.name}
        </button>`
    ).join('');

    const storageBtns = phone.storageList.map((s, i) => 
        `<button class="opt-btn ${i === 0 ? 'active' : ''}" onclick="pickOption(this)">${s}</button>`
    ).join('');

    const initialImg = phone.colors[0].img;
    const initialColorName = phone.colors[0].name;

    container.innerHTML = `
        <div class="breadcrumb-nav">
            <a href="index.html">Trang chủ</a> &gt; <span>Điện thoại ${phone.brand}</span> &gt; <strong>${phone.name}</strong>
        </div>

        <div class="detail-layout-container">
            <div class="detail-left-col">
                <div class="detail-big-img">
                    <img id="mainPhoneImg" src="${initialImg}" alt="${phone.name}">
                </div>
                <div class="policy-badge-box">
                    <p>🛡️ <strong>Bảo hành:</strong> 12 tháng chính hãng tại tất cả TTBH toàn quốc.</p>
                    <p>🔄 <strong>Đổi mới:</strong> 1 đổi 1 trong 30 ngày nếu phát sinh lỗi phần cứng.</p>
                    <p>📦 <strong>Bộ sản phẩm:</strong> Thân máy, cáp sạc USB-C, que chọc SIM, sách HDSD.</p>
                </div>
            </div>

            <div class="detail-right-col">
                <h1 class="detail-phone-name">${phone.name}</h1>
                <div class="star-rating" style="margin-bottom: 10px;">
                    ★★★★★ <span>(${phone.reviews} đánh giá)</span>
                </div>

                <div class="price-banner-detail">
                    <span class="price-red">${formatPrice(phone.price)}</span>
                    <span class="price-old-through">${formatPrice(phone.oldPrice)}</span>
                    <span class="sale-tag">Giảm ${phone.discount}%</span>
                </div>

                <div class="selection-title">Chọn dung lượng bộ nhớ:</div>
                <div class="option-button-group">${storageBtns}</div>

                <div class="selection-title">
                    Chọn màu sắc: <span id="selectedColorLabel" style="color: var(--primary); font-weight: 800;">${initialColorName}</span>
                </div>
                <div class="option-button-group">${colorBtns}</div>

                <div class="promo-highlight">
                    <strong>🎁 Ưu đãi đặc quyền khi đặt online tại Bảo Long Mobile:</strong>
                    <ul>
                        <li>Tặng củ sạc nhanh và ốp lưng chính hãng kèm máy.</li>
                        <li>Hỗ trợ trả góp 0% lãi suất qua CCCD gắn chip hoặc thẻ tín dụng.</li>
                        <li>Giao hàng tận nơi miễn phí toàn quốc.</li>
                    </ul>
                </div>

                <div class="detail-action-buttons">
                    <button class="btn-buy-primary" onclick="addToCart(${phone.id}); openCheckoutModal();">
                        MUA NGAY (TIẾN HÀNH THANH TOÁN)
                    </button>
                    <button class="btn-cart-secondary" onclick="addToCart(${phone.id})">
                        🛒 Thêm vào giỏ
                    </button>
                </div>

                <h3 style="margin-top: 25px; margin-bottom: 8px;">Mô tả sản phẩm</h3>
                <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">${phone.desc}</p>

                <h3>Thông số kỹ thuật chi tiết:</h3>
                <table class="specs-table">
                    <tr><td>Màn hình:</td><td>${phone.screen}</td></tr>
                    <tr><td>Hệ điều hành:</td><td>${phone.os}</td></tr>
                    <tr><td>Camera sau:</td><td>${phone.camera}</td></tr>
                    <tr><td>Vi xử lý (CPU):</td><td>${phone.cpu}</td></tr>
                    <tr><td>RAM / ROM:</td><td>${phone.storage}</td></tr>
                    <tr><td>Pin & Công nghệ sạc:</td><td>${phone.battery}</td></tr>
                </table>
            </div>
        </div>
    `;
}

function changePhoneColor(btn) {
    const newImgSrc = btn.getAttribute("data-img");
    const colorName = btn.getAttribute("data-color-name");
    const mainImg = document.getElementById("mainPhoneImg");
    const label = document.getElementById("selectedColorLabel");

    if (mainImg && newImgSrc) {
        mainImg.style.opacity = "0.3";
        setTimeout(() => {
            mainImg.src = newImgSrc;
            mainImg.style.opacity = "1";
        }, 150);
    }

    if (label && colorName) {
        label.textContent = colorName;
    }

    const parent = btn.parentElement;
    parent.querySelectorAll(".color-opt-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

function pickOption(btn) {
    const parent = btn.parentElement;
    parent.querySelectorAll(".opt-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
}

// -------------------------------------------------------------
// 3. XỬ LÝ MODAL GIỎ HÀNG & BƯỚC THANH TOÁN
// -------------------------------------------------------------
function toggleCartModal() {
    const modal = document.getElementById("cartModal");
    if (!modal) return;
    if (modal.style.display === "flex") {
        modal.style.display = "none";
    } else {
        renderCartUI();
        modal.style.display = "flex";
    }
}

function renderCartUI() {
    const list = document.getElementById("cartItemsList");
    const totalEl = document.getElementById("cartTotalPrice");
    if (!list || !totalEl) return;

    if (shoppingCart.length === 0) {
        list.innerHTML = `<p style="text-align: center; color: #64748b; padding: 25px;">Giỏ hàng của bạn đang trống!</p>`;
        totalEl.textContent = "0 VNĐ";
        const btn = document.getElementById("btnCheckoutModal");
        if (btn) btn.style.display = "none";
        return;
    }

    const btn = document.getElementById("btnCheckoutModal");
    if (btn) btn.style.display = "block";
    
    list.innerHTML = "";
    let total = 0;

    shoppingCart.forEach(item => {
        total += item.price * item.qty;
        const row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small style="color: #64748b;">${formatPrice(item.price)}</small>
            </div>
            <div>
                <button class="qty-control-btn" onclick="updateQty(${item.id}, -1)">-</button>
                <span style="margin: 0 8px; font-weight: bold;">${item.qty}</span>
                <button class="qty-control-btn" onclick="updateQty(${item.id}, 1)">+</button>
            </div>
        `;
        list.appendChild(row);
    });

    totalEl.textContent = formatPrice(total);
}

function updateQty(id, delta) {
    const item = shoppingCart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        shoppingCart = shoppingCart.filter(i => i.id !== id);
    }
    saveCart();
    renderCartUI();
}

function openCheckoutModal() {
    if (shoppingCart.length === 0) {
        alert("Giỏ hàng đang trống, vui lòng thêm sản phẩm trước khi thanh toán!");
        return;
    }
    closeModal('cartModal');

    const total = shoppingCart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const checkoutTotal = document.getElementById("checkoutTotalSummary");
    if (checkoutTotal) {
        checkoutTotal.textContent = formatPrice(total);
    }

    const modal = document.getElementById("checkoutModal");
    if (modal) modal.style.display = "flex";
}

function handlePaymentSubmit(e) {
    e.preventDefault();
    if (shoppingCart.length === 0) return;

    const name = document.getElementById("buyerName").value.trim();
    const phone = document.getElementById("buyerPhone").value.trim();
    const address = document.getElementById("buyerAddress").value.trim();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const note = document.getElementById("buyerNote").value.trim() || "Không có";

    const now = new Date();
    const orderDateStr = now.toLocaleString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    const deliveryDate = new Date(now.getTime() + (3 * 24 * 60 * 60 * 1000));
    const deliveryDateStr = deliveryDate.toLocaleDateString("vi-VN", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    }) + " (Khoảng 08:00 - 17:30)";

    // Tiền tố mã đơn hàng Bảo Long Mobile: BLM-xxxxx
    const orderId = "BLM-" + Math.floor(10000 + Math.random() * 90000);
    const totalAmount = shoppingCart.reduce((sum, item) => sum + item.price * item.qty, 0);

    const newOrder = {
        id: orderId,
        orderDate: orderDateStr,
        deliveryDate: deliveryDateStr,
        buyer: { name, phone, address, note },
        paymentMethod: paymentMethod === "cod" ? "Thanh toán khi nhận hàng (COD)" : "Chuyển khoản Ngân hàng / QR Pay",
        items: [...shoppingCart],
        total: totalAmount,
        status: "Đang xử lý & đóng gói"
    };

    orderHistory.unshift(newOrder);
    localStorage.setItem("BLM_ORDERS", JSON.stringify(orderHistory));

    shoppingCart = [];
    saveCart();

    e.target.reset();
    closeModal('checkoutModal');

    alert(`🎉 ĐẶT HÀNG THÀNH CÔNG TẠI BẢO LONG MOBILE!\nMã đơn hàng: ${orderId}\nNgày đặt: ${orderDateStr}\nThời gian giao dự kiến: ${deliveryDateStr}`);
    window.location.href = "lichsu.html";
}

// -------------------------------------------------------------
// 4. RENDER TRANG LỊCH SỬ GIAO DỊCH (lichsu.html)
// -------------------------------------------------------------
function renderHistoryPage() {
    const container = document.getElementById("historyOrdersContainer");
    if (!container) return;

    if (orderHistory.length === 0) {
        container.innerHTML = `
            <div class="history-card" style="text-align: center; padding: 50px 20px;">
                <h3>Bạn chưa có giao dịch nào!</h3>
                <p style="color: #64748b; margin: 10px 0 20px;">Hãy dạo qua danh sách smartphone và đặt hàng để trải nghiệm dịch vụ của Bảo Long Mobile.</p>
                <a href="index.html" class="btn-hero">Mua sắm ngay bây giờ →</a>
            </div>
        `;
        return;
    }

    container.innerHTML = "";
    orderHistory.forEach(order => {
        let itemsHTML = "";
        order.items.forEach(i => {
            itemsHTML += `
                <tr>
                    <td>${i.name} (x${i.qty})</td>
                    <td>${formatPrice(i.price * i.qty)}</td>
                </tr>
            `;
        });

        const card = document.createElement("div");
        card.className = "history-card";
        card.innerHTML = `
            <div class="order-header-box">
                <span class="order-code">📦 Đơn Hàng: ${order.id}</span>
                <span class="order-status-badge">● ${order.status}</span>
            </div>

            <div class="order-timeline-grid">
                <div class="timeline-item">
                    <p>🕒 Ngày giờ đặt hàng:</p>
                    <strong>${order.orderDate}</strong>
                </div>
                <div class="timeline-item delivery">
                    <p>🚚 Ngày giờ giao dự kiến:</p>
                    <strong>${order.deliveryDate}</strong>
                </div>
                <div class="timeline-item">
                    <p>💳 Hình thức thanh toán:</p>
                    <strong>${order.paymentMethod}</strong>
                </div>
                <div class="timeline-item">
                    <p>📍 Người nhận & Địa chỉ:</p>
                    <strong>${order.buyer.name} (${order.buyer.phone})</strong><br>
                    <small style="color: #64748b;">${order.buyer.address}</small>
                </div>
            </div>

            <table class="order-items-table">
                ${itemsHTML}
            </table>

            <div class="order-total-bar">
                <span>Tổng giá trị đơn hàng:</span>
                <span class="price-red">${formatPrice(order.total)}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
}

window.onclick = function(e) {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    updateCartBadge();
    renderIndexProducts(phoneData);
    renderDetailPage();
    renderHistoryPage();
});