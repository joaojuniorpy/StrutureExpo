import React from 'react';
import {Container, ContainerDescription, Title, SubTitle} from './styles';

export default function Welcome() {

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