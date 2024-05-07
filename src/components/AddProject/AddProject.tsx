import ProjectForm from "../ProjectForm/ProjectForm";
import { addDoc, collection } from "firebase/firestore";
import type { FormEvent } from "react";
import { db, type ProjectData } from "../../firebase-config";
import { useNavigate } from "react-router-dom";



const AddProject = () => {

  const navigate = useNavigate();
  
  const projectFormOnSubmit = async (e:FormEvent<HTMLFormElement>, data: ProjectData ): Promise<void> => {
    e.preventDefault();
    try {
      // get reference to the projects collection in db
      const projectCollectionRef = collection(db,  "projects");

      // add new db item
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {id, ...newDoc} = data;
      await addDoc(projectCollectionRef, newDoc)

      alert("Successfully added new project data.");
      navigate("/admin");

    } catch (error) {
      console.error(error);
      alert("Failed to add new project data.")
    }
    
  }

  return (
    <main>
      <h1>Add New Project</h1>
      <ProjectForm 
        onSubmit={projectFormOnSubmit}
        existingData={null}
        />
    </main>
  )
}

export default AddProject;