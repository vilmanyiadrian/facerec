import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onSubmit}) => {
	return ( 
<div>
<p className='f2 center'>
{'Face Detector'}

</p>

<div className='center'>
	<div className='form pa4 br3 shadow-5 center'>
	<p className='f6 pr4'>URL</p>
	<input className='f3 w-70 center' type='tex' onChange={onInputChange}/>

	<button className='w-30 grow f3 link ph3 pv2 dib white' onClick={onSubmit} style={{background: 'orange'}}>Detect</button>

	</div>
</div>
</div>

		);
}

export default ImageLinkForm;