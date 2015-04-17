---
title: "QGIS Overview"
layout: post
category : Know the Basics
tagline: "Supporting tagline"
tags : [applications, qgis, quantumgis]
---


{% include JB/setup %}


<a title="By User:Anitagraser on QGIS Wiki, User:Anitagraser (http://www.qgis.org/wiki/File:QGis_Logo.png) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AQGis_Logo.png"><img width="128" alt="QGis Logo" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/71/QGis_Logo.png/128px-QGis_Logo.png"/></a>

# What is QGIS?

> QGIS is the best GIS tool in the free and open-source software (FOSS) community.

> QGIS is a user friendly Open Source Geographic Information System (GIS) licensed under the GNU General Public License. QGIS is an official project of the Open Source Geospatial Foundation (OSGeo). It runs on Linux, Unix, Mac OSX, Windows and Android and supports numerous vector, raster, and database formats and functionalities.

[Here's a link to download QGIS](http://www2.qgis.org/en/site/forusers/download.html)

<br>

## Explore QGIS:

For a more thorough explanation of QGIS, <a href="http://docs.qgis.org/2.6/en/docs/user_manual/" target="new">see the QGIS User Guide here</a>.

## The Basics

  ![QGIS GUI]({{site.baseurl}}{{ASSET_PATH}}/images/qgis-gui.png)

1. **Menu Bar**
The menu bar provides access to QGIS features. In Linux systems, hover over to view menu bar options (haven't checked other systems). The QGIS version is displayed while not hovering over the menu bar (linux systems). Most common features or tools are accessable through the toolbar icons which will be the prefered method throughout this QGIS introduction.
2. **Toolbar**
The toolbar provides access to most standard QGIS functions. Go to <em>Menu Bar > View > Toolbars</em> to activate or deactivate toolbars. Hover over tools to view the description and puropose.
3. **Map Legend**
The map legend is a list of all layers in the project. Each layer can be turned on or off with the layer's checkbox.  It's possible to group layers.
4. **Map View**
The map view displays the active layers in the map project. You can set the map view extent by right-clicking on a layer and selecting <em>Zoom to layer extent</em>
5. **Status Bar**
The status bar displays current position in map coordiantes (e.g., meters or decimal degrees) as the mouse pointer moves across the map view. To the left of the coordinate display is the button gor toggling extents and mouse position display. To the right of the map coordinates is the scale, which may be set to one of the predefined zoom extends of 1:500 to 1:1,000,000. This scale setting will adjust as you zoom or pan throught the map view. Options for map rendering are to the right of the current map scale setting. To the far right is the current CRS for the map project.
6. **Processing Toolbox**
The processing toolbox must be turned on by naviagting to <em>Menu Bar > Processing > Toolbox</em>. This helpful tool allows searching by keyword for the geoalgorithm from each of the active processing roviders.[^2]

----

<br>

## Configure your workspace

### Project properties

  ![QGIS Project Properties]({{site.baseurl}}{{ASSET_PATH}}/images/project-properties.jpg)

<em>Menu Bar > Project > Project Properties</em>

From here you can set the title, save relative paths (default!), set canvas units, enable on-the-fly projection, etc. On-the-fly projection will project layers added to the project to the configured projection. 


### Activate necessary providers

  ![Activate Providers]({{site.baseurl}}{{ASSET_PATH}}/images/providers-config.jpg)

<em>Menu Bar > Processing > Options and configuration > Providers > $PROVIDER > Activate (be sure it's checked)</em>

[See the complete list of processing providers and algorithms here](http://docs.qgis.org/2.6/en/docs/user_manual/processing_algs/index.html?highlight=providers)

----

<br>

## Working with Project Projections

> QGIS allows users to define a global and project-wide CRS (coordinate reference system) for layers without a pre-defined CRS. It also allows the user to define custom coordinate reference systems and supports on-the-fly (OTF) projection of vector and raster layers. All of these features allow the user to display layers with different CRSs and have them overlay properly.[^2]

See [Intro to Spatial Data]({{site.baseurl}}/intro/spatial-data) for more detailed info on projections.

Each new project starts with the global default projection, [EPSG:4326 - WGS 84](http://www.spatialreference.org/epsg/wgs-84/): 

``proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs``

This can be changed at <em>Menu Bar > Settings > Options > CRS > Default CRS for new projects</em>

However, this is not the same as changing the project projection. You may define the project projection from <em>Menu Bar > Project > Project Properties > CRS</em>. Also keep in mind, the CRS of a new project will change to the CRS of the first layer added to the project.

'On the fly' CRS transformation is not enabled by the default QGIS installation.  

## Supported Data Formats

QGIS support a multitude of data types from simple shapefiles to database tables to Web Feature Service layers. Sticking to the basics, below are quick descriptions of vector and raster data.

### Vector 

QGIS uses the GDAL OGR library to read and write vector data formats, such as the most commonly known ESRI shapefile. GRASS vector and PostreSQL support is provided by a native QGIS provider plugin[^2]. [Here is the complete list of OGR vector formats](http://www.gdal.org/ogr_formats.html).

Vector data is added to the project by simply clicking on the Add Vector Layer tool:

![Add vector in QGIS]({{site.baseurl}}{{ASSET_PATH}}/images/add-vector.png)

View vector attribute table by right clicking on the layer and clicking Open Attribute Table. From here you can sort data, show selected features, show features visible on map, show edited and new features, filter by column, or query data with and advanced filter. 

Attribute data can be edited by enabling and edit session with the Toggle Editing Mode icon (top left).

### Raster

QGIS uses the GDAL library to read and write raster data formats while GRASS raster support is provided by a native QGIS provider plugin[^2]. [Here is the complete list of GDAL raster formats](http://www.gdal.org/formats_list.html).

Similar to adding vector data, click on the Add Raster Layer tool:

 ![Add raster in QGIS]({{site.baseurl}}{{ASSET_PATH}}/images/add-raster.png)

## General Spatial Functions

Spatial functions are accessable through <em>Menu Bar > Vector/Raster</em>. Or alternatively, they are accesses through the Toolbox panel where searching for tools by keyword is made easy. 

## Composing Maps (for print/non-web-based)

This method is ideal for exporting your work for a research paper, admiring your work, and such. Developing a web map for dissimenating your data is a bit more involved and is discussed in the [Publish Your Data to a Web Mapi/LeafletJS]({{site.baseurl}}/visualization/leaflet) section. Also, to export data with styles see [This section link](this-is-not-a-link).

Begin by opening the Print Composer: 

 ![Create new Print Composer workspace]({{site.baseurl}}{{ASSET_PATH}}/images/compose-map.png)

<br>

----
