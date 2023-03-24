// Define the location of Laguna Beach
var lagunaBeach = {lat: 33.5427, lng: -117.7854};

// Initialize the Google Maps API
function initMap() {
  // Create a new map centered on Laguna Beach
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: lagunaBeach
  });
  
  // Add a marker for Laguna Beach
  var marker = new google.maps.Marker({
    position: lagunaBeach,
    map: map,
    title: "Laguna Beach"
  });
}
