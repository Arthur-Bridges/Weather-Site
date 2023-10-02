
//concatenate the url with geocode converts
//2)GeoLocation Api = http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
//var weatherApi = "api.openweathermap.org/data/2.5/forecast?lat=123.456&lon=789.012&appid=e5e982ab0563ab95346f7be60c1d2098&units=imperial";
//var mainWeatherApi = "api.openweathermap.org/data/2.5/forecast?lat="; //"api.openweathermap.org/data/2.5/forecast?lat=";
//var apiKey = "&appid=9dc3e6bd849515c45ff7f316e0a2987e&units=imperial";
//  var latitude = ;
//  var longitude = ;
//var forcastEl = $("#forcast");

//==========================================================================
// var testApi = "http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=9dc3e6bd849515c45ff7f316e0a2987e&units=imperial";

//  $(document).ready(function (){ 
//     fetch(testApi).then(function (response) {
//     return response.json();
//  }).then(function (data){
//     console.log(data);
//  })
// });
//==========================================================================
$(document).ready(function (){
    getWeatherData();
});
function getWeatherData (cityName){
        //TODO: add container for city is searched and inserted within the url
    //getting Lat and Lon using GeocodeAPI
    var cityUrl =  "http://api.openweathermap.org/geo/1.0/direct?q=" +${city name}+"&limit={limit}&appid=9dc3e6bd849515c45ff7f316e0a2987e";
    fetch(cityUrl).then(function (response) {
    return response.json();
    }).then(function (data){
    var lat = data[0].lat;
    var lon = data[0].lon;
    });
    
//getting Weather Data
    var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ lon +"&appid=9dc3e6bd849515c45ff7f316e0a2987e&units=imperial";
    fetch(requestUrl).then(function (response) {
        return response.json();
    }).then(function (data){
        console.log(data);
    });

    //Display Weather
    //basically append work
    var = $("#");

}