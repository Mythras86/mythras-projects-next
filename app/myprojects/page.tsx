import "./page.scss";
import { Metadata } from "next";
import { projectData, ProjectModel } from "./projekt.data";
import Project from "./components/Project";

export const metadata: Metadata = {
  title: 'My Projects',
};

export default function ProjektekPage() {

  return (
    <main id='projectsCont'>
      <h1>My Projects</h1>
      
        {projectData.map((data: ProjectModel) => 
          <Project key={data.header} data={data}></Project>
        )}
    </main>
  );
}