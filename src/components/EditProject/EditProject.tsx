import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import ProjectForm from "../ProjectForm/ProjectForm";
import type { DocumentReference, DocumentSnapshot } from "firebase/firestore";
import type { ProjectData } from "../../firebase-config";

const EditProject = () => {
  const [projectData, setProjectData] = useState<ProjectData>({} as ProjectData);
  const [projectDocRef, setProjectDocRef] = useState<DocumentReference>({} as DocumentReference);
  // to enable/disable project delete pop-up window
  const [delProjectClicked, setDelProjectClicked] = useState(false); 
  
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

  const handleDeleteProjectBtn = (): void => {
    // enable pop up window to confirm delete
    setDelProjectClicked(true);
  }

  const handleDeleteProjectPopup = async (del: boolean): Promise<void> => {
    // disable pop up window if user cancels delete
    if (!del) {
      setDelProjectClicked(false);
      return;
    }
    // else delete from firebase db
    try {
      await deleteDoc(projectDocRef);
      navigate("/admin");
    } catch (error) {
      console.error(error);
      alert("Failed to delete data :(");
      setDelProjectClicked(false); // close delete pop up
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
          <button 
            className="edit-project-del-btn"
            onClick={handleDeleteProjectBtn}
          >
            Delete Project
            </button>
        { delProjectClicked &&
          <div className="del-project-popup">
            <p>Are you sure you want to delete this project?</p>
            <ul>
              <li><button onClick={() => handleDeleteProjectPopup(true)}>Yes</button></li>
              <li><button onClick={() => handleDeleteProjectPopup(false)}>No</button></li>
            </ul>
          </div>

        }
      </>
      }
    </main>
  )
}

export default EditProject;