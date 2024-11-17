import React, { useState } from 'react';
import Header from './components/Header.js';
import CourseList from './components/CourseList.js';
import CourseForm from './components/CourseForm.js';
import CourseDetails from './components/CourseDetails.js';
import Footer from './components/Footer.js';
import LoginSignup from './components/LoginSignup.js';

const App = () => {
  const [courses, setCourses] = useState([
    {
      name: "React Basics",
      description:
        "Learn the fundamentals of React, including components, hooks, and state management.",
      image: "https://i.pinimg.com/236x/69/16/e2/6916e2b11f37661b5ba69a422c49460c.jpg",
      enrolled: false,
      saved: false,
    },
    {
      name: "Node.js for Beginners",
      description: "Understand how to build server-side applications using Node.js.",
      image: "https://i.pinimg.com/236x/88/fb/18/88fb185858c7aaebbfbe9a74056c34e0.jpg",
      enrolled: false,
      saved: false,
    },
    {
      name: "Full-Stack Development",
      description:
        "Master front-end and back-end development to build complete web applications.",
      image: "https://i.pinimg.com/236x/b6/48/e8/b648e8f1418a4cf4406febc12405bc83.jpg",
      enrolled: false,
      saved: false,
    },
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [view, setView] = useState("add"); // Tracks the current view
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Add a new course
  const addCourse = (course) => {
    setCourses([...courses, { ...course, enrolled: false, saved: false }]);
  };

  // Delete a course
  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    setSelectedCourse(null);
  };

  // Enroll in a course
  const enrollCourse = (course) => {
    setCourses(
      courses.map((c) =>
        c.name === course.name ? { ...c, enrolled: true, saved: false } : c
      )
    );
  };

  // Unenroll from a course
  const unenrollCourse = (course) => {
    setCourses(
      courses.map((c) =>
        c.name === course.name ? { ...c, enrolled: false } : c
      )
    );
  };

  // Save or unsave a course
  const saveForLater = (course, save) => {
    setCourses(
      courses.map((c) =>
        c.name === course.name ? { ...c, saved: save } : c
      )
    );
  };

  if (!loggedInUser) {
    return <LoginSignup onLogin={(user) => setLoggedInUser(user)} />;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f6f9' }}>
      {/* Header with dynamic view management */}
      <Header
        view={view}
        setView={setView}
        loggedInUser={loggedInUser}
        onLogout={() => setLoggedInUser(null)}
      />
      
      <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Conditional Rendering for Views */}
        {view === "add" && (
          <>
            <h2 style={{ color: '#333' }}>Add Courses</h2>
            <CourseForm addCourse={addCourse} />
            <CourseList
              courses={courses}
              onSelectCourse={setSelectedCourse}
              onDeleteCourse={deleteCourse}
              onEnrollCourse={enrollCourse}
              onSaveForLater={saveForLater}
              onUnenrollCourse={unenrollCourse}
            />
            <CourseDetails course={selectedCourse} />
          </>
        )}
        
        {view === "enrolled" && (
          <>
            <h2 style={{ color: '#333' }}>Enrolled Courses</h2>
            <CourseList
              courses={courses.filter((course) => course.enrolled)}
              onSelectCourse={setSelectedCourse}
              onDeleteCourse={deleteCourse}
              onEnrollCourse={enrollCourse}
              onSaveForLater={saveForLater}
              onUnenrollCourse={unenrollCourse}
            />
            <CourseDetails course={selectedCourse} />
          </>
        )}
        
        {view === "saved" && (
          <>
            <h2 style={{ color: '#333' }}>Saved for Later</h2>
            <CourseList
              courses={courses.filter((course) => course.saved)}
              onSelectCourse={setSelectedCourse}
              onDeleteCourse={deleteCourse}
              onEnrollCourse={enrollCourse}
              onSaveForLater={saveForLater}
              onUnenrollCourse={unenrollCourse}
            />
            <CourseDetails course={selectedCourse} />
          </>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
