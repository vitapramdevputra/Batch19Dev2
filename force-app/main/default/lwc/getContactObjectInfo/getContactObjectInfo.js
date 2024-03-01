import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class GetContactObjectInfo extends LightningElement {

    rtName1;
    rtId1;
    rtName2;
    rtId2;

    @wire(getObjectInfo, { objectApiName: CONTACT_OBJECT })
    contactObjectInfo({ data, error }) {
        if (data) {
            console.log('*** data retrieved successfully ***');
            console.log(data);
            const rtInfo = data.recordTypeInfos;
            console.log(rtInfo);
            console.log(JSON.stringify(rtInfo));

            for (const eachRT in rtInfo) {
                const element = rtInfo[eachRT];
                console.log(element);
                console.log(' ** rt name: ' + element.name);
                console.log(' ** rt id: ' + element.recordTypeId);
                console.log('** rt is default? : ' + element.defaultRecordTypeMapping);

                if (element.name != 'Master') {
                    //if rtId1 is undefined
                    if (!this.rtId1) {
                        this.rtId1 = element.recordTypeId;
                        this.rtName1 = element.name;
                    }
                    else {
                        this.rtId2 = element.recordTypeId;
                        this.rtName2 = element.name;
                    }
                }

            }

        }
        if (error) {
            console.log(error);
        }
    }
    
}