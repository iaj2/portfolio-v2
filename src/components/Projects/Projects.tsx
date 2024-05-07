import { useEffect, useState } from "react";
import BitmojiComputer from "../../assets/bitmoji-computer.png";
import GithubIcon from "../../assets/github.svg";
import RightArrowIcon from "../../assets/right-arrow.svg";
import { db } from "../../firebase-config";
import type { ProjectData } from "../../firebase-config";

import { collection, getDocs } from "firebase/firestore";



const Projects = () => {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);

  useEffect(function onPageLoad() {
    const getProjectData = async (): Promise<void> => {
      const queryProjectData = await getDocs(collection(db, "projects"));
      const projects: ProjectData[] = [];

      queryProjectData.forEach((doc) => {
        const data = doc.data() as ProjectData;
        projects.push(data);
      })
      setProjectData(projects);
    }

    getProjectData();
  }, [])
  
  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <div className="projects-bitmoji-imgs">
        <img src={BitmojiComputer} alt="bitmoji on computer" />
      </div>
      {projectData.map((data, indx) => (
          <div key={indx} className="projects-item-wrapper">
            <div className="projects-item-header">
              <h3>{data.name}</h3>
              <span>{/*Underline */}</span>
            </div>
            <p className="projects-item-description">
            {data.description}
            </p>
            <ul className="projects-item-tech">
              {
                data.tech.map((value, indx)=> (
                  <li key={indx}>{value}</li>
                ))
              }
            </ul>
            <a href={data.githubLink} target="_blank" className="projects-item-github">
              <img src={GithubIcon} alt="github" />
              <p>Description & Code</p>
              <img src={RightArrowIcon} alt="right arrow" />
            </a>
        </div>
      ))}
      <a href="https://github.com/iaj2" target="_blank" className="projects-github-cta">
        <p>View more on GitHub</p>
        <img src={RightArrowIcon} alt="right" />
      </a>
        
    </section>
  )
}

export default Projects;