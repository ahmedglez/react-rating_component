import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ButtonComponent({ active }) {
	let navigate = useNavigate();

	const handleClick = () => {
		if (active) {
			navigate('/submited', { replace: true });
		}
	};
	return (
		<Button
			variant='success'
			id='submit-button'
			className='col-lg-8 mt-2'
			type='submit'
			onClick={handleClick}
			disabled={!active}>
			Submit
		</Button>
	);
}

export default ButtonComponent;
