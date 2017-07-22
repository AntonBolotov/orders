Ext.define('PM.view.OrderDetails', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.orderdetails',

    title: 'Order Details',
    //features: [groupingFeature],
    store: 'Order',

    requires: [
        //'Ticket.view.ticket.DetailModel',
        //'Ticket.view.ticket.DetailController',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox'
    ],
    tbar: [{
        text: 'Save',
        //handler: 'onSaveClick'
    }],
    items: [{
        xtype: 'form',
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
                name: 'orderNumber'
            },
            {
                xtype: 'combo',
                fieldLabel: 'To',
                name: 'orderTo',
                //store: states,
                //queryMode: 'local',
                //displayField: 'name',
                //valueField: 'abbr',

                //bind: {
                //    store: '{theTicket.project.users}',
                //    value: '{theTicket.assigneeId}'
                //}
            },
            {
                xtype: 'combo',
                fieldLabel: 'From',
                name: 'orderFrom'
            },
            {
                xtype: 'combo',
                fieldLabel: 'State',
                name: 'orderState'
            },]
    }],

    initComponent: function () {
        //this.columns = [
        //    { header: 'Id', dataIndex: 'id', flex: 1 },
        //    { header: 'Name', dataIndex: 'name', flex: 1}
        //];

        this.callParent(arguments);
    }
});