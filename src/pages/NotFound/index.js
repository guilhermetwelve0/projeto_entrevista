import React from 'react';
import { NotFoundContainer, NotFoundText, NotFoundImage } from './styles';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

function NotFound() {
	const navigate = useNavigate();
	const notFound = require('../../assets/imgs/404.jpg');

	return (
		<NotFoundContainer>
			<NotFoundText>Página não encontrada</NotFoundText>
			<NotFoundImage src={notFound} />
			<Button type='outline' onClick={() => navigate('/github-lite')}>
				Voltar á página inicial
			</Button>
		</NotFoundContainer>
	);
}

export default NotFound;
