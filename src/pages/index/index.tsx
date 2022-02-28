import { View } from '@tarojs/components';
import { Button } from '@taroify/core';
import Taro from '@tarojs/taro';

export default function Index() {
  return (
    <View>
      <Button
        variant="contained"
        color="primary"
        shape="square"
        onClick={() => Taro.navigateTo({ url: '/pages/jotai/index' })}
      >
        Jotai示例
      </Button>
    </View>
  );
}
