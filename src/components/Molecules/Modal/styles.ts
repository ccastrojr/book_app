import { breakpoints, colors } from 'common/styles/theme';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 9999;

  transition: all 0.5s 0.5s ease-in-out;
  background-color: rgb(0, 0, 0, 0.5);

  animation: ${animation} 0.75s;
`;

export const Content = styled.section`
  position: fixed;
  top: 20px;
  left: 50%;

  min-width: 530px;
  max-width: 70vw;
  max-height: 95%;
  z-index: 99999;

  overflow: auto;
  padding: 25px 50px;
  border-radius: 20px;
  background: ${colors.white};
  transition: all 0.5s ease-in-out;

  opacity: 1;
  transform: translate(-50%, 0);
  animation: ${animation} 0.75s;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: ${colors.secondaryGrey};
  }

  @media (max-width: ${breakpoints.small}) {
    min-width: 90%;
    max-height: 95%;

    padding: 20px 25px;
  }
`;

export const Header = styled.header`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-bottom: 30px;

  > button {
    position: absolute;
    top: 10px;
    right: 0;

    background: transparent;
    border: none;
  }
`;
