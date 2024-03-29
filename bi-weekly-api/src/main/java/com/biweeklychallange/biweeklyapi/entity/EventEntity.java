package com.biweeklychallange.biweeklyapi.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "Events")
public class EventEntity {
    @Id
    @GeneratedValue
    private long id;

    private long challengeId;

    private String eventName;

    private LocalDate eventDate;

    private String eventStatus;
}
