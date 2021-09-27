import React from 'react';
import {
	RepoContainer,
	RepoName,
	RepoDescription,
	DetailsContainer,
	Badge,
} from './styles';
import PropTypes from 'prop-types';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import * as dimens from '../../theme/dimens';

function RepoItem({ repo, onClick, ...rest }) {
	const handleClick = () => {
		onClick(repo);
	};

	return (
		<RepoContainer {...rest}>
			<RepoName onClick={handleClick}>{repo.name}</RepoName>
			{repo.description && (
				<RepoDescription>{repo.description}</RepoDescription>
			)}
			<DetailsContainer>
				<Badge>
					<StarBorderIcon
						style={{
							marginRight: dimens.margin_sm,
							fontSize: dimens.font_content,
						}}
					/>
					{repo.stargazers_count}
				</Badge>
			</DetailsContainer>
		</RepoContainer>
	);
}

RepoItem.propTypes = {
	onClick: PropTypes.func,
	repo: PropTypes.object,
};

RepoItem.defaultProps = {
	repo: {},
};

export default RepoItem;
