---
title: "Vector Analysis"
layout: post
category: More Reading
tagline: ""
tags: [vector analysis, census data]
---


{% include JB/setup %}

## Vector Analysis

### What this module covers: 

 * Buffer polylines
 * Join census housing (home values) to census tracts (shapefile)
 * Intersecting vector layers


### Objective: 

Quantify total home value at risk within landslide/mass-wasting and fautls.

### Data Collection: (there needs to be instructions/quick lesson on each of the collection sources) 

 * <a href="http://factfinder.census.gov/faces/nav/jsf/pages/guided_search.xhtml" alt="Spatial Data Carpentry: Download Census housing data - American FactFinder" target="_blank">Census housing data - American FactFinder</a>
 * <a href="https://www.census.gov/geo/maps-data/data/tiger.html" alt="Spatial Data Carpentry: Download Census tract shapefile - TIGER data" target="_blank">Census tracts - TIGER Data</a>
 * <a href="http://earthquake.usgs.gov/hazards/qfaults" alt="Spatial Data Carpentry: Download USGS quaternary faults" target="_blank">Quaternary faults - USGS </a>
 * <a href="http://www.dnr.wa.gov/ResearchScience/Topics/GeosciencesData/Pages/gis_data.aspx" alt="Spatial Data Carpentry: Download seismogenic features" target="_blank">Washington seismogenic features - REQUIRES GDAL filegdb driver!</a>
 * <a href="http://nhd.usgs.gov/" alt="Spatial Data Carpentry: Download USGS National Hydrography Dataset - Washington" target="_blank">Washington streams/rivers - USGS National Hydrography Dataset</a>

Here, the data are pre-wrangled (located on nathan's server, for now):

 * faults_100k - [source]
 * [housing-data.zip]({{site.baseurl}}{{ASSET_PATH}}/data/housing-data.zip)

### Clean your Data:

#### Wrangle Census Data:

Luckily, the Census data has already been wrangled. Census data can sometimes be tricky. 

#### High-risk rules:

 * within 100m of fault lines
 * within 50m of rivers/streams
 * within soft geologic areas 

 1. Open QGIS and configure project workspace.
 1. Import data:
   * HINT: The project projection will default to the first layer that is added to the project (See lower right of image below: EPSG:2927).
   * <em>Add Vector Layer: </em>![Spatial Data Carpentry: Vector Analysis - add vector data]({{site.baseurl}}{{ASSET_PATH}}/images/qgis/add-vector.png)<br>**fault_100k.shp**<br>
   ![Spatial Data Carpentry: Vector Analysis - streams and faults]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-3.png)
 1. Buffer fault lines to 100m:
   * <em>Menu Bar > Vector > Geoprocessing Tools > Buffer(s)</em>
   * Configure inputs as follows:<br>**Input vector layer: fault_100k<br>Buffer distance: 100<br>Output shapefile: fault_buffer_100m.shp<br>Add results to canvas: (Checked)<br>Click OK to perform analysis, Close to exit the tool**<br>
   ![Spatial Data Carpentry: Vector Analysis - buffer analysis]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-4.png)
   * <em>Zoom in to a buffer, close enough to see the width</em>
   * <em>Open the meaure tool</em> ![Spatial Data Carpentry: Vector Analysis - measure tool]({{site.baseurl}}{{ASSET_PATH}}/images/qgis/measure-tool.png)
   * <em>Measure the width of the buffer.</em> Notice how the total width is only about 62 meters, or 100 feet. Current map units are determined by the CRS, in this case EPSG:2927 is in US feet and we need meters. Simply changing the CRS in Project Properties does not give us the correct results- this is still measured from EPSG:2927 US feet.<br>
   ![Spatial Data Carpentry: Vector Analysis - measure buffer]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-measure-tool-2.png)<br><br>**Important:**<br>There are two methods to perfoming a buffer analysis on our shapefile. The problem here is that our CRS is EPSG:2927 (in US feet) and the buffer distance is based on map units (still US feet). The two methods are: convert 100 meters to US feet and use this value in the buffer analysis while maintaining EPSG:2927 (in US feet); OR, reproject the layer thus creating a new file with a CRS in meters (correct map units), and then reprojecting back to EPSG:2927. We'll go with the former.<br><br>
 1. Now we need to perform the buffer analysis with the correct method. <em>Remove the incorrect buffer layer: fault_buffer_100m.shp</em>
 1. <em>Add Vector Layer: </em>![Spatial Data Carpentry: Vector Analysis - add vector]({{site.baseurl}}{{ASSET_PATH}}/images/qgis/add-vector.png)
   * **NHD_MajorStreams.shp<br>**
  ![Spatial Data Carpentry: Vector Analysis - add vector data]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-5.png)
 1. Open the buffer tool: 
   * <em>Menu Bar > Vector > Geoprocessing Tools > Buffer(s)</em>
 1. <em>Buffer fault_100k:</em>
   * Configure inputs as follow:<br>**Input vector layer: fault_100k<br>Buffer distance: 328<br>Output shapefile: fault_buffer_100m.shp<br>Add result to canvas: (Checked)<br>Click OK to run (overwrite necessary), and CLOSE to exit tool**<br><br>**Reminder:**<br>Buffer distance = 100 meters * 3.28084 feet = 328.084 feet<br> 1 meter = 3.28084 feet<br><br>
   ![Spatial Data Carpentry: Vector Analysis - buffer vector]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-6.png)
 1. Confirm 100 meter buffer on faults:
   * Open measure tool ![Spatial Data Carpentry: Vector Analysis - measure tool]({{site.baseurl}}{{ASSET_PATH}}/images/qgis/measure-tool.png) and confirm 200 meter total width (100 meters * 2 = 200 meters)<br>
   ![Spatial Data Carpentry: Vector Analysis - measure faults buffer]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-7.png)
 1. <em>Repeat buffer with NHD_MajorStreams.shp</em>
   * Configure inputs as follows:<br>**Input vector layer: NHD_MajorStreams<br>Buffer distance: 164<br>Output shapefile: streams_buffer_50m.shp<br>Add result to canvas: (Checked)<br>Click OK to run, CLOSE to exit tool**<br><br>**Reminder:**<br>Buffer distance = 50 meters * 3.28084 feet = 164.052 feet<br> 1 meter = 3.28084 feet<br><br>
   ![Spatial Data Carpentry: Vector Analysis - buffer streams]({{site.baseurl}}{{ASSET_PATH}}/images/vector-analysis/vector-analysis-8.png)
 1. Confirm 50 meter buffer on streams.
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

