Ext.application({
    name: 'PM',

    appFolder: 'resources/js/app',
    requires: [
        'PM.view.OrderList',
        'PM.view.OrderDetails'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            defaults: {
                padding: '3'
            },
            requires: [
                'PM.view.OrderList'
            ],
            items: [
                {
                    xtype: 'orderList',
                    width : 400,
                    region: 'west'
                },
                {region: 'center',
                    xtype: 'orderdetails'
                }
            ]
        });
    }
});