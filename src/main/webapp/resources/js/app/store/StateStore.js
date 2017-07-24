Ext.define('PM.store.StateStore', {
    extend: 'Ext.data.Store',
    storeId: 'stateStore',
    model: 'PM.model.StateModel',
    loaded: true,
    alias: 'store.stateStore',
    requires: [
        'PM.model.StateModel'
    ],

    data: [
        {id: 1, name: 'Success'},
        {id: 2, name: 'Fail'},
        {id: 3, name: 'Process'}
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