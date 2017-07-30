Ext.define('Orders.view.orders.OrderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.order',
    requires: [
        'Orders.model.Order'
    ],
    onGridRowSelect: function(sender, record) {
        var me = this;
        //me.setActiveEastCard(1);
        me.getViewModel().set('currentOrder', record);
    },
    onAddClick: function (sender, record) {
        //this.getOrderList().getSelectionModel().deselectAll();
        //this.getDetailsForm().reset();

        var me = this,
            vm = me.getViewModel(),
            store = vm.getStore('orders'),
            record = Ext.create("Orders.model.Order", {
                orderName: '',
                orderTo:{},
                orderFrom: {},
                orderState: {}
            });
        vm.set('currentOrder', record);
        store.insert(0, record);
        me.getView().down('orderlist').getView().select(0)
    },

    getDetailsForm: function () {
        var orderDetails = Ext.ComponentQuery.query('orderdetails');
        if (orderDetails && orderDetails.length == 1) {
            return orderDetails[0].getForm();
        }

        return {};
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
        var orderList = this.getOrderList();
        var selected = orderList.getSelection();

        console.log(form.isDirty());

        if(!form.isValid()){
            Ext.Msg.alert('Warning', "Fill form!");
            return;
        }

        var store = this.getOrderStore();
        var values = form.getValues();
        var vm = this.getViewModel();
        var orderRec =  vm.get('currentOrder');// this.getOrderRecord(values.orderNumber);

        //store.commitChanges();

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
    },

    onResetForm: function(){
        var store = this.getOrderStore();
        store.rejectChanges();

        //this.getDetailsForm().reset(true);
    }
});