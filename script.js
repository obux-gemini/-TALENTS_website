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

const footerDiscoverLinks=document.querySelector('.footer-links');
if(footerDiscoverLinks && !footerDiscoverLinks.querySelector('a[href="berufsgruppen.html"]')){
  const professionsLink=document.createElement('a');
  professionsLink.href='berufsgruppen.html';
  professionsLink.textContent='Berufsgruppen';
  footerDiscoverLinks.appendChild(professionsLink);
}

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')),
  { threshold: .12 }
);
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

const professionCardImages={
  'finance-buchhaltung.html':'assets/hero-finance-buchhaltung-monatsabschluss-kollegenblick-korrigiert.png',
  'baugewerbe.html':'assets/hero-baugewerbe-planpruefung-kollegenblick-korrigiert.png',
  'industrie.html':'assets/hero-industrie-instandhaltung-kollegenblick-gesicht-korrigiert.png',
  'handwerk.html':'assets/hero-handwerk-elektroinstallation-kollegenblick-neu.png',
  'programmierung.html':'assets/hero-programmierung-debugging-kollegenblick-korrigiert.png',
  'vertrieb.html':'assets/hero-vertrieb-angebot-kollegenblick-korrigiert.png',
  'marketing.html':'assets/hero-marketing-kampagnenoptimierung-kollegenblick-korrigiert.png'
};
document.querySelectorAll('.profession-card[href]').forEach(card => {
  const href=card.getAttribute('href'),image=professionCardImages[href];
  if(image) card.style.backgroundImage=`url('${image}')`;
});

document.querySelectorAll('[data-demo-form]').forEach(form => form.addEventListener('submit', event => {
  event.preventDefault();
  const note = form.querySelector('.form-note');
  note.textContent = 'Danke! Das Formular ist für den ersten Entwurf vorbereitet. Vor dem Launch wird es an den gewünschten E-Mail-Dienst angebunden.';
  note.style.color = '#057577';
  form.querySelector('button').disabled = true;
}));
