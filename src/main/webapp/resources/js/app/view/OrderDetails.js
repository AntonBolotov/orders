Ext.define('PM.view.OrderDetails', {
    extend: 'Ext.form.Panel',
    alias: 'widget.orderdetails',
    controller: 'order',
    title: 'Order Details',
    stores: ['OrderStore', 'UserStore'],
    store: {
        type: 'orderStore'
    },
    url: '/order/update',
    method: 'GET',
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
        //height: 100,
        bodyPadding: 20,
        reference: 'form',
        defaults: {
            anchor: '95%'
        },
        items: [
            {
                xtype: 'textfield',
                fieldLabel: '№',
                name: 'orderNumber',
                    enabled: false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Name',
                name: 'orderName',
                enabled: false
            },
            {
                xtype: 'combo',
                fieldLabel: 'To',
                name: 'orderTo',
                store: {
                    type: 'userStore'
                },
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',

            },
            {
                xtype: 'combo',
                fieldLabel: 'From',
                name: 'orderFrom',
                store: {
                    type: 'userStore'
                },
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
            },
            {
                xtype: 'combo',
                fieldLabel: 'State',
                name: 'orderState',
                store: {
                    type: 'stateStore'
                },
                queryMode: 'local',
                displayField: 'name',
                valueField: 'id',
            }]
    }],


    loadRecord : function(item){
        console.log(item);
    },


});