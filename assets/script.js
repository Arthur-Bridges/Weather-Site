$(document).ready(function (){
    
    getWeatherData();

});

function getWeatherData (cityName){
    //TODO: add container for city is searched and inserted within the url
    //getting Lat and Lon using GeocodeAPI
    var cityUrl =  "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName +"&limit={limit}&appid=9dc3e6bd849515c45ff7f316e0a2987e";
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
    var col = $(".column");
    for (var i = 0; i < col.length; i++){
        var listE = $("<li>");
        listE.text(data content goes here [i]);
        col[i].append(listE);
    }
}