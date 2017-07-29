Ext.define('PM.view.OrderDetails', {
    extend: 'Ext.form.Panel',
    alias: 'widget.orderdetails',
    controller: 'order',
    title: 'Order Details',

    requires: [
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        //'PM.store.OrderStore',
        'PM.store.UserStore',
        'PM.store.StateStore',
        'PM.controller.Order'
    ],

    tbar: [{
        text: 'Save',
        handler: 'onSaveClick'
    }, {
        text: 'Cancel',
        handler: 'onResetForm',
        enabled: false
    }],
    items: [{
        xtype: 'form',
        alias: 'orderForm',
        border: false,
        maxWidth: 600,
        bodyPadding: 20,
        reference: 'form',
        defaults: {
            anchor: '95%'
        },
        items: [{
            xtype: 'numberfield',
            fieldLabel: '№',
            name: 'orderNumber',
            enabled: false,
            required: true,
            regex: /^[0-9]+$/,
            allowBlank: false,
            bind: '{orders.selection.orderNumber}'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'orderName',
            enabled: false,
            required: true,
            allowBlank: false,
            bind: '{orders.selection.orderName}'
        }, {
            xtype: 'combo',
            fieldLabel: 'To',

            name: 'orderTo',
            store: {
                type: 'userStore'
            },
            queryMode: 'local',
            required: true,
            displayField: 'name',
            valueField: 'id',
            allowBlank: false,
            bind: '{orders.selection.orderTo}'
        }, {
            xtype: 'combo',
            fieldLabel: 'From',
            name: 'orderFrom',
            store: {
                type: 'userStore'
            },
            queryMode: 'local',
            required: true,
            displayField: 'name',
            valueField: 'id',
            allowBlank: false,
            bind: '{orders.selection.orderFrom}'
        }, {
            xtype: 'combo',
            fieldLabel: 'State',
            name: 'orderState',
            store: {
                type: 'stateStore'
            },
            queryMode: 'local',
            required: true,
            displayField: 'name',
            valueField: 'id',
            allowBlank: false,
            bind: '{orders.selection.orderState}'
        }]
    }]
});