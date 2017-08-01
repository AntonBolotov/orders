Ext.define('Orders.view.orders.OrdersModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.ordersmodel',
    requires: [
        'Orders.model.Order'
    ],
    formulas: {
        status: {
            bind: {
                bindTo: '{currentOrder}',
                deep: true
            },
            get: function (order) {
                //Не хорошо так напрямую дергать форму, но как подругому не понял
                var orderDetails = this.getView().down('orderdetails');
                var result = {
                    dirty: order ? order.dirty : false,
                    valid: order && order.isModel ? order.isValid() : false,
                    viewValid: orderDetails ? orderDetails.isValid() : false
                };

                result.dirtyAndValid = result.dirty && result.valid;
                result.dirtyAndViewValid = result.dirty && result.viewValid;
                return result;
            }
        }
    },
    stores: {
        orderStore: {
            autoLoad: true,
            autoSync: false,
            expandData: true,
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
                    writeAllFields: true,
                    allowSingle: false
                }
            }
        }
    }
});