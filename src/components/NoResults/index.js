import React from 'react';
import { NoResultsContainer, NoResultsTitle } from './styles';
import PropTypes from 'prop-types';

function NoResults({ query, ...rest }) {
	return (
		<NoResultsContainer {...rest}>
			<NoResultsTitle>
				Não foi possível encontrar usuários que correspondam a '{query}'
			</NoResultsTitle>
		</NoResultsContainer>
	);
}

NoResults.propTypes = {
	query: PropTypes.string,
};

NoResults.defaultProps = {
	query: '',
};

export default NoResults;
