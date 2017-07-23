Ext.define('PM.store.OrderStore', {
    extend: 'Ext.data.Store',
    storeId: 'orderStore',
    model: 'PM.model.OrderModel',
    loaded: true,
    alias: 'store.orderStore',
    //groupField: 'project',
    requires: [
        'PM.model.OrderModel'
    ],
    fields: ['id','name'],

    data: [
        {id : 1, name: 'just do it!'},
        {id : 2, name: 'second'}
    ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});