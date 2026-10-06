const SITE = 'https://gmtools.in';
const media = (name) => `${SITE}/img/${name}`;

const categories = [
  {
    slug: '/drills', name: 'Drills', image: 'home-prod1.jpg',
    short: 'Carbide and HSS drilling tools for dimensional accuracy and production.',
    description: 'Carbides are extremely hard materials that can drill in virtually all workpiece materials while holding an edge longer than other bits. High Speed Steel (HSS) is more resistant to heat and can be used on metal, hardwood and most other materials at greater cutting speeds than carbon steel bits. Solid Carbide and HSS Drills feature special geometry and other enhancements that provide greater hole dimensional accuracy at higher production rates.',
    ranges: ['Solid Carbide Drills / Step Drills', 'Solid Carbide Burnishing Drills/Step Drills', 'HSS & Carbide Core Drills', 'HSS & Carbide Slot Drills'],
    facts: [
      ['Material', 'Solid Carbide and HSS'],
      ['Cutting context', 'Metal, hardwood and other workpiece materials'],
      ['Design note', 'Special geometry supports dimensional accuracy and production rates'],
    ],
  },
  {
    slug: '/milling-cutters', name: 'Milling Cutters', image: 'home-prod2.jpg',
    short: 'Solid carbide, HSS and varied cutter styles for precision machining.',
    description: 'Comprehensive milling cutters lineup: solid carbide, HSS, and various styles for precision machining.',
    ranges: [
      'Solid Carbide Hole Mills', 'Solid Carbide End Mills', 'Solid Carbide Ball Noze Cutter/Bull Noze',
      'HSS & Carbide Side & Face Cutter (St. & Staggered Teeth)', 'HSS & Carbide Shell End Mill Cutters',
      'HSS & Carbide Hole Mills', 'HSS & Carbide End Mill Cutter (Taper & Parallel Shank)',
      'HSS & Carbide Wood Ruff Cutter', 'HSS Trippening Cutter', 'HSS Thread Milling Cutters',
    ],
    facts: [['Materials', 'Solid Carbide and HSS'], ['Product range', 'Hole mills, end mills and other listed cutter styles']],
  },
  {
    slug: '/reamers', name: 'Reamers', image: 'home-prod3.jpg',
    short: 'HSS and solid carbide reamers for finishing holes and hardened materials.',
    description: 'High Speed Steels (HSS) are most commonly used for reamers. G M Tools’ HSS Reamers have sharp cutting edges, meaning less cutting force. Solid Carbide Reamers are required to ream hardened materials.',
    ranges: ['Solid Carbide Reamer/Step Reamers', 'HSS & Carbide Reamer', 'HSS & Carbide Shell Reamers', 'HSS Taper Reamer and Rougher'],
    facts: [['HSS reamers', 'Sharp cutting edges reduce cutting force'], ['Solid carbide', 'For reaming hardened materials']],
  },
  {
    slug: '/profile-tools', name: 'Profile Tools', image: 'home-prod4.jpg',
    short: 'Solid Carbide Profile Drills and Cutters made for accurate profiles.',
    description: 'G M Tools manufactures Solid Carbide Profile Drills and Cutters. The company describes its profile tools as accurate among the industry.',
    ranges: [],
    facts: [['Product forms', 'Solid Carbide Profile Drills and Cutters'], ['More information', 'Contact G M Tools with your requirements']],
  },
  {
    slug: '/punches-and-dies', name: 'Punches and Dies', image: 'home-prod5.jpg',
    short: 'HSS and Carbide punches and dies made to G M Tools’ quality specifications.',
    description: 'Every punch and die G M Tools produces is made from HSS and Carbide, and is tested according to its quality specifications.',
    ranges: [],
    facts: [['Materials', 'HSS and Carbide'], ['Quality', 'Tested to G M Tools’ quality specifications']],
  },
  {
    slug: '/jigs-and-fitures', name: 'Jigs And Fitures', image: 'home-prod6.jpg',
    short: 'Jigs and Fixtures designed to suit specific client requirements.',
    description: 'G M Tools manufactures Jigs and Fixtures used in various industries. These are designed to suit the specific requirements of clients.',
    ranges: [],
    facts: [['Application', 'Used in various industries'], ['Design', 'Tailored to specific client requirements']],
  },
];

const machineRows = [
  ['CNC Universal Tool & Cutter Grinder – 6 Axis', 'TGT', '02'],
  ['Optical Profile Grinder', 'Wickman', '01'],
  ['Cyl. Grinding Machine K-130', 'HMT', '01'],
  ['Cyl. Grinding Machine G-9', 'HMT', '02'],
  ['Tool & Cutter Grinder', 'HMT', '02'],
  ['Tool & Cutter Grinder', 'Praga', '02'],
  ['Surface Grinder', 'Alex', '01'],
  ['Surface Grinder', 'Suraj', '01'],
  ['Milling Machine 1 No', 'Deckel', '01'],
  ['Milling Machine Fn-2', 'HMT', '01'],
  ['Milling Machine No1/No2', 'BFW', '02'],
  ['Milling Machine No 2', 'Sunrise', '02'],
  ['Drilling Machine (Pillar)', 'Tata', '02'],
  ['Drilling Machine', 'Natraj', '01'],
  ['Lathe Machine', 'Payal', '04'],
  ['Hack Saw Machine', 'Yash', '01'],
  ['Silver Brazing Set', '', '02'],
  ['Profile Projector', 'GG Inst.', '01'],
];

const infrastructureMachines = [
  { row: 0, name: 'CNC Universal Tool & Cutter Grinder', model: '6 Axis', image: '/assets/infrastructure/cnc-tgt-6-axis.jpg', alt: 'TGT CNC Universal Tool and Cutter Grinder, 6-axis', photoPlate: true },
  { row: 4, name: 'Tool & Cutter Grinder', image: '/assets/infrastructure/grinder-tool-cutter-hmt.jpg', alt: 'HMT tool and cutter grinder' },
  { row: 2, name: 'Cylindrical Grinding Machine', model: 'K-130', image: '/assets/infrastructure/grinder-hmt-k130.jpg', alt: 'HMT K-130 cylindrical grinding machine' },
  { row: 3, name: 'Cylindrical Grinding Machine', model: 'G-9', image: '/assets/infrastructure/grinder-hmt-g9.jpg', alt: 'HMT G-9 cylindrical grinding machine' },
  { row: 7, name: 'Surface Grinder', image: '/assets/infrastructure/grinder-surface-suraj.jpg', alt: 'Suraj industrial surface grinder' },
  { row: 6, name: 'Surface Grinder', image: '/assets/infrastructure/grinder-surface-alex.jpg', alt: 'Alex industrial surface grinder' },
  { row: 8, name: 'Milling Machine', model: '1 No', image: '/assets/infrastructure/milling-deckel.jpg', alt: 'Deckel milling machine' },
  { row: 9, name: 'Milling Machine', model: 'Fn-2', image: '/assets/infrastructure/milling-hmt-fn2.jpg', alt: 'HMT vertical milling machine' },
  { row: 10, name: 'Milling Machine', model: 'No1 / No2', image: '/assets/infrastructure/milling-bfw.jpg', alt: 'BFW industrial milling machine' },
  { row: 11, name: 'Milling Machine', model: 'No 2', image: '/assets/infrastructure/milling-sunrise.jpg', alt: 'Sunrise milling machine with digital readout' },
  { row: 12, name: 'Drilling Machine (Pillar)', image: '/assets/infrastructure/drill-tata-pillar.jpg', alt: 'Tata industrial pillar drill' },
  { row: 14, name: 'Lathe Machine', image: '/assets/infrastructure/lathe-payal.jpg', alt: 'Payal industrial metal lathe' },
  { row: 15, name: 'Hack Saw Machine', image: '/assets/infrastructure/hack-saw-yash.jpg', alt: 'Yash metal cutting hack saw machine' },
  { row: 16, name: 'Silver Brazing Set', image: '/assets/infrastructure/silver-brazing-set.jpg', alt: 'Silver brazing equipment on a green cart', kind: 'equipment' },
  { row: 17, name: 'Profile Projector', image: '/assets/infrastructure/profile-projector-gg-inst.jpg', alt: 'Industrial optical profile projector' },
].map((machine) => {
  const [inventoryName, manufacturer, quantity] = machineRows[machine.row];
  return { ...machine, inventoryName, manufacturer, quantity };
});

const aboutText = 'G M Tools forms a major part of the G M Group of Companies, comprising of G M Traders, G M Form-Tech and G M Tools & Engineering Co. We are one of the leading manufacturers and suppliers of Solid Carbide, HSS & Brazed Carbide Cutting Tools (Special & Standard) in the Bhosari Industrial Estate, Pune, India. We also manufacture HSS & Carbide Profile Tools and offer services like CNC regrinding, tool recoating and tool drawings.';
const qualityPoints = [
  'Our Passion for Excellence', 'Our Highly Trained, Experienced and Skillful Team',
  'State of the Art Manufacturing Facilities and Latest Machinery', 'High Quality Controlling Systems',
  'Use of the Latest Available Technology', 'Advanced Testing Facilities',
];

const esc = (value = '') => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const mediaMatches = (query) => window.matchMedia?.(query)?.matches ?? false;
const pathNow = window.location.pathname.replace(/\/$/, '') || '/';
const currentCategory = categories.find((item) => item.slug === pathNow);
const routeNames = {
  '/': ['Home', 'Precision crafted tools for engineering excellence.'],
  '/index': ['Home', 'Precision crafted tools for engineering excellence.'],
  '/about-us': ['About G M Tools', 'About G M Tools and its Solid Carbide, HSS and Brazed Carbide cutting tool manufacturing in Pune.'],
  '/our-products': ['Our Products', 'Explore G M Tools product categories: Drills, Milling Cutters, Reamers, Profile Tools, Punches and Dies, and Jigs and Fixtures.'],
  '/infrastructure': ['Infrastructure', 'G M Tools manufacturing infrastructure and cutting-edge machinery.'],
  '/clients': ['Our Clients', 'G M Tools serves clients across industries with precision cutting tools.'],
  '/enquiry': ['Make an Enquiry', 'Send G M Tools your cutting tool requirements.'],
  '/contact-us': ['Contact G M Tools', 'Contact G M Tools in Bhosari, Pune for enquiries, partnerships and assistance.'],
};

function header() {
  const links = [
    ['/index', 'Home'], ['/about-us', 'About Us'], ['/our-products', 'Products'],
    ['/infrastructure', 'Infrastructure'], ['/clients', 'Clients'], ['/enquiry', 'Enquiry'], ['/contact-us', 'Contact Us'],
  ];
  return `<header class="site-header">
    <div class="header-inner">
      <a class="brand" href="/index" aria-label="G M Tools home"><img src="${media('logo.png')}" alt="G M Tools" width="110" height="83"></a>
      <a class="header-tagline" href="/index">Precision crafted tools for engineering excellence!</a>
      <button class="menu-toggle" type="button" aria-controls="primary-navigation" aria-expanded="false" aria-label="Open navigation"><span></span><span></span></button>
      <nav id="primary-navigation" class="primary-navigation" aria-label="Main navigation">
        ${links.map(([href, name]) => `<div class="nav-item${name === 'Products' ? ' nav-products' : ''}"><a href="${href}">${name}<span class="nav-arrow" aria-hidden="true">↗</span></a>${name === 'Products' ? `<div class="product-menu">${categories.map((item, i) => `<a href="${item.slug}"><span>${String(i + 1).padStart(2, '0')}</span>${esc(item.name)}</a>`).join('')}</div>` : ''}</div>`).join('')}
      </nav>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="footer-top"><div class="footer-brand-block"><img src="${media('logo.png')}" alt="G M Tools" width="110" height="83"><p>${esc(aboutText)}</p></div>
      <div class="footer-links"><h2>Explore</h2><a href="/about-us">About Us</a><a href="/our-products">Our Products</a><a href="/infrastructure">Infrastructure</a><a href="/clients">Clients</a></div>
      <div class="footer-links"><h2>Product range</h2>${categories.map((item) => `<a href="${item.slug}">${esc(item.name)}</a>`).join('')}</div>
      <div class="footer-contact"><h2>Contact</h2><p>188, Khande Wasti, MIDC, Bhosari,<br>Pimpri-Chinchwad, Maharashtra 411026 (India)</p><a href="tel:+919370916912">+91-9370916912</a><a href="tel:+912027488075">+91 20 27488075</a><a href="mailto:gmtools@vsnl.net">gmtools@vsnl.net</a><a href="mailto:sales@gmtools.in">sales@gmtools.in</a></div>
    </div>
    <div class="footer-bottom"><span>© Copyright 2023 G M Tools. All rights reserved.</span><a href="#top">Back to top ↑</a><span class="footer-index">GMT / PUNE, INDIA</span></div>
  </footer>`;
}

function buttonLink(href, label, className = '') {
  return `<a class="button-link ${className}" href="${href}"><span>${label}</span><b aria-hidden="true">↗</b></a>`;
}

function homePage() {
  const beats = [
    ['01', 'Opening / Pune, India'], ['02', 'Engineering / Tools that define the cut'],
    ['03', 'Precision / Solid Carbide · HSS'], ['04', 'Detail / Special geometry'],
    ['05', 'Application / Across workpiece materials'], ['06', 'Product range / Six tool families'],
    ['07', 'Capability / G M Tools & Engineering Co.'], ['08', 'Enquiry / Start a conversation'],
  ];
  const rangeCards = categories.map((item, i) => `<article class="cinema-range-card${i === 0 ? ' is-current' : ''}" data-range-card="${i}" aria-hidden="${i !== 0}"${i !== 0 ? ' inert' : ''}>
      <span class="cinema-range-count">${String(i + 1).padStart(2, '0')} / 06</span><p class="eyebrow">${esc(item.name)}</p><h3>${esc(item.name)}</h3><p>${esc(item.short)}</p><a class="cinema-range-link" href="${item.slug}">Explore ${esc(item.name)} <span aria-hidden="true">↗</span></a>
    </article>`).join('');
  const rangeRail = categories.map((item, i) => `<a href="${item.slug}" data-range-link="${i}"${i === 0 ? ' aria-current="true"' : ''}><span>${String(i + 1).padStart(2, '0')}</span>${esc(item.name)}</a>`).join('');
  return `<main id="main">
    <section class="cinema-story" id="top" data-cinema aria-label="A continuous story of G M Tools engineering and product range">
      <div class="cinema-stage" data-cinema-stage>
        <div class="cinema-backdrop" aria-hidden="true"><div class="cinema-backdrop-photo cinema-backdrop-workshop"></div><div class="cinema-backdrop-photo cinema-backdrop-facility"></div><div class="cinema-backdrop-wash"></div><div class="cinema-grid"></div><div class="cinema-vignette"></div><div class="cinema-end-wash"></div></div>
        <div class="cinema-meta" aria-hidden="true"><span>G M TOOLS &amp; ENGINEERING CO. / PUNE, INDIA</span><span data-scene-name>Opening / Pune, India</span></div>
        <div class="cinema-image-stage" aria-hidden="true"><div class="cinema-orbit cinema-orbit-a"></div><div class="cinema-orbit cinema-orbit-b"></div><div class="cinema-image-glow"></div>
          <div class="cinema-product-stack" data-product-stack>${categories.map((item, i) => `<figure class="cinema-product-layer${i === 0 ? ' is-current' : ''}" data-product-layer="${i}" aria-hidden="true"><img src="${i === 0 ? '/assets/home-prod1-cutout.png' : media(item.image)}" alt="" ${i === 0 ? 'fetchpriority="high"' : 'loading="eager"'}></figure>`).join('')}</div>
          <svg class="cinema-drawing" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true"><path data-drawing-line d="M680 350 C590 285 520 175 455 100"/><path data-drawing-line d="M680 350 C760 280 800 180 850 100"/><path data-drawing-line d="M680 350 C590 420 515 530 455 620"/><path data-drawing-line d="M680 350 C760 430 800 535 850 620"/></svg>
          <span class="cinema-crosshair cinema-crosshair-a" aria-hidden="true">+</span><span class="cinema-crosshair cinema-crosshair-b" aria-hidden="true">+</span>
          <div class="cinema-callout callout-material" aria-hidden="true"><span>01 / MATERIAL</span><b>Solid Carbide · HSS</b></div><div class="cinema-callout callout-geometry" aria-hidden="true"><span>02 / GEOMETRY</span><b>Special geometry</b></div><div class="cinema-callout callout-accuracy" aria-hidden="true"><span>03 / RESULT</span><b>Dimensional accuracy</b></div><div class="cinema-callout callout-production" aria-hidden="true"><span>04 / PRODUCTION</span><b>Higher production rates</b></div>
        </div>
        <div class="cinema-panels">
          <div class="cinema-panel cinema-panel-opening is-active" data-cinema-panel="0" aria-hidden="false">
            <p class="eyebrow">G M Tools / Precision crafted tools for engineering excellence</p><h1>PRECISION<br><span>CRAFTED</span><br>FOR INDUSTRY<span class="cinema-red-dot">.</span></h1><p class="cinema-open-note">Solid Carbide · HSS · Brazed Carbide<br>Special and standard cutting tools / Bhosari, Pune</p>
          </div>
          <div class="cinema-panel cinema-panel-engineering" data-cinema-panel="1" aria-hidden="true" inert><span class="cinema-kicker">01 / ENGINEERING</span><h2>Tools that<br><em>define the cut.</em></h2><p>${esc(aboutText)}</p><a href="/about-us" class="cinema-text-link">Meet G M Tools <b aria-hidden="true">↗</b></a></div>
          <div class="cinema-panel cinema-panel-precision" data-cinema-panel="2" aria-hidden="true" inert><span class="cinema-kicker">02 / FEATURED PRODUCT</span><h2>Drills.<br><em>Solid Carbide &amp; HSS.</em></h2><p>Special geometry supports hole dimensional accuracy and production rates. The range includes step, burnishing, core and slot drills.</p><a href="/drills" class="cinema-text-link">Explore the Drills range <b aria-hidden="true">↗</b></a></div>
          <div class="cinema-panel cinema-panel-close" data-cinema-panel="3" aria-hidden="true" inert><span class="cinema-kicker">03 / A CLOSER LOOK</span><h2>Made to<br><em>make the cut.</em></h2><p>Solid Carbide drills can work across virtually all workpiece materials while holding an edge longer.</p></div>
          <div class="cinema-panel cinema-panel-application" data-cinema-panel="4" aria-hidden="true" inert><span class="cinema-kicker">04 / MATERIAL &amp; APPLICATION</span><h2>Choose the<br><em>right cutting tool.</em></h2><p>HSS resists heat and is used on metal, hardwood and other materials at greater cutting speeds than carbon steel bits.</p><span class="cinema-caption">G M Tools manufacturing / Pune</span></div>
          <div class="cinema-panel cinema-panel-range" data-cinema-panel="5" aria-hidden="true" inert><span class="cinema-kicker">05 / PRODUCT RANGE</span><h2>Six families.<br><em>One precise fit.</em></h2><div class="cinema-range-copy">${rangeCards}</div><nav class="cinema-range-rail" aria-label="Product categories">${rangeRail}</nav></div>
          <div class="cinema-panel cinema-panel-capability" data-cinema-panel="6" aria-hidden="true" inert><span class="cinema-kicker">06 / G M TOOLS &amp; ENGINEERING CO.</span><h2>From special tools<br>to <em>standard.</em></h2><p>Manufacturer and supplier of Solid Carbide, HSS and Brazed Carbide Cutting Tools in Bhosari Industrial Estate, Pune.</p><div class="cinema-capability-list"><span>CNC regrinding</span><span>Tool recoating</span><span>Tool drawings</span><span>Advanced testing facilities</span></div><a href="/infrastructure" class="cinema-text-link">Explore infrastructure <b aria-hidden="true">↗</b></a></div>
          <div class="cinema-panel cinema-panel-inquiry" data-cinema-panel="7" aria-hidden="true" inert><span class="cinema-kicker">07 / THE NEXT STEP</span><p class="cinema-inquiry-prelude">Precision starts<br>with a conversation.</p><h2>What do you<br><em>need to make?</em></h2><p>Share your cutting tool requirement with the G M Tools team.</p>${buttonLink('/enquiry', 'Make an enquiry', 'button-light')}</div>
        </div>
        <div class="cinema-progress" role="progressbar" aria-label="Story progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div>
        <div class="cinema-stage-index" aria-hidden="true"><span data-scene-current>01</span><span> / 08</span></div><p class="cinema-scroll-cue" aria-hidden="true">Scroll to move through the story <span>↓</span></p>
      </div>
      <div class="cinema-fallback section-pad"><p class="eyebrow">G M Tools &amp; Engineering Co. / Pune, India</p><h1>Precision crafted<br><em>for industry.</em></h1><p>Precision crafted tools for engineering excellence. Solid Carbide, HSS and Brazed Carbide cutting tools, special and standard.</p>${buttonLink('/our-products', 'Explore products', 'button-light')}${buttonLink('/enquiry', 'Make an enquiry', 'button-outline')}<div class="cinema-fallback-products">${categories.map((item) => `<a href="${item.slug}"><img src="${media(item.image)}" alt="${esc(item.name)} product photography" loading="lazy"><span>${esc(item.name)}</span></a>`).join('')}</div></div>
      <div class="cinema-transcript" aria-label="G M Tools story overview"><h2>G M Tools — precision crafted tools for engineering excellence</h2><p>${esc(aboutText)}</p><h3>Drills / Solid Carbide and HSS</h3><p>Special geometry supports hole dimensional accuracy and production rates. Solid Carbide can drill virtually all workpiece materials while holding an edge. HSS resists heat and is used on metal, hardwood and other materials.</p><h3>Product range</h3><ul>${categories.map((item) => `<li>${esc(item.name)} — ${esc(item.short)}</li>`).join('')}</ul><p>Services include CNC regrinding, tool recoating and tool drawings.</p></div>
    </section>
  </main>`;
}

function contactCta() {
  return `<section class="contact-cta section-pad"><div class="cta-topline"><span>G M Tools / Pune, India</span><span>Have a requirement?</span></div><p class="eyebrow reveal">Precision starts with a conversation</p><h2 class="cta-heading reveal">Let’s make<br><em>the right tool.</em></h2><div class="cta-bottom"><p>Tell us what you need. The G M Tools team is ready to help with your cutting tool enquiry.</p>${buttonLink('/enquiry', 'Make an enquiry', 'button-light')}</div><div class="cta-mark" aria-hidden="true">GMT</div></section>`;
}

function pageHero(number, eyebrow, title, subtitle, image = '') {
  const breadcrumb = eyebrow === 'Product category' ? ['/our-products', 'Products'] : ({
    'Our product line': ['/our-products', 'Products'],
    'About G M Tools': ['/about-us', 'About Us'],
    'Manufacturing': ['/infrastructure', 'Infrastructure'],
    'Our clients': ['/clients', 'Clients'],
    'Enquiry': ['/enquiry', 'Enquiry'],
    'Contact us': ['/contact-us', 'Contact Us'],
  }[eyebrow] || ['/index', 'Home']);
  return `<section class="page-hero${image ? ' has-page-image' : ''}" id="top"${image ? ` style="--page-image:url('${media(image)}')"` : ''}><div class="page-hero-grid" aria-hidden="true"></div><div class="page-hero-inner"><div class="section-marker light-marker"><span>${number}</span><span>${esc(eyebrow)}</span></div><p class="eyebrow">G M Tools / Pune, India</p><h1 class="display-heading">${title}</h1>${subtitle ? `<p class="page-hero-subtitle">${esc(subtitle)}</p>` : ''}<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/index">Home</a><span> / </span><a href="${breadcrumb[0]}">${breadcrumb[1]}</a></nav></div></section>`;
}

function productListingPage() {
  return `<main id="main">${pageHero('02', 'Our product line', 'Tools that define<br><em>excellence in cutting.</em>', 'Explore Solid Carbide, HSS and Brazed Carbide Cutting Tools.')}
    <section class="catalog-section section-pad"><div class="catalog-toolbar"><label class="search-field"><span>Search products</span><input id="catalog-search" type="search" placeholder="Search categories or product types" autocomplete="off"><b aria-hidden="true">⌕</b></label><div class="filter-row" role="group" aria-label="Filter product categories"><button class="filter-chip is-selected" type="button" data-filter="all" aria-pressed="true">All categories</button>${categories.map((item) => `<button class="filter-chip" type="button" data-filter="${item.slug}" aria-pressed="false">${esc(item.name)}</button>`).join('')}</div></div>
      <div class="catalog-grid" id="catalog-grid">${categories.map((item, i) => `<article class="catalog-card" data-card="${item.slug}" data-search="${esc([item.name, item.short, item.description, ...item.ranges].join(' ').toLowerCase())}"><a href="${item.slug}" class="catalog-card-link"><div class="catalog-image"><img src="${media(item.image)}" alt="${esc(item.name)} product photography" loading="lazy"><span class="catalog-index">${String(i + 1).padStart(2, '0')} / 06</span><span class="catalog-view">View category ↗</span></div><div class="catalog-card-copy"><h2>${esc(item.name)}</h2><p>${esc(item.short)}</p><span class="text-link">Explore range <b aria-hidden="true">↗</b></span></div></a></article>`).join('')}</div><p class="catalog-empty" id="catalog-empty" hidden>No matching category. Try another search.</p>
    </section>${contactCta()}</main>`;
}

function categoryPage(item) {
  const index = categories.indexOf(item) + 1;
  const rangeContent = item.ranges.length
    ? `<div class="range-detail-list">${item.ranges.map((range, i) => `<div class="range-detail-item reveal"><span>${String(i + 1).padStart(2, '0')}</span><h3>${esc(range)}</h3><a href="/enquiry?product=${encodeURIComponent(item.name)}" aria-label="Enquire about ${esc(range)}">↗</a></div>`).join('')}</div>`
    : `<div class="range-detail-note"><span class="eyebrow">Made to your requirements</span><p>${esc(item.description)}</p><a class="text-link" href="/enquiry?product=${encodeURIComponent(item.name)}">Discuss this category <b aria-hidden="true">↗</b></a></div>`;
  return `<main id="main">${pageHero(`0${index}`, 'Product category', esc(item.name), item.short, item.image)}
    <section class="product-overview section-pad"><div class="section-marker reveal"><span>01</span><span>Overview</span></div><div class="product-overview-grid"><div class="product-overview-image reveal"><img src="${media(item.image)}" alt="G M Tools ${esc(item.name)} product photography" loading="eager"><span class="product-image-label">G M TOOLS / ${String(index).padStart(2, '0')}</span></div><div class="product-overview-copy"><p class="eyebrow reveal">${esc(item.name)} / G M Tools</p><h2 class="display-heading reveal">Precision for<br><em>your process.</em></h2><p class="lead-copy reveal">${esc(item.description)}</p><div class="product-facts">${item.facts.map(([label, value]) => `<div class="product-fact reveal"><span>${esc(label)}</span><p>${esc(value)}</p></div>`).join('')}</div>${buttonLink(`/enquiry?product=${encodeURIComponent(item.name)}`, 'Enquire about this range')}</div></div></section>
    <section class="range-detail section-pad"><div class="section-heading-row"><div><div class="section-marker reveal"><span>02</span><span>Available range</span></div><p class="eyebrow reveal">Product family</p><h2 class="display-heading reveal">${item.ranges.length ? 'Explore the<br><em>range.</em>' : 'Built around<br><em>your needs.</em>'}</h2></div><p class="detail-intro reveal">${item.ranges.length ? 'The product varieties below are listed by G M Tools. For information about a specific requirement, contact the team.' : 'Connect with G M Tools to discuss this product category and your requirements.'}</p></div>${rangeContent}</section>
    <section class="product-next section-pad"><div><span class="eyebrow">Continue exploring</span><h2>More from<br><em>G M Tools.</em></h2></div><div class="product-next-list">${categories.filter((category) => category !== item).slice(0, 3).map((category) => `<a href="${category.slug}">${esc(category.name)} <span aria-hidden="true">↗</span></a>`).join('')}</div>${buttonLink('/our-products', 'View all products')}</section>${contactCta()}</main>`;
}

function aboutPage() {
  return `<main id="main">${pageHero('03', 'About G M Tools', 'Tailored for<br><em>excellence.</em>', 'Solid Carbide, HSS and Brazed Carbide Cutting Tools — special and standard.')}
    <section class="about-story section-pad"><div class="section-marker reveal"><span>01</span><span>Welcome to G M Tools</span></div><div class="about-story-grid"><div><p class="eyebrow reveal">G M Group of Companies</p><h2 class="display-heading reveal">Engineering<br><em>with purpose.</em></h2></div><div class="about-copy"><p class="lead-copy reveal">${esc(aboutText)}</p><p class="reveal">G M Tools’ carbides are sourced from reputed manufacturers. The company describes the material as ultra-fine sub-micron grade for cutting tools, and works with carbide manufacturers to select from a range of carbides.</p><p class="reveal">Its High Speed Steels are manufactured using current technology to provide refined steels with uniform alloy distribution, strength, toughness and cutting edge retention.</p><p class="reveal">“The way we approach our job determines how well our tools do their job. We care that our tools do the job better, faster, longer, and at a lower total cost.”</p></div></div>
      <div class="about-image reveal"><img src="${media('about-us-inn.jpg')}" alt="G M Tools manufacturing and engineering" loading="lazy"><span>G M TOOLS / ENGINEERING EXCELLENCE</span></div>
    </section>
    <section class="quality-policy section-pad"><div class="section-marker light-marker reveal"><span>02</span><span>Quality policy</span></div><div class="quality-layout"><div><p class="eyebrow reveal">What makes us manufacture the best quality products?</p><h2 class="display-heading reveal">Quality in<br><em>every detail.</em></h2></div><div class="quality-list">${qualityPoints.map((point, i) => `<div class="quality-line reveal"><span>${String(i + 1).padStart(2, '0')}</span><p>${esc(point)}</p><b aria-hidden="true">+</b></div>`).join('')}</div></div><div class="quality-documents"><p class="eyebrow reveal">G M Tools / Quality policy and certifications</p><p class="quality-documents-copy reveal">G M Tools’ published quality statement describes its commitment to rigorous standards, product and service quality, and reducing environmental impact. The certificate below is the historical ISO 9001:2008 document published on the source site; its stated validity ended on 18 July 2012.</p><div class="quality-documents-grid"><figure class="quality-document reveal"><img src="${media('QUALITY-POLICY.jpg')}" alt="G M Tools quality policy document" loading="lazy"><figcaption>Quality Policy</figcaption></figure><figure class="quality-document reveal"><img src="${media('ISO-CERTIFICATE.jpg')}" alt="Archived G M Tools ISO 9001:2008 certificate, valid until 18 July 2012" loading="lazy"><figcaption>ISO 9001:2008 / Archive — validity ended 18 July 2012</figcaption></figure></div></div></section>
    <section class="about-services section-pad"><div class="section-marker reveal"><span>03</span><span>Services</span></div><div class="services-grid">${[['01', 'CNC regrinding facility'], ['02', 'Tool recoating'], ['03', 'Tool drawings']].map(([num, title]) => `<div class="service-cell reveal"><span>${num}</span><h3>${title}</h3><i aria-hidden="true">↗</i></div>`).join('')}</div>${buttonLink('/contact-us', 'Talk to our team')}</section>${contactCta()}</main>`;
}

function infrastructurePage() {
  const photographedMachines = infrastructureMachines;
  const closingMachines = photographedMachines.slice(-4);
  return `<main id="main" class="infrastructure-page">
    <section class="infrastructure-story" data-infra-story aria-label="G M Tools machinery and production equipment, one item at a time">
      <div class="infrastructure-stage" data-infra-stage>
        <div class="infra-stage-grid" aria-hidden="true"></div><div class="infra-stage-horizon" aria-hidden="true"></div>
        <div class="infra-stage-meta"><span>G M TOOLS &amp; ENGINEERING CO. / PUNE, INDIA</span><span data-infra-stage-label>FACILITY / 00</span></div>
        <section class="infra-intro-panel" data-infra-intro aria-hidden="false">
          <p class="infra-intro-kicker" data-infra-intro-reveal>04 / MANUFACTURING INFRASTRUCTURE</p>
          <h1 data-infra-intro-reveal>Infrastructure<span>.</span></h1>
          <p class="infra-intro-copy" data-infra-intro-reveal>G M Tools is equipped with a sophisticated manufacturing facility to produce systematically and at scale, including for urgent requirements. Current technology, machinery and advanced testing facilities support safe, efficient production and product quality.</p>
          <div class="infra-intro-marks" data-infra-intro-reveal><span>BHOSARI INDUSTRIAL ESTATE</span><span>01—${String(photographedMachines.length).padStart(2, '0')} / PHOTOGRAPHED EQUIPMENT</span><span>SCROLL TO ENTER THE FLOOR <b aria-hidden="true">↓</b></span></div>
          <div class="infra-intro-index" aria-hidden="true">01</div>
        </section>
        <div class="infra-machine-deck">
          ${photographedMachines.map((machine, index) => `<article class="infra-machine-scene${machine.photoPlate ? ' is-photo-plate' : ''}" data-infra-machine data-infra-index="${index}" aria-hidden="true" inert>
            <div class="infra-machine-watermark" aria-hidden="true">${String(index + 1).padStart(2, '0')}</div>
            <figure class="infra-machine-art"><span class="infra-art-registration" aria-hidden="true"></span><img src="${machine.image}" alt="${esc(machine.alt)}" loading="eager" fetchpriority="${index < 2 ? 'high' : 'auto'}" decoding="async"></figure>
            <div class="infra-machine-coordinate" aria-hidden="true"><span>X ${String(312 + index * 24).padStart(3, '0')}</span><i></i><span>Y ${String(86 + index * 17).padStart(3, '0')}</span></div>
            <div class="infra-machine-copy">
              <p class="infra-machine-step" data-infra-reveal><span>${machine.kind === 'equipment' ? 'EQUIPMENT' : 'MACHINE'} / ${String(index + 1).padStart(2, '0')}</span><span>${esc(machine.manufacturer || '—')}</span></p>
              <h2 data-infra-reveal>${esc(machine.name)}</h2>
              <div class="infra-machine-specs" data-infra-reveal><span>MANUFACTURER</span><b>${esc(machine.manufacturer || '—')}</b>${machine.model ? `<span>MODEL</span><b>${esc(machine.model)}</b>` : ''}</div>
            </div>
            <div class="infra-machine-leader" aria-hidden="true"><span>${machine.model ? 'MODEL / ' + esc(machine.model.toUpperCase()) : 'MACHINE / ' + String(index + 1).padStart(2, '0')}</span><i></i></div>
            <div class="infra-capacity" data-infra-reveal data-infra-capacity><span>INSTALLED QUANTITY</span><strong data-infra-quantity>${esc(machine.quantity)}</strong><b>${Number(machine.quantity) === 1 ? 'UNIT' : 'UNITS'}</b></div>
          </article>`).join('')}
        </div>
        <section class="infra-finale-panel" data-infra-finale aria-hidden="true" inert>
          <p class="infra-finale-kicker" data-infra-finale-reveal>G M TOOLS / BHOSARI, PUNE</p>
          <h2 data-infra-finale-reveal>Made for<br><em>the exact cut.</em></h2>
          <p class="infra-finale-copy" data-infra-finale-reveal>A systematic, high-capacity manufacturing facility. Current machinery and advanced testing support consistent production and product quality.</p>
          <div class="infra-fleet-composition" aria-label="Selected supplied photographs of G M Tools machinery and production equipment">
            ${closingMachines.map((machine, index) => `<figure class="infra-fleet-item infra-fleet-item-${index + 1}"><img src="${machine.image}" alt="${esc(machine.alt)}" loading="lazy" decoding="async"><figcaption>${esc(machine.manufacturer || '—')} / ${esc(machine.model || machine.name)}</figcaption></figure>`).join('')}
          </div>
          <a class="infra-finale-link" href="#infra-inventory" data-infra-finale-reveal>View the complete equipment list <b aria-hidden="true">↓</b></a>
          <div class="infra-finale-index" aria-hidden="true">${String(photographedMachines.length).padStart(2, '0')}</div>
        </section>
        <div class="infra-stage-controls" aria-hidden="true"><span data-infra-current>00</span><div class="infra-story-progress" role="progressbar" aria-label="Infrastructure story progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i></i></div><span>SCROLL / ${String(photographedMachines.length).padStart(2, '0')} MACHINES ↓</span></div>
      </div>
    </section>
    <section class="infra-inventory section-pad" id="infra-inventory"><div class="infra-inventory-heading"><div><p class="eyebrow">G M Tools / Reference</p><h2 class="display-heading">Complete equipment<br><em>inventory.</em></h2></div><p>Search the published machine list by machine name, manufacturer or quantity.</p></div>
      <details class="infra-inventory-details"><summary><span>Browse the full machine list</span><span>${machineRows.length} INVENTORY ENTRIES <b aria-hidden="true">＋</b></span></summary><div class="infra-inventory-body"><label class="search-field machine-search"><span>Filter machinery</span><input id="machine-search" type="search" placeholder="Search machine or make" autocomplete="off"><b aria-hidden="true">⌕</b></label><div class="machine-table-wrap"><table class="machine-table"><thead><tr><th scope="col">Machine</th><th scope="col">Manufacturing Company</th><th scope="col">No.</th></tr></thead><tbody>${machineRows.map(([machine, make, qty]) => `<tr data-machine="${esc([machine, make, qty].join(' ').toLowerCase())}"><td>${esc(machine)}</td><td>${esc(make || '—')}</td><td>${esc(qty)}</td></tr>`).join('')}</tbody></table></div><p id="machine-empty" class="catalog-empty" hidden>No matching machinery.</p><p class="infra-inventory-note">Machine specifications are listed only where G M Tools has published them.</p></div></details>
    </section>${contactCta()}</main>`;
}

function setupInfrastructureStory() {
  const story = document.querySelector('[data-infra-story]');
  if (!story) return;
  const stage = story.querySelector('[data-infra-stage]');
  const intro = story.querySelector('[data-infra-intro]');
  const machines = [...story.querySelectorAll('[data-infra-machine]')];
  const finale = story.querySelector('[data-infra-finale]');
  const currentReadout = story.querySelector('[data-infra-current]');
  const progress = story.querySelector('.infra-story-progress');
  const progressFill = progress?.querySelector('i');
  const stageLabel = story.querySelector('[data-infra-stage-label]');
  const clamp = (value) => Math.min(1, Math.max(0, value));
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (mediaMatches('(prefers-reduced-motion: reduce)') || !gsap || !ScrollTrigger) {
    story.classList.add('is-static');
    stage.classList.add('is-static');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  story.classList.add('has-scroll-story');
  const introExit = 0.94;
  const mobileStory = window.innerWidth <= 760;
  const machineStride = mobileStory ? 1.12 : 1.24;
  const firstMachineAt = 0.7;
  const finalAt = firstMachineAt + (machines.length - 1) * machineStride + 1.5;
  const timelineLength = finalAt + 0.8;
  story.style.height = `${(timelineLength + 1) * 100}svh`;
  const finaleMachines = [...story.querySelectorAll('.infra-fleet-item')];

  gsap.set(intro, { autoAlpha: 1, yPercent: 0 });
  gsap.set(intro.querySelectorAll('[data-infra-intro-reveal]'), { autoAlpha: 1, y: 0, clipPath: 'inset(0)' });
  gsap.set(machines, { autoAlpha: 0, yPercent: 128, scale: 0.68, xPercent: 0, rotationX: 8, rotationY: 0, transformPerspective: 1200, zIndex: 1 });
  gsap.set(machines.flatMap((machine) => [...machine.querySelectorAll('[data-infra-reveal]')]), { autoAlpha: 0, y: 22 });
  const machineImages = machines.map((machine) => machine.querySelector('.infra-machine-art img'));
  const quantities = machines.map((machine) => machine.querySelector('[data-infra-quantity]'));
  gsap.set(machineImages, { scale: 0.94, yPercent: 10 });
  gsap.set(quantities, { autoAlpha: 0, scale: 0.58, y: 70, rotationX: -24, transformPerspective: 700, transformOrigin: '50% 100%' });
  gsap.set(finale, { autoAlpha: 0, yPercent: 96, scale: 0.96, zIndex: 1 });
  gsap.set(finale.querySelectorAll('[data-infra-finale-reveal]'), { autoAlpha: 0, y: 22 });
  gsap.set(finaleMachines, { autoAlpha: 0, yPercent: 38, scale: 0.8 });

  let activeScene = -1;
  const syncInfrastructureState = (rawAmount) => {
    const amount = clamp(rawAmount);
    const time = amount * timelineLength;
    const activeIndex = time < firstMachineAt + 0.16 ? -1 : time >= finalAt ? machines.length : Math.min(machines.length - 1, Math.max(0, Math.floor((time - firstMachineAt) / machineStride)));
    if (activeIndex !== activeScene) {
      activeScene = activeIndex;
      intro.setAttribute('aria-hidden', String(activeIndex !== -1));
      intro.inert = activeIndex !== -1;
      machines.forEach((machine, index) => {
        const isActive = index === activeIndex;
        machine.setAttribute('aria-hidden', String(!isActive));
        machine.inert = !isActive;
      });
      finale.setAttribute('aria-hidden', String(activeIndex !== machines.length));
      finale.inert = activeIndex !== machines.length;
      if (currentReadout) currentReadout.textContent = activeIndex < 0 ? '00' : String(activeIndex === machines.length ? machines.length : activeIndex + 1).padStart(2, '0');
      if (stageLabel) stageLabel.textContent = activeIndex < 0 ? 'FACILITY / 00' : activeIndex === machines.length ? 'FLOOR / COMPLETE' : `EQUIPMENT / ${String(activeIndex + 1).padStart(2, '0')}`;
    }
    if (progressFill) progressFill.style.transform = `scaleX(${amount})`;
    progress?.setAttribute('aria-valuenow', String(Math.round(amount * 100)));
  };

  const timeline = gsap.timeline({ defaults: { ease: 'none' } });
  timeline.to(intro, { autoAlpha: 0.08, yPercent: -9, duration: 0.34, ease: 'power2.in' }, 0.62);
  timeline.to(intro, { autoAlpha: 0, duration: 0.1 }, introExit);

  machines.forEach((machine, index) => {
    const start = firstMachineAt + index * machineStride;
    const revealItems = machine.querySelectorAll('[data-infra-reveal]:not([data-infra-capacity])');
    const capacity = machine.querySelector('[data-infra-capacity]');
    const quantity = machine.querySelector('[data-infra-quantity]');
    const side = index % 2 ? 1 : -1;
    timeline.fromTo(machine, { autoAlpha: 0, yPercent: mobileStory ? 116 : 130, scale: mobileStory ? 0.84 : 0.67, xPercent: mobileStory ? 0 : side * -8, rotationX: mobileStory ? 2 : 8, rotationY: mobileStory ? 0 : side * -3, zIndex: 2 }, { autoAlpha: 1, yPercent: 0, scale: 1, xPercent: 0, rotationX: 0, rotationY: 0, zIndex: 5, duration: mobileStory ? 0.5 : 0.58, ease: 'power3.out' }, start);
    timeline.to(machineImages[index], { scale: 1.06, yPercent: -5, duration: 0.86, ease: 'none' }, start + 0.05);
    timeline.to(revealItems, { autoAlpha: 1, y: 0, duration: 0.34, stagger: 0.08, ease: 'power2.out' }, start + 0.28);
    timeline.to(capacity, { autoAlpha: 1, y: 0, duration: 0.27, ease: 'power2.out' }, start + 0.5);
    timeline.to(quantity, { autoAlpha: 1, scale: 1.08, y: 0, rotationX: 0, duration: 0.32, ease: 'back.out(1.6)' }, start + 0.52);
    timeline.to(quantity, { scale: 1, duration: 0.12, ease: 'power1.out' }, start + 0.84);
    timeline.to(machine, { autoAlpha: 0.42, yPercent: -13, xPercent: mobileStory ? side * 4 : side * 17, scale: mobileStory ? 0.92 : 0.8, rotationX: mobileStory ? -1 : -5, rotationY: mobileStory ? 0 : side * 4, zIndex: 2, duration: 0.25, ease: 'power2.in' }, start + 1.02);
    timeline.to(machine, { autoAlpha: 0, yPercent: -25, scale: mobileStory ? 0.88 : 0.68, duration: 0.17, ease: 'power1.in' }, start + 1.27);
  });

  timeline.fromTo(finale, { autoAlpha: 0, yPercent: 96, scale: 0.96, zIndex: 2 }, { autoAlpha: 1, yPercent: 0, scale: 1, zIndex: 6, duration: 0.46, ease: 'power3.out' }, finalAt);
  timeline.to(finaleMachines, { autoAlpha: 1, yPercent: 0, scale: 1, duration: 0.38, stagger: 0.075, ease: 'power2.out' }, finalAt + 0.19);
  timeline.to(finale.querySelectorAll('[data-infra-finale-reveal]'), { autoAlpha: 1, y: 0, duration: 0.3, stagger: 0.08, ease: 'power2.out' }, finalAt + 0.24);

  const storyTrigger = ScrollTrigger.create({
    animation: timeline,
    trigger: story,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    invalidateOnRefresh: true,
    onUpdate: (self) => syncInfrastructureState(self.progress),
    onRefresh: (self) => syncInfrastructureState(self.progress),
  });
  ScrollTrigger.refresh();
  syncInfrastructureState(storyTrigger.progress);
}

function clientsPage() {
  return `<main id="main">${pageHero('05', 'Our clients', 'Trusted partners<br><em>in performance.</em>', 'A testament to G M Tools’ commitment and quality.')}
    <section class="clients-page section-pad"><div class="section-marker reveal"><span>01</span><span>Tirumala Groups / Satisfied clients</span></div><div class="clients-page-grid"><div><p class="eyebrow reveal">Across industries</p><h2 class="display-heading reveal">Built on<br><em>trust.</em></h2></div><div><p class="lead-copy reveal">G M Tools gives quick and effective responses to its clients. Its average response time to a job requisition is described as reasonably less than the standard response time in the industry.</p><p class="reveal">Valued clients inspire the team to keep delivering precision and quality in every product.</p>${buttonLink('/enquiry', 'Start an enquiry')}</div></div>
      <div class="client-logos large-logos">${['home-client1.jpg', 'home-client2.jpg', 'home-client3.jpg'].map((name, i) => `<div class="client-logo reveal"><img src="${media(name)}" alt="G M Tools client logo ${i + 1}" loading="lazy"></div>`).join('')}</div>
    </section>${contactCta()}</main>`;
}

const countryChoices = [
  'Afghanistan', 'Albania', 'Algeria', 'Am. Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antarctica', 'Antigua/Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia/Herzegovina', 'Botswana', 'Bouvet Island', 'Brazil', 'Brit. Ind. Ocean Terr.', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'C. African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos Islands', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', "Cote D'ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Rep.', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Terr.', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard Isl./McDonald Isl.', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', "Dem. People's Rep. of Korea", 'Republic of Korea', 'Kuwait', 'Kyrgyzstan', 'Lao Peoples Dem. Rep.', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libyan Arab Jamahiriya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'N. Mariana Isl.', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russian Federation', 'Rwanda', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'St. Pierre & Miquelon', 'St. Vincent/The Grenadines', 'Samoa', 'San Marino', 'Sao Tome/Principe', 'Saudi Arabia', 'Senegal', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South GA & Sandwich Isl.', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard/Jan Mayen', 'Swaziland', 'Sweden', 'Switzerland', 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Isl.', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State', 'Venezuela', 'Vietnam', 'Virgin Islands (British)', 'Virgin Islands (US)', 'Wallis and Futuna Isl.', 'Western Sahara', 'Yemen', 'Yugoslavia', 'Zaire', 'Zambia', 'Zimbabwe', 'Others',
];

function enquiryPage() {
  return `<main id="main">${pageHero('06', 'Enquiry', 'Make an<br><em>enquiry.</em>', 'Tell us your requirements, and we’ll provide a tailored quote for your precision cutting tool needs.')}
    <section class="form-page section-pad"><div class="section-marker reveal"><span>01</span><span>G M Tools / Make an enquiry</span></div><div class="form-page-grid"><div class="form-intro"><p class="eyebrow reveal">Precision starts here</p><h2 class="display-heading reveal">Tell us what<br><em>you need.</em></h2><p class="reveal">Fields marked with an asterisk (*) are mandatory.</p><div class="form-contact-card reveal"><span>Direct contact</span><a href="tel:+919370916912">+91-9370916912</a><a href="mailto:sales@gmtools.in">sales@gmtools.in</a></div></div>
      <form class="gm-form reveal" action="https://gmtools.in/enquiry-mail.php" method="post">
        <div class="form-section-title"><span>01</span><h3>Your details</h3></div>
        <div class="form-grid"><label>First Name *<input name="fname" type="text" placeholder="First Name *" autocomplete="given-name" required></label><label>Last Name *<input name="lname" type="text" placeholder="Last Name *" autocomplete="family-name" required></label><label class="span-2">Address *<textarea name="address" placeholder="Enter Address *" rows="2" autocomplete="street-address" required></textarea></label><label>City<input name="city" type="text" placeholder="Enter City" autocomplete="address-level2"></label><label>State<input name="state" type="text" placeholder="Enter State" autocomplete="address-level1"></label><label>Country<select name="country"><option value="">Select Your Country</option>${countryChoices.map((country) => `<option>${esc(country)}</option>`).join('')}</select></label><label>Telephone No. *<input name="number" type="tel" placeholder="Telephone No. *" autocomplete="tel" required></label><label class="span-2">Email *<input name="email" type="email" placeholder="Email *" autocomplete="email" required></label></div>
        <div class="form-section-title"><span>02</span><h3>Company information</h3></div>
        <div class="form-grid"><label>Company Name *<input name="cname" type="text" placeholder="Company Name *" autocomplete="organization" required></label><label>Designation<input name="designation" type="text" placeholder="Designation" autocomplete="organization-title"></label><label class="span-2">Company Telephone No.<input name="company_telephone" type="tel" placeholder="Company Telephone No."></label><label class="span-2">Enquiry details<textarea id="enquiry-details" name="enquiry" placeholder="Enquiry Details" rows="4"></textarea></label></div>
        <button class="submit-button" type="submit"><span>Make an enquiry</span><b aria-hidden="true">↗</b></button><p class="form-privacy-note">Your enquiry will be sent to G M Tools using its existing enquiry service.</p>
      </form></div></section>${contactCta()}</main>`;
}

function contactPage() {
  return `<main id="main">${pageHero('07', 'Contact us', 'Connect with<br><em>G M Tools.</em>', 'For enquiries, partnerships or assistance, reach out to us.')}
    <section class="contact-page section-pad"><div class="section-marker reveal"><span>01</span><span>Contact information</span></div><div class="contact-grid"><article class="contact-card reveal"><span class="contact-number">01 / ADDRESS</span><h2>Factory address</h2><p>188, Khande Wasti, Pimpri Chinchwad New Twp Development Authority, MIDC, Bhosari, Pimpri-Chinchwad, Maharashtra 411026</p><a href="https://maps.google.com/?q=G+M+Tools+Bhosari+Pune" target="_blank" rel="noreferrer">Open map <b aria-hidden="true">↗</b></a></article><article class="contact-card reveal"><span class="contact-number">02 / PHONE</span><h2>Call us now</h2><a href="tel:+919370916912">+91-9370916912</a><a href="tel:+912027488075">+91 20 27488075</a></article><article class="contact-card reveal"><span class="contact-number">03 / EMAIL</span><h2>Email us</h2><a href="mailto:gmtools@vsnl.net">gmtools@vsnl.net</a><a href="mailto:sales@gmtools.in">sales@gmtools.in</a></article></div>
      <div class="contact-form-block"><div><p class="eyebrow reveal">Get in touch with us</p><h2 class="display-heading reveal">We’re here<br><em>to help.</em></h2><p class="reveal">Send a message to the G M Tools team.</p></div><form class="gm-form contact-form reveal" action="https://gmtools.in/e-mail.php" method="post"><label>Full name<input name="name" type="text" placeholder="Full Name" autocomplete="name"></label><label>Phone number<input name="number" type="tel" placeholder="Phone No" autocomplete="tel"></label><label>Email address<input name="email" type="email" placeholder="Email Id" autocomplete="email"></label><label>Subject<input name="subject" type="text" placeholder="Subject"></label><label>Message<textarea name="message" placeholder="Write Message" rows="4"></textarea></label><button class="submit-button" type="submit"><span>Submit details</span><b aria-hidden="true">↗</b></button><p class="form-privacy-note">Your message will be sent to G M Tools using its existing contact service.</p></form></div>
      <div class="map-frame"><iframe title="Map showing G M Tools in Bhosari, Pune" src="https://www.google.com/maps?q=G+M+Tools+Bhosari+Pune&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </section></main>`;
}

function render() {
  let body;
  let pageMeta;
  if (pathNow === '/' || pathNow === '/index' || pathNow === '/index.html') {
    body = homePage(); pageMeta = routeNames['/'];
  } else if (currentCategory) {
    body = categoryPage(currentCategory); pageMeta = [currentCategory.name, `${currentCategory.name} from G M Tools, Pune. ${currentCategory.short}`];
  } else if (pathNow === '/our-products') {
    body = productListingPage(); pageMeta = routeNames[pathNow];
  } else if (pathNow === '/about-us') {
    body = aboutPage(); pageMeta = routeNames[pathNow];
  } else if (pathNow === '/infrastructure') {
    body = infrastructurePage(); pageMeta = routeNames[pathNow];
  } else if (pathNow === '/clients') {
    body = clientsPage(); pageMeta = routeNames[pathNow];
  } else if (pathNow === '/enquiry') {
    body = enquiryPage(); pageMeta = routeNames[pathNow];
  } else if (pathNow === '/contact-us') {
    body = contactPage(); pageMeta = routeNames[pathNow];
  } else {
    body = `<main id="main" class="not-found"><span class="eyebrow">404 / Page not found</span><h1 class="display-heading">This page<br><em>isn’t here.</em></h1>${buttonLink('/index', 'Return home')}</main>`;
    pageMeta = ['Page not found', 'This page could not be found.'];
  }
  document.title = pathNow === '/' || pathNow === '/index' || pathNow === '/index.html'
    ? 'G M Tools, Pune | Precision Crafted Tools for Engineering Excellence'
    : `${pageMeta[0]} | G M Tools`;
  document.querySelector('meta[name="description"]').setAttribute('content', pageMeta[1]);
  document.querySelector('link[rel="canonical"]').setAttribute('href', `${SITE}${pathNow === '/' ? '/' : pathNow}`);
  document.querySelector('#app').innerHTML = `${header()}${body}${footer()}`;
  setupInteractions();
  setupInfrastructureStory();
  const productInterest = new URLSearchParams(window.location.search).get('product');
  const enquiryDetails = document.querySelector('#enquiry-details');
  if (productInterest && enquiryDetails) enquiryDetails.value = `Product of interest: ${productInterest}\n\n`;
}

function setupCinematicStory() {
  const root = document.querySelector('[data-cinema]');
  if (!root) return;

  const panels = [...root.querySelectorAll('[data-cinema-panel]')];
  const layers = [...root.querySelectorAll('[data-product-layer]')];
  const rangeCards = [...root.querySelectorAll('[data-range-card]')];
  const rangeLinks = [...root.querySelectorAll('[data-range-link]')];
  const sceneNames = ['Opening / Pune, India', 'Engineering / Tools that define the cut', 'Precision / Solid Carbide · HSS', 'Detail / Special geometry', 'Application / Across workpiece materials', 'Product range / Six tool families', 'Capability / G M Tools & Engineering Co.', 'Enquiry / Start a conversation'];
  const panelStarts = [0, 1.28, 2.11, 3.49, 4.31, 5.24, 7.64, 8.74];
  const rangeStart = 5.52;
  const rangeStep = 0.38;
  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const progressFill = root.querySelector('.cinema-progress > span');
  const progressBar = root.querySelector('.cinema-progress');
  const sceneNumber = root.querySelector('[data-scene-current]');
  const sceneName = root.querySelector('[data-scene-name]');
  const drawingLines = [...root.querySelectorAll('[data-drawing-line]')];
  const callouts = [...root.querySelectorAll('.cinema-callout')];
  let activePanel = -1;
  let activeRange = -1;
  let activeScene = -1;

  const setPanel = (index) => {
    if (index === activePanel) return;
    activePanel = index;
    panels.forEach((panel, panelIndex) => {
      const active = panelIndex === index;
      panel.classList.toggle('is-active', active);
      panel.setAttribute('aria-hidden', String(!active));
      panel.inert = !active;
    });
  };

  const setRange = (index) => {
    if (index === activeRange) return;
    activeRange = index;
    rangeCards.forEach((card, cardIndex) => {
      const active = cardIndex === index;
      card.classList.toggle('is-current', active);
      card.setAttribute('aria-hidden', String(!active));
      card.inert = !active;
    });
    rangeLinks.forEach((link, linkIndex) => {
      const active = linkIndex === index;
      link.classList.toggle('is-current', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  const syncTimeline = (progress) => {
    const bounded = clamp(progress);
    const time = bounded * 10;
    let panelIndex = 0;
    panelStarts.forEach((start, index) => { if (time >= start) panelIndex = index; });
    setPanel(panelIndex);
    let sceneIndex = 0;
    const sceneStops = [0, 1.28, 2.11, 3.49, 4.31, 5.24, 7.64, 8.74];
    sceneStops.forEach((start, index) => { if (time >= start) sceneIndex = index; });
    if (sceneIndex !== activeScene) {
      activeScene = sceneIndex;
      if (sceneNumber) sceneNumber.textContent = String(sceneIndex + 1).padStart(2, '0');
      if (sceneName) sceneName.textContent = sceneNames[sceneIndex];
    }
    if (progressFill) progressFill.style.transform = `scaleX(${bounded})`;
    progressBar?.setAttribute('aria-valuenow', String(Math.round(bounded * 100)));
    root.classList.toggle('is-drawing', time >= 2.05 && time < 3.55);
    if (time >= rangeStart && time < 7.78) setRange(Math.min(categories.length - 1, Math.floor((time - rangeStart) / rangeStep)));
    else if (time < rangeStart) setRange(0);
    else setRange(categories.length - 1);
  };

  const reducedMotion = mediaMatches('(prefers-reduced-motion: reduce)');
  if (reducedMotion) {
    root.classList.add('is-reduced');
    return;
  }
  drawingLines.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = String(length);
    path.style.strokeDashoffset = String(length);
    path.dataset.length = String(length);
  });

  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    root.classList.add('has-gsap');

    const lenis = window.Lenis ? new window.Lenis({ lerp: 0.085, smoothWheel: true, anchors: true }) : null;
    if (lenis) {
      window.gmToolsLenis = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    const stack = root.querySelector('[data-product-stack]');
    const workshop = root.querySelector('.cinema-backdrop-workshop');
    const facility = root.querySelector('.cinema-backdrop-facility');
    const grid = root.querySelector('.cinema-grid');
    const endWash = root.querySelector('.cinema-end-wash');
    const orbits = [...root.querySelectorAll('.cinema-orbit')];
    const glow = root.querySelector('.cinema-image-glow');
    const opening = root.querySelector('[data-cinema-panel="0"]');
    const engineering = root.querySelector('[data-cinema-panel="1"]');
    const precision = root.querySelector('[data-cinema-panel="2"]');
    const close = root.querySelector('[data-cinema-panel="3"]');
    const application = root.querySelector('[data-cinema-panel="4"]');
    const rangePanel = root.querySelector('[data-cinema-panel="5"]');
    const capability = root.querySelector('[data-cinema-panel="6"]');
    const inquiry = root.querySelector('[data-cinema-panel="7"]');

    gsap.set(panels, { autoAlpha: 0, y: 24 });
    gsap.set(opening, { autoAlpha: 1, y: 0 });
    gsap.set(stack, { autoAlpha: 0.36, xPercent: -14, yPercent: -42, scale: 2.1 });
    gsap.set(layers, { autoAlpha: 0, x: 0, scale: 0.94 });
    gsap.set(layers[0], { autoAlpha: 1, x: 0, scale: 1 });
    gsap.set([precision], { autoAlpha: 0, y: 28 });
    const timeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } });

    timeline.to(stack, { autoAlpha: 1, xPercent: -42, yPercent: -50, scale: 1.02, duration: 1.9 }, 0.05);
    timeline.to(grid, { autoAlpha: 0.29, duration: 1.3 }, 0.55);
    timeline.to(orbits, { scale: 1, autoAlpha: 0.72, duration: 1.5 }, 0.55);
    timeline.to(glow, { autoAlpha: 1, scale: 1.08, duration: 1.3 }, 0.55);
    timeline.to(opening, { autoAlpha: 0, y: -55, duration: 0.16 }, 1.12);
    timeline.to(stack, { xPercent: -50, yPercent: -50, scale: 0.98, duration: 0.7 }, 1.37);
    timeline.fromTo(engineering, { autoAlpha: 0, y: 38 }, { autoAlpha: 1, y: 0, duration: 0.34 }, 1.28);
    timeline.to(engineering, { autoAlpha: 0, y: -24, duration: 0.16 }, 1.95);

    timeline.fromTo(precision, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.34 }, 2.11);
    timeline.to(stack, { xPercent: -60, yPercent: -50, scale: 0.88, duration: 0.75 }, 2.08);
    drawingLines.forEach((path, index) => {
      const length = path.getTotalLength();
      timeline.to(path, { strokeDashoffset: 0, duration: 0.43 }, 2.11 + index * 0.12);
    });
    callouts.forEach((label, index) => timeline.to(label, { autoAlpha: 1, y: 0, duration: 0.2 }, 2.4 + index * 0.12));
    timeline.to(precision, { autoAlpha: 0, y: -22, duration: 0.18 }, 3.3);
    timeline.to(callouts, { autoAlpha: 0, duration: 0.18 }, 3.3);
    timeline.to(drawingLines, { strokeDashoffset: (index, target) => target.getTotalLength(), duration: 0.14 }, 3.32);

    timeline.fromTo(close, { autoAlpha: 0, y: 26 }, { autoAlpha: 1, y: 0, duration: 0.34 }, 3.49);
    timeline.to(stack, { xPercent: -70, yPercent: -45, scale: 1.5, duration: 0.78 }, 3.55);
    timeline.to(close, { autoAlpha: 0, y: -20, duration: 0.16 }, 4.15);
    timeline.to(stack, { xPercent: -38, yPercent: -45, scale: 0.72, duration: 0.56 }, 4.29);
    timeline.to(facility, { autoAlpha: 0.68, scale: 1, duration: 0.74 }, 4.18);
    timeline.to(workshop, { autoAlpha: 0.34, scale: 1.01, duration: 0.65 }, 4.26);
    timeline.fromTo(application, { autoAlpha: 0, x: -20 }, { autoAlpha: 1, x: 0, duration: 0.34 }, 4.31);
    timeline.to(application, { autoAlpha: 0, y: -18, duration: 0.16 }, 5.08);

    timeline.fromTo(rangePanel, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.34 }, 5.24);
    timeline.to(stack, { xPercent: -42, yPercent: -50, scale: 0.83, duration: 0.43 }, 5.34);
    categories.forEach((item, index) => {
      const at = rangeStart + index * rangeStep;
      if (index > 0) {
        timeline.to(layers[index - 1], { autoAlpha: 0.04, x: -28, scale: 0.82, duration: 0.18 }, at);
      }
      timeline.fromTo(layers[index], { autoAlpha: index === 0 ? 1 : 0, x: 34, scale: 0.88 }, { autoAlpha: 1, x: 0, scale: 1, duration: 0.23 }, at + 0.03);
    });
    timeline.to(rangePanel, { autoAlpha: 0, y: -18, duration: 0.16 }, 7.48);

    timeline.to(stack, { xPercent: -12, yPercent: -53, scale: 0.59, autoAlpha: 0.42, duration: 0.68 }, 7.63);
    timeline.to(facility, { autoAlpha: 0.35, duration: 0.62 }, 7.68);
    timeline.to(grid, { autoAlpha: 0.2, duration: 0.62 }, 7.68);
    timeline.fromTo(capability, { autoAlpha: 0, x: -24 }, { autoAlpha: 1, x: 0, duration: 0.34 }, 7.64);
    timeline.to(capability, { autoAlpha: 0, y: -22, duration: 0.16 }, 8.58);

    timeline.to(stack, { xPercent: -4, yPercent: -54, scale: 0.48, autoAlpha: 0, duration: 0.8 }, 8.55);
    timeline.to(orbits, { autoAlpha: 0.12, scale: 1.2, duration: 0.9 }, 8.65);
    timeline.to(glow, { autoAlpha: 0.08, duration: 0.72 }, 8.65);
    timeline.to(grid, { autoAlpha: 0.04, duration: 0.95 }, 8.72);
    timeline.to(endWash, { autoAlpha: 1, duration: 1.0 }, 8.72);
    timeline.fromTo(inquiry, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.36 }, 8.74);
    let storySyncQueued = false;
    const syncStoryToScroll = () => {
      if (storySyncQueued) return;
      storySyncQueued = true;
      window.requestAnimationFrame(() => {
        storySyncQueued = false;
        const bounds = root.getBoundingClientRect();
        const travel = Math.max(1, root.offsetHeight - window.innerHeight);
        const progress = clamp(-bounds.top / travel);
        timeline.progress(progress);
        syncTimeline(progress);
      });
    };
    ScrollTrigger.create({
      trigger: root,
      start: 'top top',
      end: 'bottom bottom',
      invalidateOnRefresh: true,
      onUpdate: syncStoryToScroll,
      onRefresh: syncStoryToScroll,
    });
    window.addEventListener('scroll', syncStoryToScroll, { passive: true });
    window.addEventListener('resize', () => ScrollTrigger.refresh(), { passive: true });
    if (lenis) lenis.on('scroll', syncStoryToScroll);
    ScrollTrigger.refresh();
    syncStoryToScroll();
    return;
  }

  root.classList.add('no-gsap');
  const fallbackUpdate = () => {
    const box = root.getBoundingClientRect();
    const travel = Math.max(1, box.height - window.innerHeight);
    const progress = clamp(-box.top / travel);
    const time = progress * 10;
    syncTimeline(progress);
    const stage = root.querySelector('[data-cinema-stage]');
    const stack = root.querySelector('[data-product-stack]');
    const facility = root.querySelector('.cinema-backdrop-facility');
    const grid = root.querySelector('.cinema-grid');
    const opening = root.querySelector('[data-cinema-panel="0"]');
    const close = root.querySelector('[data-cinema-panel="3"]');
    if (stack) {
      const scale = time < 2 ? 2.1 - time * 0.56 : time < 4.2 ? 0.98 + clamp((time - 3.5) / 0.7) * 0.72 : time < 7.65 ? 0.82 : 0.82 - clamp((time - 7.65) / 1.9) * 0.34;
      const x = time < 2 ? 27 - time * 11 : time < 4.2 ? -12 : time < 7.65 ? 17 : 57;
      stack.style.transform = `translate(-50%,-50%) translate(${x}%, 0) scale(${scale})`;
      stack.style.opacity = String(time < 8.8 ? 1 : 1 - clamp((time - 8.8) / 0.9) * 0.88);
    }
    if (facility) facility.style.opacity = String(time > 4.1 && time < 7.8 ? 0.68 : time >= 7.8 ? 0.35 : 0);
    if (grid) grid.style.opacity = String(time < 8.6 ? 0.29 : 0.29 - clamp((time - 8.6) / 1.2) * 0.25);
    root.querySelector('.cinema-end-wash')?.style.setProperty('opacity', String(clamp((time - 8.65) / 1.1)));
    const drawingProgress = clamp((time - 2.05) / 0.92);
    drawingLines.forEach((path) => path.style.strokeDashoffset = String(Number(path.dataset.length) * (1 - drawingProgress)));
    callouts.forEach((label, index) => { label.style.opacity = String(clamp((time - 2.34 - index * 0.12) / 0.18)); });
    root.querySelector('.cinema-product-layer.is-current')?.classList.remove('is-current');
    const visualIndex = time >= rangeStart && time < 7.78 ? Math.min(categories.length - 1, Math.floor((time - rangeStart) / rangeStep)) : time >= 7.78 ? categories.length - 1 : 0;
    layers[visualIndex]?.classList.add('is-current');
    rangeCards.forEach((card, index) => card.classList.toggle('is-current', index === (time >= rangeStart && time < 7.78 ? visualIndex : time < rangeStart ? 0 : categories.length - 1)));
    if (opening) opening.style.opacity = String(1 - clamp((time - 0.7) / 0.75));
    if (close) close.style.opacity = String(time >= 3.55 && time < 4.25 ? 1 : 0);
  };
  let queued = false;
  const requestFallbackUpdate = () => {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(() => { queued = false; fallbackUpdate(); });
  };
  window.addEventListener('scroll', requestFallbackUpdate, { passive: true });
  window.addEventListener('resize', requestFallbackUpdate, { passive: true });
  fallbackUpdate();
}

function setupInteractions() {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-navigation');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    if (open) window.gmToolsLenis?.stop?.();
    else window.gmToolsLenis?.start?.();
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }));

  const revealItems = [...document.querySelectorAll('.reveal')];
  document.querySelectorAll('.hero .reveal').forEach((item) => item.classList.add('is-visible'));
  if (mediaMatches('(prefers-reduced-motion: reduce)')) revealItems.forEach((item) => item.classList.add('is-visible'));
  else {
    let revealFramePending = false;
    const revealInView = () => {
      revealFramePending = false;
      revealItems.forEach((item) => {
        if (item.classList.contains('is-visible')) return;
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * .92 && rect.bottom > 0) item.classList.add('is-visible');
      });
    };
    const queueRevealCheck = () => {
      if (revealFramePending) return;
      revealFramePending = true;
      window.requestAnimationFrame(revealInView);
    };
    window.addEventListener('scroll', queueRevealCheck, { passive: true });
    window.addEventListener('resize', queueRevealCheck, { passive: true });
    revealInView();
  }

  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const catalogCards = [...document.querySelectorAll('[data-card]')];
  const search = document.querySelector('#catalog-search');
  const empty = document.querySelector('#catalog-empty');
  let selectedFilter = 'all';
  const filterCatalog = () => {
    const query = (search?.value || '').trim().toLowerCase();
    let visible = 0;
    catalogCards.forEach((card) => {
      const matchesFilter = selectedFilter === 'all' || card.dataset.card === selectedFilter;
      const matchesQuery = !query || card.dataset.search.includes(query);
      const show = matchesFilter && matchesQuery;
      card.hidden = !show;
      if (show) visible += 1;
    });
    if (empty) empty.hidden = visible !== 0;
  };
  filterButtons.forEach((button) => button.addEventListener('click', () => {
    selectedFilter = button.dataset.filter;
    filterButtons.forEach((filter) => {
      const isSelected = filter === button;
      filter.classList.toggle('is-selected', isSelected);
      filter.setAttribute('aria-pressed', String(isSelected));
    });
    filterCatalog();
  }));
  search?.addEventListener('input', filterCatalog);

  const machineSearch = document.querySelector('#machine-search');
  const machineRowsEls = [...document.querySelectorAll('[data-machine]')];
  const machineEmpty = document.querySelector('#machine-empty');
  machineSearch?.addEventListener('input', () => {
    const query = machineSearch.value.trim().toLowerCase();
    let count = 0;
    machineRowsEls.forEach((row) => {
      const show = row.dataset.machine.includes(query);
      row.hidden = !show;
      if (show) count += 1;
    });
    if (machineEmpty) machineEmpty.hidden = count !== 0;
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      event.preventDefault();
      if (window.gmToolsLenis) window.gmToolsLenis.scrollTo(target, { offset: -88, duration: 0.9 });
      else target.scrollIntoView({ behavior: mediaMatches('(prefers-reduced-motion: reduce)') ? 'auto' : 'smooth' });
    }
  }));
  setupCinematicStory();
}

render();
