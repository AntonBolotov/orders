package com.myapp.orders.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.myapp.orders.model.Order;

/** Контроллер обработки заявок */
@Controller
@RequestMapping(value = "order")
public class OrderController {

    /**
     * Изменение заявки
     * @param order данные по заявке
     * @return
     */
    @RequestMapping(value = "update", method = {RequestMethod.POST})
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public List<Order> addOrder(@RequestBody Order order)  {
        System.out.println(order);

        ArrayList<Order> result = new ArrayList<>();
        result.add(order);
        return result;
    }

    /**
     * Удаление заявки
     * @param order данные по заявке
     */
    @RequestMapping(value = "remove", method = {RequestMethod.POST})
    @ResponseStatus(value = HttpStatus.OK)
    public void removeOrder(@RequestBody Order order)  {
        System.out.println(order);
    }

    /**
     * Создание заявки
     * @param order данные по заявке
     */
    @RequestMapping(value = "create", method = {RequestMethod.POST})
    @ResponseStatus(value = HttpStatus.OK)
    public void createOrder(@RequestBody Order order)  {
        System.out.println(order);
    }

    /**
     * получение списка заявок
     * @return
     */
    @GetMapping(value = "get/all")
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public List<Order> getAllOrders()  {
        ArrayList<Order> result = new ArrayList<>();

        result.add( new Order(0, "Lick the Liberty Bell", 4, 0, 0));
        result.add( new Order(1, "Slap of a Million Exploding Suns", 4, 2, 0));
        result.add( new Order(2, "Call in marriage", 1, 2, 1));
        result.add( new Order(3, "Offer work in the GNB", 0, 4, 2));
        result.add( new Order(4, "Kiss", 3, 1, 2));
        result.add( new Order(5, "Nudeman", 3, 7, 1));

        return result;
    }
}
