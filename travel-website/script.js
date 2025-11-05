document.getElementById("exploreBtn").addEventListener("click", () => {
  alert("Next, we’ll explore the gallery page!");
});
// Lightbox functionality for gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
// Contact form submission success message
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch(this.action, {
      method: this.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        alert('Thanks for your message, Victor will get back to you soon!');
        contactForm.reset();
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    })
    .catch(() => {
      alert('Error sending message. Check your internet connection.');
    });
  });
}
