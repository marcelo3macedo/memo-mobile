import React from 'react';
import { View } from 'react-native';

import logo from '@assets/images/logo/logo.png';
import { NewAccount } from '@components/auth/NewAccount';
import { Picture } from '@components/elements/Picture';
import { LoginForm } from '@components/forms/LoginForm';
import { PictureTypes } from '@interfaces/components/pictures/PictureTypes';
import { AuthLayout } from '@layouts/AuthLayout';

import { style } from './styles';

export function Login() {
  function onSubmitHandle() {
    console.log("here")
  }
  
  return (
    <AuthLayout>
      <View style={style.container}>
        <Picture source={logo} type={PictureTypes.SMALL} />
        <LoginForm onSubmit={onSubmitHandle} />
        <NewAccount />
      </View> 
    </AuthLayout>    
  )
}