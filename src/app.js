import { createElement } from 'rax';
// MPA 模式下该文件无效
import { runApp } from 'rax-app';
import ErrorBoundary from "./components/error-boundary";
import AuthValidation from "./components/auth-validation";

const appConfig = {
  app: {
    // 可选，自定义添加 Provider
    addProvider: ({ children }) => {
      return <AuthValidation>{ children }</AuthValidation>;
    },

    // 可选，开启默认的 ErrorBoundary 行为，默认值为 false
    errorBoundary: true,

    // 可选，自定义错误边界的 fallback UI
    ErrorBoundaryFallback: <ErrorBoundary/>,

    // 可选，自定义错误的处理事件
    onErrorBoundaryHandler: (error, componentStack) => {
      // Do something with the error
      console.warn(error, componentStack);
    },

    // 可选，小程序应用生命周期
    onLaunch() {
    },
    onShow() {
    },
    onHide() {
    },
    onError() {
    },
    onShareAppMessage() {
    }
  },
  store: {
    initialStates: {},
    getInitialStates: (initialData) => {
    }
  }
};

runApp(appConfig);
