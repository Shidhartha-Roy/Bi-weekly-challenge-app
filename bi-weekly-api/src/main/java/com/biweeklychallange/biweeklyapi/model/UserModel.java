package com.biweeklychallange.biweeklyapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserModel {

    private String firstname;

    private String lastname;

    private String username;

    private String password;

    private int projectCount;


    public UserModel(String firstname, String lastname, String username, int projectCount) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.projectCount = projectCount;
    }
}
