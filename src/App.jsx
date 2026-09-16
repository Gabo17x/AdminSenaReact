import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home/home';
import Aboutus from './pages/quienes-somos/Aboutus';
import Login from './pages/Auth/Login';

//Aprendices
import ApprenticeCreate from './pages/Apprentice/ApprenticeCreate';
import ApprenticeEdit from './pages/Apprentice/ApprenticeEdit';
import ApprenticeShow from './pages/Apprentice/ApprenticeShow';

//Areas
import AreasCreate  from './pages/Areas/AreasCreate';
import AreasEdit from './pages/Areas/AreasEdit';
import AreasShow from './pages/Areas/AreasShow';

//Computers
import ComputerCreate from './pages/Computer/ComputerCreate';
import ComputerEdit from './pages/Computer/ComputerEdit';
import ComputerShow from './pages/Computer/ComputerShow';

//Courses
import CoursesCreate from './pages/Courses/CoursesCreate';
import CoursesEdit from './pages/Courses/CoursesEdit';
import CoursesShow from './pages/Courses/CoursesShow';

//Instructors
import TeacherEdit from './pages/Teachers/TeacherEdit';
import TeacherCreate from './pages/Teachers/TeacherCreate';
import TeacherShow from './pages/Teachers/TeacherShow';

//Training Centers
import TrainingCenterCreate from './pages/TrainingCenters/TrainingCenterCreate';
import TrainingCenterEdit from './pages/TrainingCenters/TrainingCenterEdit';
import TrainingCenterShow from './pages/TrainingCenters/TrainingCenterShow';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            {/* Rutas protegidas para aprendices */}
            <Route path="/apprentice/create" element={<ApprenticeCreate />} />
            <Route path="/apprentice/edit/:id" element={<ApprenticeEdit />} />
            <Route path="/apprentice/show/:id" element={<ApprenticeShow />} />

            {/* Rutas para computers*/}
            <Route path="/computers/create" element={<ComputerCreate />} />
            <Route path="/computers/edit/:id" element={<ComputerEdit />} />
            <Route path="/computers/show/:id" element={<ComputerShow />} />

            {/* Rutas para courses */}
            <Route path="/courses" element={<CoursesShow />} />
            <Route path="/courses/create" element={<CoursesCreate />} />
            <Route path="/courses/edit/:id" element={<CoursesEdit />} />
            <Route path="/courses/show/:id" element={<CoursesShow />} />

            {/* Rustas de instructores */}
            <Route path="/teachers/edit" element={<TeacherEdit />} />
            <Route path="/teachers/create" element={<TeacherCreate />} />
            <Route path="/teachers/show/:id" element={<TeacherShow />} />

            {/* Rutas training centers */}
            <Route path="/training-centers/create" element={<TrainingCenterCreate />} />
            <Route path="/training-centers/edit/:id" element={<TrainingCenterEdit />} />
            <Route path="/training-centers/show/:id" element={<TrainingCenterShow />} />

            {/* Rutas quienes somos */}
            <Route path="/quienes-somos" element={<Aboutus />} />

            {/* Rutas areas */}
            <Route path="/areas/create" element={<AreasCreate />} />
            <Route path="/areas/edit/:id" element={<AreasEdit />} />
            <Route path="/areas/show/:id" element={<AreasShow />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;