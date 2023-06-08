Page({
  data: {
    url: ''
  },
  onLoad(params) {
    this.setData({ url: params.url });
    this.webViewContext = dd.createWebViewContext('web-view-external');
  },
  onMessage(event) {
    const { ddMethod, params } = event.detail;
    const callbackId = params.callbackId;

    params.success = () => {
      this.webViewContext.postMessage({
        callbackId: callbackId,
        isSuccess: true
      })
    };

    params.fail = () => {
      this.webViewContext.postMessage({
        callbackId: callbackId,
        isSuccess: false
      })
    };

    delete params.callbackId;

    dd[ddMethod](params);
  },
});
// `http://localhost:8000`访问界面代码如下
/*
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- 如果是 `<web-view src="h5地址">`，可以直接显示title到dd小程序左上角，不用调用`dd.setNavigationBar({ title })` -->
  <title>Document</title>
  <script>
    if (navigator.userAgent.toLowerCase().indexOf('dingtalk') > -1) {
      document.writeln('<script src="https://appx/web-view.min.js"' + '>' + '<' + '/' + 'script>');
    }
  </script>
</head>
<body>
<h4>dd测试postMessage</h4>
<div id="receive"></div>
<button onclick="dispatchDDAlert()">在h5页面调用dd.alert方法，发送消息</button>
<button onclick="openRaxPage()">在h5页面打开 /pages/home/index 页面</button>
<button onclick="openNativePage()">在h5页面打开 /miniapp-native/native-home/index 页面</button>
<button onclick="setNavigationBar()">setNavigationBar</button>
<script>
  let uniqId = 1;

  function getUniqId() {
    return uniqId++;
  }

  const callBackMap = {};

  function openRaxPage() {
    const callbackId = getUniqId();

    callBackMap[callbackId] = {
      success: () => {
        console.log('成功');
      },
      fail: () => {
        console.log('失败');
      }
    };

    dd.postMessage({
      ddMethod: 'navigateTo',
      params: {
        url: '/pages/home/index'
      }
    });
  }

  function openNativePage() {
    const callbackId = getUniqId();

    callBackMap[callbackId] = {
      success: () => {
        console.log('成功');
      },
      fail: () => {
        console.log('失败');
      }
    };

    dd.postMessage({
      ddMethod: 'navigateTo',
      params: {
        url: '/miniapp-native/native-home/index'
      }
    });
  }

  function setNavigationBar() {
    const callbackId = getUniqId();

    callBackMap[callbackId] = {
      success: () => {
        console.log('成功');
      },
      fail: () => {
        console.log('失败');
      }
    };

    dd.postMessage({
      ddMethod: 'setNavigationBar',
      params: {
        title: 'setNavigationBar'
      }
    });
  }

  // 通过该方法就可以在 H5 中调用 dd.alert
  function dispatchDDAlert() {
    const callbackId = getUniqId();

    callBackMap[callbackId] = {
      success: () => {
        console.log('成功');
      },
      fail: () => {
        console.log('失败');
      }
    };

    dd.postMessage({
      ddMethod: 'alert',
      params: {
        title: '亲',
        content: '我是来自h5页面的消息',
        buttonText: '我知道了',
        callbackId
      }
    });
  }

  if (window.dd) {
    dd.onMessage = (event) => {
      console.log('接收到来自dd的消息', event);
      const { callbackId, isSuccess } = event;

      const cache = callBackMap[callbackId];

      if (!cache) {
        return;
      }

      const { success, fail } = cache;
      delete callBackMap[callbackId];

      if (isSuccess) {
        success && success();
      } else {
        fail && fail();
      }
    };
  }
</script>
</body>
</html>
*/
