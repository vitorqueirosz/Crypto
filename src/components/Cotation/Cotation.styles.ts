import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 152px;
    background: ${theme.colors.secondary};
    padding: ${theme.spacings['2xs']} ${theme.spacings.xs};
    height: 100%;

    > span {
      text-transform: uppercase;
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.sm};
    }
  `}
`;

export const Divisor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: calc(${({ theme }) => theme.spacings['2xs']} / 2);
`;

export const CurrentValue = styled.span`
  color: #31d322;
`;

export const Percent = styled.small`
  ${({ theme }) => css`
    background: #269a1c;
    color: ${theme.colors.white};
    text-align: center;
    width: 38px;
    padding: 2px 0;
    font-size: ${theme.font.sizes.xs};
    font-weight: medium;
    border-radius: ${theme.borderRadius.xs};
  `}
`;
