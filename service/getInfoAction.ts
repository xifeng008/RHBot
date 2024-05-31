import axios from "axios";

// 请求llama接口
export async function getActionInfo(actionId: string | number, chainId: number) {
    const url = `https://app.llama.xyz/api/external/v1/orgs/boost/actions/${actionId}?chainId=${chainId}`;
    console.log(url);
    try {
        const response = await axios.get(url);
        if (response.data.status === 200) {
            return response.data.data;
        }
    } catch (error) {
        console.error(error);
    }
    return undefined;
}