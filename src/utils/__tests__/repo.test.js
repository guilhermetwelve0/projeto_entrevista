import { orderBy } from '../../utils/repo';

describe('sortRepos', () => {
	const array = [
		{
			stargazers_count: 3
		},
		{
			stargazers_count: 2
		},
		{
			stargazers_count: 5
		},
		{
			stargazers_count: 1
		},
		{
			stargazers_count: 4
		}
	];

	it('should sort an array in asc order', () => {

		const sortedArray = orderBy(array);
		expect(sortedArray).toEqual([
			{
				stargazers_count: 1
			},
			{
				stargazers_count: 2
			},
			{
				stargazers_count: 3
			},
			{
				stargazers_count: 4
			},
			{
				stargazers_count: 5
			}
		]);
	});

	it('should sort an array in desc order', () => {

		const sortedArray = orderBy(array, 'desc');
		expect(sortedArray).toEqual([
			{
				stargazers_count: 5
			},
			{
				stargazers_count: 4
			},
			{
				stargazers_count: 3
			},
			{
				stargazers_count: 2
			},
			{
				stargazers_count: 1
			}
		]);
	});
});

