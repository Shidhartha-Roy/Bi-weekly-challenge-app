package com.biweeklychallange.biweeklyapi.services;

import com.biweeklychallange.biweeklyapi.entity.EventEntity;
import com.biweeklychallange.biweeklyapi.model.EventModel;
import com.biweeklychallange.biweeklyapi.repository.EventRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class EventServiceImpl implements EventService{

    public EventRepository eventRepository;

    public EventServiceImpl(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public EventModel createEvent(EventModel eventModel) {
        EventEntity eventEntity = new EventEntity();
        BeanUtils.copyProperties(eventModel, eventEntity);
        eventRepository.save(eventEntity);
        return eventModel;
    }
}
