import react, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js'
import Logo from './Components/Logo/Logo.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import Rank from './Components/Rank/Rank.js'
import Clarifai from 'clarifai';

const app = new Clarifai.App({
apiKey:'be1303e74add4a3cacf6660a8b25c24e'
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageurl:''
    }
  }

  onInputChange=(event)=>{
      this.setState({input: event.target.value});

  }

  onSubmit=()=>{
    this.setState({imageurl: this.state.input});
    app.models.predict("d02b4508df58432fbb84e800597b8959", "https://samples.clarifai.com/face-det.jpg").then(
      function(response){
        console.log(response);
      },
      function(err){

      }

      );

  }
  render(){
  return (
    <div className="App wrapper">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
      <FaceRecognition imageurl={this.state.imageurl}/>
    </div>
  );
}
}
export default App;