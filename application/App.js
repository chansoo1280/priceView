import React, { createRef, useEffect } from 'react';
import Geolocation from 'react-native-geolocation-service';
import { BackHandler, Platform, PermissionsAndroid, View } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { AdMobBanner } from 'expo-ads-admob';
import { RN_API, WebViewWrapper } from '@Service';
const App = () => {
	const webview = createRef();
	const requestPermissions = async function() {
		if (Platform.OS === 'ios') {
			Geolocation.requestAuthorization();
			Geolocation.setRNConfiguration({
				skipPermissionRequests: false,
				authorizationLevel: 'whenInUse'
			});
		}

		if (Platform.OS === 'android') {
			await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
		}
	};

	useEffect(() => {
		NetInfo.fetch().then((state) => {
			if (state.isConnected !== true) {
				alert('네트워크 연결이 불안정하여 앱을 종료합니다.');
				BackHandler.exitApp(); // 앱 종료
			}
		});
	}, []);

	return (
		<View
			style={{
				width: '100%',
				height: '100%'
			}}
		>
			<WebViewWrapper
				ref={webview}
				// uri="http://172.30.1.40:3000/"
				uri="https://price.chansoo1280.site/"
				onMessage={async (req) => {
					if (!req) return;
					const { data, type, reqId } = req;
					console.log(reqId, type);
					switch (type) {
						case RN_API.RN_API_GET_VERSION: {
							webview.current.postMessage(
								JSON.stringify({
									reqId: req.reqId,
									type: RN_API.RN_API_GET_VERSION,
									data: '1.6'
								})
							);
							break;
						}
						case RN_API.RN_API_GET_POSITION: {
							await requestPermissions();
							Geolocation.getCurrentPosition(
								(position) => {
									webview.current.postMessage(
										JSON.stringify({
											reqId: req.reqId,
											type: RN_API.RN_API_GET_POSITION,
											data: position
										})
									);
								},
								(error) => {
									// See error code charts below.
									//alert(error.code+"-"+error.message);
									if (error.code === 1) {
										webview.current.postMessage(
											JSON.stringify({
												reqId: req.reqId,
												type: RN_API.RN_API_GET_POSITION,
												data: false
											})
										);
									}
								},
								{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
							);
							break;
						}
					}
				}}
			/>
			<AdMobBanner
				bannerSize="smartBannerPortrait"
				adUnitID="ca-app-pub-1378042447494891/1854452276"
				servePersonalizedAds // true or false
				onDidFailToReceiveAdWithError={(e) => {
					console.log(e);
				}}
			/>
		</View>
	);
};

export default App;
