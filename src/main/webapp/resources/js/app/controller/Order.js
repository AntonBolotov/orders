Ext.define('PM.controller.Order', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.order',
    stores: ['OrderStore', 'UserStore', 'StateStore'],
    models: ['OrderModel', 'UserModel', 'StateModel'],
    //views: ['OrderList'],
    requires: [
        'PM.store.OrderStore',
        'PM.model.OrderModel',
        'PM.store.UserStore',
        'PM.model.UserModel',
        'PM.store.StateStore',
        'PM.model.StateModel'
    ],

    onProjectSearchClick: function (order) {
        console.log(order);
    },

});