import React, {useState, useRef, useEffect} from 'react';
import Geolocation from 'react-native-geolocation-service';
import {
  BackHandler,
  Platform,
  ToastAndroid,
  PermissionsAndroid,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WebView} from 'react-native-webview';

const App = () => {
  const webview = useRef(null);
  const [canGoBack, SetCanGoBack] = useState(false);
  let exitAppTimeout = null;
  let exitApp = false;
  // const url = 'http://192.168.0.64:3000/';
  const url = 'https://price.chansoo1280.site/';
  const requestPermissions = async function () {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  };
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
      onMessage={async message => {
        const {nativeEvent} = message;
        if (nativeEvent?.data === 'navigationStateChange') {
          SetCanGoBack(nativeEvent.canGoBack);
          return;
        }
        const req = JSON.parse(nativeEvent?.data || '""');
        switch (req.type) {
          case 'RN_API_GET_POSITION': {
            await requestPermissions();
            Geolocation.getCurrentPosition(
              position => {
                webview.current.postMessage(
                  JSON.stringify({
                    type: 'RN_API_GET_POSITION',
                    data: position,
                  }),
                );
              },
              error => {
                // See error code charts below.
                //alert(error.code+"-"+error.message);
                if (error.code === 1) {
                  alert('위치권한이 없습니다.');
                }
              },
              {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
            );
            break;
          }
          case 'RN_API_SET_STAR': {
            AsyncStorage.setItem('star', JSON.stringify(req?.data));
            webview.current.postMessage(
              JSON.stringify({
                type: 'RN_API_SET_STAR',
                data: 'success',
              }),
            );
            break;
          }
          case 'RN_API_GET_STAR': {
            const star = await AsyncStorage.getItem(
              'star',
              (err, result) => result,
            );
            webview.current.postMessage(
              JSON.stringify({
                type: 'RN_API_GET_STAR',
                data: JSON.parse(star),
              }),
            );
            break;
          }
        }
      }}
    />
  );
};

export default App;
