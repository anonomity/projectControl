import React, {Component} from "react";
import Project from "../Project/Project";

interface Projects {
    title: string,
  }

interface ProjectItems {
    List: Array<Projects>,
   // dateStarted: string
   
}

class ProjectList extends Component<{},ProjectItems> {
    render(){
        // return this.props.List.map((project, index) => {
        return (
        //   <Project
        //     title={project.title}
        //   />
        <div>
            <h1>Test</h1>
        </div>
        );
    //   });
    }
    
}
export default ProjectList