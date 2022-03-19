import { breakpoints, colors } from 'common/styles/theme';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;

  @media (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

export const ChildrenWrapper = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${colors.white};
  overflow-x: hidden;

  padding: 50px 60px;

  @media (max-width: ${breakpoints.medium}) {
    padding: 90px 20px;
  }
`;
