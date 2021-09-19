import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.xs};
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin: ${theme.spacings.xs} 0 ${theme.spacings.lg};
    font-weight: 500;
  `}
`;

export const Divisor = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  ${media.lessThan('large')`
    grid-template-columns: 1fr;
  `}
`;

export const CoinBody = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding-right: ${theme.spacings.lg};

    > small {
      color: ${theme.colors.gray};
      margin: ${theme.spacings['2xs']} 0 ${theme.spacings['2xs']};
    }

    p {
      color: ${theme.colors.lightGray};
      line-height: ${theme.spacings.sm};
    }

    ${media.lessThan('large')`
      padding-right: 0;
    `}
  `}
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.lessThan('large')`
    margin-top: ${({ theme }) => theme.spacings.sm};
  `}
`;

export const Banner = styled.img`
  width: 700px;
  height: 300px;
  object-fit: cover;

  ${media.lessThan('large')`
    width: 100%;
  `}
`;
