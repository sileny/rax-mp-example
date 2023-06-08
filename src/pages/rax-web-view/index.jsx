import { createElement, useEffect, useState } from 'rax';
import View from 'rax-view';
import Embed from 'rax-embed';
import { getSearchParams } from 'rax-app';

function RaxWebView() {
  const { url } = getSearchParams();
  const [ctx, setContext] = useState(null);

  useEffect(() => {
    const cw = dd.createWebViewContext('web-view-page');
    setContext(cw);
  }, []);

  function handleSendMsg() {
    dd.postMessage({ msg: '消息来自rax环境' });
  }

  function handleReceiveMsg(event) {
    console.log('监听来自h5的消息', event);

    // rax的消息放在 `__detail`
    const { ddMethod, params } = event.__detail;
    const callbackId = params.callbackId;

    params.success = () => {
      ctx.postMessage({
        callbackId: callbackId,
        isSuccess: true
      })
    };

    params.fail = () => {
      ctx.postMessage({
        callbackId: callbackId,
        isSuccess: false
      })
    };

    delete params.callbackId;

    dd[ddMethod](params);
  }

  return (
    <View>
      <Embed
        src={url}
        id="web-view-page"
        onLoad={handleSendMsg}
        onMessage={handleReceiveMsg}
        style={{ width: '100vw', height: '100vh' }}
        useIframeInWeb={true}
      />
    </View>
  );
}

export default RaxWebView;
