import React, { forwardRef, useEffect } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
export const WebViewWrapper = forwardRef((props, ref) => {
	const { onMessage, canGoBack } = props;
	let exitAppTimeout = null;
	let exitApp = false;
	// const url = 'http://192.168.0.64:3000/';
	const url = 'https://price.chansoo1280.site/';
	const onBackPress = () => {
		if (ref && ref.current && canGoBack) {
			ref.current.goBack();
			return true;
		} else {
			if (exitApp === false) {
				exitApp = true;
				ToastAndroid.show('한번 더 누르시면 종료됩니다.', ToastAndroid.SHORT);
				exitAppTimeout = setTimeout(
					() => {
						exitApp = false;
					},
					2000 // 2초
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
	useEffect(
		() => {
			BackHandler.addEventListener('hardwareBackPress', onBackPress);
			return () => {
				BackHandler.removeEventListener('hardwareBackPress', onBackPress);
			};
		},
		[ canGoBack ]
	);

	return (
		<WebView
			ref={ref}
			source={{
				uri: url
			}}
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
			onMessage={onMessage}
		/>
	);
});
