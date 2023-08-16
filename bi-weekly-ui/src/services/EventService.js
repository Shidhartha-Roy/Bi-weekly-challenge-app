import axios from "axios";

const CHALLENGE_API_URL = "http://localhost:8080/bwc";

class EventService{

    createEvent(event){
        return axios.post(CHALLENGE_API_URL+"/NewEvent", event);
    }

    getEvents(id){
        return axios.get(CHALLENGE_API_URL+"/events/"+id);
    }

    getEventById(eid){
        return axios.get(CHALLENGE_API_URL+"/event/"+eid);
    }

    updateEvent(eventDetails, eid){
        return axios.put(CHALLENGE_API_URL+"/updateEvent/"+eid, eventDetails);
    }

}
export default new EventService