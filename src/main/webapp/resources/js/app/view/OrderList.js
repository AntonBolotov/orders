Ext.define('PM.view.OrderList', {
    extend: 'Ext.grid.Panel',
    controller: 'order',

    xtype: 'orderlist',
    requires: [
        'PM.controller.Order'
    ],
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
    }]
});