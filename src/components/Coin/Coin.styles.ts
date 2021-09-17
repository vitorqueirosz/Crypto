import { EllipsisMultiLine } from 'components/EllipsisMultiline/EllipsisMultiline';
import { CoinProps } from 'types/coin';
import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

const wrapperProps = {
  small: (theme: DefaultTheme) => css`
    height: 80px;
    min-width: 360px;
    width: 360px;

    ${Title} {
      font-size: ${theme.font.sizes.sm};
      -webkit-line-clamp: 2;
    }

    ${Details} {
      font-size: ${theme.font.sizes['2xs']};
    }

    ${media.lessThan('small')`
      min-width: 320px;
      width: 320px;

      ${Image} {
        width: 100px;
        object-fit: cover;
      }

      ${Title} {
        -webkit-line-clamp: 2;
      }
    `}
  `,
  normal: () => css`
    height: 115px;
    min-width: 360px;
    width: 360px;

    ${media.lessThan('small')`
      min-width: 320px;
      width: 320px;

      ${Image} {
        width: 100px;
        object-fit: cover;
      }

      ${Title} {
        ${EllipsisMultiLine} {
          -webkit-line-clamp: 3;
        }
      }
    `}
  `,
};

export const Wrapper = styled.div<Pick<CoinProps, 'size'>>`
  ${({ theme, size }) => css`
    display: flex;
    max-height: 100%;
    background: ${theme.colors.secondary};
    cursor: pointer;
    border: 1px solid transparent;
    transition: border 0.3s ease-in-out;

    &:hover {
      border-color: ${theme.colors.darkGray};
    }

    ${size && wrapperProps[size](theme)}
  `}
`;

export const Image = styled.img`
  height: 100%;
  width: 120px;
`;

export const Aside = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: ${theme.spacings['2xs']} ${theme.spacings.xs};
  `}
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${EllipsisMultiLine}
  -webkit-line-clamp: 4;
`;

export const Details = styled.small`
  display: flex;
  flex: 1;
  align-items: flex-end;
  color: ${({ theme }) => theme.colors.gray};
`;
