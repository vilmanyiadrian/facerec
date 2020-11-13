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
      imageurl:'',
      box: {}
    }
  }

  calculateFaceLocation=(data)=>
  {
    const clarifaiface = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage')
    const width = Number(image.width);
    const height = Number(image.height);
    return{

      leftCol: clarifaiface.left_col*width,
      topRow: clarifaiface.top_row*height,
      rightCol: width-(clarifaiface.right_col*width),
      bottomRow: height-(clarifaiface.bottom_row*height)
    }
  }

displayFaceBox=(box)=>{

  this.setState({box: box})
  console.log(box);
}

  onInputChange=(event)=>{
      this.setState({input: event.target.value});

  }

  onSubmit=()=>{
    this.setState({imageurl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response=>this.displayFaceBox(
        this.calculateFaceLocation(response)))
    .catch(error=>console.log(error));
  }

  render(){
  return (
    <div className="App wrapper">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
      <FaceRecognition box={this.state.box} imageurl={this.state.imageurl}/>
    </div>
  );
}
}
export default App;