// ===== Topp Shape — Global JS =====
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // Mailto contact (edit the email address below)
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name')?.value || '';
      const email = form.querySelector('#email')?.value || '';
      const phone = form.querySelector('#phone')?.value || '';
      const interest = form.querySelector('#interest')?.value || 'general';
      const message = form.querySelector('#message')?.value || '';

      const to = 'info@toppshape.fit'; // TODO: change to Trey’s real email
      const subject = encodeURIComponent(`Topp Shape Inquiry – ${interest}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${interest}\n\nMessage:\n${message}\n\n— Sent from toppshape.fit`
      );
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  }
});
