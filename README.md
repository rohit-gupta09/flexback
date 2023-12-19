# Yoga Class Admission Form

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Project Structure](#project-structure)
- [Backend Setup](#backend-setup)
  - [Dependencies](#dependencies)
  - [Database Setup](#database-setup)
  - [API Endpoints](#api-endpoints)
- [Frontend Setup](#frontend-setup)
  - [Dependencies](#dependencies-frontend)
  - [Form Component](#form-component)
- [Usage](#usage)

## Introduction

This project is a simple Yoga Class Admission Form that allows participants to enroll in monthly classes. The backend is built using Express.js with PostgreSQL as the database, and the frontend is implemented in React.

## Requirements

The admission form has the following requirements:

- Participants must be within the age limit of 18-65.
- Monthly fees of 500 INR must be paid by participants.
- There are four batches a day (6-7AM, 7-8AM, 8-9AM, 5-6PM).
- Participants can choose any batch in a month and switch batches monthly.

## Project Structure

The project is divided into frontend and backend components:

- **Backend:**
  - `index.js`: Express server setup.
  - `database.js`: PostgreSQL connection configuration.
 
- **Frontend:**
  - `Form.js`: React component for the enrollment form.

## Backend Setup

### Dependencies

Ensure you have Node.js and npm installed. Install the required backend dependencies using:

```bash
npm install
```

## Database Setup

1. Create a PostgreSQL database named `flexmoney`.
2. Run the SQL script provided in `database.sql` to create tables and insert initial data.

## API Endpoints

- **POST /api/enroll:** Enroll participants in yoga classes.
- **POST /api/create:** Sample endpoint for testing purposes.

## Frontend Setup

### Dependencies (Frontend)

Navigate to the `frontend` directory and install the required dependencies:

```bash
cd frontend
npm install
```

## Form Component

The `Form.js` component handles user input and submission. Update the backend API endpoint in the `axios.post` call to match your backend server.

## Usage

1. Start the backend server:

```bash
npm start
```

2. Start the frontend development server:
```bash
cd frontend
npm start
```

Visit http://localhost:3000 in your web browser to access the Yoga Class Admission Form. Fill in the required details and submit the form.

## Implementation

I have take all the inputs expect amount this function can take amount later because the payment function cannot is mockup. The input i have taken is AGE, NAME (which is taken as unique currently for this project),phone number and option to select batch.

If the user have enterned any incorrect details or he/she has already for any of the batch before then it will throw error which is easily be handled in future. I have provided all the code of mine in above repo.

The database picture of participant students, Enrolled stuedent and batch database provided below which i have make durin the making of this project and schema is provied in the db.sql file.
 
<br>

![image](https://github.com/rohit-gupta09/flexback/assets/79755153/4cc934dc-547c-407f-ac21-0ff57a988d2b)
<br>

## ER DIAGRAM

![WhatsApp Image 2023-12-18 at 13 54 10_8b4b7a5e](https://github.com/rohit-gupta09/flexback/assets/79755153/68bf0883-ee30-4c02-86d2-b2d22d63ad4f)

