Ext.define('PM.store.OrderStore', {
    extend: 'Ext.data.Store',
    storeId: 'orderStore',
    model: 'PM.model.OrderModel',
    autoLoad: true,
    alias: 'store.orderStore',
    requires: [
        'PM.model.OrderModel'
    ],

    proxy: {
        type: 'ajax',
        method: 'GET',
        api: {
            read: '/order/get/all',
            update: '/order/update',
            destroy: '/order/remove',
            create: '/order/create'
        },
        reader: {
            type: 'json',
            rootProperty: 'orders'
        }
    }
});