$("#fetch-btn").click(function() {
  var apiKey = "99c01db1ca0dc763c8c5c8c8ef901246";
  var zipCode = document.getElementById("zip").value;
  var baseURL = "https://cors.now.sh/http://api.openweathermap.org/data/2.5/weather";
  
  function getFullURL() {
    return baseURL + "?zip=" + zipCode + ",us&APPID=" + apiKey;
  };
  
  alert(getFullURL());
  
  $.ajax({
    
    type: "GET",
    url: getFullURL(),
    dataType: "jsonp",
    success: function(results) {
      alert('success');
      $(".fetch").html('Results for: ' + zipCode + ": <br>");
      $(".fetch").append(results.main.temp);
    },
    error: function() {
    alert('error');
  }
  });
});
