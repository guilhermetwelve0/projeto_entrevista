import { all } from 'redux-saga/effects';
import userSaga from './user';
import repoSaga from './repo';

export default function* rootSaga() {
	yield all([userSaga(), repoSaga()]);
}
