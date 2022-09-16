import axios, {AxiosResponse} from "axios";
import IUserLoginData from "@/interfaces/IUserLoginData";
import IApiResponse from "@/interfaces/IApiResponse";
import store from "@/store/index";

const API_URL = process.env.VUE_APP_API_URL+"api/auth/";

class AuthService {
    login(user: IUserLoginData) {
        const fd = new FormData();
        fd.append("email", user.email);
        fd.append("password", user.password);

        return axios.post(API_URL+"login", fd)
            .then((response: AxiosResponse<IApiResponse>) => {
                if (response.data.success) {
                    localStorage.setItem("user", JSON.stringify(response.data.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user: IUserLoginData) {
        const fd = new FormData();
        fd.append("name", user.name);
        fd.append("email", user.email);
        fd.append("password", user.password);

        return axios.post(API_URL + 'register', fd)
            .then((response: AxiosResponse<IApiResponse>) => {
                if (response.data.success) {
                    localStorage.setItem("user", JSON.stringify(response.data.data));
                }

                return response.data;
            });
    }
}

export default new AuthService();