import styled from 'styled-components';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';

export const PaginationContainer = styled.div`
	width: 100%;
	margin-top: ${dimens.margin_lg}px;
	padding-top: ${dimens.padding_md}px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border-top: 1px solid ${colors.darkDivider};
`;

export const CurrentPage = styled.div`
	background: ${colors.lightBackground};
	color: ${colors.darkFont};
	font-size: ${dimens.font_content}px;
	margin: 0;
	padding: ${dimens.padding_sm}px ${dimens.padding_lg}px;
`;

export const Button = styled.button`
	background: ${colors.lightBackground};
	border-color: ${colors.darkDivider};
	color: ${colors.darkFont};
	border-style: solid;
	font-size: ${dimens.font_content}px;
	margin: 0 ${dimens.margin_sm}px;
	padding: ${dimens.padding_sm}px ${dimens.padding_md}px;
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
