// Kbong Pte. Ltd. — site behaviour
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      var iconOpen = document.getElementById('icon-open');
      var iconClose = document.getElementById('icon-close');
      if (iconOpen && iconClose) {
        iconOpen.classList.toggle('hidden');
        iconClose.classList.toggle('hidden');
      }
    });
    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        var iconOpen = document.getElementById('icon-open');
        var iconClose = document.getElementById('icon-close');
        if (iconOpen && iconClose) {
          iconOpen.classList.remove('hidden');
          iconClose.classList.add('hidden');
        }
      });
    });
  }

  // Header shadow on scroll
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 8) {
        header.classList.add('shadow-lg');
      } else {
        header.classList.remove('shadow-lg');
      }
    });
  }

  // Scroll reveal animation
  var revealEls = document.querySelectorAll('.kb-fade-up');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('kb-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('kb-visible'); });
  }

  // Current year in footer
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Contact form -> mailto handoff (static site, no backend)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('cf-name').value.trim();
      var company = document.getElementById('cf-company').value.trim();
      var email = document.getElementById('cf-email').value.trim();
      var projectType = document.getElementById('cf-type').value;
      var message = document.getElementById('cf-message').value.trim();

      var subject = 'Project Inquiry from ' + (company || name || 'Website Visitor');
      var bodyLines = [
        'Name: ' + name,
        'Company: ' + company,
        'Email: ' + email,
        'Project type: ' + projectType,
        '',
        'Message:',
        message
      ];
      var mailto = 'mailto:kmk@kbongsoft.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(bodyLines.join('\n'));

      var statusEl = document.getElementById('cf-status');
      if (statusEl) {
        statusEl.textContent = 'Opening your email client to send this inquiry to kmk@kbongsoft.com...';
        statusEl.classList.remove('hidden');
      }
      window.location.href = mailto;
    });
  }
});
