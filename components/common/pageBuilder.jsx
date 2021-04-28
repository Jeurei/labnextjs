import Image from 'next/image';
import PropTypes from 'prop-types';
import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import { numberWithSpaces } from 'utils/common';
import { ReactComponent as FeLogo } from 'icons/features__logo-img.svg';
import Accordeon from './accordeon';
import LinearBottomButton from './linear-bottom-button';
import File from './file';
import ReferencesSlider from './references-slider';
import WorkingWithUs from './working-with-us';

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

const Paragraph = ({ data }) => {
  return (
    <>
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
    </>
  );
};

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

const Faq = ({ data }) => {
  return data.faqList.map((el, index) => (
    <Accordeon title={el.question} id={`${index}-faq`}>
      {el.answer}
    </Accordeon>
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
    rowData: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return (
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
          <TableRow rowData={el} />
        ))}
      </tbody>
    </table>
  );
};

const PageHeader = ({ data }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: relative;
        display: flex;
        min-height: 366px;
        color: ${theme.colors.white};

        .aboutus__img-container {
          display: none;
          width: 100%;
          height: 100%;
          align-items: center;
        }

        &:before {
          position: absolute;
          z-index: -1;
          left: -10%;
          display: block;
          width: 110vw;
          min-height: 100%;
          background-image: url(/img/aboutusbg.png);
          background-repeat: no-repeat;
          background-size: cover;
          content: '';

          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-image: url(/img/aboutusbg@2x.png);
          }
        }

        ${breakpointsMap.TABLET} {
          .aboutus__img-container {
            display: flex;
          }
        }
      `}
    >
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
        <div className="aboutus__img-container">
          <Image
            src={data.imageCircle}
            className="aboutus__img"
            width="296"
            height="296"
          />
        </div>
      </div>
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

        &:after {
          position: absolute;
          z-index: -1;
          top: 0;
          left: -10%;
          display: block;
          width: 110vw;
          height: 100%;
          background-color: #f7f7f7;
          content: '';
        }
      `}
    >
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
    </div>
  );
};

const Banner = ({ data }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: relative;
        color: ${theme.colors.white};

        &:before {
          position: absolute;
          z-index: -1;
          left: -10%;
          display: block;
          width: 110vw;
          min-height: 100%;
          background-image: url(${data.icon}), ${theme.colors.linearGradient};
          background-position: calc(100% - 230px) -15px, center;
          background-repeat: no-repeat, repeat;
          content: '';

          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-image: url(${data.icon}), ${theme.colors.linearGradient};
          }
        }
      `}
    >
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
        <Paragraph>{data.text}</Paragraph>
      </div>
    </div>
  );
};

const BottomGradientLinks = ({ data }) => {
  return (
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
          left: -10%;
          display: block;
          width: 110vw;
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
          <LinearBottomButton>{el.title}</LinearBottomButton>
        ))}
      </div>
    </div>
  );
};

const Files = ({ data }) => {
  return (
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
        <File data={el} />
      ))}
    </div>
  );
};

const Licenses = ({ data }) => {
  return <ReferencesSlider title={data.title} data={data.licensesList} />;
};

const PartnersList = ({ data }) => (
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
      />
    ))}
  </div>
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
        cursor: pointer;

        &:hover {
          background-image: linear-gradient(247deg, #689afa, #f426ee);
          color: ${theme.colors.white};

          .discount__value-container {
            border-color: ${theme.colors.white};
            background-image: url('img/discountvalue.svg');
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
          margin-right: auto;
          margin-bottom: 30px;
        }
      `}
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

  return <>{DiscountBlock(data)}</>;
};

const SliderSmall = ({ data }) => <WorkingWithUs data={data} />;

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
  discont: Discounts,
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

Definition.propTypes = {
  data: {
    word: PropTypes.string,
    definition: PropTypes.string,
  }.isRequired,
};

Faq.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

PriceList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

PageHeader.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Advantages.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Banner.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

BottomGradientLinks.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Files.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Licenses.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

PartnersList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

SliderSmall.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Discounts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

PageBuilder.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default PageBuilder;
