package com.myapp.orders.model;

public class Order {

    private String id;
    private Integer orderNumber;
    private String orderName;
    private Integer orderTo;
    private Integer orderFrom;
    private Integer orderState;

    public Order() {
    }

    public Order(Integer orderNumber, String orderName, Integer orderTo, Integer orderFrom, Integer orderState) {
        this.orderNumber = orderNumber;
        this.orderName = orderName;
        this.orderTo = orderTo;
        this.orderFrom = orderFrom;
        this.orderState = orderState;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(Integer orderNumber) {
        this.orderNumber = orderNumber;
    }

    public String getOrderName() {
        return orderName;
    }

    public void setOrderName(String orderName) {
        this.orderName = orderName;
    }

    public Integer getOrderTo() {
        return orderTo;
    }

    public void setOrderTo(Integer orderTo) {
        this.orderTo = orderTo;
    }

    public Integer getOrderFrom() {
        return orderFrom;
    }

    public void setOrderFrom(Integer orderFrom) {
        this.orderFrom = orderFrom;
    }

    public Integer getOrderState() {
        return orderState;
    }

    public void setOrderState(Integer orderState) {
        this.orderState = orderState;
    }

    @Override
    public String toString() {
        return "Order{" +
               "id='" + id + '\'' +
               ", orderNumber=" + orderNumber +
               ", orderName='" + orderName + '\'' +
               ", orderTo=" + orderTo +
               ", orderFrom=" + orderFrom +
               ", orderState=" + orderState +
               '}';
    }
}
