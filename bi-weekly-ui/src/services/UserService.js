import axios from 'axios';

const CHALLENGE_API_URL = "http://localhost:8080/bwc";

class UserService {

    saveUser(user){
        return axios.post(CHALLENGE_API_URL+"/register", user)
    }

    loginUser(user){
        return axios.post(CHALLENGE_API_URL+"/login", user);
    }
}
export default new UserService
