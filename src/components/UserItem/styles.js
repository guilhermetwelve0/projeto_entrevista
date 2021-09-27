import styled from 'styled-components';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';

export const UserContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	border-top: 1px solid ${colors.darkDivider};
	padding: ${dimens.padding_lg}px 0;
	margin: 0 ${dimens.margin_md}px;
`;

export const TitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	flex: 1;
	flex-wrap: wrap;
`;

export const UserAvatar = styled.img`
	border-radius: ${dimens.border_radius}px;
	width: 20px;
	height: 20px;
	margin: ${dimens.margin_sm}px 10px ${dimens.margin_sm}px 0;
	&:hover {
		cursor: pointer;
	}
`;

export const UserLogin = styled.div`
	display: flex;
	flex-wrap: nowrap;
	margin: ${dimens.margin_sm}px 0;
	display: block;
	color: ${colors.darkFont};
	&:hover {
		text-decoration: underline;
		color: ${colors.darkFont};
		cursor: pointer;
	}
	&:visited {
		color: ${colors.darkFont};
	}
`;

export const UserName = styled.div`
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

export const UserBio = styled.p`
	color: ${colors.darkFont};
	width: 100%;
	margin: 0;
	padding-top: ${dimens.padding_md}px;
`;

export const UserInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	padding-top: ${dimens.padding_md}px;
`;

export const UserEmail = styled.div`
	color: ${colors.darkSecondaryFont};
	font-size: ${dimens.font_content}px;
`;

export const FollowersContainer = styled.div`
	color: ${colors.darkFont};
	font-size: ${dimens.font_details}px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const FollowingContainer = styled.div`
	color: ${colors.darkFont};
	font-size: ${dimens.font_details}px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Badge = styled.div`
	background-color: ${colors.accent};
	color: ${colors.lightFont};
	border-radius: ${dimens.margin_md}px;
	height: ${dimens.margin_md * 2}px;
	padding: 0 ${dimens.padding_sm}px;
	font-size: ${dimens.font_badge}px;
	line-height: ${dimens.font_details}px;
	vertical-align: middle;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 0 0 ${dimens.margin_md}px;
`;
