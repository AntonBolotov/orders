Ext.define('Orders.view.orders.OrderDetails', {
    extend: 'Ext.form.Panel',
    alias: 'widget.orderdetails',
    controller: 'order',
    title: 'Order Details',
    requires: [
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Orders.store.User',
        'Orders.store.State',
        'Orders.view.orders.OrderController',
        'Orders.view.orders.OrdersModel'
    ],
    config: {
        currentOrder: null
    },
    bind: {
        currentOrder: '{currentOrder}'
    },
    border: '0 0 0 1',
    tbar: [{
        text: 'Save',
        handler: 'onSaveClick',
        disabled: true,
        bind: {
            disabled: '{!status.dirtyAndViewValid}'
        }
    }, {
        text: 'Cancel',
        handler: 'onResetForm'
    }],
    modelValidation: true,
    hidden : true,
    items: [{
        xtype: 'form',
        alias: 'orderform',
        border: false,
        maxWidth: 600,
        bodyPadding: 20,
        reference: 'form',
        defaults: {
            anchor: '95%'
        },
        items: [{
            xtype: 'displayfield',
            fieldLabel: '№',
            name: 'orderNumber',
            enabled: false,
            required: true,
            regex: /^[0-9]+$/,
            allowBlank: false,
            bind: {
                value: '{currentOrder.orderNumber}'
            }
        }, {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'orderName',
            enabled: false,
            required: true,
            allowBlank: false,
            bind: '{currentOrder.orderName}'
        }, {
            xtype: 'combo',
            fieldLabel: 'To',
            editable: false,
            name: 'orderTo',
            store: {
                type: 'userStore'
            },
            queryMode: 'local',
            required: true,
            displayField: 'name',
            valueField: 'id',
            allowBlank: false,
            bind: '{currentOrder.orderTo}'
        }, {
            xtype: 'combo',
            fieldLabel: 'From',
            name: 'orderFrom',
            store: {
                type: 'userStore'
            },
            queryMode: 'local',
            required: true,
            editable: false,
            displayField: 'name',
            valueField: 'id',
            allowBlank: false,
            bind: '{currentOrder.orderFrom}'
        }, {
            xtype: 'combo',
            fieldLabel: 'State',
            name: 'orderState',
            store: {
                type: 'stateStore'
            },
            queryMode: 'local',
            required: true,
            editable: false,
            displayField: 'name',
            valueField: 'id',
            allowBlank: false,
            bind: '{currentOrder.orderState}'
        }]
    }]
});