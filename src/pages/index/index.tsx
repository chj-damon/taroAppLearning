import { View } from '@tarojs/components';
import { Button } from '@taroify/core';
import Taro from '@tarojs/taro';
import Container from 'components/Container';

export default function Index() {
  return (
    <Container>
      <View style={{ marginBottom: 16 }}>
        <Button
          variant="contained"
          color="primary"
          shape="square"
          block
          onClick={() => Taro.navigateTo({ url: '/pages/form/index' })}
        >
          表单示例
        </Button>
      </View>
      <View style={{ marginBottom: 16 }}>
        <Button
          variant="contained"
          color="primary"
          shape="square"
          block
          onClick={() => Taro.navigateTo({ url: '/pages/jotai/index' })}
        >
          Jotai示例
        </Button>
      </View>
      <View style={{ marginBottom: 16 }}>
        <Button
          variant="contained"
          color="primary"
          shape="square"
          block
          onClick={() => Taro.switchTab({ url: '/pages/tabBar/home/index' })}
        >
          TabBar示例
        </Button>
      </View>
      <View style={{ marginBottom: 16 }}>
        <Button
          variant="contained"
          color="primary"
          shape="square"
          block
          onClick={() => Taro.navigateTo({ url: '/pages/login/index' })}
        >
          登录示例
        </Button>
      </View>
    </Container>
  );
}
