import React from 'react';
import { ListContainer, TotalResults } from './styles';
import PropTypes from 'prop-types';

import UserItem from '../UserItem';

function UserList({
	data,
	totalResults,
	totalPages,
	currentPage,
	onItemClick,
	...rest
}) {
	return (
		<ListContainer {...rest}>
			{totalResults > 0 && (
				<TotalResults>{totalResults} usuários encontrados</TotalResults>
			)}
			{data.map((user) => (
				<UserItem key={user.id} user={user} onClick={onItemClick} />
			))}
		</ListContainer>
	);
}

UserList.propTypes = {
	data: PropTypes.array,
	totalResults: PropTypes.number,
	totalPages: PropTypes.number,
	currentPage: PropTypes.number,
	onItemClick: PropTypes.func,
};

UserList.defaultProps = {
	data: [],
	totalResults: 0,
	totalPages: 1,
	currentPage: 1,
};

export default UserList;
