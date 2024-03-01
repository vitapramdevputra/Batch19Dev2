# Flows

- types of flows
    - screenflow
    - schedule trigger flow
    - auto launch flow (trigger)
    - auto launch flow (no trigger)
    - platform event trigger flow
    - orchestration


- Screen flow
    - Can we have multiple screens in ONE screen flow?
        - Yes.
    - We add elements in screenflow
        - screen element
            - We must provide API Name, label, and description
                - we add more components in this screen element
                    - for each component we must provide API Name, other properties
    
    - Save FLOW & activate
    - Add flow in ligthning record page or any actions

- To open screen flow from lightning record page button, we have to create action button and add this action button in lightning record page (or page layout)

- create record element
    - select object
    - set literal field values
        - get values from previous screen components.

- if we keep flow in record detail page(of account or contact or any other object), how can we get id or entire record in our flow?
    - create a new resource in flow > a new variable
        - name of the variable MUST be `recordId`(exact name - case sensitive)
        - Datatype -> text (id)
        - datatype -> record -> select object
        - check `available for input`(important thing)
    
- Picklist
    - picklist choice set
        - picklist choice set > we get values directly from object > picklist field
    - record choice set
        - get records and show in picklist (we can sort it too)
    - choice
        - to create manual choices > label and value can be different, value can have different data type also.

- lookup
    - we MUST specify `Object API Name` and `Field API Name` > from whichever object we need a lookup field, we must specify object name and field api name correctly.

- radio button and checkbox group are similar like picklist

- Deciscion 
    - if else condition
        - outcomes (we must specify ONE condition)
            - other one is default
    - if else if else if else
        - multiple outcomes and its conditions
            - we will always have default.

- copy past the elements  
- connect elements 

- datatable
    - configure rows
        - multiple, single, view
        - if we have single or multiple then we option to select default values
    - configure columns
        - we can select fields to display

- filter records from existing datasource (list of records)


# record trigger flow

- What is it?
    - flow which is triggered when record is created/updated/deleted.
- 1) When we create a new RT flow we MUST specify entry criteria?
    - It can be NONE.
- 2) Object is MUST to create flow. True or false?
    - True. Object is required.
- 3) FFU vs AARR
    - before and after
    - when to use FFU?
        - if we want to update same record which is firing the flow then we use FFU.
    - AARR
        - if we want to insert/update related records, or send email, or send notification, call apex, any other action, we use after (aarr)

- How can we access record details (new) in flow?
    - `{$Record}` -> will give us all details of record which triggered the flow.
- How can we access old record details in flow?
    - `{!$Record__Prior}`

- Element
    - Loop: we must provide collection and it iterates one by one item from that collection
        - it can iterate from first to last or last to first. Correct?
    - Assignment
        - we can add/remove elements in collection variable using assignment

- Custom error: validation (usually we write custom error in decision)

- Custom notification: we create a custom notification type, we use this as a channel to send custom notification

- Quick Action: we can create record of some of the standard object from quick action.

- Schedule Flow
    - start date, and frequency (once, daily, weekly)
    - object selection is optional

- Platform events
    - we publish events in event bus which is subscribed by salesforce or other external system. They can listen and perfom actions.
    - can we update the message publised in platform event eventbus? No.
    - After commit/Immediately.
        - after commit will publish the event once the transaction is successfully completed.
        - immediately will publish the event as soon as publish stat\ement is called.
    -   | object          |             platform event |
        | ------------     |      ------------------------|     
        |store in DB              |       we publish it in event bus|
        |stored permanent            |    only for 72hours|
        |insert/update/delete/undel |     EventBus.publish(event);|
        |we can write trigger        |    we can write trigger|
        |we can create flow (RT flow) |   we can create flor (PET flow)|

- Platform event triggered flows:
    - Specify the platform event.
    - can we specify entry condition along with platform event?
        - NO. Just select platform event.
        
- Invocable apex
    - how to enable method which can be invoked from flow?
        - annotate the method with `@invocableMethod(label='some label' description='some description' category='any category')`
    - can we pass more than one parameter in invocablemethod?
        - NOPE.
        - Any alternate?
            - Wrapper class
                - class variables (or properties)
                - annotate `@invocableVariable(label='some label' description='some description' required=true)`
    - We can see the invocable method in 'action' in flows
    - If we do not provide any label or category, then it will visible in Apex Type actions.

- Auto lauched flow (no trigger)
    - we create a flow which can be called from other flows, or apex, or PB, or API, or button click
    - we create once and call from other flows/buttons so we don't have to write same logic again and again.
    - we can call auto launch from from RT flow, screen flow, schedule flow USING `subflow element`
        - we cannot call subflows from Platform Trigger Flow and Auto launch flow (no trigger)
- Fault connector
    - we created AT flow which we call from other RT flows/screenflow/apex, which logs error in application log object.

- RT Orchestration
    - multi step process which might include multi-user inputs.
    - we start other flows depending on some conditions when record is changed. 
        - interactive step
        - background step
    
    
    
    