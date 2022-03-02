import { FC } from 'react';
import { SafeArea } from '@taroify/core';
import { View } from '@tarojs/components';

import styles from './index.module.less';

const Container: FC = ({ children }) => {
  return (
    <View className={styles.container}>
      <View className={styles.body}>{children}</View>
      <SafeArea position="bottom" />
    </View>
  );
};

export default Container;
