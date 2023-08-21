import axios from "axios";

const CHALLENGE_API_URL = "http://localhost:8080";

class EventService{

    createEvent(event){
        return axios.post(CHALLENGE_API_URL+"/bwc/NewEvent", event);
    }

    getEvents(id){
        return axios.get(CHALLENGE_API_URL+"/bwc/events/"+id);
    }

    getEventById(eid){
        return axios.get(CHALLENGE_API_URL+"/bwc/event/"+eid);
    }

    updateEvent(eventDetails, eid){
        return axios.put(CHALLENGE_API_URL+"/bwc/updateEvent/"+eid, eventDetails);
    }

    deleteEvent(eid){
        return axios.delete(CHALLENGE_API_URL+"/bwc/deleteEvent/"+eid);
    }

}
export default new EventService