// 1. SPLASH SCREEN LOGIC
const splashScreen = document.getElementById("splash-screen");
const splashLogo = document.getElementById("splash-logo-container");
const mainContent = document.getElementById("main-content");

splashScreen.addEventListener("click", () => {
  splashLogo.classList.add("zoom-out");
  setTimeout(() => {
    splashScreen.classList.add("hidden-splash");
    mainContent.classList.add("visible");
    setTimeout(() => {
      AOS.init({ once: true, offset: 50, duration: 1000 });
    }, 300);
  }, 500);
});

// 2. DATA FOR MODALS & GALLERIES
const champData = {
  2019: {
    subtitle: "2019 DANZTRACK PHILIPPINES",
    title: "THE FIRST CROWN",
    result: "Grand Champion",
    division: "College Division",
    img: "images/2019/danztrack2019.png",
    gallery: [
      "images/2019/danztrack2019.png",
      "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80",
    ],
    desc: "The year it all began. The MSU-IIT Titans shocked the audience with a high-octane performance that blended traditional roots with modern hip-hop.",
  },
  2023: {
    subtitle: "2023 DANZTRACK PHILIPPINES",
    title: "THE COMEBACK",
    result: "Grand Champion",
    division: "College Division",
    img: "images/2023/danztrack2023Kingkara.jpg",
    gallery: [
      "images/2023/danztrack2023Kingkara.jpg",
      "images/2023/danztrack2023.jpg",
      "images/2023/danztrack2023-006.jpg",
      "images/2023/danztrack2023-007.jpg",
      "images/2023/danztrack2023-008.jpg",
      "images/2023/danztrack2023-009.jpg",
      "images/2023/danztrack2023-010.jpg",
      "images/2023/danztrack2023-011.jpg",
      "images/2023/danztrack2023-012.jpg",
      "images/2023/danztrack2023-013.jpg",
      "images/2023/danztrack2023-014.jpg",
      "images/2023/danztrack2023-015.jpg",
      "images/2023/danztrack2023-016.jpg",
      "images/2023/danztrack2023-017.jpg",
      "images/2023/danztrack2023-018.jpg",
      "images/2023/danztrack2023-019.jpg",
      "images/2023/danztrack2023-020.jpg",
      "images/2023/danztrack2023-021.jpg",
      "images/2023/danztrack2023-022.jpg",
      "images/2023/danztrack2023-023.jpg",
      "images/2023/danztrack2023-024.jpg",
      "images/2023/danztrack2023-025.jpg",
      "images/2023/danztrack2023-026.jpg",
      "images/2023/danztrack2023-027.jpg",
      "images/2023/danztrack2023-028.jpg",
      "images/2023/danztrack2023-029.jpg",
      "images/2023/danztrack2023-030.jpg",
      "images/2023/danztrack2023-001.jpg",
      "images/2023/danztrack2023-002.jpg",
      "images/2023/danztrack2023-003.jpg",
    ],
    desc: "After the profound loss in 2022, the question was: do they still have it? The Titans answered with a resounding YES.",
  },
  2024: {
    subtitle: "2024 DANZTRACK PHILIPPINES",
    title: "BACK TO BACK",
    result: "Grand Champion",
    division: "College Division",
    img: "images/2024/danztrack2024Kingkara.jpg",
    gallery: [
      "images/2024/danztrack2024Kingkara.jpg",
      "images/2024/danztrack2024.jpg",
      "images/2024/danztrack2024-001.jpg",
      "images/2024/danztrack2024-002.jpg",
      "images/2024/danztrack2024-003.jpg",
      "images/2024/danztrack2024-01.jpg",
      "images/2024/danztrack2024-02.jpg",
      "images/2024/danztrack2024-03.jpg",
      "images/2024/danztrack2024-04.jpg",
      "images/2024/danztrack2024-05.jpg",
      "images/2024/danztrack2024-06.jpg"
    ],
    desc: "Defending the title is harder than winning it. Facing fierce competition from other Colleges in Iligan City, the Wildcats executed a flawless routine.",
  },
  2025: {
    subtitle: "2025 DANZTRACK PHILIPPINES",
    title: "THE 3-PEAT DYNASTY",
    result: "Grand Champion",
    division: "College Division",
    img: "images/2025/danztrack2025poster.jpg",
    gallery: [
      "images/2025/danztrack2025poster.jpg",
      "images/2025/danztrack2025.jpg",
      "images/2025/danztrack2025-001.jpg",
      "images/2025/danztrack2025-002.jpg",
      "images/2025/danztrack2025-003.jpg",
      "images/2025/danztrack2025-004.jpg",
      "images/2025/danztrack2025-005.jpg",
      "images/2025/danztrack2025-006.jpg",
      "images/2025/danztrack2025-007.jpg",
      "images/2025/danztrack2025-008.jpg",
      "images/2025/danztrack2025-009.jpg",
      "images/2025/danztrack2025-010.jpg",
      "images/2025/danztrack2025-011.jpg",
      "images/2025/danztrack2025-012.jpg",
      "images/2025/danztrack2025-013.jpg",
      "images/2025/danztrack2025-014.jpg",
      "images/2025/danztrack2025-015.jpg",
      "images/2025/danztrack2025-016.jpg",
      "images/2025/danztrack2025-017.jpg",
      "images/2025/danztrack2025-018.jpg",
      "images/2025/danztrack2025-019.jpg",
      "images/2025/danztrack2025-020.jpg",
      "images/2025/danztrack2025-021.jpg",
      "images/2025/danztrack2025-022.jpg",
      "images/2025/danztrack2025-023.jpg",
    ],
    desc: "The 3-peat. Unprecedented dominance. This performance was a celebration of the team's history.",
  },
  2026: {
    subtitle: "WSB 2026",
    title: "Monster Division Champions",
    result: "Grand Champion",
    division: "Monster Division",
    img: "images/WildcatsWSBVisualizer.jpg",
    gallery: [
      "images/WildcatsWSBVisualizer.jpg"
    ],
    desc: "They didn't have to look down. They only looked ahead. Suited in tradition's formal attire, the pack brought laser-focus precision to USTP CDO and captured the Monster Division crown at World Supremacy Battlegrounds 2026.",
  },
  2026.1: {
    subtitle: "DANZTRACK PHILIPPINES 2026",
    title: "The 4-Peat Quest",
    result: "N/A",
    division: "College Division",
    img: "images/wildcatslogo.jpg",
    gallery: [
      "images/questionmark.jpg"
    ],
    desc: "Three consecutive national crowns. One unbroken legacy. This Sept 30, the wildcats will return to the Danztrack Philippines stage to defend their title and pursue a historic 4-peat. The question is: can they do it?",
  },
};

// Danztrack PH 2026 Floating Bar Countdown
(function initFloatingCountdown() {
  const targetDate = new Date("2026-09-30T14:00:00+08:00").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById("bar-days");
    const hoursEl = document.getElementById("bar-hours");
    const minsEl = document.getElementById("bar-minutes");
    const secsEl = document.getElementById("bar-seconds");

    if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

    if (distance <= 0) {
      daysEl.innerText = "00";
      hoursEl.innerText = "00";
      minsEl.innerText = "00";
      secsEl.innerText = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = String(days).padStart(2, "0");
    hoursEl.innerText = String(hours).padStart(2, "0");
    minsEl.innerText = String(minutes).padStart(2, "0");
    secsEl.innerText = String(seconds).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
})();


// Modal Variables
const modal = document.getElementById("champModal");
const modalImg = document.getElementById("modalImg");
// Updated Variables to find new IDs
const modalSubtitle = document.getElementById("modalSubtitle"); // Renamed from modalYear
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalResult = document.getElementById("modalResult");
const modalDivision = document.getElementById("modalDivision");

// Gallery Variables
let currentGallery = [];
let currentImageIndex = 0;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

// OPEN MODAL
function openModal(year) {
  const data = champData[year];

  // Use data from object instead of hardcoded text
  if (modalSubtitle) modalSubtitle.innerText = data.subtitle;
  modalTitle.innerText = data.title;
  modalDesc.innerText = data.desc;

  // Update Result & Division dynamically
  if (modalResult) modalResult.innerText = data.result;
  if (modalDivision) modalDivision.innerText = data.division;

  modalImg.src = data.img;

  // Save current gallery data for the lightbox
  currentGallery = data.gallery;
  currentImageIndex = 0; // Reset to first image

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// --- LIGHTBOX FUNCTIONS ---
function openLightbox() {
  if (currentGallery.length > 0) {
    lightboxImg.src = currentGallery[currentImageIndex];
    lightbox.classList.add("active");
  }
}

function closeLightbox() {
  lightbox.classList.remove("active");
}

function changeImage(direction) {
  // Calculate new index
  currentImageIndex += direction;

  // Loop logic (Infinite Scroll)
  if (currentImageIndex < 0) {
    currentImageIndex = currentGallery.length - 1;
  } else if (currentImageIndex >= currentGallery.length) {
    currentImageIndex = 0;
  }

  // Update Image
  lightboxImg.style.opacity = 0; // Fade out slightly
  setTimeout(() => {
    lightboxImg.src = currentGallery[currentImageIndex];
    lightboxImg.style.opacity = 1; // Fade in
  }, 200);
}

// Keyboard Support for Gallery
document.addEventListener("keydown", function (event) {
  if (!lightbox.classList.contains("active")) return;

  if (event.key === "ArrowLeft") {
    changeImage(-1);
  } else if (event.key === "ArrowRight") {
    changeImage(1);
  } else if (event.key === "Escape") {
    closeLightbox();
  }
});

// --- ROSTER CAROUSEL LOGIC ---
const rosterContainer = document.getElementById("rosterContainer");
const btnLeft = document.getElementById("slideLeft");
const btnRight = document.getElementById("slideRight");

if (rosterContainer && btnLeft && btnRight) {
  // Calculate how far to scroll (Card width + gap)
  // For most screens, roughly 340px covers a card and its margin
  const scrollAmount = 340;

  btnLeft.addEventListener("click", () => {
    rosterContainer.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  btnRight.addEventListener("click", () => {
    rosterContainer.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
}
