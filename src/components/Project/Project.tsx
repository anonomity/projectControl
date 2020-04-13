import React, {Component} from "react";
import classes from "./Project.module.css";
type ProjectProps = {
    title: string;
}

class Project extends Component<ProjectProps> {
    
    render() {
        return(
            <div className={classes.Box}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Project;