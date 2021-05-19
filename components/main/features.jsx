import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import SectionInner from 'containers/section-inner';
import { ReactComponent as Logo } from 'icons/features__logo-img.svg';

// TODO: Узнать шаблонизируется ли этот блок

const featuresItem = (data) => {
  return (
    <li
      className="features__list-item"
      css={css`
        background-image: url('${data.icon}');
      `}
      key={data.title}
    >
      <h3 className="features__list-item-title">{data.title}</h3>
      <p className="features__list-item-text">{data.text}</p>
    </li>
  );
};

const Features = ({ features }) => (
  <section className="main__section main__section-features section features">
    <SectionInner>
      <h2 className="section__title">
        Почему именно
        <Logo className="features__logo-img" alt="Лабдиагностика" />
      </h2>
      <ul className="features__list">
        {features.map((el) => featuresItem(el))}
      </ul>
    </SectionInner>
  </section>
);

Features.propTypes = {
  features: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { features } = state;

  return { features };
};

export default connect(mapStateToProps, null)(Features);
