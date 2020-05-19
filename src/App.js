import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import './App.css'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey: '61546c91f662465f945369373770ec8a'
});

const particlesOptions = {
    particles: {
        number: {
            value: 150,
            density:{
                enable: true,
                value_area: 800
            }
        }/*,
        line_linked: {
            shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 100
            }
        }*/
    }
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imageUrl: '',
            box: []
        }
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        console.log(clarifaiFace);
        const image = document.getElementById('inputimage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifaiFace.left_col*width,
            rightCol: width-clarifaiFace.right_col*width,
            topRow: clarifaiFace.top_row*height,
            bottomRow: height-clarifaiFace.bottom_row*height
        }
    }

    displayFaceBox = (box) => {
        this.setState({box: box});
        console.log(box);
    }

    onInputChange = (event) => {
        
        this.setState({input:event.target.value});
        console.log('event: ' + event.target.value);
        console.log('input: ' + this.input);
    }

    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input});
        app.models
            .predict(
                Clarifai.FACE_DETECT_MODEL, 
                // why cannot use this.state.imageUrl
                this.state.input)
            .then(response =>
                this.displayFaceBox(this.calculateFaceLocation(response)))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                <Particles className='particles' params={particlesOptions}/>
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onButtonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
            </div>
        );
    }
}

export default App;