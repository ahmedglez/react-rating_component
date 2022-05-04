import React, { useState } from 'react';

const initialValue = {
	selected: null,
	active: false,
};

const useInitalState = () => {
	const [state, setState] = useState(initialValue);

	function selectOption(number) {
		setState({
			active: true,
			selected: number,
		});
	}

	return {
		state,
		selectOption,
	};
};

export default useInitalState;
