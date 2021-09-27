const INITIAL_STATE = {
	loading: false,
	users: [],
	totalCount: 0,
	totalPages: 0,
	currentPage: 1,
	hasError: false,
	errorMessage: '',
};

export const Types = {
	SEARCH_USER_REQUEST: 'SEARCH_USER_REQUEST',
	SEARCH_USER_SUCCESS: 'SEARCH_USER_SUCCESS',
	SEARCH_USER_ERROR: 'SEARCH_USER_ERROR',

	SET_CURRENT_USER_REQUEST: 'SET_CURRENT_USER_REQUEST',
	SET_CURRENT_USER_SUCCESS: 'SET_CURRENT_USER_SUCCESS',
	SET_CURRENT_USER_ERROR: 'SET_CURRENT_USER_ERROR',
};

export const Actions = {
	searchUser: (query, page) => ({
		type: Types.SEARCH_USER_REQUEST,
		payload: { query, page },
	}),
	searchUserSuccess: (users, totalCount, totalPages, currentPage) => ({
		type: Types.SEARCH_USER_SUCCESS,
		payload: { users, totalCount, totalPages, currentPage },
	}),
	searchUserError: (message) => ({
		type: Types.SEARCH_USER_ERROR,
		payload: { message },
	}),
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.SEARCH_USER_REQUEST:
			return {
				...state,
				loading: true,
				hasError: false,
				errorMessage: '',
			};
		case Types.SEARCH_USER_SUCCESS:
			return {
				...state,
				users: action.payload.users,
				totalCount: action.payload.totalCount,
				totalPages: action.payload.totalPages,
				currentPage: action.payload.currentPage,
				hasError: false,
				errorMessage: '',
				loading: false,
			};
		case Types.SEARCH_USER_ERROR:
			return {
				...state,
				loading: false,
				hasError: true,
				errorMessage: action.payload.message,
			};

		default:
			return state;
	}
}
