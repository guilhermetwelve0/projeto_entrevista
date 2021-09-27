import styled from 'styled-components';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';
import Container from '../../components/Container';

export const Logo = styled.img`
	width: 100px;
	height: auto;
	&:hover {
		cursor: pointer;
	}
`;

export const Title = styled.h1`
	font-size: ${dimens.font_title}px;
	color: ${colors.darkFont};
	margin-top: 20px;
`;

export const SearchContainer = styled(Container)`
	display: flex;
	margin-bottom: 20px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SearchInput = styled.input`
	padding: ${dimens.padding_md}px;
	border-radius: ${dimens.padding_sm}px;
	border-color: ${colors.darkDivider};
	color: ${colors.darkFont};
	width: 240px;
	margin-bottom: 10px;
`;
