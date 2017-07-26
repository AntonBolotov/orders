Ext.define('PM.model.OrderModel', {
    extend: 'Ext.data.Model',
    alias: 'orderModel',
    fields: [
        { name: 'orderNumber', type: 'integer' },
        { name: 'orderName', type: 'string' },
        { name: 'orderTo', reference: 'User' },
        { name: 'orderFrom', reference: 'User' },
        { name: 'orderState', reference: 'State'}
    ]
});