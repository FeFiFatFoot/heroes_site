document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.tabs');
  if (!container) return;

  const tabLinks = Array.from(container.querySelectorAll('.tab-link'));
  const tabContents = Array.from(container.querySelectorAll('.tab-content'));

  // Make sure only one content has .active. If none, activate the first.
  if (!tabContents.some(c => c.classList.contains('active')) && tabContents[0]) {
    tabContents.forEach(c => c.classList.remove('active'));
    tabContents[0].classList.add('active');
  } else {
    // ensure only one active
    let seen = false;
    tabContents.forEach(c => {
      if (c.classList.contains('active')) {
        if (!seen) { seen = true; } else { c.classList.remove('active'); }
      }
    });
  }

  // Same for buttons: ensure one active (match the first active content if possible)
  if (!tabLinks.some(b => b.classList.contains('active')) && tabLinks[0]) {
    tabLinks[0].classList.add('active');
  }

  // Click handlers
  tabLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.dataset.tab;
      if (!targetId) return;

      // remove active from all
      tabLinks.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // set active on clicked tab + corresponding content
      this.classList.add('active');
      const content = document.getElementById(targetId);
      if (content) content.classList.add('active');

      // optional: focus top of content box
      if (content) content.scrollTop = 0;
    });
  });
});
