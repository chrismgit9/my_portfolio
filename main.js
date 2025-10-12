/* ────────────────────────────────  
   🎨 Theme Toggle Logic
──────────────────────────────── */

// Get avatar element and track theme state
const avatar = document.getElementById('theme-toggle');
let isLight = false;

// 🔸 Hover: preview opposite theme + avatar
avatar.addEventListener('mouseenter', () => {
  avatar.src = isLight ? 'assets/avatar-dark.jpg' : 'assets/avatar-light.jpg';
  document.body.classList.toggle('light-mode', !isLight);
});

// 🔸 Leave: restore permanent theme + avatar
avatar.addEventListener('mouseleave', () => {
  avatar.src = isLight ? 'assets/avatar-light.jpg' : 'assets/avatar-dark.jpg';
  document.body.classList.toggle('light-mode', isLight);
});

// 🔸 Click: toggle theme permanently
avatar.addEventListener('click', () => {
  isLight = !isLight;
});



/* ────────────────────────────────  
   ⏰ Real-Time Manila Clock
──────────────────────────────── */

// Update clock every second using Asia/Manila timezone
function updateTime() {
  const now = new Date();
  const options = {
    timeZone: 'Asia/Manila',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  const timeString = now.toLocaleTimeString('en-US', options);
  document.getElementById('local-time').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();



/* ────────────────────────────────  
   📄 Resume Modal Logic
──────────────────────────────── */

// Get modal elements
const resumeModal = document.getElementById('resume-modal');
const closeResumeBtn = document.querySelector('#resume-modal .close-overlay');
const resumeLink = document.querySelector('.trigger-resume');

// 🔸 Open modal on link click
resumeLink.addEventListener('click', (e) => {
  e.preventDefault();
  resumeModal.style.display = 'flex';
  lockScroll();
});

// 🔸 Close modal on icon click
closeResumeBtn.addEventListener('click', () => {
  resumeModal.style.display = 'none';
  unlockScroll();
});



/* ────────────────────────────────  
   💼 LinkedIn Modal Logic
──────────────────────────────── */

// Get modal elements
const linkedinModal = document.getElementById('linkedin-modal');
const closeLinkedinBtn = document.querySelector('#linkedin-modal .close-overlay');
const linkedinTrigger = document.querySelector('.trigger-linkedin');

// 🔸 Open modal on link click
linkedinTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  linkedinModal.style.display = 'flex';
  lockScroll();
});

// 🔸 Close modal on icon click
closeLinkedinBtn.addEventListener('click', () => {
  linkedinModal.style.display = 'none';
  unlockScroll();
});




document.addEventListener('DOMContentLoaded', () => {
  const skillButtons = document.querySelectorAll('.skillset-filter button');
  const skillBadges = document.querySelectorAll('.skillset-badges li');

  skillButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;

      skillButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      skillBadges.forEach(item => {
        item.style.display = (group === 'all' || item.dataset.group === group)
          ? 'inline-block'
          : 'none';
      });
    });
  });
});

/* ────────────────────────────────  
   💡 Interest Modal Logic
──────────────────────────────── */

 function openInterestModal() {
    document.getElementById('interest-modal').style.display = 'block';
    lockScroll();
  }

  function closeModal() {
    document.getElementById('interest-modal').style.display = 'none';
    unlockScroll();
  }

/* ────────────────────────────────  
   📄 COE Modal Logic
──────────────────────────────── */

// Get modal elements
const coeModal = document.getElementById('coe-modal');
const closecoeBtn = document.querySelector('#coe-modal .close-overlay');
const coeLink = document.querySelector('.trigger-coe');

// 🔸 Open modal on link click
coeLink.addEventListener('click', (e) => {
  e.preventDefault();
  coeModal.style.display = 'flex';
  lockScroll();
});

// 🔸 Close modal on icon click
closecoeBtn.addEventListener('click', () => {
  coeModal.style.display = 'none';
  unlockScroll();
});

/* ────────────────────────────────  
   📄 OJT Modal Logic
──────────────────────────────── */

// Get modal elements
const ojtModal = document.getElementById('ojt-modal');
const closeojtBtn = document.querySelector('#ojt-modal .close-overlay');
const ojtLink = document.querySelector('.trigger-ojt');

// 🔸 Open modal on link click
ojtLink.addEventListener('click', (e) => {
  e.preventDefault();
  ojtModal.style.display = 'flex';
  lockScroll();
});

// 🔸 Close modal on icon click
closeojtBtn.addEventListener('click', () => {
  ojtModal.style.display = 'none';
  unlockScroll();
});

/* ────────────────────────────────  
   📄 EPAS Modal Logic
──────────────────────────────── */

// Get modal elements
const epasModal = document.getElementById('epas-modal');
const closeepasBtn = document.querySelector('#epas-modal .close-overlay');
const epasLink = document.querySelector('.trigger-epas');

// 🔸 Open modal on link click
epasLink.addEventListener('click', (e) => {
  e.preventDefault();
  epasModal.style.display = 'flex';
  lockScroll();
});

// 🔸 Close modal on icon click
closeepasBtn.addEventListener('click', () => {
  epasModal.style.display = 'none';
  unlockScroll();
});



let scrollY = 0;

function lockScroll() {
  if (window.innerWidth <= 768) {
    scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add('modal-open');
  }
}

function unlockScroll() {
  if (window.innerWidth <= 768) {
    document.body.classList.remove('modal-open');
    document.body.style.top = '';
    window.scrollTo(0, scrollY);
  }
}



window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');

  // Optional delay before fade out
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 600); // fade duration
  }, 1200); // delay before fade starts
});




