import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ReactComponent as ArrowRightIcon } from 'icons/arrrow-right.svg';
import { useEffect, useState } from 'react';
import Load from 'components/common/load';
import { bindActionCreators } from 'redux';
import { serverRoutesMap, setSpecialists } from 'Redux/actions/actions';
import { connect } from 'react-redux';
import { getData } from 'fetch';
import SpecialistsNav from './specialists-nav';

const HeaderNavItem = ({ isTop, data, specialists, setSpecialistsData }) => {
  const theme = useTheme();
  const [isLoading, setLoading] = useState();

  const SubNav = styled('ul')`
    position: absolute;
    z-index: 1000;
    top: ${isTop ? 'calc(110% - 2px)' : '100%'};
    left: calc(0% - 100px);
    display: none;
    min-width: 1170px;
    padding: 0;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.colors.boxShadow};
    list-style: none;

    &:hover {
      display: none;
    }
  `;

  const defaultNav = () => {
    const Item = styled('li')`
      position: relative;
      width: 100%;
      font-size: 16px;
    `;

    return (
      <SubNav
        css={css`
          left: calc(100% - 74px);
          min-width: 282px;
          height: 292px;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 56px;
          padding-bottom: 38px;
          padding-left: 27px;
        `}
      >
        <Item>
          <span>
            Поставщикам расходных
            <br />
            материалов
          </span>
          <ArrowRightIcon
            width="28px"
            height="23px"
            fill="currentColor"
            css={css`
              position: absolute;
              top: -2px;
              right: 10px;
              color: ${theme.colors.inactiveColor};
            `}
          />
        </Item>
        <Item>
          <span>Вопрос/ответ</span>
          <ArrowRightIcon
            width="28px"
            height="23px"
            fill="currentColor"
            css={css`
              position: absolute;
              top: -2px;
              right: 10px;
              color: ${theme.colors.inactiveColor};
            `}
          />
        </Item>
        <Item>
          <span>Отзывы</span>
          <ArrowRightIcon
            width="28px"
            height="23px"
            fill="currentColor"
            css={css`
              position: absolute;
              top: -2px;
              right: 10px;
              color: ${theme.colors.inactiveColor};
            `}
          />
        </Item>
        <Item>
          <span>Реквизиты</span>
          <ArrowRightIcon
            width="28px"
            height="23px"
            fill="currentColor"
            css={css`
              position: absolute;
              top: -2px;
              right: 10px;
              color: ${theme.colors.inactiveColor};
            `}
          />
        </Item>
      </SubNav>
    );
  };

  const corpoNav = () => (
    <SubNav>
      <li
        css={css`
          display: flex;
          width: 50%;
          min-height: 297px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-image: url('/img/corpo-nav-bg.png');
          background-repeat: no-repeat;
          background-size: cover;
          color: ${theme.colors.white};
          list-style: none;

          @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
            background-color: url(/img/corpo-nav-bg@2x.png);
          }
        `}
      >
        <h3
          css={css`
            margin-right: 0;
            margin-bottom: 0;
            font-size: 33px;
            font-weight: 500;
          `}
        >
          {data.name}
        </h3>
        <p
          css={css`
            font-size: 16px;
            text-align: center;
          `}
        >
          Какой то текст чтобы корпоративный
          <br />
          клиент узнал себя
        </p>
      </li>
      <li
        css={css`
          width: 50%;
          padding: 0;
        `}
      >
        <div
          css={css`
            height: 100%;
          `}
        >
          <ul
            css={css`
              display: flex;
              height: 100%;
              flex-wrap: wrap;
              justify-content: space-between;
              padding: 0;
              padding: 46px 36px;
              font-size: 16px;
              list-style: none;
            `}
          >
            {data.children.map((el) => (
              <li
                css={css`
                  margin-right: 10px;
                  margin-bottom: 10px;
                `}
              >
                <Link href={el.link}>
                  <a>{el.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </SubNav>
  );

  const servicesNav = () => {
    const Title = styled('h3')`
      margin: 0;
      margin-bottom: 20px;
      font-size: 22px;
      font-weight: 500;
    `;

    const Item = styled('li')`
      display: flex;
      width: 40%;
      max-width: 40%;
      flex-direction: column;
      padding-top: 41px;
      padding-bottom: 36px;
      margin: 0;
      white-space: pre;
    `;

    const LinkItem = styled('a')`
      width: 100%;
      font-size: 16px;
    `;

    return (
      <SubNav
        css={css`
          left: -20px;
          min-width: 586px;
          min-height: 563px;
        `}
      >
        <li
          css={css`
            display: flex;
            width: 50%;
            min-height: 297px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-image: url('/img/specNav.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            color: ${theme.colors.white};
            list-style: none;

            @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
              background-color: url(/img/cspecNav@2x.jpg);
            }
          `}
        >
          <h3
            css={css`
              margin-right: 0;
              margin-bottom: 21px;
              font-size: 33px;
              font-weight: 500;
              line-height: 40px;
              text-align: center;
            `}
          >
            Уникальное товарное
            <br /> предложение
          </h3>
          <p
            css={css`
              margin-bottom: 28px;
              font-size: 16px;
              text-align: center;
            `}
          >
            Какой то текст чтобы корпоративный
            <br />
            клиент узнал себя
          </p>
          <button
            className="button"
            type="button"
            aria-label="Узнать подробнее об уникальном предложении"
            css={css`
              width: 140px;
              padding-top: 18px;
              padding-bottom: 18px;
            `}
          >
            Подробнее
          </button>
        </li>
        <li
          css={css`
            width: 50%;
            padding: 0;
          `}
        >
          <div>
            <ul
              css={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                padding: 0;
                padding: 35px 58px;
                font-size: 16px;
                list-style: none;
              `}
            >
              {data.children.map((el) => (
                <Item
                  css={css`
                    margin-right: 10px;
                    margin-bottom: 10px;
                  `}
                >
                  <Title>Услуги врачей</Title>
                  <Link href={el.link}>
                    <LinkItem>{el.text}</LinkItem>
                  </Link>
                </Item>
              ))}
            </ul>
          </div>
        </li>
      </SubNav>
    );
  };

  const unqueNavsMap = {
    '/specialists': () => (
      <SpecialistsNav
        isTop={isTop}
        specialists={specialists}
        isLoading={isLoading}
      />
    ),
    '/services': () => servicesNav(),
    '/corpo': () => corpoNav(),
  };

  useEffect(() => {
    if (specialists.length === 0) {
      setLoading(true);
      getData(serverRoutesMap.SPECIALISTS).then((res) => {
        setSpecialistsData(res);
        setLoading(false);
      });
    }
  }, []);

  return (
    <ul
      css={css`
        padding: 0;
        margin-top: 0;
        margin-right: 28px;
        margin-bottom: 0;
        list-style: none;
      `}
    >
      <li
        className="header__nav-item"
        css={css`
          display: flex;
          min-height: 100%;

          ${breakpointsMap.DESKTOP} {
            &:hover {
              ul {
                display: flex;
              }
            }
          }
        `}
      >
        <Link
          href={data.path}
          css={css`
            display: flex;
            min-height: 100%;
            align-items: center;
          `}
        >
          <a
            css={css`
              display: flex;
              min-height: 100%;
              align-items: center;
              white-space: nowrap;
              ${!!data.children.length &&
              !unqueNavsMap[data.path] &&
              'position:relative;'}
            `}
          >
            <span
              css={css`
                position: relative;
                cursor: pointer;
                &:after,
                &:before {
                  position: absolute;
                  top: 50%;
                  right: -18px;
                  display: ${data.children.length ? 'block' : 'none'};
                  width: 10px;
                  height: 1px;
                  background-color: ${theme.colors.colorText.hex};
                  content: '';
                }

                &:after {
                  transform: rotate(45deg);
                }
                &:before {
                  right: -25px;
                  transform: rotate(-45deg);
                }
              `}
            >
              {data.name}
            </span>
            {data.children.length !== 0
              ? (unqueNavsMap[data.path] && unqueNavsMap[data.path]()) ||
                defaultNav()
              : ''}
          </a>
        </Link>
      </li>
    </ul>
  );
};

HeaderNavItem.propTypes = {
  isTop: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.arrayOf(PropTypes.object),
    ]).isRequired.isRequired,
  }).isRequired,
  specialists: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSpecialistsData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { specialists } = state;

  return { specialists };
};

const mapDispatchToProps = (dispatch) => ({
  setSpecialistsData: bindActionCreators(setSpecialists, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavItem);
