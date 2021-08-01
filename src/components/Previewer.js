import MarkdownRepresentation from './MarkdownRepresentation';

function Previewer(props) {
	return (
		<div className='previewer'>
			<div className='infoBar'>
				<div className='infoBarLeft'>
					<i className='fa fa-free-code-camp' aria-hidden='true'></i>
					<h3>Previewer</h3>
				</div>
				<i className='fa fa-window-maximize' aria-hidden='true'></i>
			</div>
			<div
				className='mdDisplay'
				style={{ display: 'inline-block' }}
				id='preview'>
				<MarkdownRepresentation mdrText={props.mdText} />
			</div>
		</div>
	);
}

export default Previewer;
