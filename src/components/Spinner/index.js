import React from 'react';
import PropTypes from 'prop-types';
import MDSpinner from 'react-md-spinner';

import * as dimens from '../../theme/dimens';
import * as colors from '../../theme/colors';

function Spinner({ size, color, ...rest }) {
	return <MDSpinner size={size} singleColor={color} {...rest} />;
}

Spinner.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
};

Spinner.defaultProps = {
	size: dimens.font_content,
	color: colors.lightFont,
};

export default Spinner;
