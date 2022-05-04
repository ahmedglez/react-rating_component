import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import logo from '../assets/images/illustration-thank-you.svg';
import '../styles/ResponsePage.scss'
import CountedComponent from '../components/CountedComponent';

const ResponsePage = (props) => {
	const { state } = useContext(AppContext);
	return (
		<div className='main-container'>
			{/* Logo */}
			<div className='logo-container'>
				<img src={logo} alt='' />
			</div>

			{/* Counted */}
			<CountedComponent number={state.selected + 1} />

			<h2>Thank you!</h2>
			<p>
				We appreciate you taking the time to give a rating. If you ever need
				more support, don't hesitate to get in touch!
			</p>
		</div>
	);
};

export default ResponsePage;
