import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import type { ProjectData } from "../../firebase-config";

import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";


const AdminPage = () => {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);

  useEffect(function onPageLoad() {
    const getProjectData = async (): Promise<void> => {
      const queryProjectData = await getDocs(collection(db, "projects"));
      const projects: ProjectData[] = [];

      // Add each project item from db to array as ProjectData objects
      queryProjectData.forEach((doc) => {
        const data = {id: doc.id, ...doc.data()} as ProjectData;
        projects.push(data);
      })
      setProjectData(projects);
    }

    getProjectData();
  }, [])

  return (
    <>
    <main>
      <section className="edit-projects-section">
        <h1>Add/Edit Projects</h1>
        <ul className="editable-project-items">
          {
            projectData.map((data, indx) => (
              <li key={indx}>
                <Link to={`/admin/${data.id}`}>
                  Edit {data.name} project
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
      <Link className="add-project-link" to="/admin/add-project">
        Add Project
      </Link>
    </main>
    </>
    
  )
}

export default AdminPage;