import MainContainer from 'containers/main-container';
import { css } from '@emotion/react';
import Search from './search';
import ActualOffers from './actual-offers';
import Complexes from './complexes';
// import Links from './links';
import Articles from './articles';
import Shares from './shares';
import Features from './features';

const Main = () => (
  <MainContainer>
    <h1
      className="main__title visually-hidden"
      css={css`
        margin: 0;
      `}
    >
      Сайт компании &lquot;Лабдиагностика&rquot;
    </h1>
    <Search />
    <ActualOffers />
    <Complexes />
    <Articles />
    <Shares />
    <Features />
  </MainContainer>
);

export default Main;
