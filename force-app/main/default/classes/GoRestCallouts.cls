public with sharing class GoRestCallouts {
    static string baseEndpoint = 'https://gorest.co.in/public/v2/';

    public static void getComments(){
        //1. prepare httprequest to set method, endpoint, headers, body
        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint(baseEndpoint + 'comments');
        //2. prepare http (internet)
        http http = new http();
        //3. send request using http
        HttpResponse response = http.send(req);
        //4. process response
        if (response.getStatusCode() == 200) {
            string  jsonComments = response.getBody();
            system.debug('json comments: ' + jsonComments);
            List<CommentWrapper> allComments = CommentWrapper.parse(jsonComments);
            system.debug('wrapped comments:  ' + allComments);
            convertWrapperToComments(allComments);
        }
    }

    static void convertWrapperToComments(List<commentWrapper> allComments){
        List<comment__c> createComments = new list<comment__c>();
        for (CommentWrapper eachC : allComments) {
            Comment__c c = new comment__c();
            c.body__c = eachC.body;
            c.CommentId__c = eachC.id;
            c.Email__c = eachC.email;
            c.Name__c = eachC.name;
            c.postId__c = eachC.post_id;
            createComments.add(c);
        }
        insert createComments;
    }

    //a2ef886b63cb005989e6394361d0434bf555df47c518b4a48a493f467a7ecccc
    public static void postComments(){
        //1. prepare httprequest to set method, body, header, endpoint
        HttpRequest req = new HttpRequest();
        req.setMethod('POST');
        req.setEndpoint(baseEndpoint + 'comments');
        req.setHeader('Authorization', 'Bearer a2ef886b63cb005989e6394361d0434bf555df47c518b4a48a493f467a7ecccc');
        req.setHeader('Content-Type', 'application/json');

        //prepare body
        comment__c oneComment = [select id, name, name__c, body__c, commentid__c, email__c, postid__c from comment__c limit 1];

        CommentWrapper wrappedComment = new CommentWrapper();
        wrappedComment.body = oneComment.body__c;
        wrappedComment.email = oneComment.email__c;
        wrappedComment.id = Integer.valueOf(oneComment.commentid__c);
        wrappedComment.name = oneComment.name__c;
        wrappedComment.post_id = Integer.valueOf(oneComment.postid__c);

        string requestBody = JSON.serialize(wrappedComment);
        req.setBody(requestBody);

        //2. prepare http
        http http = new http();

        //3. send request
        HttpResponse response = http.send(req);

        //4. process response
        system.debug('status code: ' + response.getStatusCode());
        system.debug('response body: ' + response.getBody());
    }
}