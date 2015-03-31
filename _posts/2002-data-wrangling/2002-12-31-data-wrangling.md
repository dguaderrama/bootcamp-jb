---
title: "Data Formatting"
layout: post
category : Data wrangling
tagline: "Supporting tagline"
tags : [wrangling]
---

{% include JB/setup %}
# Data Formatting

Data manipulation can be a simple endeavour if the data inputs come in the same or compatible formats. Data sources will usually have a specific format they use for their data which can make it easy to use work with their datasets. Unfortunately, when we gather data from various sources, we are usually given several different formats to data to deal with. Data wrangling is the process of manipulating and reformatting disparate data sources into compatible datasets. Data wrangling makes proper analysis/modeling possible. There are several methods common to spatial data wrangling some of which are:

 * Reprojection - Conversion from one projection coordinate system to another
 * Rasterization/Vectorization - Conversion from raster dataset to vector and vice versa
 * Extent Definition - Delineates the bounding box for a dataset, all data outside the box will become null
 * Reclassification - Assigns categorical values to a field based on a the contained values
 * Spatial Joins - Merges datasets based on spatial proximity/overlay

These methods can be performed using a variety of tools depending on the specific needs of the dataset. Here are a few typical choices to aide in data wrangling:

<br>

## Exercise

1. Set project projection to EPSG:2927<br><br> 
  Before starting any project in a GIS program, you should first set the project projection to make sure your data comes in with the same extent. <br>If you don't set the project's projection, the program will use the projection of the first layer added or EPSG:4326.<br><br>
  You can set the projection with the following steps:<br><br>
  ![project-properties]({{site.baseurl}}{{ASSET_PATH}}/images/qgis-project-properties.png)<br>
  * In the top navbar go Project > Project Properties
  * Select CRS in the Left menu
  * Check *Enable On-the-fly CRS transformation*
  * Select *NAD83(HARN)/Washington South(ftUS) EPSG:2927* from the List of Projections<br>
  ![projection]({{site.baseurl}}{{ASSET_PATH}}/images/qgis-projection.png)<br>
2. Add the US States shapefile<br><br>
  Since our project is directed at the state of Washington. We should extract the Washington state boundary for our study. The GADM[^7] project provides high-quality boundary data on country,state and county levels. We can use the US-state level dataset to get the Washington boundary. <br><br>
  * Select *Add Vector Layer* in the left toolbar
  * Browse to the USA_adm1.shp layer from the iPlant Data Store<br>
  ![USA_states]({{site.baseurl}}{{ASSET_PATH}}/images/usa-states.png)<br>
3. Create a layer for the state of Washington 
  * In the top toolbar, select *Select Single Feature*
  * Click on the state of Washington to select it<br>
  ![washington-selected]({{site.baseurl}}{{ASSET_PATH}}/images/washington-selected.png)<br>
  * Right click on the USA_adm1 layer and select *Save Selection As...*
      - Format: ESRI Shapefile
      - Save as: washington.shp
      - Encoding: UTF-8
      - CRS: 
          + Project CRS
          + Browse > *NAD83(HARN)/Washington South (ftUS) EPSG:2927*<br>
  ![save-washington]({{site.baseurl}}{{ASSET_PATH}}/images/save-washington.png)<br>
4. Load the new washington layer<br>
  * Select *Add Vector Layer*
  * Browse to the new washington layer and click *Open*<br>
5. Remove the USA_adm1 layer from the project <br>
  Now that we have the Washington layer, we can get rid of the U.S. layer. <br>
  * Right click the layer in the table of contents
  * Select *Remove*
6. Add the DEM layer from the iPlant data store<br>
  DEMs or *Digital Elevation Models* are very useful for establishing topological context in a map. DEMs generally come as a raster dataset that consists of elevation values. There are several different byproducts that can be created from DEMs.<br><br>
  This DEM was taken from the GTOPO30 satellite data.<br>
  * In the left toolbar, select *Add Raster Layer*
  * Select *source_files/W140N90.DEM*<br>
  ![dem-load]({{site.baseurl}}{{ASSET_PATH}}/images/dem-load.png)<br>
7. Project the dem to EPSG:2927
  * In the top menu, go to Raster > Projections > Warp (Reproject)
  * Use the following options
    + Input File: *W140N90*
    + Output File: *secondary_files/dem-project.tif*
    + Source SRS: *EPSG:4326*
    + Resampling Method: *Near*
    + No data values: *0*<br>
    ![project-dem]({{site.baseurl}}{{ASSET_PATH}}/images/project-dem.png)<br>
8. Clip the dem to the shapefile
  * In the top menu, select Raster > Extraction > Clipper
  * In the window, set the following options:
    + Input file: dem-project.tif
    + Output file: dem-washington.tif
    + No data value: 0
    + Clipping Mode: Mask layer > washington
    + Load into canvas when finished<br>
  ![dem-washington]({{site.baseurl}}{{ASSET_PATH}}/images/dem-washington.png)<br>
9. Remove the W140N90 layer<br>
  ![dem-washington-display]({{site.baseurl}}{{ASSET_PATH}}/images/dem-washington-display.png)<br>
