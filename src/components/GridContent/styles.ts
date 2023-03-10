import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  text-align: center;
  max-width: 58rem;
  margin: 0 auto;
  background: black;
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xhuge} 0;
  `}
`;
