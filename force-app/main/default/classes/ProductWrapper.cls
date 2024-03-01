public with sharing class ProductWrapper {
   public integer total;
   public integer skip;
   public List<Product> products;

   public class Product{
        public integer id;
        public string title;
        public string description;
        public integer price;
        public decimal discountPercentage;
        public integer stock;
        public decimal rating;
        public string brand;
        public string category;
        public string thumbnail;
   }
}