import axios from 'axios';
import { authHeader } from '@/helpers/auth-header';

const API_URL = process.env.VUE_APP_API_URL+"api/";

class PasswordService {
    all() {
        // @ts-ignore
        return axios.get(API_URL+"passwords/get", {headers: authHeader()})
            .then((response)=>{
                if (response.data.success) return response.data.data;

                return [];
            })
    }
}
export default new PasswordService();