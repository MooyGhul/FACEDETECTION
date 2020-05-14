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
            imageURL: ''
        }
    }

    onInputChange = (event) => {
        
        this.setState({input:event.target.value});
        console.log('event: ' + event.target.value);
        console.log('input: ' + this.input);
    }

    onSubmit = () => {
        this.setState({imageURL: this.state.input});
        console.log('1: '+this.state.input);
        console.log('2: '+this.imageUrl);
        app.models.predict(Clarifai.COLOR_MODEL, this.state.input).then(
            function(response) {
                console.log(response);
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
                <FaceRecognition imageURL={this.imageUrl} />
            </div>
        );
    }
}

export default App;