Ext.define('PM.store.Order', {
    extend: 'Ext.data.Store',
    model: 'PM.model.Order',
    groupField: 'project',
    data: [
        {id : 1, name: 'just do it!'}
    ]
});