import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onSubmit}) => {
	return ( 
<div>
<p className='f4 center'>
{'Face Detector'}
</p>
<div className='center'>
	<div className='form pa4 br3 shadow-5 center'>
	<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
	<button className='w-30 grow f4 link ph3 pv2 dib white' onClick={onSubmit} style={{background: 'orange'}}>Detect</button>
	</div>
</div>
</div>

		);
}

export default ImageLinkForm;