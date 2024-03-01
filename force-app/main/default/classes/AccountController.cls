public with sharing class AccountController {
   
    @auraEnabled(cacheable=true) //we can write cacheable ONLY when we are JUST returning data (if we doing insert/update/delete then we cannot make method cacheable)
    public static List<account> getTopAccount() {
        //write a query to return top 7 accounts as per revenue
        List<account> accs = [SELECT Id, Name, Type, Industry, Website, Active__c, AnnualRevenue FROM Account where AnnualRevenue != null WITH SECURITY_ENFORCED ORDER BY AnnualRevenue desc LIMIT 7];
        return accs;
    }

    @AuraEnabled(cacheable=true)
    public static List<account> getAccountsByIndustry(string industry) {
         List<account> accs = [SELECT Id, Name, Type, Industry, Website, Active__c, AnnualRevenue FROM Account 
         where industry = :industry
         WITH SECURITY_ENFORCED ORDER BY AnnualRevenue desc];
         return accs;
    }
}