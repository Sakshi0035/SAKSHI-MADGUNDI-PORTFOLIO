
"use strict";

// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    closeMenu();
  }
});


// PROFILE PHOTO FALLBACK
// If the photo URL has not been added or the image fails to load,
// display a helpful placeholder instead of a broken image.

const profilePhoto = document.getElementById("profilePhoto");
const photoFallback = document.getElementById("photoFallback");

function showPhotoFallback() {
  profilePhoto.hidden = true;
  photoFallback.hidden = false;
}

function showProfilePhoto() {
  profilePhoto.hidden = false;
  photoFallback.hidden = true;
}

profilePhoto.addEventListener("error", showPhotoFallback);
profilePhoto.addEventListener("load", showProfilePhoto);

if (
  !profilePhoto.getAttribute("src") ||
  profilePhoto.getAttribute("src").includes("YOUR_PHOTO_IMAGE_URL_HERE")
) {
  showPhotoFallback();
}
