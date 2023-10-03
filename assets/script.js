$(document).ready(function (){
    
    getWeatherData();
    displayHistory();

});

function saveHistory(cityName) {
   
    var history = JSON.parse(localStorage.getItem("history")) || [];

    history.push(cityName);

    if (history.length > 5) {
        history.shift(); 
    }

    localStorage.setItem("history", JSON.stringify(history));
    displayHistory();
}

function displayHistory() {
    
    var history = JSON.parse(localStorage.getItem("history")) || [];
    var historyList = $("#historyList");

    historyList.empty();

    for (var i = 0; i < history.length; i++) {
        var listItem = $("<li>").text(history[i]);
        historyList.append(listItem);
    }
}

    function getWeatherData (){
 
    function search(){
        var searchC = $("#search input");
        var searchBtn = $("#search button");
        searchBtn.on("click", function(){
            var cityName = searchC.val();
            getLocation(cityName);
            saveHistory(cityName);
        });
    }
    
    function getLocation(cityName){
    var cityUrl =  "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName +"&limit=1&appid=9dc3e6bd849515c45ff7f316e0a2987e";
    fetch(cityUrl).then(function (response) {
    return response.json();
    }).then(function (data){
    var lat = data[0].lat;
    var lon = data[0].lon;
    console.log(data);
    getWeather(lat, lon);
    });
}
//getting Weather Data
    function getWeather(lat, lon) {
    var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ lon +"&appid=9dc3e6bd849515c45ff7f316e0a2987e&units=imperial";
    fetch(requestUrl).then(function (response) {
        return response.json();
    }).then(function (data){
        console.log(data);
        var content = data;
        displayContent(content);
    });
}
   function displayContent(content) {
    var nameI = $("#cityName");
    var listCityName = content.city.name;
    nameI.append(listCityName);
        for(i = 0; i < 5; i++){
            $(".column" + (i+1));
            $("#temp" + (i+1)).html("Temp: " + Math.round(content.list[i].main.temp) + "°\n");
            $("#weatherDesc" + (i+1)).html("Weather Condition: " + content.list[i].weather[0].description +"\n");
            $("#Humidity" + (i+1)).html("Humidity: " + content.list[i].main.humidity + "%\n");
            $("#WindSpeed" + (i+1)).html("Wind Speed: " + content.list[i].wind.speed + "mph");
        }
        for(i = 0; i < 5; i++){
            $("#img" + (i+1)).attr("src", "https://openweathermap.org/img/wn/" + content.list[i].weather[0].icon +"@2x.png");
        }
   }

search();
}

