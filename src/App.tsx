import React,{Component } from 'react';
import './App.css';
// import ProjectList from "./components/ProjectList/projectList";
import Project from "./components/Project/Project";

interface Projects {
  title: string,
}



interface IState {
  isClicked: boolean;
  Projects: Array<Projects>
}

class App extends Component<{},IState> {
  public readonly state = {
    isClicked: false,
    Projects:[
      {title: "Node Developer"}]
    
  };

  private handleClick = () => {
    let copy = this.state.isClicked
    this.setState({ isClicked: !copy });
    console.log(this.state.isClicked)
  }
  render() {
    let show : any
    
    if(this.state.isClicked){
      show = (
        // <ProjectList List={this.state.Projects} />
        <div>
          <Project title="Node Developer" />
          <Project title="Typescript Developer" />
          <Project title="Habit Tracker" />
        </div>
        

        
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
