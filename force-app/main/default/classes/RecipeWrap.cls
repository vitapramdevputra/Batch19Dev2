//
// Generated by JSON2Apex http://json2apex.herokuapp.com/
//
// The supplied json has fields with names that are not valid in apex
// and so can only be parsed with explicitly generated code, this option
// was auto selected for you.

public class RecipeWrap {

	public List<Recipes> recipes {get;set;} 
	public Integer total {get;set;} 
	public Integer skip {get;set;} 
	public Integer limit_Z {get;set;} // in json: limit

	public RecipeWrap(JSONParser parser) {
		while (parser.nextToken() != System.JSONToken.END_OBJECT) {
			if (parser.getCurrentToken() == System.JSONToken.FIELD_NAME) {
				String text = parser.getText();
				if (parser.nextToken() != System.JSONToken.VALUE_NULL) {
					if (text == 'recipes') {
						recipes = arrayOfRecipes(parser);
					} else if (text == 'total') {
						total = parser.getIntegerValue();
					} else if (text == 'skip') {
						skip = parser.getIntegerValue();
					} else if (text == 'limit') {
						limit_Z = parser.getIntegerValue();
					} else {
						System.debug(LoggingLevel.WARN, 'RecipeWrap consuming unrecognized property: '+text);
						consumeObject(parser);
					}
				}
			}
		}
	}
	
	public class Recipes {
		public Integer id {get;set;} 
		public String name {get;set;} 
		public List<String> ingredients {get;set;} 
		public List<String> instructions {get;set;} 
		public Integer prepTimeMinutes {get;set;} 
		public Integer cookTimeMinutes {get;set;} 
		public Integer servings {get;set;} 
		public String difficulty {get;set;} 
		public String cuisine {get;set;} 
		public Integer caloriesPerServing {get;set;} 
		public List<String> tags {get;set;} 
		public Integer userId {get;set;} 
		public String image {get;set;} 
		public Double rating {get;set;} 
		public Integer reviewCount {get;set;} 
		public List<String> mealType {get;set;} 

		public Recipes(JSONParser parser) {
			while (parser.nextToken() != System.JSONToken.END_OBJECT) {
				if (parser.getCurrentToken() == System.JSONToken.FIELD_NAME) {
					String text = parser.getText();
					if (parser.nextToken() != System.JSONToken.VALUE_NULL) {
						if (text == 'id') {
							id = parser.getIntegerValue();
						} else if (text == 'name') {
							name = parser.getText();
						} else if (text == 'ingredients') {
							ingredients = arrayOfString(parser);
						} else if (text == 'instructions') {
							instructions = arrayOfString(parser);
						} else if (text == 'prepTimeMinutes') {
							prepTimeMinutes = parser.getIntegerValue();
						} else if (text == 'cookTimeMinutes') {
							cookTimeMinutes = parser.getIntegerValue();
						} else if (text == 'servings') {
							servings = parser.getIntegerValue();
						} else if (text == 'difficulty') {
							difficulty = parser.getText();
						} else if (text == 'cuisine') {
							cuisine = parser.getText();
						} else if (text == 'caloriesPerServing') {
							caloriesPerServing = parser.getIntegerValue();
						} else if (text == 'tags') {
							tags = arrayOfString(parser);
						} else if (text == 'userId') {
							userId = parser.getIntegerValue();
						} else if (text == 'image') {
							image = parser.getText();
						} else if (text == 'rating') {
							rating = parser.getDoubleValue();
						} else if (text == 'reviewCount') {
							reviewCount = parser.getIntegerValue();
						} else if (text == 'mealType') {
							mealType = arrayOfString(parser);
						} else {
							System.debug(LoggingLevel.WARN, 'Recipes consuming unrecognized property: '+text);
							consumeObject(parser);
						}
					}
				}
			}
		}
	}
	
	
	public static RecipeWrap parse(String json) {
		System.JSONParser parser = System.JSON.createParser(json);
		return new RecipeWrap(parser);
	}
	
	public static void consumeObject(System.JSONParser parser) {
		Integer depth = 0;
		do {
			System.JSONToken curr = parser.getCurrentToken();
			if (curr == System.JSONToken.START_OBJECT || 
				curr == System.JSONToken.START_ARRAY) {
				depth++;
			} else if (curr == System.JSONToken.END_OBJECT ||
				curr == System.JSONToken.END_ARRAY) {
				depth--;
			}
		} while (depth > 0 && parser.nextToken() != null);
	}
	



    private static List<Recipes> arrayOfRecipes(System.JSONParser p) {
        List<Recipes> res = new List<Recipes>();
        if (p.getCurrentToken() == null) p.nextToken();
        while (p.nextToken() != System.JSONToken.END_ARRAY) {
            res.add(new Recipes(p));
        }
        return res;
    }




    private static List<String> arrayOfString(System.JSONParser p) {
        List<String> res = new List<String>();
        if (p.getCurrentToken() == null) p.nextToken();
        while (p.nextToken() != System.JSONToken.END_ARRAY) {
            res.add(p.getText());
        }
        return res;
    }



}