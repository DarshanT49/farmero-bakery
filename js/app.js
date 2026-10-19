/**
 * THE FLOUR ATELIER — Artisan Bakery & Coffeehouse, Bengaluru
 * Interactive Application & Business Logic
 */

// ==========================================
// 1. MENU DATABASE (Products & Prices in ₹)
// ==========================================
const MENU_DATA = [
  // Sourdough Breads
  {
    id: 'sourdough-boule',
    name: 'Indiranagar Country Sourdough',
    category: 'sourdough',
    price: 320,
    isVeg: true,
    isChefPick: true,
    desc: '36-hour slow cold fermentation with organic Karnataka Khapli wheat. Crisp blistered crust and custard-like open crumb.',
    meta: 'Fermentation: 36 hrs • Organic Stoneground • 750g',
    image: 'assets/images/sourdough.jpg'
  },
  {
    id: 'roasted-garlic-sourdough',
    name: 'Confit Garlic & Rosemary Sourdough',
    category: 'sourdough',
    price: 380,
    isVeg: true,
    isChefPick: false,
    desc: 'Loaded with slow-confit sweet whole garlic cloves, cold-pressed olive oil, and fragrant Nilgiris rosemary.',
    meta: 'Fermentation: 36 hrs • Slow Confit • 750g',
    image: 'assets/images/sourdough.jpg'
  },
  {
    id: 'chocolate-cranberry-boule',
    name: 'Valrhona Chocolate & Cranberry Loaf',
    category: 'sourdough',
    price: 420,
    isVeg: true,
    isChefPick: true,
    desc: 'Dark 70% Belgian chocolate batons folded with tart sun-dried cranberries in dark cocoa sourdough.',
    meta: 'Semi-sweet • 70% Callebaut • 650g',
    image: 'assets/images/sourdough.jpg'
  },
  {
    id: 'artisan-baguette',
    name: 'Traditional French Baguette',
    category: 'sourdough',
    price: 180,
    isVeg: true,
    isChefPick: false,
    desc: 'Golden crisp exterior with an airy honeycomb crumb. Baked fresh twice daily at 8:00 AM & 4:30 PM.',
    meta: 'Classic French Style • Baked Twice Daily',
    image: 'assets/images/hero.jpg'
  },
  {
    id: 'olive-focaccia',
    name: 'Kalamata Olive & Sea Salt Focaccia',
    category: 'sourdough',
    price: 340,
    isVeg: true,
    isChefPick: false,
    desc: 'Pillow-soft Italian style focaccia dimpled with Greek Kalamata olives, confit cherry tomatoes, and Maldon flake salt.',
    meta: 'Extra Virgin Olive Oil • Fluffy Crumb',
    image: 'assets/images/hero.jpg'
  },

  // Viennoiserie (Croissants & Pastries)
  {
    id: 'classic-croissant',
    name: 'French Beurre AOP Croissant',
    category: 'viennoiserie',
    price: 190,
    isVeg: false,
    isChefPick: true,
    desc: '72 delicate laminated layers made with imported French Normandy butter. Incomparably airy, flaky and buttery.',
    meta: 'Normandy Butter • 3-Day Lamination',
    image: 'assets/images/croissant.jpg'
  },
  {
    id: 'almond-croissant',
    name: 'Twice-Baked Almond Frangipane',
    category: 'viennoiserie',
    price: 270,
    isVeg: false,
    isChefPick: true,
    desc: 'Filled with velvety almond cream, soaked in vanilla bean syrup, and loaded with toasted California almond flakes.',
    meta: 'Toasted Almonds • Madagascar Vanilla',
    image: 'assets/images/pastry.jpg'
  },
  {
    id: 'pain-au-chocolat',
    name: 'French Pain au Chocolat',
    category: 'viennoiserie',
    price: 240,
    isVeg: false,
    isChefPick: false,
    desc: 'Buttery flaky pastry encasing two generous batons of rich 55% French dark chocolate.',
    meta: 'French Dark Chocolate • Flaky & Crisp',
    image: 'assets/images/croissant.jpg'
  },
  {
    id: 'cardamom-bun',
    name: 'Mysore Cardamom Morning Bun',
    category: 'viennoiserie',
    price: 220,
    isVeg: true,
    isChefPick: true,
    desc: 'Nordic-style twisted brioche knot tossed in fragrant crushed green cardamom and raw demerara sugar.',
    meta: '100% Eggless • Fresh Ground Mysore Cardamom',
    image: 'assets/images/pastry.jpg'
  },
  {
    id: 'passionfruit-cruffin',
    name: 'Coorg Passionfruit Cruffin',
    category: 'viennoiserie',
    price: 260,
    isVeg: true,
    isChefPick: false,
    desc: 'Croissant-muffin hybrid dusted in citrus sugar and piped with tangy fresh passionfruit curd from Coorg.',
    meta: 'Eggless • Coorg Organic Passionfruit',
    image: 'assets/images/pastry.jpg'
  },

  // Cakes & Slices
  {
    id: 'basque-cheesecake',
    name: 'San Sebastián Basque Burnt Cheesecake',
    category: 'cakes',
    price: 340,
    isVeg: true,
    isChefPick: true,
    desc: 'Intentionally scorched on top with a deeply caramelized note and a rich, creamy, custard-soft center.',
    meta: 'Eggless Recipe • Madagascar Vanilla Bean',
    image: 'assets/images/pastry.jpg'
  },
  {
    id: 'belgian-truffle-cake',
    name: 'Belgian Dark Truffle Cake (500g)',
    category: 'cakes',
    price: 1450,
    isVeg: true,
    isChefPick: true,
    desc: 'Layers of moist chocolate sponge, 70% Callebaut dark ganache, roasted hazelnut crunch, and 24K edible gold leaf.',
    meta: '100% Eggless • Callebaut 70% • Serves 4-6',
    image: 'assets/images/cake.jpg'
  },
  {
    id: 'wild-berry-tart',
    name: 'Wild Raspberry & Almond Sablé Tart',
    category: 'cakes',
    price: 320,
    isVeg: false,
    isChefPick: false,
    desc: 'Crisp French butter sablé tart shell filled with Madagascan vanilla bean diplomat cream and fresh raspberries.',
    meta: 'Fresh Berry Garnish • Almond Sablé',
    image: 'assets/images/hero.jpg'
  },
  {
    id: 'filter-coffee-tiramisu',
    name: 'Bengaluru Filter Coffee Tiramisu',
    category: 'cakes',
    price: 310,
    isVeg: true,
    isChefPick: true,
    desc: 'House-made sponge biscuits soaked in Chikmagalur dark roast decoction, layered with whipped mascarpone.',
    meta: 'Eggless • Chikmagalur Peaberry Decoction',
    image: 'assets/images/pastry.jpg'
  },

  // Savory Bakes
  {
    id: 'mushroom-truffle-danish',
    name: 'Wild Mushroom & Truffle Danish',
    category: 'savory',
    price: 260,
    isVeg: true,
    isChefPick: true,
    desc: 'Buttery puff square topped with sautéed portobello, button mushrooms, fresh thyme, and white truffle essence.',
    meta: 'Eggless • Wild Mushrooms • Thyme',
    image: 'assets/images/hero.jpg'
  },
  {
    id: 'smoked-paneer-brioche',
    name: 'Smoked Paneer & Basil Pesto Brioche',
    category: 'savory',
    price: 240,
    isVeg: true,
    isChefPick: false,
    desc: 'Soft golden brioche bun stuffed with house-smoked paneer, pine nut basil pesto, and charred cherry tomatoes.',
    meta: 'Eggless • Handcrafted Pesto',
    image: 'assets/images/hero.jpg'
  },

  // Coffee & Drinks
  {
    id: 'flat-white',
    name: 'Chikmagalur Single-Estate Flat White',
    category: 'coffee',
    price: 210,
    isVeg: true,
    isChefPick: true,
    desc: 'Double shot of high-altitude Arabica from Baba Budangiri with silky micro-foam latte art.',
    meta: 'Estate Arabica • Notes of Dark Cocoa & Fig',
    image: 'assets/images/pastry.jpg'
  },
  {
    id: 'spanish-latte',
    name: 'Salted Caramel Spanish Iced Latte',
    category: 'coffee',
    price: 240,
    isVeg: true,
    isChefPick: false,
    desc: 'Espresso poured over rich sweetened milk, salted caramel drizzle, and ice cubes. The ultimate Bangalore cooler.',
    meta: 'House-Made Caramel • Double Espresso',
    image: 'assets/images/pastry.jpg'
  }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let cart = [];
let currentCategory = 'all';
let searchQuery = '';
let filterEgglessOnly = false;
let filterChefPicksOnly = false;

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initLiveHoursStatus();
  initMenuFilters();
  renderMenu();
  initCart();
  initContactForm();
  initMobileBottomNav();
  initHeaderScroll();
  highlightTodayHours();
});

// ==========================================
// 4. BENGALURU LIVE HOURS CHECKER
// ==========================================
function initLiveHoursStatus() {
  // We compute time in Indian Standard Time (IST - UTC+5:30)
  const now = new Date();
  // IST offset is 330 minutes
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istDate = new Date(utc + (3600000 * 5.5));

  const day = istDate.getDay(); // 0 is Sunday, 6 is Saturday
  const hour = istDate.getHours();
  const minute = istDate.getMinutes();
  const currentTimeVal = hour * 60 + minute;

  // Mon-Fri: 07:30 (450) to 22:00 (1320)
  // Sat-Sun: 07:00 (420) to 22:30 (1350)
  const isWeekend = (day === 0 || day === 6);
  const openTime = isWeekend ? (7 * 60) : (7 * 60 + 30);
  const closeTime = isWeekend ? (22 * 60 + 30) : (22 * 60);

  const isOpen = (currentTimeVal >= openTime && currentTimeVal < closeTime);

  // Update Status Pill in Nav & Location Card
  const navStatusPill = document.getElementById('nav-status-pill');
  const liveStatusText = document.getElementById('live-status-text');
  const liveStatusSub = document.getElementById('live-status-sub');
  const liveStatusDot = document.getElementById('live-status-dot');

  if (isOpen) {
    const closeStr = isWeekend ? '10:30 PM' : '10:00 PM';
    if (navStatusPill) navStatusPill.innerHTML = `<span class="status-indicator-dot"></span> Open until ${closeStr}`;
    if (liveStatusText) liveStatusText.textContent = '🟢 We are currently open & baking!';
    if (liveStatusSub) liveStatusSub.textContent = `Today's batch is warm. Service wraps up at ${closeStr}.`;
    if (liveStatusDot) liveStatusDot.style.background = 'var(--color-brand-green)';
  } else {
    const nextOpenStr = isWeekend ? '7:00 AM' : '7:30 AM';
    if (navStatusPill) navStatusPill.innerHTML = `<span class="status-indicator-dot" style="background: #E5823C;"></span> Opens at ${nextOpenStr}`;
    if (liveStatusText) liveStatusText.textContent = '🟠 Currently closed for the night';
    if (liveStatusSub) liveStatusSub.textContent = `Our bakers begin sourdough proofs at dawn. Doors open at ${nextOpenStr}.`;
    if (liveStatusDot) liveStatusDot.style.background = '#E5823C';
  }
}

// Highlight today in the hours table
function highlightTodayHours() {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayName = days[new Date().getDay()];
  const row = document.getElementById(`hours-row-${todayName}`);
  if (row) {
    row.classList.add('today-highlight');
  }
}

// ==========================================
// 5. MENU RENDERING & FILTERING
// ==========================================
function initMenuFilters() {
  // Category buttons
  const catButtons = document.querySelectorAll('.category-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderMenu();
    });
  });

  // Search input
  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderMenu();
    });
  }

  // Eggless filter toggle
  const egglessBtn = document.getElementById('filter-eggless-btn');
  if (egglessBtn) {
    egglessBtn.addEventListener('click', () => {
      filterEgglessOnly = !filterEgglessOnly;
      egglessBtn.classList.toggle('active', filterEgglessOnly);
      renderMenu();
    });
  }

  // Chef's picks filter toggle
  const chefBtn = document.getElementById('filter-chef-btn');
  if (chefBtn) {
    chefBtn.addEventListener('click', () => {
      filterChefPicksOnly = !filterChefPicksOnly;
      chefBtn.classList.toggle('active', filterChefPicksOnly);
      renderMenu();
    });
  }
}

function renderMenu() {
  const grid = document.getElementById('menu-items-grid');
  if (!grid) return;

  const filtered = MENU_DATA.filter(item => {
    // Category match
    if (currentCategory !== 'all' && item.category !== currentCategory) {
      return false;
    }
    // Search match
    if (searchQuery) {
      const matchName = item.name.toLowerCase().includes(searchQuery);
      const matchDesc = item.desc.toLowerCase().includes(searchQuery);
      const matchMeta = item.meta.toLowerCase().includes(searchQuery);
      if (!matchName && !matchDesc && !matchMeta) return false;
    }
    // Eggless match
    if (filterEgglessOnly && !item.isVeg) {
      return false;
    }
    // Chef pick match
    if (filterChefPicksOnly && !item.isChefPick) {
      return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="menu-empty-state">
        <div style="font-size: 2.5rem; margin-bottom: 12px;">🥐</div>
        <h3 style="font-family: var(--font-serif); font-size: 1.3rem; margin-bottom: 6px;">No bakes match your filters</h3>
        <p style="color: var(--color-text-secondary); font-size: 0.9rem;">Try clearing the search or switching categories.</p>
        <button class="btn btn-secondary" style="margin-top: 16px;" onclick="resetMenuFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="menu-card" data-id="${item.id}">
      <div class="menu-card-media">
        <img src="${item.image}" alt="${item.name}" loading="lazy" />
        <div class="menu-card-badges">
          <span class="food-type-tag ${item.isVeg ? 'eggless' : 'contains-egg'}">
            <span class="tag-dot"></span>
            ${item.isVeg ? '100% Eggless' : 'Contains Egg'}
          </span>
          ${item.isChefPick ? '<span class="chef-badge">⭐ Signature</span>' : ''}
        </div>
      </div>
      <div class="menu-card-body">
        <div class="menu-card-header">
          <h3 class="menu-card-title">${item.name}</h3>
          <span class="menu-card-price">₹${item.price}</span>
        </div>
        <p class="menu-card-desc">${item.desc}</p>
        <div class="menu-card-meta">${item.meta}</div>
        <div class="menu-card-footer">
          <button class="add-box-btn" onclick="addToTastingBox('${item.id}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add to Tasting Box
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

window.resetMenuFilters = function() {
  currentCategory = 'all';
  searchQuery = '';
  filterEgglessOnly = false;
  filterChefPicksOnly = false;

  const searchInput = document.getElementById('menu-search-input');
  if (searchInput) searchInput.value = '';

  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === 'all');
  });

  const egglessBtn = document.getElementById('filter-eggless-btn');
  if (egglessBtn) egglessBtn.classList.remove('active');

  const chefBtn = document.getElementById('filter-chef-btn');
  if (chefBtn) chefBtn.classList.remove('active');

  renderMenu();
};

// ==========================================
// 6. TASTING BOX / PRE-ORDER DRAWER (WHATSAPP)
// ==========================================
function initCart() {
  const triggerBtn = document.getElementById('tasting-box-trigger');
  const mobileTrigger = document.getElementById('mobile-box-trigger');
  const closeBtn = document.getElementById('drawer-close-btn');
  const backdrop = document.getElementById('cart-drawer-backdrop');

  if (triggerBtn) triggerBtn.addEventListener('click', openDrawer);
  if (mobileTrigger) mobileTrigger.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeDrawer();
    });
  }

  // WhatsApp Order Button
  const waBtn = document.getElementById('whatsapp-order-btn');
  if (waBtn) {
    waBtn.addEventListener('click', handleWhatsAppOrder);
  }
}

function openDrawer() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (backdrop) {
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeDrawer() {
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.addToTastingBox = function(id) {
  const product = MENU_DATA.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  showToast(`Added ${product.name} to Tasting Box!`);
};

window.changeCartQty = function(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  updateCartUI();
};

function updateCartUI() {
  // Update badges
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const badge = document.getElementById('cart-count-badge');
  const mobileBadge = document.getElementById('mobile-cart-badge');
  if (badge) badge.textContent = totalCount;
  if (mobileBadge) mobileBadge.textContent = totalCount;

  // Update Drawer Body
  const drawerBody = document.getElementById('drawer-items-list');
  const drawerSubtotal = document.getElementById('drawer-subtotal');
  const drawerTotal = document.getElementById('drawer-total');
  const emptyState = document.getElementById('drawer-empty-state');
  const drawerFooter = document.getElementById('drawer-footer-content');

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (cart.length === 0) {
    if (drawerBody) drawerBody.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (drawerFooter) drawerFooter.style.display = 'none';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    if (drawerFooter) drawerFooter.style.display = 'block';

    if (drawerBody) {
      drawerBody.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div class="cart-item-details">
            <h4 class="cart-item-name">${item.name}</h4>
            <div class="cart-item-price">₹${item.price} each</div>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="changeCartQty('${item.id}', -1)">-</button>
            <span style="font-weight: 700; font-size: 0.85rem; min-width: 16px; text-align: center;">${item.qty}</span>
            <button class="qty-btn" onclick="changeCartQty('${item.id}', 1)">+</button>
          </div>
        </div>
      `).join('');
    }

    if (drawerSubtotal) drawerSubtotal.textContent = `₹${subtotal}`;
    if (drawerTotal) drawerTotal.textContent = `₹${subtotal}`;
  }
}

function handleWhatsAppOrder() {
  if (cart.length === 0) {
    showToast('Your tasting box is empty!');
    return;
  }

  const bakeryPhone = '919880123456'; // Bengaluru Bakery Official Contact
  let orderText = `*New Order Inquiry — The Flour Atelier (Bengaluru)*\n\n`;
  orderText += `Hello! I would like to reserve/pre-order the following fresh bakes:\n\n`;

  let grandTotal = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    grandTotal += itemTotal;
    orderText += `${index + 1}. *${item.name}* x ${item.qty} — ₹${itemTotal}\n`;
  });

  orderText += `\n*Estimated Total:* ₹${grandTotal}\n`;
  orderText += `*Pickup Location:* 12th Main Road, Indiranagar, Bengaluru\n\n`;
  orderText += `Please let me know if this batch is ready for pickup/delivery today! Thank you.`;

  const waUrl = `https://wa.me/${bakeryPhone}?text=${encodeURIComponent(orderText)}`;
  window.open(waUrl, '_blank');
}

// ==========================================
// 7. CONTACT & CUSTOM CAKE FORM
// ==========================================
function initContactForm() {
  const form = document.getElementById('bakery-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const serviceType = document.getElementById('contact-service').value;
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !phone) {
      showToast('Please provide your name and phone number');
      return;
    }

    // Submit button state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `<span>Sending inquiry...</span>`;
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
      form.reset();

      // Show Confirmation Modal
      showConfirmationModal(name, serviceType);
    }, 900);
  });
}

function showConfirmationModal(name, serviceType) {
  const modalBackdrop = document.createElement('div');
  modalBackdrop.className = 'drawer-backdrop active';
  modalBackdrop.style.zIndex = '3500';

  const refCode = 'TFA-' + Math.floor(1000 + Math.random() * 9000);

  modalBackdrop.innerHTML = `
    <div style="background: white; max-width: 480px; width: 90%; margin: auto; padding: 36px; border-radius: var(--radius-xl); text-align: center; box-shadow: var(--shadow-lg); border: 1px solid var(--color-border); position: relative; top: 50%; transform: translateY(-50%);">
      <div style="width: 60px; height: 60px; background: var(--color-brand-green-bg); color: var(--color-brand-green); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 16px;">✓</div>
      <h3 style="font-family: var(--font-serif); font-size: 1.6rem; margin-bottom: 8px;">Inquiry Received!</h3>
      <p style="color: var(--color-text-secondary); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
        Thank you, <strong>${name}</strong>. Our chef & hospitality team at Indiranagar has received your <strong>${serviceType}</strong> request. Reference: <strong>${refCode}</strong>.
      </p>
      <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 24px;">
        We typically reply via WhatsApp / phone within 30 minutes during baking hours.
      </p>
      <div style="display: flex; gap: 12px; justify-content: center;">
        <button class="btn btn-dark" id="close-confirm-modal">Back to Website</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalBackdrop);

  document.getElementById('close-confirm-modal').addEventListener('click', () => {
    modalBackdrop.remove();
  });
}

// ==========================================
// 8. TOAST NOTIFICATION
// ==========================================
function showToast(message) {
  let toast = document.getElementById('site-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'site-toast';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#DDA343" stroke-width="2.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('active');

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('active');
  }, 3200);
}

// ==========================================
// 9. MOBILE NAVIGATION (BOTTOM BAR & SCROLLSPY)
// ==========================================
function initMobileBottomNav() {
  const bottomNav = document.getElementById('mobile-bottom-bar');
  if (!bottomNav) return;

  const bottomLinks = bottomNav.querySelectorAll('a.mobile-bottom-item');
  const boxTrigger = document.getElementById('mobile-box-trigger');

  // Handle smooth navigation when tapping on links in the mobile bottom bar
  bottomLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetEl = document.querySelector(href);
        if (targetEl) {
          // Scroll with offset for sticky header
          const navHeight = 70;
          const elementPosition = targetEl.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Update active state immediately
          document.querySelectorAll('.mobile-bottom-nav .mobile-bottom-item').forEach(item => {
            item.classList.remove('active');
          });
          link.classList.add('active');
        }
      }
    });
  });

  // Handle opening the Tasting Box drawer from the mobile bottom bar
  if (boxTrigger) {
    boxTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      openDrawer();
    });
  }

  // ScrollSpy: Automatically highlight the corresponding bottom bar item on scroll
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) cancelAnimationFrame(scrollTimeout);
    scrollTimeout = requestAnimationFrame(() => {
      const sections = [
        { id: 'location', el: document.getElementById('location') },
        { id: 'menu', el: document.getElementById('menu') },
        { id: 'home', el: document.getElementById('home') }
      ];

      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        if (section.el) {
          const top = section.el.offsetTop;
          if (scrollPosition >= top) {
            bottomLinks.forEach(link => {
              if (link.getAttribute('href') === `#${section.id}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
            break;
          }
        }
      }
    });
  }, { passive: true });
}

function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}
