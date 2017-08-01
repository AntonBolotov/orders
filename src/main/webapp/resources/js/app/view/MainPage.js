Ext.define('Orders.view.MainPage', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    ui: 'navigation',
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    requires: [
       'Orders.view.orders.Orders'
    ],

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            text: 'MyApp',
            flex: 0
        }
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },

    defaults: {
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    items: [{
        title: 'Orders',
        xtype:'orderspage'
    },{
        title: 'About',
        html: 'About page'
    }]
});