import React, { useState, createContext } from 'react';
import useInitalState from '../hooks/useInitalState';

const AppContext = createContext(useInitalState);

export default AppContext
