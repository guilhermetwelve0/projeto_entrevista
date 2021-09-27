import { combineReducers } from 'redux';
import repo from './repo';
import user from './user';

const reducers = combineReducers({
	repo,
	user,
});

export default reducers;
