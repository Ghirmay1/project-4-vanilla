// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// Modification #1: Dropdown for "Home"
const homeDropdown = document.querySelector(".dropdown:nth-child(1)");
homeDropdown.addEventListener("mouseover", function () {
  homeDropdown.querySelector(".dropdown-content").style.display = "block";
});

homeDropdown.addEventListener("mouseout", function () {
  homeDropdown.querySelector(".dropdown-content").style.display = "none";
});

// Modification #2: Dropdown for "About"
const aboutDropdown = document.querySelector(".dropdown:nth-child(2)");
aboutDropdown.addEventListener("mouseover", function () {
  aboutDropdown.querySelector(".dropdown-content").style.display = "block";
});

aboutDropdown.addEventListener("mouseout", function () {
  aboutDropdown.querySelector(".dropdown-content").style.display = "none";
});

// Modification #3: Dropdown for "Projects"
const projectsDropdown = document.querySelector(".dropdown:nth-child(3)");
projectsDropdown.addEventListener("mouseover", function () {
  projectsDropdown.querySelector(".dropdown-content").style.display = "block";
});

projectsDropdown.addEventListener("mouseout", function () {
  projectsDropdown.querySelector(".dropdown-content").style.display = "none";
});
