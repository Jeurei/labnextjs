import Image from 'next/image';
import PropTypes from 'prop-types';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import { numberWithSpaces } from 'components/utils/common';
import { ReactComponent as FeLogo } from 'icons/features__logo-img.svg';
import { ReactComponent as SheduleIcon } from 'icons/shedule.svg';
import Select from 'common/select';
import PComponent from 'common/paragraph';
import { fetchDataRoute } from 'Redux/actions/actions';
import Specialist from 'components/specialists/specialist';
import React, { useState } from 'react';
import Load from 'common/load';
import axios from 'axios';
import LinearTextBlock from 'components/references/linear-text-block';
import SectionInner from 'components/header/section-inner';
import Accordeon from './accordeon';
import LinearBottomButton from './linear-bottom-button';
import File from './file';
import ReferencesSlider from './references-slider';
import WorkingWithUs from './working-with-us';
import SimpleForm from './form';

const Img = ({ data }) => {
  return (
    <SectionInner key={`ImageComponent-${data.image}`}>
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
    </SectionInner>
  );
};

const Paragraph = ({ data }) => {
  return (
    <SectionInner key={JSON.stringify(data)}>
      <h3
        css={css`
          margin-bottom: 29px;
          font-size: 16px;
          font-weight: 500;
        `}
      >
        {data && data.title}
      </h3>
      <p
        css={css`
          font-size: 13px;
        `}
      >
        {data && data.text}
      </p>
    </SectionInner>
  );
};

const ParagraphWithGradient = ({ data }) => (
  <SectionInner key={JSON.stringify(data)}>
    <h3
      css={css`
        margin-bottom: 29px;
        font-size: 16px;
        font-weight: 500;
      `}
    >
      {data && data.title}
    </h3>
    <PComponent withLinear>{data.text}</PComponent>
  </SectionInner>
);

const Definition = ({ data }) => (
  <SectionInner key={data.word}>
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
  </SectionInner>
);

const Faq = ({ data }) => {
  return data.faqList.map((el, index) => (
    <SectionInner key={el.question}>
      <Accordeon title={el.question} id={`${index}-faq`}>
        {el.answer}
      </Accordeon>
    </SectionInner>
  ));
};

const PriceList = ({ data }) => {
  const theme = useTheme();

  const TableRow = ({ rowData }) => (
    <tr
      css={css`
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        padding: 20px 22px 23px 21px;
        margin-bottom: 30px;
        box-shadow: ${theme.colors.boxShadow};

        ${breakpointsMap.DESKTOP} {
          flex-wrap: nowrap;
          align-items: center;
          padding: 40px 22px 43px 21px;
        }
      `}
    >
      <td
        css={css`
          width: 100%;
          padding-bottom: 15px;
          font-size: 16px;
          font-weight: 500;

          ${breakpointsMap.DESKTOP} {
            width: 379px;
            padding: 0;
          }
        `}
      >
        {rowData.element1}
      </td>
      <td
        css={css`
          display: flex;
          align-items: flex-end;
          font-size: 12px;

          ${breakpointsMap.DESKTOP} {
            width: 177px;
          }
        `}
      >
        {rowData.element2}
      </td>
      <td
        css={css`
          display: flex;
          align-items: flex-end;
          margin-right: auto;
          font-size: 12px;

          ${breakpointsMap.DESKTOP} {
            width: 154px;
            align-items: flex-start;
          }
        `}
      >
        {numberWithSpaces(rowData.element3)}
      </td>
      <td
        css={css`
          display: flex;
          flex-direction: column;
          font-size: 26px;
          font-weight: 500;

          ${breakpointsMap.DESKTOP} {
            width: 223px;
          }
        `}
      >
        <span
          css={css`
            display: flex;
            justify-content: flex-end;
            margin-bottom: 5px;
            font-size: 10px;

            ${breakpointsMap.DESKTOP} {
              display: none;
              justify-content: flex-start;
            }
          `}
        >
          Цена за шт:
        </span>
        {numberWithSpaces(rowData.element4)}
      </td>
      <td
        css={css`
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 15px;
          font-size: 26px;
          font-weight: 500;

          ${breakpointsMap.DESKTOP} {
            width: 233px;
            padding: 0;
          }
        `}
      >
        <span
          css={css`
            display: flex;
            justify-content: flex-end;
            margin-bottom: 5px;
            font-size: 10px;

            ${breakpointsMap.DESKTOP} {
              display: none;
            }
          `}
        >
          Итоговая цена:
        </span>
        {numberWithSpaces(rowData.element5)} ₽
      </td>
    </tr>
  );

  TableRow.propTypes = {
    rowData: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  return (
    <SectionInner key={JSON.stringify(data)}>
      <table
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        `}
      >
        <caption
          css={css`
            padding-left: 5px;
            margin-bottom: 15px;
            font-size: 16px;
            font-weight: 500;
            text-align: left;

            ${breakpointsMap.DESKTOP} {
              margin-bottom: 25px;
            }
          `}
        >
          {data.title}
        </caption>
        <thead
          css={css`
            display: none;
            padding-top: 26.5px;
            padding-left: 17.5px;
            border-top: 1px dashed rgba(${theme.colors.colorText.rgb}, 0.5);
            margin-bottom: 27px;

            ${breakpointsMap.DESKTOP} {
              display: block;
            }
          `}
        >
          <tr>
            <th
              css={css`
                width: 377px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
              `}
            >
              {data.header1}
            </th>
            <th
              css={css`
                width: 175px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
              `}
            >
              {data.header2}
            </th>
            <th
              css={css`
                width: 150px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
              `}
            >
              {data.header3}
            </th>
            <th
              css={css`
                width: 219px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
              `}
            >
              {data.header4}
            </th>
            <th
              css={css`
                width: 217px;
                font-size: 12px;
                font-weight: 400;
                text-align: left;
              `}
            >
              {data.header5}
            </th>
          </tr>
        </thead>
        <tbody
          css={css`
            display: flex;
            flex-direction: column;
            padding-right: 5px;
            padding-left: 5px;

            ${breakpointsMap.TABLET} {
              padding: 0;
            }
          `}
        >
          {Object.values(data.priceList).map((el) => (
            <TableRow rowData={el} key={el.element1} />
          ))}
        </tbody>
      </table>
    </SectionInner>
  );
};

const PageHeader = ({ data }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        min-height: 366px;
        background-image: url(/img/aboutusbg.png);
        background-repeat: no-repeat;
        background-size: cover;
        color: ${theme.colors.white};

        @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
          background-image: url(/img/aboutusbg@2x.png);
        }

        .aboutus__img-container {
          display: none;
          width: 100%;
          height: 100%;
          align-items: center;
        }

        ${breakpointsMap.TABLET} {
          .aboutus__img-container {
            display: flex;
          }
        }
      `}
      key={JSON.stringify(data)}
    >
      <SectionInner>
        <div
          css={css`
            display: flex;
            width: 100%;
            height: 100%;
            min-height: 344px;
            align-items: center;

            .aboutus__img {
              height: 190px;
              border-radius: 50%;
            }

            .aboutUs__logo {
              margin-bottom: 29px;
            }

            ${breakpointsMap.DESKTOP} {
              .aboutus__img {
                height: 296px;
              }
            }
          `}
        >
          <div>
            <FeLogo className="aboutUs__logo" width="216px" height="32px" />
            <h3
              css={css`
                margin-top: 0;
                margin-bottom: 29px;
                font-size: 16px;
                font-weight: 500;
              `}
            >
              {data.title}
            </h3>
            <p>{data.text}</p>
          </div>
          <div
            className="aboutus__img-container"
            css={css`
              justify-content: flex-end;
              padding-right: 70px;
            `}
          >
            <Image
              src={data.imageCircle}
              className="aboutus__img"
              width="296"
              height="296"
            />
          </div>
        </div>
      </SectionInner>
    </div>
  );
};

const featuresItem = (data) => {
  return (
    <li
      className="features__list-item"
      css={css`
        position: relative;
      `}
      key={JSON.stringify(data)}
    >
      <div
        css={css`
          position: absolute;
          top: 13px;
          left: 10px;
          color: #8370f0;
        `}
      >
        <Image src={data.icon} width="30px" height="27px" />
      </div>
      <h3
        className="features__list-item-title"
        css={css`
          color: #4a4a4a;
        `}
      >
        {data.title}
      </h3>
      <p className="features__list-item-text">{data.text}</p>
    </li>
  );
};

const Advantages = ({ data }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: relative;
        padding-top: 31px;
        background-color: #f7f7f7;
      `}
      key={JSON.stringify(data)}
    >
      <SectionInner>
        <h2
          className="section__title"
          css={css`
            margin-bottom: 88px;
            font-size: 16px;
            font-weight: 500;

            &:after {
              color: ${theme.colors.blue};
            }
          `}
        >
          {data.title}
        </h2>
        <ul className="features__list">
          {Object.values(data.advantagesList).map((el) => featuresItem(el))}
        </ul>
      </SectionInner>
    </div>
  );
};

const Banner = ({ data }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: relative;
        margin-bottom: 60px;
        color: ${theme.colors.white};
        background-image: url(${data.icon}), ${theme.colors.linearGradient};
        background-repeat: no-repeat, repeat;
        background-position: calc(100% - 230px) 45%, center;

          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-image: url(${data.icon}), ${theme.colors.linearGradient};
          }
        }
      `}
    >
      <SectionInner key={JSON.stringify(data)}>
        <div
          css={css`
            padding-top: 35px;
            padding-bottom: 35px;

            ${breakpointsMap.TABLET} {
              padding-right: 250px;
              padding-left: 0;
            }
          `}
        >
          <h3
            css={css`
              font-weight: 500;
            `}
          >
            {data.title}
          </h3>
          <p>{data.text}</p>
        </div>
      </SectionInner>
    </div>
  );
};

const SmallBanner = ({ data }) => {
  return (
    <SectionInner key={data.text}>
      <LinearTextBlock>{data.text}</LinearTextBlock>
    </SectionInner>
  );
};

const BottomGradientLinks = ({ data }) => {
  return (
    <SectionInner key={JSON.stringify(data)}>
      <div
        css={css`
          position: relative;
          padding-top: 10px;
          padding-right: 10px;
          padding-bottom: 51px;

          &:before {
            position: absolute;
            z-index: -1;
            top: 0;
            left: -100%;
            display: block;
            width: 1000vw;
            min-height: 100%;
            background-color: #f7f7f7;
            content: '';
          }

          ${breakpointsMap.TABLET} {
            padding-right: 0;
            padding-left: 0;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            margin-top: 40px;
          `}
        >
          {Object.values(data.linksList).map((el) => (
            <LinearBottomButton key={el.title}>{el.title}</LinearBottomButton>
          ))}
        </div>
      </div>
    </SectionInner>
  );
};

const Files = ({ data }) => {
  return (
    <SectionInner key={JSON.stringify(data)}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding-top: 36px;
          padding-bottom: 11px;
        `}
      >
        <h3
          css={css`
            margin-bottom: 33px;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          {data.title}
        </h3>
        {Object.values(data.filesList).map((el) => (
          <File data={el} key={el.title} />
        ))}
      </div>
    </SectionInner>
  );
};

const Licenses = ({ data }) => {
  return (
    <SectionInner key={JSON.stringify(data)}>
      <ReferencesSlider title={data.title} data={data.licensesList} />
    </SectionInner>
  );
};

const PartnersList = ({ data }) => (
  <SectionInner key={JSON.stringify(data)}>
    <div
      css={css`
        display: grid;
        grid-template-columns: repeat(6, 1fr);
      `}
    >
      {Object.values(data.partnersList).map((el) => (
        <Image
          css={css`
            filter: grayscale(100%);

            &:hover {
              filter: grayscale(0);
            }
          `}
          src={el.image}
          width="179"
          height="56"
          key={`${el.image}${Math.random(0, 1000)}`}
        />
      ))}
    </div>
  </SectionInner>
);

const Discounts = ({ data }) => {
  const theme = useTheme();

  const DiscountBlock = (discData) => (
    <div
      css={css`
        display: flex;
        width: 100%;
        min-height: 163px;
        flex-direction: column;
        padding-top: 16px;
        padding-bottom: 10px;
        margin-bottom: 10px;
        box-shadow: ${theme.colors.boxShadow};

        &:hover {
          background-image: linear-gradient(247deg, #689afa, #f426ee);
          color: ${theme.colors.white};

          .discount__value-container {
            border-color: ${theme.colors.white};
            background-image: url('${discData.iconHover}');
            background-position: center 0;
            background-repeat: no-repeat;
            background-size: 25px 25px;
          }

          .discount__value {
            color: transparent;
          }
        }

        ${breakpointsMap.TABLET} {
          flex-direction: row;
          padding-right: 10px;

          &:hover {
            .discount__value-container {
              background-position: center center;
            }
          }
        }

        ${breakpointsMap.DESKTOP} {
          width: 570px;
          margin-bottom: 30px;
        }
      `}
      key={discData.text}
    >
      <div
        className="discount__value-container"
        css={css`
          padding-top: 4px;
          padding-bottom: 6.5px;
          border-bottom: 1px dashed ${theme.colors.colorText.hex};

          ${breakpointsMap.TABLET} {
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 1px dashed ${theme.colors.colorText.hex};
            border-bottom: none;
          }
        `}
      >
        <span
          className="discount__value"
          css={css`
            padding-left: 10px;
            font-size: 41px;

            ${breakpointsMap.TABLET} {
              display: block;
              transform: rotate(-90deg);
            }
          `}
        >
          {discData.percent}
        </span>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 35.5px;
          padding-right: 10px;
          padding-left: 10px;

          ${breakpointsMap.TABLET} {
            padding-top: 0;
          }
        `}
      >
        <p
          css={css`
            margin: 0;
            margin-bottom: 20px;
          `}
        >
          {discData.text}
        </p>
        <p
          css={css`
            margin: 0;
          `}
        >
          {discData.textHover}
        </p>
      </div>
    </div>
  );

  return (
    <SectionInner key={JSON.stringify(data)}>
      <div
        css={css`
          display: flex;
          flex-direction: column;

          ${breakpointsMap.DESKTOP} {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          }
        `}
      >
        {Object.values(data.discontList).map((el) => DiscountBlock(el))}
      </div>
    </SectionInner>
  );
};

const CommercialForm = ({ data }) => {
  return (
    <SectionInner key={JSON.stringify(data)}>
      <SimpleForm title={data.title} />
    </SectionInner>
  );
};

const Heading = ({ data }) => (
  <SectionInner key={JSON.stringify(data)}>
    <h3
      css={css`
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 500;
      `}
    >
      {data.title}
    </h3>
  </SectionInner>
);

const List = ({ data }) => (
  <SectionInner key={JSON.stringify(data)}>
    {data.type === 'numeric' ? (
      <ol
        css={css`
          padding: 0;
          padding-left: 14px;
          margin-bottom: 20px;
          font-weight: 500;
        `}
      >
        {Object.values(data.items).map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ol>
    ) : (
      <ul
        css={css`
          padding: 0;
          padding-left: 14px;
          margin-bottom: 20px;
          font-weight: 500;
        `}
      >
        {Object.values(data.items).map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    )}
  </SectionInner>
);

const Form = ({ data }) => {
  const theme = useTheme();

  const Time = (timeData) => {
    return (
      <React.Fragment key={timeData.title}>
        <legend
          css={css`
            padding-top: 43px;
            margin-bottom: 31px;
            font-size: 13px;
            font-weight: 500;

            ${breakpointsMap.DESKTOP} {
              padding-left: 43px;
            }
          `}
        >
          {timeData.title}
        </legend>
        <fieldset
          css={css`
            display: flex;
            flex-direction: column;
            padding: 0;
            border: none;
            margin-bottom: 31px;
            background-color: ${theme.colors.white};

            ${breakpointsMap.DESKTOP} {
              padding-right: 38px;
              padding-left: 43px;
            }
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;

              ${breakpointsMap.DESKTOP} {
                flex-direction: row;
              }
            `}
          >
            <div
              css={css`
                width: 100%;
                ${breakpointsMap.DESKTOP} {
                  width: 50%;
                  margin-right: 26px;
                }
              `}
            >
              <div
                css={css`
                  position: relative;
                  margin-bottom: 10px;
                `}
              >
                <input
                  type="date"
                  className="search__input"
                  placeholder="Дата рождения получателя услуги:"
                  aria-label="Выберите дату рождения"
                  aria-describedby="reciever-birthdate"
                  css={css`
                    width: 100%;
                    height: 60px;
                    padding-left: 28px;
                    border: 1px solid ${theme.colors.blue};
                    border-radius: 4px;
                  `}
                />
                <p className="visually-hidden" id="reciever-birthdate">
                  Введите дату рождения получателя
                </p>
                <SheduleIcon
                  fill="currentColor"
                  stroke="currentColor"
                  width="20px"
                  height="20px"
                  css={css`
                    position: absolute;
                    top: 20px;
                    right: 13px;
                    color: ${theme.colors.blue};
                    font-weight: 400;
                    stroke-width: 0;
                  `}
                />
              </div>
            </div>
            <div
              css={css`
                width: 100%;

                .select {
                  height: 60px;
                }

                ${breakpointsMap.DESKTOP} {
                  width: 50%;
                }
              `}
            >
              <Select
                selectClass="specialist__adress"
                placeholder="Выберите 17:00"
              />
            </div>
          </div>
        </fieldset>
      </React.Fragment>
    );
  };

  const Text = (textData) => (
    <fieldset
      css={css`
        display: flex;
        flex-direction: column;
        padding: 0;
        border: none;
        margin-bottom: 31px;
        background-color: ${theme.colors.white};

        ${breakpointsMap.DESKTOP} {
          padding-right: 38px;
          padding-left: 43px;
        }
      `}
      key={textData.title}
    >
      <input
        type="text"
        className="search__input"
        placeholder={`Ваше ${textData.title}`}
        aria-label={`Введите ${textData.title}`}
        aria-describedby="order-name"
        css={css`
          height: 60px;
          padding-left: 28px;
          border: 1px solid ${theme.colors.blue};
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
        `}
      />
      <p className="visually-hidden" id="order-name">
        Введите ваше {textData.title}
      </p>
    </fieldset>
  );

  const Tel = (telData) => (
    <fieldset
      css={css`
        display: flex;
        flex-direction: column;
        padding: 0;
        border: none;
        margin-bottom: 31px;
        background-color: ${theme.colors.white};

        ${breakpointsMap.DESKTOP} {
          padding-right: 38px;
          padding-left: 43px;
        }
      `}
      key={telData.title}
    >
      <input
        type="text"
        className="search__input"
        placeholder={`Ваше ${telData.title}`}
        aria-label={`Введите ${telData.title}`}
        aria-describedby="order-name"
        css={css`
          height: 60px;
          padding-left: 28px;
          border: 1px solid ${theme.colors.blue};
          margin-top: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
        `}
      />
      <p className="visually-hidden" id="order-name">
        Введите ваше {telData.title}
      </p>
    </fieldset>
  );

  const TextArea = (areaData) => (
    <fieldset
      css={css`
        display: flex;
        flex-direction: column;
        padding: 0;
        border: none;
        margin-bottom: 31px;
        background-color: ${theme.colors.white};

        ${breakpointsMap.DESKTOP} {
          padding-right: 38px;
          padding-left: 43px;
        }
      `}
      key={areaData.title}
    >
      <textarea
        type="text"
        className="search__input"
        placeholder={areaData.title}
        aria-label={areaData.title}
        aria-describedby="order-message"
        css={css`
          min-height: 185px;
          padding-left: 28px;
          border: 1px solid ${theme.colors.blue};
          margin-bottom: 28px;
          border-radius: 4px;
        `}
      />
      <p className="visually-hidden" id="order-message">
        {areaData.title}
      </p>
    </fieldset>
  );

  const CheckBoxes = (boxesData) => (
    <fieldset
      css={css`
        display: flex;
        flex-direction: column;
        padding: 0;
        border: none;
        margin-bottom: 31px;
        background-color: ${theme.colors.white};

        ${breakpointsMap.DESKTOP} {
          padding-right: 38px;
          padding-left: 43px;
        }
      `}
      key={boxesData.title}
    >
      <div
        css={css`
          width: 100%;
          margin-top: 20px;

          ${breakpointsMap.DESKTOP} {
            width: 50%;
            margin-top: 0;
          }
        `}
      >
        <div
          className="filter__checkbox-group"
          css={css`
            width: 100%;
            margin-bottom: 23px;
          `}
        >
          <input
            type="checkbox"
            name="order-guarantee"
            id="order-guarantee"
            value="order-guarantee"
            aria-label={boxesData.title}
            className="filter__input filter__input--checkbox"
          />
          <label
            className="filter__label"
            htmlFor="order-guarantee"
            css={css`
              display: block;
            `}
          >
            {boxesData.title}
          </label>
        </div>
      </div>
    </fieldset>
  );

  const InputsMap = {
    time: Time,
    text: Text,
    phone: Tel,
    textarea: TextArea,
    checkRequired: CheckBoxes,
  };

  return (
    <SectionInner key={JSON.stringify(data)}>
      <div
        css={css`
          background-color: #f7f7f7;
          box-shadow: ${theme.colors.boxShadow};
        `}
      >
        <h3
          css={css`
            position: relative;
            padding-top: 22px;
            padding-bottom: 20px;
            padding-left: 29px;
            margin: 0;
            font-size: 16px;
            font-weight: 500;

            &:before {
              position: absolute;
              bottom: 0;
              left: 0;
              display: block;
              width: 100%;
              height: 4px;
              background-image: ${theme.colors.linearGradient};
              content: '';
            }
          `}
        >
          {data.title}
        </h3>
        <form
          action="post"
          css={css`
            padding-right: 10px;
            padding-bottom: 30px;
            padding-left: 10px;
            background-color: ${theme.colors.white};
          `}
        >
          {Object.values(data.inputList).map((el) => InputsMap[el.type](el))}
          <button
            type="submit"
            className="button"
            css={css`
              width: 100%;
              padding-top: 15px;
              padding-bottom: 17px;
              border: none;
              margin-bottom: 38px;
              border-radius: 4px;
            `}
          >
            {data.button}
          </button>
        </form>
        {data.showBanner && (
          <div
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding-top: 31px;
              padding-right: 10px;
              padding-bottom: 24px;
              margin-top: -40px;
              background-image: ${theme.colors.linearGradient};
              color: ${theme.colors.white};
            `}
          >
            <p
              css={css`
                font-size: 13px;
                text-align: center;
              `}
            >
              {data.upperBannerTitle}
            </p>
            <span
              css={css`
                margin-top: 15px;
                margin-bottom: 15px;
                font-size: 22px;
              `}
            >
              {data.bannerTitle}
            </span>
            <p
              css={css`
                font-size: 13px;
                text-align: center;
              `}
            >
              {data.lowerBannerTitle}
            </p>
          </div>
        )}
      </div>
    </SectionInner>
  );
};

const ThreeLinesBanner = ({ data }) => {
  const theme = useTheme();
  return (
    <SectionInner key={data.upperTitle}>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 31px;
          padding-right: 10px;
          padding-bottom: 24px;
          margin-top: -40px;
          background-image: ${theme.colors.linearGradient};
          color: ${theme.colors.white};
        `}
      >
        <p
          css={css`
            font-size: 13px;
            text-align: center;
          `}
        >
          {data.upperTitle}
        </p>
        <span
          css={css`
            margin-top: 15px;
            margin-bottom: 15px;
            font-size: 22px;
          `}
        >
          {data.title}
        </span>
        <p
          css={css`
            font-size: 13px;
            text-align: center;
          `}
        >
          {data.lowerTitle}
        </p>
      </div>
    </SectionInner>
  );
};

const SpecialistComponent = ({ data }) => {
  const [isLoading, setLoading] = useState(true);
  const [specData, setSpecData] = useState(null);

  axios(`${fetchDataRoute}${data.id}`).then((res) => {
    setLoading(false);
    setSpecData(res.data);
  });

  return (
    <SectionInner>
      <Load state={isLoading}>
        <Specialist data={specData} />
      </Load>
    </SectionInner>
  );
};

const SliderSmall = ({ data }) => (
  <SectionInner key={JSON.stringify(data)}>
    <WorkingWithUs data={data} />
  </SectionInner>
);

const ComponentsMap = {
  image: Img,
  paragraph: Paragraph,
  definition: Definition,
  faq: Faq,
  priceList: PriceList,
  pageHeader: PageHeader,
  advantages: Advantages,
  links: BottomGradientLinks,
  files: Files,
  licenses: Licenses,
  partnersList: PartnersList,
  sliderSmall: SliderSmall,
  discontList: Discounts,
  heading: Heading,
  list: List,
  form: Form,
  paragraphWithGradient: ParagraphWithGradient,
  banner3lines: ThreeLinesBanner,
  banner: Banner,
  smallBanner: SmallBanner,
  commercialForm: CommercialForm,
  // specialist: SpecialistComponent,
};

const PageBuilder = ({ data }) => {
  return (
    <>
      {Object.values(data).map(
        (el) =>
          ComponentsMap[el.config] &&
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

ParagraphWithGradient.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

SmallBanner.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

Definition.propTypes = {
  data: {
    word: PropTypes.string,
    definition: PropTypes.string,
  }.isRequired,
};

Faq.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

PriceList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

PageHeader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Advantages.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

CommercialForm.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

Banner.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

BottomGradientLinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Files.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Licenses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

PartnersList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

SliderSmall.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Discounts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Heading.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

List.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

Form.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

ThreeLinesBanner.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

SpecialistComponent.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

PageBuilder.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default PageBuilder;
