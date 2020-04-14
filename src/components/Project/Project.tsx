import React, {Component} from "react";
import classes from "./Project.module.css";
type ProjectProps = {
    title: string;
    dateStarted? : string;
    progress? : number;
    click: boolean
}

interface ProjectState {
    click: boolean;
  }
  

class Project extends Component<ProjectProps,ProjectState> {
    public readonly state = {
        click: false,
    }
    render() {
        
        return(
            <div className={classes.Box}>
                <h1 onClick={this.props.click}>{this.props.title}</h1>
                <p>{this.props.dateStarted}</p>
                <p>Progress: {this.props.progress} %</p>
            </div>
        )
    }
}

export default Project;