import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

import PropTypes from 'prop-types';

const LightBoxImg = ({ data }) => {
  const [isShown, setShown] = useState(false);

  const onClickHandler = () => {
    setShown(true);
  };

  return (
    <div className="reference__picture">
      <Image
        src={data.thumb}
        width="218"
        height="309"
        onClick={onClickHandler}
      />
      {isShown && (
        <Lightbox mainSrc={data.image} onCloseRequest={() => setShown(false)} />
      )}
    </div>
  );
};

LightBoxImg.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default LightBoxImg;
