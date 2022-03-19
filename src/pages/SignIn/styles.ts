import { font, colors, breakpoints } from 'common/styles/theme';
import styled, { keyframes } from 'styled-components';

const appearAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;

  max-width: 420px;
  min-width: 360px;
  animation: ${appearAnimation} 1s;

  @media (max-width: ${breakpoints.small}) {
    row-gap: 20px;
  }
`;

export const Header = styled.header`
  h3 {
    font-size: 30px;
    font-weight: ${font.bold};
    line-height: 2;
  }

  p {
    font-size: 13px;
    font-weight: ${font.normal};
    line-height: 20px;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 30px;

  @media (max-width: ${breakpoints.small}) {
    row-gap: 20px;
  }
`;

export const ForgetPassword = styled.div`
  display: flex;
  justify-content: center;

  > a {
    font-size: 15px;
    font-weight: ${font.semiBold};
    color: ${colors.grey};
  }
`;
