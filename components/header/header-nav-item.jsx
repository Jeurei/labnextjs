import { css, useTheme } from '@emotion/react';
import { breakpointsMap } from 'constants/styles';
import Link from 'next/link';
import PropTypes from 'prop-types';

const HeaderNavItem = ({ isTop, data }) => {
  const theme = useTheme();
  return (
    <ul
      css={css`
        padding: 0;
        margin-right: 28px;
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
            {!!data.children.length && (
              <ul
                css={css`
                  position: absolute;
                  z-index: 1000;
                  top: ${isTop ? '140%' : '100%'};
                  left: ${isTop ? '70px' : '70px'};
                  display: none;
                  min-width: 1170px;
                  padding: 0;
                  background-color: ${theme.colors.white};
                  box-shadow: ${theme.colors.boxShadow};
                  list-style: none;

                  &:hover {
                    display: none;
                  }
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
                    background-image: url('img/corpo-nav-bg.png');
                    background-repeat: no-repeat;
                    background-size: cover;
                    color: ${theme.colors.white};
                    list-style: none;

                    @media (min-resolution: 1.5dppx), (min-resolution: 144dpi) {
                      background-color: url(img/corpo-nav-bg@2x.png);
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
                  <div>
                    <ul
                      css={css`
                        display: flex;
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
              </ul>
            )}
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
};

export default HeaderNavItem;
