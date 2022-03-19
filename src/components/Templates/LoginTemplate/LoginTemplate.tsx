import { ReactNode } from 'react';

import * as S from './styles';

interface LoginTemplateProps {
  children: ReactNode;
}

function LoginTemplate({ children }: LoginTemplateProps) {
  return (
    <S.Container>
      <S.BannerContainer
        data-testid="login_template"
        aria-label="Library image"
      />

      <S.MainContainer>{children}</S.MainContainer>
    </S.Container>
  );
}

export { LoginTemplate };
