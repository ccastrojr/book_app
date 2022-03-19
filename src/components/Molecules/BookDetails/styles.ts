import { colors, breakpoints } from 'common/styles/theme';
import styled from 'styled-components';

interface IImageProps {
  image_path: string;
}

export const Container = styled.div`
  min-width: 42vw;

  @media (max-width: ${breakpoints.small}) {
    width: initial;
  }
`;

export const Header = styled.div`
  margin-bottom: 30px;

  h2 {
    font-weight: 400;
    font-size: 24px;
    color: ${colors.grey};
  }

  @media (max-width: ${breakpoints.small}) {
    margin-bottom: 20px;

    h2 {
      font-size: 22px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 30% 60%;

  column-gap: 40px;

  @media (max-width: ${breakpoints.small}) {
    justify-items: center;
    grid-template-columns: 1fr;
  }

  @media (max-width: ${breakpoints.large}) and (min-width: ${breakpoints.medium}) {
    grid-template-columns: 45% 40%;
  }
`;

export const BookImage = styled.div<IImageProps>`
  width: 100%;
  height: 282px;

  background-image: url(${props => props.image_path});
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  box-shadow: 0 0 15px rgba(0, 0, 0, 0.75);

  @media (max-width: ${breakpoints.small}) {
    width: 180px;
    height: 255px;

    margin-bottom: 15px;
  }
`;

export const BookData = styled.div`
  h3 {
    font-size: 26px;
    color: ${colors.grey};

    margin-bottom: 20px;
  }

  p {
    text-align: justify;
    font-size: 14px;
    font-weight: 300;
  }

  @media (max-width: ${breakpoints.small}) {
    h3 {
      font-size: 24px;

      margin-bottom: 10px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 30px;
`;
