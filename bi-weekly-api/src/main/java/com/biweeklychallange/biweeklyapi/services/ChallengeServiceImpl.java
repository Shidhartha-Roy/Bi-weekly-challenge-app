package com.biweeklychallange.biweeklyapi.services;

import com.biweeklychallange.biweeklyapi.entity.ChallengeEntity;
import com.biweeklychallange.biweeklyapi.model.ChallengeModel;
import com.biweeklychallange.biweeklyapi.repository.ChallengeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ChallengeServiceImpl implements ChallengeService{

    private ChallengeRepository challengeRepository;

    public ChallengeServiceImpl(ChallengeRepository challengeRepository) {
        this.challengeRepository = challengeRepository;
    }

    @Override
    public ChallengeModel createChallenge(ChallengeModel challengeModel) {

        ChallengeEntity challengeEntity = new ChallengeEntity();

        BeanUtils.copyProperties(challengeModel, challengeEntity);
        challengeRepository.save(challengeEntity);
        return challengeModel;
    }

    @Override
    public List<ChallengeModel> getAllChallenges(String username) {
        List<ChallengeEntity> challengeEntities = challengeRepository.findAllByUsername(username);

        List<ChallengeModel> challenges = challengeEntities.stream().map(chl -> new ChallengeModel(chl.getId(),chl.getPname(),chl.getPdesc(),chl.getStartDate(),chl.getEndDate(), chl.getUsername())).collect(Collectors.toList());
        return challenges;
    }
}
