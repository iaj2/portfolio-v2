import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const AdminPage = lazy(() => import("./pages/AdminPage/AdminPage"));
const EditProject = lazy(() => import("./components/EditProject/EditProject"));
const AddProject = lazy(() => import("./components/AddProject/AddProject"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoute/ProtectedRoute"));
const AdminLoginPage = lazy(() => import("./pages/AdminLoginPage/AdminLoginPage"))

function App() {
  
  return (
    <>
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
        <Route path="/admin/:projectId" element={<ProtectedRoute><EditProject /></ProtectedRoute>} />
        <Route path="/admin/add-project" element={<ProtectedRoute><AddProject /></ProtectedRoute>} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
      </Routes>
    </Suspense>
   
    </>
  )
}

export default App;
