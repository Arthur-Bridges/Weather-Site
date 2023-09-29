/** API's and 
 1)WeatherApi = api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

 2)GeoLocation Api = http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

 SYNTAX

 Weather = https://openweathermap.org/forecast5#geo5

 GeoLocation = https://openweathermap.org/api/geocoding-api
 */

 //splice method that manipulates the weather api to find certain longitute and latitude;
 
 /*Will have to use Geolocator api, get the lat and long from there
 then store it in a variable then concantenate that variable onto 
 the weatherApi's URL in the paticular spots.*/
 
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=9dc3e6bd849515c45ff7f316e0a2987e&units=imperial

//concatenate the url with geocode converts
 var weatherApi = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=9dc3e6bd849515c45ff7f316e0a2987e&units=imperial";
 var mainWeatherApi = "api.openweathermap.org/data/2.5/forecast?lat=";
 var apiKey = "&appid=9dc3e6bd849515c45ff7f316e0a2987e&units=imperial";
 var latitude = ;
 var longitude = ;
 var forcastEl = $("#forcast");

 /*
 **logic**

 var requestUrl = mainWeatherApi + latitude + "&lon=" + longitude + apiKey;

 or 

 fetch (requestUrl).then(function(response){
response.json();
 }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
        var
    }
 });
  */