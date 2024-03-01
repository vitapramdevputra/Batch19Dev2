public with sharing class ContactController {
    @AuraEnabled
    public static List<Contact> searchContacts(string searchText){
        try {
            searchText  = '%' + searchText + '%';
            List<contact> contacts = [select id, FirstName, LastName, Department, Title, Phone from Contact where name like :searchText WITH SECURITY_ENFORCED];

            return contacts;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}