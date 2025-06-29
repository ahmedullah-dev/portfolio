// Smooth scroll for nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Create toggle button with animation and icon
const toggleButton = document.createElement('button');
toggleButton.setAttribute('aria-label', 'Toggle dark mode');
toggleButton.innerHTML = '🌙';
toggleButton.style.position = 'fixed';
toggleButton.style.bottom = '20px';
toggleButton.style.right = '20px';
toggleButton.style.width = '50px';
toggleButton.style.height = '50px';
toggleButton.style.borderRadius = '50%';
toggleButton.style.border = 'none';
toggleButton.style.cursor = 'pointer';
toggleButton.style.backgroundColor = '#1e40af';
toggleButton.style.color = 'white';
toggleButton.style.fontSize = '1.5rem';
toggleButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
toggleButton.style.transition = 'background-color 0.3s, transform 0.3s';
toggleButton.addEventListener('mouseenter', () => toggleButton.style.transform = 'scale(1.1)');
toggleButton.addEventListener('mouseleave', () => toggleButton.style.transform = 'scale(1)');
document.body.appendChild(toggleButton);

const updateToggleIcon = () => {
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.innerHTML = '☀️';
    toggleButton.style.backgroundColor = '#f59e0b';
  } else {
    toggleButton.innerHTML = '🌙';
    toggleButton.style.backgroundColor = '#1e40af';
  }
};

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  updateToggleIcon();
});

// Initial icon setup
updateToggleIcon();