trigger AssetcTrigger on Asset__c (after insert) {
    if(Trigger.isInsert && Trigger.isAfter){
        //call handler method
    }
}