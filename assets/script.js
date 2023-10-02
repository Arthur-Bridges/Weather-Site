$(document).ready(function (){
    
    getWeatherData();

});

function getWeatherData (value goes here){
    //TODO: add container for city is searched and inserted within the url
    //getting Lat and Lon using GeocodeAPI
    function getLocation(){
    var cityUrl =  "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName +"&limit={limit}&appid=9dc3e6bd849515c45ff7f316e0a2987e";
    fetch(cityUrl).then(function (response) {
    return response.json();
    }).then(function (data){
    var lat = data[0].lat;
    var lon = data[0].lon;
    });
}
//getting Weather Data
    function getWeather(){
    var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ lon +"&appid=9dc3e6bd849515c45ff7f316e0a2987e&units=imperial";
    fetch(requestUrl).then(function (response) {
        return response.json();
    }).then(function (data){
        console.log(data);
        var columnContent = data.list;
    });
}
    //Display Weather
    //basically append work
    /*ITERATION FOR DAYS
    CurrentDay = 0-7
    Tomorrow = 8-15
    Day3 = 16 - 23
    Day4 = 24 - 31
    Day5 = 32 - 39*/
    /*May place in a function to render content */
    //TODO will be appending conditions.

    /* DOT NOTATION
    .main is Temperature
    .weather[0] //is weather conditions
    */
   //Might not iterate through columns
   function displayContent() {
    var col = $(".column");
    for (var i = 0; i < col.length; i++){
        var listCityName = $("<li>");//CITY NAME is data.city.name
        var listWeatherIcon = $("<li>");// WEATHER CONDITION ICON might be data.list.main.weather[i].icon or data.main.weather[i].icon
        var listWeatherCondition = $("<li>");// WEATHER CONDITION DESCRIPTION might be data.list.main.weather[i].description or data.main.weather[i].description
        var listTemp = $("<li>");// TEMP which is either data.list.main.temp or data.main.temp
        var listHumidity = $("<li>");// HUMIDITY which is either data.list.main.humidity or data.main.humidity
        var listWindSpeed = $("<li>");// WIND SPEED which is either data.list.wind.speed or data.wind.speed
        listCityName.text(columnContent[i]);
        listWeatherIcon.text(columnContent[i]);
        listWeatherCondition.text(columnContent[i]);
        listTemp.text(columnContent[i]);
        listHumidity.text(columnContent[i]);
        listWindSpeed.text(columnContent[i]);
        col[i].append(listCityName);
        col[i].append(listWeatherIcon);
        col[i].append(listWeatherCondition);
        col[i].append(listTemp);
        col[i].append(listHumidity);
        col[i].append(listWindSpeed);
    }
}

function savedHistory(){

}

getLocation();
getWeather();
displayContent();
savedHistory();
}

