const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (links && !links.querySelector('.nav-login')) {
  const login = document.createElement('a');
  login.className = 'nav-login';
  login.href = 'login.html';
  login.textContent = 'Login';
  links.appendChild(login);
}

toggle?.addEventListener('click', () => links?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links?.classList.remove('open')));

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')),
  { threshold: .12 }
);
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelectorAll('[data-demo-form]').forEach(form => form.addEventListener('submit', event => {
  event.preventDefault();
  const note = form.querySelector('.form-note');
  note.textContent = 'Danke! Das Formular ist für den ersten Entwurf vorbereitet. Vor dem Launch wird es an den gewünschten E-Mail-Dienst angebunden.';
  note.style.color = '#057577';
  form.querySelector('button').disabled = true;
}));
