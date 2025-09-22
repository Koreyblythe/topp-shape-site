document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav
  const burger = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // Generic helper to POST to Formspree
  async function postForm(form, endpoint) {
    const data = new FormData(form);
    const res = await fetch(endpoint, { method: 'POST', body: data, headers: { 'Accept': 'application/json' }});
    if (res.ok) { alert('Thanks! We’ll get back to you ASAP.'); form.reset(); }
    else { alert('Something went wrong. Please try again or email toppshape1332@gmail.com'); }
  }

  // Contact form (optional if present)
  const contact = document.querySelector('#contact-form');
  if (contact) {
    contact.addEventListener('submit', async (e) => {
      e.preventDefault();
      await postForm(contact, 'https://formspree.io/f/YOUR_FORMSPREE_ID');
    });
  }

  // Blueprint form (funnel)
  const bp = document.querySelector('#blueprint-form');
  if (bp) {
    bp.addEventListener('submit', async (e) => {
      e.preventDefault();
      await postForm(bp, 'https://formspree.io/f/YOUR_FORMSPREE_ID');
    });
  }
});
