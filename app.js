/* ======================================================================
   SCHOOL OF OLYMPIAD — APP SHELL
   Renders the shared header/footer, theme handling, mobile drawer and
   small interaction helpers reused across every page.
   ====================================================================== */

const SOO_ICONS = {
  sigma:'<path d="M6 5h11l-6 7 6 7H6l5-7z"/>',
  atom:'<circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',
  flask:'<path d="M9 3h6M10 3v6l-5.5 9.5A1.5 1.5 0 0 0 5.8 21h12.4a1.5 1.5 0 0 0 1.3-2.5L14 9V3"/><path d="M7.5 15h9"/>',
  leaf:'<path d="M5 20c9 0 14-5 14-14 0 0-9-1-14 4-3 3-3 7 0 10z"/><path d="M5 20c3-6 6-9 12-13"/>',
  code:'<path d="M8 8 3 12l5 4M16 8l5 4-5 4M14 4 10 20"/>',
  star:'<path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 16.9 6.4 20l1.4-6.2-4.8-4.3 6.4-.6z"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 2.6 4.2 5.7 4.2 9s-1.4 6.4-4.2 9c-2.8-2.6-4.2-5.7-4.2-9S9.2 5.6 12 3z"/>',
  gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 3v2.4M12 18.6V21M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M3 12h2.4M18.6 12H21M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7"/>',
  cpu:'<rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 3v2.5M15 3v2.5M9 18.5V21M15 18.5V21M3 9h2.5M3 15h2.5M18.5 9H21M18.5 15H21"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  sun:'<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12h2.6M18.9 12h2.6M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"/>',
  moon:'<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4 6.8 6.8 0 0 0 20 14.5z"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  bell:'<path d="M7 9a5 5 0 0 1 10 0c0 5 2 6 2 6H5s2-1 2-6z"/><path d="M10 19a2 2 0 0 0 4 0"/>',
  user:'<circle cx="12" cy="8.5" r="3.4"/><path d="M4.5 20c1.6-3.6 4.5-5.4 7.5-5.4S17.9 16.4 19.5 20"/>',
  chevronRight:'<path d="M9 5l7 7-7 7"/>',
  chevronDown:'<path d="M5 9l7 7 7-7"/>',
  bookmark:'<path d="M7 3.5h10a1 1 0 0 1 1 1V21l-6-4-6 4V4.5a1 1 0 0 1 1-1z"/>',
  flag:'<path d="M6 3v18"/><path d="M6 4h11l-2.5 4L17 12H6"/>',
  target:'<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/>',
  medal:'<circle cx="12" cy="14.5" r="6"/><path d="M9.5 9.4 7 3h2.4l2.6 5.4M14.5 9.4 17 3h-2.4l-2.6 5.4"/><path d="M12 11.3v6.4"/>',
  flame:'<path d="M12 2.5s5 4.7 5 9.7a5 5 0 0 1-10 0c0-1.7 1-2.7 1.6-3.6.4 1 1.3 1.3 1.8.7-.6-3 1.1-5.2 1.6-6.8z"/>',
  bolt:'<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5 13.8 13.8 8.5 15.5l1.7-5.3z"/>',
  home:'<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v10h12V10"/>',
  book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15.5H6.5A2.5 2.5 0 0 0 4 21z"/><path d="M20 18.5H6.5A2.5 2.5 0 0 0 4 21"/>',
  trophy:'<path d="M8 4h8v6a4 4 0 0 1-8 0z"/><path d="M8 5H5a3 3 0 0 0 3 5M16 5h3a3 3 0 0 1-3 5"/><path d="M12 14v3M9 20h6M9.5 17h5l.5 3h-6z"/>',
  layout:'<rect x="3.5" y="4" width="17" height="16" rx="1.5"/><path d="M3.5 9.5h17M9 9.5V20"/>',
  check:'<path d="M5 13l4.5 4.5L19 7"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  arrowRight:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  filter:'<path d="M4 5h16M7 12h10M10 19h4"/>',
  download:'<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 19h16"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  upload:'<path d="M12 21V9M7 14l5-5 5 5"/><path d="M4 4h16"/>',
  lock:'<rect x="5" y="10.5" width="14" height="9.5" rx="1.5"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
  mail:'<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="M4 6.5l8 6.5 8-6.5"/>',
  external:'<path d="M14 5h5v5"/><path d="M19 5 10 14"/><path d="M9 5H5v14h14v-4"/>',
  play:'<path d="M7 4.5 19 12 7 19.5z"/>',
  timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 1.5"/><path d="M9.5 2.5h5"/>',
  refresh:'<path d="M4 12a8 8 0 0 1 13.7-5.7L20 8.5"/><path d="M20 4v4.5h-4.5"/><path d="M20 12a8 8 0 0 1-13.7 5.7L4 15.5"/><path d="M4 20v-4.5h4.5"/>',
  shuffle:'<path d="M4 6h3.5L15 18h5"/><path d="M17 4l3 2-3 2M4 18h3.5L11 12"/><path d="M17 20l3-2-3-2"/>',
  edit:'<path d="M4 20h4L18.5 9.5a2.1 2.1 0 0 0-3-3L5 17z"/>',
  trash:'<path d="M5 7h14M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M7 7l1 13h8l1-13"/>',
  users:'<circle cx="8.5" cy="8" r="3"/><circle cx="16" cy="9.5" r="2.4"/><path d="M3 20c.7-3.4 3-5 5.5-5s4.8 1.6 5.5 5"/><path d="M14.5 15.3c2 .2 3.7 1.7 4.3 4.7"/>',
  eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.6"/>',
};
function icon(name, cls){ return `<svg class="icon ${cls||''}" viewBox="0 0 24 24">${SOO_ICONS[name]||''}</svg>`; }

const SOO_NAV = [
  { label:"Subjects", href:"subjects.html" },
  { label:"Competitions", href:"competitions.html" },
  { label:"Questions", href:"questions.html" },
  { label:"Practice", href:"practice.html" },
  { label:"Tests", href:"test-builder.html" },
  { label:"Resources", href:"resources.html" },
  { label:"Articles", href:"articles.html" },
  { label:"Rankings", href:"rankings.html" },
  { label:"Dashboard", href:"dashboard.html" },
];
const SOO_MOBILE_EXTRA = [
  { label:"About", href:"about.html" },
  { label:"FAQ", href:"faq.html" },
  { label:"Profile", href:"profile.html" },
  { label:"Sign in", href:"login.html" },
];

function sooBrandMark(){
  return `<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true">
    <circle cx="16" cy="16" r="10.5" fill="none" stroke="var(--gold)" stroke-width="1.6"/>
    <circle cx="16" cy="5.3" r="2" fill="var(--gold)"/>
    <path d="M11 16.6l3.3 3.3 6.6-7.4" fill="none" stroke="var(--cobalt)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
}

function renderHeader(active){
  const links = SOO_NAV.map(n=>`<a href="${n.href}" class="${active===n.href?'active':''}">${n.label}</a>`).join('');
  const header = document.getElementById('site-header');
  if(!header) return;
  header.innerHTML = `
  <div class="container">
    <a href="index.html" class="brand">${sooBrandMark()}<span>School of Olympiad<small>STEM Competition Prep</small></span></a>
    <nav class="nav-desktop" aria-label="Primary">${links}</nav>
    <div class="header-actions">
      <button class="btn-icon hide-mobile" id="btn-search" aria-label="Search" title="Search">${icon('search')}</button>
      <button class="btn-icon hide-mobile" id="btn-notif" aria-label="Notifications" title="Notifications">${icon('bell')}</button>
      <button class="btn-icon" id="btn-theme" aria-label="Toggle theme" title="Toggle theme">${icon('moon')}</button>
      <div class="divider hide-mobile"></div>
      <a href="profile.html" class="btn-icon hide-mobile" aria-label="Profile" title="Profile">${icon('user')}</a>
      <a href="login.html" class="btn btn-primary btn-sm hide-mobile">Sign in</a>
      <button class="btn-icon mobile-toggle" id="btn-mobile-menu" aria-label="Open menu">${icon('menu')}</button>
    </div>
  </div>`;

  const drawer = document.createElement('div');
  drawer.className = 'mobile-drawer';
  drawer.id = 'mobile-drawer';
  const allLinks = [{label:"Home",href:"index.html"}, ...SOO_NAV, ...SOO_MOBILE_EXTRA];
  drawer.innerHTML = `<div class="scrim" id="drawer-scrim"></div>
    <div class="panel">
      <div class="flex justify-between items-center mb-4">
        <a href="index.html" class="brand">${sooBrandMark()}<span>School of Olympiad</span></a>
        <button class="btn-icon" id="drawer-close" aria-label="Close menu">${icon('x')}</button>
      </div>
      ${allLinks.map(l=>`<a class="drawer-link" href="${l.href}">${l.label}${icon('chevronRight')}</a>`).join('')}
    </div>`;
  document.body.appendChild(drawer);

  const bottomNav = document.createElement('nav');
  bottomNav.className = 'bottom-nav';
  bottomNav.setAttribute('aria-label','Quick navigation');
  const bn = [
    { label:"Home", href:"index.html", icon:"home" },
    { label:"Practice", href:"practice.html", icon:"target" },
    { label:"Questions", href:"questions.html", icon:"book" },
    { label:"Tests", href:"test-builder.html", icon:"layout" },
    { label:"Dashboard", href:"dashboard.html", icon:"user" },
  ];
  bottomNav.innerHTML = bn.map(l=>`<a href="${l.href}" class="${active===l.href?'active':''}">${icon(l.icon)}${l.label}</a>`).join('');
  document.body.appendChild(bottomNav);

  document.getElementById('btn-mobile-menu').addEventListener('click',()=>drawer.classList.add('open'));
  document.getElementById('drawer-close').addEventListener('click',()=>drawer.classList.remove('open'));
  document.getElementById('drawer-scrim').addEventListener('click',()=>drawer.classList.remove('open'));
  const searchBtn = document.getElementById('btn-search');
  if(searchBtn) searchBtn.addEventListener('click', openSearchOverlay);
  const notifBtn = document.getElementById('btn-notif');
  if(notifBtn) notifBtn.addEventListener('click', openNotifOverlay);
}

function renderFooter(){
  const footer = document.getElementById('site-footer');
  if(!footer) return;
  footer.innerHTML = `
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="brand">${sooBrandMark()}<span>School of Olympiad</span></a>
        <p class="text-mute text-sm mt-3" style="max-width:280px;">One question database, one dashboard, one path — for every STEM olympiad and competition, from your first practice set to the international stage.</p>
      </div>
      <div>
        <h5>Platform</h5>
        <a href="index.html">Home</a><a href="subjects.html">Subjects</a><a href="competitions.html">Competitions</a>
        <a href="questions.html">Questions</a><a href="practice.html">Practice</a><a href="test-builder.html">Tests</a>
        <a href="resources.html">Resources</a><a href="articles.html">Articles</a>
      </div>
      <div>
        <h5>Community</h5>
        <a href="rankings.html">Rankings</a><a href="achievements.html">Achievements</a>
        <a href="about.html">About</a><a href="contact.html">Contact</a><a href="faq.html">FAQ</a>
      </div>
      <div>
        <h5>Legal</h5>
        <a href="terms.html">Terms of Service</a><a href="privacy.html">Privacy Policy</a>
        <a href="cookies.html">Cookie Policy</a><a href="content-policy.html">Content Policy</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 School of Olympiad. All rights reserved.</span>
      <div class="flex gap-3 items-center">
        <span class="badge">EN — English</span>
        <a href="#" aria-label="X">${icon('external','')}</a>
      </div>
    </div>
  </div>`;
}

/* ---------- Theme ---------- */
function initTheme(){
  const root = document.documentElement;
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  updateThemeIcon();
  document.addEventListener('click', (e)=>{
    if(e.target.closest('#btn-theme')){
      const cur = root.getAttribute('data-theme');
      root.setAttribute('data-theme', cur==='dark' ? 'light' : 'dark');
      updateThemeIcon();
    }
  });
}
function updateThemeIcon(){
  const btn = document.getElementById('btn-theme');
  if(!btn) return;
  const isDark = document.documentElement.getAttribute('data-theme')==='dark';
  btn.innerHTML = icon(isDark ? 'sun' : 'moon');
}

/* ---------- Toast ---------- */
function sooToast(msg, iconName){
  let wrap = document.querySelector('.toast-wrap');
  if(!wrap){ wrap = document.createElement('div'); wrap.className='toast-wrap'; document.body.appendChild(wrap); }
  const t = document.createElement('div');
  t.className = 'toast';
  t.innerHTML = `${icon(iconName||'check')}<span>${msg}</span>`;
  wrap.appendChild(t);
  setTimeout(()=>{ t.style.opacity='0'; t.style.transition='opacity .25s ease'; setTimeout(()=>t.remove(),260); }, 2600);
}

/* ---------- Global search overlay ---------- */
function openSearchOverlay(){
  let scrim = document.getElementById('search-scrim');
  if(scrim){ scrim.classList.add('open'); scrim.querySelector('input').focus(); return; }
  scrim = document.createElement('div');
  scrim.className = 'modal-scrim open';
  scrim.id = 'search-scrim';
  scrim.innerHTML = `<div class="modal-box" style="max-width:600px; text-align:left;">
    <div class="flex items-center gap-3" style="border:1px solid var(--line); border-radius:10px; padding:10px 14px;">
      ${icon('search','text-mute')}
      <input type="search" id="global-search-input" placeholder="Search questions, competitions, subjects, articles…" style="border:none; padding:4px 0;">
      <button class="btn-icon" id="search-close">${icon('x')}</button>
    </div>
    <div id="search-results" class="mt-4" style="max-height:360px; overflow-y:auto;"></div>
  </div>`;
  document.body.appendChild(scrim);
  scrim.addEventListener('click', e=>{ if(e.target===scrim) scrim.classList.remove('open'); });
  scrim.querySelector('#search-close').addEventListener('click',()=>scrim.classList.remove('open'));
  scrim.querySelector('#global-search-input').addEventListener('input', e=>runGlobalSearch(e.target.value));
  runGlobalSearch('');
  setTimeout(()=>scrim.querySelector('input').focus(),50);
}
function runGlobalSearch(q){
  const res = document.getElementById('search-results');
  if(!res) return;
  q = (q||'').trim().toLowerCase();
  if(!q){ res.innerHTML = `<p class="text-mute text-sm">Try “thermodynamics”, “IMO”, or “genetics”.</p>`; return; }
  const hits = [];
  SOO.subjects.filter(s=>s.name.toLowerCase().includes(q)).forEach(s=>hits.push({type:'Subject',label:s.name,href:`subjects.html#${s.slug}`}));
  SOO.competitions.filter(c=>c.name.toLowerCase().includes(q)||c.short.toLowerCase().includes(q)).forEach(c=>hits.push({type:'Competition',label:c.name,href:`competition-detail.html?slug=${c.slug}`}));
  SOO.questions.filter(q2=>q2.title.toLowerCase().includes(q)||q2.topic.toLowerCase().includes(q)).forEach(q2=>hits.push({type:'Question',label:q2.title,href:`question-detail.html?id=${q2.id}`}));
  SOO.articles.filter(a=>a.title.toLowerCase().includes(q)).forEach(a=>hits.push({type:'Article',label:a.title,href:`article-detail.html?slug=${a.slug}`}));
  SOO.resources.filter(r=>r.title.toLowerCase().includes(q)).forEach(r=>hits.push({type:'Resource',label:r.title,href:`resource-detail.html?slug=${r.slug}`}));
  if(!hits.length){ res.innerHTML = `<p class="text-mute text-sm">No results for “${q}”. Try a different term.</p>`; return; }
  res.innerHTML = hits.slice(0,10).map(h=>`<a href="${h.href}" class="flex items-center justify-between" style="padding:11px 6px; border-bottom:1px solid var(--line-soft);">
    <span class="text-sm">${h.label}</span><span class="badge">${h.type}</span></a>`).join('');
}

function openNotifOverlay(){
  let scrim = document.getElementById('notif-scrim');
  if(scrim){ scrim.classList.add('open'); return; }
  scrim = document.createElement('div');
  scrim.className = 'modal-scrim open';
  scrim.id = 'notif-scrim';
  const items = [
    {icon:'flame', text:'Your 5-day streak is waiting — today\'s challenge is live.'},
    {icon:'medal', text:'Achievement unlocked: Speed Solver.'},
    {icon:'flag', text:'IChO registration closes in 12 days.'},
    {icon:'book', text:'New article: “Six Mechanism Patterns for Organic Chemistry.”'},
    {icon:'target', text:'Recommended: 8 weak-area questions in Rotational Dynamics.'},
  ];
  scrim.innerHTML = `<div class="modal-box" style="max-width:420px; text-align:left;">
    <div class="flex items-center justify-between mb-4">
      <h3 style="font-size:18px;">Notifications</h3>
      <button class="btn-icon" id="notif-close">${icon('x')}</button>
    </div>
    <div class="flex" style="flex-direction:column; gap:2px;">
      ${items.map(i=>`<div class="flex gap-3 items-center" style="padding:11px 4px; border-bottom:1px solid var(--line-soft);">
        <span style="color:var(--gold);">${icon(i.icon)}</span><span class="text-sm">${i.text}</span></div>`).join('')}
    </div>
  </div>`;
  document.body.appendChild(scrim);
  scrim.addEventListener('click', e=>{ if(e.target===scrim) scrim.classList.remove('open'); });
  scrim.querySelector('#notif-close').addEventListener('click',()=>scrim.classList.remove('open'));
}

/* ---------- Helpers ---------- */
function qs(name){ return new URLSearchParams(window.location.search).get(name); }
function initAccordions(root){
  (root||document).querySelectorAll('.accordion-trigger').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      btn.parentElement.classList.toggle('open');
    });
  });
}
function initTabs(root, onChange){
  (root||document).querySelectorAll('.tabs').forEach(tabbar=>{
    tabbar.querySelectorAll('.tab').forEach(tab=>{
      tab.addEventListener('click', ()=>{
        tabbar.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
        tab.classList.add('active');
        if(onChange) onChange(tab.dataset.tab, tabbar);
      });
    });
  });
}
function animateCount(el, target, suffix){
  const dur = 900; const start = performance.now();
  function step(t){
    const p = Math.min(1,(t-start)/dur);
    const eased = 1-Math.pow(1-p,3);
    el.textContent = Math.round(eased*target).toLocaleString() + (suffix||'');
    if(p<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', initTheme);
