import styled from 'styled-components';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';

export const SortContainer = styled.div`
	display: flex;
    height: 30px;
    width: 30px;
    background-color: ${colors.lightBackground};
    border: 1px solid ${colors.darkDivider};
    border-radius: ${dimens.border_radius}px;
    align-items: center;
    justify-content: center;
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