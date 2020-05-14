import React from 'react';

const FaceRecognition = ({imageURL}) => {
    console.log('imageURL'+ imageURL);
    return (
        <div className='center'>
            <img alt='' src={imageURL} />
        </div>
    );
}

export default FaceRecognition;