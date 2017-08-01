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
    }],

    associations: [{
        type: 'hasMany',
        model: 'User',
        name: 'orderTo'
    },{
        type: 'hasMany',
        model: 'User',
        name: 'orderFrom'
    },{
        type: 'hasMany',
        model: 'State',
        name: 'orderState'
    }]
});