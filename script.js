document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const burger = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
  }

  async function postForm(form, endpoint) {
    const data = new FormData(form);
    const res = await fetch(endpoint, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    });

    if (res.ok) {
      alert('Thanks! Your request has been sent.');
      form.reset();
      return;
    }

    alert('Unable to send right now. Please email toppshape1332@gmail.com.');
  }

  const FORMSPREE = 'https://formspree.io/f/YOUR_FORMSPREE_ID';

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      postForm(contactForm, FORMSPREE);
    });
  }

  const blueprintForm = document.getElementById('blueprint-form');
  if (blueprintForm) {
    blueprintForm.addEventListener('submit', event => {
      event.preventDefault();
      postForm(blueprintForm, FORMSPREE);
    });
  }
});
