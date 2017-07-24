Ext.define('PM.store.UserStore', {
    extend: 'Ext.data.Store',
    storeId: 'userStore',
    model: 'PM.model.UserModel',
    autoLoad: true,
    alias: 'store.userStore',
    requires: [
        'PM.model.UserModel'
    ],

    //data: [
    //    {id: 1, name: 'Ted'},
    //    {id: 2, name: 'Lily'},
    //    {id: 3, name: 'Marshall'},
    //    {id: 4, name: 'Robin'},
    //    {id: 5, name: 'Barny'},
    //    {id: 6, name: 'Victoria'},
    //    {id: 7, name: 'Jeannette'},
    //    {id: 8, name: 'Nudeman'},
    //],

    fields: ['id', 'name'],

    proxy: {
        type: 'ajax',
        api: {
            read: 'user/get/all',
        },
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    }
});