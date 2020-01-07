import React from 'react';
import styled from 'styled-components/native';

export default function Welcome() {
  // function HandleLogin() {
  //   navigation.navigate('Login');
  // }
  const Container = styled.View`
    flex: 1;
    background-color: #7156c1;
    justify-content: center;
  `;
  const ContainerDescription = styled.View`
  flex: 1;
  background-color: #7156c1;
  justify-content: center;
  align-items: center;
`;
  const Title = styled.Text`
    color: whitesmoke;
    font-size: 28;
    align-self: center;
    margin-top: 12;
  `;
  const SubTitle = styled.Text`
  color: whitesmoke;
  font-size: 18;
  align-self: center;
  margin-top: 12;
`;
  return (
    <>
      <Container>
        <ContainerDescription>
        <Title>Alterar o Arquivo</Title>
        <SubTitle style={{fontSize: 20}}>Screens/Welcome.js</SubTitle>
        <SubTitle> -Assests: Imagens e Fontes</SubTitle>
        <SubTitle>-Navigation: Rotas</SubTitle>
        <SubTitle>-Constants: Dados em JSON)</SubTitle>
        <SubTitle>-Screens: Telas</SubTitle>
        <SubTitle>-Node_Modules: Dependencias</SubTitle>
        <Title style={{marginRight: 0, marginTop: 0}}>Boa Sorte! =)</Title>
        </ContainerDescription>
      </Container>
    </>
  );
}