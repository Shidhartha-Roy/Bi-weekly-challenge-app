package com.biweeklychallange.biweeklyapi.services;

import com.biweeklychallange.biweeklyapi.model.ChallengeModel;

import java.util.List;

public interface ChallengeService {
    List<ChallengeModel> getAllChallenges(String username) ;

    ChallengeModel createChallenge(ChallengeModel challengeModel);
}
