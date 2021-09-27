import React from 'react';
import {
	BackgroundContainer,
	RepoContainer,
	TitleContainer,
	CloseButton,
	RepoName,
	RepoDescription,
	DetailsContainer,
	LanguageContainer,
	Marker,
	Badge,
	LinkContainer,
	Link,
} from './styles';
import PropTypes from 'prop-types';
import Button from '../Button';

import StarBorderIcon from '@material-ui/icons/StarBorder';
import LinkIcon from '@material-ui/icons/Link';
import CloseIcon from '@material-ui/icons/Close';

import * as dimens from '../../theme/dimens';

function RepoDetails({ repo, show, onClose, ...rest }) {
	if (!show) return <></>;

	return (
		<BackgroundContainer position={window.scrollY}>
			<RepoContainer {...rest}>
				<TitleContainer>
					<RepoName>{repo.name}</RepoName>
					<CloseButton onClick={onClose}>
						<CloseIcon fontSize='small' />
					</CloseButton>
				</TitleContainer>
				{repo.description && (
					<RepoDescription>{repo.description}</RepoDescription>
				)}
				<DetailsContainer>
					<LanguageContainer>
						<Marker />
						{repo.language}
					</LanguageContainer>
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
				<LinkContainer>
					<Link target='_blank' href={repo.html_url}>
						<Button type='outline'>
							<LinkIcon
								style={{ marginRight: dimens.margin_md }}
								fontSize='small'
							/>
							Ir para repositório
						</Button>
					</Link>
				</LinkContainer>
			</RepoContainer>
		</BackgroundContainer>
	);
}

RepoDetails.propTypes = {
	repo: PropTypes.object,
	show: PropTypes.bool,
	onClose: PropTypes.func,
};

RepoDetails.defaultProps = {
	repo: {},
	show: false,
};

export default RepoDetails;
