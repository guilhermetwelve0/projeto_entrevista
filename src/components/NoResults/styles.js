import styled from 'styled-components';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';

export const NoResultsContainer = styled.div`
	width: 100%;
	text-align: center;
`;

export const NoResultsTitle = styled.h3`
	font-weight: normal;
	margin-left: ${dimens.margin_lg}px;
	margin-right: ${dimens.margin_lg}px;
	margin-bottom: ${dimens.margin_md}px;
	color: ${colors.darkFont};
`;
