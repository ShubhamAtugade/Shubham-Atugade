// Initialize EmailJS
emailjs.init("mbmKesuBgFMLPB4fm");

document.getElementById('contact-form').onsubmit = async function(event) {
    event.preventDefault();

    const form = event.target;
    const responseMessage = document.getElementById('responseMessage');

    // Show sending status
    responseMessage.innerText = 'Sending message...';
    responseMessage.style.color = 'white';

    const formData = {
        firstname: form.firstname.value,
        lastname: form.lastname.value,
        email: form.email.value,
        message: form.message.value
    };

    // Fallback timeout in case EmailJS is slow (10 sec max)
    const fallbackTimer = setTimeout(() => {
        showTemporaryMessage('Something went wrong, please try again.', 'red', form);
    }, 10000);

    try {
        const response = await emailjs.send('service_jsbemto', 'template_j6ljh85', formData);

        clearTimeout(fallbackTimer);  // Clear if response received

        if (response.status === 200) {
            showTemporaryMessage('Message sent successfully!', 'lightgreen', form);
        } else {
            showTemporaryMessage('Something went wrong, please try again.', 'red', form);
        }
    } catch (error) {
        clearTimeout(fallbackTimer);
        showTemporaryMessage('Something went wrong, please try again.', 'red', form);
    }
};

function showTemporaryMessage(text, color, form) {
    const messageElement = document.getElementById('responseMessage');
    messageElement.innerText = text;
    messageElement.style.color = color;

    setTimeout(() => {
        messageElement.innerText = '';  // Clear message after 3 sec
        form.reset();  // Reset form
    }, 3000);
}
