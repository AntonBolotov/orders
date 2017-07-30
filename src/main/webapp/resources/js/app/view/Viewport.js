Ext.define('Orders.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    defaults: {
        padding: '3'
    },
    requires: [
        'Orders.view.orders.OrderList',
        'Orders.view.orders.OrdersModel'
    ],

    viewModel :'ordersmodel',

    items: [{
        xtype: 'orderlist',
        width: 400,
        region: 'west',
        title: 'Orders',
        reference: 'orders',
        bind: '{orderStore}'
    }, {
        region: 'center',
        xtype: 'orderdetails'
    }]
});