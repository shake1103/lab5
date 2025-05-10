// Mobile Filters Overlay logic

document.addEventListener('DOMContentLoaded', function() {
    var openBtn = document.querySelector('.mobile-filter-btn');
    var overlay = document.querySelector('.mobile-filters-overlay');
    var closeBtn = document.querySelector('.close-mobile-filters');

    if (openBtn && overlay && closeBtn) {
        openBtn.addEventListener('click', function() {
            overlay.classList.add('open');
            document.body.style.overflow = 'hidden';
        });
        closeBtn.addEventListener('click', function() {
            overlay.classList.remove('open');
            document.body.style.overflow = '';
        });
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }
}); 