import React, { useContext } from 'react';
import '../styles/SubmitPage.scss';
import TitleComponent from '../components/TitleComponent';
import MessageComponent from '../components/MessageComponent';
import CalificationComponent from '../components/CalificationComponent';
import AppContext from '../context/AppContext';
import ButtonComponent from '../components/ButtonComponent';

const SubmitPage = (props) => {
	const { state, selectOption } = useContext(AppContext);
	return (
		<div className='submit-container container-fluid'>
			{state.active ===false ? <TitleComponent /> : null}
			<MessageComponent selected={state.active}/>
			<CalificationComponent state={state} selectOption={selectOption} />
			<ButtonComponent active={state.active} />
		</div>
	);
};

export default SubmitPage;
