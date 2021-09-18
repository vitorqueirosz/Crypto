import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const ChartWrapper = styled.div`
  ${({ theme }) => css`
    height: 350px;
    margin-bottom: ${theme.spacings.sm};
    background: #ebebeb;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.sm};
    font-weight: 500;
  `}
`;
