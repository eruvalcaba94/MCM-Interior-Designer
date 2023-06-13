// * DROPDOWN MENU *

const dropdownIcon = document.getElementById('hamburger');
const dropdownMenu = document.querySelector('.linksHidden');

dropdownIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('linksOpen');
});



// * REVIEW SLIDER *

// Get the necessary elements
const carousel = document.querySelector('.reviewCarousel');
const carouselWidth = carousel.offsetWidth;
const firstCard = document.getElementById('first-review');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to move the carousel to the previous slide
const moveCarouselPrev = () => {
  carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
  carousel.style.transform = `translateX(-${carouselWidth}px)`;
  setTimeout(() => {
    carousel.style.transform = 'translateX(0)';
  }, 300);
};

// Function to move the carousel to the next slide
const moveCarouselNext = () => {
  carousel.style.transform = `translateX(-${carouselWidth}px)`;
  setTimeout(() => {
    carousel.appendChild(carousel.firstElementChild);
    carousel.style.transform = 'translateX(0)';
  }, 300);
};

// Interval to continuously move the carousel
let intervalId;

const startCarousel = () => {
  intervalId = setInterval(moveCarouselNext, 5000);
};

const stopCarousel = () => {
  clearInterval(intervalId);
};

// // Start the carousel
// startCarousel();

// Pause carousel on hover
carousel.addEventListener('mouseenter', stopCarousel);

// Resume carousel on mouse leave
carousel.addEventListener('mouseleave', startCarousel);

// Move carousel to previous slide on prevBtn click
prevBtn.addEventListener('click', moveCarouselPrev);

// Move carousel to next slide on nextBtn click
nextBtn.addEventListener('click', moveCarouselNext);



// * FOOTER DROPDOWN *

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