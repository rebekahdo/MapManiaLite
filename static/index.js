var gMap;

function initMap() {
    //create new map
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat:41.878, lng:10}, zoom: 3});

        var marker = new google.maps.Marker({position:{lat:45.3306,lng:-91.4918}, map:gMap})

        var marker2 = new google.maps.Marker({position:{lat:36.3932, lng:25.4615}, map:gMap})

        var infoWindow = new google.maps.InfoWindow({content: 'Romeoville, IL'});
        marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');
        marker2.addListener('click', function(){
            infoWindow.open(gMap, marker2);
        });

        google.maps.event.addListener(gMap, 'idle', function(){
            updateGame()
        });
}

function updateGame(){
    console.log('function UpdateGame()!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    if (gMap.getBounds().contains({lat:45.3306, lng:-91.4918})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

function initApplication(){
    console.log('Map Mania Lite - Starting!');
}