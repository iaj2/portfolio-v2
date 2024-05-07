import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import EditProject from "./components/EditProject/EditProject";
import AddProject from "./components/AddProject/AddProject";

function App() {
  
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/:projectId" element={<EditProject />} />
      <Route path="/admin/add-project" element={<AddProject />} />
    </Routes>
    </>
  )
}

export default App;
