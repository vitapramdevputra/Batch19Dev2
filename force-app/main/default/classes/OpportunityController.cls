public with sharing class OpportunityController {
   //get all opportunity order by amount and amount is not null.
   @AuraEnabled
   public static List<Opportunity> getAllOpps(){
        return [SELECT Id, Name, Amount, CloseDate, StageName
                FROM Opportunity
                WHERE Amount != null
                WITH SECURITY_ENFORCED
                ORDER BY Amount DESC ];
   }
}