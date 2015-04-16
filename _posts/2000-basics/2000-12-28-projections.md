--- 
title: "Reference Systems"
layout: post
category: Know the Basics
tags: [intro, projection]
---

{% include JB/setup %}

####**Pre-requisites: Is Spatial Special, Vectors and Rasters**

####**Objectives:**
  - Understand purpose of using a projection on a map
  - Recognize a few projection types


### Coordinates

Data becomes spatial when it is assigned a location or coordinates. These coordinates allow us to reliably locate, transform and manipulate the data based on its location. In mathematics, coordinates are commonly represented using X and Y values on a chart.

<a title="By Cartesian-coordinate-system.svg: K. Bolino derivative work: F l a n k e r (Cartesian-coordinate-system.svg) [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ACartesian_coordinate_system_(comma).svg"><img width="256" alt="Cartesian coordinate system (comma)" src="{{site.baseurl}}{{ASSET_PATH}}/images/projections/Cartesian_CS.svg"/></a>

Spatial data uses X and Y coordinates as well, however the spatial coordinates are related to a place on the earth. The X and Y values in this case often refer to <b>Latitude</b> and <b>Longitude</b>.


### Latitude and Longitude

<a title="By Latitude_(PSF).png: Pearson Scott Foresman, donated to the Wikimedia Foundation derivative work: Gregors (talk) 08:13, 27 March 2011 (UTC) (Latitude_(PSF).png) [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ALatitude_lines.svg" ><img width="512px" alt="Latitude lines" class="center" src="{{site.baseurl}}{{ASSET_PATH}}/images/vector/Latitude_lines.svg"/></a>

<br>
<a title="By Longitude (PSF).png: Pearson Scott Forman derivative work: Gregors (Longitude (PSF).png) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ALongitude_blue.svg"><img width="512px" alt="Longitude lines" src="{{site.baseurl}}{{ASSET_PATH}}/images/vector/Longitude_lines.svg"/></a>

<br>
----

### Projections <a name="projections"></a>

<a title="By Djexplo (Own work) [CC0], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ALatitude_and_Longitude_of_the_Earth.svg">![earthCRS]({{site.baseurl}}/{{ASSET_PATH}}/images/earthCRS.png)</a>

Projections characterize spatial data by setting coordinate reference systems for each data set.

Each projection is defined on top of a geographic coordinate system or spheroid based off of two ellipsoids, major and minor axes. These geographic coordinates systems deliver the coordinates in degrees and account for the fact that the earth is not a perfect sphere.
 will convert the 3d spheroid of the earth into a 2-dimensional representation. Each projection type utilitizes a different technique to project the earth\'s image onto a plane. 

#### Distortion

Since projections attempt to represent the 3-dimensional globe on a 2-dimensional plane, they will all suffer from some level of distortion. It is important to choose a projection which preserves the elements you are interested in studying.

----

#### Coordinate Reference Systems

 A *Coordinate Reference System* is built on top of a *coordinate system*. A *coordinate system* is a set of mathematical rules for specifying how coordinates are to be assigned to each point, also known as a *projection*. A *coordinate reference system* is a coordinate system that is related to the real world by a datum, this can also be known as a *geographic coordinate system* or *spatial reference system*.

<a title="By Geek3 (Own work) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ASphere_wireframe.svg">![coordinateGrid]({{site.baseurl}}/{{ASSET_PATH}}/images/coordinate-grid.png)</a>

Projections are another name for projected coordinate systems. These projected coordinate systems compose a family of Coordinate Reference Systems. 

Projected coordinate systems are based off of Geodetic Coordinate Systems. These Geodetic coordinate systems are ellipsoidal models aimed at representing the aspherical nature of the earth.

----

#### Earth as a Geoid

<a title="By NASA/JPL/University of Texas Center for Space Research. [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AEarth_gravity.png">![geoid]({{site.baseurl}}/{{ASSET_PATH}}/images/geoid.png)</a>

Although we normally see the earth represented as a sphere, its shape is actually more irregular. The earth has an equatorial bulge and various other undulations due to tectonics, volcanics and the earth's rotation. 

The changes in the surface mass are the subject matter of Geodesy. Geodesists use differences in the vertical direction of gravity along with crustal, tidal, and polar motion to determine exact measurements of the Geoid. Geometric computations can become unwieldy processes due to the complicated nature of the Geoid surface. In order approximate the geoid while making geometric calculation feasible, reference ellipsoids were calculated.

----

### Reference Ellipsoid

<a title="By NASA/JPL (http://sealevel.jpl.nasa.gov/gallery/posters.html) [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AJason-1_measurement_system.gif">![geoid-measure]({{site.baseurl}}/{{ASSET_PATH}}/images/geoid-measure.gif)</a>

Reference ellipsoids have evolved over the years, moving from regional approximations to more precise global systems.

Regional ellipsoids like the North American Datum of 1927 which minimized distortion for the contiguous United States at the expense of more distant regions.

The modern reference ellipsoid, **WGS 84** was developed using satellite measurements and past Geodetic System parameters, and has been the reference ellipsoid used by the Global Positioning System. 

Most modern projections will use WGS 84 as the underlying reference ellipsoid, but it is important to check that your projection is defined correctly if you are dealing with old datasets. 

----

#### Central Meridian

Greenwich is the standard central meridian used in global projections. This point is given the value of 0&#176; Longitude and serves as the origin the Global Positioning System. This delineation also leaves decides the use of Greenwich Mean Time as the standard time.


<a title="By Apletters (Own work) [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0) or GFDL (http://www.gnu.org/copyleft/fdl.html)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AMeridian-at-Greenwich.jpg">![greenwichMeridian]({{site.baseurl}}/{{ASSET_PATH}}/images/greenwich-meridian.jpg)</a>


The Greenwich meridian has a monument dedicated to it in several cities.


###Projection Properties

**Conformal**

<a title="By USGS, Mysid [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ALambert_conformal_conic.svg">![conformalConic]({{site.baseurl}}/{{ASSET_PATH}}/images/conformal_conic.svg.png)/a>

Also known as *fidelity of shape*, these projections preserve shape. This means that scale distortion must be the same in all directions and each parallel must cross every meridian at right angles. These projections are important for navigational and large-scale mapping[^1]
Examples include Mercator, and Lambert Conformal Conic.

**Equal Area**

<a title="By Kai Krause [CC0], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ATrue_size_of_Africa.jpg">![trueSizeOfAfrica]({{site.baseurl}}/{{ASSET_PATH}}/images/True_size_of_Africa.jpg)</a>

Preserves the area relationships between regions. This maintain the proper ratio of area between regions. An example of this is the Mollweide projection. These projections are useful for statistical comparisons.

**Equidistant**

Preserves the proportional distances between any two points from their spherical distances.


----

### Geometric Projection Types

**Conic**

<a title="By Koenb at Dutch Wikipedia (Original text: productie van de afbeelding uit het .shp-bestand: Koenb) [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AWorld_borders_lambertcc000045.png">![worldBordersLambert]({{site.baseurl}}/{{ASSET_PATH}}/images/World_borders_lambert.png)</a>

<br>

Conic projections are created by projecting part of a sphere onto a cone. Conic projections tend to be useful for representing data in temperate climates due to their location. Conicn projections are not useful for representing global phenomena due to their construction.

**Azimuthal**

<a title="By RokerHRO (Own work) [GFDL (http://www.gnu.org/copyleft/fdl.html) or CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AAzimuthal_Equidistant_S90.jpg">![azimuthalEquidistant]({{site.baseurl}}/{{ASSET_PATH}}/images/Azimuthal_Equidistant.jpg)</a>

<br>
Azimuthal projections are created by flattening a side of the sphere from a reference point. Azimuthal projections are useful for mapping polar data.

**Cylindrical**

<a title="By KoenB (Own work) [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ACilinderprojectie-constructie.jpg">![cylindricalProjection]({{site.baseurl}}/{{ASSET_PATH}}/images/cylindrical_projection.jpg)</a>


<br>

Cylindrical projections are created by projection a sphere onto a cylinder. Cylindrical projections suffer the least distortion along the line that it intersects the sphere, which is often around the Equator. This makes cylindrical projections useful for mapping tropical data. Examples include Mercator and Universal Transverse Mercator. 


**Polyhedral**

<a title="By Koenb at nl.wikipedia (Original text : KoenB) [Public domain], from Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3APolyederprojectie-6-rendered.png">![polyhedralProjection]({{site.baseurl}}/{{ASSET_PATH}}/images/Polyhedral_projection.png)</a>

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
