import React from 'react';
import { PaginationContainer, Button, CurrentPage } from './styles';
import PropTypes from 'prop-types';

function Pagination({
	currentPage,
	totalPages,
	clickNext,
	clickPrevious,
	hasPrevious,
	hasNext,
	...rest
}) {
	return (
		<PaginationContainer {...rest}>
			{(currentPage > 1 || hasPrevious) && (
				<Button onClick={clickPrevious}>{'<'}</Button>
			)}
			<CurrentPage>Página {currentPage}</CurrentPage>
			{(currentPage < totalPages || hasNext) && (
				<Button onClick={clickNext}>{'>'}</Button>
			)}
		</PaginationContainer>
	);
}

Pagination.propTypes = {
	currentPage: PropTypes.number,
	totalPages: PropTypes.number,
	clickNext: PropTypes.func,
	clickPrevious: PropTypes.func,
	hasPrevious: PropTypes.bool,
	hasNext: PropTypes.bool,
};

Pagination.defaultProps = {
	currentPage: 1,
	totalPages: 1,
	hasPrevious: false,
	hasNext: false,
};

export default Pagination;
