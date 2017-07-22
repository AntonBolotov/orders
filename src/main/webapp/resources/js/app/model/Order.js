Ext.define('PM.model.Order', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'integer' },
        { name: 'name', type: 'string' },
        { name: 'to', reference: 'User' },
        { name: 'from', reference: 'User' },
        { name: 'state', reference: 'State'}
    ]
});