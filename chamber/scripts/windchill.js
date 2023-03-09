function doInputOutput(){
    var tempF = parseInt(document.getElementById('temp').value);
    var speed = parseInt(document.getElementById('windspeed').value);
    let result = windChill(tempF,speed);
     
     document.getElementById('output').innerHTML = result.toFixed(1) + " Degrees with the windchill.";
  }
  function windChill(tempF,speed){
    let f = (35.74 + (0.6215 * tempF)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
    return f;
  }