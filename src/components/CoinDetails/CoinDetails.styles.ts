import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

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
`;

export const CoinBody = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    > small {
      color: ${theme.colors.gray};
      margin: ${theme.spacings['2xs']} 0 ${theme.spacings['2xs']};
    }

    p {
      color: ${theme.colors.lightGray};
      line-height: ${theme.spacings.sm};
    }
  `}
`;

export const Aside = styled.aside`
  width: 100%;
`;

export const Banner = styled.img`
  width: 700px;
  height: 300px;
  object-fit: cover;
`;
