import styled from 'styled-components';

const Content = styled.div`
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadiuses.md};
  background-color: ${({ theme }) => theme.colors.foreground};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  padding: ${({ theme }) => `${theme.sizes.contentVerticalPadding} ${theme.sizes.contentHorizontalPadding}`};
`;

export default Content;
