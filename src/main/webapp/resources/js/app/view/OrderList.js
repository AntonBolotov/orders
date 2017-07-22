Ext.define('PM.view.OrderList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.orderList',

    title: 'Orders',
    //features: [groupingFeature],
    store: 'Order',

    initComponent: function () {
        this.columns = [
            { header: 'Id', dataIndex: 'id', flex: 1 },
            { header: 'Name', dataIndex: 'name', flex: 1}
        ];

        this.callParent(arguments);
    }
});