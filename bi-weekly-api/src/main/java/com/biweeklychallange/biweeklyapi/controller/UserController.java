package com.biweeklychallange.biweeklyapi.controller;

import com.biweeklychallange.biweeklyapi.entity.UserEntity;
import com.biweeklychallange.biweeklyapi.model.UserLoginModel;
import com.biweeklychallange.biweeklyapi.model.UserModel;
import com.biweeklychallange.biweeklyapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bwc/")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody UserLoginModel userLoginModel){
        try{
            UserEntity user = userService.loginUser(userLoginModel.getUsername(), userLoginModel.getPassword());
            String token = userService.generateJwtToken(user);
            String id = user.getUsername();
            return ResponseEntity.ok()
                    .header("Authorization", "Bearer "+token)
                    .header("UserId", id)
                    .build();
        }
        catch (UsernameNotFoundException | IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserModel userModel){
        try{
            UserEntity user = userService.registerUser(userModel);
            return ResponseEntity.ok(user);
        }
        catch (IllegalArgumentException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Username Already Exists");
        }
    }

    @GetMapping("/ranking")
    public List<UserModel> getRanking(){ return userService.getRanking(); }
}
