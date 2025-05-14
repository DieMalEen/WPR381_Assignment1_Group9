# Community Portal Project

## Overview

## Contact Form Web Application

A simple web application built with **Express.js** and **EJS** that includes a contact form to collect user submissions. The application stores submissions in an in-memory array and provides a thank-you page to display the submitted data.

---

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript)
- CSS
- Body-Parser Middleware

---

## Team Members and Roles

- Jean Paul Smit: Backend Developer
- Vaughn du Preez: Team Lead
- Joseph Pereira: Data Manager
- Neo Polori: Frontend Developer

---

## Features

| Feature         | Details                                      |
|-----------------|---------------------------------------------|
| **Express Routing** | Modular route setup in `/routes/pageRoutes.js` |
| **Dynamic EJS Templates** | Use `<%= %>` and `<%- include %>` for dynamic content and partials |
| **Static Assets**  | Images and CSS stored in `/public` and served correctly |
| **Contact Form**   | Uses `POST` method; submission is stored in a temporary array |
| **Thank You Page** | Displays data after submitting the contact form |

---

## Pages

### **Home Page**

- Displays a welcome message and a placeholder for upcoming events.  
- The content is dynamic and can be extended to include event data from an in-memory array or database.  

---

### **About Page**

- Provides information about the team or organization.  
- Data is sourced from an array in the backend and rendered using EJS templates.  
- Includes dynamic content rendering using `<%= %>` and partials for consistent layout.  

---

### **Events Page**

- Displays a list of events, each with a title, date, location, and image.  
- Events data is structured as an array of objects and rendered dynamically using a loop in EJS.  
- Future implementation can include event creation and editing features.  

---

### **Contact Page**

- A simple contact form that collects **name, email, and message**.  
- The form uses the `POST` method to submit data to the `/thankyou` route.  
- Submissions are stored in an in-memory array for temporary storage.  
- Includes validation to ensure all fields are filled before submission.  

---

### **Thank You Page**

- Displays a confirmation message after the form is successfully submitted.  
- Shows the submitted data (`name`, `email`, `message`) dynamically using EJS.  
- Provides a link to navigate back to the Contact page or Home page.  

---

## Setup Instructions

1. Run `npm install` to install dependencies.
2. Use `npm run dev` to start the development server with nodemon.

## Clone the repository

 ```bash
   git clone https://github.com/DieMalEen/WPR381_Assignment1_Group9
   cd WPR381_Assignment1_Group9
