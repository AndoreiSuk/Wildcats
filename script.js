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
    division: "College Category",
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
    division: "College Category",
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
    division: "College Category",
    img: "images/2024/danztrack2024Kingkara.jpg",
    gallery: [
      "images/2024/danztrack2024Kingkara.jpg",
      "images/2024/danztrack2024.jpg",
      "images/2024/danztrack2024-001.jpg",
      "images/2024/danztrack2024-002.jpg",
      "images/2024/danztrack2024-003.jpg",
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
    subtitle: "2026 WORLD OF DANCE PH", // Custom for WOD
    title: "THE WORLD OF DANCE",
    result: "aaaaaaaa",
    division: "College Division",
    img: "images/World_of_Dance_Philippines_logo.png",
    gallery: ["images/World_of_Dance_Philippines_logo.png"],
    desc: "Lorem Ipsum Kingkarasa Aron Dili Ma Evil Eye.",
  },
};

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
document.addEventListener("click", () => {
  closeLightbox();
});
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
