Ext.define('PM.store.User', {
    extend: 'Ext.data.Store',
    model: 'PM.model.User',
    groupField: 'project',
    data: [
        {id: 1, name: 'Nick' }
    ]
});