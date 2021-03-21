import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { breakpointsMap } from 'constants/styles';
import Routes from '../../routes';

const ServicesTabs = () => {
  const theme = useTheme();

  const createTab = (rout) => {
    const Tab = styled.li`
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      &:hover {
        background-image: linear-gradient(254deg, #57aafb, #c837f0);
      }

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

    const TabLink = styled('a')`
      display: flex;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      padding-top: 21px;
      padding-bottom: 22px;
      font-size: ${theme.fontSizes.altFs};
      line-height: ${theme.fontSizes.altLh};

      &:hover {
        color: ${theme.colors.altColorText};
      }
    `;

    return (
      <Tab>
        <TabLink>{rout.name}</TabLink>
      </Tab>
    );
  };

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
      <TabList>{Routes.map((el) => createTab(el))}</TabList>
    </TabsContainer>
  );
};

export default ServicesTabs;
