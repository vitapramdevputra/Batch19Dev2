//new asset is created
    // account id

//update total asset amount in account record

//get all asset for that account
List<asset__c> allAsset = [select id, price__c, account__c from asset__c where account__c = :accountId];

decimal totalAsset = 0;
for(asset__c a : allAsset){
    totalAsset += a.price__c;
}

//update account record totalAmount field DML