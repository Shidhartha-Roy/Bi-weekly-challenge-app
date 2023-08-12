package com.biweeklychallange.biweeklyapi.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class UserEntity {
    private String firstname;

    private String lastname;
    @Id
    private String username;
    @Column(length = 60)
    private String password;


    private int projectCount;



    @PrePersist
    public  void prePersist(){
        this.projectCount = 0;
    }
}
