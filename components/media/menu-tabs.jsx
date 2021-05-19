import { useTheme, css } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpointsMap } from 'constants/styles';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const MenuTabs = ({ routes, root }) => {
  const theme = useTheme();
  const router = useRouter();
  const DEFAULT__ROUTE = '/media';
  const createTab = (rout) => {
    const currentLink = router.pathname.split('/')[
      router.pathname.split('/').length - 1
    ];

    return (
      <Tab key={rout.link}>
        <TabLink
          onClick={() => {
            if (`/${currentLink}` !== rout.link)
              router.push(`/${root}${rout.link}`);
          }}
          css={css`
            ${`/${currentLink}` === rout.link &&
            `background-image: linear-gradient(254deg, #57aafb, #c837f0);
            color: ${theme.colors.altColorText};`}
          `}
        >
          {rout.text}
        </TabLink>
      </Tab>
    );
  };

  const Tab = styled.li`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:last-child {
      border-bottom: none;
    }

    ${breakpointsMap.TABLET} {
      width: 245px;
      flex-grow: 1;
      border-bottom: none;

      ${breakpointsMap.DESKTOP} {
        width: 245px;

        &:nth-of-type(2n) {
          border-right: 1px solid rgba(${theme.colors.colorText.rgb}, 0.2);
          border-left: 1px solid rgba(${theme.colors.colorText.rgb}, 0.2);
        }
      }
    }
  `;

  const TabLink = styled('button')`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 21px;
    padding-bottom: 22px;
    border: none;
    appearance: none;
    background-color: #fff;
    font-size: ${theme.fontSizes.altFs};
    line-height: ${theme.fontSizes.altLh};

    &:hover {
      background-image: linear-gradient(254deg, #57aafb, #c837f0);
      color: ${theme.colors.altColorText};
    }
  `;

  const TabsContainer = styled.div`
    padding-top: 0;
  `;

  const TabList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    box-shadow: ${theme.colors.boxShadow};
    list-style: none;

    ${breakpointsMap.TABLET} {
      flex-direction: row;
      flex-wrap: wrap;
    }

    ${breakpointsMap.DESKTOP} {
      flex-wrap: nowrap;
    }
  `;

  return (
    <TabsContainer>
      <TabList>
        <Tab>
          <TabLink
            aria-label="Оставить отзыв"
            onClick={() => router.push('/media')}
            css={css`
              position: relative;

              ${`/${
                router.pathname.split('/')[
                  router.pathname.split('/').length - 1
                ]
              }` === DEFAULT__ROUTE &&
              `background-image: linear-gradient(254deg, #57aafb, #c837f0);
              color: ${theme.colors.altColorText};`}

              &:hover {
                background-image: none;
                background-image: linear-gradient(254deg, #57aafb, #c837f0);
                color: #fff;
              }
            `}
          >
            Все публикации
          </TabLink>
        </Tab>
        {routes.children.map((el) => createTab(el))}{' '}
      </TabList>
    </TabsContainer>
  );
};

MenuTabs.propTypes = {
  routes: PropTypes.objectOf(PropTypes.any).isRequired,
  root: PropTypes.string.isRequired,
};

export default MenuTabs;
