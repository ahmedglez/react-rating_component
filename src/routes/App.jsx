import React from 'react';
import '../styles/App.css';
import SubmitPage from '../pages/SubmitPage';
import ResponsePage from '../pages/ResponsePage';
import AppContext from '../context/AppContext';
import useInitalState from '../hooks/useInitalState';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
	const initalState = useInitalState();
	return (
		<AppContext.Provider value={initalState}>
			<Routes>
				<Route path='/' element={<SubmitPage />} />
				<Route path='submited' element={<ResponsePage/>}/>
			</Routes>
		</AppContext.Provider>
	);
}

export default App;
