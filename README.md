# React.js Frontend Developer Assignment

## Objective:
Develop a React.js application that fetches and displays a list of users from an API, allows searching and filtering, and provides a detailed view for each user.

---

## Features:

### Home Page:
1. **User List**: Displays a list of users fetched from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users).
   - Shows name, email, and city for each user.
2. **Search Bar**: Allows filtering users by their name.
3. **Sorting**: Provides options to sort users by name (A-Z, Z-A).
4. **Navigation**: Clicking on a user navigates to their detailed view.

### User Detail Page:
1. **User Details**: Displays full information, including:
   - Name
   - Email
   - Phone
   - Company Name
   - Website
2. **Navigation**: Includes a "Go Back" button to return to the Home Page.

### Additional Features:
1. **State Management**: Utilized React Context API for managing state across components.
2. **Loading and Error Handling**: Displays loading indicators and error messages when data is being fetched or if an error occurs.
3. **Responsive Design**: The UI is fully responsive for both mobile and desktop devices.

### Bonus Features:
1. **Dark/Light Mode Toggle**: Allows switching between dark and light themes.
2. **Pagination**: Adds pagination to navigate through the user list.

---

## Technology Stack:
- **Frontend**: React.js with functional components and hooks
- **Styling**: CSS 
- **Routing**: React Router
- **State Management**: React Context API for advanced state handling
- **Deployment**: Hosted on [Vercel](https://vercel.com/)

---

## Installation and Setup:

1. Clone the repository:
   ```bash
   git clone <repository-link>
   ```

2. Navigate to the project directory:
   ```bash
   cd react-assignment
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the application in your browser at:
   ```
   http://localhost:3000
   ```

---

## API Used:
- URL: [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
- Data includes:
  - Name
  - Email
  - Address (City)
  - Phone
  - Company
  - Website

---