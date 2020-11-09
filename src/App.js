import './App.css';
import Navigation from './Components/Navigation/Navigation.js'
import Logo from './Components/Logo/Logo.js'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js'
import Rank from './Components/Rank/Rank.js'

function App() {
  return (
    <div className="App" class='wrapper'>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />{/*
      <FaceRecognition />*/}
    </div>
  );

}
export default App;
