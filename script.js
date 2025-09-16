// Mobile nav toggle + contact mailto
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name')?.value || '';
      const email = form.querySelector('#email')?.value || '';
      const phone = form.querySelector('#phone')?.value || '';
      const interest = form.querySelector('#interest')?.value || 'general';
      const message = form.querySelector('#message')?.value || '';
      const to = 'toppshape1332@gmail.com';
      const subject = encodeURIComponent(`Topp Shape Inquiry – ${interest}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\n\nMessage:\n${message}\n\n— Sent from toppshape.fit`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // Contact form (existing)
  const contact = document.querySelector('#contact-form');
  if (contact) {
    contact.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contact.querySelector('#name')?.value || '';
      const email = contact.querySelector('#email')?.value || '';
      const phone = contact.querySelector('#phone')?.value || '';
      const interest = contact.querySelector('#interest')?.value || 'general';
      const message = contact.querySelector('#message')?.value || '';
      const subject = encodeURIComponent(`Topp Shape Inquiry – ${interest}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\n\nMessage:\n${message}`);
      window.location.href = `mailto:toppshape1332@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  // Blueprint form (new)
  const bp = document.querySelector('#blueprint-form');
  if (bp) {
    bp.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = bp.querySelector('#bp-name')?.value || '';
      const email = bp.querySelector('#bp-email')?.value || '';
      const phone = bp.querySelector('#bp-phone')?.value || '';
      const goal = bp.querySelector('#bp-goal')?.value || '';
      const service = bp.querySelector('#bp-service')?.value || '';
      const notes = bp.querySelector('#bp-notes')?.value || '';
      const subject = encodeURIComponent(`Blueprint Request – ${service} / ${goal}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nGoal: ${goal}\nService: ${service}\n\nNotes:\n${notes}\n\n— Sent from toppshape.fit`
      );
      window.location.href = `mailto:toppshape1332@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
