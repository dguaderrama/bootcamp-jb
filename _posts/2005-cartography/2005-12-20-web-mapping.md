---
title: "Web Mapping"
layout: post
category : Cartography
tagline: "interactive web maps"
tags : [cartography, web map, leaflet, openlayers, d3]
---

{% include JB/setup %}

## Understanding web mapping



## Web map frameworks

### Leaflet.js

[Leaflet.js](http://leafletjs.com/) is a light-weight open-source JavaScript library. This is the 'easiest' framework to use for developing web maps.

> Leaflet is a modern open-source JavaScript library for mobile-friendly interactive maps. It is developed by Vladimir Agafonkin with a team of dedicated contributors. Weighing just about 33 KB of JS, it has all the features most developers ever need for online maps.

<iframe class="leaflet" src="http://leafletjs.com/examples/choropleth-example.html" frameborder="0"></iframe>

----

<br>


### OpenLayers 3

OpenLayers is an open-source JavaScript library.

<iframe class="openlayers" src="http://openlayers.org/en/v3.2.1/examples/earthquake-clusters.html" frameborder="0"></iframe>

----

<br>

[Here are OpenLayers 3 examples](http://openlayers.org/en/v3.3.0/examples/)

### D3.js

[D3](http://d3js.org/) is an excellent tool for visualizing spatial data, but flexes its muscles with non-spatial data. 

#### Spatial Data

<iframe class="d3" src="http://ssz.fr/places/?us#beach/" frameborder="0"></iframe>

----

<br>

#### Non-spatial data

[Force-Directed Graph explained here](http://bl.ocks.org/mbostock/4062045)

<iframe class="d3" src="http://bl.ocks.org/mbostock/raw/4062045/" frameborder="0"></iframe>

----

<br>

## Tile Map Service (TMS)

[Here's a list of tile map service (TMS) providers](http://leaflet-extras.github.io/leaflet-providers/preview/). Nearly all TMS providers are free for <em>personal use</em>.

Mapbox Suite is ideal for creating custom basemaps.

A basemap is what your spatial data layers are set on top of. 

Satellite imagery is the most commonly know type of TMS. Mapbox Suite uses vector data to create basemaps. Frameworks such as Leaflet.js allow you to overlay spatial data on top of TMS/basemaps.

----

<br>

## Leaflet.js basic tutorials

Read below for basic Leaflet.js tutorials. Most of the code can be 'easily' figured out by reading the parameters already set. Basic knowledge of HTML and CSS are a plus, and basics of JavaScript will help you develop interactive maps. 

[View the Leaflet.js API here](http://leafletjs.com/reference.html)

### qgis2leaf

A simple user-friendly method of creating a basic Leaflet with a layer through QGIS. [See the GitHub repository here](https://github.com/geolicious/qgis2leaf).

1. Open QGIS and install qgis2leaf plugin:
  * <em>Menu Bar > Plugins > Manage and Install PLugins > Search 'qgis2leaf'</em>
1. Add vector layer. 
  * NOTE: vector data is stored as points (with lines connecting lines, polylines, and polygons). The output of a 90MB shapefile to [GeoJSON](http://geojson.org/) is nearly 300MB (this will vary, however). Understanding your data beforehand will help you in the long run. See [Data Wrangling]({{site.baseurl}}/data wrangling/data-wrangling/) 


