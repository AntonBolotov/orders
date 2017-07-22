var states = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"AL", "name":"Alabama"},
        {"abbr":"AK", "name":"Alaska"},
        {"abbr":"AZ", "name":"Arizona"}
        //...
    ]
});

var orderDetails = Ext.create('Ext.panel.Panel', {
    region: 'center',
    title : 'Заявка №',
    bodyPadding: 10,
    defaultType: 'textfield',
    items: [
        {
            fieldLabel: '№',
            name: 'orderNumber'
        },
        {
            xtype: 'combo',
            fieldLabel: 'To',
            name: 'orderTo',
            store: states,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'abbr',
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
        },
    ]
});
