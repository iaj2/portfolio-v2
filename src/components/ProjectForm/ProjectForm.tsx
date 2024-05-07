import { useEffect, useState } from "react";
import { ProjectData } from "../../firebase-config";
import { useParams } from "react-router-dom";


interface Props {
  onSubmit: (arg0: React.FormEvent<HTMLFormElement>,arg1: ProjectData) => Promise<void>
  existingData: ProjectData | null
}

const ProjectForm = ({onSubmit, existingData}: Props) => {
  const {projectId} = useParams();

  // Form fields
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink, setGithubLink] = useState("");
    // The value for the tech used textarea, not the list of tech used
  const [techUsedField, setTechUsedField] = useState("");
    // list of tech used
  const [techUsed, setTechUsed] = useState<string[]>([]);

  useEffect(function onPageLoad() {
    // If there is existing data, set data fields accordingly.
    //    i.e, when this form is used to edit project data
    if(existingData != null) {
      setProjectName(existingData.name);
      setDescription(existingData.description);
      setGithubLink(existingData.githubLink);
      setTechUsed(existingData.tech);
    }
  },[existingData])

  const removeTechUsed = (label: string): void => {
    // Remove the tech that has the label given
    setTechUsed(techUsed.filter(item => item !== label))
  }

  const handleTechUsedKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    // If enter key is pressed, add the non-emptry string value from the tech used textarea to 
    // the list of technologies used and then reset the text area.
    if(e.key === "Enter") {
      e.preventDefault(); // prevent default behavior of spacebar or enter key
      if(techUsedField.trim() !== "") {
        setTechUsed([...techUsed, techUsedField.trim()]); // update list
        setTechUsedField(""); // reset text area
        
      }
    }
  }

  return (
    <form className="project-form" onSubmit={(e) => onSubmit (e, {
      id: projectId ? projectId : "",
      name: projectName,
      description,
      githubLink,
      tech: techUsed
    }
  )}>
      <label>
        Project name:
        <input type="text" onChange={(e) => setProjectName(e.target.value)} value={projectName} required />
      </label>
      <label>
        Description:
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} required />
      </label>
      <label>
        Github repository link:
        <input type="text" onChange={(e) => setGithubLink(e.target.value)} value={githubLink} required />
      </label>
      {/* Tech used: list of tags of technology used in the project. Has X button to remove from list. */}
      <ul className="project-form-tech-used">
        {techUsed.map((label, indx) => (
          <li key={indx}><button onClick={() => removeTechUsed(label)}>X</button>{label}</li>
        ))}
      </ul>
      <label>
        Technology used
        <textarea
          value={techUsedField}
          onChange={(e)=> setTechUsedField(e.target.value)}
          onKeyDown={handleTechUsedKeyPress}
          placeholder="Press enter add"
        />
      </label>
      <input className="project-form-submit" type="submit" value="Save" />
    </form>
  )
}

export default ProjectForm;