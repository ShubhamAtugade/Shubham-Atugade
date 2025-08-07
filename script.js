document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("mbmKesuBgFMLPB4fm");  // Your public key (check this in your EmailJS dashboard)

    document.getElementById('contact-Form').onsubmit = function(event) {
        event.preventDefault();

        // Gather form data
        const formData = {
            first_name: document.getElementById('firstName').value,
            last_name: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Send email via EmailJS
        emailjs.send('service_y84gvgv', 'template_j6ljh85', formData)
        .then(function(response) {
            console.log('SUCCESS!', response);
            document.getElementById('responseMessage').innerText = 'Message sent successfully!';
            document.getElementById('responseMessage').style.color = 'lightgreen';
            document.getElementById('contact-Form').reset();
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('responseMessage').innerText = 'Failed to send message. Please try again.';
            document.getElementById('responseMessage').style.color = 'red';
        });
    };
});
