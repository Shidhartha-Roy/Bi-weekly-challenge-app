package com.biweeklychallange.biweeklyapi.repository;

import com.biweeklychallange.biweeklyapi.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {
    @Query("SELECT u FROM UserEntity u WHERE u.username = ?1")
    UserEntity findByUsername(String username);
    @Query("SELECT u FROM UserEntity u ORDER BY u.projectCount DESC")
    List<UserEntity> findRanking();
}
