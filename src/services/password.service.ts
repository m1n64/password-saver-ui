import axios from 'axios';
import { authHeader } from '@/helpers/auth-header';

const API_URL = process.env.VUE_APP_API_URL+"api/passwords";

class PasswordService {
    all() {
        // @ts-ignore
        return axios.get(API_URL+"/get", {headers: authHeader()})
            .then((response)=>{
                if (response.data.success) return response.data.data;

                return [];
            })
    }

    decrypt(id: number) {
        // @ts-ignore
        return axios.post(API_URL+"/decrypt/"+id, {}, {headers: authHeader()})
            .then((response) => {
                if (response.data.success) return response.data.data;

                return null;
            })
    }
}
export default new PasswordService();