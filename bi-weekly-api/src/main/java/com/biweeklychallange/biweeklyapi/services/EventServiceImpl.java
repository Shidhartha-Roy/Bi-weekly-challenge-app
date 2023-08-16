package com.biweeklychallange.biweeklyapi.services;

import com.biweeklychallange.biweeklyapi.entity.EventEntity;
import com.biweeklychallange.biweeklyapi.model.EventModel;
import com.biweeklychallange.biweeklyapi.repository.EventRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public List<EventModel> getAllEvents(Long id) {
        List<EventEntity> eventEntities = eventRepository.findAllBychallengeId(id);

        List<EventModel> events = eventEntities.stream().map(eve -> new EventModel(eve.getId(), eve.getChallengeId(), eve.getEventName(), eve.getEventDate(), eve.getEventStatus())).collect(Collectors.toList());
        return events;
    }

    @Override
    public EventModel getEventById(Long id) {
        EventEntity eventEntity = eventRepository.findById(id).get();
        EventModel eventModel = new EventModel();
        BeanUtils.copyProperties(eventEntity, eventModel);
        return eventModel;
    }

    @Override
    public EventModel updateEmployeeById(Long id, EventModel eventModel) {
        EventEntity eventEntity = eventRepository.findById(id).get();
        eventEntity.setEventName(eventModel.getEventName());
        eventEntity.setEventStatus(eventModel.getEventStatus());
        eventEntity.setEventDate(eventModel.getEventDate());

        eventRepository.save(eventEntity);
        return eventModel;
    }

    @Override
    public boolean deleteById(Long id) {
        eventRepository.deleteById(id);
        return true;
    }
}
