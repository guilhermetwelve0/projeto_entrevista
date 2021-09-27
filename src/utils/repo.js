export const orderBy = (list, sort = 'asc') => {
	if (!list) return [];
	let array = [...list];
	const sortMethod = { asc: 1, desc: -1 };

	array.sort((a, b) => {
		if (a.stargazers_count < b.stargazers_count)
			return -1 * sortMethod[sort];
		if (a.stargazers_count > b.stargazers_count)
			return 1 * sortMethod[sort];
		return 0;
	});

	return array;
};
