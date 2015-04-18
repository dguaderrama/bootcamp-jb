---
title: "Web Map Examples"
layout: post
category : Show your Results
tagline: "interactive web maps"
tags : [cartography, web map, leaflet, openlayers, d3]
---

{% include JB/setup %}

## Understanding web mapping

A map on the Internet shouldn't be a static picture. There is potential for interaction, animation, and 3D! Even better, the Internet can allow us to share our maps and spatial data more effectively.

We've gone through the steps of putting our data on a map. We have styled it and
created a legend. We split our map into tiles to make it easier and faster to
display online.

Now we will use Javascript, the programming language that allows us
to add interaction to websites. Various frameworks exist that help
people use Javascript for web mapping. A framework is simply a
library or tool that facilitates the use of the Javascript language.

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

Mapbox Studio is ideal for creating custom basemaps.

A basemap is what your spatial data layers are set on top of.

Satellite imagery is the most commonly know type of TMS. Mapbox Suite uses vector data to create basemaps. Frameworks such as Leaflet.js allow you to overlay spatial data on top of TMS/basemaps.

