Ext.define('Orders.model.Order', {
    extend: 'Ext.data.Model',

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
    }],
//https://www.sencha.com/forum/showthread.php?338054-ExtJS6-2-Model-Associations-Reference
});