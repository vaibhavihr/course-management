import React, { useState } from "react";
import Header from "./components/Header";
import CourseList from "./components/CourseList";
import CourseForm from "./components/CourseForm";
import CourseDetails from "./components/CourseDetails";
import Footer from "./components/Footer";
import LoginSignup from "./components/LoginSignup";

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
    <div>
      {/* Header with dynamic view management */}
      <Header
        view={view}
        setView={setView}
        loggedInUser={loggedInUser}
        onLogout={() => setLoggedInUser(null)}
      />
      <div style={{ padding: "1rem" }}>
        {view === "add" && (
          <>
            <h2>Add Courses</h2>
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
            <h2>Enrolled Courses</h2>
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
            <h2>Saved for Later</h2>
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
