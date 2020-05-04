import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Logo />
                <ImageLinkForm />
            {//    <FaceRecognition />
}
            </div>
        );
    }
}

export default App;