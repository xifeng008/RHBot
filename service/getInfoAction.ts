import axios from "axios"

// 请求llama接口
export async function getActionInfo(actionId: string | number, chainId: number, type: string | number) {
    const url = `http://23.95.199.59:8888/boost/actionInfo/image?actionId=${actionId}&chainId=${chainId}&type=${type}`;
    try {
        const response = await axios.get(url)
        if (response.data.code === 200) {
            return response.data;
        }
    } catch (error) {
        console.error(error);
    }
    return undefined;
}