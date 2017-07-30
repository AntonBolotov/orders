Ext.define('Orders.model.Order', {
    extend: 'Ext.data.Model',
    schema: {
        namespace: 'Orders.model'
    },
    idProperty: "orderNumber",
    identifier: {
        type: 'sequential',
        seed: 6
    },
    requires: [
        'Orders.store.User',
        'Orders.store.State'
    ],
    fields: [{
        name: 'orderNumber',
        type: 'integer'
    }, {
        name: 'orderName',
        type: 'string'
    }, {
        name: 'orderTo',
        reference: 'User'
    }, {
        name: 'orderFrom',
        reference: 'User'
    }, {
        name: 'orderState',
        reference: 'State'
    }]
});