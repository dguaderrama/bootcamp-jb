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
| Land cover           || Washington Dept. of Fish & Wildlife[^6]   |
| Landslide Inventory  || Washington Dept. of Natural Resources[^5] |
| Daily Precipitation  || Earth System Research Laboratory(NOAA)[^7]| 

The DEM can be downloaded from ftp://edcftp.cr.usgs.gov/data/gtopo30/global/w140m90.tar.gz

tar -zxvf w140m90.tar.gz


### Data Wrangling

SEE DATA PREP

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


####Susceptibility

We will have to do some raster calculations to create the output data set. The classifications are taken from the California study[^2] and are as follows:

![landslide-key]({{site.baseurl}}{{ASSET_PATH}}images/landslide-key.png)



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
