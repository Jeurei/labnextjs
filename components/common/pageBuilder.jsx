import Image from 'next/image';

import PropTypes from 'prop-types';
import { css } from '@emotion/react';

const Img = ({ data }) => {
  return (
    <div
      css={css`
        position: relative;
        width: 100%;
        min-height: 500px;
      `}
    >
      <Image
        src={data.image}
        css={css`
          position: absolute;
        `}
        layout="fill"
      />
    </div>
  );
};

const Paragraph = ({ data }) => (
  <>
    <h3
      css={css`
        margin-bottom: 29px;
        font-size: 16px;
        font-weight: 500;
      `}
    >
      {data.title}
    </h3>
    <p
      css={css`
        font-size: 13px;
      `}
    >
      {data.text}
    </p>
  </>
);

const Definition = ({ data }) => (
  <>
    <p
      css={css`
        font-size: 13px;
      `}
    >
      <span
        css={css`
          font-weight: 500;
        `}
      >
        {data.word}
      </span>{' '}
      {data.definition}
    </p>
  </>
);

const ComponentsMap = {
  image: Img,
  paragraph: Paragraph,
  definition: Definition,
};

const PageBuilder = ({ data }) => {
  return (
    <>
      {Object.values(data).map((el) =>
        ComponentsMap[el.config]({ data: el.values }),
      )}
    </>
  );
};

Img.propTypes = {
  data: {
    image: PropTypes.string,
  }.isRequired,
};

Paragraph.propTypes = {
  data: {
    title: PropTypes.string,
    text: PropTypes.string,
  }.isRequired,
};

Definition.propTypes = {
  data: {
    word: PropTypes.string,
    definition: PropTypes.string,
  }.isRequired,
};

PageBuilder.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PageBuilder;
