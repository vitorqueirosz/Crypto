import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
  `}
`;
