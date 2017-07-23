Ext.define('PM.model.OrderModel', {
    extend: 'Ext.data.Model',
    alias: 'orderModel',
    fields: [
        { name: 'id', type: 'integer' },
        { name: 'name', type: 'string' },
        { name: 'to', reference: 'User' },
        { name: 'from', reference: 'User' },
        { name: 'state', reference: 'State'}
    ]
});