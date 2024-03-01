public with sharing class AccountInvocable {
    
    @invocableMethod(label='Update opp stage closed lost' description='Updating opportunity stage to closed lost when account is inactive or hold' category='Softinnovas')
    public static void updateOpportunities(list<id> accountIds){//why we are accepting List<id> rather than JUST id. Why?
        system.debug('update opportunities called. AccountIds: ' + accountIds);

        //get all opps which are open of all the accounts and mark it as closed lost
        List<opportunity> listOpp = [Select id, stagename from opportunity 
                                    where accountid IN :accountIds and 
                                    stagename NOT IN ('Closed Won', 'Closed Lost')];
        
        for (Opportunity eachOpp : listOpp) {
            eachOpp.stagename = 'Closed Lost';
        }
        update listOpp;
        
    }
}