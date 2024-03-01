public with sharing class DummyJsonCallouts {
    static string baseEndpoint = 'https://dummyjson.com';

    public static void getProducts() {
        // 1. Prepare request, in apex we call it `httprequest`, in this we set method, body, endpoint (api), headers etc.
        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint(baseEndpoint+'/products');

        // 2. Prepare new instance of http (internet)
        Http http = new Http();

        // 3. Send Request using http and we get response which we store in `HttpResponse`
        HttpResponse response = http.send(req);

        // 4. Process the response

        //check if response is success using status code
        if (response.getStatusCode() == 200) {
            string jsonProducts = response.getBody();
            //system.debug('json products: ' + jsonProducts);
            //we cannot directly deserialize to sObject because fields doesn't match.
            //so we create a middle wrapper class
            Object dObj = JSON.deserialize(jsonProducts, ProductWrapper.class);
            //we convert the json string to instance of that wrapper class
            ProductWrapper pw = (ProductWrapper)dObj;
            system.debug('Product Wrapper::: ' + pw);
            
                //and then we create sObject instance assign all the fields and save.
                //convert ProductWrapper to Product__c sobject
            convertWrapperToProduct(pw);
        }

        
    }
    private static void convertWrapperToProduct(ProductWrapper pw){
        List<product__c> productsToInsert = new List<product__c>();

        List<ProductWrapper.Product> products = pw.products;
        for(ProductWrapper.Product eachProduct: products){
            product__c p = new product__c();
            p.Name = eachProduct.title;
            p.ProductId__c = eachProduct.id;
            p.Description__c = eachProduct.description;
            p.Price__c = eachProduct.price;
            p.DiscountPercentage__c = eachProduct.discountPercentage;
            p.Rating__c = eachProduct.rating;
            p.Brand__c = eachProduct.brand;
            p.Category__c = eachProduct.category;
            p.Thumbnail__c = eachProduct.thumbnail;
            //set all other fields as well.

            productsToInsert.add(p);
        }

        insert productsToInsert;
        //Database.insert(productsToInsert, false);
    }

    public static void getRecipes(){
        // 1. Prepare request, in apex we call it `httprequest`, in this we set method, body, endpoint (api), headers etc.
        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint(baseEndpoint + '/recipes');
        // 2. Prepare new instance of http (internet)
        Http http = new http();
        // 3. Send Request using http and we get response which we store in `HttpResponse`
        HttpResponse response = http.send(req);
        // 4. Process the response
        if(response.getStatusCode() == 200){
            string jsonRecipes = response.getBody();
            //convert json string to wrapper
            system.debug('json recipes: ' + jsonRecipes);
            RecipeWrapper recipe = RecipeWrapper.parse(jsonRecipes);
            system.debug('recipe wrapper: ' + recipe);
            //convert wrapper to list of recipe and insert
            List<Recipe__c> createRecipes = convertWrapperTORecipe(recipe);
            insert createRecipes;
        }
    }

    private static List<recipe__c> convertWrapperTORecipe(RecipeWrapper recipe){
      List<Recipe__c> listRecipeToInsert = new List<Recipe__c>();
      
      List<RecipeWrapper.Recipes> wrappedRecipe = recipe.recipes;
      for (RecipeWrapper.Recipes eachRecipe : wrappedRecipe) {
         Recipe__c r = new Recipe__c();
         r.Name = eachRecipe.name;
         r.caloriesPerServing__c = eachRecipe.caloriesPerServing;
         r.Cuisine__c = eachRecipe.cuisine;
         r.Ingredients__c = eachRecipe.ingredients.toString();
         r.Instructions__c = eachRecipe.instructions.toString();
         r.RecipeId__c = eachRecipe.id;
         r.Recipe_Image__c = eachRecipe.image;
         r.Servings__c = eachRecipe.servings;
         listRecipeToInsert.add(r);
      }
      return listRecipeToInsert;

    }

    
}