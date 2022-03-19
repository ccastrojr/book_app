import { breakpoints, colors } from 'common/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, calc(25% - 25px));
  row-gap: 30px;
  column-gap: 30px;

  width: 100%;
  padding: 0 20px;

  @media (max-width: ${breakpoints.small}) {
    grid-template-columns: repeat(2, calc(50% - 5px));
    row-gap: 25px;
    column-gap: 15px;

    padding: 0 5px;
  }

  @media (max-width: ${breakpoints.large}) and (min-width: ${breakpoints.medium}) {
    grid-template-columns: repeat(3, 30%);
  }

  @media (max-width: ${breakpoints.xlarge}) and (min-width: ${breakpoints.ipadAir}) {
    grid-template-columns: repeat(2, 50%);
  }
`;

export const NoBookMessage = styled.h3`
  font-size: 28px;
  color: ${colors.grey};
`;
