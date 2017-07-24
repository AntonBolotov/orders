Ext.define('PM.view.OrderList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.orderList',
    controller: 'order',
    title: 'Orders',

    store: {
        type: 'orderStore'
    },

    xtype: 'orderList',
    requires: [
        'PM.store.OrderStore',
        'PM.controller.Order'
    ],
    tbar: [{
        text: 'New',
        handler: 'onAddClick'
    }],
    columns : [
        {header: 'Id', dataIndex: 'orderNumber', flex: 1,},
        {header: 'Name', dataIndex: 'orderName', flex: 1}
    ],
    selModel : {
        listeners: {
            selectionchange: 'onProjectSearchClick'
        }
    },
});