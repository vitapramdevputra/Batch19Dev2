public with sharing class Movie {
   public string name;
    integer year;
    string genre;
    string director;
    Boolean isOscarWinner;
    decimal imdb;

    Public Movie(string name, integer year, string genre, string director, boolean isOscarWinner, decimal imbd){
        this.name = name;
        this.director = director;
        this.year = year;
        this.genre = genre;
        this.isOscarWinner = isOscarWinner;
        this.imdb = imbd;
        
    }
}