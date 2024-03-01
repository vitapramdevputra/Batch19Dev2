# Revision-4 Adapters & functions(methods)

## ui*Api

### uiObjectInfoApi

- object information (record type info, default record type, field information)
    - `getObjectInfo`
        - `defaultRecordTypeId`, `recordTypeInfos`, `fields`, `keyPrefix`, etc
    - `getPicklistValues`
        - what are tha paramters that we need to pass?
            - `fieldApiName`, `recordTypeId` (if we are passing class property it should start with `$`)
        - it gives us all the label and values of a picklist as per recordType
            - we assigned it to combobox options
        - how can we get selected value in changeHandler of combobox?
            -  `event.detail.value`
    - `getPicklistValuesByRecordType`
        - paramters: `recordTypeId`, `objectAPIName`
        - all picklists details for that `recordTypeId`
            - to fetch options for individual picklist use below code
            ~~~ 
            this.industryOptions = data.picklistFieldValues.Industry.values;
            this.typeOptions = data.picklistFieldValues.Type.values;
            this.ratingOptions = data.picklistFieldValues.Rating.values;
            ~~~
        
        > NOTE: difference between `event.target` and `event.detail`. `event.detail` gives details of THAT particular EVENT (submit, or change, or keypress). `event.target` gives us component details.


- `getRecord`
    - used to get records 
        - parameters: `recordId` and `fields (array)`
        OR
        - parameters: `recordId` and `layoutType` and `modes`
    - how to get value of a particular field?
        - `data.fields.field_api_name.values`
    

- All functions/adapters so far
    - Which adapter (function) we use from which API (import) to get defaultRecordType id of an object?
        - api: `uiObjectInfoApi`
        - adapter: `getObjectInfo`, we pass OBJECT
    - which function we use to get all the picklist values from object for a particular record type?
        - adapter/function: `getPicklistValueByRecordType`
    - how to get record details (all fields or some of the fields)?
        - `getRecord`
            - recordId
            - fields array
        - `getRecord`
            - recordId
            - layoutTypes: ['Full']
            - modes: ['View']

## createRecord

- All other adapters till now are used to get details ONLY (GET).
    - in get API call, we don't pass body.
    - we pass some parameters and the api returns us details.
- with `createRecord`, `updateRecord`, we are not doing POST - imperative call (promises)
    - we pass data in body to create/update/delete
    - we prepare data to pass as below
    ~~~
    const recordInput = {
        "apiName": "Account",
        "fields": this.myFormData
    };
    ~~~

## updateRecord

- in input parameter we have to pass recordId also.
    ~~~
    this.myFormData["Id"] = '001abc';
    const recordInput = {
        "fields": this.myFormData
    }
    //can we do wire service call here?
            //why? wire is used to retrieve data only. No Create/update/delete
    updateRecord(recordInput)
        .then(result => {
            //show toast
        })
        .catch(error => {
            //show toast
    })
    ~~~

## deleteRecord

- we just need to pass `recordId`
    ~~~
     const recordId = this.recId;

        deleteRecord(recordId)
            .then(result => {
                //show success
                this.showToast('Deleted Record', 'warning', 'Record id deleted and moved to recycle bin.');
            }).catch(error => {
                //show error
                this.showToast('Not deleted', 'error', 'something went wrong buddy');
        })
    ~~~



