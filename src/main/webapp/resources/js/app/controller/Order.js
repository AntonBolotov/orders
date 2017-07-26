Ext.define('PM.controller.Order', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.order',
    stores: ['OrderStore', 'UserStore', 'StateStore'],
    models: ['OrderModel', 'UserModel', 'StateModel'],
    requires: [
        'PM.store.OrderStore',
        'PM.model.OrderModel',
        'PM.store.UserStore',
        'PM.model.UserModel',
        'PM.store.StateStore',
        'PM.model.StateModel'
    ],

    onSelectionChange: function (grid, selected, eOpts) {
        var rec = selected[0];
        if (rec) {
            this.getDetailsForm().loadRecord(rec);
        } else {
            this.onAddClick();
        }
    },

    getOrderModel: function () {
        return Ext.ModelManager.getModel('orderModel');
    },

    onAddClick: function () {
        this.getOrderList().getSelectionModel().deselectAll();
        this.getDetailsForm().reset();
    },

    getDetailsForm: function () {
        var orderDetails = Ext.ComponentQuery.query('orderdetails');
        if (orderDetails && orderDetails.length == 1) {
            return orderDetails[0].getForm();
        }

        return {};
    },

    getOrderList: function () {
        var orderList = Ext.ComponentQuery.query('orderList');

        if (orderList && orderList.length == 1) {
            return orderList[0];
        }

        return {};
    },

    getOrderStore: function () {
        return Ext.getStore('orderStore');
    },

    getOrderRecord: function (orderNUmber) {
        var store = this.getOrderStore();
        var recordIndex = store.find('orderNumber', orderNUmber);
        if (recordIndex > -1) {
            return store.getAt(recordIndex);
        } else {
            return null;
        }

    },

    onSaveClick: function () {
        var form = this.getDetailsForm();

        if(!form.isValid()){
            Ext.Msg.alert('Warning', "Fill form!");
            return;
        }
        var store = this.getOrderStore();
        var values = form.getValues();

        var orderRec = this.getOrderRecord(values.orderNumber);

        if (orderRec != null) {
            orderRec.set(form.getValues());
            form.updateRecord(orderRec);
        } else {
            store.add(Ext.create('PM.model.OrderModel', form.getValues()));
        }

        this.orderSync(store);
    },

    onRemoveClick: function () {
        var orderList = this.getOrderList();
        var selected = orderList.getSelection();

        console.log(selected);
        if (!selected || !selected.length) {
            Ext.Msg.alert('Warning', "Order not selected");
        }
        var store = this.getOrderStore();
        console.log(store);
        store.remove(selected);
        this.orderSync(store);
    },

    onValidationClick: function(){
        var form = this.getDetailsForm();
        if(form.isValid()){
            Ext.Msg.alert('Warning', "Valid");
        } else {
            Ext.Msg.alert('Warning', "NotValid");
        }
    },

    orderSync : function(order){
        if(!order || !order.sync){
            Ext.Msg.alert('Error', "Unknown error");
            return;
        }

        order.sync({
            success : function(){
                Ext.Msg.alert('Success', "Operation done");
            },
            failure: function(){
                Ext.Msg.alert('Error', "Operation failure");
            }
        })
    }

});