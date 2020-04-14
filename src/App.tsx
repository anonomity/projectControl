import React,{Component } from 'react';
import './App.css';
import ProjectList from "./components/ProjectList/projectList";


interface Project {
  title: string,
  dateStarted? : string;
  progress? : number;
  
}

interface Projects {
  list: Array<Project>
  click: boolean;
}

interface IState {
  isClicked: boolean;
  Projects: Array<Project>
}


class App extends Component<{},IState> {
  public readonly state = {
    isClicked: false,
    Projects:[
      {title: "Node Developer", progress: 4, dateStarted: new Date('2020-04-5').toString()},
      {title: "TypeScript Language", progress: 5, dateStarted: new Date('2020-04-10').toString()},
      {title: "Machine Learning Course"}]
    
  };

  private handleClick = () => {
    let copy = this.state.isClicked
    this.setState({ isClicked: !copy });
    console.log(this.state.isClicked)
  }


  private deleteProjectHandler = (indexProject : number) => {
    const project = this.state.Projects;
    project.splice(indexProject, 1);
    this.setState({
      Projects: project
    });
  };

  render() {
    let show : any
    
    if(this.state.isClicked){
      show = (
        <ProjectList list= {this.state.Projects} click= {this.deleteProjectHandler} />             
      )
    }
    else {
      show = (
        <h1 onClick = {this.handleClick}>Organize Projects</h1>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          
          {show}
        </header>
      </div>
    );
  }
  
}

export default App;
