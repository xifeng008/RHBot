import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

// 请求llama接口
export async function getActionInfo(actionId: string | number, chainId: number) {
    const url = `api/external/v1/orgs/boost/actions/${actionId}?chainId=${chainId}`;
    try {
        const response = await axios({
            baseURL: baseUrl,
            url: url,
            method: 'get',
            withCredentials: true
        });
        if (response.data.status === 200) {
            return response.data.data;
        }
    } catch (error) {
        console.error(error);
    }
    return undefined;
}