import React, { useEffect } from 'react';
import { MessageContainer, MessageText } from './styles';
import PropTypes from 'prop-types';

import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';

import * as dimens from '../../theme/dimens';
import * as colors from '../../theme/colors';

function MessageModal({ message, type, show, onClose, ...rest }) {
	useEffect(() => {
		const closeModal = () => {
			setTimeout(onClose, 10000);
		};

		closeModal();
	}, [show]);

	const icons = {
		error: (
			<ErrorIcon
				style={{
					marginRight: dimens.margin_sm,
					fontSize: dimens.font_content,
					color: colors.error,
				}}
			/>
		),
		warning: (
			<WarningIcon
				style={{
					marginRight: dimens.margin_sm,
					fontSize: dimens.font_content,
				}}
			/>
		),
	};

	if (!show) return <></>;

	return (
		<MessageContainer {...rest}>
			{icons[type]}
			<MessageText>{message}</MessageText>
		</MessageContainer>
	);
}

MessageModal.propTypes = {
	message: PropTypes.string,
	type: PropTypes.oneOf(['error', 'warning']),
	onClose: PropTypes.func,
	show: PropTypes.bool,
};

MessageModal.defaultProps = {
	message: '',
	type: 'error',
	show: false,
};

export default MessageModal;
