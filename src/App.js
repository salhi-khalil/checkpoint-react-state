import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
     fullName:"Khalil salhi",
     bio:"I am a Chemical Engineer And I am taking my steps to be a web developer",
     imgSrc: "https://avatars.githubusercontent.com/u/82417339?s=400&u=c4a1834fd3d93f469b7fa5e1c794e1d95620533e&v=4",
     profession:"Engineer",
     show : false
   }
  }
  toggleClick=()=> this.setState({ show: !(this.state.show)});
  componentDidMount(){
    setInterval(() => {this.setState({time:new Date().toString()})},1000)
  }

  render() { 
    return (  
    <div  style={{ textAlign:"center"}}>
      <h5> {this.state.time}</h5>
      <div className ={this.state.show ? "returned":"none"} >
      <img src={this.state.imgSrc} alt= " profilImg " width="200" />
      <h2>{this.state.fullName}</h2>
      <p>{this.state.bio}</p>
      <h4>{this.state.profession}</h4>
      </div>
    <button onClick= {this.toggleClick}> {this.state.show ? "Hide":"Show"} Profile </button>
    </div>
      

    );
  }
}
 
export default App;
