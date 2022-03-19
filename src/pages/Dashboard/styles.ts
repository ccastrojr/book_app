import { breakpoints, colors } from 'common/styles/theme';
import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h1`
  position: relative;

  font-size: 28px;
  font-weight: 700;
  color: ${colors.highBlue};

  margin-bottom: 30px;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;

    height: 2px;
    width: 50px;

    background: ${colors.lightBlue};
  }
`;

export const SearchWrapper = styled.div`
  display: grid;
  grid-template-columns: 85% 15%;
  column-gap: 5px;

  @media (max-width: ${breakpoints.small}) {
    grid-template-columns: 70% 30%;
  }
`;

export const RegisterBookButtonWrapper = styled.div`
  width: 200px;
  margin: 0 0 30px 20px;

  @media (max-width: ${breakpoints.small}) {
    width: 100%;
    margin: 0 0 30px;
  }
`;
