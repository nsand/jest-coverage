import React from 'react';
import Icon from './Icon';

const Button = ({ children, className }) => {
	let classnames = 'btn';
	if (className) {
		classnames += ` ${className}`;
	}
	return (
		<button type="button" className={classnames}>
			<Icon name="save" />
		</button>
	);
};

export default Button;
