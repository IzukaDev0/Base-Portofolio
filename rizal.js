function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('themeIcon');

  body.classList.add('theme-transition');
  body.classList.toggle('dark');

  icon.textContent = body.classList.contains('dark')
    ? 'light_mode'
    : 'dark_mode';

  setTimeout(() => {
    body.classList.remove('theme-transition');
  }, 450);
}

function toggleEdu(el) {
  el.classList.toggle('active');
}

function slideProject(dir) {
  const slider = document.getElementById('projectSlider');
  const cardWidth = slider.querySelector('.project-card').offsetWidth + 16;
  slider.scrollLeft += dir * cardWidth;
}

document.addEventListener('DOMContentLoaded', () => {
  const profileImg = document.querySelector('.profile img');
  if (profileImg) {
    profileImg.addEventListener('click', () => {
      document.getElementById('bioModal').style.display = 'flex';
    });
  }
});

function closeBio(e) {
  if (e.target.id === 'bioModal') {
    document.getElementById('bioModal').style.display = 'none';
  }
}