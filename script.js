document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('booking-form');
    if (!form) return; // Only run if the quote tool exists on the page

    const sizeSelect = document.getElementById('apartment-size');
    const addOnCheckboxes = document.querySelectorAll('input[name="addon"]');
    const totalPriceEl = document.getElementById('total-price');

    const BASE_PRICES = {
        'studio': 150,
        '1bed': 200,
        '2bed': 260,
        '3bed': 320
    };

    const ADDON_PRICES = {
        'oven': 30,
        'fridge': 30,
        'windows': 50
    };

    function calculateTotal() {
        // 1. Get base price
        let currentSize = sizeSelect.value;
        let total = BASE_PRICES[currentSize];

        // 2. Add add-ons
        addOnCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += ADDON_PRICES[checkbox.value];
            }
        });

        // 3. Update the display
        totalPriceEl.textContent = `$${total.toFixed(2)}`;
    }

    // Add event listeners
    sizeSelect.addEventListener('change', calculateTotal);
    addOnCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });

    // Initial calculation on page load
    calculateTotal();
});
