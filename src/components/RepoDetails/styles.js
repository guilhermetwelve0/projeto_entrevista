import styled from 'styled-components';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';

export const BackgroundContainer = styled.div`
	position: absolute;
	top: ${(props) => props.position}px;
	width: 100%;
	height: 100%;
	background-color: ${colors.transparentDarkBackground};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const RepoContainer = styled.div`
	min-width: 300px;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	border-top: 1px solid ${colors.darkDivider};
	padding: ${dimens.padding_lg}px 0;
	margin: 0 ${dimens.margin_md}px;
	background-color: ${colors.lightBackground};
	border-radius: ${dimens.border_radius}px;
	padding: ${dimens.padding_md}px;
	-webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
`;

export const TitleContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding-bottom: ${dimens.padding_md}px;
	border-bottom: 1px solid ${colors.darkDivider};
`;

export const CloseButton = styled.div`
	background: ${colors.lightBackground};
	border-color: ${colors.darkDivider};
	color: ${colors.darkFont};
	border-style: solid;
	height: 24px;
	width: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-width: 1px;
	border-radius: ${dimens.border_radius}px;
	-webkit-box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
	&:focus {
		outline: 0;
	}
	&:hover {
		cursor: pointer;
		background: ${colors.darkDivider};
	}
`;

export const RepoName = styled.div`
	display: flex;
	flex-wrap: nowrap;
	margin: ${dimens.margin_sm}px 0;
	margin: 0 10px 0 0;
	color: ${colors.accent};
	font-size: ${dimens.font_subtitle}px;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
		color: ${colors.accent};
		cursor: pointer;
	}
	&:visited {
		color: ${colors.accent};
	}
`;

export const RepoDescription = styled.p`
	color: ${colors.darkFont};
	width: 100%;
	margin: 0;
	padding-top: ${dimens.padding_md}px;
`;

export const DetailsContainer = styled.div`
	flex-direction: row;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: ${dimens.margin_md}px 0 0 0;
	width: 100%;
	padding-bottom: ${dimens.padding_md}px;
	border-bottom: 1px solid ${colors.darkDivider};
`;

export const LanguageContainer = styled.div`
	flex-direction: row;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${colors.darkSecondaryFont};
	font-size: ${dimens.font_content}px;
`;

export const Marker = styled.div`
	height: ${dimens.marker_size}px;
	width: ${dimens.marker_size}px;
	border-radius: ${dimens.marker_size / 2}px;
	background-color: ${colors.accent};
	margin-right: ${dimens.margin_sm}px;
`;

export const Badge = styled.div`
	border: 1px solid ${colors.darkDivider};
	color: ${colors.darkSecondaryFont};
	border-radius: ${dimens.margin_md}px;
	height: ${dimens.margin_md * 2}px;
	padding: 0 ${dimens.padding_sm}px;
	font-size: ${dimens.font_badge}px;
	line-height: ${dimens.font_details}px;
	vertical-align: middle;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LinkContainer = styled.div`
	flex-direction: row;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: ${dimens.margin_md}px 0 0 0;
	width: 100%;
`;

export const Link = styled.a`
	text-decoration: none;
	&:hover {
		text-decoration: none;
	}
	&:focus {
		outline: 0;
	}
`;
