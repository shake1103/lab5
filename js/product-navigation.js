// Function to handle product card clicks
function handleProductCardClicks() {
    // Get all product cards
    const productCards = document.querySelectorAll('.product-card');
    
    // Add click event listener to each card
    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent navigation if clicking on specific elements
            if (e.target.closest('.stock-label') || 
                e.target.closest('.item-actions') || 
                e.target.closest('.cart-actions') ||
                e.target.closest('.more-btn')) {
                return;
            }
            
            // Navigate to product page
            window.location.href = 'product.html';
        });
    });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', handleProductCardClicks); 