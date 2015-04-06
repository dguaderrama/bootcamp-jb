--- 
title: "Projections"
layout: post
category: Intro
tags: [intro, projection]
---

{% include JB/setup %}

####**Pre-requisites: Is Spatial Special, Vectors and Rasters**

####**Objectives:**
  - Understand purpose of using a projection on a map
  - Recognize a few projection types

----

#Projections <a name="projections"></a>
Projections characterize spatial data by setting coordinate reference systems for each data set.

Each projection is defined on top of a geographic coordinate system or spheroid based off of two ellipsoids, major and minor axes. These geographic coordinates systems deliver the coordinates in degrees and account for the fact that the earth is not a perfect sphere.
 will convert the 3d spheroid of the earth into a 2-dimensional representation. Each projection type utilitizes a different technique to project the earth\'s image onto a plane. 

#### Distortion

Since projections attempt to represent the 3-dimensional globe on a 2-dimensional plane, they will all suffer from some level of distortion. It is important to choose a projection which preserves the elements you are interested in studying.

----

###Projection Properties

**Conformal**

Also known as *fidelity of shape*, these projections preserve shape. This means that scale distortion must be the same in all directions and each parallel must cross every meridian at right angles. These projections are important for navigational and large-scale mapping[^1]
Examples include Mercator, and Lambert Conformal Conic.

**Equal Area**

Preserves the area relationships between regions. This maintain the proper ratio of area between regions. An example of this is the Mollweide projection. These projections are useful for statistical comparisons.

**Equidistant**

Preserves the proportional distances between any two points from their spherical distances.


----

### Geometric Projection Types

**Conic**

<a href="http://commons.wikimedia.org/wiki/File:Usgs_map_lambert_conformal_conic.PNG#mediaviewer/File:Usgs_map_lambert_conformal_conic.PNG"><img alt="Usgs map lambert conformal conic.PNG" src="http://upload.wikimedia.org/wikipedia/commons/6/62/Usgs_map_lambert_conformal_conic.PNG"></a>
<br>

Conic projections are created by projecting part of a sphere onto a cone. Conic projections tend to be useful for representing data in temperate climates due to their location. Conicn projections are not useful for representing global phenomena due to their construction.

**Azimuthal**

<a title="By User:Quadell, re-cml projectionloring US Government USGS image. [Public domain or Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AUsgs_map_azimuthal_equidistant.PNG"><img alt="Usgs map azimuthal equidistant" src="http://upload.wikimedia.org/wikipedia/commons/6/64/Usgs_map_azimuthal_equidistant.PNG"/></a>
<br>
Azimuthal projections are created by flattening a side of the sphere from a reference point. Azimuthal projections are useful for mapping polar data.

**Cylindrical**

<a title="By Ciphers (Own work) [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AMercator_projection_ar.png"><img width="512" alt="Mercator projection ar" src="//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Mercator_projection_ar.png/512px-Mercator_projection_ar.png"/></a>
<br>

Cylindrical projections are created by projection a sphere onto a cylinder. Cylindrical projections suffer the least distortion along the line that it intersects the sphere, which is often around the Equator. This makes cylindrical projections useful for mapping tropical data. Examples include Mercator and Universal Transverse Mercator. 


**Polyhedral**

<a title="By Chris Rywalt (POVRay) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ADymaxion_2003_animation_small1.gif"><img width="256" alt="Dymaxion 2003 animation small1" src="//upload.wikimedia.org/wikipedia/commons/b/bb/Dymaxion_2003_animation_small1.gif"/></a>
<br>

Polyhedral projections, also known as interrupted projections seek to minimize global distortion by tearing the sphere at specific areas. A common method for creating polyhedral projections is to coerce the sphere into a 3-dimensional geometric object such as a cube which is the then unraveled. Some examples include Dymaxion and Waterman's butterfly.

<br>

----

### Checking the projection

It is important to check the projection of your data to make sure they share the same projection prior to performing any spatial analysis. 

  <a href="http://www.gdal.org" target="new">![Using GDAL to check projection]({{site.baseurl}}{{ASSET_PATH}}/images/gdalinfo.png)</a>

<a href="http://spatialreference.org" target="new">SpatialReference.org</a> is an extremely useful resource that houses definitions for all official projections in a variety of formats. This is a great place to find proj4 strings. 

  <a href="http://spatialreference.org" target="new">![SpatialReference.org: EPSG:4326]({{site.baseurl}}{{ASSET_PATH}}/images/spatialreference.png)</a>

Since there are a few thousand different projections, with their own area of interest, it is likely that you will come upon datasets with different projection in your project. The easiest way to resolve projection disputes is to decide on the projection for your project before gathering data and save the proj4 string assigned to the projection. This string will allow you to project your datasets to the proper coordinate reference system.<br><br>

<table style="margin: 0px 25px;">
<tr>
<td><h5>EPSG:4326 (WGS84)</h5></td>
</tr>
<tr>
<td><code>+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs</code></td>
</tr>
<tr>
<td><br></td>
</tr>
<td><h5>Custom proj4</h5></td>
<tr>
<td><code>+proj=lcc +lat_1=45.89893890000052 +lat_2=47.69601440000037 +lat_0=46.8 +lon_0=2.33722917 +x_0=600000 +y_0=200000 +a=6378249.145 +b=6356514.96582849 +pm=2.337229167 +units=m +no_defs</code></td>
</tr>
</table>

<br>

_NOTE: When reprojecting a raster, you should also resample your raster to ensure that the cells have the same width and height. The cells will distort in the new projection and most GIS software will refuse to read a raster with irregular cells._




[^1] http://www.progonos.com
