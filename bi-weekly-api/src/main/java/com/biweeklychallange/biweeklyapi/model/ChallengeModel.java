package com.biweeklychallange.biweeklyapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChallengeModel {

    private long id;

    private String pname;

    private String pdesc;

    private LocalDate startDate;

    private LocalDate endDate;


}
