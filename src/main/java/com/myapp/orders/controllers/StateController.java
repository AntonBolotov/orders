package com.myapp.orders.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.myapp.orders.model.State;

/** Контроллер обработки статусов */
@Controller
public class StateController {

    /**
     * Получение списка статусов
     * @return
     */
    @GetMapping(value = "/state/get/all")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public List<State> getAllStates()  {
        ArrayList<State> result = new ArrayList<>();
        result.add(new State(0, "Success"));
        result.add(new State(1, "Process"));
        result.add(new State(2, "Fail"));

        return result;
    }
}
