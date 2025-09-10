document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-link');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const targetId = tab.getAttribute('data-tab');

      // hide all tab contents
      contents.forEach(c => {
        c.classList.remove('active');
        c.setAttribute('aria-hidden', 'true');
      });

      // remove active from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // show selected tab content
      const targetContent = document.getElementById(targetId);
      if(targetContent){
        targetContent.classList.add('active');
        targetContent.setAttribute('aria-hidden', 'false');
      }
    });
  });
});
