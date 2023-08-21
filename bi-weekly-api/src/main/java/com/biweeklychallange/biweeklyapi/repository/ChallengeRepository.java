package com.biweeklychallange.biweeklyapi.repository;

import com.biweeklychallange.biweeklyapi.entity.ChallengeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChallengeRepository extends JpaRepository<ChallengeEntity, Long> {
    @Query("SELECT c FROM ChallengeEntity c ORDER BY endDate")
    List<ChallengeEntity> findAllByUsername(String username);
}
