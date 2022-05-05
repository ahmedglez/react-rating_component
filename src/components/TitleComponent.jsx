import React from 'react';
import star from '../assets/images/icon-star.svg';

const TitleComponent = (props) => {
	return (
		<React.Fragment>
			<div className='container-fluid'>
				<div className='row text-container'>
					<div className='col-12'>
						<h1>Give us your rating!!</h1>
					</div>
				</div>
			</div>

			<div className='row stars-container'>
				<div className='col-2'>
					<img src={star} alt='star logo' />
				</div>
				<div className='col-2'>
					<img id='star-2' src={star} alt='star logo' />
				</div>
				<div className='col-2 '>
					<img id='star-3' src={star} alt='star logo' />
				</div>
			</div>
		</React.Fragment>
	);
};


export default TitleComponent
