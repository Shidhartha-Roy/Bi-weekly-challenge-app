import axios from "axios";

const CHALLENGE_API_URL = "http://localhost:8080/bwc";

class EventService{

    createEvent(event){
        return axios.post(CHALLENGE_API_URL+"/NewEvent", event);
    }

}
export default new EventService