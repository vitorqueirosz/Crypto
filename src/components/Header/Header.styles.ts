import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.xs} ${theme.spacings.md} 0;

    ${media.lessThan('large')`
      padding: ${theme.spacings.xs} 0 0;

      svg {
        display: none;
      }
    `}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-left: ${theme.spacings.xlg};
    width: 90%;
    flex: 1;

    span {
      color: ${theme.colors.white};
      margin-bottom: ${theme.spacings['2xs']};
    }

    ${media.lessThan('large')`
      margin-left: 0;
    `}
  `}
`;

export const CoinList = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
