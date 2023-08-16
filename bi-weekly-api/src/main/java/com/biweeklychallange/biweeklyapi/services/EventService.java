package com.biweeklychallange.biweeklyapi.services;

import com.biweeklychallange.biweeklyapi.model.EventModel;

import java.util.List;

public interface EventService {
    EventModel createEvent(EventModel eventModel);

    List<EventModel> getAllEvents(Long id);

    EventModel getEventById(Long id);

    EventModel updateEmployeeById(Long id, EventModel eventModel);
}
