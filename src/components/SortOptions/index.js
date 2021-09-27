import React from 'react';
import PropTypes from 'prop-types';
import { SortContainer } from './styles';
import SortIcon from '@material-ui/icons/Sort';

import * as colors from '../../theme/colors';

function SortOptions({ onClick, ...rest }) {
	return (
		<SortContainer onClick={onClick}>
			<SortIcon style={{ color: colors.darkFont }} />
		</SortContainer>
	);
}

SortOptions.propTypes = {
	onClick: PropTypes.func,
};

SortOptions.defaultProps = {};

export default SortOptions;
