Ext.define('PM.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    defaults: {
        padding: '3'
    },
    requires: [
        'PM.view.OrderList'
    ],

    //defaultListenerScope: true,
    viewModel : {
        type : 'orderModel'
    },

    items: [{
        xtype: 'orderlist',
        width: 400,
        region: 'west',
        title: 'Orders',
        reference: 'orders',
        bind: '{orderStore}'
    }, {
        region: 'center',
        xtype: 'orderdetails',
        //bind: '{orders.selection}'
    }]
});