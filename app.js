// ==========================================
// Urban Bites - app.js
// ==========================================

// ------------------------------------------
// HERO SLIDER
// ------------------------------------------
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var currentSlide = 0;
var autoSlide;

function showSlide(index) {
  slides.forEach(function (s) { s.classList.remove("active"); });
  dots.forEach(function (d) { d.classList.remove("active"); });
  
  if (slides[index]) slides[index].classList.add("active");
  if (dots[index]) dots[index].classList.add("active");
  
  currentSlide = index;
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
}

if (slides.length > 0) {
  autoSlide = setInterval(nextSlide, 4000);
}

var nextBtn = document.getElementById("sliderNext");
if (nextBtn) {
  nextBtn.addEventListener("click", function () {
    clearInterval(autoSlide);
    nextSlide();
    autoSlide = setInterval(nextSlide, 4000);
  });
}

var prevBtn = document.getElementById("sliderPrev");
if (prevBtn) {
  prevBtn.addEventListener("click", function () {
    clearInterval(autoSlide);
    prevSlide();
    autoSlide = setInterval(nextSlide, 4000);
  });
}

dots.forEach(function (dot, i) {
  dot.addEventListener("click", function () {
    clearInterval(autoSlide);
    showSlide(i);
    autoSlide = setInterval(nextSlide, 4000);
  });
});


// ------------------------------------------
// MENU WIPE SLIDER (responsive)
// ------------------------------------------
var menuTrack = document.getElementById("menuTrack");
var menuIndex = 0;

function ubMenuCardStep() {
  if (!menuTrack || !menuTrack.children.length) return 284;
  var card = menuTrack.children[0];
  var style = getComputedStyle(menuTrack);
  var gap = parseFloat(style.columnGap || style.gap) || 24;
  return card.getBoundingClientRect().width + gap;
}

function ubMenuVisibleCount() {
  var wrapper = menuTrack.parentElement;
  var step = ubMenuCardStep();
  return Math.max(1, Math.floor(wrapper.getBoundingClientRect().width / step));
}

if (menuTrack) {
  document.getElementById("menuNext").addEventListener("click", function () {
    var step = ubMenuCardStep();
    var maxIndex = menuTrack.children.length - ubMenuVisibleCount();
    if (menuIndex < maxIndex) {
      menuIndex++;
      menuTrack.style.transform = "translateX(-" + (menuIndex * step) + "px)";
    }
  });

  document.getElementById("menuPrev").addEventListener("click", function () {
    var step = ubMenuCardStep();
    if (menuIndex > 0) {
      menuIndex--;
      menuTrack.style.transform = "translateX(-" + (menuIndex * step) + "px)";
    }
  });

  window.addEventListener("resize", function () {
    menuIndex = 0;
    menuTrack.style.transform = "translateX(0px)";
  });
}


// ------------------------------------------
// TESTIMONIALS SLIDER
// ------------------------------------------

var tTrack = document.getElementById("testimonialsTrack");
var tDotsEl = document.getElementById("testimonialsDots");
var tPrev = document.getElementById("tPrev");
var tNext = document.getElementById("tNext");

var tIndex = 0;

function ubTestimonialCardsPerView() {

    if (window.innerWidth <= 768) {
        return 1;
    }

    if (window.innerWidth <= 1024) {
        return 2;
    }

    return 3;
}

if (tTrack) {

    var tCards = tTrack.querySelectorAll(".testimonial-card");
    var totalCards = tCards.length;

    function updateTestimonials() {

        var cardsPerView = ubTestimonialCardsPerView();

        var maxIndex = Math.max(0, totalCards - cardsPerView);

        if (tIndex > maxIndex) {
            tIndex = maxIndex;
        }

        var cardWidth = tCards[0].getBoundingClientRect().width;
        var gap = 24;

        tTrack.style.transform =
            "translateX(-" + (tIndex * (cardWidth + gap)) + "px)";

        tPrev.disabled = tIndex === 0;
        tNext.disabled = tIndex === maxIndex;

        tPrev.style.opacity = tIndex === 0 ? "0.5" : "1";
        tNext.style.opacity = tIndex === maxIndex ? "0.5" : "1";
    }

    tNext.addEventListener("click", function () {

        var cardsPerView = ubTestimonialCardsPerView();
        var maxIndex = Math.max(0, totalCards - cardsPerView);

        if (tIndex < maxIndex) {
            tIndex++;
            updateTestimonials();
        }
    });

    tPrev.addEventListener("click", function () {

        if (tIndex > 0) {
            tIndex--;
            updateTestimonials();
        }
    });

    window.addEventListener("resize", function () {
        updateTestimonials();
    });

    updateTestimonials();
}

// ------------------------------------------
// NAVBAR - Show user avatar + logout
// ------------------------------------------
function updateNavbar() {
  var loggedIn = localStorage.getItem("ub_loggedIn");
  var userName = localStorage.getItem("ub_name");
  var loginBtn = document.getElementById("navLoginBtn");
  var userSection = document.getElementById("navUserSection");
  var userAvatar = document.getElementById("navUserAvatar");

  if (loggedIn === "true" && userName) {
    if (loginBtn) loginBtn.style.display = "none";
    if (userSection) userSection.style.display = "flex";
    if (userAvatar) userAvatar.textContent = userName.charAt(0).toUpperCase();
  } else {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (userSection) userSection.style.display = "none";
  }
}

updateNavbar();

// Logout button
var logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("ub_loggedIn");
    window.location.href = "signup.html";
  });
}


// ------------------------------------------
// HELPER
// ------------------------------------------
function showError(id) {
  var el = document.getElementById(id);
  if (el) el.style.display = "block";
}

function hideError(id) {
  var el = document.getElementById(id);
  if (el) el.style.display = "none";
}


// ------------------------------------------
// SIGNUP - Save to localStorage
// ------------------------------------------
var signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    var name = document.getElementById("signupName").value.trim();
    var email = document.getElementById("signupEmail").value.trim();
    var password = document.getElementById("signupPassword").value;
    var confirm = document.getElementById("signupConfirm").value;
    var isValid = true;

    if (name.length < 3) { showError("signupNameErr"); isValid = false; } else { hideError("signupNameErr"); }
    if (!email.includes("@") || !email.includes(".")) { showError("signupEmailErr"); isValid = false; } else { hideError("signupEmailErr"); }
    if (password.length < 6) { showError("signupPassErr"); isValid = false; } else { hideError("signupPassErr"); }
    if (confirm !== password || confirm === "") { showError("signupConfirmErr"); isValid = false; } else { hideError("signupConfirmErr"); }

    if (isValid) {
      localStorage.setItem("ub_name", name);
      localStorage.setItem("ub_email", email);
      localStorage.setItem("ub_password", password);
      alert("Account created! Please log in.");
      window.location.href = "login.html";
    }
  });
}


// ------------------------------------------
// LOGIN - Check localStorage
// ------------------------------------------
var loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    var email = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value;
    var isValid = true;

    if (!email.includes("@") || !email.includes(".")) { showError("loginEmailErr"); isValid = false; } else { hideError("loginEmailErr"); }
    if (password.length < 6) { showError("loginPassErr"); isValid = false; } else { hideError("loginPassErr"); }

    if (isValid) {
      var savedEmail = localStorage.getItem("ub_email");
      var savedPassword = localStorage.getItem("ub_password");

      if (email === savedEmail && password === savedPassword) {
        localStorage.setItem("ub_loggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("Invalid email or password. Please signup first.");
      }
    }
  });
}


// ------------------------------------------
// RESERVATION FORM
// ------------------------------------------
var reservationForm = document.getElementById("reservationForm");
if (reservationForm) {
  reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();
    
    var name = document.getElementById("resName").value;
    var phone = document.getElementById("resPhone").value;
    var date = document.getElementById("resDate").value;
    var time = document.getElementById("resTime").value;
    var guests = document.getElementById("resGuests").value;
    var isValid = true;

    if (name === "") { showError("resNameErr"); isValid = false; } else { hideError("resNameErr"); }
    if (phone === "") { showError("resPhoneErr"); isValid = false; } else { hideError("resPhoneErr"); }
    if (date === "") { showError("resDateErr"); isValid = false; } else { hideError("resDateErr"); }
    if (time === "") { showError("resTimeErr"); isValid = false; } else { hideError("resTimeErr"); }
    if (guests === "") { showError("resGuestsErr"); isValid = false; } else { hideError("resGuestsErr"); }
    if (isValid) {
    var msg = document.getElementById("reservationSuccess");
    if (msg) {
        msg.style.display = "block";
        msg.textContent = "Your table is reserved! We look forward to seeing you, " + name + ".";
    }
    reservationForm.reset();
}
});
}
    
// ------------------------------------------ 
// CONTACT FORM
//  ----------------------------------------
 
 var contactForm = document.getElementById("contactForm");
 if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
var name = document.getElementById("contactName").value;
var email = document.getElementById("contactEmail").value;
var message = document.getElementById("contactMsg").value;
var isValid = true;

if (name === "") { showError("contactNameErr"); isValid = false; } else {
     hideError("contactNameErr"); }
     
if (!email.includes("@") || !email.includes(".")) { showError("contactEmailErr"); isValid = 
    false; } else { hideError("contactEmailErr"); }
    
    if (message === "") { showError("contactMsgErr"); isValid = false; } else {
    hideError("contactMsgErr"); }
    
if (isValid) {
    
    var msg = document.getElementById("contactSuccess");
    if (msg) {
    msg.style.display = "block";
    msg.textContent = "Message sent! We will get back to you soon, " + name + ".";
}
contactForm.reset();
}
});
}

// ------------------------------------------
// CART - Data structure: localstorage, keys: ub_cart
// Cart shapes: [{ id, name, price, qty, img }]
// ------------------------------------------

function ubGetCart() {
    var raw = localStorage.getItem("ub_cart");
    if (!raw) return [];
    try { return JSON.parse(raw); } catch (e) { return []; }
}

// -------------------------------------------------------------
// CART - data helpers (localStorage, key: ub_cart)
// cart shape: [ { id: 1, qty: 2 }, { id: 4, qty: 1 } ]
// -------------------------------------------------------------

function ubGetCart() {
    var raw = localStorage.getItem("ub_cart");
    if (!raw) return [];
    try { 
        return JSON.parse(raw) || []; 
    } catch (e) { 
        return []; 
    }
}

function ubSaveCart(cart) {
    localStorage.setItem("ub_cart", JSON.stringify(cart));
    ubUpdateCartBadge();
    ubRenderCartDrawer();
}

function ubAddToCart(id, qty) {
    if (localStorage.getItem("ub_loggedIn") !== "true") {
        alert("Please login first to add items to your cart.");
        window.location.href = "login.html";
        return;
    }

    id = parseInt(id, 10);
    qty = parseInt(qty, 10) || 1;
    var cart = ubGetCart();
    var found = null;
    
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) { 
            found = cart[i]; 
            break; 
        }
    }
    
    if (found) { 
        found.qty += qty; 
    } else { 
        cart.push({ id: id, qty: qty }); 
    }
    
    ubSaveCart(cart);
    ubOpenCart();
}

function ubRemoveFromCart(id) {
    id = parseInt(id, 10);
    var cart = ubGetCart().filter(function(item) { 
        return item.id !== id; 
    });
    ubSaveCart(cart);
}

function ubUpdateCartQty(id, qty) {
    id = parseInt(id, 10);
    qty = parseInt(qty, 10);
    var cart = ubGetCart();
    
    if (qty < 1) { 
        ubRemoveFromCart(id); 
        return; 
    }
    
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === id) { 
            cart[i].qty = qty; 
            break; 
        }
    }
    ubSaveCart(cart);
}

function ubCartCount() {
    var cart = ubGetCart();
    var total = 0;
    for (var i = 0; i < cart.length; i++) { 
        total += cart[i].qty; 
    }
    return total;
}

function ubCartTotal() {
    var cart = ubGetCart();
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        var p = (typeof ubGetProductById === "function") ? ubGetProductById(cart[i].id) : null;
        if (p) total += p.price * cart[i].qty;
    }
    return total;
}

// -------------------------------------------------------------
// CART - UI: navbar icon + slide-in drawer
// Injected on every page so no page markup has to be duplicated.
// -------------------------------------------------------------

function ubBuildCartUI() {
    var navRight = document.querySelector(".navbar-right");
    if (!navRight || document.getElementById("cartToggleBtn")) return; 

    // --- cart icon button in navbar ---
    var cartBtn = document.createElement("button");
    cartBtn.id = "cartToggleBtn";
    cartBtn.className = "cart-toggle-btn";
    cartBtn.setAttribute("aria-label", "Open cart");
    cartBtn.innerHTML = '<i class="fas fa-shopping-cart"></i><span class="cart-count" id="cartCount">0</span>';
    navRight.insertBefore(cartBtn, navRight.firstChild);
    cartBtn.addEventListener("click", ubOpenCart);

    // --- overlay + drawer ---
    var overlay = document.createElement("div");
    overlay.id = "cartOverlay";
    overlay.className = "cart-overlay";

    var drawer = document.createElement("div");
    drawer.id = "cartDrawer";
    drawer.className = "cart-drawer";
    drawer.innerHTML = 
        '<div class="cart-drawer-header">' +
            '<h2>Your Cart</h2>' +
            '<button id="cartCloseBtn" class="cart-close-btn" aria-label="Close cart">&times;</button>' +
        '</div>' +
        '<div id="cartDrawerBody" class="cart-drawer-body"></div>' +
        '<div class="cart-drawer-footer">' +
            '<div class="cart-total-row"><span>Total:</span><span id="cartTotalAmount">$0</span></div>' +
            '<button class="btn-primary cart-checkout-btn" id="cartCheckoutBtn">Checkout</button>' +
        '</div>';

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    overlay.addEventListener("click", ubCloseCart);
    document.getElementById("cartCloseBtn").addEventListener("click", ubCloseCart);
    document.getElementById("cartCheckoutBtn").addEventListener("click", function() {
        if (ubGetCart().length === 0) return;
        alert("Thank you! Your order has been placed.");
        ubSaveCart([]);
        ubCloseCart();
    });

    ubUpdateCartBadge();
    ubRenderCartDrawer();
}

function ubOpenCart() {
    var overlay = document.getElementById("cartOverlay");
    var drawer = document.getElementById("cartDrawer");
    if (overlay) overlay.classList.add("active");
    if (drawer) drawer.classList.add("active");
}

function ubCloseCart() {
    var overlay = document.getElementById("cartOverlay");
    var drawer = document.getElementById("cartDrawer");
    if (overlay) overlay.classList.remove("active");
    if (drawer) drawer.classList.remove("active");
}

function ubUpdateCartBadge() {
    var badge = document.getElementById("cartCount");
    if (!badge) return;
    var count = ubCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
}

function ubRenderCartDrawer() {
    var body = document.getElementById("cartDrawerBody");
    var totalEl = document.getElementById("cartTotalAmount");
    if (!body) return;

    var cart = ubGetCart();

    if (cart.length === 0) {
        body.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
        if (totalEl) totalEl.textContent = "$0";
        return;
    }

    var html = "";
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var p = (typeof ubGetProductById === "function") ? ubGetProductById(item.id) : null;
        if (!p) continue;
        html +=
            '<div class="cart-item" data-id="' + p.id + '">' +
                '<img src="' + p.image + '" alt="' + p.name + '">' +
                '<div class="cart-item-info">' +
                    '<h5>' + p.name + '</h5>' +
                    '<span class="cart-item-price">$' + p.price + '</span>' +
                '</div>' +
                '<div class="cart-item-qty">' +
                    '<button class="qty-btn qty-decrease">-</button>' +
                    '<span>' + item.qty + '</span>' +
                    '<button class="qty-btn qty-increase">+</button>' +
                '</div>' +
                '<button class="cart-item-remove" aria-label="Remove item">&times;</button>' +
            '</div>';
    }

    body.innerHTML = html;
    if (totalEl) totalEl.textContent = "$" + ubCartTotal();

    // wire up per-item controls
    body.querySelectorAll(".cart-item").forEach(function(row) {
        var id = row.getAttribute("data-id");
        
        row.querySelector(".qty-btn.qty-decrease").addEventListener("click", function() {
            var cart = ubGetCart();
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].id == parseInt(id, 10)) { 
                    ubUpdateCartQty(id, cart[i].qty - 1); 
                    break; 
                }
            }
        });
        
        row.querySelector(".qty-btn.qty-increase").addEventListener("click", function() {
            var cart = ubGetCart();
            for (var i = 0; i < cart.length; i++) {
                if (cart[i].id == parseInt(id, 10)) { 
                    ubUpdateCartQty(id, cart[i].qty + 1); 
                    break; 
                }
            }
        });
        
        row.querySelector(".cart-item-remove").addEventListener("click", function() {
            ubRemoveFromCart(id);
        });
    });
}


// ------------------------------------------
// PRODUCT DETAILS
// ------------------------------------------

var productDetail = document.getElementById("productDetail");

if (productDetail && typeof ubGetProductById === "function") {
    var params = new URLSearchParams(window.location.search);
    var productId = params.get("id");
    var product = ubGetProductById(productId);

    if (product) {
        document.getElementById("pdImage").src = product.image;
        document.getElementById("pdImage").alt = product.name;
        document.getElementById("pdName").textContent = product.name;
        document.getElementById("pdPrice").textContent = "$" + product.price;
        document.getElementById("pdDesc").textContent = product.longDesc;

        var qty = 1;
        var qtyValue = document.getElementById("pdQtyValue");

        document.getElementById("pdQtyMinus").addEventListener("click", function () {
            if (qty > 1) {
                qty--;
                qtyValue.textContent = qty;
            }
        });

        document.getElementById("pdQtyPlus").addEventListener("click", function () {
            qty++;
            qtyValue.textContent = qty;
        });

        document.getElementById("pdAddToCart").addEventListener("click", function () {
            ubAddToCart(product.id, qty);
        });
    }
}

// --- INITIALIZATION ---
// Automatically triggers UI building once the page DOM loads
document.addEventListener("DOMContentLoaded", function() {
    ubBuildCartUI();
});

