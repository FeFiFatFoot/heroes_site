document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('newsConsent');
    const submitButton = document.getElementById('mc-embedded-subscribe');
    
    checkbox.addEventListener('change', function() {
        submitButton.disabled = !this.checked;
    });
});