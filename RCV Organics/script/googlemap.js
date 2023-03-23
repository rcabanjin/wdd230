function initMap() {
    // Create a map centered on Laguna Bay CA
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 33.542719, lng: -117.785357 },
      zoom: 12,
    });
  
    // Add a marker for Laguna Bay CA
    const marker = new google.maps.Marker({
      position: { lat: 33.542719, lng: -117.785357 },
      map: map,
      title: "Laguna Bay CA",
    });
  }
  