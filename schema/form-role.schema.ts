import { config, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, text } from '@keystone-6/core/fields';

const fields = {
    forms: relationship({
        ref: 'Form.roles',
        many: true
    }),
    role: text({validation: { isRequired: true, }}),
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
        label: 'Form Role',
        isHidden: true
    },
    // hooks: { /* ... */ },
    // graphql: { /* ... */ },
    db: {
        idField: { kind: 'uuid' },
        map: 'submitted_form_roles'
    },
    // description: '...',
});