import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.xs} ${theme.spacings.md};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-left: ${theme.spacings.xlg};
    flex: 1;

    span {
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings['2xs']};
    }
  `}
`;

export const CoinList = styled.div``;
