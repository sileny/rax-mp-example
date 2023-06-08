import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './index.module.css';

export default function Home() {
  const jump = () => {
    dd.navigateTo({
      url: '/miniapp-native/native-home/index'
    })
  };

  const jump2nativeChart = () => {
    dd.navigateTo({
      url: '/miniapp-native/f2-demo/index'
    })
  };

  const loadH5page = () => {
    dd.navigateTo({
      url: `/pages/web-view/index?url=http://localhost:8000?ignoreExtraParam=true`
    })
  };

  const loadH5pageInRax = () => {
    dd.navigateTo({
      url: `/pages/rax-web-view/index?url=http://localhost:8000?ignoreExtraParam=true`
    })
  };

  return (
    <View className={styles.homeContainer}>
      <Image className={styles.logo} source={{ uri: "//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" }} />
      <Text onClick={jump}>跳转到 /miniapp-native/native-home/index</Text>
      <View onClick={loadH5page}>使用 web-view 加载h5页面</View>
      <View onClick={jump2nativeChart}>查看f2原生案例</View>
      <View onClick={loadH5pageInRax}>rax 加载h5页面</View>
    </View>
  );
}
