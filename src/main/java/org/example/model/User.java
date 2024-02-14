package org.example.model;

import jakarta.validation.constraints.NotNull;
import jakarta.persistence.*;
import jdk.jfr.DataAmount;

import java.io.Serializable;

@Entity()
@Table(name = "register")
@SequenceGenerator(name="USER_SEQUENCE_GENERATOR", sequenceName="USER_SEQUENCE", initialValue=1)
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="USER_SEQUENCE_GENERATOR")
    private Long id;

    @Column(name= "name")
    @NotNull
    private String name;
    @Column(name="email")
    @NotNull
    private String email;
    @Column(name = "age")
    @NotNull
    private int age;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
