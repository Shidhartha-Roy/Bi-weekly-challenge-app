package com.biweeklychallange.biweeklyapi.services;

import com.biweeklychallange.biweeklyapi.entity.ChallengeEntity;
import com.biweeklychallange.biweeklyapi.model.ChallengeModel;
import com.biweeklychallange.biweeklyapi.repository.ChallengeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
public class ChallengeServiceImpl implements ChallengeService{

    private ChallengeRepository challengeRepository;
    @Override
    public ChallengeModel createChallenge(ChallengeModel challengeModel) {
        ChallengeEntity challengeEntity = new ChallengeEntity();

        BeanUtils.copyProperties(challengeModel, challengeEntity);
        challengeRepository.save(challengeEntity);
        return challengeModel;
    }
}
