Ext.onReady(function () {
    //Ext.create("Ext.panel.Panel", {
    //    title: "f",
    //    renderTo: Ext.getBody(),
    //    width: 600,
    //    height: 200,
    //    region: 'center',
    //    fieldDefaults: {
    //        msgTarget: 'side'
    //    },
    //    defaults: {
    //        anchor: '100%'
    //    },
    //    defaultType: 'textfield',
    //    items: [{
    //        fieldLabel: 'Email',
    //        name: 'email',
    //        vtype: 'email'
    //
    //    }, {
    //        fieldLabel: 'First',
    //        name: 'first',
    //        allowBlank: false,
    //    }, {
    //        fieldLabel: 'Last',
    //        name: 'last',
    //        allowBlank: false,
    //    }],
    //    bodyPadding: '5 5 0',
    //    bbar: [
    //        {xtype: 'button', text: 'Save'},
    //        {xtype: 'button', text: 'Create'},
    //        {xtype: 'button', text: 'Reset'}
    //
    //    ],
    //});

    //Ext.create("Ext.panel.Panel", {
    //    title: "UserList",
    //    renderTo: 'secondPanel',
    //    width: 600,
    //    height: 300,
    //    tbar: [
    //
    //        {xtype: 'button', text: 'Button 2'},
    //
    //        {xtype: 'button', text: 'Button 3'}
    //
    //    ],
    //    //                layout: 'border',
    //    //
    //    //                defaults: {
    //    //
    //    //                    padding: '3'
    //    //
    //    //                },
    //    //                items  : [{
    //    //                    xtype : 'panel',
    //    //                    region: 'west',
    //    //                    title : 'Вложенная первая',
    //    //                    html  : 'контент контент контент '
    //    //
    //    //                },{
    //    //                    xtype : 'panel',
    //    //                    region: 'center',
    //    //                    title : 'Вложенная вторая',
    //    //                    html  : 'контент контент контент '
    //    //                }]
    //});

    //            Ext.Msg.alert('Загаловок','Hello World');

    //var panel = Ext.create('Ext.panel.Panel', {
    //    title : '',
    //    //width : 600,
    //    height: 400,
    //    renderTo : Ext.getBody(),
    //    layout : 'border',
    //    defaults : {
    //        padding: '3'
    //    },
    //
    //    items  : [orderDetails, orderList]
    //});

    Ext.create('Ext.container.Viewport', {
        layout : 'border',
        defaults : {
                    padding: '3'
                },
        items: [ orderDetails, orderList ]
    });
});