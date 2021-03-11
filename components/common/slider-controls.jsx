import PropTypes from 'prop-types';
import { ReactComponent as ArrowRightIcon } from 'icons/arrrow-right.svg';
import { ReactComponent as ArrowLeftIcon } from 'icons/arrow-left.svg';

const SliderControls = ({ prevSlide, nextSlide, className }) => (
  <div className={`${className}__controls-slider controls-slider-container`}>
    <button
      className={`${className} ${className}--left slider-button`}
      type="button"
      aria-label="Кнопка переключения слайдера влево"
      name="slider-button-left"
      onClick={prevSlide}
    >
      <ArrowLeftIcon
        className="slider-icon"
        fill="currentColor"
        width="15px"
        height="15px"
      />
    </button>
    <button
      className={`${className} ${className}--right slider-button`}
      type="button"
      aria-label="Кнопка переключения слайдера вправо"
      name="slider-button-right"
      onClick={nextSlide}
    >
      <ArrowRightIcon
        className="slider-icon"
        fill="currentColor"
        width="15px"
        height="15px"
        strokeWidth="2px"
      />
    </button>
  </div>
);

SliderControls.propTypes = {
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default SliderControls;
