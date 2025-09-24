document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav
  const burger = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // Helper to POST to Formspree (replace ID when ready)
  async function postForm(form, endpoint){
    const data = new FormData(form);
    const res = await fetch(endpoint, { method:'POST', body:data, headers:{Accept:'application/json'} });
    if(res.ok){ alert('Thanks! We’ll get back to you ASAP.'); form.reset(); }
    else{ alert('Something went wrong. Please try again or email toppshape1332@gmail.com'); }
  }
  const FORMSPREE = 'https://formspree.io/f/YOUR_FORMSPREE_ID'; // TODO: set

  const contact = document.querySelector('#contact-form');
  if (contact) contact.addEventListener('submit', e => { e.preventDefault(); postForm(contact, FORMSPREE); });

  const bp = document.querySelector('#blueprint-form');
  if (bp) bp.addEventListener('submit', e => { e.preventDefault(); postForm(bp, FORMSPREE); });
});
