Ext.define('PM.model.OrderModel', {
    extend : 'Ext.app.ViewModel',
    alias: 'viewmodel.orderModel',
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


    stores : {
        orderStore : {
            autoLoad : true,
            autoSync : false,
            proxy    : {
                type   : 'ajax',
                method: 'POST',
                api    : {
                    read: '/order/get/all',
                    update: '/order/update',
                    destroy: '/order/remove',
                    create: '/order/create'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'orders'
                },
                writer: {
                    writeAllFields: true
                }
            }
        }
    }
});