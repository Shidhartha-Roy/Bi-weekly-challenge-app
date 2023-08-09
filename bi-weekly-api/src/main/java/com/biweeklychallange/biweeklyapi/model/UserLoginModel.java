package com.biweeklychallange.biweeklyapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserLoginModel {

    private String username;

    private String password;
}
