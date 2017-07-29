Ext.application({
    name: 'PM',

    appFolder: 'resources/js/app',
    requires: [
        'PM.view.OrderList',
        'PM.view.OrderDetails'
    ],

    autoCreateViewport: true
    //https://fiddle.sencha.com/#fiddle/22o7&view/editor
});