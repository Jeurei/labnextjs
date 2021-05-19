import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ComplexFront from './complex-front';
import ComplexBack from './complex-back';

const Complex = ({ data }) => {
  const [isFullOpened, setFullOpened] = useState(false);
  const liRef = useRef();

  const changeState = (bool) => {
    setFullOpened(bool);
  };

  return (
    <li className="complexes__item complex" ref={liRef}>
      <ComplexFront action={changeState} data={data} />
      <ComplexBack
        action={changeState}
        data={data}
        state={isFullOpened}
        liRef={liRef}
      />
    </li>
  );
};

Complex.defaultProps = {
  data: {},
};

Complex.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.string,
    oldPrice: PropTypes.string,
  }),
};

export default Complex;
