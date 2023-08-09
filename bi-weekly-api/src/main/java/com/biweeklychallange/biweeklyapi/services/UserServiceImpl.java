package com.biweeklychallange.biweeklyapi.services;

import com.biweeklychallange.biweeklyapi.entity.UserEntity;
import com.biweeklychallange.biweeklyapi.model.UserModel;
import com.biweeklychallange.biweeklyapi.repository.UserRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    private final long jwtExpirationMs = 86400000;

    @Override
    public UserEntity loginUser(String username, String password) {
        UserEntity user = userRepository.findByUsername(username);
        if(user == null){
            throw new UsernameNotFoundException("User not found");
        }
        //BCrypt ed password function
//        if(!passwordEncoder.matches(password, user.getPassword())){
//            throw new IllegalArgumentException("Invalid Password");
//        }

        //Testing normal password function
        if(!password.equals(user.getPassword())){
            throw new IllegalArgumentException("Invalid Password");
        }
        return user;

    }

    @Override
    public String generateJwtToken(UserEntity user) {
        Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        Claims claims = Jwts.claims().setSubject(user.getUsername());
        Date now = new Date();
        Date expiration = new Date(now.getTime() + jwtExpirationMs);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }

    @Override
    public UserEntity registerUser(UserModel userModel) {
        String username = userModel.getUsername();
        UserEntity existingUser = userRepository.findByUsername(username);

        if(existingUser != null){
            throw new IllegalArgumentException("Username Already Exists");
        }
        UserEntity user = new UserEntity();
        user.setUsername(userModel.getUsername());
        user.setFirstname(userModel.getFirstname());
        user.setLastname(userModel.getLastname());
        user.setPassword(userModel.getPassword());
        userRepository.save(user);
        return user;
    }
}
