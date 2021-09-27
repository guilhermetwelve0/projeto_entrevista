import styled from 'styled-components';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';

export const RepoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	border-top: 1px solid ${colors.darkDivider};
	padding: ${dimens.padding_lg}px 0;
	margin: 0 ${dimens.margin_md}px;
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
	justify-content: flex-end;
	margin: ${dimens.margin_md}px 0 0 0;
	width: 100%;
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
