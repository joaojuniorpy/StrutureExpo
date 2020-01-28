import React from 'react';
import {Container, Title, Logo, Button} from './styles';

export default function Login() {
  return (
    <>
      <Container>
        <Logo source={{uri:'https://imagens.canaltech.com.br/empresas/712.400.jpg'}}/>
        <Button>
          <Title>Login!</Title>
        </Button>
      </Container>
    </>
  );
}