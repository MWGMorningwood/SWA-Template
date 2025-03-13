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

## Usage Instructions

To use this template for your project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Customize the Frontend**:
   Modify the files in the `src/` directory to suit your application's needs.

3. **Customize the Backend**:
   Add or modify Azure Functions in the `api/` directory for your serverless API requirements.

4. **Deploy to Azure**:
   - Create a new Azure Static Web App in the Azure Portal.
   - Connect your GitHub repository to enable automatic deployments.

## License

This project is licensed under the [MIT License](LICENSE).

---

This template is designed to help you get started with Azure Static Web Apps quickly and efficiently. Customize it to fit your project's requirements and deploy with ease!