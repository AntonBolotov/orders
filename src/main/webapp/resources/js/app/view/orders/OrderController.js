Ext.define('Orders.view.orders.OrderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.order',

    onGridRowSelect: function (sender, record) {
        var me = this;
        me.getViewModel().set('currentOrder', record);
        me.getDetailsView().show();
    },

    onAddClick: function (sender, record) {

        var vm = this.getViewModel(),
            store = vm.getStore('orderStore'),
            order = Ext.create("Orders.model.Order");

        var rec =store.insert(0, order)[0];
        vm.set('currentOrder', rec);
        this.getView().getView().select(0);
    },

    getDetailsForm: function () {
        var detailsView = this.getDetailsView();
        if(detailsView){
            return detailsView.getForm();
        }

        return {};
    },

    getDetailsView : function(){
        var orderDetails = Ext.ComponentQuery.query('orderdetails');
        if (orderDetails && orderDetails.length == 1) {
            return orderDetails[0];
        }

        return null;
    },

    getOrderList: function () {
        var orderList = Ext.ComponentQuery.query('orderlist');

        if (orderList && orderList.length == 1) {
            return orderList[0];
        }

        return {};
    },

    getOrderStore: function () {
        return this.getStore('orderStore');
    },

    onSaveClick: function () {
        var form = this.getDetailsForm();

        if (!form.isValid()) {
            Ext.Msg.alert('Warning', "Fill form!");
            return;
        }

        var store = this.getOrderStore();
        var values = form.getValues();
        var vm = this.getViewModel();
        var orderRec = vm.get('currentOrder');


        if (orderRec != null) {
            orderRec.set(form.getValues());
            form.updateRecord(orderRec);
        } else {
            store.add(values);
        }

        this.orderSync(store);
    },

    onRemoveClick: function (grid, context) {

        var orderList = this.getOrderList();
        var selected = orderList.getSelection();

        if (!selected || !selected.length) {
            Ext.Msg.alert('Warning', "Order not selected");
        }

        var store = this.getOrderStore();
        store.remove(selected);
        this.orderSync(store);

        this.getOrderList().getSelectionModel().deselectAll();
        this.getView().getView().select(0);
    },

    orderSync: function (order) {
        if (!order || !order.sync) {
            Ext.Msg.alert('Error', "Unknown error");
            return;
        }

        order.sync({
            success: function () {
                Ext.Msg.alert('Success', "Operation done");
            },
            failure: function () {
                Ext.Msg.alert('Error', "Operation failure");
            }
        })
    },

    getInvalidFields: function(form) {

        var invalidFields = [];
        Ext.suspendLayouts();
        form.getFields().filterBy(function(field) {
            if (field.validate()) return;
            invalidFields.push(field);
        });
        Ext.resumeLayouts(true);
        return invalidFields;
    },

    onResetForm: function () {
        var form = this.getDetailsForm();

        if (!form.isValid()) {
            var invalidFields = this.getInvalidFields(form);
            invalidFields.forEach(function(field) {
                field.setValue(field.bind.value.lastValue);
            });
        } else {
            var store = this.getOrderStore();
            store.rejectChanges();
        }
    },

    initViewModel: function(viewModel) {
        viewModel.notify();

        var form = this.getView().down('orderdetails');
        form.queryBy(function(component) {
            return !!component.isFormField;
        }).forEach(function(formField) {
            formField.resetOriginalValue();
        })
    }
});