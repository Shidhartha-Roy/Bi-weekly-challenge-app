package com.biweeklychallange.biweeklyapi.services;

import com.biweeklychallange.biweeklyapi.model.EventModel;

public interface EventService {
    EventModel createEvent(EventModel eventModel);
}
