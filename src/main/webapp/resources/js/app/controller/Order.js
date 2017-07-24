Ext.define('PM.controller.Order', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.order',
    stores: ['OrderStore', 'UserStore', 'StateStore'],
    models: ['OrderModel', 'UserModel', 'StateModel'],
    //views: ['OrderList'],
    requires: [
        'PM.store.OrderStore',
        'PM.model.OrderModel',
        'PM.store.UserStore',
        'PM.model.UserModel',
        'PM.store.StateStore',
        'PM.model.StateModel'
    ],

    onProjectSearchClick: function (grid, selected, eOpts) {
        var rec = selected[0];
        this.getDetailsForm().loadRecord(rec);
        //var orderDetails = Ext.ComponentQuery.query('orderdetails');
        //if (orderDetails && orderDetails.length == 1) {
        //    orderDetails[0].getForm().loadRecord(rec);
        //}
    },

    onAddClick: function () {
        this.getDetailsForm().reset();
    },

    getDetailsForm : function(){
        var orderDetails = Ext.ComponentQuery.query('orderdetails');
        if (orderDetails && orderDetails.length == 1) {
            return  orderDetails[0].getForm();
        }

        return {};
    },

    onSaveClick : function(){
        var form =  this.getDetailsForm();

        form.submit({
            success: function(form, action) {
                Ext.Msg.alert('Success', "Сохранили");
            },
            failure: function(form, action) {
                Ext.Msg.alert('Failed', "Упали");
            }
        });
    }

});