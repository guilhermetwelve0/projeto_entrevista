import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../services/api';
import axios from 'axios';

import { Actions, Types } from '../ducks/user';

export function* searchUser({ payload }) {
	const PER_PAGE = 10;

	try {
		const { data } = yield call(api.get, '/search/users', {
			params: {
				q: payload.query,
				per_page: PER_PAGE,
				page: payload.page,
			},
		});

		let userRequests = [];
		data.items.forEach((item, index) => {
			userRequests.push(api.get(`/users/${data.items[index].login}`));
		});

		const userResponses = yield call(axios.all, userRequests);
		const users = [];
		userResponses.forEach((response) => {
			users.push(response.data);
		});

		yield put(
			Actions.searchUserSuccess(
				users,
				data.total_count,
				Math.ceil(data.total_count / PER_PAGE),
				payload.page
			)
		);
	} catch (err) {
		console.log(err);
		yield put(
			Actions.searchUserError(
				'Erro ao pesquisar usuários. Tente novamente mais tarde.'
			)
		);
	}
}

export default function* rootSaga() {
	yield all([takeLatest(Types.SEARCH_USER_REQUEST, searchUser)]);
}
