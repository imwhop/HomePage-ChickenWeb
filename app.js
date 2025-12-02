// ===== 1. Header đổi màu khi cuộn =====
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#1f1c19";
        header.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
    } else {
        header.style.backgroundColor = "#2C2925";
        header.style.boxShadow = "none";
    }
});

// ===== 2. ORDER BUTTON – Thêm vào giỏ =====
const orderButtons = document.querySelectorAll(".order-button");

orderButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const productName = btn.parentElement.querySelector("h3").textContent;

        alert(`✔ Added to cart: ${productName}`);
    });
});

// ===== 3. Search Restaurant =====
const citySelect = document.querySelector(".locator-form select:nth-of-type(1)");
const districtSelect = document.querySelector(".locator-form select:nth-of-type(2)");
const searchBtn = document.querySelector(".locator-form button");

searchBtn.addEventListener("click", () => {
    if (!citySelect.value || !districtSelect.value) {
        alert("⚠ Please choose both city and district!");
        return;
    }

    alert(`📍 Searching restaurant in: ${citySelect.value}, District ${districtSelect.value}`);
});

// ===== 4. Mini Search Bar Toggle =====
const searchIcon = document.querySelector(".search-icon");
let searchBar;

searchIcon.addEventListener("click", () => {
    // Nếu đã tạo rồi → đóng lại
    if (searchBar) {
        searchBar.remove();
        searchBar = null;
        return;
    }

    // Tạo search bar
    searchBar = document.createElement("input");
    searchBar.placeholder = "Search products...";
    searchBar.style.position = "absolute";
    searchBar.style.top = "90px";
    searchBar.style.right = "40px";
    searchBar.style.padding = "8px 12px";
    searchBar.style.borderRadius = "20px";
    searchBar.style.border = "1px solid #ccc";
    searchBar.style.width = "180px";

    document.body.appendChild(searchBar);

    searchBar.addEventListener("keyup", (e) => {
        console.log("Searching:", e.target.value);
    });
});


// ===== HERO SLIDER =====
const heroImages = [
    "./assets/img/hotchicken.jpg",
    "./assets/img/Cheer-Highlight.jpg",
    "./assets/img/Chicken Spaghetti.jpg"
];
let heroIndex = 0;

function changeHero() {
    const hero = document.querySelector(".hero img");
    heroIndex = (heroIndex + 1) % heroImages.length;
    hero.src = heroImages[heroIndex];
}
setInterval(changeHero, 3000);


// ===== PRODUCT CARD ANIMATION =====
const products = document.querySelectorAll(".product-card");

window.addEventListener("scroll", () => {
    products.forEach(card => {
        const pos = card.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            card.style.transform = "translateY(0)";
            card.style.opacity = "1";
            card.style.transition = "0.8s";
        }
    });
});

products.forEach(card => {
    card.style.transform = "translateY(40px)";
    card.style.opacity = "0";
});


// ===== POPUP CART =====
const cartPopup = document.querySelector(".cart-popup");
const cartItems = document.querySelector(".cart-items");
const closeCart = document.querySelector(".close-cart");

document.querySelectorAll(".order-button").forEach(btn => {
    btn.addEventListener("click", () => {
        const name = btn.parentElement.querySelector("h3").textContent;
        const li = document.createElement("li");
        li.textContent = name;
        cartItems.appendChild(li);

        cartPopup.classList.remove("hidden");
    });
});

closeCart.addEventListener("click", () => {
    cartPopup.classList.add("hidden");
});


// ===== MENU NAVIGATION =====
document.querySelectorAll(".nav ul li a").forEach((link, i) => {
    link.addEventListener("click", () => {
        switch (i) {
            case 0: scrollToSection(".hero"); break;
            case 1: scrollToSection(".product-section"); break;
            case 2: scrollToSection(".section-highlight"); break;
            case 3: scrollToSection(".restaurant-locator"); break;
            case 4: alert("About us page đang phát triển..."); break;
            case 5: cartPopup.classList.remove("hidden"); break;
        }
    });
});

function scrollToSection(selector) {
    const section = document.querySelector(selector);
    section.scrollIntoView({ behavior: "smooth" });
}


// ===== DARK MODE TOGGLE =====
const darkToggle = document.querySelector(".dark-mode-toggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    darkToggle.textContent = 
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
