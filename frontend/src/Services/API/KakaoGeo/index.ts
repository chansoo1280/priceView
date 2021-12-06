import { stringify } from "query-string"

export const reqPositionData = ({ x, y }: { x: string; y: string }): Promise<Response> => {
    return fetch(
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?${stringify({
            x,
            y,
        })}`,
        {
            method: `get`,
            headers: {
                "content-type": "application/json",
                Authorization: "KakaoAK 4fdda60789cef4f549581038ad7564e5",
            },
        },
    )
}
