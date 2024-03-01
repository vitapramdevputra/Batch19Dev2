//JSON
/*
{
    "name": "John",
    "phone": "1234567890",
    "website": "www.google.com",
    "Industry": "IT",
    "AnnualRevenue": 20000000.00
}
*/

//JSON is class, serialize is method
//serialize     -> object to JSON
//deserialize   -> JSON to object

Account acc = [select id, name, phone, industry, type, annualrevenue from account where name like 'Burlington%' limit 1];
system.debug('acc ==> ' + acc);
string jsonAcc = JSON.serialize(acc);
system.debug('------------');
system.debug(jsonAcc);

/*
{
    "attributes":
    {
        "type":"Account",
        "url":"/services/data/v59.0/sobjects/Account/001Hu000033YurKIAS"
    },
    "Id":"001Hu000033YurKIAS",
    "Name":"Burlington Textiles Corp of America",
    "Phone":"(336) 222-7000",
    "Industry":"Apparel",
    "Type":"Customer - Direct",
    "AnnualRevenue":350000000
}
*/

List<contact> listCont = [select firstName, LastName, email, phone, title from contact order by createddate limit 5];
string jsonContact = JSON.serialize(listCont);
system.debug('Contact records in JSON String: ' + jsonContact);



Movie m3 = new Movie('Incepion', 2012, 'Sci-fi', 'Christopher Nolan', false, 9.0);
system.debug(m3);
string jsonMovie = JSON.serialize(m3);
system.debug('movie JSON: ' + jsonMovie);


//XML
/*
<account> 
    <name>John</name>
    <phone> 1324567</phone>
    <AnnualRevenue>5000000</AnnualRevenue>
    <Industry>IT</Industry>
</account>
*/