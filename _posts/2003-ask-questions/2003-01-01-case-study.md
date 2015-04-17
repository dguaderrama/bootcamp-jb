---
title: "Landslide Exercise"
layout: post
category : Ask Some Questions
tagline: ""
tags : [data analysis]
---

{% include JB/setup %}

#### Prerequisites: Intro, Data Collection, Data Wrangling

### Objectives: 
  - Be able to reclassify a raster. 
  - Understand basics of raster calculations.

### Exercise

This exercise will walk through reclassifying raster data.

----

# Lessons

Lessons are intended for learning basic spatial functions with QGIS. Each lesson is a prerequisite for the subsequent lesson. For best results, start from beginning to end from collecting data throught visualizing the final product. However, data will be prepared and available if you wish to jump through lessons without completing the former.

DISCLAIMER: Data provided here have been reclassified/modified to fit the needs of the lessons and should not be used in any scientific analysis. Original data sources and researh articles are available if you feel the need to pursue your dreams of performing a landslide susceptibility analysis. [Original data and research articles are located here]({{site.baseurl}}/references/citations).

## The Scenario:

You've been assigned the task of locating high-risk landslide areas in the state of Washington, specifically the densely population northwest region. You must locate and prepare your data before performing your analysis. The Governor of Washington also wants to make this data publicaly through an online web map. 

<br>

----

<br>

## Data Collection

### What this lesson covers:

 * downloading data
 * downloading meta data
 * file storage/project directory (keep your data directories clean)

### Objective:

Gather data necessary for locating high-risk landslide areas in the state of Washington. 

### Data sources:

 * GTOPO30
 * Washington boundary
 * Washington geology
 * [American Fact Finder (real estate)](http://factfinder.census.gov/)
 * [TIGER/Line (shapefiles and geodatabases)](http://www.census.gov/geo/maps-data/data/tiger-line.html)

### Steps: 

 1. prepare project directory
  * this is intended for a best practice
  * create folder structure
 1. how to download gtopo30
  * explain
 2. how to download washington boundary
  * explain
 3. how to download washington geology
  * explain
 

 * download data with meta data (DEM & washingon boundary data with meta data)
 * prepare project directory
 * data will be used in Data Prep

<br>

----

<br>

## Data Wrangling - Prepare Digital Elevation Model

### What this lesson covers:

 * reprojecting data
 * clipping data extents
 * importing data (raster and vector)

### Objective: 

Download, examine, and prepare DEM for landslide susceptibility analysis.

### Data:

 * gtopo30 DEM - northwest america

### Steps:

 * import DEM of northwest US
 * import washington boundary shapefile
 * clip DEM to washington boundary
 * data will be used in Reclassify and Rasterize Vector

<br>

----

<br>

## Data Wrangling - Reclassify and Rasterize Vector

### What this module covers: 

 * editing vector data attributes
 * (re)classifying vector data
 * rasterizing vector data

### Objective

Prepare geology layer with geo_type (just an example) of soft, medium, hard, mass-wasting

### Data:

 * washington state geology shapefile

### Steps: 

 1.  Import wa_geology.shp:
   * <em>Open QGIS, Add Vector Layer, and navigate to wa_geology.shp.</em><br>
![QGIS: Add geology vector layer into map view]({{site.baseurl}}{{ASSET_PATH}}/images/lesson-1/lesson-1-01.png)
 2.  Open field calculator in Attribute Table:
   * <em>Right-click wa_geology in Layers List > Open Attribute Table > Toggle editing mode (top left)</em>
   * While in edit mode, <em>Open field calculator (top right)</em><br>
![QGIS: Open field calcultor]({{site.baseurl}}{{ASSET_PATH}}/images/lesson-1/lesson-1-03.png)
 3.  Add and calculate new field:
   * Match your Field Calculator window to the one below for creating a new field 'strength' with a range of values of 0-3. Be sure to match it exactly as it's displayed: *double-quotes are evaluated as a column whereas single-quotes are evaluated as column values. Save your changes once finished*.<br><br>**Expression:<br>case<br>when "rock_type" = 'soft' then 1<br>when "rock_type" = 'medium' then 2<br>when "rock_type" = 'hard' then 3<br>else 0<br>done<br>**
![QGIS: Add and calculate new field]({{site.baseurl}}{{ASSET_PATH}}/images/lesson-1/lesson-1-04.png)
 4. Style wa_geology.shp:
   * <em>Right-click on wa_geology.shp in layer list > Properties > Style</em>
   * Change style type from <em>Single Symbol</em> to <em>Categorized</em>.
   * Categorize by <em>strength</em> and click <em>Classify</em> to add classes.
   * Match your colors with the example below or get fancy with your own styling.<br>
![QGIS: Style shapefile]({{site.baseurl}}{{ASSET_PATH}}/images/lesson-1/lesson-1-07.png)
 5. Rasterize wa_geology.shp:
   * GDAL's rasterize is a prefered method. This can be accessed through <em>Menu Bar > Raster > Conversion > Rasterize (Vector to raster)</em>. Notice how the parameters have been diabled in the example below. There's a specific reason for this. Complete the parameter inputs: <em>Define your output file and location (in working directory); Attribute field = strength; Raster size in pixels = 1000 x 1000</em>. Because GDAL is more powerful in the commandline, there are certain parameters that cannot be set within QGIS.
   * <em>Click the edit icon (pencil) locate near the block of code</em>. This enables you to add those non-QGIS parameters.
   * <em>Add the line of code</em> ``-at -a_nodata 0`` just after ``gdal_rasterize`` 
   * <em>-at</em>: Enables the ALL_TOUCHED rasterization option so that all pixels touched by lines or polygons will be updated, not just those on the line render path, or whose center point is within the polygon. Defaults to disabled for normal rendering rules.[^3]
   * <em>-a_nodata $value</em>: Assign a specified nodata value to output bands - this prevents pixels with no data from being written into the output raster.[^3]
   * [Here's a link to the gdal_rasterize parameters](http://www.gdal.org/gdal_rasterize.html).<br>
   ![QGIS: Rasterize - Vector to raster]({{site.baseurl}}{{ASSET_PATH}}/images/lesson-1/lesson-1-11-2.png)
 6. Style the new wa_geology.tif:
   * Open wa_geology.tif style properties. HINT: See step 4.
   * For <em>Render type</em>, select <em>Singleband pseudocolor</em>
   * On the right select: <em>Load min/max values: Min/max; Extend: Actual (slower); then Load</em>. This loads actual values into the classification. QGIS Approximates values by defautl. 
   * <em>Change Mode to Equal Interval with 3 classes</em>. Remember, we only have three rock strength classes: soft, medium, hard. Change your color map if you'd like. The color maps are not stored into the raster, so the raster will load with the defaul color map (black to white) each time its opened in a new project.
   * <em>Click Classify</em>. Apply and OK.<br>
   ![QGIS: Style raster]({{site.baseurl}}{{ASSET_PATH}}/images/lesson-1/lesson-1-13.png)

You've just successfully imported a vector, added and calculated a new field, styled a vector layer, rasterized a vector with GDAL, and finished it off with styling a raster. 

Keep this reclassified and rasterized vector, it'll be used in the next lesson.

<br>

----
### 1 - Create reclassification rules text file

####Slope

| Category| &nbsp;&nbsp;&nbsp;&nbsp; | Slope |
|:-:|-|:----------:|
| 1 || < 3&deg;   |
| 2 || 3-5&deg;   |
| 3 || 5-10&deg;  |
| 4 || 10-15&deg; |
| 5 || 15-20&deg; |
| 6 || 20-30&deg; |
| 7 || 30-40&deg; |
| 8 || > 40&deg;  |

In order to reclass our slope layer into something useful, we will use the grass *r.reclass* tool

The r.reclass tool reads text files which define the classification rules(rule files). For this example, our rule fill will have the following contents:

#####*slope-rule.txt*
~~~ 
0 thru 2.99 = 1
3 thru 4.99 = 2
5 thru 9.99 = 3
10 thru 14.99 = 4
15 thru 19.99 = 5
20 thru 29.99 = 6 
30 thru 39.99 = 7
40 thru 90 = 8
~~~

----

### 2 - Reclassify raster

Once we have created the slope rule file. We can select the r.reclass tool from the Processing Toolbox.

Your Processing Toolbox may not be opened. <em>Open your Processing Toolbox: Menu Bar > Processing > Toolbox</em>

In the processing toolbox, select *GRASS commands* > *Raster* > *r.reclass*

We will use the following settings for the reclassify tool:<br>

  * Input Raster: _slope-washington_
  * File containing reclass rules: _slope-rules.txt_
  * Output raster layer: _slope-reclass.tif_ (NOTE: select *Save to file...* or else QGIS will not create a permanent output)<br>
![slope-reclass]({{site.baseurl}}{{ASSET_PATH}}/images/slope-reclass.png)

----

### 3 - Susceptibility

We will have to do some raster calculations to create the output data set. The classifications are taken from the California study[^2] and are as follows:

![landslide-key]({{site.baseurl}}{{ASSET_PATH}}/images/landslide-key.png)

Since we need to cross reference these categories, we need to create a raster which represents each unique combination of the slope and rock strength classes. A method to create unique combinations is to promote the rock strength categories a decimal place. This would make the rock classes: 10,20, and 30.

To create these new classes, we can **load the following files**:

 * source_files/geo_coded.tif
 * secondary_files/slope-reclass.tif

In the top menu, select *Raster* > *Raster Calculator*

Our raster calculator expression will be: 

{% highlight bash %}
("geo_coded@1" * 10) + "slope-reclass@1"
{% endhighlight %}

Output layer: slope-geo-sect.tif

![raster-calc]({{site.baseurl}}{{ASSET_PATH}}/images/raster-calc.png)


We can apply the landslide susceptibility classification using r.reclass and the following rule file:

**Reclassify slope-geo-sect.tif with the following rule:**

**Save output as landslide-suscept.tif**

*landslide-rule.txt*

~~~
11 12 13 21 31 = 0
14 = 3
22 23 = 5
15 = 6
16 32 33 = 7
17 18 24 = 8
25 thru 28 34 = 9
35 thru 38 = 10
~~~

----

#### 4 - Precipitation

Now that we have created the landslide susceptibility layer, we can make use the Average Annual Precipitation layer to check the susceptible areas against the areas receiving the most annual rain.



Convert millimeters to inches


Raster calculator: precip = precip * 0.0394

Check THIS STEP AGAINST REFERENCES


| Category |&nbsp;&nbsp;&nbsp;&nbsp; | Precipitation |
|:--------:|-|:-------:|
|   0
|   1      || 5-10 in  |
|   2      || 10-15 in |
|   3      || 15-30 in |
|   4      || 30-45 in |
|   5      || 45-60 in |
|   6      || 60-75 in |
|   7      || 75-90 in |
|   8      || > 90 in  |


### Visualization

Now that the output datasets have been created, we can work on making our results presentable.

Go to Cartography & Visualization...

<br>

----

<br>


----

<br>

## Raster Analysis

### What this module covers: 

  * Importing raster data
  * DEM Terrain analysis (slope, aspect)
  * Raster analysis using Raster Calculator

### Objective:

Complete locating high-risk landslide/mass-wasting areas in Washington. You must use the digital elevation model (DEM) that you created in [Data Wrangling - DEM]({{site.baseurl}}/applications/qgis#data-wrangling---prepare-digital-elevation-model) to produce slope and aspect rasters. Lastly, you need perforam a raster summation for locating high-risk landslide areas.

### Data:

 * Washington DEM (wa_dem.tif) - [SEE Data Wrangling]({{site.baseurl}}/applications/qgis#data-wrangling---prepare-digital-elevation-model) 
 * Washington geology raster (wa_geology.tif) - [SEE Data Wrangling]({{site.baseurl}}/applications/qgis#data-wrangling---reclassify-and-rasterize-vector)

### Data Classifications:

#### High-risk slope:

| Category| &nbsp;&nbsp;&nbsp;&nbsp; | Slope |
|:-:|-|:----------:|
| 1 || < 3&deg;   |
| 2 || 3-5&deg;   |
| 3 || 5-10&deg;  |
| 4 || 10-15&deg; |
| 5 || 15-20&deg; |
| 6 || 20-30&deg; |
| 7 || 30-40&deg; |
| 8 || > 40&deg;  |

#### Geology strength:

| Category| &nbsp;&nbsp; | Strength|
|:-:|-|:----:|
| 1 || Low (high-risk) |
| 2 || Medium          |
| 3 || High (low-risk) |

### Steps:

 1. Import raster data:
  * <em>Open QGIS > Add Raster Layer > Data directory > Add: wa_dem.tif and wa_geology.tif</em><br>
  * BEST PRACTICE: Check your projections before performing any anaylsis, otherwise you're in for a lot of trouble. Also, check raster resolutions before analysis, you don't want your results to be off or invalid.<br>
  ![Spatial Data Carpentry: Raster Analysis - import raster data]({{site.baseurl}}{{ASSET_PATH}}/images/raster-analysis-1.jpg)
 1. Style wa_geology.tif to help better visualize data:
  * <em>Right-click layer > Properties > Style</em>
  * Render type: Singleband pseudocolor
  * Generate new color map: select color map
  * Mode: Equal interval = 3
  * Set Max = 3
  * Load min/max values: Min/max
  * Accuracy: Actual (slower)
  * <em>Click Classify</em> to enable changes.
  ![Spatial Data Carpentry: Raster Analysis - style raster data]({{site.baseurl}}{{ASSET_PATH}}/images/raster-analysis-2.jpg)
  * To change individual value colors, <em>double-click the color box</em> of the desired value:<br>
  ![Spatial Data Carpentry: Raster Analysis - style raster data]({{site.baseurl}}{{ASSET_PATH}}/images/raster-analysis-3.jpg)
  * Click Apply and OK to save changes.
  * Notice how the layer label has changed from 1-2.998 to 1-3.
  * Also, notice some geology raster pixel values are missing (you can see wa_dem black values), this is due to a no-data value assigned to water. Water != geology.<br>
  ![Spatial Data Carpentry: Raster Analysis - style raster data]({{site.baseurl}}{{ASSET_PATH}}/images/raster-analysis-4.jpg)
 3. Calculate slope:
  * <em>Menu Bar > Raster > Analysis > DEM (Terrain models)</em>
  * **Configure as follows:<br><br>Input file (DEM raster): wa_dem<br>Output file: slope.tif<br>Mode: Slope<br>Scale: 0.30<br><br>**
  * explain scale = 0.30<br>
  ![Spatial Data Carpentry: Raster Analysis - DEM Terrain Analysis - Slope]({{site.baseurl}}{{ASSET_PATH}}/images/raster-analysis-5.jpg)
  * Click OK, OK, CLOSE to exit DEM (Terrain models)<br>
  ![Spatial Data Carpentry: Raster Analysis - DEM Terrain Analysis - Slope]({{site.baseurl}}{{ASSET_PATH}}/images/raster-analysis-6.jpg)
 4. Reclassify slope raster
  * Enable the Processing Toolbox: <em>Menu Bar > Processing > Toolbox > Select Advanced interface</em><br>
  ![Spatial Data Carpentry: Raster Analysis - Reclassify slope raster]({{site.baseurl}}{{ASSET_PATH}}/images/raster-analysis-7.jpg)
  * The <em>r.reclass</em> tool will be used to reclassify the slope raster into correct categories. Create a text file with the following data. Save it as slope-rule.txt.
 
#####*slope-rule.txt*
~~~
0 thru 2.99 = 1
3 thru 4.99 = 2
5 thru 9.99 = 3
10 thru 14.99 = 4
15 thru 19.99 = 5
20 thru 29.99 = 6 
30 thru 39.99 = 7
40 thru 90 = 8
~~~
  ![Spatial Data Carpentry: Raster Analysis - Reclassify slope raster]({{site.baseurl}}{{ASSET_PATH}}/images/raster-analysis-8.jpg)

  * Open GRASS tool, r.reclass: <em>Processing Toolbox (with Advanced interface) > GRASS Commands > Raster > r.reclass</em>
  * Configure your inputs as follows:**<br><br>Input Raster: slope<br>File containing reclass rules: slope-rules.txt<br>Output raster layer: slope-reclass.tif** (NOTE: select <em>Save to file...</em> or QGIS will not create a permanent output)<br><br>
  ![Spatial Data Carpentry: Raster Analysis - reclassified slope output]({{site.baseurl}}{{ASSET_PATH}}/images/raster-analysis-slope-reclass-inputs.png)

We will have to do some raster calculations to create the output data set. The classifications are taken from the California study[^2] and are as follows:

![landslide-key]({{site.baseurl}}{{ASSET_PATH}}/images/landslide-key.png)

Since we need to cross reference these categories, we need to create a raster which represents each unique combination of the slope and rock strength classes. A method to create unique combinations is to promote the rock strength categories a decimal place. This would make the rock classes: 10,20, and 30.

To create these new classes, we can load the source_files/geo_coded.tif, and secondary_files/slope_reclass.tif

In the top menu, select *Raster* > *Raster Calculator*

Our raster calculator expression will be: 

{% highlight bash %}
("geo_coded@1" * 10) + "slope-reclass@1"
{% endhighlight %}

Output layer: slope-geo-sect.tif

![raster-calc]({{site.baseurl}}{{ASSET_PATH}}/images/raster-calc.png)


We can apply the landslide susceptibility classification using r.reclass and the following rule file:

*landslide-rule.txt*

~~~
11 12 13 21 31 = 0
14 = 3
22 23 = 5
15 = 6
16 32 33 = 7
17 18 24 = 8
25 thru 28 34 = 9
35 thru 38 = 10
~~~


References: 

[^1]: http://www.usgs.gov/blogs/features/usgs_top_story/landslide-in-washington-state
[^2]: http://www.conservation.ca.gov/cgs/information/publications/Documents/MS58.pdf
[^3]: http://www.spatialreference.org/ref/epsg/2927
[^4]: https://lta.cr.usgs.goc/GTOPO30
[^5]: http://www.dnr.wa.gov/ResearchScience/Topics/GeosciencesData/Pages/gis_data.aspx
[^6]: http://wdfw.wa.gov/conservation/gap/land_cover_data.html
[^7]: http://www.esrl.noaa.gov/thredds/catalog/Datasets/cpc_us_precip/catalog.xml#Datasets/cpc_us_precip/RT
[^8]: http://gadm.org/country
