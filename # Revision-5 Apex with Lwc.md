# Apex with LWC

- There are two ways to call apex from lwc.
    - `@wire services`
        - `@wire` is used to get records
            - we can call apex with or without parameters using `@wire`
    - `imperative call`
        - we can call apex with or without parameters.
        - we can get records, create/update/delete, do whatever you want in apex.

- Apex
    - annotation to use in methods which allows us to call from lwc
        - `@auraEnabled`
        - any other conditions?
            - `(cacheable=true)` -> this is used ONLY for `@wire`, when we returning data only.
                - if we are creating data we can't use `cacheable`
            - method must be `public or global` and `static`


- in Lwc
    - to call apex method, we must `import` it first
    - `import anyName from '@salesforce/apex/ClassName.methodName'`
        - if we want to call imported method we will use `anyName`
    
- how to pass parameter in apex from `lwc`
    - using `@wire`
        ~~~
        @wire(methodName, {parameterName: '$value'})
        handleResults;
        ~~~

- One new and important lightning-component
    - `datatable`
        - attributes: key-field, data, columns
        - optional attributes: `hide-checkbox-column`, `show-row-number-column`
            - Columns: it is array of object
                ~~~
                columns = [
                    {label: 'Name', fieldName:'Name' },
                    {label: 'Acc phone', fieldName: 'Phone', type:'phone'}
                ]
                ~~~

- imperative call
    - first `import methodName from '@salesforce/apex/methodName`
    - call it inside button
        ~~~
        classProperty;
        handleClick(){
            methodName({param1: value1, param2:value2})
                .then(result => {
                    console.log(result);
                    this.classProperty = result;
                })
                .catch(error => {
                    console.log(error);
                })
        }
        ~~~
    - apex side what is the annotation we have to use for imperative call?
        - `@auraenabled (cacheable=true)`  is used for get. 
            - don't write cacheable for dmls and other stuff.
