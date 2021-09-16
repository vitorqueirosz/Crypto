import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${theme.spacings.sm} 0;

    ${media.lessThan('large')`
      padding: ${theme.spacings.sm} ${theme.spacings.xs};
    `}
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

    ${media.lessThan('large')`
      margin-top: ${theme.spacings['2xs']};
    `}
  `}
`;
