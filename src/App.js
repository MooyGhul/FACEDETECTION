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
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value);
    }

    onSubmit = () => {
        console.log('click');
        app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
            function(response) {
                console.log();
            },
            function(err) {
            // there was an error
            }
        );
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
                    onButtonSubmit={this.onSubmit}
                />
                <FaceRecognition />
            </div>
        );
    }
}

export default App;