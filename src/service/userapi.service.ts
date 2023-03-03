import axios from 'axios'

interface UserInfoResponse {
    id: number,
    username: string,
    apikey: string,
    createdAt: string,
    updatedAt: string
}

const getUserInfo = () => {
    return axios.get<UserInfoResponse>('/api/user');
}

export default {
    getUserInfo
} as const;