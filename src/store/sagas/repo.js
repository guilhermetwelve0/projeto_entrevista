import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import api from '../../services/api';
import axios from 'axios';
import { orderBy } from '../../utils/repo';

import { Actions, Types } from '../ducks/repo';

export function* getUserRepos({ payload }) {
	const PER_PAGE = 30;

	try {
		const currentUser = yield select((state) => state.repo.currentUser);
		const isDifferentUser =
			!currentUser || currentUser.login !== payload.user;

		const requestList = [];
		requestList.push(
			api.get(`/users/${payload.user}/repos`, {
				params: {
					per_page: PER_PAGE,
					page: payload.page,
				},
			})
		);

		if (isDifferentUser)
			requestList.push(api.get(`/users/${payload.user}`));

		const responseList = yield call(axios.all, requestList);

		const [repoResponse, userResponse] = responseList;

		const pageLinks = repoResponse.headers.link
			? repoResponse.headers.link.split(',')
			: [];
		const links = pageLinks.map((pageLink) => {
			let link = pageLink.substring(
				pageLink.length - 11,
				pageLink.length - 1
			);

			return link.replace(' ', '').replace('rel="', '');
		});

		const hasNext = links.findIndex((link) => link === 'next') > -1;
		const hasPrevious = links.findIndex((link) => link === 'prev') > -1;

		const repos = orderBy(repoResponse.data, payload.sort);
		yield put(
			Actions.getUserReposSuccess(
				repos,
				hasPrevious,
				hasNext,
				isDifferentUser ? userResponse.data : currentUser
			)
		);
	} catch (err) {
		console.log(err);
		yield put(
			Actions.getUserReposError(
				'Erro ao tentar recuperar informações do usuário. Tente novamente mais tarde.'
			)
		);
	}
}

export default function* rootSaga() {
	yield all([takeLatest(Types.GET_USER_REPOS_REQUEST, getUserRepos)]);
}
