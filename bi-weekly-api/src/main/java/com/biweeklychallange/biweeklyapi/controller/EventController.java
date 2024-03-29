package com.biweeklychallange.biweeklyapi.controller;

import com.biweeklychallange.biweeklyapi.entity.EventEntity;
import com.biweeklychallange.biweeklyapi.model.EventModel;
import com.biweeklychallange.biweeklyapi.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/bwc/")
public class EventController {
    @Autowired
    public EventService eventService;

    @PostMapping("/NewEvent")
    public EventModel createEvent(@RequestBody EventModel eventModel){
        return eventService.createEvent(eventModel);
    }

    @GetMapping("/events/{id}")
    public List<EventModel> getAllEvents(@PathVariable Long id){
        return eventService.getAllEvents(id);
    }

    @GetMapping("/event/{id}")
    public ResponseEntity<EventModel> getEventById(@PathVariable Long id){
        EventModel eventModel = null;
        eventModel = eventService.getEventById(id);
        return ResponseEntity.ok(eventModel);
    }

    @PutMapping("/updateEvent/{id}")
    public ResponseEntity<EventModel> updateEmployee(@PathVariable Long id, @RequestBody EventModel eventModel){
        eventModel = eventService.updateEmployeeById(id, eventModel);
        return ResponseEntity.ok(eventModel);
    }

    @DeleteMapping("/deleteEvent/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteEvent(@PathVariable Long id){
        boolean deleted = false;
        deleted = eventService.deleteById(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return  ResponseEntity.ok(response);
    }
}
