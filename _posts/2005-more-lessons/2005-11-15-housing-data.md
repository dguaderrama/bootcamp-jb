---
title: "Analyzing Housing value data"
category: More reading
layout: post
---

This is a continuation of the buffer exercise in *GET THE DATA*


 1. Import Census housing data (wa-housing-data.csv):
    * Notice: housing-data.csv has already been wrangled.
    * Add Delimited Text Layer ![Spatial Data Carpentry: Vector Analysis - add Census data]({{site.baseurl}}{{ASSET_PATH}}/images/qgis/add-csv.png) or <em>Menu Bar > Layer > Add Delimited Text Layer</em>
    * Configure inputs as follows:<br>**File Name: housing-data.csv<br>File Format: CSV<br>First record has field names: (Checked)<br>No geometry (attribute only table): (Selected)<br>OK to add** 
   ![Spatial Data Carpentry: Vector Analysis - add Census data]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-9.png)
 1. View Census housing-data.csv:
   * <em>Right-click housing-data (in layer list) > Open attribute table</em>
 1. Import Washington Census tracts (tl_2014__53_tract.shp) ![Spatial Data Carpentry: Vector Analysis - add Census tracts]({{site.baseurl}}{{ASSET_PATH}}/images/qgis/add-vector.png)<br>
   ![Spatial Data Carpentry: Vector Analysis - add Census tracts]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-10.png)<br><br>**Important:** Did you check the projection of the Census tracts shapefile? Be sure your shapefile CRS is EPSG:2927. <br><br>'on the fly' projection is selected
 1. Save Census tract (tl_2014_53_tract.shp) with ESPG:2927:
   * <em>Right-click tl_2014_53_tract.shp (layer list) > Save As</em>
   * Configure as follows: **ESRI Shapefile with EPSG:2927, Output filename: wa-tracts.shp, Add saved file to map: (Checked)**
 1. <em>Remove current tl_2014_53_tract.shp</em><br>
  ![Spatial Data Carpentry: Vector Analysis - workspace]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-11.png)
 1. Open wa-tracts attribute table and housing-data to find the key that will be used to join the tables. HINT: It's GEOID and GEO.id2.<br><br>**notes:** discuss field types, e.g. cannot compare a string to a number. -- add image --<br><br>
 1. Join Census housing data (housing-data.csv) to Census tracts (wa-tracts.sho):
   * Open Processing Toolbox (<em>Menu Bar > Processing > Toolbox</em>), search for "join attributes table", then double-click "Join attributes table"<br>
   ![Spatial Data Carpentry: Vector Analysis - join attribute table]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-12.png)
   * Configure Join attributes table as follows:<br>**Input layer: wa-tracts<br>Input layer 2: housing-data<br>Table field: GEOID<br>Table field 2: GEO.id2<br>Output layer: (Save to file..) tracts-housing-data.shp**<br><br>**IMPORTANT:** The concept behind this join is tabular (non-locational-data) joined to spatial data, not spatial data to tabular data. So, you must have spatial data (wa-tracts.shp) as the primary input and tabular data (housing-data.csv) as the secondary input. Notice in the **Joing attributes table** inputs below.<br>![Spatial Data Carpentry: Vector Analysis - join Census tracts and housing data]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-13.png)<br><br> **NOTICE:** "Layers do not all use the same CRS. This can cause unexpencted results." Remember, the housing-data.csv does not have any locational data associated with it. Click Yes, to continue.<br><br>![Spatial Data Carpentry: Vector Analysis - join error]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-14.png)
 1. Confirm output: housing data joined to tracts. Output is named "Output layer", rename to "tracts_housing_data.shp" (<em>right-click layer > Rename</em>). Hover over the layer in the layer list to view the source path.
 ![Spatial Data Carpentry: Vector Analysis - tracts and housing data joined]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-15.png)
 1. Normalize housing data - tract house count X median tract house value = total tract home value: (you'll need point data to have a more accurate analysis)
   * <em>Right-click tracts_housing_data > Open Attribute Table > Toggle editing mode > Open field calculator</em>
   * If you had downloaded the original ACS .csv with annotations then you would be able to easily find what the column headers mean. Or, you could locate the ACS metadata. But we have provided the difinitions below:<br>HC01_VC118 = Total Housing Units (Owner-occupied)<br>HC01_VC127 = Estimated Median Housing Unit (Owner-occupied)<br>We would have calculated total housing * median housing (total) but the ACS does not provide these metrics.
   * Configure inputs as follows:<br>![Spatial Data Carpentry: Vector Analysis - normalize data]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-16.png)
   * View your ouputs. Notice there are some NULL values:<br>![Spatial Data Carpentry: Vector Analysis - noramlize data]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-17.png)
 1. intersect buffered-merged-joined data with reclassified-rasterized geology layer
  * intersect buffered faults and streams:<br>
  ![Spatial Data Carpentry: Vector Analysis - intersect buffered streams and faults]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-18.png)
  ![Spatial Data Carpentry: Vector Analysis - intersect buffered streams and faults]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-19.png)
 1. calculate stream_fault_intersection shape area:
  ![Spatial Data Carpentry: Vector Analysis - calculate shape area]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-20.png)
  ![Spatial Data Carpentry: Vector Analysis - calculate shape area]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-21.png)
 1. calculate tracts_housing shape area:
  ![Spatial Data Carpentry: Vector Analysis - calculate shape area]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-22.png)
 1. spatial join stream_fault_intersection + tracts_housing: (this one takes a while)
  ![Spatial Data Carpentry: Vector Analysis - spatially join stream_fault_intersection to wa-tracts]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-23.png)
 1. data will be used in Raster Analysis

<br>
