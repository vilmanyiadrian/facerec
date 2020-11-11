import react, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
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
    }
  }

  onInputChange=(event)=>{
      console.log(event.target.value);

  }

  onSubmit=()=>{
    console.log('click');
    app.models.predict("apikey", "https://samples.clarifai.com/face-det.jpg").then(
      function(response){
        console.log(response);
      },
      function(err){

      }

      );

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