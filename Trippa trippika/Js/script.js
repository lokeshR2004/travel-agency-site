let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } 
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//Package code
const wrapper = document.getElementById('packageWrapper');
const cards = wrapper.querySelectorAll('.travel-card');
let currentIndex = 0;

function scrollPackages(direction) {
  const total = cards.length;
  currentIndex = (currentIndex + direction + total) % total;
  cards[currentIndex].scrollIntoView({ behavior: 'smooth', inline: 'start' });
}


function goToPage() {
  window.location.href = "Register.html";
} 