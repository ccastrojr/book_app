import banner from 'common/assets/images/login_banner.png';
import { breakpoints } from 'common/styles/theme';
import { backgroundImageCommonProps } from 'common/utils/defaultCSS';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;

  min-height: 100vh;
  width: 100%;

  @media (max-width: ${breakpoints.medium}) {
    grid-template-columns: 1fr;
    grid-template-rows: 45% 55%;
  }

  @media (max-width: ${breakpoints.small}) {
    grid-template-rows: 40% 60%;
  }
`;

export const BannerContainer = styled.aside`
  position: relative;

  background-image: url(${banner});
  ${backgroundImageCommonProps};
`;

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.small}) {
    padding: 10px 30px;
    align-items: flex-start;
  }
`;
