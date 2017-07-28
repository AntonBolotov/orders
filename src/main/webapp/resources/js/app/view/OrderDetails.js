Ext.define('PM.view.OrderDetails', {
    extend: 'Ext.form.Panel',
    alias: 'widget.orderdetails',
    controller: 'order',
    title: 'Order Details',
    stores: ['OrderStore', 'UserStore'],
    store: {
        type: 'orderStore'
    },
    requires: [
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'PM.store.OrderStore',
        'PM.store.UserStore',
        'PM.store.StateStore',
        'PM.controller.Order'
    ],

    tbar: [{
        text: 'Save',
        handler: 'onSaveClick'
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
            xtype: 'textfield',
            fieldLabel: '№',
            name: 'orderNumber',
            enabled: false,
            regex: /^[0-9]+$/,
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'orderName',
            enabled: false,
            allowBlank: false
        }, {
            xtype: 'combo',
            fieldLabel: 'To',

            name: 'orderTo',
            store: {
                type: 'userStore'
            },
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            allowBlank: false
        }, {
            xtype: 'combo',
            fieldLabel: 'From',
            name: 'orderFrom',
            store: {
                type: 'userStore'
            },
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            allowBlank: false
        }, {
            xtype: 'combo',
            fieldLabel: 'State',
            name: 'orderState',
            store: {
                type: 'stateStore'
            },
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            allowBlank: false
        }]
    }]
});