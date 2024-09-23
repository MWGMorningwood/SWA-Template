const { app } = require('@azure/functions');
const { EmailClient } = require('@azure/communication-email');

app.http('SendEmailFunction', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const { to, subject, content } = await request.json();

        const connectionString = process.env['AZURE_COMMUNICATION_SERVICE_CONNECTION_STRING'];
        const senderEmail = process.env['AZURE_COMMUNICATION_SERVICE_SENDFROM_EMAIL'];
        context.log(`Sender Email: ${senderEmail}`);
        const emailClient = new EmailClient(connectionString);

        const emailMessage = {
            senderAddress: senderEmail,
            content: {
                subject: subject,
                plainText: content
            },
            recipients: {
                to: [
                    {
                        address: process.env['PRESET_RECIPIENT_EMAIL']
                    }
                ]
            }
        };

        try {
            const poller = await emailClient.beginSend(emailMessage);
            const result = await poller.pollUntilDone();
            context.log('Email sent successfully:', result);
            return { status: 200, body: 'Email sent successfully' };
        } catch (error) {
            context.log('Error sending email:', error);
            return { status: 500, body: `Error sending email: ${error.message}` };
        }
    }
});