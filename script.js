// Toggle user dropdown menu
function toggleDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('hidden');

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = event.target.closest('.relative');
        const dropdown = document.getElementById('userDropdown');
        
        if (!isClickInside && !dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
        }
    });
}

// Hide settings link in navigation when on settings page
document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop();
    
    // If we're on the settings page, hide the settings link in the dropdown
    if (currentPage === 'settings.html') {
        const settingsLinks = document.querySelectorAll('a[href="settings.html"]');
        settingsLinks.forEach(link => {
            link.style.display = 'none';
        });
    }
});
