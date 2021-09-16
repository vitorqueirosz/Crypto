import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 68px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-left: none;
  border-right: none;

  ${media.lessThan('large')`
    overflow-y: overlay;
    height: 80px;
  `}
`;
