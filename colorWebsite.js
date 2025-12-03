document.addEventListener('DOMContentLoaded', function() {
    const sampleText = document.getElementById('sampleText');
    const colorButtons = document.querySelectorAll('.colorButton');
    
    const notificationTimeout = 2000; // 2 seconds

    let currentColor = getComputedStyle(sampleText).color || 'var(--primaryBlack)'; // Default color is black

    // Function to handle color preview on hover
    function handleHoverColor(button) {
        const color = button.dataset.color || button.style.getPropertyValue('--color');
        sampleText.style.color = color;
    }

    // Function to handle revert color on hover out
    function handleHoverOut() {
        sampleText.style.color = currentColor;
    }

    // Function to handle color change on click
    function handleClickColor(button) {
        const color = button.dataset.color || button.style.getPropertyValue('--color');

        if (currentColor === color) {
            return; // Do nothing if clicking the same color
        }

        // Set the new color
        sampleText.style.color = color;
        currentColor = color;

        // Remove active class from all buttons
        colorButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class to the clicked button
        button.classList.add('active');

        // Copy color hex code to clipboard
        copyToClipboard(color);

        // Show notification
        showNotification();
    }

    // Function to copy text to clipboard
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => console.log('Copied to clipboard:', text))
            .catch(err => console.error('Failed to copy:', err));
    }

    // Function to show notification
    function showNotification() {
        // Create notification element
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = 'Hex code copied to clipboard';
        document.body.appendChild(notification);

        // Remove notification after a timeout
        setTimeout(() => {
            notification.remove();
        }, notificationTimeout);
    }

    // Add event listeners for each color button
    colorButtons.forEach(button => {
        button.addEventListener('mouseover', () => handleHoverColor(button));
        button.addEventListener('mouseout', handleHoverOut);
        button.addEventListener('click', () => handleClickColor(button));
    });
});
