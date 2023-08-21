import axios from 'axios';

const CHALLENGE_API_URL = "http://localhost:8080";

class UserService {

    saveUser(user){
        return axios.post(CHALLENGE_API_URL+"/bwc/register", user)
    }

    loginUser(user){
        return axios.post(CHALLENGE_API_URL+"/bwc/login", user);
    }

    getRanking(){
        return axios.get(CHALLENGE_API_URL+"/bwc/ranking");
    }
}
export default new UserService
