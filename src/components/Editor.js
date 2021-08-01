import './style.css';
import React from 'react';

function Editor(props) {
	return (
		<div className='editor'>
			<div className='infoBar'>
				<div className='infoBarLeft'>
					<i className='fa fa-free-code-camp' aria-hidden='true'></i>
					<h3>Editor</h3>
				</div>
				<i className='fa fa-window-maximize' aria-hidden='true'></i>
			</div>

			<textarea
				id='editor'
				className='inputBox'
				type='text'
				placeholder='enter markdown here..'
				onChange={props.updateDisplayedText}>
				{props.inputText}
			</textarea>
		</div>
	);
}

export default Editor;
