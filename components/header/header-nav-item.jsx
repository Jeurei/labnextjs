import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { ReactComponent as ArrowRightIcon } from 'icons/arrrow-right.svg';
import { useState } from 'react';
import { bindActionCreators } from 'redux';
import { setSpecialists } from 'Redux/actions/actions';
import { connect } from 'react-redux';
import SpecialistsNav from './specialists-nav';

const HeaderNavItem = ({ isTop, data, specialities }) => {
  const theme = useTheme();

  const SubNav = styled('ul')`
    position: absolute;
    z-index: 1000;
    top: ${isTop ? 'calc(110% - 7px)' : '100%'};
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

  const defaultNav = (navData, root) => {
    const Item = styled('li')`
      position: relative;
      display: flex;
      width: 100%;
      height: 70px;
      align-items: center;
      padding-left: 27px;
      font-size: 16px;

      &:hover {
        background-color: #cacaca54;
      }
    `;

    const LinkItem = styled('a')`
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      cursor: pointer;
      white-space: normal;
    `;

    return (
      <SubNav
        css={css`
          left: calc(100% - 103px);
          min-width: 282px;
          flex-direction: column;
          justify-content: space-between;
          padding-top: 0;
          padding-bottom: 0;
        `}
      >
        {navData.map((el) => (
          <Item>
            <Link href={`${root}${el.link}`}>
              <LinkItem>{el.text}</LinkItem>
            </Link>
            <ArrowRightIcon
              width="28px"
              height="23px"
              fill="currentColor"
              css={css`
                position: absolute;
                top: 24px;
                right: 10px;
                color: ${theme.colors.inactiveColor};
              `}
            />
          </Item>
        ))}
      </SubNav>
    );
  };

  const corpoNav = () => (
    <SubNav
      css={css`
        left: 50%;
        width: 1170px;
        min-width: 1170px;
        transform: translateX(-50%);
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
              justify-content: flex-start;
              padding: 0;
              padding: 46px 36px;
              font-size: 16px;
              list-style: none;

              li:nth-of-type(odd) {
                padding: 0px 86px 0 0;
                margin-right: auto;
              }
            `}
          >
            {data.children.map((el) => (
              <li
                css={css`
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
          left: 50%;
          width: 940px;
          min-width: 940px;
          min-height: 563px;
          transform: translateX(-50%);
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
                padding: 35px 18px;
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
      <SpecialistsNav isTop={isTop} specialists={specialities} />
    ),
    '/services': () => servicesNav(),
    '/corpo': () => corpoNav(),
  };

  return (
    <ul
      css={css`
        padding: 0;
        margin-top: 0;
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
              cursor: pointer;
              white-space: nowrap;

              ${!!data.children.length && `padding-right: 28px;`}

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
                defaultNav(data.children, data.path)
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
  specialities: PropTypes.objectOf(PropTypes.object).isRequired,
  setSpecialistsData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { specialities } = state;

  return { specialities };
};

const mapDispatchToProps = (dispatch) => ({
  setSpecialistsData: bindActionCreators(setSpecialists, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavItem);
