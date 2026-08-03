# CV Analyzer

A full-stack web application that helps users analyze and compare multiple resumes against a job description to identify the best-matching candidate. The platform provides secure authentication, resume management, comparison history, and user settings in a clean and modern interface.

## Features

### Authentication

* Secure user registration and login
* Protected routes and authenticated sessions
* User profile management

### Resume Analysis

* Upload multiple resumes (PDF)
* Upload or paste a job description
* Compare multiple resumes with the job description
* Identify the best-matching resume based on AI-powered analysis

### History

* View previously analyzed resumes
* Access past comparison results
* Track resume analysis history

### Settings

* Update profile information
* Manage account settings
* Configure application preferences

## Tech Stack

### Frontend

* React
* Vite
* React Router
* React Query
* React Hook Form
* Zod
* Axios

### Backend

* Node.js
* Express.js
* Prisma ORM
* MySQL
* JWT Authentication
* Cloudinary
* Multer

## Project Structure

```text
CVAnalyzer/
├── frontend/
├── backend/
└── .github/
    └── workflows/
```

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd CVAnalyzer
```

### 2. Install dependencies

Frontend:

```bash
cd frontend
npm install
```

Backend:

```bash
cd ../backend
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the backend directory and add the required environment variables.

Example:

```env
DATABASE_URL=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### 4. Run the application

Frontend:

```bash
cd frontend
npm run dev
```

Backend:

```bash
cd backend
npm start
```

## Future Improvements

* AI-generated resume suggestions
* ATS score analysis
* Resume keyword optimization
* Interview preparation recommendations
* Export analysis reports
* Admin dashboard

## License

This project is intended for learning, portfolio, and demonstration purposes.
