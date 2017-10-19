
$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

     $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=Imperial&appid=eeb72cd89e66872719c274878618bb7a`).then(function(response) {
       $('.showHumidity').text(`${city} - humidity level is ${response.main.humidity}%`);
       $('.showTemp').text(`The temperature in ${city} is ${response.main.temp} degrees.`);
     }).fail(function(error) {
       $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
     });
   });
 });
