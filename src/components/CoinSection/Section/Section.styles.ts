import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    width: 100%;
    border-top: 1px solid ${theme.colors.gray};
    margin-top: ${theme.spacings.xs};
    padding-top: ${theme.spacings['2xs']};
  `}
`;

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.gold};
    margin-bottom: ${theme.spacings.xs};
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
`;
