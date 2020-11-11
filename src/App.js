import react, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import Logo from './Components/Logo/Logo.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import Rank from './Components/Rank/Rank.js'

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
    }
  }

  onInputChange=(event)=>{
      console.log(event.target.value);

  }

  onSubmit=()=>{
    console.log('click');
  }
  render(){
  return (
    <div className="App" className="wrapper">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>{/*
      <FaceRecognition />*/}
    </div>
  );
}
}
export default App;