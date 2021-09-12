import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;

    .slick-list,
    .slick-slider,
    .slick-track {
      position: relative;
      display: flex;
    }
    .slick-loading .slick-slide,
    .slick-loading .slick-track {
      visibility: hidden;
    }
    .slick-list {
      overflow: hidden;
      margin: 0;
      padding: 0;
      width: 100%;
    }
    .slick-list:focus {
      outline: 0;
    }
    .slick-track {
      top: 0;
      left: 0;
    }
    .slick-slide {
      position: relative;
      display: none;
      float: left;
      height: 100%;
      min-height: 1px;
    }
    .slick-slide img {
      display: block;
    }
    .slick-initialized .slick-slide {
      display: block;
    }
    .slick-vertical .slick-slide {
      display: block;
      height: auto;
      border: 1px solid transparent;
    }
    .slick-arrow.slick-hidden {
      display: none;
    }
    .slick-prev,
    .slick-next {
      display: block;
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      z-index: 1;
      border-radius: 50%;
      height: 40px;
      width: 40px;
      padding: ${theme.spacings['2xs']};
      transition: background 0.3s ease-in;
      color: ${theme.colors.white};

      &:hover {
        background: ${theme.colors.black};
      }
    }

    .slick-prev {
      left: -4%;
    }
    .slick-next {
      right: -4%;
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`;
