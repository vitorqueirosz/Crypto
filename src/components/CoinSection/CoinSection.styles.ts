import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${theme.spacings.sm} 0;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

export const Content = styled.main`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.lg};

    div {
      &:first-child {
        border-top: none;
      }
    }
  `}
`;
