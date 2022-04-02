/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@/components/Button'
import Input from '@/components/Input'
import LoginMutation from '@/gql/auth/LoginMutation'
import { useMutation } from '@apollo/client'
import React, {  useState } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './styles'

type LoginForm = {
  email: string
  password: string
}

const Login = () => {
  const { handleSubmit } = useForm<LoginForm>()
  const [emailForm, setEmailForm] = useState('')
  const [passwordForm, setPasswordForm] = useState('')
  const [login] = useMutation(LoginMutation);

  const handleSubmitLogin = async () => {
    const input = {email: emailForm, password: passwordForm}
    const { data } = await login({ variables: { input } });
    localStorage.setItem('accessToken', data.login.jwt.accessToken);
    localStorage.setItem('account', data.login.account.id);
    window.location.replace('/');
  }

  return (
    <S.Container>
      <S.Content>
        <S.ImgLogin src="/img/logo-finance.svg" />
        <S.LoginForm onSubmit={handleSubmit(handleSubmitLogin)}>
          <Input
            label="Login"
            type="email"
            onInputChange={setEmailForm}
            placeholder="Digite o email"
            required
          />

          <Input
            label="Senha"
            type="password"
            onInputChange={setPasswordForm}
            placeholder="Digite a senha"
            required
          />

          <Button typeStyle="enter" type="submit">
            Entrar
          </Button>
        </S.LoginForm>
      </S.Content>
    </S.Container>
  )
}

export default Login
