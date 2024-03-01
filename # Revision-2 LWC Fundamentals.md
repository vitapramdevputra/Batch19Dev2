# Revision-2 LWC Fundamentals

- LWC is used for front end development.
- How to create LWC in Developer Console? Not possible in developer console.
    - Use VS Code for full page development or chrome plugins for small changes
    - sfdx: create lightning web components
        - One folder is created, and some files.
            - HTML
                - show to user (tags or text or image etc)
                - no expression (3+5), no logic in HTML
            - JS
                - middle layer in between HTML and APEX
                - business logic is handled in JS.
                    - field is required.
                    - button click
            - META.xml
                - version
                - isexposed
                - targets

- Properties in JS
    - we can create direct variables in JS
        - `fullName = 'Gary'`
        - `country = 'Canada'`
    - how can we display variables (or properties) in HTML
        - use exact same names enclosed in curly brackets 
        - NOTE: OPEN COMPONENT LIBRARY FOR REFERRING LIGHTNING COMPONENTS
                ALSO OPEN LIGHTNINGDESIGNSYSTEM.COM TO REFER CLASSES
            ~~~
            <template>
                 <lightning-card icon-name="standard:account" title="Data Binding">
                <!-- Comments -->
                <div class="slds-var-m-horizontal_medium">
                       Full Name ==> {fullName}
                       Country   ==> {country}
                </div>
                </lightning-card>
            </template>
            ~~~
- Getters
    -  when we use "get" in js, we MUST return something, then use it in html like any other property(variable)
- Input component
    - `<lightning-input type="text" label="Input label" value="some text" onchange={handleTextChange} ></lightning-input>` 
        - possible values for type are 'text', 'number', 'tel'
        - `value` is used to set default value 
        - `onchange` is event
            - we create javascript method which handles this event
                - IN JS we can get value of this input component whenever it is changed
                ~~~
                handleTextChange(event){
                    console.log('value of input component is ==> ' + event.detail.value);
                }
                ~~~
- Combobox in Lightning
    - Example
        ~~~
        <lightning-combobox
             name="cities"
             label="Select City"
             value={selectedCity}
             options={cityOptions}
             onchange={handleCityChange} 
           ></lightning-combobox>
        ~~~
        - `value` pass default value which will be selected.
        - `options` the data must be array of object. Object MUSt have two properties `label`, `value`
            ~~~
            const options = [
            { label: '---NONE---', value: ''},
            { label: 'Tokyo', value: 'tokyo' },
            { label: 'Osaka', value: 'osaka' },
            { label: 'New York', value: 'newyork' },
            { label: 'Bengaluru', value: 'bengaluru' }
            ];
            ~~~
- condition rendering `lwc if`
    - it is used to show/hide elements or tags in HTML
    - we can pass other datatypes like string, object's property etc
        - if the variable is NOT NULL or NOT EMPTY, then it will satisfy `lwc:if` condition
    - example code
        ~~~
        <template lwc:if={showData}>
                We are almost done. ShowData is true btw.
        </template>
        <template lwc:else>
            ShowData is FALSE. OKAY?
        </template>

        ~~~
- Loops in LWC
    - template loops
        - `for:each={array}`. Q: what datatype array we can pass here? number, string. Can we pass object array? Yes.
        - `for:item="eachItem"` this is will us current item which is interating
        - main attribute inside the for loop tag is `key`
            - Key is mandatory for immediate child of `for`
        
- track property
    - @track is used to enabling tracking. It means when value is changed in JS, it will reflect in HTML.
    - all primitive datatype in JS are tracked by default. We don't have to add `@track` in front of string or number
        - complex datatype like object or array of object are NOT tracked
    - why do we use it?
        - to track complex datatype (object or array of object) we use `@track` decorator.
