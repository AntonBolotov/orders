Ext.define('PM.controller.Order', {
    extend: 'Ext.app.Controller',
    stores: ['Order', 'User'],
    models: ['Order', 'User'],
    views: ['OrderList', 'OrderDetails']
});