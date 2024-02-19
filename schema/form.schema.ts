import { config, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, text } from '@keystone-6/core/fields';

const fields = {
    first_name: text({validation: { isRequired: true, }}),
    last_name: text({validation: { isRequired: true, }}),
    mobile_number: text({
        validation: { isRequired: true, },
        isIndexed: 'unique'
    }),
    email: text({
        validation: { isRequired: true, },
        isIndexed: 'unique'
    }),
    roles: relationship({
        many: true,
        ref: 'FormRole.forms',
        ui: {
            displayMode: 'cards',
            cardFields: ['role'],
            inlineEdit: { fields: ['role'] },
            linkToItem: true,
            inlineConnect: true,
            inlineCreate: { fields: ['role'] },
        },
    })
}

export default list({
    isSingleton: false,
    defaultIsFilterable: false,
    defaultIsOrderable: false,
    fields,
    // WARNING
    //   for this starter project, anyone can create, query, update and delete anything
    //   if you want to prevent random people on the internet from accessing your data,
    //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
    access: allowAll,
    ui: { 
        label: 'Form'    
    },
    // hooks: { /* ... */ },
    // graphql: { /* ... */ },
    db: {
        idField: { kind: 'uuid' },
        map: 'submitted_forms'
    },
    // description: '...',
});