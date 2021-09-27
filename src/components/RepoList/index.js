import React from 'react';
import { ListContainer } from './styles';
import PropTypes from 'prop-types';

import RepoItem from '../RepoItem';

function RepoList({ data, onItemClick, ...rest }) {
	return (
		<ListContainer {...rest}>
			{data.map((repo) => (
				<RepoItem key={repo.id} repo={repo} onClick={onItemClick} />
			))}
		</ListContainer>
	);
}

RepoList.propTypes = {
	data: PropTypes.array,
	onItemClick: PropTypes.func,
};

RepoList.defaultProps = {
	data: [],
};

export default RepoList;
