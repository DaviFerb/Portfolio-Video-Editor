/* ════════════════════════════════════════════
   i18n
════════════════════════════════════════════ */
const T = {
  pt: {
    navRole: 'Editor de Vídeo',
    heroSub: 'Shorts & Motion Designer',
    heroTitle: 'Shorts editados<br>com <em>impacto.</em>',
    heroDesc: 'Eu sou Davik — especializado em <strong>shorts e vídeos curtos</strong> que retêm atenção do primeiro ao último frame. Cortes precisos, ritmo, legendas e identidade visual que convertem visualizações em resultado.',
    btnP: 'Portfólio', btnA: 'Sobre Mim',
    plabel: 'Portfólio', ptitle: 'Meus <span class="accent">Shorts</span>',
    alabel: 'Sobre', atitle: 'Contando Histórias com <span class="accent">Dinamismo</span>',
    atext: 'Olá! Meu nome é <strong>Davik</strong>. Acredito que edição é sobre <strong>ritmo, sensação e impacto visual</strong>. Combino narrativa, pacing e identidade visual para criar conteúdos modernos e imersivos. Cada corte e detalhe possui um propósito: <strong>transformar atenção em experiência</strong>.',
    ctaTitle: 'Envie-me uma mensagem<br>e vamos <span class="accent">trabalhar</span> <span class="accent2">juntos!</span>',
    ctaLabel: 'Contatos',
    sklabel: 'FERRAMENTAS & HABILIDADES',
    navShorts: 'Shorts',
    navAbout: 'Sobre',
    navContact: 'Contatos',
    backTxt: 'Voltar ao topo',
    footerText: '© 2026 — DAVIK | EDITOR DE VÍDEO',
    scrollLabel: 'SCROLL',
    comingSoon: 'Em breve',
  },
  en: {
    navRole: 'Video Editor',
    heroSub: 'Shorts & Motion Designer',
    heroTitle: 'Shorts edited<br>with <em>impact.</em>',
    heroDesc: 'I\'m Davik — specialized in <strong>shorts and short-form videos</strong> that hold attention from the first to the last frame. Precise cuts, rhythm, captions and visual identity that turn views into results.',
    btnP: 'Portfolio', btnA: 'About Me',
    plabel: 'Portfolio', ptitle: 'My <span class="accent">Shorts</span>',
    alabel: 'About', atitle: 'Telling Stories with <span class="accent">Dynamism</span>',
    atext: 'Hello! My name is <strong>Davik</strong>. I believe editing is about <strong>rhythm, sensation and visual impact</strong>. I combine narrative, pacing and visual identity to create modern, immersive content. Every cut has a purpose: <strong>turning attention into experience</strong>.',
    ctaTitle: 'Send me a message<br>and let\'s <span class="accent">work</span> <span class="accent2">together!</span>',
    ctaLabel: 'Contacts',
    sklabel: 'TOOLS & SKILLS',
    sklabel: 'TOOLS & SKILLS',
    navShorts: 'Shorts',
    navAbout: 'About',
    navContact: 'Contacts',
    backTxt: 'Back to top',
    footerText: '© 2026 — DAVIK | VIDEO EDITOR',
    scrollLabel: 'SCROLL',
    comingSoon: 'Coming soon',
  }
};

function applyLang(l) {
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  const setText = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  setText('navRole',   t.navRole);
  setText('heroSub',   t.heroSub);
  set('heroTitle',     t.heroTitle);
  set('heroDesc',      t.heroDesc);
  setText('btnP',      t.btnP);
  setText('btnA',      t.btnA);
  setText('plabel',    t.plabel);
  set('ptitle',        t.ptitle);
  setText('alabel',    t.alabel);
  set('atitle',        t.atitle);
  set('atext',         t.atext);
  set('ctaTitle',      t.ctaTitle);
  setText('ctaLabel',  t.ctaLabel);
  setText('navShorts', t.navShorts);
  setText('navAbout',  t.navAbout);
  setText('navContact', t.navContact);
  setText('sklabel',   t.sklabel);
  setText('backTxt',   t.backTxt);
  setText('footerText',t.footerText);
  setText('scrollLabel', t.scrollLabel);
  document.querySelectorAll('[data-i18n="comingSoon"]').forEach(el => el.textContent = t.comingSoon);

  document.getElementById('langBtn').textContent = l === 'pt' ? 'PT-BR' : 'EN';
  document.querySelectorAll('.lang-opt').forEach(o => o.classList.toggle('active', o.dataset.l === l));
  document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
}

/* ════════════════════════════════════════════
   LANG SWITCHER
════════════════════════════════════════════ */
const langWrap = document.getElementById('langWrap');
document.getElementById('langBtn').addEventListener('click', e => {
  e.stopPropagation();
  langWrap.classList.toggle('open');
});
document.querySelectorAll('.lang-opt').forEach(opt => {
  opt.addEventListener('click', () => {
    applyLang(opt.dataset.l);
    langWrap.classList.remove('open');
  });
});
document.addEventListener('click', () => langWrap.classList.remove('open'));

/* ════════════════════════════════════════════
   SMOOTH SCROLL
════════════════════════════════════════════ */
function goTo(id) {
  if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 72;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
}

/* ════════════════════════════════════════════
   REVEAL ON SCROLL
════════════════════════════════════════════ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); revealObs.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ════════════════════════════════════════════
   SKILL BARS
════════════════════════════════════════════ */
const SKILL_WIDTHS = { 0: '92%', 1: '82%', 2: '80%', 3: '75%' };
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const fills = [...document.querySelectorAll('.skill-fill')];
      const idx   = fills.indexOf(e.target);
      e.target.style.width = SKILL_WIDTHS[idx] ?? '0%';
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-fill').forEach(b => barObs.observe(b));

/* ════════════════════════════════════════════
   AUTO LANGUAGE DETECT
════════════════════════════════════════════ */
(function () {
  const nav = navigator.language || navigator.userLanguage || 'en';
  applyLang(nav.toLowerCase().startsWith('pt') ? 'pt' : 'en');
})();
