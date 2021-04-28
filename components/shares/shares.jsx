import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import { connect } from 'react-redux';
import Specialist from 'components/specialists/specialist';
import PropTypes from 'prop-types';
import PositionsCatalog from 'common/positions-catalog';
import Link from 'next/link';
import Image from 'next/image';
import { ReactComponent as Logo } from 'icons/sharesLogo.svg';
import Paragraph from 'components/common/paragraph';
import NumericUl from 'components/common/numeric-ul';
import CirclesUL from 'components/common/circles-ul';
import BigTable from 'components/common/big-table';
import MedCenterLink from 'components/common/medCenter-link';
import DoctorOnline from 'components/common/doctorOnline';
import Table from 'components/common/table';
import Complex from 'components/common/complex';
import Share from 'components/main/share';
import Articles from './articles';

const Shares = ({ shares }) => {
  return (
    <>
      <h2 className="main__title">Акции</h2>
      <ul
        css={css`
          display: flex;
          flex-wrap: wrap;
          align-items: stretch;
          padding: 0;
          list-style: none;

          .shares__list-item {
            min-width: 381px;
            min-height: 100%;
            margin-right: 37px;
          }
        `}
      >
        {shares.map((el) => (
          <Share data={el} />
        ))}
      </ul>

      {/* <article
        css={css`
          width: 100%;
          height: 511px;
          padding-top: 57px;
          padding-bottom: 64px;
          padding-left: 58px;
          background-image: url('img/sharesBg.png');
          background-repeat: no-repeat;
          background-size: cover;
          color: ${theme.colors.white};

          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-image: url('img/sharesBg@2x.png');
          }
        `}
      >
        <Link href="/">
          <a>
            <Logo alt="Логотип ЛабДиагностики" width="265" height="39" />
            <h2
              className="main__title"
              css={css`
                margin-top: auto;
                margin-bottom: 99px;
                color: ${theme.colors.white};

                &:after {
                  color: ${theme.colors.white};
                  font-weight: 500;
                  opacity: 1;
                }
              `}
            >
              Акция диагностика со скидкой 50%
            </h2>
            <span
              css={css`
                color: ${theme.colors.white};
                font-size: 16px;
              `}
            >
              До конца акции осталось 3 дня 12 часов 11минут 11 секунд
            </span>
          </a>
        </Link>
      </article>
      <div
        css={css`
          padding-right: 10px;
          padding-left: 10px;
          .sharePage__img {
            width: 100%;
          }
        `}
      >
        <h3
          css={css`
            margin-bottom: 30px;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Обязанности:
        </h3>
        <Paragraph
          text="Ведение бухгалтерского учета государственных учреждений (операции с
          нефинансовыми активами, расчеты с дебиторами по доходам ( в т.ч. учет
          администрирования доходов главным администратором доходов),
          санкционирование, расчеты с поставщиками и подрядчиками)"
        />
        <Image
          src="/img/sharesImg.png"
          imgClass="sharePage__img"
          width="1170"
          height="511"
        />
      </div>
      <div
        css={css`
          padding-right: 10px;
          padding-left: 10px;
        `}
      >
        <h3
          css={css`
            margin-bottom: 30px;
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Обязанности:
        </h3>
        <Paragraph
          text="Ведение бухгалтерского учета государственных учреждений (операции с
          нефинансовыми активами, расчеты с дебиторами по доходам ( в т.ч. учет
          администрирования доходов главным администратором доходов),
          санкционирование, расчеты с поставщиками и подрядчиками)"
          withLinear
        />
      </div>
      <div
        css={css`
          padding-right: 10px;
          padding-left: 10px;
        `}
      >
        <h3
          css={css`
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Классификация болезней
        </h3>
        <CirclesUL />
        <NumericUl />
      </div>
      <BigTable />
      <MedCenterLink />
      <div
        css={css`
          margin-top: 10px;
        `}
      >
        <Specialist data={specialists[0]} />
      </div>
      <div
        css={css`
          padding-right: 10px;
          padding-left: 10px;
        `}
      >
        <h2
          css={css`
            font-size: 16px;
            font-weight: 500;
          `}
        >
          Выберите специалиста
        </h2>
        <PositionsCatalog />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 37px;
          padding-right: 10px;
          padding-left: 10px;

          ${breakpointsMap.TABLET} {
            flex-direction: row;
            flex-wrap: wrap;
          }
        `}
      >
        {new Array(3).fill().map(() => (
          <DoctorOnline />
        ))}
      </div>
      <Table />
      <Complex />
      <Share />
      <Articles /> */}
    </>
  );
};

Shares.propTypes = {
  shares: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  const { shares } = state;

  return { shares };
};

export default connect(mapStateToProps, null)(Shares);
