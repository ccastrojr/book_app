import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Email } from 'common/assets/svgs/email.svg';
import { ReactComponent as Key } from 'common/assets/svgs/key.svg';
import { Input, Button, Checkbox } from 'components/Atoms';
import { useAuth } from 'hooks/auth';

import * as S from './styles';

function SignIn() {
  const [rememberLogin, setRememberLogin] = useState(false);

  const { signIn } = useAuth();

  return (
    <S.Container>
      <S.Header>
        <h3>Login</h3>
        <p>Faça o login para acessar sua conta no Book App</p>
      </S.Header>

      <S.Form>
        <Input type="email" placeholder="Digite seu e-mail" icon={<Email />} />

        <Input type="password" placeholder="Digite sua senha" icon={<Key />} />

        <Checkbox
          data={{ name: 'remember_login', selected: rememberLogin }}
          onClick={() => setRememberLogin(!rememberLogin)}
          description="Lembrar meu login"
        />

        <Button
          size="FULL"
          color="default"
          type="submit"
          onClick={() => {
            signIn();
          }}
          data-testid="login_button"
        >
          Login
        </Button>
      </S.Form>

      <S.ForgetPassword>
        <Link to="/forgot">Esqueceu sua senha?</Link>
      </S.ForgetPassword>
    </S.Container>
  );
}

export { SignIn };
