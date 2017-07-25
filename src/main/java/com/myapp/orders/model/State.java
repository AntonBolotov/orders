package com.myapp.orders.model;

/** Описание статуса */
public class State {
    /** Идентификатор статуса */
    private Integer id;
    /** Название статуса */
    private String name;

    public State(Integer id, String name) {
        this.id = id;
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
