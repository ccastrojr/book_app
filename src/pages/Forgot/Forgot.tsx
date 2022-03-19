import { Link } from 'react-router-dom';

import { ReactComponent as Email } from 'common/assets/svgs/email.svg';
import { Input, Button } from 'components/Atoms';
import { Styles } from 'pages/SignIn';

function Forgot() {
  return (
    <Styles.Container>
      <Styles.Header>
        <h3>Esqueceu sua senha?</h3>
        <p>
          Insira seu e-mail que foi cadastrado, e nós enviaremos um link para
          você redefinir sua senha.
        </p>
      </Styles.Header>

      <Styles.Form>
        <Input type="email" placeholder="Digite seu e-mail" icon={<Email />} />

        <Button size="FULL" color="default" type="submit">
          Enviar email
        </Button>
      </Styles.Form>

      <Styles.ForgetPassword>
        <Link to="/">Voltar a tela de login</Link>
      </Styles.ForgetPassword>
    </Styles.Container>
  );
}

export { Forgot };
