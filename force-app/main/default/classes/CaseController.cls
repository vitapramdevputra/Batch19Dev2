public with sharing class CaseController {
    
    @AuraEnabled(cacheable=true)
    public static List<case> getCasesByStage(string status) {
        //soql query to return cases filter with status.
        List<Case> cases = [SELECT Id, CaseNumber, Subject, Status, Account.Name, CreatedDate,ContactEmail FROM Case WHERE Status = :status WITH Security_Enforced];
        return cases;

    }
}