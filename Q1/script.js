document.addEventListener('DOMContentLoaded', function () {
    const mainNavLinks = document.querySelectorAll('.navigation li a');
    const detailsSections = document.querySelectorAll('.details-section');

    mainNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            // Hide all details sections
            detailsSections.forEach(section => {
                section.classList.remove('active');
            });

            // Show the selected details section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});


