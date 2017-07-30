Ext.define('Orders.store.State', {
    extend: 'Ext.data.Store',
    storeId: 'stateStore',
    model: 'Orders.model.State',
    autoLoad: true,
    alias: 'store.stateStore',
    requires: [
        'Orders.model.State'
    ],

    proxy: {
        type: 'ajax',
        api: {
            read: '/state/get/all'
        },
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    }
});