  var carto_map;  function initMap() {    createMapElements();  }  function showMap() {    if (carto_map==null) {      carto_map = new CartoMap(new google.maps.LatLng(29.075,-1.3183),2);    } else {      carto_map.refresh();    }  }    function hideMap() {    carto_map.hide();  }