--- 
title: "Projections"
layout: post
category: Intro
tags: [intro, projection]
---

{% include JB/setup %}

##Projections <a name="projections"></a>
Projections characterize spatial data by setting coordinate reference systems for each data set.

Each projection is defined on top of a geographic coordinate system or spheroid based off of two ellipsoids, major and minor axes. These geographic coordinates systems deliver the coordinates in degrees and account for the fact that the earth is not a perfect sphere.
 will convert the 3d spheroid of the earth into a 2-dimensional representation. Each projection type utilitizes a different technique to project the earth\'s image onto a plane. 

####Projections can come in a variety of forms:

#####Conic

<a href="http://commons.wikimedia.org/wiki/File:Usgs_map_lambert_conformal_conic.PNG#mediaviewer/File:Usgs_map_lambert_conformal_conic.PNG"><img alt="Usgs map lambert conformal conic.PNG" src="http://upload.wikimedia.org/wikipedia/commons/6/62/Usgs_map_lambert_conformal_conic.PNG"></a>
<br><br>

#####Azimuthal

<a title="By User:Quadell, re-coloring US Government USGS image. [Public domain or Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AUsgs_map_azimuthal_equidistant.PNG"><img alt="Usgs map azimuthal equidistant" src="http://upload.wikimedia.org/wikipedia/commons/6/64/Usgs_map_azimuthal_equidistant.PNG"/></a>
<br><br>

#####Cylindrical

<a title="By Ciphers (Own work) [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AMercator_projection_ar.png"><img width="512" alt="Mercator projection ar" src="//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Mercator_projection_ar.png/512px-Mercator_projection_ar.png"/></a>
<br><br>

#####Sinusoidal

<a title="By Ciphers (Own work) [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ASinusoidal_projection_ar.png"><img width="512" alt="Sinusoidal projection ar" src="//upload.wikimedia.org/wikipedia/commons/thumb/1/12/Sinusoidal_projection_ar.png/512px-Sinusoidal_projection_ar.png"/></a>
<br><br>

#####Polyhedral

<a title="By Chris Rywalt (POVRay) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC-BY-SA-3.0 (http://creativecommons.org/licenses/by-sa/3.0/)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ADymaxion_2003_animation_small1.gif"><img width="256" alt="Dymaxion 2003 animation small1" src="//upload.wikimedia.org/wikipedia/commons/b/bb/Dymaxion_2003_animation_small1.gif"/></a>
<br><br>

####Each of these projections also has a property:

#####Conformal

[image of conformal]

#####Equal Area
Preserves the area relationships between regions. This maintain the proper ratio of area between regions. An example of this is the Mollweide projection.

#####Compromise
[image of compromise]

#####Equidistant
Preserves distance between points

#####Gnomonic
Often used in polyhedral or interrupted 

<br>

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

## Exercise

#### Reprojecting a raster




