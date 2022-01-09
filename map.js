mapboxgl.accessToken =
  "pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2t5MXR4Z3p2MDZoMzJwcWt0eXN2a2N2NyJ9.8YrcNEDK812L6d-DrFbrtg";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [-96.052335, 39.159882],
  zoom: 2.5
});

map.on("load", () => {
  map.addSource("spcday1", {
    type: "geojson",
    data: "https://www.spc.noaa.gov/products/outlook/day1otlk_cat.nolyr.geojson"
  });

  map.addLayer({
    id: "spcday1",
    type: "fill",
    source: "spcday1",
    paint: {
      "fill-color": ["get", "fill"],
      "fill-outline-color": ["get", "stroke"],
      "fill-opacity": 0.5
    }
  });
});

map.on("load", () => {
  map.addSource({
    url: "https://www.spotternetwork.org/positions",
    type: "geojson",
    proccessData: false,
    dataType: "JSON",
    success: function (json) {
      map.addSource("chasers", {
        type: "json",
        data: json
      });

      map.addLayer({
        id: "chasers",
        type: "marker",
        source: "chasers",
        paint: {
          "circle-color": "#4264fb",
          "circle-radius": 8,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#ffffff"
        }
      });
    },
    error: function (xhr, status, error) {
      var errorMessage = xhr.status + ": " + xhr.statusText;
      alert("Error - " + errorMessage);
    }
  });
});
//  mapbox marker

new mapboxgl.Marker({})
  .setLngLat([marker.latitude, marker.longitude])
  .addTo(map);
