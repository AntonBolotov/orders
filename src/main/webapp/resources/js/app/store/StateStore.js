Ext.define('PM.store.StateStore', {
    extend: 'Ext.data.Store',
    storeId: 'stateStore',
    model: 'PM.model.StateModel',
    autoLoad: true,
    alias: 'store.stateStore',
    requires: [
        'PM.model.StateModel'
    ],

    //fields: ['id', 'name'],

    proxy: {
        type: 'ajax',
        api: {
            read: '/state/get/all',
        },
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    }
});