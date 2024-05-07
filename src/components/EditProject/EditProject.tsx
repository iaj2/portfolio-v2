import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import ProjectForm from "../ProjectForm/ProjectForm";
import type { DocumentReference, DocumentSnapshot } from "firebase/firestore";
import type { ProjectData } from "../../firebase-config";

const EditProject = () => {
  const [projectData, setProjectData] = useState<ProjectData>({} as ProjectData);
  const [projectDocRef, setProjectDocRef] = useState<DocumentReference>({} as DocumentReference);
  
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(function onPageLoad() {
    const getProjectData = async(): Promise<void> => {
      if (projectId) {
        // set reference to the project doc
        const docRef = doc(db, "projects", projectId);
        setProjectDocRef(docRef);
        
        // set project data as ProjectData object
        const projectDoc: DocumentSnapshot = await getDoc(docRef);
        const data = {id: projectDoc.id, ...projectDoc.data()} as ProjectData;
        setProjectData(data);
      }
    }
    getProjectData();
  }, [projectId])

  const projectFormOnSubmit = async (e: React.FormEvent<HTMLFormElement>, data: ProjectData): Promise<void> => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {id, ...newData} = data;
      await updateDoc(projectDocRef, newData)

      alert("Successfully updated project data");
      navigate("/admin");
    } catch (error) {
      console.error(error);
      alert("Failed to save project data");
    }
  }
  return (
    <main>
      { Object.keys(projectData).length > 0 &&
      <>
        <h1>Edit {`${projectData.name}`} Project</h1>
        <ProjectForm 
          onSubmit={projectFormOnSubmit}
          existingData={projectData}
          />
      </>
      }
    </main>
  )
}

export default EditProject;