// ─────────────────────────────────────────────
// CLIMELECTRA — COMPONENTES COMPARTIDOS v3.0
// Copy: Nivel 02 | Visual: Fraunces + DM Sans
// ─────────────────────────────────────────────

const TEL        = '622222883';
const TEL_DISPLAY= '622 222 883';
const WA_MSG     = encodeURIComponent('Hola! Estoy interesado en vuestros servicios.');
const WA_LINK    = `https://wa.me/34${TEL}?text=${WA_MSG}`;
const TEL_LINK   = `tel:${TEL}`;

// ── SVG ICONS (outline, 1.5–2px stroke) ──
const I = {
  bolt:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  phone:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.36h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg>`,
  file:    `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  map:     `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail:    `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  wa:      `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  check:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrow:   `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  star:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  clock:   `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  tool:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  receipt: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
  cal:     `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  plus:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  shield:  `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
};

// ── ALERT BANNER ── urgencia subvenciones
function ALERT_BANNER() {
  return `<div class="alert-banner" role="alert">
  <div class="alert-left">
    <div class="alert-dot" aria-hidden="true"></div>
    <p class="alert-text">Subvenciones ICAEN para aerotermia activas hasta junio 2026 — fondos limitados por orden de solicitud.</p>
  </div>
  <a href="subvenciones.html" class="alert-link">Ver ayudas →</a>
</div>`;
}

// ── HEADER ── con logo Fraunces italic y copy de Nivel 02
function HEADER(activePage = '') {
  const pages = [
    {href:'servicios.html',   label:'Servicios'},
    {href:'subvenciones.html',label:'Subvenciones'},
    {href:'proyectos.html',   label:'Proyectos'},
    {href:'nosotros.html',    label:'Nosotros'},
    {href:'blog.html',        label:'Blog'},
  ];
  const navLinks = pages.map(p =>
    `<a href="${p.href}"${p.label===activePage?' class="active" aria-current="page"':''}>${p.label}</a>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}"${p.label===activePage?' aria-current="page"':''}>${p.label}</a>`
  ).join('');

  return `<header class="site-header" role="banner">
  <div class="container">
    <div class="header-inner">
      <a href="index.html" class="logo" aria-label="Climelectra — inicio">
        <div class="logo-mark" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
        </div>
        Climelectra
      </a>
      <nav class="nav-links" aria-label="Navegación principal">${navLinks}</nav>
      <div class="nav-right">
        <a href="${TEL_LINK}" class="nav-tel" aria-label="Llamar al ${TEL_DISPLAY}">${I.phone} ${TEL_DISPLAY}</a>
        <a href="presupuesto.html" class="btn btn-primary btn-sm">${I.file} Pedir presupuesto</a>
      </div>
      <button class="nav-hamburger" id="hamburger-btn" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <nav class="mobile-menu" id="mobile-menu" aria-label="Menú móvil">
    ${mobileLinks}
    <a href="${TEL_LINK}" style="color:var(--verde);font-weight:700">${I.phone} ${TEL_DISPLAY}</a>
    <a href="presupuesto.html" style="color:var(--verde);font-weight:700">${I.file} Pedir presupuesto</a>
  </nav>
</header>`;
}

// ── FOOTER ── copy de Nivel 02
function FOOTER() {
  return `<footer class="site-footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="logo" style="margin-bottom:.875rem;display:inline-flex" aria-label="Climelectra">
          <div class="logo-mark" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          </div>
          Climelectra
        </a>
        <p class="footer-desc">Instaladores de aerotermia, fotovoltaica, electricidad, climatización y fontanería en el Vallès. Tramitamos las subvenciones ICAEN por ti — sin que tengas que gestionar nada.</p>
        <div class="footer-contact-list">
          <div class="footer-contact-item">${I.map} Carrer Pau Claris, 32, 1º · 08100 Mollet del Vallès</div>
          <a href="${TEL_LINK}" class="footer-contact-item">${I.phone} ${TEL_DISPLAY}</a>
          <a href="mailto:info@climelectra.com" class="footer-contact-item">${I.mail} info@climelectra.com</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Servicios</div>
        <div class="footer-links">
          <a href="aerotermia.html">Aerotermia</a>
          <a href="fotovoltaica.html">Fotovoltaica</a>
          <a href="electricidad.html">Electricidad</a>
          <a href="climatizacion.html">Climatización</a>
          <a href="fontaneria.html">Fontanería</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Empresa</div>
        <div class="footer-links">
          <a href="subvenciones.html">Subvenciones 2026</a>
          <a href="proyectos.html">Proyectos</a>
          <a href="nosotros.html">Quiénes somos</a>
          <a href="blog.html">Blog</a>
          <a href="presupuesto.html">Pedir presupuesto</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Zonas de servicio</div>
        <div class="footer-links">
          <a href="#">Mollet del Vallès</a>
          <a href="#">Granollers</a>
          <a href="#">La Garriga</a>
          <a href="#">Cardedeu</a>
          <a href="#">Parets del Vallès</a>
          <a href="#">Martorelles</a>
          <a href="#">Barcelona</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-legal">
        <a href="#">Aviso legal</a>
        <a href="#">Política de privacidad</a>
        <a href="#">Cookies</a>
      </div>
      <p class="footer-copy">© 2026 Climelectra · Mollet del Vallès · Barcelona</p>
    </div>
  </div>
</footer>`;
}

// ── WHATSAPP FLOTANTE ──
function WA_BUTTON() {
  return `<a href="${WA_LINK}" class="wa-float" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
  ${I.wa}
  <span>Escríbenos</span>
</a>`;
}

// ── SCHEMA LocalBusiness ──
function SCHEMA_LOCAL_BUSINESS() {
  return `<script type="application/ld+json">
{"@context":"https://schema.org","@type":"LocalBusiness","name":"Climelectra","description":"Instaladores de aerotermia, fotovoltaica, electricidad, climatización y fontanería en el Vallès Oriental y Barcelona. Tramitamos subvenciones ICAEN.","url":"https://www.climelectra.es","telephone":"+34622222883","email":"info@climelectra.com","address":{"@type":"PostalAddress","streetAddress":"Carrer Pau Claris, 32, 1º","addressLocality":"Mollet del Vallès","postalCode":"08100","addressRegion":"Barcelona","addressCountry":"ES"},"geo":{"@type":"GeoCoordinates","latitude":41.5387,"longitude":2.2117},"openingHours":"Mo-Fr 08:00-18:00","areaServed":["Mollet del Vallès","Granollers","La Garriga","Cardedeu","Parets del Vallès","Barcelona"],"serviceType":["Aerotermia","Fotovoltaica","Electricidad","Climatización","Fontanería"],"priceRange":"€€"}
<\/script>`;
}

// ── HAMBURGER SCRIPT ── reutilizable
function HAMBURGER_SCRIPT() {
  return `<script>
(function(){
  var btn=document.getElementById('hamburger-btn'),
      menu=document.getElementById('mobile-menu');
  if(!btn||!menu) return;
  btn.addEventListener('click',function(){
    var open=menu.classList.toggle('open');
    btn.classList.toggle('open',open);
    btn.setAttribute('aria-expanded',open);
  });
})();
<\/script>`;
}

// ── FAQ SCRIPT ── reutilizable
function FAQ_SCRIPT() {
  return `<script>
document.querySelectorAll('.faq-q').forEach(function(btn){
  btn.addEventListener('click',function(){
    var item=this.closest('.faq-item'),isOpen=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(function(i){i.classList.remove('open')});
    document.querySelectorAll('.faq-q').forEach(function(b){b.setAttribute('aria-expanded','false')});
    if(!isOpen){item.classList.add('open');this.setAttribute('aria-expanded','true')}
  });
});
<\/script>`;
}

// ── INJECT ALL ── helper para páginas con todos los elementos
function INJECT_ALL(activePage) {
  document.getElementById('site-header').innerHTML = HEADER(activePage||'');
  document.getElementById('alert-banner').innerHTML = ALERT_BANNER();
  document.getElementById('site-footer').innerHTML  = FOOTER();
  document.getElementById('wa-button').innerHTML    = WA_BUTTON();
  document.head.insertAdjacentHTML('beforeend', SCHEMA_LOCAL_BUSINESS());
}
