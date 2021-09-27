import styled from 'styled-components';
import Container from '../../components/Container';
import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';

export const NotFoundContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: ${dimens.padding_md}px;
	background-color: ${colors.lightBackground};
`;

export const NotFoundText = styled.p`
	color: ${colors.darkFont};
	font-size: ${dimens.font_title}px;
`;

export const NotFoundImage = styled.img`
	max-width: 300px;
	height: auto;
	margin-bottom: ${dimens.margin_lg}px;
	border-radius: ${dimens.border_radius}px;
	-webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
`;
