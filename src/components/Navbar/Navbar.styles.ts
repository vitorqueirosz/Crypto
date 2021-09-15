import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: ${theme.colors.black};
    height: 80px;

    svg {
      width: 60px;
      height: 60px;
    }
  `}
`;
