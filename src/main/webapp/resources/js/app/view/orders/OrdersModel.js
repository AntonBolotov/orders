Ext.define('Orders.view.orders.OrdersModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ordersmodel',
    requires: [
        'Orders.model.Order'
    ],
    stores : {
        orderStore : {
            autoLoad : true,
            autoSync : false,
            proxy    : {
                type   : 'ajax',
                method: 'POST',
                api    : {
                    read: '/order/get/all',
                    update: '/order/update',
                    destroy: '/order/remove',
                    create: '/order/create'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'orders'
                },
                writer: {
                    writeAllFields: true
                }
            }
        }
    }
});