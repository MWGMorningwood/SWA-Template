function showContactForm() {
    document.getElementById('contact-form').style.display = 'block';
}

document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const emailContent = `
        Name: ${name}
        Phone Number: ${number}
        Email: ${email}
        Message: ${message}
    `;

    try {
        const response = await fetch('./api/SendEmailFunction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: 'info@mortgagesolutions.com',
                subject: 'New Contact Us Message',
                content: emailContent
            })
        });

        if (response.ok) {
            alert('Your message has been sent successfully!');
            document.getElementById('contactForm').reset();
            document.getElementById('contact-form').style.display = 'none';
        } else {
            alert('There was an error sending your message. Please try again later.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again later.');
    }
});