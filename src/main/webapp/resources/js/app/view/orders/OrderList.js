Ext.define('Orders.view.orders.OrderList', {
    extend: 'Ext.grid.Panel',
    controller: 'order',
    xtype: 'orderlist',
    requires: [
        'Orders.view.orders.OrderController'
    ],
    publishes:['currentOrder'],

    tbar: [{
        text: 'New',
        handler: 'onAddClick'
    }, {
        text: 'Remove',
        handler: 'onRemoveClick'
    }],
    columns: [{
        header: 'Id',
        dataIndex: 'orderNumber',
        flex: 1
    }, {
        header: 'Name',
        dataIndex: 'orderName',
        flex: 1
    }],
    listeners: {
        select: 'onGridRowSelect'
    }
});