import React from 'react';
import ReactMarkdown from 'react-markdown';
import './style.css';

function MarkdownRepresentation(props) {
	return (
		<React.Fragment>
			<ReactMarkdown>{props.mdrText}</ReactMarkdown>
		</React.Fragment>
	);
}

export default MarkdownRepresentation;
