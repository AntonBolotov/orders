Ext.define('Orders.store.User', {
    extend: 'Ext.data.Store',
    storeId: 'userStore',
    model: 'Orders.model.User',
    autoLoad: true,
    alias: 'store.userStore',
    requires: [
        'Orders.model.User'
    ],

    proxy: {
        type: 'ajax',
        api: {
            read: '/user/get/all'
        },
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    }
});