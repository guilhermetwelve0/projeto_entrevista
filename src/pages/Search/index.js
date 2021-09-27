import React, { useState, useEffect } from 'react';
import { SearchContainer, Logo, Title, SearchInput } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Actions } from '../../store/ducks/user';

import Button from '../../components/Button';
import UserList from '../../components/UserList';
import NoResults from '../../components/NoResults';
import Pagination from '../../components/Pagination';
import MessageModal from '../../components/MessageModal';

function Search() {
	const logo = require('../../assets/imgs/github.svg');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {loading, users, totalCount, totalPages, currentPage, hasError, errorMessage } = useSelector((state) => state.user);
	
	const [hasSearches, setHasSearches] = useState(false);
	const [showError, setShowError] = useState(false);
	const [query, setQuery] = useState('');
	const [searchedQuery, setSearchedQuery] = useState('');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [users]);

	useEffect(() => {
		if(hasError) setShowError(true);
	}, [hasError]);

	const handleSearch = () => {
		if (query.length < 1) return;
		if (!hasSearches) setHasSearches(true);
		setSearchedQuery(query);
		dispatch(Actions.searchUser(query, 1));
	};

	const handleItemClick = (user) => {
		navigate(`users/${user}`);
	};

	const handlePreviousPage = () => {
		const previousPage = currentPage - 1;
		dispatch(Actions.searchUser(searchedQuery, previousPage));
	};

	const handleNextPage = () => {
		const nextPage = currentPage + 1;
		dispatch(Actions.searchUser(searchedQuery, nextPage));
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') handleSearch();
	};

	const closeErrorModal = () => {
		setShowError(false);
	};

	return (
		<SearchContainer>
			<Logo src={logo} />
			<Title>GitHub Lite</Title>
			<SearchInput
				onKeyDown={handleKeyDown}
				type='text'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Button onClick={handleSearch} loading={loading} size='md'>
				Pesquisar
			</Button>
			{totalCount > 0 && !loading && (
				<UserList
					data={users}
					totalResults={totalCount}
					onItemClick={handleItemClick}
				/>
			)}
			{totalCount === 0 && hasSearches && !loading && (
				<NoResults query={searchedQuery} />
			)}
			{hasSearches && totalCount > 10 && !loading && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					clickNext={handleNextPage}
					clickPrevious={handlePreviousPage}
				/>
			)}
			<MessageModal 
				show={showError}
				message={errorMessage}
				onClose={closeErrorModal}
			/>
		</SearchContainer>
	);
}

export default Search;
