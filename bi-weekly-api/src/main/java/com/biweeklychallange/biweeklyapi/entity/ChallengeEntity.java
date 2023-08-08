package com.biweeklychallange.biweeklyapi.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "challenge")
public class ChallengeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String pname;

    private String pdesc;

    @Column(name = "sdate")
    private LocalDate startDate;
    @Column(name = "edate")
    private LocalDate endDate;
}
