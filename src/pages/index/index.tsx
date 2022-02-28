import { View } from '@tarojs/components';
import { Button } from '@taroify/core';
import Taro from '@tarojs/taro';
import styles from './index.module.less';

export default function Index() {
  return (
    <View className={styles.bg}>
      <Button
        variant="contained"
        color="primary"
        shape="square"
        onClick={() => Taro.navigateTo({ url: '/pages/form/index' })}
      >
        表单示例
      </Button>
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
