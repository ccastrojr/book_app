import { useState, KeyboardEvent, MouseEvent } from 'react';

import { SwipeableDrawer } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as Logout } from 'common/assets/svgs/logout.svg';
import { breakpoints, colors } from 'common/styles/theme';
import { HamburgerButton } from 'components/Atoms';
import { MenuList } from 'components/Molecules';
import { useAuth } from 'hooks/auth';

import * as S from './styles';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { signOut } = useAuth();

  const match = useMediaQuery(`(max-width:${breakpoints.medium})`);

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setMenuOpen(open);
    };

  return (
    <>
      {!match ? (
        <S.Drawer variant="permanent" anchor="left" data-testid="desktop_menu">
          <S.Container>
            <S.ListContainer>
              <MenuList />
            </S.ListContainer>

            <S.Footer>
              <button type="button" onClick={() => signOut()}>
                Sair <Logout />
              </button>
            </S.Footer>
          </S.Container>
        </S.Drawer>
      ) : (
        <S.MobileBar data-testid="mobile_menu">
          <HamburgerButton
            color={colors.white}
            checked={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />

          <SwipeableDrawer
            anchor="left"
            open={menuOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <S.Container>
              <S.ListContainer>
                <MenuList />
              </S.ListContainer>

              <S.Footer>
                <button type="button" onClick={() => signOut()}>
                  Sair <Logout />
                </button>
              </S.Footer>
            </S.Container>
          </SwipeableDrawer>
        </S.MobileBar>
      )}
    </>
  );
}

export { Menu };
