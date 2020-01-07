import React from 'react';
import styled from 'styled-components/native';

export default function Login() {
  // function HandleLogin() {
  //   navigation.navigate('Login');
  // }
  const Container = styled.View`
    flex: 1;
    background-color: white;
  `;
  const Title = styled.Text`
    color: black;
    font-size: 28;
    align-self: center;
    margin-top: 12;
  `;
  return (
    <>
      <Container>
          <Title>Login!</Title>
      </Container>
    </>
  );
}