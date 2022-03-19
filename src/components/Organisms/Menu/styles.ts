import MUIDrawer from '@mui/material/Drawer';
import { drawerWidth, colors, font, breakpoints } from 'common/styles/theme';
import styled from 'styled-components';

export const Drawer = styled(MUIDrawer)`
  width: ${drawerWidth};

  & .MuiDrawer-paper {
    background: ${colors.highBlue};
    width: ${drawerWidth};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  padding: 50px 0px;

  @media (max-width: ${breakpoints.medium}) {
    width: ${drawerWidth};
    background: ${colors.highBlue};
  }
`;

export const ListContainer = styled.div`
  width: 100%;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: fit-content;

  margin-bottom: 74px;

  img {
    width: 176px;
    height: 91px;
  }

  @media (max-width: ${breakpoints.small}) {
    margin-bottom: 54px;
  }
`;

export const Footer = styled.div`
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 0 30px;

    font-size: 16px;
    font-weight: ${font.bold};
    color: ${colors.white};
    text-decoration: none;
    background: transparent;
    border: none;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 15px;
  }
`;

export const MobileBar = styled.div`
  display: flex;
  align-items: center;

  position: fixed;

  padding: 0 20px;

  height: 60px;
  width: 100%;
  background: ${colors.highBlue};

  z-index: 2;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    height: 50px;
    width: auto;
  }
`;
