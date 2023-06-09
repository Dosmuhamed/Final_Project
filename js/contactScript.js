document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(nameInput.value)) {
        alert('Please enter a valid name.');
        nameInput.focus();
        return;
    }

    // Validate email input
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }

    // Validate message length
    if (messageInput.value.length < 5 || messageInput.value.length > 1000) {
        alert('Please enter a message between 5 and 1000 characters.');
        messageInput.focus();
        return;
    }

    // If all validations pass, submit the form
    alert('Form submitted successfully!');
    document.getElementById('contact-form').reset();
});