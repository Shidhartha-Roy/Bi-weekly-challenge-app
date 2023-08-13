package com.biweeklychallange.biweeklyapi.services;

import com.biweeklychallange.biweeklyapi.entity.ChallengeEntity;
import com.biweeklychallange.biweeklyapi.entity.UserEntity;
import com.biweeklychallange.biweeklyapi.model.ChallengeModel;
import com.biweeklychallange.biweeklyapi.repository.ChallengeRepository;
import com.biweeklychallange.biweeklyapi.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ChallengeServiceImpl implements ChallengeService{

    private ChallengeRepository challengeRepository;

    private UserRepository userRepository;

    public ChallengeServiceImpl(ChallengeRepository challengeRepository, UserRepository userRepository) {
        this.challengeRepository = challengeRepository;
        this.userRepository = userRepository;
    }

    @Override
    public ChallengeModel createChallenge(ChallengeModel challengeModel) {

        ChallengeEntity challengeEntity = new ChallengeEntity();

        BeanUtils.copyProperties(challengeModel, challengeEntity);
        challengeRepository.save(challengeEntity);
        return challengeModel;
    }

    @Override
    public boolean deleteChallenge(Long id) {
        ChallengeEntity challengeEntity = challengeRepository.findById(id).get();
        challengeRepository.delete(challengeEntity);
        return true;
    }

    @Override
    public List<ChallengeModel> getAllChallenges(String username) {
        List<ChallengeEntity> challengeEntities = challengeRepository.findAllByUsername(username);

        //Project Counter Updation
        int projectCounter = challengeEntities.size();
        UserEntity user = userRepository.findByUsername(username);
        user.setProjectCount(projectCounter);
        userRepository.save(user);

        List<ChallengeModel> challenges = challengeEntities.stream().map(chl -> new ChallengeModel(chl.getId(),chl.getPname(),chl.getPdesc(),chl.getStartDate(),chl.getEndDate(), chl.getUsername())).collect(Collectors.toList());
        return challenges;
    }
}
