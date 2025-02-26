// Facebook Marketplace Auto-Checkbox Clicker
(function() {
    let checkboxes = document.querySelectorAll('div[role="checkbox"]');
    let index = 0;

    function clickNext() {
        if (index >= checkboxes.length) {
            console.log("done");
            return;
        }

        let checkbox = checkboxes[index];
        let isChecked = checkbox.getAttribute('aria-checked') === 'true';

        if (!isChecked) {
            checkbox.click();
        }

        index++;
        checkbox.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(clickNext, 200); // Adjust timing for smooth execution
    }

    clickNext();
})();
