Ext.define('PM.store.OrderStore', {
    extend: 'Ext.data.Store',
    storeId: 'orderStore',
    model: 'PM.model.OrderModel',
    loaded: true,
    alias: 'store.orderStore',
    requires: [
        'PM.model.OrderModel'
    ],

    data: [
        {id: 1, name: 'just do it!'},
        {id: 2, name: 'second'}
    ],

    fields: ['id', 'name'],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});