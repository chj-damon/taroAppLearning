import { Button } from '@taroify/core';
import { View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import Container from 'components/Container';
import { useState } from 'react';

export default function LoginDemo() {
  const [loginInfo, setLoginInfo] = useState<Taro.login.SuccessCallbackResult>();
  const [error, setError] = useState('');

  const handleLogin = () => {
    Taro.login({
      success: res => {
        setLoginInfo(res);
      },
      fail: err => {
        setError(err.errMsg);
      },
    });
  };

  const getUserProfile = () => {
    Taro.getUserProfile({
      desc: '测试代码',
      success: res => {
        console.log(res);
      },
    });
  };

  const getUserInfo = () => {
    Taro.getUserInfo({
      success: res => {
        console.log(res);
      },
    });
  };

  return (
    <Container>
      {error && <View>{error}</View>}
      {loginInfo && (
        <View>
          {loginInfo?.code}: {loginInfo?.errMsg}
        </View>
      )}
      <Button block color="primary" onClick={handleLogin}>
        登录
      </Button>
      <Button block color="primary" onClick={getUserProfile}>
        getUserProfile
      </Button>
      <Button block color="primary" onClick={getUserInfo}>
        getUserInfo
      </Button>
    </Container>
  );
}
