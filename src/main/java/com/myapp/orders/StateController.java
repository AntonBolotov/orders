package com.myapp.orders;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class StateController {

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
