import axios from "axios";

const CHALLENGE_API_URL = "https://biweeklychallengeapi.onrender.com";

class ChallengeService{

    createChallenge(details){
        return axios.post(CHALLENGE_API_URL+"/bwc/create", details)
    }

    getChallenges(item){
        return axios.get(CHALLENGE_API_URL + "/bwc/challenges/"+ item);
    }

    deleteChallenge(id){
        return axios.delete(CHALLENGE_API_URL+"/bwc/delete/"+ id);
    }


}
export default new ChallengeService