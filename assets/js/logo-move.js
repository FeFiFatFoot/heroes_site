// assets/js/logo-move.js
(function () {
  // Run after DOM loaded
  function initLogoMover() {
    const logoContainer = document.querySelector('.logo-right') || document.querySelector('.right-logo');
    const socials = document.querySelector('.social-icons');

    if (!logoContainer || !socials) {
      // nothing to do
      return;
    }

    // If the logo container wraps an <img>, we want to move the container (keeps styles intact)
    const logoNode = logoContainer; // move the container element itself

    // Save original parent & next sibling so we can restore later
    const originalParent = logoNode.parentNode;
    const originalNext = logoNode.nextSibling;

    // Function to move back to original position
    function moveBack() {
      if (originalParent && !originalParent.contains(logoNode)) {
        if (originalNext && originalNext.parentNode === originalParent) {
          originalParent.insertBefore(logoNode, originalNext);
        } else {
          originalParent.appendChild(logoNode);
        }
        logoNode.classList.remove('moved-to-socials');
        // remove inline styles that JS may have set
        logoNode.style.position = '';
        logoNode.style.top = '';
        logoNode.style.left = '';
        logoNode.style.right = '';
        // ensure original display returns (desktop CSS will apply)
        logoNode.style.display = '';
      }
    }

    // Function to move into socials (above icons)
    function moveToSocials() {
      if (!socials.contains(logoNode)) {
        // Insert at top of social-icons (so it appears above icons)
        socials.insertBefore(logoNode, socials.firstChild);
        logoNode.classList.add('moved-to-socials');
        // make it visible when CSS has display:none on .logo-right for mobile
        logoNode.style.display = 'block';
        // make it flow with the socials container
        logoNode.style.position = 'static';
        logoNode.style.top = '';
        logoNode.style.left = '';
        logoNode.style.right = '';
      }
    }

    // MediaQuery watcher
    const mq = window.matchMedia('(max-width: 768px)');
    function handleChange(e) {
      if (e.matches) {
        moveToSocials();
      } else {
        moveBack();
      }
    }

    // initial run
    handleChange(mq);
    // listen for changes
    if (mq.addEventListener) mq.addEventListener('change', handleChange);
    else mq.addListener(handleChange); // fallback
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLogoMover);
  } else {
    initLogoMover();
  }
})();
