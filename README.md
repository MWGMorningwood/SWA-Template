# Azure Static Web Apps Template

This repository serves as a template for quickly deploying static web applications to Azure Static Web Apps. It provides a basic structure for frontend and backend integration, making it easy to get started with Azure's powerful hosting and serverless capabilities.

## Features

- **Frontend**: A simple static website with HTML, CSS, and JavaScript.
- **Backend**: An Azure Function for serverless API integration.
- **Pre-configured Deployment**: Includes configuration files for seamless deployment to Azure Static Web Apps.

## Project Structure

The project is organized into the following directories:

### `src/`
This directory contains the frontend code for the static web application.

- `index.html`: The main HTML file for the website.
- `lib/`: Contains supporting assets such as CSS, JavaScript, and images.

### `api/`
This directory contains the backend code for serverless API functionality.

- `host.json`: Configuration file for Azure Functions.
- `SendEmailFunction/`: Example Azure Function for handling email submissions.

### Configuration Files

- `staticwebapp.config.json`: Configuration file for Azure Static Web Apps.
- `.github/workflows/`: Contains GitHub Actions workflows for CI/CD.

## Deployment Instructions

Follow these steps to deploy this template to Azure Static Web Apps:

### Step 1: Use the GitHub Template
1. Click the "Use this template" button.
2. Select "Create a new repository" and fill in the required details.
3. Clone the newly created repository to your local machine:
   ```bash
   git clone <your-new-repository-url>
   cd <your-new-repository-directory>
   ```

### Step 2: Set Up Environment Variables
Ensure the following environment variables are set for proper debugging and deployment:

#### Static Web App
- `AzureWebJobsStorage`: Connection string for Azure Storage. Use `UseDevelopmentStorage=true` for local development.

#### Azure Functions
- `FUNCTIONS_WORKER_RUNTIME`: Set to `node` for JavaScript functions.
- `AZURE_COMMUNICATION_SERVICE_CONNECTION_STRING`: Connection string for Azure Communication Service.
- `AZURE_COMMUNICATION_SERVICE_SENDFROM_EMAIL`: Email address to send emails from.
- `PRESET_RECIPIENT_EMAIL`: Default recipient email address.

### Step 3: Customize the Frontend
Modify the files in the `src/` directory to suit your application's needs.

### Step 4: Customize the Backend
Add or modify Azure Functions in the `api/` directory for your serverless API requirements.

### Step 5: Deploy to Azure
1. **Create a New Azure Static Web App**:
   - Go to the [Azure Portal](https://portal.azure.com).
   - Search for "Static Web Apps" and click "Create".
   - Fill in the required details, such as resource group, name, and region.

2. **Connect Your GitHub Repository**:
   - Select "GitHub" as the deployment source.
   - Authenticate and choose your repository and branch.

3. **Configure Build Settings**:
   - Set the "App location" to `src`.
   - Set the "API location" to `api`.
   - Leave "Output location" blank.

4. **Review and Create**:
   - Review the settings and click "Create".

5. **Verify Deployment**:
   - Once the deployment is complete, navigate to the URL provided by Azure to verify your application.

## License

This project is licensed under the [MIT License](LICENSE).

---

This template is designed to help you get started with Azure Static Web Apps quickly and efficiently. Customize it to fit your project's requirements and deploy with ease!