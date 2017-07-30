Ext.define('Orders.view.orders.OrdersModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ordersmodel',
    requires: [
        'Orders.model.Order'
    ],
    formulas: {
        dirty: {
            bind: {
                bindTo: '{currentOrder}',
                deep: true
            },
            get: function (data) {
                return data ? data.dirty : false
            }
        },
        storeDirty:{
            bind: {
                bindTo: '{currentOrder}',
                deep: true
            },
            get: function (data) {
                return this.getStore('orderStore').isDirty()
            }
        }
    },
    stores: {
        orderStore: {
            autoLoad: true,
            autoSync: false,
            proxy: {
                type: 'ajax',
                method: 'POST',
                api: {
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
            },
            isDirty: function(){
                var dirty = this.getModifiedRecords().length;
                dirty = dirty || this.getNewRecords().length;
                dirty = dirty || this.getRemovedRecords().length;

                return !!dirty;
            }
        }
    }
});