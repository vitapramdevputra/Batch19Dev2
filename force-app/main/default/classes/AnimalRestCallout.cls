public with sharing class AnimalRestCallout {
    //https://th-apex-http-callout.herokuapp.com/animals

    public static void animalCallout(){
        //write code to do the callout to https://th-apex-http-callout.herokuapp.com/animals
        string endpoint = 'https://th-apex-http-callout.herokuapp.com/animals';
        //1. Prepare request, in apex we call it httprequest, in this we set method, body, endpoint (api), headers etc.
        HttpRequest request = new HttpRequest();
        //set method (GET, PUT, POST, DELETE)
        request.setMethod('GET');
        //set endpoint (API)
        request.setEndpoint(endpoint);
        //if we had to set any body or headers then we set it in request

        //2. new instance http (preparing internet)
        http http = new http();

        //3. send the request via http(internet)
        HttpResponse response = http.send(request);

        //4. process the response (system.debug)
        system.debug('response status code: ' + response.getStatusCode());
        system.debug('response status:: ' + response.getStatus());
        system.debug('response body: ' + response.getBody());
    }
}