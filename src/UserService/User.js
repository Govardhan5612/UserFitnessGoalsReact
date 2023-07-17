import axios from "axios";
class UserService {
    baseUrl = "http://localhost:8888/user";

    addUser(data) {
        return axios.post(`${this.baseUrl}/add`, data);
    }
    login(email,password){
        return axios.get(`${this.baseUrl}/login/${email}/${password}`)
    }
    getById(token) {
        return axios.get(`${this.baseUrl}/get/${token}`);
    }

}
export default new UserService();