import { EllipsisMultiLine } from 'components/EllipsisMultiline/EllipsisMultiline';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 115px;
    max-height: 100%;
    background: ${theme.colors.secondary};
    width: 360px;
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

    p {
      color: ${theme.colors.white};
      ${EllipsisMultiLine}
      -webkit-line-clamp: 4;
    }

    small {
      display: flex;
      flex: 1;
      align-items: flex-end;
      color: ${theme.colors.gray};
    }
  `}
`;
