package com.myapp.orders;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller
public class OrderController {

    @GetMapping(value = "/order/update")
    @ResponseStatus(value = HttpStatus.OK)
    public void addOrder(Order order)  {
        System.out.println(order);
    }

    @RequestMapping(value = "/order/remove")
    @ResponseStatus(value = HttpStatus.OK)
    public void removeOrder(Order order)  {
        System.out.println(order);
    }

    @GetMapping(value = "/order/create")
    @ResponseStatus(value = HttpStatus.OK)
    public void createOrder(Order order)  {
        System.out.println(order);
    }

    @GetMapping(value = "/order/get/all")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public List<Order> getAllOrders()  {
        ArrayList<Order> result = new ArrayList<>();

        result.add( new Order(0, "Lick the Liberty Bell", 4, 0, 0));
        result.add( new Order(1, "TestName", 0, 7, 3));
        result.add( new Order(2, "TestName", 0, 7, 3));
        result.add( new Order(3, "TestName", 0, 7, 3));
        result.add( new Order(4, "TestName", 0, 7, 3));
        result.add( new Order(5, "TestName", 0, 7, 3));

        return result;
    }
}
