import React from 'react';
import { MainContainer } from './styles';

function Container({ children, ...rest }) {
	return <MainContainer {...rest}>{children}</MainContainer>;
}

export default Container;
