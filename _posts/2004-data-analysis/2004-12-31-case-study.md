---
title: "Case Study"
layout: post
category : "Data Analysis"
tagline: "Supporting tagline"
tags : [data analysis]
---

{% include JB/setup %}

# Case Study

## Landslide Susceptibility Model

This case study has been chosed to demonstrate the concepts being highlighted by the bootcamp. We have chosen a landslide susceptibility analysis due to the diversity of inputs and a general curiousity into the methodology. The study area has been chosen in response to the Oso Mudslide[^1] which took place in Washington State on March 22nd, 2014. The methodology for this analysis is based off of work done by the California Geological Survey in Conjunction with the USGS[^2].

### Project Definition

Location: Washington State 
Bounding Coordinates: (-125.3424, 44.9408), (-115.8, 49.779)
Resolution: 1 km
Projection: Washington State Plane South (US ft) [^3]
: EPSG:2927

### Data Collection

Data types: Landslides are discrete phenomena that should be represented using vector data, but are caused by a variety of continuous and discrete conditions so our inputs will include raster, and vector data sets. 

| Input Layer          |&nbsp;&nbsp;&nbsp;&nbsp;| Data Source                               |
|:--------------------:|-|:-----------------------------------------:|
| DEM                  || GTopo30[^3]                               |
| Geology              || Washington Dept. of Natural Resources[^5] |
| Landslide Inventory  || Washington Dept. of Natural Resources[^5] |
| Daily Precipitation  || Earth System Research Laboratory(NOAA)[^7]| 

The DEM can be downloaded from ftp://edcftp.cr.usgs.gov/data/gtopo30/global/w140m90.tar.gz

tar -zxvf w140m90.tar.gz


### Data Wrangling

Open Quantum GIS

1. Set project projection to EPSG:2927
  * In the top navbar go Project > Project Properties
  ![project-properties]({{site.baseurl}}{{ASSET_PATH}}/images/qgis-project-properties.png)
  * Select CRS in the Left menu
  * Check *Enable On-the-fly CRS transformation*
  * Select *NAD83(HARN)/Washington South(ftUS) EPSG:2927* from the List of Projections
  ![projection]({{site.baseurl}}{{ASSET_PATH}}/images/qgis-projection.png)
2. Add the US States shapefile
  * Select *Add Vector Layer* in the left toolbar
  * Browse to the USA_adm1.shp layer from the iPlant Data Store
  ![USA_states]({{site.baseurl}}{{ASSET_PATH}}/images/usa-states.png)
3. Create a layer for the state of Washington
  * In the top toolbar, select *Select Single Feature*
  * Click on the state of Washing to select it
  ![washington-selected]({{site.baseurl}}{{ASSET_PATH}}/images/washington-selected.png)
  * Right click on the USA_adm1 layer and select *Save Selection As...*
      - Format: ESRI Shapefile
      - Save as: washington.shp
      - Encoding: UTF-8
      - CRS: 
          + Project CRS
          + Browse > *NAD83(HARN)/Washington South (ftUS) EPSG:2927*
  ![save-washington]({{site.baseurl}}{{ASSET_PATH}}/images/save-washington.png)
4. Load the new washington layer
  * Select *Add Vector Layer*
  * Browse to the new washington layer and click *Open*
5. Remove the USA_adm1 layer from the project 
  * Right click the layer in the table of contents
  * Select *Remove*
6. Add the DEM layer from the iPlant data store
  * In the left toolbar, select *Add Raster Layer*
  * Select *source_files/W140N90.DEM*
  ![dem-load]({{site.baseurl}}{{ASSET_PATH}}/images/dem-load.png)
7. Project the dem to EPSG:2927
  * In the top menu, go to Raster > Projections > Warp (Reproject)
  * Use the following options
    + Input File: *W140N90*
    + Output File: *secondary_files/dem-project.tif*
    + Source SRS: *EPSG:4326*
    + Resampling Method: *Near*
    + No data values: *0*
    ![project-dem]({{site.baseurl}}{{ASSET_PATH}}/images/project-dem.png)
8. Clip the dem to the shapefile
  * In the top menu, select Raster > Extraction > Clipper
  * In the window, set the following options:
    + Input file: dem-project.tif
    + Output file: dem-washington.tif
    + No data value: 0
    + Clipping Mode: Mask layer > washington
    + Load into canvas when finished
  ![dem-washington]({{site.baseurl}}{{ASSET_PATH}}/images/dem-washington.png)
9. Remove the W140N90 layer
  ![dem-washington-display]({{site.baseurl}}{{ASSET_PATH}}/images/dem-washington-display.png)
10. Create a slope surface
  * Input file: dem-washington
  * Output file: slope-washington.tif
  * Mode: Slope
  * Scale: 0.30
  * Load into canvas when finished
  ![create-slope]({{site.baseurl}}{{ASSET_PATH}}/images/create-slope.png)





### Data Analysis

Reclassify inputs:

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

Once we have created the slope rule file. We can select the r.reclass tool from the Processing Toolbox.

In the processing toolbox, select *GRASS commands* > *Raster* > > *r.reclass*

We will use the following settings for the reclassify tool:
  * Input Raster: *slope-washington*
  * File containing reclass rules: *slope-rules.txt*
  * Output raster layer: *slope-reclass.tif* (NOTE: select *Save to file...* or else QGIS will not create a permanent output)
  ![slope-reclass]({{site.baseurl}}{{ASSET_PATH}}/images/slope-reclass.png)


####Susceptibility

We will have to do some raster calculations to create the output data set. The classifications are taken from the California study[^2] and are as follows:

![landslide-key]({{site.baseurl}}{{ASSET_PATH}}/images/landslide-key.png)



####Precipitation

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


[^1]: http://www.usgs.gov/blogs/features/usgs_top_story/landslide-in-washington-state
[^2]: http://www.conservation.ca.gov/cgs/information/publications/Documents/MS58.pdf
[^3]: http://www.spatialreference.org/ref/epsg/2927
[^4]: https://lta.cr.usgs.goc/GTOPO30
[^5]: http://www.dnr.wa.gov/ResearchScience/Topics/GeosciencesData/Pages/gis_data.aspx
[^6]: http://wdfw.wa.gov/conservation/gap/land_cover_data.html
[^7]: http://www.esrl.noaa.gov/thredds/catalog/Datasets/cpc_us_precip/catalog.xml#Datasets/cpc_us_precip/RT
