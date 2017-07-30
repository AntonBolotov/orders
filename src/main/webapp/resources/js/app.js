Ext.application({
    name: 'Orders',

    appFolder: 'resources/js/app',
    requires: [
        'Orders.view.orders.OrderList',
        'Orders.view.orders.OrderDetails'
    ],

    autoCreateViewport: true
    //https://fiddle.sencha.com/#fiddle/22o7&view/editor
    //https://github.com/wregen/dummy-ext-crud
});