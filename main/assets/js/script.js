var iconUrl = "http://openweathermap.org/img/w/" + 01d + ".png";
var iconUrl = "http://openweathermap.org/img/w/" + 02d + ".png";
var iconUrl = "http://openweathermap.org/img/w/" + 03d + ".png";
var iconUrl = "http://openweathermap.org/img/w/" + 04d + ".png";
var iconUrl = "http://openweathermap.org/img/w/" + 09d + ".png";
var iconUrl = "http://openweathermap.org/img/w/" + 10d + ".png";
var iconUrl = "http://openweathermap.org/img/w/" + 11d + ".png";
var iconUrl = "http://openweathermap.org/img/w/" + 13d + ".png";
var iconUrl = "http://openweathermap.org/img/w/" + 50d + ".png";
var searchBtn = document.querySelector('button');
var userInput = document.querySelector('input');
var currentDay = document.querySelector('currentDay');
var fiveDay = document.querySelector('fiveDay');
var location = document.querySelector('location');
var icon = document.querySelector('icon');
var temp = document.querySelector('temp');
var hum = document.querySelector('hum');
var wind = document.querySelector('wind');
var uv = document.querySelector('uv');

searchBtn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event);

});