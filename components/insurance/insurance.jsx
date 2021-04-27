import React from 'react';
import { css } from '@emotion/react';
import Image from 'next/image';
import Paragraph from 'components/common/paragraph';

import PropTypes from 'prop-types';
import PageBuilder from 'components/common/pageBuilder';

const Maintaince = ({ data }) => {
  return (
    <>
      <h2
        className="main__title"
        css={css`
          margin-bottom: 40px;
        `}
      >
        {data.title}
      </h2>
      {data.page && <PageBuilder data={data.page} />}
      {/* <Paragraph>
        Лечебно-диагностический центр « Лабдиагностика» оказывает медицинские
        услуги по полисам Добровольного Медицинского Страхования (ДМС) следующих
        страховых компаний:
      </Paragraph>
      <div
        css={css`
          display: grid;
          filter: grayscale(100%);
          grid-template-columns: repeat(6, 1fr);
        `}
      >
        <Image src="/img/alfa.png" width="179" height="56" />
        <Image src="/img/alfa.png" width="179" height="56" />
        <Image src="/img/alfa.png" width="179" height="56" />
        <Image src="/img/alfa.png" width="179" height="56" />
        <Image src="/img/alfa.png" width="179" height="56" />
        <Image src="/img/alfa.png" width="179" height="56" />
      </div>
      <Paragraph>
        Для получения медицинских услуг по полису Добровольного Медицинского
        Страхования необходимо предоставить: полис ДМС, паспорт, гарантийное
        письмо от страховой компании или иметь «прямой доступ» в клинику (быть в
        списках сотрудников на прикрепление) к медицинскому центру
        «Лабдиагностика». Условия{' '}
      </Paragraph> */}
    </>
  );
};

Maintaince.propTypes = {
  data: PropTypes.objectOf(PropTypes.objectз).isRequired,
};

export default Maintaince;
