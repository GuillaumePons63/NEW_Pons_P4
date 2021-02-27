let map;

function initMap() {
  const myLatLng = { lat: 45.76958, lng: 4.83068 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "La chouette agence",
  });
}

