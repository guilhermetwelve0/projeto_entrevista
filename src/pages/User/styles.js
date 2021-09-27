import styled from 'styled-components';

import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import * as colors from '../../theme/colors';
import * as dimens from '../../theme/dimens';
import Container from '../../components/Container';

export const MainContainer = styled(Container)`
	display: flex;
	margin-bottom: 20px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SpinnerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${dimens.padding_xl * 3}px;
`;

export const ContentContainer = styled.div`
	flex: 1;
	padding: ${dimens.padding_md}px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const UserContainer = styled.div`
	display: flex;
	margin: auto;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const SideContainer = styled.div`
	width: 240px;
	padding: ${dimens.padding_md}px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	@media (max-width: 600px) {
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 0;
	}
`;

export const UserAvatar = styled.img`
	width: 100%;
	max-width: 320px;
	height: auto;
	border-radius: ${dimens.border_radius}px;
`;

export const TitleContainer = styled.div`
	width: calc(100% - ${dimens.margin_md * 2}px);
	flex-direction: row;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 ${dimens.margin_md}px;
`;

export const Title = styled.h1`
	font-size: ${dimens.font_title}px;
	color: ${colors.darkFont};
	margin: 0;
`;

export const UserLogin = styled.div`
	margin: ${dimens.margin_sm}px 0;
	color: ${colors.darkSecondaryFont};
	@media (max-width: 600px) {
		border-bottom: 1px solid ${colors.darkDivider};
		width: calc(100% - ${dimens.margin_md * 2}px);
		text-align: center;
		padding-bottom: ${dimens.margin_lg}px;
	}
`;

export const UserName = styled.div`
	margin: ${dimens.margin_sm}px 0 0 0;
	color: ${colors.darkFont};
	font-size: ${dimens.font_subtitle}px;
`;

export const UserBio = styled.div`
	color: ${colors.darkFont};
	width: 100%;
	margin: 0;
	padding-top: ${dimens.padding_md}px;
	font-size: ${dimens.font_details}px;
	@media (max-width: 600px) {
		display: none;
	}
`;

export const UserCompanyContainer = styled.div`
	width: 100%;
	margin: 0;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding-top: ${dimens.padding_md}px;
	@media (max-width: 600px) {
		display: none;
	}
`;

export const CompanyIcon = styled(LocationCityIcon)`
	color: ${colors.darkSecondaryFont};
`;

export const UserCompany = styled.p`
	color: ${colors.darkSecondaryFont};
	margin: 0 0 0 ${dimens.margin_sm}px;
	font-size: ${dimens.font_details}px;
`;

export const UserLocationContainer = styled.div`
	width: 100%;
	margin: 0;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding-top: ${dimens.padding_md}px;
	@media (max-width: 600px) {
		display: none;
	}
`;

export const LocationIcon = styled(LocationOnIcon)`
	color: ${colors.darkSecondaryFont};
`;

export const UserLocation = styled.p`
	color: ${colors.darkSecondaryFont};
	margin: 0 0 0 ${dimens.margin_sm}px;
	font-size: ${dimens.font_details}px;
`;
