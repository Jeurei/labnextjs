import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SectionInner from 'containers/section-inner';
import components from 'constants/components';

import { filterTypesMap } from 'constants/filter';
import ArticlesTop from './artciles-top';
import ArticlesBottom from './articles-bottom';
import { getFiltredArticles } from '../utils/filter';

const Articles = ({ articles }) => {
  const [currentFilter, setCurrentFilter] = useState(filterTypesMap.ALL);
  const filtredArticles = getFiltredArticles[currentFilter]([...articles]);

  const onSortButtonClickHandler = (filterType) => {
    setCurrentFilter(filterTypesMap[filterType]);
  };

  return (
    <section className="main__section main__section--articles section articles">
      <h2 className="section__title visually-hidden">Полезные статьи</h2>
      <SectionInner>
        <ArticlesTop
          action={onSortButtonClickHandler}
          currentFilter={currentFilter}
        />
        <ArticlesBottom data={filtredArticles} />
      </SectionInner>
    </section>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { articles } = state;

  return { articles };
};

export default connect(mapStateToProps, null)(Articles);
