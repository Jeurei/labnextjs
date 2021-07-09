import styled from '@emotion/styled';
import { breakpointsMap } from 'constants/styles';

export const Tab = styled.li`
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
        border-right: 1px solid rgba(74, 74, 74, 0.2);
        border-left: 1px solid rgba(74, 74, 74, 0.2);
      }
    }
  }
`;

export const TabLink = styled('a')`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 21px;
  padding-bottom: 22px;
  font-size: 13px;
  line-height: 17px;

  &:hover {
    color: #fff;
  }
`;

export const TabsContainer = styled.div`
  padding-top: 0;
`;

export const TabList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 0;
  box-shadow: 1px 1px 22px 0 RGBA(74, 74, 74, 0.2);
  list-style: none;

  ${breakpointsMap.TABLET} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  ${breakpointsMap.DESKTOP} {
    flex-wrap: nowrap;
  }
`;
