package com.myapp.orders.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.myapp.orders.model.User;

/** Контроллер обработки пользователей */
@Controller
public class UserController {

    /**
     * Получение списка пользователей
     * @return
     */
    @GetMapping(value = "/user/get/all")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public List<User> getAllUsers()  {
        ArrayList<User> result = new ArrayList<>();

        result.add(new User(0, "Ted"));
        result.add(new User(1, "Lily"));
        result.add(new User(2, "Marshall"));
        result.add(new User(3, "Robin"));
        result.add(new User(4, "Barny"));
        result.add(new User(5, "Victoria"));
        result.add(new User(6, "Jeannette"));
        result.add(new User(7, "Nudeman"));

        return result;
    }
}
