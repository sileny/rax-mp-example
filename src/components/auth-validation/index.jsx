import { createElement, useEffect, useState } from 'rax';
import View from 'rax-view';

export default function AuthValidation(props) {
  const [loading, setLoading] = useState(true);

  // 模拟获取权限
  const getAuth = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    getAuth();
  }, []);

  if (loading) {
    return <View>loading...</View>;
  }

  return props.children;
}
