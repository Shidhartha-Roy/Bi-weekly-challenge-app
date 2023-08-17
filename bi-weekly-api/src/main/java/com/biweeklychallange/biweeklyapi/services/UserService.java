package com.biweeklychallange.biweeklyapi.services;

import com.biweeklychallange.biweeklyapi.entity.UserEntity;
import com.biweeklychallange.biweeklyapi.model.UserModel;

import java.util.List;

public interface UserService {

    UserEntity loginUser(String username, String password);

    String generateJwtToken(UserEntity user);

    UserEntity registerUser(UserModel userModel);


    List<UserModel> getRanking();
}
