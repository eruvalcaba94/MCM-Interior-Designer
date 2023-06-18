// * STICKY HEADER * //

// Get the sticky header element
var header = document.querySelector('.flexNavBar');
var logoColor = document.getElementById('logo');
var hamburgerColor = document.getElementById('hamburger');
const linkColor = document.querySelectorAll('.desktopLink');

// Function to handle scroll event
function handleScroll() {
  // Get the current scroll position
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Check if the scroll position is greater than 0
  if (scrollPosition > 0) {
    // Change the background color to white
    header.style.backgroundColor = 'white';
    logoColor.style.color = '#1d1d1f';
    hamburgerColor.style.color = '#1d1d1f';

    // Loop through each element with the class "desktopLink" and set the color
    linkColor.forEach(function(link) {
      link.style.color = '#1d1d1f';
    });
  } else {
    // Reset the background color
    header.style.backgroundColor = '';
    logoColor.style.color = '';
    hamburgerColor.style.color = '';

    // Reset the color for each element with the class "desktopLink"
    linkColor.forEach(function(link) {
      link.style.color = '';
    });
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);



// * LOGO CHANGE *

// Function to update text content based on screen width
function updateTextContent() {
  var logoElement = document.getElementById('logo');
  var screenWidth = window.innerWidth;

  if (screenWidth < 1190) {
    logoElement.textContent = 'MCM';
  } else {
    logoElement.textContent = 'Mid-Century Modern';
  }
}

// Initial update on page load
updateTextContent();

// Update on window resize
window.addEventListener('resize', updateTextContent);



// * DROPDOWN MENU * //

const dropdownIcon = document.getElementById('hamburger');
const dropdownMenu = document.querySelector('.linksHidden');
const navMenu = document.querySelector('.flexNavBar');
const navLogo = document.getElementById('logo');
const navHamburger = document.getElementById('hamburger');

// Add a click event listener to the dropdown icon
dropdownIcon.addEventListener('click', () => {
  // Toggle the 'linksOpen' class on the dropdown menu element
  dropdownMenu.classList.toggle('linksOpen');
  
  if (dropdownMenu.classList.contains('linksOpen')) {
    navMenu.style.backgroundColor = 'white';
    navLogo.style.color = '#1d1d1f';
    navHamburger.style.color = '#1d1d1f';
  } else {
    // If it doesn't have the 'linksOpen' class, remove the background color and reset the colors of the logo and hamburger icon
    navMenu.style.backgroundColor = '';
    navLogo.style.color = '';
    navHamburger.style.color = '';
  }
});

// Add another click event listener to the dropdown icon
dropdownIcon.addEventListener('click', () => {
  // Set the pointer-events CSS property of the dropdown menu element to 'none'
  dropdownMenu.style.pointerEvents = 'none';
  
  // Check if the dropdown menu element has the 'linksOpen' class
  if (dropdownMenu.classList.contains('linksOpen')) {
    // If it does, set the pointer-events CSS property of the dropdown menu element to 'auto'
    dropdownMenu.style.pointerEvents = 'auto';
  } else {
    // If it doesn't have the 'linksOpen' class, set the pointer-events CSS property to 'none'
    dropdownMenu.style.pointerEvents = 'none';
  }
});



// * REVIEW SLIDER * //

const carousel = document.querySelector('.reviewCarousel');
const slide = document.querySelector('.reviewCard');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Declare a variable to store the scroll direction
var direction;

// Add a click event listener to the previous button
prevBtn.addEventListener('click', () => {
  // Set the scroll direction to 1 (indicating scrolling to the left)
  direction = 1;

  // Scroll the carousel by the width of a slide to the left
  carousel.scrollBy(-slide.offsetWidth, 0);
});

// Add a click event listener to the next button
nextBtn.addEventListener('click', () => {
  // Set the scroll direction to -1 (indicating scrolling to the right)
  direction = -1;

  // Scroll the carousel by the width of a slide to the right
  carousel.scrollBy(slide.offsetWidth, 0);
});



// * FOOTER DROPDOWN * //

const companyIcon = document.getElementById('company');
const companyMenu = document.querySelector('.companyItemsHidden');

companyIcon.addEventListener('click', () => {
    companyMenu.classList.toggle('companyItemsOpen');
});

const exploreIcon = document.getElementById('explore');
const exploreMenu = document.querySelector('.exploreItemsHidden');

exploreIcon.addEventListener('click', () => {
    exploreMenu.classList.toggle('exploreItemsOpen');
});

const contactIcon = document.getElementById('contact');
const contactMenu = document.querySelector('.contactItemsHidden');

contactIcon.addEventListener('click', () => {
    contactMenu.classList.toggle('contactItemsOpen');
});

const socialsIcon = document.getElementById('socials');
const socialsMenu = document.querySelector('.socialsItemsHidden');

socialsIcon.addEventListener('click', () => {
    socialsMenu.classList.toggle('socialsItemsOpen');
});