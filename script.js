document.addEventListener('DOMContentLoaded', function() {
    
    // Quote calculator functionality
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        const propertySize = quoteForm.querySelector('select');
        const addOns = quoteForm.querySelectorAll('input[type="checkbox"]');
        const totalDisplay = document.querySelector('#quote .text-4xl');

        const basePrices = {
            'studio': 150,
            '1bed': 200,
            '2bed': 260,
            '3bed': 320
        };

        // This now matches the 'name' attribute from the HTML
        const addOnPrices = {
            'oven': 30,
            'fridge': 30,
            'windows': 50
        };

        function calculateTotal() {
            // 1. Get base price
            let total = basePrices[propertySize.value];
            
            // 2. Add add-ons
            addOns.forEach(addOn => {
                // Check if the checkbox is checked and has a name
                if (addOn.checked && addOn.name) {
                    // Use the name (e.g., 'oven') as the key
                    if (addOnPrices[addOn.name]) {
                        total += addOnPrices[addOn.name];
                    }
                }
            });

            // 3. Update the display
            totalDisplay.textContent = `$${total.toFixed(2)}`;
            totalDisplay.classList.add('animate-pop');
            setTimeout(() => totalDisplay.classList.remove('animate-pop'), 300);
        }

        propertySize.addEventListener('change', calculateTotal);
        addOns.forEach(addOn => addOn.addEventListener('change', calculateTotal));

        // Initialize calculator
        calculateTotal();
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile menu toggle
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when a link is clicked
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', ()F => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});
