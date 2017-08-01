Ext.define('Orders.view.orders.Orders', {
    //extend: 'Ext.container.Viewport',
    extend: 'Ext.panel.Panel',
    alias: 'widget.orderspage',

    xtype: 'orderspage',

    requires: [
        'Orders.view.orders.OrderDetails',
        'Orders.view.orders.OrderList',
        'Orders.view.orders.OrdersModel'
    ],
    layout: {
        type: 'hbox',
        align: 'stretch',
        padding: 0
    },
    viewModel: 'ordersmodel',

    items: [{
        xtype: 'orderlist',
        width: '30%',
        height: '100%',
        title: 'Orders',
        reference: 'orders',
        bind: '{orderStore}',
        flex: 0
    }, {
        xtype: 'splitter',
        autoShow: true
    }, {
        height: '100%',
        xtype: 'orderdetails',
        flex: 1
    }]
});
