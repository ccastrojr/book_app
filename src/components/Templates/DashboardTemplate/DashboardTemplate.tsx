import { ReactNode } from 'react';

import { Menu } from 'components/Organisms';

import * as S from './styles';

interface DashboardTemplateProps {
  children: ReactNode;
}

function DashboardTemplate({ children }: DashboardTemplateProps) {
  return (
    <S.Container>
      <Menu />
      <S.ChildrenWrapper>{children}</S.ChildrenWrapper>
    </S.Container>
  );
}

export { DashboardTemplate };
