// initialize Leaflet
var map = L.map('map').setView([50.7298786, 25.3639648], 12);

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale().addTo(map);

// show a marker on the map
var baseballIcon = L.icon({
    iconUrl: 'point.png',
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

function onEachFeature(feature, layer) {
    var popupContent = "";
    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }

    layer.bindPopup(popupContent);
};


L.geoJSON(stopsOneTroll, {

    style: function(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 6,
            fillColor: "#2200fc",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

L.geoJSON(stops24, {

    style: function(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 6,
            fillColor: "#fcf400",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

L.geoJSON(stops32, {

    style: function(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 6,
            fillColor: "#24f6c5",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

L.geoJSON(stopsTwoTroll, {

    style: function(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 6,
            fillColor: "#fc00d2",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

L.geoJSON(stopsThreeTroll, {

    style: function(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 6,
            fillColor: "#00ff0c",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

L.geoJSON(stopsFourTroll, {

    style: function(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 6,
            fillColor: "#fe1503",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

L.geoJSON(stopsFiveTroll, {

    style: function(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 6,
            fillColor: "#ab05c9",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

L.geoJSON(stopsTwelveTroll, {

    style: function(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 6,
            fillColor: "#02491e",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

L.geoJSON(stopsFiftheenTroll, {

    style: function(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 6,
            fillColor: "#fd7f04",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

L.geoJSON(stopsFiftheenATroll, {

    style: function(feature) {
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,

    pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 6,
            fillColor: "#6d4203",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        });
    }
}).addTo(map);

L.geoJSON(busOneTroll, {

    filter: function(feature, layer) {
        if (feature.properties) {
            // If the property "underConstruction" exists and is true, return false (don't render features under construction)
            return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
        }
        return false;
    },

    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(bus24, {

    filter: function(feature, layer) {
        if (feature.properties) {
            // If the property "underConstruction" exists and is true, return false (don't render features under construction)
            return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
        }
        return false;
    },

    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(bus32, {

    filter: function(feature, layer) {
        if (feature.properties) {
            // If the property "underConstruction" exists and is true, return false (don't render features under construction)
            return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
        }
        return false;
    },

    onEachFeature: onEachFeature
}).addTo(map);



L.geoJSON(busTwoTroll, {

    filter: function(feature, layer) {
        if (feature.properties) {
            // If the property "underConstruction" exists and is true, return false (don't render features under construction)
            return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
        }
        return false;
    },

    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(busThreeTroll, {

    filter: function(feature, layer) {
        if (feature.properties) {
            // If the property "underConstruction" exists and is true, return false (don't render features under construction)
            return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
        }
        return false;
    },

    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(busFourTroll, {

    filter: function(feature, layer) {
        if (feature.properties) {
            // If the property "underConstruction" exists and is true, return false (don't render features under construction)
            return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
        }
        return false;
    },

    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(busFiveTroll, {

    filter: function(feature, layer) {
        if (feature.properties) {
            // If the property "underConstruction" exists and is true, return false (don't render features under construction)
            return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
        }
        return false;
    },

    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(busTwelveTroll, {

    filter: function(feature, layer) {
        if (feature.properties) {
            // If the property "underConstruction" exists and is true, return false (don't render features under construction)
            return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
        }
        return false;
    },

    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(busFiftheenTroll, {

    filter: function(feature, layer) {
        if (feature.properties) {
            // If the property "underConstruction" exists and is true, return false (don't render features under construction)
            return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
        }
        return false;
    },

    onEachFeature: onEachFeature
}).addTo(map);

L.geoJSON(busFiftheenATroll, {

    filter: function(feature, layer) {
        if (feature.properties) {
            // If the property "underConstruction" exists and is true, return false (don't render features under construction)
            return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
        }
        return false;
    },

    onEachFeature: onEachFeature
}).addTo(map);