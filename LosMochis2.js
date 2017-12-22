/* Los Mochis Tilty Table is an interactive tour of enbvironmental issues in Mexico. 

Moving along the vertical axis (spin) accesses different, more and less local sites and content
Moving along the plane (tilt) (north, south, east west) lets the user explore the 
view from the current zoom level and nacvigate to other sites of interest.

*/

/* instruction t4exts that appear at different levels of zoom */
var defaultSpinInstruction = "Rotar en el sentido de las manecillas del reloj para acercar la imagen";
var defaultTiltInstruction = "Inclinar hacia abajo y arriba para movere hacia el Norte";
var huntForHotSpotTiltInstruction = "tilt to hunt for hotspot";
var huntForHotSpotSpinInstruction = "spin clockwise to view hotspot";
var spinToContinue= "spin clockwise to continue tour";
var spinToGoBack = "spin counterclockwise to go back";
var zoomInToActiveRegions = "zoom in on the active regions";

/* for each zoom layer (larger is closer to earth) define the visibility of various eleents
    through a set of key:value pairs

A value of true for a key indicates it is a hotspot with visual content. 
    Upon reaching that zoom level (by spinning) the <div> with id=key will be made visible 
    and the map will be panned to the corresponding 'hotspot' These divs are defined in 
    the html file and are of the form
    <div class="instructions" id="site1">
      <img src="cedulas/Tilty 1.png" id="site1_img">
    </div>
 
A value of false for a key indicates it is a region of interest that can be shown via a 
  shapefile in GeoJson format which will be turned on at that particular zoom level.

A string value for a key indicates the index to a hotspot that should be indicated  at this zoom level

*/



var zoomLayers = {
  '0' : { 
    'pannable' : false,
    'mapZoom' : 4,
    'site1' : true, 
    "Mexico" : false ,
    'spinInstruction' : spinToContinue,
    'tiltInstruction' : spinToContinue,

  },
  '1' : { 
    'pannable' : false,
    'mapZoom' : 4,
    "Mexico" : false ,
    'site2' : true ,
    'spinInstruction' : spinToContinue,
    'tiltInstruction' : spinToGoBack,
  },
  '2' : { 
    'mapZoom' : 4,
    'pannable' : false,
    "Mexico" : false,
    'site3' : true ,
    'spinInstruction' : spinToContinue,
    'tiltInstruction' : spinToGoBack,
  },
  '3' : { 
    'pannable' : false,
    'mapZoom' : 4,
    "Distrito Federal" : false, 
    "Sinaloa"  : false,
    "Chihuahua" : false,
    "Guerrero"  : false,
    "Veracruz de Ignacio de la Llave" : false,
    "site4" : true ,
    'spinInstruction' : spinToContinue,
    'tiltInstruction' : spinToGoBack,
  },
  '4' : { 
    'pannable' : true,
    'mapZoom' : 4,
    "Distrito Federal" : "site6", 
    "Sinaloa"  : "site5",
    "Chihuahua" : "site8",
    "Guerrero"  : "site9",
    "Veracruz de Ignacio de la Llave" : "site7" ,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
  },
  '5': {
    'pannable' : true,
    'mapZoom' : 5,
    "Distrito Federal" : "site6", 
    "Sinaloa"  : "site5",
    "Chihuahua" : "site8",
    "Guerrero"  : "site9",
    "Veracruz de Ignacio de la Llave" : "site7" ,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
  },
  '6': {
    'pannable' : true,
    'mapZoom' : 6,
    "Distrito Federal" : "site6", 
    "Sinaloa"  : "site5",
    "Chihuahua" : "site8",
    "Guerrero"  : "site9",
    "Veracruz de Ignacio de la Llave" : "site7" ,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
  },
  '6': {
    'pannable' : true,
    'mapZoom' : 7,
    "Distrito Federal" : "site6", 
    "Sinaloa"  : "site5",
    "Chihuahua" : "site8",
    "Guerrero"  : "site9",
    "Veracruz de Ignacio de la Llave" : "site7" ,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
  },

  '7': { 
    'pannable' : false,
    'mapZoom' : 7,
    "site10": true,
    "Escuinapa" : false,
    "Sinaloa"  : false,
    "Elota" : false,
    "El Fuerte" : false,
    "CuliacÃ¡n" : false,
    "Badiraguato" : false,
    "Guasave" : false,
    "San Ignacio" : false,
    "Concordia" : false,
    "Navolato" : false,
    "Mocorito" : false,
    "Rosario" : false,
    "Angostura" : false,
    "Choix" : false,
    "CosalÃ¡" : false,
    "MazatlÃ¡n" : false,
    "Salvador Alvarado" : false,
    "Ahome"  : false ,
    'spinInstruction' : spinToContinue,
    'tiltInstruction' : spinToGoBack,
  },
  '8': {
    'pannable' : true,
    'mapZoom' : 8,
    "Escuinapa" : false,
    "Sinaloa"  : false,
    "Elota" : false,
    "El Fuerte" : false,
    "CuliacÃ¡n" : "site13",
    "Badiraguato" : "site14",
    "Guasave" : false,
    "San Ignacio" : false,
    "Concordia" : false,
    "Navolato" : false,
    "Mocorito" : false,
    "Rosario" : false,
    "Angostura" : false,
    "Choix" : false,
    "CosalÃ¡" : false,
    "MazatlÃ¡n" : "site12",
    "Salvador Alvarado" : "site15",
    "Ahome"  : "site11" ,
    'spinInstruction' : spinToContinue,
    'tiltInstruction' : spinToGoBack,
  },

  '9': {
    'pannable' : true,
    'mapZoom' : 9,
      "Escuinapa" : false,
    "Sinaloa"  : false,
    "Elota" : false,
    "El Fuerte" : false,
    "CuliacÃ¡n" : "site13",
    "Badiraguato" : "site14",
    "Guasave" : false,
    "San Ignacio" : false,
    "Concordia" : false,
    "Navolato" : false,
    "Mocorito" : false,
    "Rosario" : false,
    "Angostura" : false,
    "Choix" : false,
    "CosalÃ¡" : false,
    "MazatlÃ¡n" : "site12",
    "Salvador Alvarado" : "site15",
    "Ahome"  : "site11" ,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
  },
  '10': {
    'pannable' : true,
    'mapZoom' : 10,
     "Escuinapa" : false,
    "Sinaloa"  : false,
    "Elota" : false,
    "El Fuerte" : false,
    "CuliacÃ¡n" : "site13",
    "Badiraguato" : "site14",
    "Guasave" : false,
    "San Ignacio" : false,
    "Concordia" : false,
    "Navolato" : false,
    "Mocorito" : false,
    "Rosario" : false,
    "Angostura" : false,
    "Choix" : false,
    "CosalÃ¡" : false,
    "MazatlÃ¡n" : "site12",
    "Salvador Alvarado" : "site15",
    "Ahome"  : "site11" ,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
  },
  '11': {
    'pannable' : true,
     'mapZoom' : 11,
    "Escuinapa" : false,
    "Sinaloa"  : false,
    "Elota" : false,
    "El Fuerte" : false,
    "CuliacÃ¡n" : "site13",
    "Badiraguato" : "site14",
    "Guasave" : false,
    "San Ignacio" : false,
    "Concordia" : false,
    "Navolato" : false,
    "Mocorito" : false,
    "Rosario" : false,
    "Angostura" : false,
    "Choix" : false,
    "CosalÃ¡" : false,
    "MazatlÃ¡n" : "site12",
    "Salvador Alvarado" : "site15",
    "Ahome"  : "site11" ,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
  },
  '12': {
    'pannable' : false,
    'mapZoom' : 11,
    "site16": true,
    "Ahome" : false ,
    'spinInstruction' : spinToContinue,
    'tiltInstruction' : spinToGoBack,
  },
  '13': {
    'pannable' : false,
    'mapZoom' : 11,
    "site17": true,
    "Ahome" : false ,
    'spinInstruction' : spinToContinue,
    'tiltInstruction' : spinToGoBack,
  },
  '14': {
    'pannable' : true,
     'mapZoom' : 12,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
 },
  '15': {
    'pannable' : true,
    'mapZoom' : 13,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
  },
  '16': {
    'pannable' : true,
    'mapZoom' : 14,
     'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
 },
  '17': {
    'pannable' : true,
     'mapZoom' : 15,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
 },
  '18': {
    'pannable' : true,
    'mapZoom' : 16,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
  },
  '19': {
    'pannable' : true,
    'mapZoom' : 17,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
  },
  '20': {
    'pannable' : true,
     'mapZoom' : 18,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
 },
  '21': {
    'pannable' : true,
    'mapZoom' : 19,
    'spinInstruction' : huntForHotSpotSpinInstruction,
    'tiltInstruction' : huntForHotSpotTiltInstruction,
  },
  
};

var hotspots = {
  "site1" : [19.4326077,-99.1332080],
  "site2" : [19.4326077,-99.1332080],
  "site3" : [19.4326077,-99.1332080],
  "site4" : [19.4326077,-99.1332080],
  "site5" : [25.1721091,-107.4795173],
  "site6" : [19.4326077,-99.1332080],
  "site7" : [19.1737730,-96.1342241],
  "site8" : [28.6329957,-106.0691004],
  "site9" : [17.4391926,-99.5450974],
  "site10" : [25.1721091,-107.4795173],
  "site11" : [25.9197727,-109.1746261],
  "site12" : [23.2683360,-106.3997339],
  "site13" : [24.7881148,-107.3737955],
  "site14" : [25.3628494,-107.5498614],
  "site15" : [25.4606326,-108.0785167],
  "site16" : [25.9197727,-109.1746261],
  "site17" : [25.7904657,-108.9858820],

};


/* regions of interest */

var features = {
  "Sinaloa" : {'geojson': 'encuesta_intercensal_2015/shps/sin/sin_entidad.geojson',
  'style' : 
  { 
    fillColor: 'yellow',
    strokeWeight: 1
  }
},

"Chihuahua" : {'geojson': 'encuesta_intercensal_2015/shps/chih/chih_entidad.geojson',
'style' : 
{ 
  fillColor: 'red',
  strokeWeight: 1
}
},
"Guerrero" : {'geojson': 'encuesta_intercensal_2015/shps/gro/gro_entidad.geojson',
'style' : 
{ 
  fillColor: 'green',
  strokeWeight: 1
}
},
"Veracruz" : {'geojson': 'encuesta_intercensal_2015/shps/ver/ver_entidad.geojson',
'style' : 
{ 
  fillColor: 'blue',
  strokeWeight: 1
}
},
"Sinaloa_counties" : {'geojson': 'encuesta_intercensal_2015/shps/sin/sin_municipio.geojson',
'style' : 
{ 
  fillColor: 'magenta',
  strokeWeight: 1
}
},
"Distrito Federal" : {'geojson': 'encuesta_intercensal_2015/shps/df/df_entidad.geojson',
'style' : 
{ 
  fillColor: 'cyan',
  strokeWeight: 1
}
},
"Mexico" : {'geojson': 'MEX_adm0.geojson',
'style' : 
{ 
  fillColor: 'white',
  strokeWeight: 1
}
},
}

var targetColor = '#ff0000';
var targetWidth = 0.03; // portion of visible map

var maxZoom = 19;
var minZoom = 3;
var currentZoom = 0;
var targetRectangle;
var currentScale = 1.0;
var mapData = [];
var clicksPerRev =  256; // weirdly not 3.14159 * 4 *
var revsPerFullZoom = (maxZoom - minZoom)/8;
var clicksPerZoomLevel =  clicksPerRev / revsPerFullZoom;
var maxClicks = clicksPerRev * revsPerFullZoom * 1.0;
var currentSpinPosition = 0;


// General globals
var ws;
try {
  ws = new WebSocket("ws://127.0.0.1:5678/");
} 
catch(e)
{
  console.log("failed to attach local web socket: " + e);
  try 
  {
    ws = new WebSocket("ws://192.168.1.89:5678/");
  }
  catch(e)
  {
      console.log("failed to attach remote web socket: " + e);
  }
} 
var messages = document.createElement('ul');
var jsonData;

var loadedFeatures = [];

var trapiche = null;
var floatZoom = 14.0;
var mexicoCenter = null;
var mexicoFullZoom = 5;
var idleTimer;
var map;


var hotspot = {};

var lastZoom = -1;

function setInstructions(texta, textb) 
{
  var element = document.getElementById("circletext");
  element.innerHTML = "";
  var instructions = SVG('circletext');
  instructions.size(1070,1070).center(540,540);
  var defs = instructions.defs();
    /*var guide = instructions.group();
    guide.circle(1080).fill({ color: '#f06', opacity: 0.4 });
    guide.line(540, 0, 540, 1080).fill({ color: '#fff', opacity: 0.6 }).stroke({ width: 1 })
    guide.line(0, 540, 1080, 540).fill({ color: '#fff', opacity: 0.6 }).stroke({ width: 1 })
    */
    // rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
    var topArcPath = "   M 1040, 540   a 500,500  0 1 0   -1000,0 ";
    var bottomArcPath = "M   40, 540   a 500,500  0 1 0    1000,0 ";
    var leftArcPath  = " M  540, 40    a 500,500  0 1 0    0,1000 ";
    var rightArcPath = " M  540, 1040  a 500,500  0 1 0    0,-1000 ";

    var topGroup = instructions.group();
    topGroup.path(topArcPath).fill("none");
    var topText = topGroup.text(texta).fill("#0f0");
    topText.path(topArcPath);

    var leftGroup = instructions.group();
    leftGroup.path(leftArcPath).fill("none");
    var leftText = leftGroup.text(textb).fill("#ff0");
    leftText.path(leftArcPath);

    var bottomGroup = instructions.group();
    bottomGroup.path(bottomArcPath).fill('none');
    var bottomText = bottomGroup.text(texta).fill("#0f0");
    bottomText.path(bottomArcPath);

    var rightGroup = instructions.group();
    rightGroup.path(rightArcPath).fill('none');
    var rightText = rightGroup.text(textb).fill("#ff0");
    rightText.path(rightArcPath);



  }

  function openCedula(featureKey)
  {
    console.log("opening cedula " + featureKey);
    document.getElementById(featureKey).style.display = "block";

    document.getElementById(featureKey + "_img").classList.add('open');
  }

  function closeCedula(featureKey)
  {
   console.log("closing cedula " + featureKey);
   document.getElementById(featureKey).style.display = "none";

   document.getElementById(featureKey + "_img").classList.remove('open');
 }

 function doZoom(newLayer)
 {

  // could get optimized to not unload a feture we know we are about to load
  console.log("doZoom " + newLayer);
  if (newLayer == lastZoom) return;
  if (newLayer < 0) newLayer = 0;
  if (newLayer >= Object.keys(zoomLayers).length) newLayer = Object.keys(zoomLayers).length - 1;
  currentZoom = newLayer;
  console.log("leaving layer " + lastZoom + " at " + map.getCenter());
  if (lastZoom == -1)
  {
    // This can only happen when initializing
    nextFeatureSet = zoomLayers[newLayer];
    setInstructions(zoomLayers[newLayer]['spinInstruction'],zoomLayers[newLayer]['tiltInstruction']);
    for (featureKey in nextFeatureSet) 
    {
      if ( featureKey == 'pannable' || featureKey == 'mapZoom' ) continue;
      if (  nextFeatureSet[featureKey] == true)
      {
        console.log("moving to " + hotspot[featureKey] + " and opening open cedula for layer " + featureKey + " in zoom layer " + lastZoom);
        //fly to hotspot[featureKey] and open the badge
        map.panTo(hotspot[featureKey].position);
        openCedula(featureKey);
      } 
      else
      {
        // load/enable the shapefeature 
        // strings indicate markers to turn on
        if ( typeof(nextFeatureSet[featureKey]) == "string" )
        {
          if (hotspot[nextFeatureSet[featureKey]])
          {
            //console.log("lighting hotspot " + featureKey);

            hotspot[nextFeatureSet[featureKey]].setMap(map);
          }
          //else console.log(nextFeatureSet[featureKey] + " has no marker ");
        }
        else
          // false indicates a region of interest 
        {

          if (features[featureKey])

          {
            features[featureKey]['mapdata'].setMap(map);
            features[featureKey]['mapdata'].setStyle(features[featureKey]['style']);
          }
          //else console.log(featureKey + " has no mapdata ");
        }
      }
    }
    map.setZoom(Math.min(maxZoom,Math.max(minZoom,zoomLayers[newLayer]['mapZoom'])));
    //lastZoom = map.getZoom();
    lastZoom = newLayer;
    console.log("entered layer " + newLayer + " at " + map.getCenter());
    paintTarget();
    return;

  }  
  currentFeatureSet = zoomLayers[lastZoom];
  nextFeatureSet = zoomLayers[newLayer];
  for (featureKey in currentFeatureSet)
  {
    if ( featureKey == 'pannable' ||
        featureKey == 'mapZoom' || 
        featureKey == 'spinInstruction' || 
        featureKey == 'tiltInstruction' || 
        currentFeatureSet[featureKey] == nextFeatureSet[featureKey] ) continue;
    if ( currentFeatureSet[featureKey] == true)
    {
      console.log("closing open cedula for layer " + featureKey + " in zoom layer " + lastZoom);
      //document.getElementById(featureKey).style.display = "none";
      closeCedula(featureKey)
    } 
    else
    {
      //unload the feature
      if ( typeof(currentFeatureSet[featureKey]) == "string" )
      {
        //console.log("closing open cedula for site " + featureKey + " at " + currentFeatureSet[featureKey] + " in zoom layer " + lastZoom);
        if (hotspot[currentFeatureSet[featureKey] ])
        {
          //console.log("killing hotspot " + featureKey);
          hotspot[currentFeatureSet[featureKey] ].setMap(null);
        }

      }
      else
      {
          //map.data.remove(featureKey);
          if (features[featureKey])

          {              
            features[featureKey]['mapdata'].setMap(null);

          }
        }
      }
    }
    nextFeatureSet = zoomLayers[newLayer];
    setInstructions(zoomLayers[newLayer]['spinInstruction'],zoomLayers[newLayer]['tiltInstruction']);
    for (featureKey in nextFeatureSet) 
    {
      if ( featureKey == 'pannable' || 
        featureKey == 'mapZoom' || 
        featureKey == 'spinInstruction' || 
        featureKey == 'tiltInstruction' || 
        currentFeatureSet[featureKey] == nextFeatureSet[featureKey] ) continue;
      if (  nextFeatureSet[featureKey] == true)
      {
        console.log("moving to " + hotspot[featureKey] + " and opening open cedula for layer " + featureKey + " in zoom layer " + newLayer);
      //fly to hotspot[featureKey] and open the badge
      map.panTo(hotspot[featureKey].position);
      openCedula(featureKey);
    } 
    else
    {
      // load/enable the shapefeature 
      // strings indicate markers to turn on
      if ( typeof(nextFeatureSet[featureKey]) == "string" )
      {
        if (hotspot[nextFeatureSet[featureKey]])
        {
          //console.log("lighting hotspot " + featureKey);

          hotspot[nextFeatureSet[featureKey]].setMap(map);
        }
        //else console.log(nextFeatureSet[featureKey] + " has no marker ");
      }
      else
        // false indicates a region of interest 
      {

        if (features[featureKey])

        {
          features[featureKey]['mapdata'].setMap(map);
          features[featureKey]['mapdata'].setStyle(features[featureKey]['style']);
        }
        //else console.log(featureKey + " has no mapdata ");
      }
    }

  }
  map.setZoom(Math.min(maxZoom,Math.max(minZoom,zoomLayers[newLayer]['mapZoom'])));
  //lastZoom = map.getZoom();
  lastZoom = newLayer;
  console.log("entered layer " + newLayer + " at " + map.getCenter());
  paintTarget();

} 


function startIdleTimer() 
{
  idleTimer = setTimeout(function(){
    window.location.reload(1);
  }, 10 * 60 * 1000);
}

function restartIdleTimer() 
{
  clearTimeout(idleTimer);
  startIdleTimer();
}

function shapeloaded(newfeatures)
{
  for (feature in newfeatures) 
  {
    if (!features.hasOwnProperty(newfeatures[feature].f.NOMGEO))
    {
      data1 = new google.maps.Data();
      data1.add(newfeatures[feature]);
      features[newfeatures[feature].f.NOMGEO] = { 
        'style' : 
        { 
          fillColor: 'magenta',
          strokeWeight: 1
        },
        'mapdata': data1,
      }
    } 
  }          
}

function initializemap() {
  if (map == null) {
    var mapOptions = {
      center: mexicoCenter,
      zoom : minZoom,
      disableDefaultUI: true,
      backgroundColor: '#000000',
      mapTypeId: google.maps.MapTypeId.HYBRID,
    };
    //mapTypeId: google.maps.MapTypeId.HYBRID,
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    //mapType = new google.maps.StyledMapType(mapStyle, styledMapOptions);
    //map.mapTypes.set('geoconnectable', mapType);
    //map.setMapTypeId('geoconnectable');
    map.data.setStyle({
      fillColor: 'yellow',
      strokeWeight: 1
    });
    featuresets = {} ;
    mexicoCenter = new google.maps.LatLng(23.43348438907877, -103.05326881250002);
    trapiche = new google.maps.LatLng(25.790466,-108.985886);
    var myLatLng = new google.maps.LatLng(25.790466,-108.985886);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Click to zoom'
    });

    for (latlon in hotspots)
    {
      var loc =  new google.maps.LatLng(hotspots[latlon][0],hotspots[latlon][1]);
      hotspot[latlon] = new google.maps.Marker({
        position: loc,
        title: latlon
      });
    }
    map.data.addListener('addfeature', function(e) {
      var name = e.feature.getProperty("NOMGEO");
      if (! name ) 
      {
        name = e.feature.getProperty("NAME_FAO");
        if (! name ) name = "idunno";
      }
      featuresets[name] = e.feature;
       
     });
    

    map.addListener('zoom_changed', function()
    {
      console.log("got new zoom", map.getZoom(), zoomLayers[currentZoom]);
      //doZoom(map.getZoom());
      //map.data.forEach(function (feature) { map.data.remove(feature);});
    });
  //map.data.loadGeoJson('encuesta_intercensal_2015/shps/df/df_entidad.geojson', null, shapeloaded);
    //map.data.loadGeoJson('encuesta_intercensal_2015/shps/sin/sin_entidad.geojson');
    

    for ( feature in features)
    {
      data1 = new google.maps.Data();

      //console.log("loading " + feature);
      data1.loadGeoJson(features[feature]['geojson'], null, shapeloaded);
      features[feature]['mapdata'] = data1;
    }
    
    map.data.addListener('mouseover', function(event) {
      map.data.revertStyle();
      map.data.overrideStyle(event.feature, {strokeWeight: 8});
    });
    
    map.panTo(mexicoCenter);
    

    map.addListener('center_changed', function() {
     });

    marker.addListener('click', function() {
      map.setZoom(8);
      map.setCenter(marker.getPosition());
    });  
    targetRectangle =  new google.maps.Rectangle();
    doZoom(0);

  }
};

function paintTarget()
{
  currView = map.getBounds();
  if (currView == undefined) return;
  currLeft = currView.getNorthEast().lng();
  currRight = currView.getSouthWest().lng();
  currTop = currView.getNorthEast().lat();
  currBottom = currView.getSouthWest().lat();
  currWidth = currLeft - currRight;
  currHeight = currTop - currBottom;
  currCenter = map.getCenter();
  hotBounds = new google.maps.LatLngBounds(
          {lat: currCenter.lat()-targetWidth*currHeight, lng: currCenter.lng()-targetWidth*currWidth},
          {lat: currCenter.lat()+targetWidth*currHeight, lng: currCenter.lng()+targetWidth*currWidth});
        
  var strokeOpacity = 0.0;
  var fillOpacity = 0.0;
  if (zoomLayers[currentZoom]['pannable'])
  {
    fillOpacity = 0.35;
    strokeOpacity = 0.8;
    targetColor = '#ff0000';
    for (featureKey  in currentFeatureSet)
    {
      if ( typeof(currentFeatureSet[featureKey]) == "string" )
      {
        if (hotspot[currentFeatureSet[featureKey]])
        {
          if (hotBounds.contains(hotspot[currentFeatureSet[featureKey]].position))
          {
            targetColor = '#00ff00';
            break;
          }
          
        }
      }
    }
  }

  targetRectangle.setOptions({
    strokeColor: targetColor,
    strokeOpacity: strokeOpacity,
    strokeWeight: 2,
    fillColor: targetColor,
    fillOpacity: fillOpacity,
    map: map,
    bounds: {
      north: currCenter.lat()+targetWidth*currHeight,
      south: currCenter.lat()-targetWidth*currHeight,
      west: currCenter.lng()-targetWidth*currWidth,
      east: currCenter.lng()+targetWidth*currWidth
    }
  });


}

function connectLocal() 
{
  ws = new WebSocket("ws://127.0.0.1:5678/");
  ws.onmessage = handleWebSocketMessage;
}
function connectPi() 
{
  ws = new WebSocket("ws://192.168.1.89:5678/");
  ws.onmessage = handleWebSocketMessage;
  
}

function disconnectWS()
{
  ws.close();
}

function zoomIn() 
{
  //doZoom(currentZoom + 1);
  var dummyEvent = { 'data' : '{"gesture":"zoom", "vector" : { "delta" : 20 }}'};
  handleWebSocketMessage(dummyEvent);
}
function zoomOut() 
{
  //doZoom(currentZoom - 1);
  var dummyEvent = { 'data' : '{"gesture":"zoom", "vector" : { "delta" : -20 }}'};
  handleWebSocketMessage(dummyEvent);
  
}

var handleWebSocketMessage = function (event) {
    if (! map) return;
    jsonData = JSON.parse(event.data);
    //var currentZoom = map.getZoom();
    currentFeatureSet = zoomLayers[lastZoom];
    if (jsonData.type == 'spin') {
      document.getElementById('EncoderID').innerHTML(jsonData.packet.sensorID);
      document.getElementById('EncoderIndex').innerHTML(jsonData.packet.encoderIndex);
      document.getElementById('EncoderDelta').innerHTML(jsonData.packet.encoderDelta);
      document.getElementById('EncoderElapsedTime').innerHTML(jsonData.packet.encoderElapsedTime);
      document.getElementById('EncoderPosition').innerHTML(jsonData.packet.encoderPosition);
    } else if (jsonData.type == 'tilt') {
      document.getElementById('TiltsensorID').innerHTML(jsonData.packet.sensorID);
      document.getElementById('TiltX').innerHTML(jsonData.packet.tiltX);
      document.getElementById('TiltY').innerHTML(jsonData.packet.tiltY);
      document.getElementById('TiltMagnitude').innerHTML(jsonData.packet.tiltMagnitude);
    } else if (jsonData.gesture == 'pan') {
    //var dampingZoom = map.getZoom()*minZoom/maxZoom;

    if (jsonData.vector.x == 0.0 && jsonData.vector.y == 0.0) return;  
    //console.log("sensor message: " + jsonData.type + "-" + jsonData.vector.x + "," +jsonData.vector.y);

    if (zoomLayers[currentZoom]['pannable']) map.panBy(100*jsonData.vector.x, 100*jsonData.vector.y);
    paintTarget();
  } 
  else if (jsonData.gesture == 'zoom') 
  {

    currentSpinPosition += jsonData.vector.delta;
    //console.log(currentSpinPosition);
    //console.log("sensor message: " + jsonData.gesture + " " + jsonData.vector.delta + "; currentSpinPosition=" +currentSpinPosition);
    if (currentSpinPosition < 0) currentSpinPosition = 0;
    var proposedZoom =  Math.floor(currentSpinPosition/clicksPerZoomLevel);
    restartIdleTimer();

    if (proposedZoom != currentZoom) 
    {
      doZoom(Math.min(Object.keys(zoomLayers).length - 1, Math.max(0,proposedZoom))); 
    }
    else 
    {
      currView = map.getBounds();
      if (currView != undefined) 
      {
        currLeft = currView.getNorthEast().lng();
        currRight = currView.getSouthWest().lng();
        currTop = currView.getNorthEast().lat();
        currBottom = currView.getSouthWest().lat();
        currWidth = currLeft - currRight;
        currHeight = currTop - currBottom;
        currCenter = map.getCenter();
        hotBounds = new google.maps.LatLngBounds(
          {lat: currCenter.lat()-targetWidth*currHeight, lng: currCenter.lng()-targetWidth*currWidth},
          {lat: currCenter.lat()+targetWidth*currHeight, lng: currCenter.lng()+targetWidth*currWidth});
        var hotspotFound = false;
        for (featureKey  in currentFeatureSet)
        {
          if ( typeof(currentFeatureSet[featureKey]) == "string" )
          {
            if (hotspot[currentFeatureSet[featureKey]])
            {
              if (hotBounds.contains(hotspot[currentFeatureSet[featureKey]].position))
              {
                if ( ! hotspotFound )
                {
                  console.log("zoomed in on " + currentFeatureSet[featureKey] + " in " + hotBounds );
                  openCedula(currentFeatureSet[featureKey]);
                  hotspotFound = true;
                }
                else
                  console.log("would like to have zoomed in on " + currentFeatureSet[featureKey] + " in " + hotBounds );

              }
              else
              {
                //console.log("zoomed in on something else. Closing " + currentFeatureSet[featureKey] + " in " + hotBounds );
                closeCedula(currentFeatureSet[featureKey]);
              }
            }
          }
        } 
      }
    }


  } 
  else if (jsonData.gesture == 'combo') 
  {
    var dampingZoom = map.getZoom()*minZoom/maxZoom;

    if (jsonData.vector.x != 0.0 && jsonData.vector.y != 0.0) 
    {                
      map.panBy(100*jsonData.vector.x, 100*jsonData.vector.y);
      restartIdleTimer();
    }
    currentSpinPosition += jsonData.vector.delta;
    if (currentSpinPosition < 0) currentSpinPosition = 0;
    var proposedZoom = Math.floor(currentSpinPosition/clicksPerZoomLevel);
    if (proposedZoom != currentZoom) 
    {
      doZoom(proposedZoom);
      restartIdleTimer();
    }


  } else { 
    messages = document.getElementsByTagName('ul')[0];
    var message = document.createElement('li');
    var content = document.createTextNode(event.data);
    message.appendChild(content);
    messages.appendChild(message);
  }
};

startIdleTimer();

