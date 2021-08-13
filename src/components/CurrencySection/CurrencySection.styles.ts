import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-left: none;
  border-right: none;
`;
