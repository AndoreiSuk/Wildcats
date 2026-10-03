/* =========================================================
   WILDCATS PAGE TRANSITION
   A gold-edged wipe with the Wildcats logo between pages.

   HOW TO USE: add this ONE line inside <head> of every page
   (index.html, roster.html, wildcats-news.html, ...), no defer:
       <script src="page-transition.js"></script>

   Opt a link out:  <a href="..." data-no-transition>
   Change the logo / speed: edit the CONFIG below.
   ========================================================= */
(() => {
  const CONFIG = {
    logo: 'images/wildcatslogokingkara.png',
    leaveMs: 650,   // wipe covers the page before navigating
    revealMs: 650,  // wipe leaves the new page
    bg: '#070708',
    gold: '#FFD700',
    orange: '#FF6B00'
  };

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return; // normal instant navigation for people who prefer less motion

  /* ---------- Styles + overlay (created immediately, so there is no flash on arrival) ---------- */
  const style = document.createElement('style');
    style.textContent = `
    #pt { position: fixed; left: 0; top: 0; width: 100%; height: 100vh; height: 100dvh; z-index: 99999;
      display: grid; place-items: center; pointer-events: none;
      transform: translateY(100%); will-change: transform;
      background:
        radial-gradient(ellipse 55% 45% at 50% 50%, rgba(255,107,0,.38), transparent 70%),
        repeating-linear-gradient(-45deg, rgba(255,255,255,.035) 0 2px, transparent 2px 26px),
        linear-gradient(160deg, #4a0000 0%, #1f0606 48%, ${CONFIG.bg} 100%); }
    #pt::before, #pt::after { content: ''; position: absolute; left: 0; right: 0; height: 4px;
      background: linear-gradient(90deg, ${CONFIG.gold}, ${CONFIG.orange}); box-shadow: 0 0 24px ${CONFIG.orange};
      opacity: 0; transition: opacity .2s; }
    #pt::before { top: 0; }
    #pt::after { bottom: 0; }
    #pt.out::before, #pt.reveal::after { opacity: 1; }
    #pt img { width: clamp(5rem, 18vw, 8rem); height: auto; opacity: 0; transform: scale(.85);
      filter: drop-shadow(0 0 28px rgba(255,140,0,.65));
      transition: opacity .35s ease, transform .5s cubic-bezier(.2,.8,.2,1); }
    #pt.cover { transform: translateY(0); }
    #pt.cover img, #pt.out img { opacity: 1; transform: scale(1); }
    #pt.out { transform: translateY(0); transition: transform ${CONFIG.leaveMs}ms cubic-bezier(.7,0,.2,1); pointer-events: all; }
    #pt.reveal { transform: translateY(-100%); transition: transform ${CONFIG.revealMs}ms cubic-bezier(.7,0,.2,1); }
    #pt.reveal img { opacity: 0; transform: scale(1.1); }
  `;
  document.head.appendChild(style);

  const ov = document.createElement('div');
  ov.id = 'pt';
  ov.setAttribute('aria-hidden', 'true');
  ov.innerHTML = `<img src="${CONFIG.logo}" alt="" />`;
  document.documentElement.appendChild(ov);

  /* ---------- Arrival: if we came from one of our own transitions, start covered, then reveal ---------- */
  let arriving = false;
  try { arriving = sessionStorage.getItem('pt') === '1'; sessionStorage.removeItem('pt'); } catch (e) { }

  if (arriving) {
    ov.classList.add('cover');
    let done = false;
    const reveal = () => {
      if (done) return; done = true;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        ov.classList.remove('cover');
        ov.classList.add('reveal');
        setTimeout(() => ov.className = '', CONFIG.revealMs + 100);
      }));
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => setTimeout(reveal, 120));
    else setTimeout(reveal, 120);
    setTimeout(reveal, 2500); // safety: never leave the page covered
  }

  /* ---------- Leaving: intercept normal internal link clicks ---------- */
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.hasAttribute('download') || a.hasAttribute('data-no-transition')) return;

    const url = new URL(a.href, location.href);
          const sameSite = url.protocol === location.protocol && (url.protocol === 'file:' || url.origin === location.origin);
      if (!sameSite) return;                                            // external link, mailto:, tel:, etc.
      if (url.pathname === location.pathname && url.search === location.search) return; // same page / #anchor

    e.preventDefault();
    try { sessionStorage.setItem('pt', '1'); } catch (err) { }
    ov.classList.remove('reveal');
    ov.classList.add('out');
    setTimeout(() => { location.href = url.href; }, CONFIG.leaveMs + 40);
  });

  /* ---------- Back/forward: browsers may restore the page from cache with the wipe still showing ---------- */
  addEventListener('pageshow', (e) => { if (e.persisted) ov.className = ''; });
})();