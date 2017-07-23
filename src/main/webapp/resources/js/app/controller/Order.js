Ext.define('PM.controller.Order', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.order',
    stores: ['OrderStore'],
    models: ['OrderModel'],
    //views: ['OrderList'],
    requires: [
        'PM.store.OrderStore',
        'PM.model.OrderModel'
    ],

    onProjectSearchClick: function (order) {
        console.log(order);
    },

});