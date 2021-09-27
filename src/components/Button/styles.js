import styled from 'styled-components';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';

export const ButtonContainer = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${(props) => {
		if (props.type === 'primary') return colors.primary;
		return colors.lightBackground;
	}};
	border-color: ${(props) => {
		if (props.type === 'primary') return colors.primary;
		return colors.darkSecondaryFont;
	}};
	color: ${(props) => {
		if (props.type === 'primary') return colors.lightFont;
		return colors.darkSecondaryFont;
	}};
	border-style: solid;
	font-size: ${dimens.font_content}px;
	margin: ${dimens.padding_md}px;
	min-width: 160px;
	padding: ${(props) => {
		if (props.size === 'sm')
			return `${dimens.padding_sm}px ${dimens.padding_sm * 2}px`;
		if (props.size === 'lg')
			return `${dimens.padding_lg}px ${dimens.padding_lg * 2}px`;
		return `${dimens.padding_md}px ${dimens.padding_md * 2}px`;
	}};
	border-width: 2px;
	border-radius: ${dimens.border_radius}px;
	-webkit-box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.75);
	&:focus {
		outline: 0;
	}
	&:hover {
		cursor: pointer;
		background: ${(props) => {
			if (props.type === 'primary') return colors.primaryDark;
			return colors.darkDivider;
		}};
		border-color: ${(props) => {
			if (props.type === 'primary') return colors.primaryDark;
			return colors.darkFont;
		}};
		color: ${(props) => {
			if (props.type === 'primary') return colors.lightFont;
			return colors.darkFont;
		}};
	}
`;
