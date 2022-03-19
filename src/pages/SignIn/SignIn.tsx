import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Email } from 'common/assets/svgs/email.svg';
import { ReactComponent as Key } from 'common/assets/svgs/key.svg';
import { Input, Button, Checkbox } from 'components/Atoms';
import { useAuth } from 'hooks/auth';
import { useToast } from 'hooks/toast';

import * as S from './styles';

function SignIn() {
  const [rememberLogin, setRememberLogin] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleLogIn = useCallback(() => {
    if (email === '' || password === '') {
      addToast({
        type: 'error',
        title: 'Preencha os dados para continuar',
      });

      return;
    }

    signIn();
  }, [email, password, signIn]);

  return (
    <S.Container>
      <S.Header>
        <h3>Login</h3>
        <p>Faça o login para acessar sua conta no Book App</p>
      </S.Header>

      <S.Form>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          icon={<Email />}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Digite sua senha"
          icon={<Key />}
          onChange={e => setPassword(e.target.value)}
        />

        <Checkbox
          data={{ name: 'remember_login', selected: rememberLogin }}
          onClick={() => setRememberLogin(!rememberLogin)}
          description="Lembrar meu login"
        />

        <Button
          size="FULL"
          color="default"
          type="button"
          onClick={() => {
            handleLogIn();
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
