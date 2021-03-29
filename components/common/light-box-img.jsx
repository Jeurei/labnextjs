import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'react-image-lightbox';

const LightBoxImg = () => {
  const [isShown, setShown] = useState(false);

  const onClickHandler = () => {
    setShown(true);
  };

  return (
    <div className="reference__picture">
      <Image
        src="/img/reference.png"
        containerClass="reference__picture"
        width="218"
        height="309"
        onClick={onClickHandler}
      />
      {isShown && (
        <Lightbox
          mainSrc="/img/reference.png"
          onCloseRequest={() => setShown(false)}
        />
      )}
    </div>
  );
};

export default LightBoxImg;
