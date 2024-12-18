# Course Management Application

This is a React-based Course Management Application that allows users to manage their courses by enrolling, saving for later, and adding new courses. The app also includes a user authentication system with login and signup functionality.

---

## Features

1. **User Authentication**
   - Login and Signup functionality.
   - Toggle between login and signup forms.

2. **Course Management**
   - Add new courses with details such as name, description, and image.
   - View enrolled courses, saved courses, and all available courses.
   - Enroll in a course or save it for later.
   - Delete a course.

3. **Dynamic Navigation**
   - Switch views between adding courses, viewing enrolled courses, and saved courses.

4. **Responsive Design**
   - User-friendly interface styled with inline CSS for simplicity.

---

## Components

1. **`App.js`**
   - Manages the application's state, including courses, selected course, and logged-in user.
   - Handles different views and interactions.

2. **`Header.js`**
   - Displays the application's title and navigation options for searching, adding courses, enrolled courses, and saved courses.

3. **`Navbar.js`**
   - Handles navigation between different views of the application (Add, Enrolled, Saved).

4. **`CourseList.js`**
   - Displays a list of courses based on the current view (All, Enrolled, Saved).

5. **`CourseForm.js`**
   - Provides a form to add new courses.

6. **`CourseDetails.js`**
   - Displays details of a selected course.

7. **`LoginSignup.js`**
   - Handles user authentication (login and signup).

8. **`Footer.js`**
   - Provides the footer for the application.

---

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd course-management-app
