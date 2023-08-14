package com.biweeklychallange.biweeklyapi.controller;

import com.biweeklychallange.biweeklyapi.model.EventModel;
import com.biweeklychallange.biweeklyapi.services.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bwc/")
public class EventController {
    @Autowired
    public EventService eventService;

    @PostMapping("/NewEvent")
    public EventModel createEvent(@RequestBody EventModel eventModel){
        return eventService.createEvent(eventModel);
    }
}
