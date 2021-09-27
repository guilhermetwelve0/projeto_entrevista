import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from '../../store/ducks/repo';
import {
	UserContainer,
	SpinnerContainer,
	SideContainer,
	UserAvatar,
	MainContainer,
	ContentContainer,
	TitleContainer,
	Title,
	UserName,
	UserLogin,
	UserBio,
	UserCompanyContainer,
	CompanyIcon,
	UserCompany,
	UserLocationContainer,
	LocationIcon,
	UserLocation,
} from './styles';
import { orderBy } from '../../utils/repo';
import { enableScroll, disableScroll } from '../../utils/scroll';

import RepoList from '../../components/RepoList';
import RepoDetails from '../../components/RepoDetails';
import Spinner from '../../components/Spinner';
import Pagination from '../../components/Pagination';
import SortOptions from '../../components/SortOptions';
import MessageModal from '../../components/MessageModal';

import * as dimens from '../../theme/dimens';
import * as colors from '../../theme/colors';

function User() {
	const { user } = useParams();
	const dispatch = useDispatch();

	const {
		repos,
		currentUser,
		hasPrevious,
		hasNext,
		loading,
		hasError,
		errorMessage,
	} = useSelector((state) => state.repo);

	const [currentPage, setCurrentPage] = useState(1);
	const [sort, setSort] = useState('desc');
	const [repoList, setRepoList] = useState([]);
	const [showDetails, setShowDetails] = useState(false);
	const [showError, setShowError] = useState(false);
	const [selectedRepo, setSelectedRepo] = useState();

	useEffect(() => {
		dispatch(Actions.getUserRepos(user, currentPage, sort));
	}, []);

	useEffect(() => {
		if (hasError) setShowError(true);
	}, [hasError]);

	useEffect(() => {
		window.scrollTo(0, 0);
		const newList = orderBy(repos, sort);
		setRepoList(newList);
	}, [repos]);

	const handlePreviousPage = () => {
		const page = currentPage - 1;
		dispatch(Actions.getUserRepos(user, page, sort));
		setCurrentPage(page);
	};

	const handleNextPage = () => {
		const page = currentPage + 1;
		dispatch(Actions.getUserRepos(user, page, sort));
		setCurrentPage(page);
	};

	const handleRepoClick = (repo) => {
		setSelectedRepo(repo);
		setShowDetails(true);
		disableScroll();
	};

	const handleCloseDetails = () => {
		setShowDetails(false);
		enableScroll();
	};

	const handleSortItems = () => {
		const sortMethod = { asc: 'desc', desc: 'asc' };
		const newList = orderBy(repoList, sortMethod[sort]);
		setRepoList(newList);
		setSort(sortMethod[sort]);
	};

	const closeErrorModal = () => {
		setShowError(false);
	};

	if (hasError)
		return (
			<MessageModal
				show={showError}
				message={errorMessage}
				onClose={closeErrorModal}
			/>
		);

	if (loading || !currentUser)
		return (
			<SpinnerContainer>
				<Spinner size={dimens.font_subtitle} color={colors.accent} />
			</SpinnerContainer>
		);

	return (
		<MainContainer>
			<UserContainer>
				<SideContainer>
					<UserAvatar src={currentUser.avatar_url} />
					{currentUser.name && (
						<UserName>{currentUser.name}</UserName>
					)}
					<UserLogin>{currentUser.login}</UserLogin>
					{currentUser.bio && <UserBio>{currentUser.bio}</UserBio>}
					{currentUser.company && (
						<UserCompanyContainer>
							<CompanyIcon fontSize='small' />
							<UserCompany>{currentUser.company}</UserCompany>
						</UserCompanyContainer>
					)}
					{currentUser.location && (
						<UserLocationContainer>
							<LocationIcon fontSize='small' />
							<UserLocation>{currentUser.location}</UserLocation>
						</UserLocationContainer>
					)}
				</SideContainer>
				<ContentContainer>
					<TitleContainer>
						<Title>Repositórios</Title>
						<SortOptions onClick={handleSortItems} />
					</TitleContainer>
					<RepoList data={repoList} onItemClick={handleRepoClick} />
				</ContentContainer>
			</UserContainer>
			{(hasPrevious || hasNext) && (
				<Pagination
					currentPage={currentPage}
					hasPrevious={hasPrevious}
					hasNext={hasNext}
					clickNext={handleNextPage}
					clickPrevious={handlePreviousPage}
				/>
			)}
			<RepoDetails
				repo={selectedRepo}
				show={showDetails}
				onClose={handleCloseDetails}
			/>
		</MainContainer>
	);
}

export default User;
