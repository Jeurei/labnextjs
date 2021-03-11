import PropTypes from 'prop-types';

const Hint = ({ hint }) => (
  <a
    href={hint.link}
    className="search-modal__example"
    aria-label={`Найти ${hint.text}`}
  >
    {hint.text}
  </a>
);

Hint.propTypes = {
  hint: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hint;
