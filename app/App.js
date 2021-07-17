import React, {useState, useRef, useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import {BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';

export default function HomeScreen() {
  const webview = useRef(null);
  const [canGoBack, SetCanGoBack] = useState(false);
  let exitAppTimeout = null;
  let exitApp = false;
  const url = 'http://13.125.195.7/';
  const onBackPress = () => {
    if (webview && webview.current && canGoBack) {
      webview.current?.goBack();
      return true;
    } else {
      if (exitApp === false) {
        exitApp = true;
        ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
        exitAppTimeout = setTimeout(
          () => {
            exitApp = false;
          },
          2000, // 2초
        );
        return true;
      } else {
        if (exitAppTimeout !== null) {
          clearTimeout(exitAppTimeout);
        }
        BackHandler.exitApp(); // 앱 종료
        return true;
      }
    }
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, [canGoBack]);
  return (
    <WebView
      ref={webview}
      source={{uri: url}}
      // onNavigationStateChange={(navState) => {
      //   console.log(navState);
      //   SetCanGoBack(navState.canGoBack);
      // }}
      injectedJavaScript={`
    (function() {
      function wrap(fn) {
        return function wrapper() {
          var res = fn.apply(this, arguments);
          window.ReactNativeWebView.postMessage('navigationStateChange');
          return res;
        }
      }

      history.pushState = wrap(history.pushState);
      history.replaceState = wrap(history.replaceState);
      window.addEventListener('popstate', function() {
        window.ReactNativeWebView.postMessage('navigationStateChange');
      });
    })();

    true;
  `}
      onMessage={({nativeEvent}) => {
        if (nativeEvent?.data === 'navigationStateChange') {
          SetCanGoBack(nativeEvent.canGoBack);
        }
      }}
    />
  );
}
