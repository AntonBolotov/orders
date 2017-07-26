Ext.define('PM.store.UserStore', {
    extend: 'Ext.data.Store',
    storeId: 'userStore',
    model: 'PM.model.UserModel',
    autoLoad: true,
    alias: 'store.userStore',
    requires: [
        'PM.model.UserModel'
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