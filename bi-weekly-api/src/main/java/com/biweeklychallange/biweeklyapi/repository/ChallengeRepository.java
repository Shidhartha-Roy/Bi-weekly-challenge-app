package com.biweeklychallange.biweeklyapi.repository;

import com.biweeklychallange.biweeklyapi.entity.ChallengeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChallengeRepository extends JpaRepository<ChallengeEntity, Long> {

}
