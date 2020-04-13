import React, {Component} from "react";

type ProjectProps = {
    title: string;
}

class Project extends Component<ProjectProps> {
    
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Project;