import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

export default function ErrorBoundary() {
  return (
    <View>
      <Text>error boundary</Text>
    </View>
  )
}
