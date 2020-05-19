import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center'>
            <div className= 'absolute mt2'>
                <img id='inputimage' alt='' src={imageUrl} height='500px' width='auto'/>
                <div className='bounding-box' style={{left: box.leftCol, top: box.topRow, right: box.rightCol, bottom: box.bottomRow}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;