import React, { useEffect, useState } from 'react';

const CalificationComponent = ({ state, selectOption }) => {

	const changeCssActive = (number) =>{
			var container = document.getElementById('circle-container');
			for (let i = 0; i < container.childNodes.length; i++) {
				if (i === number) {
					container.childNodes[i].classList.add('active');
				} else {
					container.childNodes[i].classList.remove('active');
				}
			}
		}

	const HandleClick = (number) => {
		selectOption(number);
		changeCssActive(number)
	};

	return (
		<div className='container '>
			<div className='row-12 calification-container' id='circle-container'>
				<div className='col col-sm-2 circle' onClick={() => HandleClick(0)}>
					<p>1</p>
				</div>
				<div className='col col-sm-2 circle' onClick={() => HandleClick(1)}>
					<p>2</p>
				</div>
				<div className='col col-sm-2 circle' onClick={() => HandleClick(2)}>
					<p>3</p>
				</div>
				<div className='col col-sm-2 circle' onClick={() => HandleClick(3)}>
					<p>4</p>
				</div>
				<div className='col col-sm-2 circle' onClick={() => HandleClick(4)}>
					<p>5</p>
				</div>
			</div>
		</div>
	);
};

export default CalificationComponent;
