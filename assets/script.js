$(document).ready(function (){
    
    getWeatherData();

});

function getWeatherData (){
    //TODO: add container for city is searched and inserted within the url
    //getting Lat and Lon using GeocodeAPI
    function search(){
        var searchC = $("#search input");
        var searchBtn = $("#search button");
        searchBtn.on("click", function(){
            var cityName = searchC.val();
            getLocation(cityName);
        });
    }
    
    function getLocation(){
    var cityUrl =  "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName +"&limit={limit}&appid=9dc3e6bd849515c45ff7f316e0a2987e";
    fetch(cityUrl).then(function (response) {
    return response.json();
    }).then(function (data){
    var lat = data[0].lat;
    var lon = data[0].lon;
    getWeather(lat, lon);
    });
}
//getting Weather Data
    function getWeather(lat, lon){
    var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ lon +"&appid=9dc3e6bd849515c45ff7f316e0a2987e&units=imperial";
    fetch(requestUrl).then(function (response) {
        return response.json();
    }).then(function (data){
        console.log(data);
        var content = data.list;
        displayContent(content);
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
   //may use html instead of .text
   function displayContent(content) {
    var col = $(".column");
    for (var i = 0; i < col.length; i++){
        var listCityName = $("<li>").text("City: " + content[i].name);//CITY NAME is data.city.name
        var listWeatherIcon = $("<li>").text(content[i].weather[0].icon);// WEATHER CONDITION ICON might be data.list.main.weather[i].icon or data.main.weather[i].icon
        var listWeatherCondition = $("<li>").text("Weather Condition " + content[i].weather[0].description);// WEATHER CONDITION DESCRIPTION might be data.list.main.weather[i].description or data.main.weather[i].description
        var listTemp = $("<li>").text("Temperature: " + Math.round(content[i].main.temp));// TEMP which is either data.list.main.temp or data.main.temp
        var listHumidity = $("<li>").text("Humidity: " + content[i].main.humidity + "°");// HUMIDITY which is either data.list.main.humidity or data.main.humidity
        var listWindSpeed = $("<li>").text("Wind Speed: " + content[i].wind.speed + "mph");// WIND SPEED which is either data.list.wind.speed or data.wind.speed

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

search();
getLocation();
getWeather();
displayContent();
savedHistory();
}

