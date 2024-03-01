string accountId = '001Hu000033YurKIAS';
string createdByName = 'Vitap R.';

Account acc = [select id, name, ownerid from account where id = :accountId];

//how to call auto launched flow from apex
Map<string, object> inputVariables = new map<string, object>();
inputVariables.put('AccountId',accountId );
inputVariables.put('AccountName', acc.Name);
inputVariables.put('CreatedByName', createdByName);
inputVariables.put('AccountOwnerId', acc.OwnerId);
Flow.Interview accAT = Flow.Interview.createInterview('Account_Update_Task_and_Chatter_Autolaunch', inputVariables);
accAT.start();

