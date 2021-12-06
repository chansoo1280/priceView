import { RN_API, RN_API_RES_TYPES } from "@Definitions/MainConsts"
declare global {
    interface Window {
        ReactNativeWebView: any
    }
}
export const WebViewMessage = async <T extends RN_API>(type: RN_API, data?: any): Promise<RN_API_RES_TYPES[T] | null> => {
    return new Promise((resolve, reject) => {
        if (!window.ReactNativeWebView) {
            alert("ReactNativeWebView 객체가 없습니다.")
            return resolve(null)
        }
        window.ReactNativeWebView.postMessage(
            JSON.stringify({
                type: type,
                data: data,
            }),
        )
        const timer = setTimeout(() => {
            // if (type === RN_API.SET_DIR) {
            //     return
            // }
            resolve(null)
            /** android */
            document.removeEventListener("message", listener)
            /** ios */
            window.removeEventListener("message", listener)
        }, 3000)
        const listener = (event: any) => {
            const { data, type } = JSON.parse(event.data)
            switch (type) {
                case type: {
                    clearTimeout(timer)
                    /** android */
                    document.removeEventListener("message", listener)
                    /** ios */
                    window.removeEventListener("message", listener)
                    resolve(data)
                    return
                }
            }
            clearTimeout(timer)
            /** android */
            document.removeEventListener("message", listener)
            /** ios */
            window.removeEventListener("message", listener)
            resolve(null)
        }
        /** android */
        document.addEventListener("message", listener)
        /** ios */
        window.addEventListener("message", listener)
    })
}
