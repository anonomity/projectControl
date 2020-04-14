import React, {Component} from "react";
import Project from "../Project/Project";

interface Projects {
    title: string;
    dateStarted? : string;
    progress? : number;
    click: boolean;
  }

interface ProjectItems {
    list: Array<Projects>,
   // dateStarted: string
}



class ProjectList extends Component<ProjectItems,{}> {
    render(){
        return this.props.list.map((project, index) => {
        return (
          <Project
            click={() => this.props.click(index)}
            key={index}
            title={project.title}
            progress={project.progress}
            dateStarted={project.dateStarted}
          />
      
        );
      });
    }
    
}
export default ProjectList