import { breakpoints, colors } from 'common/styles/theme';
import { transitionCommonProps } from 'common/utils/defaultCSS';
import styled from 'styled-components';

interface IImageProps {
  image_path: string;
}

export const Container = styled.div`
  position: relative;
  width: 100%;

  padding: 10px;
  border-radius: 4px;

  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);

  transition: ${transitionCommonProps};

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

export const Image = styled.div<IImageProps>`
  height: 42vh;
  width: 100%;

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  background-image: url(${props => props.image_path});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${breakpoints.small}) {
    height: 28vh;
  }

  @media (max-width: ${breakpoints.large}) and (min-width: ${breakpoints.medium}) {
    height: 25vh;
  }
`;

export const BookTitle = styled.h4`
  height: 34px;
  font-size: 14px;
  text-align: center;

  padding: 0 10px;
  margin-top: 10px;
  color: ${colors.grey};

  @supports (-webkit-line-clamp: 2) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    overflow: hidden;

    text-overflow: ellipsis;
  }
`;

export const Actions = styled.div`
  width: 100%;
  margin-top: 12px;

  > button {
    height: 32px;
    font-size: 14px;
  }

  button + button {
    margin-top: 5px;
  }
`;
