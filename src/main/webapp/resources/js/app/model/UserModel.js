Ext.define('PM.model.UserModel', {
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