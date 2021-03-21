const Tab = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 245px;
  ${getLastPath(location.pathname) === rout.path &&
  `background-image: ${theme.colors.linearGradient};`}

  &:nth-type(2n) {
    border-right: 1px solid rgba(${theme.colors.colorText.rgb}, 0.6);
    border-left: 1px solid rgba(${theme.colors.colorText.rgb}, 0.6);
  }

  &:hover {
    background-image: ${theme.colors.linearGradient};
  }
`;

const TabLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 21px;
  padding-bottom: 22px;
  font-size: ${theme.fontSizes.altFs};
  line-height: ${theme.fontSizes.altLh};
  ${getLastPath(location.pathname) === rout.path &&
  `color: ${theme.colors.altColorText};`}

  &:hover {
    color: ${theme.colors.altColorText};
  }
`;
