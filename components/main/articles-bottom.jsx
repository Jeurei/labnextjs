import PropTypes from 'prop-types';
import Article from './article';

const ArticlesBottom = ({ data }) => {
  const MAX_QUANTITY = 8;
  return (
    <div className="articles__bottom">
      {data.slice(0, MAX_QUANTITY).map((el) => (
        <Article data={el} />
      ))}
    </div>
  );
};

ArticlesBottom.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArticlesBottom;
