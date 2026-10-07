// ============================================================
// Brew & Bean — Complete Application Logic & Services
// ============================================================

// --- SVG Placeholder Utility Functions (As specified in prompt) ---
const gradients = {
  'prod-1': ['#4A3728', '#2C1810'],     // Espresso - deep brown
  'prod-2': ['#5C4A3A', '#3C2A1E'],     // Americano - warm brown
  'prod-3': ['#D4A574', '#8B6B4A'],     // Cappuccino - creamy
  'prod-4': ['#C8A882', '#8B7355'],     // Café Latte - light coffee
  'prod-5': ['#E8D4B8', '#C8A882'],     // Vanilla Latte - cream
  'prod-6': ['#C49A6C', '#8B6B4A'],     // Caramel Macchiato
  'prod-7': ['#5C3D2E', '#2E1F15'],     // Mocha - chocolate brown
  'prod-8': ['#D4B896', '#A08060'],     // Spanish Latte - golden
  'prod-9': ['#7A9EB8', '#4A6E82'],     // Iced Americano - cool
  'prod-10': ['#B8C8D4', '#8AA0B8'],    // Iced Latte - icy blue
  'prod-11': ['#6B4A3A', '#3C2218'],    // Iced Mocha - dark cool
  'prod-12': ['#7BA05B', '#4A7032'],    // Matcha Latte - green
  'prod-13': ['#8AB870', '#5A8848'],    // Iced Matcha - light green
  'prod-14': ['#D47088', '#7BA05B'],    // Strawberry Matcha - pink/green
  'prod-15': ['#A08060', '#6B5040'],    // Hojicha - roasted amber
  'prod-16': ['#C89060', '#8B6030'],    // Chai Latte - spice
  'prod-17': ['#6B7B8B', '#4A5A6B'],    // Earl Grey - grey blue
  'prod-18': ['#E8A870', '#C87840'],    // Peach Iced Tea - peach
  'prod-19': ['#D4B07A', '#A08050'],    // Butter Croissant - golden
  'prod-20': ['#5C3D2E', '#D4A060'],    // Chocolate Croissant - choc/gold
  'prod-21': ['#5B5BAA', '#8B8BD4'],    // Blueberry Muffin - blueberry
  'prod-22': ['#C8A050', '#8B7030'],    // Banana Walnut - banana gold
  'prod-23': ['#A07040', '#D4A870'],    // Cinnamon Roll - cinnamon
  'prod-24': ['#5C3D2E', '#D4B896'],    // Choc Chip Cookie - brown/cream
  'prod-25': ['#C8A060', '#8B6B30'],    // Burnt Cheesecake - golden
  'prod-26': ['#6B4A3A', '#C8A882'],    // Tiramisu - coffee/cream
  'prod-27': ['#3C2218', '#6B3A28'],    // Chocolate Brownie - deep choc
  'prod-28': ['#7BA05B', '#C8A882'],    // Matcha Cheesecake - green/cream
  'prod-29': ['#E87080', '#D4A882'],    // Strawberry Shortcake - pink
  'prod-30': ['#D4B896', '#C89060'],    // Chicken Croissant - warm
  'prod-31': ['#C8B090', '#A09070'],    // Tuna Melt - warm neutral
  'prod-32': ['#E8D8B8', '#C8B898'],    // Egg Mayo Toast - cream
  'prod-33': ['#7BA05B', '#D4C8A0'],    // Avocado Toast - green/toast
  'prod-34': ['#6B8B4A', '#D4B896'],    // Chicken Pesto - herb green
  'prod-35': ['#E87088', '#F0A0B0'],    // Strawberry Milk - pink
  'prod-36': ['#4A2818', '#6B4030'],    // Chocolate Frappe - dark choc
  'prod-37': ['#C89060', '#4A2818'],    // Caramel Frappe - caramel
  'prod-38': ['#E8A040', '#F0C870'],    // Mango Smoothie - mango
  'prod-39': ['#8B3060', '#C86090'],    // Berry Smoothie - berry
  'prod-40': ['#C8D840', '#80B830'],    // Sparkling Lemonade - citrus
};

const emojis = {
  'prod-1': '☕', 'prod-2': '☕', 'prod-3': '☕', 'prod-4': '☕',
  'prod-5': '☕', 'prod-6': '☕', 'prod-7': '☕', 'prod-8': '☕',
  'prod-9': '🧊', 'prod-10': '🧊', 'prod-11': '🧊',
  'prod-12': '🍵', 'prod-13': '🍵', 'prod-14': '🍓', 'prod-15': '🍵',
  'prod-16': '☕', 'prod-17': '🫖', 'prod-18': '🍑',
  'prod-19': '🥐', 'prod-20': '🥐', 'prod-21': '🫐', 'prod-22': '🍌',
  'prod-23': '🍩', 'prod-24': '🍪',
  'prod-25': '🍰', 'prod-26': '🍰', 'prod-27': '🍫', 'prod-28': '🍰', 'prod-29': '🍓',
  'prod-30': '🥐', 'prod-31': '🐟', 'prod-32': '🥚', 'prod-33': '🥑', 'prod-34': '🥪',
  'prod-35': '🍓', 'prod-36': '🍫', 'prod-37': '☕', 'prod-38': '🥭', 'prod-39': '🫐', 'prod-40': '🍋',
};

function getProductPlaceholder(productId, name) {
  const [color1, color2] = gradients[productId] || ['#8B7355', '#5C4A3A'];
  const emoji = emojis[productId] || '☕';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <defs>
      <linearGradient id="g_${productId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#g_${productId})" rx="0" ry="0"/>
    <text x="200" y="130" text-anchor="middle" font-size="64">${emoji}</text>
    <text x="200" y="190" text-anchor="middle" font-family="Georgia,serif" font-size="18" fill="rgba(255,255,255,0.9)" font-weight="600">${escapeXml(name)}</text>
    <text x="200" y="215" text-anchor="middle" font-family="sans-serif" font-size="11" fill="rgba(255,255,255,0.5)">BREW &amp; BEAN</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function escapeXml(str) {
  return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const categoryGradients = {
  'cat-1': ['#4A3728', '#2C1810', '☕'],
  'cat-2': ['#7BA05B', '#4A7032', '🍵'],
  'cat-3': ['#D4B07A', '#A08050', '🥐'],
  'cat-4': ['#C8A060', '#8B6B30', '🍰'],
  'cat-5': ['#6B8B4A', '#4A6030', '🥪'],
  'cat-6': ['#7A9EB8', '#4A6E82', '🧊'],
};

function getCategoryPlaceholder(categoryId, name) {
  const [color1, color2, emoji] = categoryGradients[categoryId] || ['#8B7355', '#5C4A3A', '🍽️'];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="cg_${categoryId}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#cg_${categoryId})" rx="20" ry="20"/>
    <text x="100" y="90" text-anchor="middle" font-size="48">${emoji}</text>
    <text x="100" y="130" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="rgba(255,255,255,0.9)" font-weight="600">${escapeXml(name)}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

// --- Default Seed Data ---
const DEFAULT_CATEGORIES = [
  { id: 'cat-1', name: 'Espresso & Coffee', slug: 'espresso-coffee', icon: '☕', order: 1, createdAt: new Date().toISOString() },
  { id: 'cat-2', name: 'Tea & Matcha', slug: 'tea-matcha', icon: '🍵', order: 2, createdAt: new Date().toISOString() },
  { id: 'cat-3', name: 'Pastries & Bakery', slug: 'pastries-bakery', icon: '🥐', order: 3, createdAt: new Date().toISOString() },
  { id: 'cat-4', name: 'Cakes & Desserts', slug: 'cakes-desserts', icon: '🍰', order: 4, createdAt: new Date().toISOString() },
  { id: 'cat-5', name: 'Savory & Sandwiches', slug: 'savory-sandwiches', icon: '🥪', order: 5, createdAt: new Date().toISOString() },
  { id: 'cat-6', name: 'Cold Brew & Blended', slug: 'cold-brew-beverages', icon: '🧊', order: 6, createdAt: new Date().toISOString() },
];

const BEVERAGE_CUSTOMIZATIONS = [
  {
    name: 'Size',
    type: 'single',
    required: true,
    options: [
      { name: 'Regular (12oz)', priceModifier: 0 },
      { name: 'Large (16oz)', priceModifier: 0.85 },
      { name: 'Extra Large (20oz)', priceModifier: 1.50 },
    ]
  },
  {
    name: 'Milk Choice',
    type: 'single',
    required: false,
    options: [
      { name: 'Whole Milk', priceModifier: 0 },
      { name: 'Oat Milk', priceModifier: 0.75 },
      { name: 'Almond Milk', priceModifier: 0.75 },
      { name: 'Skim Milk', priceModifier: 0 },
    ]
  },
  {
    name: 'Sweetness Level',
    type: 'single',
    required: false,
    options: [
      { name: '100% Normal Sweet', priceModifier: 0 },
      { name: '75% Less Sweet', priceModifier: 0 },
      { name: '50% Half Sweet', priceModifier: 0 },
      { name: 'Unsweetened', priceModifier: 0 },
    ]
  },
  {
    name: 'Add-ons',
    type: 'multiple',
    required: false,
    options: [
      { name: 'Extra Espresso Shot', priceModifier: 1.00 },
      { name: 'Caramel Drizzle', priceModifier: 0.50 },
      { name: 'Whipped Cream', priceModifier: 0.50 },
    ]
  }
];

const BAKERY_CUSTOMIZATIONS = [
  {
    name: 'Heating Preference',
    type: 'single',
    required: true,
    options: [
      { name: 'Warmed / Toasted', priceModifier: 0 },
      { name: 'Served Room Temp', priceModifier: 0 },
    ]
  },
  {
    name: 'Extra Spreads',
    type: 'multiple',
    required: false,
    options: [
      { name: 'Artisan Butter', priceModifier: 0.50 },
      { name: 'Cream Cheese Dip', priceModifier: 1.00 },
      { name: 'Belgian Chocolate Dip', priceModifier: 0.85 },
    ]
  }
];

const DEFAULT_PRODUCTS = [
  // Espresso & Coffee (prod-1 to prod-11)
  { id: 'prod-1', name: 'Single Origin Espresso', description: 'Bold, intense shot with velvety crema and notes of toasted dark chocolate.', price: 3.50, categoryId: 'cat-1', imageUrl: '', ingredients: ['Arabica Espresso'], allergens: [], available: true, featured: true, rating: 4.9, reviewCount: 142, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-2', name: 'Classic Caffe Americano', description: 'Double espresso shot diluted with purified hot water.', price: 4.20, categoryId: 'cat-1', imageUrl: '', ingredients: ['Espresso', 'Filtered Water'], allergens: [], available: true, featured: false, rating: 4.7, reviewCount: 98, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-3', name: 'Velvet Cappuccino', description: 'Equal harmony of espresso, silky steamed milk, and airy microfoam.', price: 4.80, categoryId: 'cat-1', imageUrl: '', ingredients: ['Espresso', 'Whole Milk'], allergens: ['Dairy'], available: true, featured: true, rating: 4.8, reviewCount: 210, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-4', name: 'Artisan Cafe Latte', description: 'Smooth double espresso blended with creamy steamed milk and thin froth.', price: 5.20, categoryId: 'cat-1', imageUrl: '', ingredients: ['Espresso', 'Steamed Milk'], allergens: ['Dairy'], available: true, featured: true, rating: 4.9, reviewCount: 320, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-5', name: 'French Vanilla Latte', description: 'Espresso infused with pure Madagascar vanilla extract and hot milk.', price: 5.80, categoryId: 'cat-1', imageUrl: '', ingredients: ['Espresso', 'Vanilla Extract', 'Milk'], allergens: ['Dairy'], available: true, featured: false, rating: 4.8, reviewCount: 185, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-6', name: 'Salted Caramel Macchiato', description: 'Layered espresso with vanilla syrup, microfoam, and homemade salted caramel drizzle.', price: 6.20, categoryId: 'cat-1', imageUrl: '', ingredients: ['Espresso', 'Caramel', 'Vanilla', 'Milk'], allergens: ['Dairy'], available: true, featured: true, rating: 4.95, reviewCount: 410, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-7', name: 'Dark Chocolate Mocha', description: 'Rich Dutch cocoa blended with espresso, warm milk, and cocoa powder dust.', price: 6.00, categoryId: 'cat-1', imageUrl: '', ingredients: ['Espresso', 'Dutch Cocoa', 'Milk'], allergens: ['Dairy'], available: true, featured: false, rating: 4.75, reviewCount: 160, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-8', name: 'Spanish Latte', description: 'Sweetened condensed milk balanced with double espresso and velvety milk.', price: 5.90, categoryId: 'cat-1', imageUrl: '', ingredients: ['Espresso', 'Condensed Milk', 'Milk'], allergens: ['Dairy'], available: true, featured: false, rating: 4.85, reviewCount: 220, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-9', name: 'Iced Americano', description: 'Double espresso poured over ice blocks and cold mineral water.', price: 4.50, categoryId: 'cat-1', imageUrl: '', ingredients: ['Espresso', 'Ice', 'Water'], allergens: [], available: true, featured: false, rating: 4.7, reviewCount: 130, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-10', name: 'Iced Artisan Latte', description: 'Chilled double shot over cold farm milk and solid ice cubes.', price: 5.50, categoryId: 'cat-1', imageUrl: '', ingredients: ['Espresso', 'Cold Milk', 'Ice'], allergens: ['Dairy'], available: true, featured: true, rating: 4.9, reviewCount: 290, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-11', name: 'Iced Cocoa Mocha', description: 'Chilled dark mocha blend over crushed ice with dark chocolate swirls.', price: 6.30, categoryId: 'cat-1', imageUrl: '', ingredients: ['Espresso', 'Dark Chocolate', 'Milk', 'Ice'], allergens: ['Dairy'], available: true, featured: false, rating: 4.8, reviewCount: 175, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },

  // Tea & Matcha (prod-12 to prod-18)
  { id: 'prod-12', name: 'Uji Ceremonial Matcha Latte', description: 'First-harvest Japanese ceremonial matcha whisked smoothly with oat milk.', price: 6.50, categoryId: 'cat-2', imageUrl: '', ingredients: ['Uji Matcha', 'Oat Milk'], allergens: [], available: true, featured: true, rating: 4.95, reviewCount: 380, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-13', name: 'Iced Oat Matcha Latte', description: 'Whisked green tea poured over icy oat milk for a refreshing earthy sip.', price: 6.80, categoryId: 'cat-2', imageUrl: '', ingredients: ['Matcha', 'Oat Milk', 'Ice'], allergens: [], available: true, featured: true, rating: 4.9, reviewCount: 450, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-14', name: 'Strawberry Matcha Latte', description: 'Organic strawberry compote layer topped with oat milk and green matcha foam.', price: 7.20, categoryId: 'cat-2', imageUrl: '', ingredients: ['Matcha', 'Strawberry Compote', 'Oat Milk'], allergens: [], available: true, featured: true, rating: 4.98, reviewCount: 520, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-15', name: 'Roasted Hojicha Latte', description: 'Smoky roasted Japanese green tea leaves steamed with silky whole milk.', price: 6.20, categoryId: 'cat-2', imageUrl: '', ingredients: ['Hojicha Tea', 'Steamed Milk'], allergens: ['Dairy'], available: true, featured: false, rating: 4.75, reviewCount: 95, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-16', name: 'Spiced Chai Tea Latte', description: 'Black tea leaves simmered with ginger, cardamom, clove, cinnamon, and hot milk.', price: 5.80, categoryId: 'cat-2', imageUrl: '', ingredients: ['Black Tea', 'Spices', 'Honey', 'Milk'], allergens: ['Dairy'], available: true, featured: false, rating: 4.8, reviewCount: 160, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-17', name: 'Imperial Earl Grey Tea', description: 'Single estate black tea infused with natural bergamot oil.', price: 4.50, categoryId: 'cat-2', imageUrl: '', ingredients: ['Earl Grey Tea Leaves'], allergens: [], available: true, featured: false, rating: 4.65, reviewCount: 70, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-18', name: 'Sparkling Peach Iced Tea', description: 'Cold brewed white tea with white peach puree and gentle sparkling bubbles.', price: 5.20, categoryId: 'cat-2', imageUrl: '', ingredients: ['White Tea', 'Peach Puree', 'Sparkling Water'], allergens: [], available: true, featured: false, rating: 4.85, reviewCount: 190, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },

  // Pastries & Bakery (prod-19 to prod-24)
  { id: 'prod-19', name: 'Golden Butter Croissant', description: 'Flaky, golden French croissant laminated with pure Normandy butter.', price: 3.80, categoryId: 'cat-3', imageUrl: '', ingredients: ['Wheat Flour', 'Normandy Butter', 'Yeast'], allergens: ['Gluten', 'Dairy'], available: true, featured: true, rating: 4.9, reviewCount: 310, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-20', name: 'Double Chocolate Croissant', description: 'Flaky pastry dough wrapped around two bars of rich dark Belgian chocolate.', price: 4.50, categoryId: 'cat-3', imageUrl: '', ingredients: ['Butter Pastry', 'Dark Chocolate'], allergens: ['Gluten', 'Dairy'], available: true, featured: true, rating: 4.95, reviewCount: 390, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-21', name: 'Wild Blueberry Muffin', description: 'Soft golden muffin baked fresh daily with bursting wild blueberries and brown sugar crumble.', price: 4.00, categoryId: 'cat-3', imageUrl: '', ingredients: ['Blueberries', 'Flour', 'Butter'], allergens: ['Gluten', 'Dairy', 'Eggs'], available: true, featured: false, rating: 4.75, reviewCount: 140, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-22', name: 'Banana Walnut Loaf', description: 'Moist slice of ripe banana bread loaded with toasted California walnuts.', price: 4.20, categoryId: 'cat-3', imageUrl: '', ingredients: ['Bananas', 'Walnuts', 'Cinnamon'], allergens: ['Gluten', 'Nuts', 'Eggs'], available: true, featured: false, rating: 4.8, reviewCount: 180, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-23', name: 'Cinnamon Brown Sugar Roll', description: 'Soft brioche dough swirled with brown sugar cinnamon paste and cream cheese glaze.', price: 4.60, categoryId: 'cat-3', imageUrl: '', ingredients: ['Cinnamon', 'Brown Sugar', 'Cream Cheese'], allergens: ['Gluten', 'Dairy'], available: true, featured: true, rating: 4.92, reviewCount: 270, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-24', name: 'Choc Chip Cookie', description: 'Warm chewy center with golden crispy edges and melted dark chocolate chunks.', price: 3.20, categoryId: 'cat-3', imageUrl: '', ingredients: ['Chocolate Chunks', 'Butter', 'Vanilla'], allergens: ['Gluten', 'Dairy', 'Eggs'], available: true, featured: false, rating: 4.85, reviewCount: 220, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },

  // Cakes & Desserts (prod-25 to prod-29)
  { id: 'prod-25', name: 'San Sebastian Burnt Cheesecake', description: 'Silky Spanish cheesecake baked at high temperature for a dark caramelized top.', price: 7.50, categoryId: 'cat-4', imageUrl: '', ingredients: ['Cream Cheese', 'Heavy Cream', 'Eggs'], allergens: ['Dairy', 'Eggs'], available: true, featured: true, rating: 4.98, reviewCount: 480, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-26', name: 'Classic Espresso Tiramisu', description: 'Italian ladyfingers soaked in dark espresso with mascarpone cream and cocoa powder.', price: 7.20, categoryId: 'cat-4', imageUrl: '', ingredients: ['Mascarpone', 'Espresso', 'Ladyfingers'], allergens: ['Gluten', 'Dairy', 'Eggs'], available: true, featured: true, rating: 4.9, reviewCount: 340, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-27', name: 'Fudge Chocolate Brownie', description: 'Dense, fudgy chocolate square baked with Valrhona cocoa and sea salt flakes.', price: 4.80, categoryId: 'cat-4', imageUrl: '', ingredients: ['Dark Cocoa', 'Butter', 'Sea Salt'], allergens: ['Gluten', 'Dairy', 'Eggs'], available: true, featured: false, rating: 4.8, reviewCount: 195, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-28', name: 'Matcha Mousse Cheesecake', description: 'Delicate mousse cake featuring Uji green tea mousse layered over soft sponge.', price: 7.80, categoryId: 'cat-4', imageUrl: '', ingredients: ['Matcha', 'Cream Cheese', 'Sponge'], allergens: ['Gluten', 'Dairy', 'Eggs'], available: true, featured: false, rating: 4.85, reviewCount: 150, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-29', name: 'Fresh Strawberry Shortcake', description: 'Light chiffon sponge cake with vanilla bean cream and fresh sliced strawberries.', price: 6.90, categoryId: 'cat-4', imageUrl: '', ingredients: ['Strawberries', 'Whipping Cream', 'Chiffon Sponge'], allergens: ['Gluten', 'Dairy', 'Eggs'], available: true, featured: true, rating: 4.92, reviewCount: 260, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },

  // Savory & Sandwiches (prod-30 to prod-34)
  { id: 'prod-30', name: 'Herb Chicken Salad Croissant', description: 'Flaky butter croissant stuffed with roasted chicken, celery, and dijonnaise dressing.', price: 8.50, categoryId: 'cat-5', imageUrl: '', ingredients: ['Roasted Chicken', 'Croissant', 'Dijon Mayo'], allergens: ['Gluten', 'Dairy', 'Eggs'], available: true, featured: true, rating: 4.85, reviewCount: 230, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-31', name: 'Smoked Tuna Melt Panini', description: 'Artisanal sourdough loaded with wild tuna salad, sharp cheddar cheese, and pickles.', price: 8.80, categoryId: 'cat-5', imageUrl: '', ingredients: ['Tuna', 'Cheddar Cheese', 'Sourdough'], allergens: ['Gluten', 'Dairy', 'Fish'], available: true, featured: false, rating: 4.75, reviewCount: 180, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-32', name: 'Creamy Egg Mayo Toast', description: 'Thick Japanese shokupan milk toast topped with rich egg salad and chives.', price: 6.50, categoryId: 'cat-5', imageUrl: '', ingredients: ['Eggs', 'Japanese Mayo', 'Milk Bread'], allergens: ['Gluten', 'Dairy', 'Eggs'], available: true, featured: false, rating: 4.8, reviewCount: 210, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-33', name: 'Smashed Avocado Toast', description: 'Toasted sourdough with fresh avocado spread, poached egg, chili flakes, and microgreens.', price: 9.20, categoryId: 'cat-5', imageUrl: '', ingredients: ['Avocado', 'Sourdough', 'Poached Egg'], allergens: ['Gluten', 'Eggs'], available: true, featured: true, rating: 4.95, reviewCount: 410, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-34', name: 'Chicken Pesto Mozzarella Panini', description: 'Grilled chicken breast, housemade basil pesto, and melted mozzarella on focaccia.', price: 9.50, categoryId: 'cat-5', imageUrl: '', ingredients: ['Grilled Chicken', 'Basil Pesto', 'Mozzarella'], allergens: ['Gluten', 'Dairy', 'Nuts'], available: true, featured: true, rating: 4.9, reviewCount: 320, customizations: BAKERY_CUSTOMIZATIONS, createdAt: new Date().toISOString() },

  // Cold Brew & Beverages (prod-35 to prod-40)
  { id: 'prod-35', name: 'Fresh Strawberry Milkshake', description: 'Real strawberry puree blended with vanilla bean ice cream and farm milk.', price: 6.80, categoryId: 'cat-6', imageUrl: '', ingredients: ['Strawberries', 'Ice Cream', 'Milk'], allergens: ['Dairy'], available: true, featured: false, rating: 4.8, reviewCount: 190, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-36', name: 'Double Choc Fudge Frappe', description: 'Blended espresso shake with dark chocolate syrup, ice, and whipped cream top.', price: 6.90, categoryId: 'cat-6', imageUrl: '', ingredients: ['Espresso', 'Chocolate Fudge', 'Ice', 'Whipped Cream'], allergens: ['Dairy'], available: true, featured: true, rating: 4.9, reviewCount: 310, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-37', name: 'Salted Caramel Frappe', description: 'Creamy coffee frappe topped with caramel crunch bits and whipped cream.', price: 6.90, categoryId: 'cat-6', imageUrl: '', ingredients: ['Coffee Blend', 'Caramel Syrup', 'Whipped Cream'], allergens: ['Dairy'], available: true, featured: false, rating: 4.85, reviewCount: 240, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-38', name: 'Tropical Mango Smoothie', description: 'Sweet Alphonso mangoes blended with Greek yogurt and raw floral honey.', price: 6.50, categoryId: 'cat-6', imageUrl: '', ingredients: ['Mango', 'Greek Yogurt', 'Honey'], allergens: ['Dairy'], available: true, featured: true, rating: 4.88, reviewCount: 280, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-39', name: 'Acai Berry Blast Smoothie', description: 'Antioxidant rich organic acai, blueberries, banana, and coconut water.', price: 7.20, categoryId: 'cat-6', imageUrl: '', ingredients: ['Acai', 'Blueberries', 'Banana', 'Coconut Water'], allergens: [], available: true, featured: false, rating: 4.82, reviewCount: 160, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
  { id: 'prod-40', name: 'Sparkling Lemonade Soda', description: 'Hand-squeezed lemons with fresh mint leaves and sparkling soda.', price: 5.00, categoryId: 'cat-6', imageUrl: '', ingredients: ['Lemon Juice', 'Mint', 'Sparkling Soda'], allergens: [], available: true, featured: false, rating: 4.75, reviewCount: 120, customizations: BEVERAGE_CUSTOMIZATIONS, createdAt: new Date().toISOString() },
];

// Seed images if not set
DEFAULT_PRODUCTS.forEach(p => {
  if (!p.imageUrl) p.imageUrl = getProductPlaceholder(p.id, p.name);
});

const DEFAULT_TABLES = Array.from({ length: 12 }, (_, i) => {
  const num = (i + 1).toString().padStart(2, '0');
  return {
    id: `tbl-${num}`,
    number: num,
    capacity: i % 2 === 0 ? 2 : 4,
    status: i === 3 ? 'occupied' : 'available',
    createdAt: new Date().toISOString()
  };
});

const DEFAULT_SETTINGS = {
  name: 'Brew & Bean',
  tagline: 'Artisanal Coffee & Bakehouse',
  phone: '+1 (555) 238-9042',
  address: '458 Roasted Bean Way, Coffee District',
  openingHours: 'Mon-Sun: 7:00 AM - 9:00 PM',
  currency: 'USD',
  currencySymbol: '$',
  serviceFee: 1.50
};

// ============================================================
// LOCAL STORAGE SERVICES IMPLEMENTATION
// ============================================================
class ProductService {
  constructor() {
    if (!localStorage.getItem('bb_products')) {
      localStorage.setItem('bb_products', JSON.stringify(DEFAULT_PRODUCTS));
    }
  }
  async getAll() {
    return JSON.parse(localStorage.getItem('bb_products') || '[]');
  }
  async getById(id) {
    const list = await this.getAll();
    return list.find(p => p.id === id) || null;
  }
  async search(query) {
    const list = await this.getAll();
    const q = (query || '').toLowerCase().trim();
    if (!q) return list;
    return list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.ingredients.some(i => i.toLowerCase().includes(q)));
  }
  async getByCategory(categoryId) {
    const list = await this.getAll();
    if (!categoryId || categoryId === 'all') return list;
    return list.filter(p => p.categoryId === categoryId);
  }
  async getFeatured() {
    const list = await this.getAll();
    return list.filter(p => p.featured && p.available);
  }
  async create(data) {
    const list = await this.getAll();
    const newProd = {
      ...data,
      id: `prod-${Date.now()}`,
      createdAt: new Date().toISOString(),
      imageUrl: data.imageUrl || getProductPlaceholder(`prod-${Date.now()}`, data.name),
      rating: 5.0,
      reviewCount: 1
    };
    list.push(newProd);
    localStorage.setItem('bb_products', JSON.stringify(list));
    return newProd;
  }
  async update(id, data) {
    const list = await this.getAll();
    const idx = list.findIndex(p => p.id === id);
    if (idx === -1) throw new Error('Product not found');
    list[idx] = { ...list[idx], ...data };
    localStorage.setItem('bb_products', JSON.stringify(list));
    return list[idx];
  }
  async delete(id) {
    let list = await this.getAll();
    list = list.filter(p => p.id !== id);
    localStorage.setItem('bb_products', JSON.stringify(list));
  }
  async toggleAvailable(id) {
    const prod = await this.getById(id);
    if (!prod) throw new Error('Product not found');
    return this.update(id, { available: !prod.available });
  }
  async toggleFeatured(id) {
    const prod = await this.getById(id);
    if (!prod) throw new Error('Product not found');
    return this.update(id, { featured: !prod.featured });
  }
}

class CategoryService {
  constructor() {
    if (!localStorage.getItem('bb_categories')) {
      localStorage.setItem('bb_categories', JSON.stringify(DEFAULT_CATEGORIES));
    }
  }
  async getAll() {
    return JSON.parse(localStorage.getItem('bb_categories') || '[]');
  }
  async getById(id) {
    const list = await this.getAll();
    return list.find(c => c.id === id) || null;
  }
  async create(data) {
    const list = await this.getAll();
    const newCat = {
      ...data,
      id: `cat-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    list.push(newCat);
    localStorage.setItem('bb_categories', JSON.stringify(list));
    return newCat;
  }
  async update(id, data) {
    const list = await this.getAll();
    const idx = list.findIndex(c => c.id === id);
    if (idx === -1) throw new Error('Category not found');
    list[idx] = { ...list[idx], ...data };
    localStorage.setItem('bb_categories', JSON.stringify(list));
    return list[idx];
  }
  async delete(id) {
    let list = await this.getAll();
    list = list.filter(c => c.id !== id);
    localStorage.setItem('bb_categories', JSON.stringify(list));
  }
  async reorder(ids) {
    const list = await this.getAll();
    const map = new Map(list.map(c => [c.id, c]));
    const reordered = ids.map((id, index) => {
      const cat = map.get(id);
      if (cat) cat.order = index + 1;
      return cat;
    }).filter(Boolean);
    localStorage.setItem('bb_categories', JSON.stringify(reordered));
  }
}

class OrderService {
  constructor() {
    if (!localStorage.getItem('bb_orders')) {
      // Seed a sample initial order for testing KDS & tracker
      const sampleOrder = {
        id: 'ord-1001',
        orderNumber: '#BB-8492',
        customerName: 'Alex Rivera',
        phone: '+1 (555) 987-6543',
        tableNumber: '04',
        orderType: 'dine-in',
        status: 'preparing',
        items: [
          {
            id: 'item-1',
            orderId: 'ord-1001',
            productId: 'prod-4',
            productName: 'Artisan Cafe Latte',
            productImage: getProductPlaceholder('prod-4', 'Artisan Cafe Latte'),
            quantity: 2,
            unitPrice: 5.20,
            customizations: { Size: 'Large (16oz)', 'Milk Choice': 'Oat Milk' },
            specialNote: 'Extra hot please'
          },
          {
            id: 'item-2',
            orderId: 'ord-1001',
            productId: 'prod-19',
            productName: 'Golden Butter Croissant',
            productImage: getProductPlaceholder('prod-19', 'Golden Butter Croissant'),
            quantity: 1,
            unitPrice: 3.80,
            customizations: { 'Heating Preference': 'Warmed / Toasted' },
            specialNote: ''
          }
        ],
        subtotal: 14.20,
        serviceFee: 1.50,
        total: 15.70,
        createdAt: new Date(Date.now() - 15 * 60000).toISOString(),
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem('bb_orders', JSON.stringify([sampleOrder]));
    }
  }
  async getAll() {
    return JSON.parse(localStorage.getItem('bb_orders') || '[]');
  }
  async getById(id) {
    const list = await this.getAll();
    return list.find(o => o.id === id) || null;
  }
  async getByOrderNumber(orderNumber) {
    const list = await this.getAll();
    return list.find(o => o.orderNumber === orderNumber) || null;
  }
  async create(orderData) {
    const list = await this.getAll();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newOrder = {
      ...orderData,
      id: `ord-${Date.now()}`,
      orderNumber: `#BB-${randomNum}`,
      status: 'received',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    list.unshift(newOrder);
    localStorage.setItem('bb_orders', JSON.stringify(list));
    return newOrder;
  }
  async updateStatus(id, status) {
    const list = await this.getAll();
    const idx = list.findIndex(o => o.id === id);
    if (idx === -1) throw new Error('Order not found');
    list[idx].status = status;
    list[idx].updatedAt = new Date().toISOString();
    localStorage.setItem('bb_orders', JSON.stringify(list));
    return list[idx];
  }
  async getTodayStats() {
    const list = await this.getAll();
    const totalOrders = list.length;
    const revenue = list.filter(o => o.status !== 'cancelled').reduce((sum, o) => sum + o.total, 0);
    const pending = list.filter(o => ['received', 'preparing'].includes(o.status)).length;
    const completed = list.filter(o => o.status === 'completed').length;
    return { totalOrders, revenue, pending, completed };
  }
}

class TableService {
  constructor() {
    if (!localStorage.getItem('bb_tables')) {
      localStorage.setItem('bb_tables', JSON.stringify(DEFAULT_TABLES));
    }
  }
  async getAll() {
    return JSON.parse(localStorage.getItem('bb_tables') || '[]');
  }
  async getById(id) {
    const list = await this.getAll();
    return list.find(t => t.id === id) || null;
  }
  async getByNumber(number) {
    const list = await this.getAll();
    return list.find(t => t.number === number) || null;
  }
  async create(data) {
    const list = await this.getAll();
    const newTable = {
      ...data,
      id: `tbl-${Date.now()}`,
      status: 'available',
      createdAt: new Date().toISOString()
    };
    list.push(newTable);
    localStorage.setItem('bb_tables', JSON.stringify(list));
    return newTable;
  }
  async update(id, data) {
    const list = await this.getAll();
    const idx = list.findIndex(t => t.id === id);
    if (idx === -1) throw new Error('Table not found');
    list[idx] = { ...list[idx], ...data };
    localStorage.setItem('bb_tables', JSON.stringify(list));
    return list[idx];
  }
  async delete(id) {
    let list = await this.getAll();
    list = list.filter(t => t.id !== id);
    localStorage.setItem('bb_tables', JSON.stringify(list));
  }
  async toggleStatus(id) {
    const t = await this.getById(id);
    if (!t) throw new Error('Table not found');
    const newStatus = t.status === 'available' ? 'occupied' : 'available';
    return this.update(id, { status: newStatus });
  }
}

class AuthService {
  async login(credentials) {
    if (credentials.email === 'admin@brewandbean.com' && credentials.password === 'admin123') {
      const user = { id: 'usr-admin', email: credentials.email, name: 'Admin Manager', role: 'admin' };
      localStorage.setItem('bb_current_user', JSON.stringify(user));
      return user;
    }
    throw new Error('Invalid email or password');
  }
  async logout() {
    localStorage.removeItem('bb_current_user');
  }
  async getCurrentUser() {
    const str = localStorage.getItem('bb_current_user');
    return str ? JSON.parse(str) : null;
  }
  async isAuthenticated() {
    return (await this.getCurrentUser()) !== null;
  }
}

class SettingsService {
  constructor() {
    if (!localStorage.getItem('bb_settings')) {
      localStorage.setItem('bb_settings', JSON.stringify(DEFAULT_SETTINGS));
    }
  }
  async get() {
    return JSON.parse(localStorage.getItem('bb_settings') || '{}');
  }
  async update(settings) {
    const current = await this.get();
    const updated = { ...current, ...settings };
    localStorage.setItem('bb_settings', JSON.stringify(updated));
    return updated;
  }
}

// Instantiate Global Services
const productService = new ProductService();
const categoryService = new CategoryService();
const orderService = new OrderService();
const tableService = new TableService();
const authService = new AuthService();
const settingsService = new SettingsService();

// ============================================================
// APP STATE & CONTROLLER MANAGEMENT
// ============================================================
const AppState = {
  currentCategory: 'all',
  activeFilter: 'all',
  searchQuery: '',
  orderType: 'dine-in',
  selectedTable: '04',
  cart: [],
  activeModalProduct: null,
  modalCustomizations: {},
  modalQuantity: 1,
  activeOrder: null,
  adminTab: 'tab-kds',
  kdsFilter: 'all'
};

// UI Helper Toast
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const iconMap = {
    info: 'fa-circle-info',
    success: 'fa-circle-check',
    danger: 'fa-circle-xmark',
  };
  toast.innerHTML = `
    <i class="fa-solid ${iconMap[type] || 'fa-bell'}"></i>
    <span>${escapeXml(message)}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', async () => {
  await initHeaderAndNavigation();
  await renderCategoriesBar();
  await renderFeaturedProducts();
  await renderProductsGrid();
  await initModalsAndCart();
  await checkActiveUserOrder();
  await initAdminPortal();
});

// --- HEADER & NAVIGATION ---
async function initHeaderAndNavigation() {
  const navBtns = document.querySelectorAll('.nav-view-btn');
  const viewSections = document.querySelectorAll('.view-section');

  navBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetView = btn.dataset.view;
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      viewSections.forEach(sec => {
        sec.classList.remove('active');
        if (sec.id === targetView) {
          sec.classList.add('active');
        }
      });

      if (targetView === 'tracker-view') {
        await renderOrderTrackerView();
      } else if (targetView === 'admin-view') {
        await renderAdminPortalView();
      }
    });
  });

  // Global Brand Home Click
  document.getElementById('brand-home-link').addEventListener('click', () => {
    document.getElementById('nav-btn-menu').click();
  });

  // Global Search Input
  const searchInput = document.getElementById('global-search-input');
  const clearBtn = document.getElementById('clear-search-btn');

  searchInput.addEventListener('input', async (e) => {
    AppState.searchQuery = e.target.value.trim();
    clearBtn.style.display = AppState.searchQuery ? 'block' : 'none';
    await renderProductsGrid();
  });

  clearBtn.addEventListener('click', async () => {
    searchInput.value = '';
    AppState.searchQuery = '';
    clearBtn.style.display = 'none';
    await renderProductsGrid();
  });

  // Order Type & Table Picker Trigger
  const orderTypeTrigger = document.getElementById('order-type-trigger');
  orderTypeTrigger.addEventListener('click', () => openTableSelectorModal());
}

// --- RENDER CATEGORIES ---
async function renderCategoriesBar() {
  const categories = await categoryService.getAll();
  categories.sort((a, b) => a.order - b.order);

  const container = document.getElementById('category-pills-container');
  container.innerHTML = '';

  // "All Items" pill
  const allPill = document.createElement('div');
  allPill.className = `category-pill ${AppState.currentCategory === 'all' ? 'active' : ''}`;
  allPill.innerHTML = `<span class="category-pill-icon">🍽️</span> <span>All Menu</span>`;
  allPill.addEventListener('click', async () => {
    AppState.currentCategory = 'all';
    updateCategoryPillState();
    await renderProductsGrid();
  });
  container.appendChild(allPill);

  categories.forEach(cat => {
    const pill = document.createElement('div');
    pill.className = `category-pill ${AppState.currentCategory === cat.id ? 'active' : ''}`;
    pill.dataset.id = cat.id;
    pill.innerHTML = `<span class="category-pill-icon">${cat.icon}</span> <span>${escapeXml(cat.name)}</span>`;
    pill.addEventListener('click', async () => {
      AppState.currentCategory = cat.id;
      updateCategoryPillState();
      await renderProductsGrid();
    });
    container.appendChild(pill);
  });
}

function updateCategoryPillState() {
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach(p => {
    if ((p.dataset.id || 'all') === AppState.currentCategory) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });
}

// --- RENDER FEATURED PRODUCTS CAROUSEL ---
async function renderFeaturedProducts() {
  const featured = await productService.getFeatured();
  const container = document.getElementById('featured-products-container');
  container.innerHTML = '';

  const displayItems = featured.slice(0, 4);
  displayItems.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'featured-mini-card';
    card.innerHTML = `
      <img src="${prod.imageUrl}" alt="${escapeXml(prod.name)}" class="mini-img">
      <div class="mini-info">
        <h4>${escapeXml(prod.name)}</h4>
        <div class="mini-price">$${prod.price.toFixed(2)}</div>
        <div class="mini-rating"><i class="fa-solid fa-star gold-star"></i> ${prod.rating} (${prod.reviewCount})</div>
      </div>
    `;
    card.addEventListener('click', () => openCustomizationModal(prod));
    container.appendChild(card);
  });
}

// --- RENDER PRODUCTS GRID ---
async function renderProductsGrid() {
  let products = [];
  if (AppState.searchQuery) {
    products = await productService.search(AppState.searchQuery);
  } else {
    products = await productService.getByCategory(AppState.currentCategory);
  }

  // Filter Chip logic
  if (AppState.activeFilter === 'featured') {
    products = products.filter(p => p.featured);
  } else if (AppState.activeFilter === 'available') {
    products = products.filter(p => p.available);
  }

  const container = document.getElementById('products-grid-container');
  const emptyState = document.getElementById('no-products-state');
  const countDisplay = document.getElementById('product-count-display');
  const heading = document.getElementById('current-category-heading');

  // Set category heading
  if (AppState.searchQuery) {
    heading.textContent = `Search results for "${AppState.searchQuery}"`;
  } else if (AppState.currentCategory === 'all') {
    heading.textContent = 'All Menu Items';
  } else {
    const cat = await categoryService.getById(AppState.currentCategory);
    heading.textContent = cat ? cat.name : 'Menu Items';
  }

  countDisplay.textContent = `${products.length} Products`;
  container.innerHTML = '';

  if (products.length === 0) {
    emptyState.style.display = 'block';
    return;
  }
  emptyState.style.display = 'none';

  products.forEach(prod => {
    const card = document.createElement('div');
    card.className = `product-card ${!prod.available ? 'out-of-stock' : ''}`;
    
    const allergensHtml = (prod.allergens || []).map(a => `<span class="allergen-tag">${escapeXml(a)}</span>`).join('');
    const featuredBadge = prod.featured ? `<span class="badge badge-accent product-card-badge"><i class="fa-solid fa-star"></i> Special</span>` : '';

    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${prod.imageUrl}" alt="${escapeXml(prod.name)}">
        ${featuredBadge}
        <div class="product-rating-badge">
          <i class="fa-solid fa-star gold-star"></i>
          <span>${prod.rating}</span>
        </div>
      </div>
      <div class="product-body">
        <h3 class="product-title">${escapeXml(prod.name)}</h3>
        <p class="product-desc">${escapeXml(prod.description)}</p>
        <div class="product-tags">${allergensHtml}</div>
        <div class="product-footer">
          <span class="product-price">$${prod.price.toFixed(2)}</span>
          <button class="btn-add-quick" title="Add to Order">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openCustomizationModal(prod));
    container.appendChild(card);
  });

  // Attach filter chips listeners
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip => {
    chip.onclick = async () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      AppState.activeFilter = chip.dataset.filter;
      await renderProductsGrid();
    };
  });
}

// --- PRODUCT CUSTOMIZATION MODAL ---
function openCustomizationModal(product) {
  AppState.activeModalProduct = product;
  AppState.modalQuantity = 1;
  AppState.modalCustomizations = {};

  const modal = document.getElementById('customization-modal');
  const title = document.getElementById('custom-modal-title');
  const desc = document.getElementById('custom-modal-desc');
  const catTag = document.getElementById('custom-modal-category');
  const allergensBox = document.getElementById('custom-modal-allergens');
  const imgBox = document.getElementById('custom-modal-image');
  const groupsContainer = document.getElementById('custom-modal-groups');
  const qtyVal = document.getElementById('modal-qty-val');
  const noteInput = document.getElementById('custom-modal-note');

  title.textContent = product.name;
  desc.textContent = product.description;
  imgBox.style.backgroundImage = `url('${product.imageUrl}')`;
  qtyVal.textContent = '1';
  noteInput.value = '';

  // Allergens
  allergensBox.innerHTML = (product.allergens || []).map(a => `<span class="allergen-tag">${escapeXml(a)}</span>`).join('');

  // Groups
  groupsContainer.innerHTML = '';
  const groups = product.customizations || BEVERAGE_CUSTOMIZATIONS;

  groups.forEach((grp, gIdx) => {
    const grpEl = document.createElement('div');
    grpEl.className = 'custom-group';

    const reqLabel = grp.required ? `<span class="req-badge">Required</span>` : '';
    grpEl.innerHTML = `
      <div class="custom-group-title">
        <span>${escapeXml(grp.name)}</span>
        ${reqLabel}
      </div>
      <div class="options-pill-grid" id="grp-options-${gIdx}"></div>
    `;

    groupsContainer.appendChild(grpEl);

    const optionsGrid = grpEl.querySelector(`#grp-options-${gIdx}`);
    
    // Auto-select first option if required
    if (grp.required && grp.options.length > 0) {
      AppState.modalCustomizations[grp.name] = grp.options[0].name;
    }

    grp.options.forEach(opt => {
      const pill = document.createElement('div');
      const isSelected = AppState.modalCustomizations[grp.name] === opt.name;
      pill.className = `option-pill ${isSelected ? 'selected' : ''}`;
      
      const priceText = opt.priceModifier > 0 ? `+$${opt.priceModifier.toFixed(2)}` : 'Included';
      pill.innerHTML = `
        <span class="option-name">${escapeXml(opt.name)}</span>
        <span class="option-price">${priceText}</span>
      `;

      pill.addEventListener('click', () => {
        if (grp.type === 'single') {
          optionsGrid.querySelectorAll('.option-pill').forEach(p => p.classList.remove('selected'));
          pill.classList.add('selected');
          AppState.modalCustomizations[grp.name] = opt.name;
        } else {
          // Multiple options logic
          pill.classList.toggle('selected');
          const currentMulti = AppState.modalCustomizations[grp.name] || [];
          let updatedMulti = Array.isArray(currentMulti) ? [...currentMulti] : [];
          if (pill.classList.contains('selected')) {
            updatedMulti.push(opt.name);
          } else {
            updatedMulti = updatedMulti.filter(n => n !== opt.name);
          }
          AppState.modalCustomizations[grp.name] = updatedMulti;
        }
        updateModalTotalPrice();
      });

      optionsGrid.appendChild(pill);
    });
  });

  updateModalTotalPrice();
  modal.style.display = 'flex';
}

function updateModalTotalPrice() {
  if (!AppState.activeModalProduct) return;
  const prod = AppState.activeModalProduct;
  let unitPrice = prod.price;

  // Add customization prices
  const groups = prod.customizations || BEVERAGE_CUSTOMIZATIONS;
  groups.forEach(grp => {
    const val = AppState.modalCustomizations[grp.name];
    if (val) {
      if (Array.isArray(val)) {
        val.forEach(vName => {
          const opt = grp.options.find(o => o.name === vName);
          if (opt) unitPrice += opt.priceModifier;
        });
      } else {
        const opt = grp.options.find(o => o.name === val);
        if (opt) unitPrice += opt.priceModifier;
      }
    }
  });

  const total = unitPrice * AppState.modalQuantity;
  document.getElementById('modal-total-price').textContent = `$${total.toFixed(2)}`;
}

// --- CART & MODALS SETUP ---
async function initModalsAndCart() {
  // Modal Close buttons
  document.getElementById('close-custom-modal').onclick = () => {
    document.getElementById('customization-modal').style.display = 'none';
  };
  document.getElementById('close-table-modal').onclick = () => {
    document.getElementById('table-selector-modal').style.display = 'none';
  };

  // Quantity +/-
  document.getElementById('modal-qty-minus').onclick = () => {
    if (AppState.modalQuantity > 1) {
      AppState.modalQuantity--;
      document.getElementById('modal-qty-val').textContent = AppState.modalQuantity;
      updateModalTotalPrice();
    }
  };
  document.getElementById('modal-qty-plus').onclick = () => {
    AppState.modalQuantity++;
    document.getElementById('modal-qty-val').textContent = AppState.modalQuantity;
    updateModalTotalPrice();
  };

  // Add to Order button
  document.getElementById('modal-add-to-cart-btn').onclick = () => {
    if (!AppState.activeModalProduct) return;
    const prod = AppState.activeModalProduct;
    let unitPrice = prod.price;
    const groups = prod.customizations || BEVERAGE_CUSTOMIZATIONS;

    groups.forEach(grp => {
      const val = AppState.modalCustomizations[grp.name];
      if (val) {
        if (Array.isArray(val)) {
          val.forEach(vName => {
            const opt = grp.options.find(o => o.name === vName);
            if (opt) unitPrice += opt.priceModifier;
          });
        } else {
          const opt = grp.options.find(o => o.name === val);
          if (opt) unitPrice += opt.priceModifier;
        }
      }
    });

    const specialNote = document.getElementById('custom-modal-note').value.trim();
    const cartItem = {
      id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      product: prod,
      quantity: AppState.modalQuantity,
      customizations: { ...AppState.modalCustomizations },
      specialNote: specialNote,
      unitPrice: unitPrice,
      totalPrice: unitPrice * AppState.modalQuantity
    };

    AppState.cart.push(cartItem);
    updateCartUI();
    document.getElementById('customization-modal').style.display = 'none';
    showToast(`Added ${cartItem.quantity}x ${prod.name} to order`, 'success');
  };

  // Cart Drawer Trigger
  const cartTrigger = document.getElementById('cart-drawer-trigger');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartBackdrop = document.getElementById('cart-drawer-backdrop');
  const closeCartBtn = document.getElementById('close-cart-drawer');

  const openCart = () => {
    cartDrawer.classList.add('active');
    cartBackdrop.classList.add('active');
  };
  const closeCart = () => {
    cartDrawer.classList.remove('active');
    cartBackdrop.classList.remove('active');
  };

  cartTrigger.onclick = openCart;
  closeCartBtn.onclick = closeCart;
  cartBackdrop.onclick = closeCart;

  // Place Order Checkout
  document.getElementById('place-order-btn').onclick = async () => {
    if (AppState.cart.length === 0) {
      showToast('Your basket is empty!', 'danger');
      return;
    }

    const nameInput = document.getElementById('checkout-name');
    const customerName = nameInput.value.trim() || 'Guest Customer';
    const phoneInput = document.getElementById('checkout-phone');
    const phone = phoneInput.value.trim() || '+1 (555) 000-0000';

    const settings = await settingsService.get();
    const subtotal = AppState.cart.reduce((sum, i) => sum + i.totalPrice, 0);
    const serviceFee = settings.serviceFee || 1.50;
    const total = subtotal + serviceFee;

    const orderItems = AppState.cart.map(ci => ({
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      orderId: '',
      productId: ci.product.id,
      productName: ci.product.name,
      productImage: ci.product.imageUrl,
      quantity: ci.quantity,
      unitPrice: ci.unitPrice,
      customizations: ci.customizations,
      specialNote: ci.specialNote
    }));

    const newOrder = await orderService.create({
      customerName,
      phone,
      tableNumber: AppState.orderType === 'dine-in' ? AppState.selectedTable : 'Takeaway',
      orderType: AppState.orderType,
      status: 'received',
      items: orderItems,
      subtotal,
      serviceFee,
      total
    });

    AppState.activeOrder = newOrder;
    AppState.cart = [];
    updateCartUI();
    closeCart();
    showToast(`Order ${newOrder.orderNumber} submitted successfully!`, 'success');

    // Switch to tracker view
    document.getElementById('nav-btn-tracker').click();
  };
}

function updateCartUI() {
  const badgeCount = document.getElementById('cart-badge-count');
  const badgePrice = document.getElementById('cart-badge-price');
  const itemsContainer = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-summary-subtotal');
  const feeEl = document.getElementById('cart-summary-fee');
  const totalEl = document.getElementById('cart-summary-total');

  const totalItems = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = AppState.cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const fee = AppState.cart.length > 0 ? 1.50 : 0;
  const total = subtotal + fee;

  badgeCount.textContent = totalItems;
  badgePrice.textContent = `$${total.toFixed(2)}`;
  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  feeEl.textContent = `$${fee.toFixed(2)}`;
  totalEl.textContent = `$${total.toFixed(2)}`;

  itemsContainer.innerHTML = '';
  if (AppState.cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="empty-state-card" style="border: none; padding: 3rem 1rem;">
        <div class="empty-icon"><i class="fa-solid fa-basket-shopping"></i></div>
        <h4>Your basket is empty</h4>
        <p>Add some delicious coffee and pastries to get started!</p>
      </div>
    `;
    return;
  }

  AppState.cart.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = 'cart-item-card';

    // Format options string
    const optLines = [];
    Object.entries(item.customizations).forEach(([k, v]) => {
      if (Array.isArray(v) && v.length > 0) {
        optLines.push(`${k}: ${v.join(', ')}`);
      } else if (typeof v === 'string') {
        optLines.push(`${k}: ${v}`);
      }
    });
    if (item.specialNote) optLines.push(`Note: "${item.specialNote}"`);

    card.innerHTML = `
      <img src="${item.product.imageUrl}" class="cart-item-img">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${escapeXml(item.product.name)} (x${item.quantity})</h4>
        <div class="cart-item-options">${optLines.map(l => escapeXml(l)).join('<br>')}</div>
        <div class="cart-item-price">$${item.totalPrice.toFixed(2)}</div>
      </div>
      <div class="cart-item-actions">
        <button class="cart-remove-btn" title="Remove item"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;

    card.querySelector('.cart-remove-btn').onclick = () => {
      AppState.cart.splice(idx, 1);
      updateCartUI();
      showToast('Item removed from basket', 'info');
    };

    itemsContainer.appendChild(card);
  });
}

// --- TABLE SELECTOR MODAL ---
async function openTableSelectorModal() {
  const modal = document.getElementById('table-selector-modal');
  const switchDineIn = document.getElementById('switch-dine-in');
  const switchTakeaway = document.getElementById('switch-takeaway');
  const pickerSection = document.getElementById('table-picker-section');
  const chipGrid = document.getElementById('tables-chip-grid');

  switchDineIn.onclick = () => {
    switchDineIn.classList.add('active');
    switchTakeaway.classList.remove('active');
    pickerSection.style.display = 'block';
    AppState.orderType = 'dine-in';
  };

  switchTakeaway.onclick = () => {
    switchTakeaway.classList.add('active');
    switchDineIn.classList.remove('active');
    pickerSection.style.display = 'none';
    AppState.orderType = 'takeaway';
  };

  const tables = await tableService.getAll();
  chipGrid.innerHTML = '';
  tables.forEach(tbl => {
    const chip = document.createElement('div');
    const isSelected = AppState.selectedTable === tbl.number;
    chip.className = `table-chip ${isSelected ? 'selected' : ''}`;
    chip.textContent = `T-${tbl.number}`;
    chip.onclick = () => {
      chipGrid.querySelectorAll('.table-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      AppState.selectedTable = tbl.number;
    };
    chipGrid.appendChild(chip);
  });

  document.getElementById('confirm-table-btn').onclick = () => {
    document.getElementById('order-type-text').textContent = AppState.orderType === 'dine-in' ? 'Dine-in' : 'Takeaway';
    document.getElementById('order-table-text').textContent = AppState.orderType === 'dine-in' ? `Table ${AppState.selectedTable}` : 'Counter Pickup';
    document.getElementById('order-type-icon').className = AppState.orderType === 'dine-in' ? 'fa-solid fa-chair' : 'fa-solid fa-bag-shopping';
    modal.style.display = 'none';
    showToast(`Order mode updated to ${AppState.orderType.toUpperCase()} (Table ${AppState.selectedTable})`, 'info');
  };

  modal.style.display = 'flex';
}

// --- LIVE ORDER TRACKER VIEW ---
async function checkActiveUserOrder() {
  const orders = await orderService.getAll();
  if (orders.length > 0) {
    AppState.activeOrder = orders[0];
    document.getElementById('active-orders-dot').style.display = 'block';
  }
}

async function renderOrderTrackerView() {
  const card = document.getElementById('tracker-card-content');
  if (!AppState.activeOrder) {
    card.innerHTML = `
      <div class="empty-state-card" style="border: none;">
        <div class="empty-icon"><i class="fa-solid fa-receipt"></i></div>
        <h3>No active order found</h3>
        <p>Place an order from the menu to track live kitchen progress!</p>
        <button class="btn btn-primary margin-top-md" onclick="document.getElementById('nav-btn-menu').click()">
          Browse Menu
        </button>
      </div>
    `;
    return;
  }

  const ord = await orderService.getById(AppState.activeOrder.id) || AppState.activeOrder;
  AppState.activeOrder = ord;

  const statuses = ['received', 'preparing', 'ready', 'completed'];
  const currentIndex = statuses.indexOf(ord.status);

  const stepsHtml = statuses.map((st, idx) => {
    const isCompleted = idx < currentIndex;
    const isActive = idx === currentIndex;
    const labels = { received: 'Order Received', preparing: 'In Kitchen', ready: 'Ready for Table', completed: 'Served & Enjoy' };
    const icons = { received: 'fa-receipt', preparing: 'fa-fire-burner', ready: 'fa-bell-concierge', completed: 'fa-mug-hot' };

    return `
      <div class="step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}">
        <div class="step-icon">
          <i class="fa-solid ${icons[st]}"></i>
        </div>
        <span class="step-label">${labels[st]}</span>
      </div>
    `;
  }).join('');

  const itemsHtml = ord.items.map(item => `
    <div class="kds-item-line" style="margin-bottom: 0.4rem;">
      <span><strong>${item.quantity}x</strong> ${escapeXml(item.productName)}</span>
      <span>$${(item.unitPrice * item.quantity).toFixed(2)}</span>
    </div>
  `).join('');

  card.innerHTML = `
    <div class="tracker-status-bar text-center">
      <span class="badge badge-accent" style="font-size: 1rem; padding: 0.5rem 1.2rem;">
        Order ${ord.orderNumber} &bull; ${ord.orderType.toUpperCase()} (${ord.tableNumber})
      </span>
      <h3 class="margin-top-sm" style="font-family: var(--font-serif); font-size: 1.8rem;">Status: ${ord.status.toUpperCase()}</h3>
    </div>

    <div class="tracker-timeline">
      ${stepsHtml}
    </div>

    <div class="receipt-box margin-top-lg">
      <div class="receipt-header">
        <div>
          <h4>Customer: ${escapeXml(ord.customerName)}</h4>
          <span style="font-size: 0.82rem; color: var(--text-muted);">Placed at: ${new Date(ord.createdAt).toLocaleTimeString()}</span>
        </div>
        <div class="text-right">
          <span class="badge badge-green">${ord.orderType === 'dine-in' ? `Table #${ord.tableNumber}` : 'Takeaway'}</span>
        </div>
      </div>
      <div class="receipt-body">
        ${itemsHtml}
        <div class="summary-line margin-top-md" style="border-top: 1px dashed var(--border-color); padding-top: 0.6rem;">
          <span>Subtotal</span>
          <span>$${ord.subtotal.toFixed(2)}</span>
        </div>
        <div class="summary-line">
          <span>Service Fee</span>
          <span>$${ord.serviceFee.toFixed(2)}</span>
        </div>
        <div class="summary-line total-line">
          <span>Total Paid</span>
          <span>$${ord.total.toFixed(2)}</span>
        </div>
      </div>
    </div>

    <div class="tracker-actions text-center margin-top-lg" style="display: flex; gap: 1rem; justify-content: center;">
      <button class="btn btn-secondary" id="sim-progress-btn">
        <i class="fa-solid fa-forward-step"></i> Simulate Kitchen Progress
      </button>
      <button class="btn btn-primary" onclick="document.getElementById('nav-btn-menu').click()">
        Order More Items
      </button>
    </div>
  `;

  document.getElementById('sim-progress-btn').onclick = async () => {
    const nextMap = { received: 'preparing', preparing: 'ready', ready: 'completed', completed: 'received' };
    const nextStatus = nextMap[ord.status] || 'preparing';
    const updated = await orderService.updateStatus(ord.id, nextStatus);
    AppState.activeOrder = updated;
    showToast(`Order status updated to ${nextStatus.toUpperCase()}`, 'success');
    await renderOrderTrackerView();
  };
}

// --- STAFF & ADMIN PORTAL VIEW ---
async function renderAdminPortalView() {
  const isAuth = await authService.isAuthenticated();
  const loginContainer = document.getElementById('admin-login-container');
  const dashContainer = document.getElementById('admin-dashboard-container');

  if (!isAuth) {
    loginContainer.style.display = 'block';
    dashContainer.style.display = 'none';
    return;
  }

  loginContainer.style.display = 'none';
  dashContainer.style.display = 'block';

  const user = await authService.getCurrentUser();
  document.getElementById('admin-user-name').textContent = `Welcome, ${user.name}`;
  document.getElementById('admin-user-role').textContent = user.role.toUpperCase();

  await updateAdminKPIs();
  await renderAdminCurrentTab();
}

async function initAdminPortal() {
  // Login form submit
  document.getElementById('admin-login-form').onsubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
      await authService.login({ email, password });
      showToast('Logged into Staff Portal', 'success');
      await renderAdminPortalView();
    } catch (err) {
      showToast(err.message, 'danger');
    }
  };

  // Logout
  document.getElementById('admin-logout-btn').onclick = async () => {
    await authService.logout();
    showToast('Logged out of Staff Portal', 'info');
    await renderAdminPortalView();
  };

  // Admin Tab Switcher
  const tabs = document.querySelectorAll('.admin-tab-btn');
  tabs.forEach(tab => {
    tab.onclick = async () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      AppState.adminTab = tab.dataset.tab;
      await renderAdminCurrentTab();
    };
  });
}

async function updateAdminKPIs() {
  const stats = await orderService.getTodayStats();
  document.getElementById('kpi-total-orders').textContent = stats.totalOrders;
  document.getElementById('kpi-revenue').textContent = `$${stats.revenue.toFixed(2)}`;
  document.getElementById('kpi-pending').textContent = stats.pending;
  document.getElementById('kpi-completed').textContent = stats.completed;
}

async function renderAdminCurrentTab() {
  const panes = document.querySelectorAll('.admin-tab-pane');
  panes.forEach(p => {
    p.classList.remove('active');
    if (p.id === AppState.adminTab) p.classList.add('active');
  });

  if (AppState.adminTab === 'tab-kds') {
    await renderKDSOrders();
  } else if (AppState.adminTab === 'tab-products') {
    await renderAdminProductsTable();
  } else if (AppState.adminTab === 'tab-categories') {
    await renderAdminCategoriesList();
  } else if (AppState.adminTab === 'tab-tables') {
    await renderAdminTablesGrid();
  } else if (AppState.adminTab === 'tab-settings') {
    await renderAdminSettingsForm();
  }
}

// KDS Orders View
async function renderKDSOrders() {
  let orders = await orderService.getAll();
  if (AppState.kdsFilter !== 'all') {
    orders = orders.filter(o => o.status === AppState.kdsFilter);
  }

  const container = document.getElementById('admin-orders-grid');
  container.innerHTML = '';

  const filterBtns = document.querySelectorAll('[data-status-filter]');
  filterBtns.forEach(btn => {
    btn.onclick = async () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.kdsFilter = btn.dataset.statusFilter;
      await renderKDSOrders();
    };
  });

  if (orders.length === 0) {
    container.innerHTML = `<div class="empty-state-card" style="grid-column: 1/-1;">No orders found for this status.</div>`;
    return;
  }

  orders.forEach(ord => {
    const card = document.createElement('div');
    card.className = 'kds-card';

    const itemsHtml = ord.items.map(i => `
      <li class="kds-item-line">
        <span><strong>${i.quantity}x</strong> ${escapeXml(i.productName)}</span>
        <span style="color: var(--text-muted); font-size: 0.8rem;">$${(i.unitPrice * i.quantity).toFixed(2)}</span>
      </li>
    `).join('');

    card.innerHTML = `
      <div class="kds-card-header">
        <span class="kds-order-num">${ord.orderNumber}</span>
        <span class="badge badge-accent">${ord.orderType === 'dine-in' ? `Table ${ord.tableNumber}` : 'Takeaway'}</span>
      </div>
      <div class="kds-card-body">
        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">
          Customer: <strong>${escapeXml(ord.customerName)}</strong> (${ord.phone})
        </div>
        <ul class="kds-items-list">${itemsHtml}</ul>
        <div style="font-weight: 700; font-size: 1rem; margin-top: 0.8rem; color: var(--primary);">
          Total: $${ord.total.toFixed(2)}
        </div>
      </div>
      <div class="kds-card-footer">
        <button class="btn btn-sm ${ord.status === 'received' ? 'active' : ''}" data-act="received">Received</button>
        <button class="btn btn-sm ${ord.status === 'preparing' ? 'active' : ''}" data-act="preparing">Preparing</button>
        <button class="btn btn-sm ${ord.status === 'ready' ? 'active' : ''}" data-act="ready">Ready</button>
        <button class="btn btn-sm ${ord.status === 'completed' ? 'active' : ''}" data-act="completed">Complete</button>
      </div>
    `;

    card.querySelectorAll('[data-act]').forEach(btn => {
      btn.onclick = async () => {
        const newSt = btn.dataset.act;
        await orderService.updateStatus(ord.id, newSt);
        showToast(`Order ${ord.orderNumber} set to ${newSt.toUpperCase()}`, 'success');
        await updateAdminKPIs();
        await renderKDSOrders();
      };
    });

    container.appendChild(card);
  });
}

// Admin Products Manager
async function renderAdminProductsTable() {
  const products = await productService.getAll();
  const categories = await categoryService.getAll();
  const catMap = new Map(categories.map(c => [c.id, c.name]));
  const tbody = document.getElementById('admin-products-table-body');
  tbody.innerHTML = '';

  products.forEach(prod => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="display: flex; align-items: center; gap: 0.8rem;">
        <img src="${prod.imageUrl}" style="width: 40px; height: 40px; border-radius: 6px; object-fit: cover;">
        <div>
          <strong>${escapeXml(prod.name)}</strong>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${escapeXml(prod.description.substring(0, 45))}...</div>
        </div>
      </td>
      <td>${escapeXml(catMap.get(prod.categoryId) || 'General')}</td>
      <td><strong>$${prod.price.toFixed(2)}</strong></td>
      <td>
        <button class="btn btn-sm ${prod.available ? 'badge-green' : 'btn-outline-danger'}" data-toggle="avail">
          ${prod.available ? 'In Stock' : 'Out of Stock'}
        </button>
      </td>
      <td>
        <button class="btn btn-sm ${prod.featured ? 'badge-amber' : ''}" data-toggle="feat">
          <i class="fa-solid fa-star"></i> ${prod.featured ? 'Featured' : 'Standard'}
        </button>
      </td>
      <td>${prod.rating} ★</td>
      <td>
        <button class="btn btn-sm" data-action="edit"><i class="fa-solid fa-pen"></i></button>
        <button class="btn btn-sm btn-outline-danger" data-action="delete"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;

    tr.querySelector('[data-toggle="avail"]').onclick = async () => {
      await productService.toggleAvailable(prod.id);
      await renderAdminProductsTable();
      showToast(`Updated stock state for ${prod.name}`, 'info');
    };
    tr.querySelector('[data-toggle="feat"]').onclick = async () => {
      await productService.toggleFeatured(prod.id);
      await renderAdminProductsTable();
      showToast(`Updated featured state for ${prod.name}`, 'info');
    };
    tr.querySelector('[data-action="delete"]').onclick = async () => {
      if (confirm(`Are you sure you want to delete ${prod.name}?`)) {
        await productService.delete(prod.id);
        await renderAdminProductsTable();
        showToast('Product deleted', 'danger');
      }
    };
    tr.querySelector('[data-action="edit"]').onclick = () => {
      openProductFormModal(prod);
    };

    tbody.appendChild(tr);
  });

  document.getElementById('open-add-product-btn').onclick = () => openProductFormModal(null);
}

function openProductFormModal(product) {
  const modal = document.getElementById('product-form-modal');
  const title = document.getElementById('product-modal-title');
  const form = document.getElementById('product-admin-form');
  const catSelect = document.getElementById('form-product-category');

  categoryService.getAll().then(cats => {
    catSelect.innerHTML = cats.map(c => `<option value="${c.id}">${escapeXml(c.name)}</option>`).join('');
    if (product) catSelect.value = product.categoryId;
  });

  if (product) {
    title.textContent = 'Edit Product';
    document.getElementById('form-product-id').value = product.id;
    document.getElementById('form-product-name').value = product.name;
    document.getElementById('form-product-price').value = product.price;
    document.getElementById('form-product-desc').value = product.description;
    document.getElementById('form-product-ingredients').value = (product.ingredients || []).join(', ');
    document.getElementById('form-product-allergens').value = (product.allergens || []).join(', ');
    document.getElementById('form-product-available').checked = product.available;
    document.getElementById('form-product-featured').checked = product.featured;
  } else {
    title.textContent = 'Add New Product';
    form.reset();
    document.getElementById('form-product-id').value = '';
  }

  document.getElementById('close-product-modal').onclick = () => {
    modal.style.display = 'none';
  };

  form.onsubmit = async (e) => {
    e.preventDefault();
    const id = document.getElementById('form-product-id').value;
    const data = {
      name: document.getElementById('form-product-name').value.trim(),
      categoryId: document.getElementById('form-product-category').value,
      price: parseFloat(document.getElementById('form-product-price').value),
      description: document.getElementById('form-product-desc').value.trim(),
      ingredients: document.getElementById('form-product-ingredients').value.split(',').map(s => s.trim()).filter(Boolean),
      allergens: document.getElementById('form-product-allergens').value.split(',').map(s => s.trim()).filter(Boolean),
      available: document.getElementById('form-product-available').checked,
      featured: document.getElementById('form-product-featured').checked,
    };

    if (id) {
      await productService.update(id, data);
      showToast('Product updated!', 'success');
    } else {
      await productService.create(data);
      showToast('New product created!', 'success');
    }

    modal.style.display = 'none';
    await renderAdminProductsTable();
    await renderProductsGrid();
  };

  modal.style.display = 'flex';
}

// Categories View
async function renderAdminCategoriesList() {
  const categories = await categoryService.getAll();
  const container = document.getElementById('admin-categories-grid');
  container.innerHTML = '';

  categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'glass-card';
    card.style.padding = '1.2rem';
    card.style.display = 'flex';
    card.style.alignItems = 'center';
    card.style.justifySpaceBetween = 'space-between';

    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="font-size: 2rem;">${cat.icon}</span>
        <div>
          <h4 style="font-size: 1.1rem; margin: 0;">${escapeXml(cat.name)}</h4>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Slug: ${cat.slug}</span>
        </div>
      </div>
      <div>
        <button class="btn btn-sm btn-outline-danger" data-del="cat"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;

    card.querySelector('[data-del="cat"]').onclick = async () => {
      if (confirm(`Delete category ${cat.name}?`)) {
        await categoryService.delete(cat.id);
        await renderAdminCategoriesList();
        await renderCategoriesBar();
        showToast('Category deleted', 'info');
      }
    };

    container.appendChild(card);
  });
}

// Tables Manager View
async function renderAdminTablesGrid() {
  const tables = await tableService.getAll();
  const container = document.getElementById('admin-tables-grid');
  container.innerHTML = '';

  tables.forEach(tbl => {
    const card = document.createElement('div');
    card.className = `table-status-card ${tbl.status === 'occupied' ? 'occupied' : ''}`;

    card.innerHTML = `
      <div class="table-num-large">Table ${tbl.number}</div>
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.8rem;">
        Capacity: ${tbl.capacity} Persons
      </div>
      <span class="badge ${tbl.status === 'available' ? 'badge-green' : 'badge-amber'}" style="margin-bottom: 1rem;">
        ${tbl.status.toUpperCase()}
      </span>
      <div style="display: flex; gap: 0.4rem; justify-content: center; margin-top: 0.6rem;">
        <button class="btn btn-sm" data-act="toggle">Toggle Status</button>
        <button class="btn btn-sm" data-act="qr"><i class="fa-solid fa-qrcode"></i> QR</button>
      </div>
    `;

    card.querySelector('[data-act="toggle"]').onclick = async () => {
      await tableService.toggleStatus(tbl.id);
      await renderAdminTablesGrid();
      showToast(`Table ${tbl.number} status updated`, 'info');
    };

    card.querySelector('[data-act="qr"]').onclick = () => {
      openQRModal(tbl);
    };

    container.appendChild(card);
  });
}

function openQRModal(table) {
  const modal = document.getElementById('qr-modal');
  document.getElementById('qr-modal-title').textContent = `Table #${table.number} QR Code`;
  document.getElementById('qr-modal-sub').textContent = `Scan to order directly from Table ${table.number}`;

  const qrBox = document.getElementById('qr-modal-code-box');
  const qrSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" style="background: white; padding: 15px; border-radius: 12px;">
      <rect width="60" height="60" fill="#100b08"/>
      <rect width="40" height="40" x="10" y="10" fill="white"/>
      <rect width="20" height="20" x="20" y="20" fill="#100b08"/>
      
      <rect width="60" height="60" x="140" fill="#100b08"/>
      <rect width="40" height="40" x="150" y="10" fill="white"/>
      <rect width="20" height="20" x="160" y="20" fill="#100b08"/>

      <rect width="60" height="60" y="140" fill="#100b08"/>
      <rect width="40" height="40" x="10" y="150" fill="white"/>
      <rect width="20" height="20" x="20" y="160" fill="#100b08"/>

      <rect width="15" height="15" x="80" y="80" fill="#100b08"/>
      <rect width="25" height="15" x="105" y="80" fill="#e59849"/>
      <rect width="15" height="25" x="80" y="105" fill="#e59849"/>
      <rect width="20" height="20" x="120" y="120" fill="#100b08"/>
      <rect width="15" height="15" x="150" y="100" fill="#100b08"/>
      <text x="100" y="195" font-size="10" text-anchor="middle" fill="#100b08" font-family="sans-serif">TABLE #${table.number}</text>
    </svg>
  `;
  qrBox.innerHTML = qrSvg;

  document.getElementById('close-qr-modal').onclick = () => {
    modal.style.display = 'none';
  };

  document.getElementById('print-qr-btn').onclick = () => {
    window.print();
  };

  modal.style.display = 'flex';
}

// Restaurant Settings View
async function renderAdminSettingsForm() {
  const settings = await settingsService.get();
  document.getElementById('set-name').value = settings.name || '';
  document.getElementById('set-tagline').value = settings.tagline || '';
  document.getElementById('set-phone').value = settings.phone || '';
  document.getElementById('set-address').value = settings.address || '';
  document.getElementById('set-hours').value = settings.openingHours || '';
  document.getElementById('set-currency').value = settings.currencySymbol || '$';
  document.getElementById('set-fee').value = settings.serviceFee || 1.50;

  document.getElementById('admin-settings-form').onsubmit = async (e) => {
    e.preventDefault();
    await settingsService.update({
      name: document.getElementById('set-name').value.trim(),
      tagline: document.getElementById('set-tagline').value.trim(),
      phone: document.getElementById('set-phone').value.trim(),
      address: document.getElementById('set-address').value.trim(),
      openingHours: document.getElementById('set-hours').value.trim(),
      currencySymbol: document.getElementById('set-currency').value.trim(),
      serviceFee: parseFloat(document.getElementById('set-fee').value),
    });
    showToast('Restaurant settings saved!', 'success');
  };
}
