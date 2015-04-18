---
title: "Compose a map"
layout: post
category: Show your Results
tags: [cartography, exercise]
tagline: "making print-based maps"
---

{% include JB/setup %}

# Exercise

## Objectives

* Create a print-based (static, non-interactive) map in QGIS.

----

## Procedures

Create map of Washington rock strength

Layers needs:

 * geo_coded.tif
 * dem-washington.tif

 ![Spatial Data Carpentry: Show your Results in QGIS]({{site.baseurl}}{{ASSET_PATH}}/images/carto/carto-1.png)

#### Prepare data for map

1. Uncheck all layers, less dem-washington and geo_coded
<!--2. Create hillshade: * <em>Menu Bar > Raster > Analysis > DEM (Terrain models)</em> * Configure input as follows:<br> Notice the Z factor, this will exaggerate elevation and give the map an appearance of greater relief.<br>![Spatial Data Carpentry: Show your Results in QGIS]({{site.baseurl}}{{ASSET_PATH}}/images/carto/carto-2.png) -->
2. Load hillshade-washington.tif
2. Be sure geo_coded is moved up, or on top of dem-washington:
 * <em>Click-hold-drag geo_coded</em> to the top of the layer list.
 * Uncheck dem-washington layer.<br>
 ![Spatial Data Carpentry: Show your Results in QGIS]({{site.baseurl}}{{ASSET_PATH}}/images/carto/carto-3.png)
3. Style geo_coded with qml-style file:
 * <em>Right-click geo_coded > Properties > Style</em>
 * <em>Load Style... (button at bottom) > Navigate to rock-strength.qml</em>
 * QGIS does not load actual minimum and maximum values by default. This enables faster layer rendering. You'll want to load actual min/max values to visualize the correct data. To load actual min/max values:<br><em>Load min/max values: Min/max<br>Accuracy: Actual (slower)<br>Click Load<br>Click Apply to save changes</em><br>
 ![Spatial Data Carpentry: Show your Results in QGIS]({{site.baseurl}}{{ASSET_PATH}}/images/carto/carto-4.png)
 * Increase transparency:<br><em>From within layer Properties > Transparency > Global Transparency > 50%<br>Click Apply, OK to save changes and close Properties</em><br>
 * The product just created visualizes rock strength within Washington state with enhanced effects using hillshade and transparency.
 ![Spatial Data Carpentry: Show your Results in QGIS]({{site.baseurl}}{{ASSET_PATH}}/images/carto/carto-5.png)

#### Making the map

1. There are several was to open the **Print Composer**:
 * <em>Menu Bar > Project > New Print Composer</em>
 * Print Composer toolbar icon<br>
 ![Spatial Data Carpentry: Show your Results in QGIS]({{site.baseurl}}{{ASSET_PATH}}/images/carto/carto-6.png)
2. Create title:
 * This new Print Composer project will be saved and can be accessed through the **Composer Manager**.
3. The Print Composer opens in a new application window, you will still be able to work in your current project while making a map.
4. You must add a map layer for visualizing. The **Add Map** tool will require you to create a bounding box to fit the map. Adjust the bounding box as needed. To add a map layer:
 * <em>Menu Bar > Layout > Add Map</em> OR
 * **Add new map** toolbar icon:<br>
 ![Spatial Data Carpentry: Show your Results in QGIS]({{site.baseurl}}{{ASSET_PATH}}/images/carto/carto-7.png)
 * **Move Item Content** tool will allow you to move the map without moving the bounding box<br>
 ![Spatial Data Carpentry: Show your Results in QGIS]({{site.baseurl}}{{ASSET_PATH}}/images/carto/carto-8.png)
 * Explore tools by hovering over the toolbar icon or go to <em>Menu Bar > Layout</em> to see the names of each layout tool.
5. Add a legend:
 * <em>Menu Bar > Layout > Add Legend</em>
 * Notice how names and values are not appropriate for a final map. To open legend propertie, using the **Select/Move Item** tool: <em>Select the legend layer and notice the Item properties on the right</em><br>
 ![Spatial Data Carpentry: Show your Results in QGIS]({{site.baseurl}}{{ASSET_PATH}}/images/carto/carto-9.png)
 * Item properties: Here you are able to change the title, select which legend to produce based on the map layer, modify legend item, etc. See the images below for the list of options.<br>
 ![Spatial Data Carpentry: Show your Results in QGIS]({{site.baseurl}}{{ASSET_PATH}}/images/carto/carto-10.png)
 6. Add a title:
 * add title
 7. Add scale bar:
 * scale bar
 8. Map info
 * map info
 9. North arrow
 * <em>Menu Bar > Layout > Add image</em> then click area on map.
 * <em>Image item properties > Search directories > Locate North Arrow</em>
10. Configure additional features
11. Export map:
 * As Image, PDF, or SVG.<br>
 <img src="{{site.baseurl}}{{ASSET_PATH}}/images/carto/carto-final-map.jpg" style="border:1px solid black;" alt="Spatial Data Carpentry: Show your Results in QGIS">

