# Ethara TaskFlow Suite

Ethara TaskFlow Suite is a full stack web application developed for managing internal team projects, task assignments, and deadline monitoring through a centralized admin dashboard.

The purpose of this project is to provide an organized workflow management platform where an administrator can create projects, assign tasks, monitor pending work, and identify overdue activities in real time.

This application was developed as part of the Ethara Full Stack Developer assessment and is fully cloud deployed with separate frontend and backend hosting.

---

## Live Project Links

Frontend Live Application:
https://ethara-taskflow-suite.netlify.app

Backend API Server:
https://ethara-taskflow-api-production.up.railway.app

GitHub Repository:
https://github.com/Gopeeshwar-Kotyada/ethara-taskflow-suite

---

## Key Features

* Secure Admin Authentication
* JWT Based Login Validation
* Role Based Access Workflow
* Project Creation and Management
* Task Assignment and Monitoring
* Pending / Completed / Overdue Tracking
* Dashboard Statistics Overview
* MongoDB Cloud Database Storage
* REST API Communication
* Responsive User Interface
* Production Deployment on Cloud

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas (NoSQL Cloud Database)

### Authentication

* JSON Web Token (JWT)

### Deployment

* Netlify (Frontend Hosting)
* Railway (Backend Hosting)
* GitHub (Version Control)

---

## Main Functional Modules

### Authentication Module

Provides secure admin registration and login.
User credentials are validated through backend APIs and JWT token is generated after successful authentication.

### Dashboard Module

Displays a summarized overview of:

* Active Projects
* Pending Tasks
* Completed Tasks
* Deadline Alerts

This helps in quickly understanding the current status of all work items.

### Project Management Module

Allows the admin to create new projects with project title and description.
All created projects are stored dynamically in MongoDB Atlas.

### Task Management Module

Allows task creation under projects with:

* Task title
* Assignment details
* Priority level
* Due date
* Completion status

### Deadline Monitoring Module

The system automatically checks task due dates and flags overdue tasks inside dashboard alerts.

---

## REST API Endpoints Used

The frontend communicates with backend through custom Express REST APIs such as:

* `/api/auth/register`
* `/api/auth/login`
* `/api/projects/create`
* `/api/projects/all`
* `/api/tasks/create`
* `/api/tasks/all`

These APIs are consumed using JavaScript Fetch requests.

---

## Database Collections

MongoDB Atlas is used to store all application data.

Collections maintained:

* Users Collection
* Projects Collection
* Tasks Collection

This ensures proper separation of authentication, project records, and task records.

---

## Demo Credentials

Admin Login:

Email: [admin@gmail.com](mailto:admin@gmail.com)
Password: admin123

---

## Local Setup Instructions

### Clone the Repository

git clone https://github.com/Gopeeshwar-Kotyada/ethara-taskflow-suite.git

### Backend Installation

cd backend
npm install
node server.js

### Frontend Execution

Open `frontend/index.html` using Live Server.

---

## Project Folder Structure

ethara-taskflow-suite/

backend/
├── config/
├── middleware/
├── models/
├── routes/
├── server.js

frontend/
├── css/
├── js/
├── assets/
├── index.html
├── dashboard.html
├── projects.html
├── tasks.html

README.md

---

## Future Scope

* Separate Member Dashboard
* File Upload Attachments
* Notification Alerts
* Team Collaboration Messaging
* Advanced Productivity Reports

---

## Developed For

Ethara Full Stack Developer Assessment Submission

---

## Developed By

Gopeeshwar Kotyada

---

## Project Status

Completed, production deployed, and fully functional.
