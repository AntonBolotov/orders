Ext.define('PM.view.OrderList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.orderList',
    controller: 'order',
    title: 'Orders',
    //stores: ['OrderStore'],
    //store: Ext.getStore('PM.store.OrderStore'),
    store: {
        type: 'orderStore'
    },

    xtype: 'orderList',
    requires: [
        'PM.store.OrderStore',
        'PM.controller.Order'
    ],

    columns : [
        {header: 'Id', dataIndex: 'id', flex: 1,},
        {header: 'Name', dataIndex: 'name', flex: 1}
    ],
    selModel : {
        listeners: {
            selectionchange: 'onProjectSearchClick'
        }
    },
    //initComponent: function () {
    //    this.columns = [
    //        {header: 'Id', dataIndex: 'id', flex: 1,},
    //        {header: 'Name', dataIndex: 'name', flex: 1}
    //    ];
    //
    //    //this.selModel = {
    //    //    listeners: {
    //    //        selectionchange: 'onProjectSearchClick'
    //    //    }
    //    //};
    //
    //    this.callParent(arguments);
    //}
});