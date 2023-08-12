package com.biweeklychallange.biweeklyapi.controller;

import com.biweeklychallange.biweeklyapi.model.ChallengeModel;
import com.biweeklychallange.biweeklyapi.services.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bwc/")
public class ChallengeController {
    @Autowired
    private ChallengeService challengeService;



    @PostMapping("/create")
    public ChallengeModel createChallange(@RequestBody ChallengeModel challengeModel){
        return challengeService.createChallenge(challengeModel);
    }

}
