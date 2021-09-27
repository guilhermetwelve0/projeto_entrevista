import styled from 'styled-components';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';

export const ListContainer = styled.div`
	width: 100%;
	margin-top: ${dimens.margin_lg}px;
`;

export const TotalResults = styled.h3`
	font-weight: normal;
	margin-left: ${dimens.margin_md}px;
	margin-bottom: ${dimens.margin_md}px;
	color: ${colors.darkFont};
`;
