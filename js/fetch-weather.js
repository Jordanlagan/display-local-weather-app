var unit = "f";

$("#fetch-btn").click(function() {
  if (document.getElementById("unit").checked) {
  unit = "c";
}
else {
  unit = "f";
}
  
  var loc = document.getElementById("zip").value;
   $.simpleWeather({
      location: loc,
      woeid: '',
      unit: unit,
      success: function(weather) {
        var html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';

        $(".fetch").html("Results for "+loc);
        $(".fetch").append("<br>")
        $(".fetch").append("<br>")
        $(".fetch").append(html);
      },
      error: function(error) {
        $(".fetch").html('<p>'+error+'</p>');
      }
    });
});