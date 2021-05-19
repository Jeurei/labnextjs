import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SectionInner from 'containers/section-inner';
import { ReactComponent as ArrowRight } from 'icons/arrow-right.svg';

const linkItem = (data) => {
  const svgPicture = (src, width, height, alt) => (
    <img
      src={`img/${src}.svg`}
      className="link__big-icon"
      width={`${width}px`}
      height={`${height}px`}
      alt={alt}
    />
  );

  return (
    <li className="link__list-item link link--about-us" key={data.text}>
      {svgPicture('about-us', 67, 74, 'Иконка')}
      <a
        href={data.link}
        className="link__link"
        aria-label="Перейти на страницу с этой информацией"
      >
        <h3 className="link__title">{data.title}</h3>
        <p className="link__text">{data.text}</p>
        <ArrowRight
          className="link__icon"
          width="26"
          height="26"
          stroke="currentColor"
          fill="currentColor"
        />
      </a>
    </li>
  );
};

const Links = ({ links }) => {
  const MAX_QUANTITY_OF_LINKS = 2;

  return (
    <section className="main__section main__section--links section links">
      <h2 className="section__title visually-hidden">
        Ссылки на интересные страницы
      </h2>
      <SectionInner>
        <ul className="links__list">
          {links.slice(0, MAX_QUANTITY_OF_LINKS).map((el) => linkItem(el))}
        </ul>
      </SectionInner>
    </section>
  );
};

Links.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { links } = state;

  return { links };
};

export default connect(mapStateToProps, null)(Links);
