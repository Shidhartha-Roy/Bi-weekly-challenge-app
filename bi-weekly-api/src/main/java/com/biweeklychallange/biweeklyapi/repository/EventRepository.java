package com.biweeklychallange.biweeklyapi.repository;

import com.biweeklychallange.biweeklyapi.entity.EventEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<EventEntity, Long> {
}
