import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageurl, box}) => {
	return ( 
<div className='center ma'>
<div className='absolute mt2'>
<img id='inputimage' alt='' src={imageurl} height="200"/>
<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
</div>
</div>
		);
}

export default FaceRecognition;