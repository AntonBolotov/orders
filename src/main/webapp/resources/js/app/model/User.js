Ext.define('Orders.model.User', {
    extend: 'Ext.data.Model',
    alias: 'userModel',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }]
});