import { Route, Routes } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Home from './pages/Home'
import Signup from './pages/Auth/Signup'
import ForgetPass from './pages/Auth/ForgetPass'
import NotFound from './pages/404/NotFound'
import ContactUs from './pages/ContactUs'
import Course from './pages/Course'
import Exam from './pages/Exam'
import CourseDescription from './components/Course/CourseDescription'
import CourseChapters from './components/Course/CourseChapters'
import CourseComments from './components/Course/CourseComments'
import CourseExam from './components/Course/CourseExam'
import Chapter from './pages/Chapter'
import ChapterLinks from './components/Chapter/ChapterLinks'
import ChapterExercises from './components/Chapter/ChapterExercises'
import ChapterSummary from './components/Chapter/ChapterSummary'
import Courses from './pages/Courses'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Dashboard from './components/Admin/Dashboard'
import Users from './components/Admin/Users'
import Settings from './components/Admin/Settings'
import HomeLayout from './components/HomeLayout/HomeLayout'
import AdminLayout from './pages/AdminLayout'


function App() {
  return (
    <Routes>
      {/* 🔹 Public/User Layout */}
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/error" element={<NotFound />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />

        {/* Nested for Course */}
        <Route path="/courses/:courseId" element={<Course />}>
          <Route index element={<CourseDescription />} />
          <Route path="chapters" element={<CourseChapters />} />
          <Route path="comments" element={<CourseComments />} />
          <Route path="exam" element={<CourseExam />} />
        </Route>

        {/* Nested for Chapter */}
        <Route path="/courses/:courseId/chapters/:chapterId" element={<Chapter />}>
          <Route index element={<ChapterLinks />} />
          <Route path="exercises" element={<ChapterExercises />} />
          <Route path="summary" element={<ChapterSummary />} />
        </Route>
      </Route>

      {/* Admin Layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* 404 fallback */}
      <Route element={<HomeLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
