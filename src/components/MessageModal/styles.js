import styled from 'styled-components';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';

export const MessageContainer = styled.div`
	position: absolute;
	top: 30px;
	left: 0;
	right: 0;
	margin: ${dimens.margin_xl}px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-top: 1px solid ${colors.darkDivider};
	padding: ${dimens.padding_md}px;
	background-color: ${colors.lightBackground};
	border-radius: ${dimens.border_radius}px;
	-webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
`;

export const MessageText = styled.p`
	color: ${colors.darkSecondaryFont};
	font-size: ${dimens.font_content}px;
	margin-left: ${dimens.margin_md}px;
`;
