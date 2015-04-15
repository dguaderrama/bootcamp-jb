---
title: "Exercise"
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

References: 

[^1]: http://www.usgs.gov/blogs/features/usgs_top_story/landslide-in-washington-state
[^2]: http://www.conservation.ca.gov/cgs/information/publications/Documents/MS58.pdf
[^3]: http://www.spatialreference.org/ref/epsg/2927
[^4]: https://lta.cr.usgs.goc/GTOPO30
[^5]: http://www.dnr.wa.gov/ResearchScience/Topics/GeosciencesData/Pages/gis_data.aspx
[^6]: http://wdfw.wa.gov/conservation/gap/land_cover_data.html
[^7]: http://www.esrl.noaa.gov/thredds/catalog/Datasets/cpc_us_precip/catalog.xml#Datasets/cpc_us_precip/RT
[^8]: http://gadm.org/country
