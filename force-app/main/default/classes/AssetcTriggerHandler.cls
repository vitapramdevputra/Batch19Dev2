public with sharing class AssetcTriggerHandler {
    public static void totalAmount(list<asset__c> newAssets){
        set<id> accountIds = new set<id>();
        for(asset__c eachAsset: newAssets){
            accountIds.add(eachAsset);
        }

        List<account> accAssetsList = [select id, name, (select id, price__c from assets__r) from account];
        for(Account acc: accAssetsList){
            Decimal totalAmount = 0;
            for(Asset__c eachAsset: acc.assets__r){
                totalAmount += eachAsset.price__c;
            }
            acc.total_amount__c = totalAmount;
        }
        update accAssetsList;
    }
}