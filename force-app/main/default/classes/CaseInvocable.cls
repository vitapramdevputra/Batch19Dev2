public with sharing class CaseInvocable {
    
    @InvocableMethod(label='Case Contact Email' description='send email to contact when case is created' category='Softinnovas')
    public static void sendEmailAndSaveActivity(List<caseRequest> request) {
        try {
        
            system.debug('send email and save activity called.: request: ' + request);
            //send email list
            List<Messaging.SingleEmailMessage> listMsg = new list<Messaging.singleEmailMessage>();
            //create single email message for each case request
            for(CaseRequest cr: request){
                Messaging.SingleEmailMessage msg = new Messaging.SingleEmailMessage();
                //subject
                msg.setSubject('Case number is ' + cr.caseId);
                //email address (target)
                msg.setTargetObjectId(cr.contactid);
                //body
                msg.setPlainTextBody('Hello User, new case is created');
                //save as activity
                msg.setSaveAsActivity(true);
                
                //add to list
                listMsg.add(msg);
                
            }
            //send email
            Messaging.sendEmail(listMsg);
        } catch(Exception e) {
            System.debug(e.getMessage());
            //call AT FLOW to create application log
        }
    }

    //inner class as a wrapper class (to wrap all information)
    public class CaseRequest {
        //class variables
        //annotate with invocable variable to get it from flow
        @invocableVariable(label='Contact Id')
        public id contactId;

        @invocableVariable(label='Case Id' required=true)
        public id caseId;
        
    }
}