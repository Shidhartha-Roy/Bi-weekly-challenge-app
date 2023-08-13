package com.biweeklychallange.biweeklyapi.controller;

import com.biweeklychallange.biweeklyapi.model.ChallengeModel;
import com.biweeklychallange.biweeklyapi.services.ChallengeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bwc/")
public class ChallengeController {
    @Autowired
    private ChallengeService challengeService;



    @PostMapping("/create")
    public ChallengeModel createChallange(@RequestBody ChallengeModel challengeModel){
        return challengeService.createChallenge(challengeModel);
    }

    @GetMapping("/challenges/{username}")
    public List<ChallengeModel> getAllChallenges(@PathVariable String username){
        return challengeService.getAllChallenges(username);
    }

}
