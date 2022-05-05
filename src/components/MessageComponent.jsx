import React from 'react';

const MessageComponent = ({selected}) => {
	return (
		<div className='container'>
			<div className='row-12 message-container'>
				<div className='col-12'>
					<h2>{selected ? 'Thank you for your feddback' :'How did we do?' }</h2>
					<p>
						{selected ? 'Now, please touch the submit button to send us your rate' : 'Please let us know how we did with your support request. All feddback is appreciated to help us improve our offering'}
					</p>
				</div>
			</div>
		</div>
	);
};

export default MessageComponent;
