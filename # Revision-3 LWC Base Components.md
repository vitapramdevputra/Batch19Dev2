# Revision-3 LWC Base Components

- Base Components
    - if we want to view/create/edit records without writing apex code, and we need simple solution without MUCH customization we can use Base components.
    - which base components?
        - record form
        - record view
        - record edit

- lightning-record-form
    - attributes.
        - objectName*
            - we pass it from JS by importing object schema
                - `import ACCOUNT_OBJECT from '@salesfoce/schema/Account'`
        - fields*
            - `import Name from '@salesforce/schema/Account.Name';`
               `import Industry from '@salesforce/schema/Account.Industry';`
        - recordId (this can be optional)
            - if we don't provide recordId, we get create record form.
        - columns
        - mode
            - readonly 
            - edit
            - view
        - layout type (we don't specify fields)
            - full
            - compact
    - event
        - onsuccess => calling a method of JS
            - we showed a toast event

- lightning-record-view-form
    - what is difference in between lightning record view form and 'readonly' mode of  lightning-record-form?
        - `lightning-record-view-form` is more customizable.
            - `lightning-output-field` to show data
            
- lightning-record-edit-form
    - this is more customizable than `lightning-record-form` edit mode.
        - we use `lightning-input-field` to input all fields. It automactically adjust with datatype of field.
            - if the field is required from backend (object level) then it will be required here.
            - for other fields, we must add `required` attribute


