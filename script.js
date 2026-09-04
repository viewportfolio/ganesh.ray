// ============================================================
// Ganesh Ray — Portfolio site logic
// ============================================================

document.getElementById('year').textContent = new Date().getFullYear();

// ---------------- Interactive Mouse Neon Glow ----------------
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursorGlow) cursorGlow.style.opacity = '1';
});

window.addEventListener('mouseleave', () => {
  if (cursorGlow) cursorGlow.style.opacity = '0';
});

function animateGlow() {
  if (cursorGlow) {
    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;
    cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
  }
  requestAnimationFrame(animateGlow);
}
requestAnimationFrame(animateGlow);

// ---------------- Project data ----------------
const videos = [
  {
    id: '1zW6KBe9j5DGtbgX_QHMXA7qEnn-NhCy4',
    category: 'Documentary',
    title: 'A Public Safety Documentary from Varanasi',
    desc: "Varanasi's Hidden Water Crisis — a ground-level documentary on public safety and civic infrastructure.",
    thumb: 'assets/thumbnails/varanasi-water-crisis.svg'
  },
  {
    id: '1VoIOCCNxGHaTqL3t2ZcbhevAFcQYXmUC',
    category: 'Documentary',
    title: '4-Month Routine to Master Current Affairs and GK',
    desc: 'PW CLAT green-screen YouTube video breaking down a 4-month study routine for Current Affairs and GK.',
    thumb: 'assets/thumbnails/pw-clat-mock-test.svg'
  },
  {
    id: '1cC4OhzBKIVGxza74kjqelgDsHnyEdaRs',
    category: 'Teaser',
    title: 'IOQM CHAMP 2026 Batch Starting Soon',
    desc: 'Faculty reveal batch teaser announcing the IOQM CHAMP 2026 cohort.',
    thumb: 'assets/thumbnails/ioqm-champ-2026-teaser.svg'
  },
  {
    id: '13c5ddAgvTT4Cs5qr9f9BkyDQHEiL9W6B',
    category: 'Teaser',
    title: 'PW Presents Samarth 2.0 for CUET PG Aspirants',
    desc: 'Batch-launch teaser for Samarth 2.0, built for CUET PG aspirants.',
    thumb: 'assets/thumbnails/samarth-2-batch-teaser.svg'
  },
  {
    id: '1TRybBfel5DiMguLvh7C-oe-SxOZJuXBN',
    category: 'Teaser',
    title: "MISSION JRF Launch Announcement — Dec 20",
    desc: 'Launch announcement teaser for MISSION JRF, coming 20 December.',
    thumb: 'assets/thumbnails/mission-jrf-launch-teaser.svg'
  },
  {
    id: '1CCzxtst41OEm5tDZThoN0zzcs4uDziSF',
    category: 'Teaser',
    title: 'Introducing PW CUET PG Faculty — Launching Soon',
    desc: 'Faculty-launching teaser introducing the PW CUET PG teaching team.',
    thumb: 'assets/thumbnails/cuet-pg-faculty-teaser.svg'
  },
  {
    id: '105q8NN4LPLnSQQwn9asPou6Z2mZ5nmBb',
    category: 'Podcast',
    title: 'IIT JAM Students Speak Out — Review Podcast',
    desc: 'Student review and experience podcast featuring IIT JAM aspirants.',
    thumb: 'assets/thumbnails/iit-jam-review-podcast.svg'
  },
  {
    id: '1SY3SyqsaeZlTkjPFkMwED1GZV_xcdRdo',
    category: 'Podcast',
    title: 'Faculty Discussing CSIR NET Preparation and Success',
    desc: 'Two faculty members discuss CSIR NET preparation strategy and success stories.',
    thumb: 'assets/thumbnails/csir-net-faculty-podcast.svg'
  }
];

const shorts = [
  {
    id: '18uDZoBy-cf9ci96c1Ga5v2UfUHQoguzI',
    category: 'Finance',
    title: 'Smart Money Habits and Financial Planning Explained Simply',
    desc: 'Finance strategy short reel edit on saving strategy and financial planning.',
    thumb: 'assets/shorts/finance-strategy-reel.svg'
  },
  {
    id: '1A9syaA-D2PJ58_HqvmUcFk1I_yMOfnbm',
    category: 'Health',
    title: "70% of Indians Still Don't Have Health Insurance",
    desc: 'Health insurance short reel edit on why now is the time to get covered.',
    thumb: 'assets/shorts/health-insurance-reel.svg'
  },
  {
    id: '1Bo-zQcXfyFfxX9VV4iQFIZo8VB-0jU95',
    category: 'Health',
    title: 'Menstrual Health, Pregnancy Guidance and HPV Vaccine',
    desc: "Women's health awareness short reel edit with expert answers.",
    thumb: 'assets/shorts/womens-health-awareness-reel.svg'
  },
  {
    id: '1uezFZDSvcugp3TBK-nRLHdmpA4qpzrg4',
    category: 'Finance',
    title: 'Finish Your Home Loan in 10 Years Instead of 25',
    desc: 'Three techniques to close a 25-year home loan in just 10 years.',
    thumb: 'assets/shorts/home-loan-strategy-reel.svg'
  }
];

// ---------------- Render project cards ----------------
function cardMarkup(item, isReel) {
  return `
    <article class="video-card ${isReel ? 'reel-card' : ''}" data-id="${item.id}" data-title="${item.title.replace(/"/g, '&quot;')}" data-desc="${item.desc.replace(/"/g, '&quot;')}" tabindex="0" role="button" aria-label="Play preview: ${item.title.replace(/"/g, '&quot;')}">
      <div class="video-thumb-wrap">
        <img src="${item.thumb}" alt="${item.title.replace(/"/g, '&quot;')}" loading="lazy" class="video-thumb">
        <div class="video-play-overlay">
          <span class="video-play-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </div>
      </div>
      <div class="video-card-body">
        <span class="video-card-cat">${item.category}</span>
        <h3 class="video-card-title">${item.title}</h3>
      </div>
    </article>
  `;
}

document.getElementById('videoGrid').innerHTML = videos.map(v => cardMarkup(v, false)).join('');
document.getElementById('reelGrid').innerHTML = shorts.map(s => cardMarkup(s, true)).join('');

// ---------------- Video modal ----------------
const modal = document.getElementById('videoModal');
const modalFrame = document.getElementById('videoModalFrame');
const modalCaption = document.getElementById('videoModalCaption');
const modalClose = document.getElementById('videoModalClose');
const modalBackdrop = document.getElementById('videoModalBackdrop');
const modalContent = document.getElementById('videoModalContent');

let lastFocused = null;

function openVideo(card) {
  const id = card.getAttribute('data-id');
  const title = card.getAttribute('data-title');
  const desc = card.getAttribute('data-desc');
  const isReel = card.classList.contains('reel-card');

  modalContent.classList.toggle('is-reel', isReel);

  const iframe = document.createElement('iframe');
  iframe.src = `https://drive.google.com/file/d/${id}/preview`;
  iframe.allow = 'autoplay; encrypted-media; fullscreen';
  iframe.allowFullscreen = true;
  iframe.setAttribute('frameborder', '0');
  modalFrame.innerHTML = '';
  modalFrame.appendChild(iframe);

  modalCaption.innerHTML = `<h3>${title}</h3><p>${desc}</p>`;

  lastFocused = document.activeElement;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeVideo() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  modalFrame.innerHTML = '';
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll('.video-card').forEach(card => {
  card.addEventListener('click', () => openVideo(card));
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openVideo(card);
    }
  });
});

// Explicit close triggers
modalClose.addEventListener('click', (e) => {
  e.stopPropagation();
  closeVideo();
});

modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) {
    closeVideo();
  }
});

modalContent.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeVideo();
});

// ---------------- Mobile Navigation ----------------
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------------- Header shadow on scroll ----------------
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

// ---------------- Reveal-on-scroll ----------------
const revealTargets = document.querySelectorAll(
  '.section-kicker, .section-title, .section-desc, .video-card, .timeline-item, .achievement-card, .skill-card, .tool-row'
);

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealTargets.forEach(el => el.classList.add('reveal'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => io.observe(el));
}