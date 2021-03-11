import PropTypes from 'prop-types';

const Script = ({ src, onload }) => <Script src={src} onLoad={onload} />;

Script.propTypes = {
  src: PropTypes.string.isRequired,
  onload: PropTypes.func.isRequired,
};

export default Script;
