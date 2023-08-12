import axios from "axios";

const CHALLENGE_API_URL = "http://localhost:8080/bwc";

class ChallengeService{

    createChallenge(details){
        return axios.post(CHALLENGE_API_URL+"/create", details)
    }


}
export default new ChallengeService