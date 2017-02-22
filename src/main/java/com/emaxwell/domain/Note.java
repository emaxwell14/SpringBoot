package com.emaxwell.domain;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by User on 22/02/2017.
 */
@Entity
@Table(name = "notes")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotNull
    private String name;
    private String body;

    public Note() {}

    public Note(int id) {
        this.id = id;
    }

    public Note(String name, String body) {
        this.name = name;
        this.body = body;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
