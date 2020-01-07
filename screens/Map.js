import React from 'react';
import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export default function Login() {
  // function HandleLogin() {
  //   navigation.navigate('Login');
  // }
  const Container = styled.View``;
  return (
    <>
          <MapView style={{flex: 1}} />
    </>
  );
}