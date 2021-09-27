import React from 'react';
import {
	UserContainer,
	TitleContainer,
	UserAvatar,
	UserLogin,
	UserName,
	UserBio,
	UserInfo,
	UserEmail,
	FollowersContainer,
	FollowingContainer,
	Badge,
} from './styles';
import PropTypes from 'prop-types';

function UserItem({ user, onClick, ...rest }) {
	const handleClick = () => {
		onClick(user.login);
	};

	return (
		<UserContainer {...rest}>
			<TitleContainer>
				<UserAvatar onClick={handleClick} src={user.avatar_url} />
				{user.name && user.name.length > 0 && (
					<UserName onClick={handleClick}>{user.name}</UserName>
				)}
				<UserLogin onClick={handleClick}>{user.login}</UserLogin>
			</TitleContainer>
			{user.bio && user.bio.length > 0 && <UserBio>{user.bio}</UserBio>}
			{user.email && user.email.length > 0 && (
				<UserEmail>{user.email}</UserEmail>
			)}
			<UserInfo>
				<FollowersContainer>
					Seguidores: <Badge>{user.followers}</Badge>
				</FollowersContainer>
				<FollowingContainer>
					Seguindo: <Badge>{user.following}</Badge>
				</FollowingContainer>
			</UserInfo>
		</UserContainer>
	);
}

UserItem.propTypes = {
	onClick: PropTypes.func,
	user: PropTypes.object,
};

UserItem.defaultProps = {
	user: {},
};

export default UserItem;
