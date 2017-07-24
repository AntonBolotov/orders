Ext.define('PM.store.OrderStore', {
    extend: 'Ext.data.Store',
    storeId: 'orderStore',
    model: 'PM.model.OrderModel',
    autoLoad: true,
    alias: 'store.orderStore',
    requires: [
        'PM.model.OrderModel'
    ],

    data: [
        {orderNumber: 1, orderName: 'just do it!', orderTo: 3, orderFrom: 6, orderState: 2},
        {orderNumber: 2, orderName: 'second', orderTo: 4, orderFrom: 8, orderState: 1}
    ],

    fields: ['id', 'name'],

    proxy: {
        type: 'ajax',
        api: {
            read: 'order/get/all',
            update: 'order/update'
        },
        reader: {
            type: 'json',
            rootProperty: 'orders'
        }
    }

    //proxy: {
    //    type: 'ajax',
    //    url: 'script/request.php?operazione=searchtarga',
    //    reader: {
    //        type: 'json',
    //        root: 'auto',
    //        totalProperty: 'results'
    //    },
    //    listeners : {
    //        exception : function(proxyObj, response, operation, eOpts) {
    //            console.log('failed');
    //        }
    //    }
    //}
});