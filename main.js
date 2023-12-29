const toggler = document.querySelector(".toggler");
const basicPrice = document.getElementById("basic-price");
const premiumPrice = document.getElementById("premium-price");
const membershipDurationSelect = document.getElementById("membership-duration");

toggler.addEventListener("change", () => {
    updatePrices();
});

membershipDurationSelect.addEventListener("change", () => {
    updatePrices();
});

function updatePrices() {
    const isAnnuallyBilled = toggler.checked;
    const basicMonthlyPrice = 500;
    const premiumMonthlyPrice = 1000;

    if (isAnnuallyBilled) {
        const selectedDuration = parseInt(membershipDurationSelect.value);
        const basicPriceInr = basicMonthlyPrice * selectedDuration * 12;
        const premiumPriceInr = premiumMonthlyPrice * selectedDuration * 12;

        basicPrice.innerHTML = `₹${basicPriceInr} <span> / year </span>`;
        premiumPrice.innerHTML = `₹${premiumPriceInr} <span> / year </span>`;
    } else {
        const selectedDuration = parseInt(membershipDurationSelect.value);
        const basicPriceInr = basicMonthlyPrice * selectedDuration;
        const premiumPriceInr = premiumMonthlyPrice * selectedDuration;

        basicPrice.innerHTML = `₹${basicPriceInr} <span> / month </span>`;
        premiumPrice.innerHTML = `₹${premiumPriceInr} <span> / month </span>`;
    }
}

// Initial update
updatePrices();
