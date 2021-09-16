import styled, { css, DefaultTheme } from 'styled-components';
import { CotationProps } from './Cotation';

type WrapperProps = Pick<CotationProps, 'isPriceLower' | 'isPriceHigher'>;

const wrapperModifiers = {
  isPriceLower: (theme: DefaultTheme) => css`
    ${CurrentValue} {
      color: ${theme.colors.red};
    }

    ${Percent} {
      background: ${theme.colors.red};
      color: ${theme.colors.white};
    }
  `,
  isPriceHigher: (theme: DefaultTheme) => css`
    ${CurrentValue} {
      color: #31d322;
    }

    ${Percent} {
      background: #31d322;
      color: ${theme.colors.white};
    }
  `,
};

export const Wrapper = styled.article<WrapperProps>`
  ${({ theme, isPriceLower, isPriceHigher }) => css`
    min-width: 160px;
    width: 160px;
    background: ${theme.colors.secondary};
    padding: ${theme.spacings['2xs']} ${theme.spacings.xs};
    height: 100%;
    border-right: 1px solid ${theme.colors.gray};

    > span {
      text-transform: uppercase;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.sm};
    }

    &:first-child {
      border-left: 1px solid ${theme.colors.gray};
    }

    ${isPriceLower && wrapperModifiers.isPriceLower(theme)}
    ${isPriceHigher && wrapperModifiers.isPriceHigher(theme)}
  `}
`;

export const Divisor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: calc(${({ theme }) => theme.spacings['2xs']} / 2);
`;

export const CurrentValue = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const Percent = styled.small`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    text-align: center;
    width: 38px;
    padding: 2px 0;
    font-size: ${theme.font.sizes.xs};
    font-weight: medium;
    border-radius: ${theme.borderRadius.xs};
  `}
`;
