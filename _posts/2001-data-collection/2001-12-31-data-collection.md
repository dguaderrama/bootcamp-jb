---
layout: post
category : Data Collection
tagline: "Supporting tagline"
tags : [data collection, data sources]
---

# Data Collection

### Credible Data Sources

Not all spatial data is created equal, but there is a host of quality spatial data out there if you know where to look. 
Some elements to look at when evaluating the quality of a data product are:
  
  * Normalization - Do similar datasets have similar formats?
  * Accessibility - How can you access the data?
  * Accountability - Is the organization considered an authority of this type of data?

<br>

####Here are a few data sources to check if you are looking for some spatial data:


#### [Global Administrative Areas (GADM)](http://www.gadm.org) 
<a href="http://www.gadm.org/img/gadm2_adm1_low.png" alt="GADMN database of Global Administrative Areas"><img src="http://www.gadm.org/img/gadm2_adm1_high.png" width="250px"></a>

"GADM is a spatial database of the location of the world's administrative areas (or administrative boundaries) for use in GIS and similar software. Administrative areas in this database are countries and lower level subdivisions such as provinces,departmens bibhag, bundeslander,etc... GADM describes where these administrative areas are and for each area it provides some attributes, such as the name and variant names[^1]."

<br>
   
#### [United States Geological Survey (USGS)](http://www.usgs.gov)
<a href="http://commons.wikimedia.org/wiki/File:USGS_logo.png#mediaviewer/File:USGS_logo.png"><img alt="USGS logo.png" src="http://upload.wikimedia.org/wikipedia/commons/0/08/USGS_logo.png" height="81" width="220"></a>

The USGS has had a long history in mapping, and has provided quality topographic data since maps were hand-drawn. The USGS can provided detailed data delimited by Quadrangle or larger extents through FTP or their EarthExplorer portal. Some notable products include:

  + [National Elevation Dataset](http://ned.usgs.gov)
  + [Digital Orthophotography](http://online.wr.usgs.gov/ngpo/doq)
  + [National Hydrography Dataset](http://nhd.usgs.gov)

<br>

#### [National Aeronautics and Space Administration (NASA)](http://www.nasa.gov)
<a title="By National Aeronautics and Space Administration [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ANASA_logo.svg"><img width="128" alt="NASA logo" src="//upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/128px-NASA_logo.svg.png"/></a>

NASA is the go-to for remotely sensed data due to their history as a leader in satellite data and continued growth in data products offerings. Some useful data products are:

  + [Modern-era Retrospective Analysis for Research and Applications (MERRA)](http://gmao.gsfc.nasa.gov/merra)
  + [Moderate Resolution Imaging Spectoradiometer (MODIS)](http://modis/gsfc.nasa.gov)
  + [Landsat-8](http://landsat.usgs.gov/landsat8.php)
  + [Global Change Master Directory](http://gcmd.gsfc.nasa.gov)

<br>

#### [National Oceanic and Atmospheric Administration (NOAA)](http://www.noaa.gov)
<a href="http://commons.wikimedia.org/wiki/File:NOAA.png#mediaviewer/File:NOAA.png"><img alt="NOAA.png" src="http://upload.wikimedia.org/wikipedia/commons/3/3a/NOAA.png" height="145" width="145"></a>

NOAA provides a variety of data products for weather and climate. NOAA has an extensive Thredds catalog of climate data available at http://www.esrl.noaa.gov/psd/thredds/calatlog/Datasets/catalog.xml using the OPeNDAP protocol.

  + [Climate Prediction Center](http://www.cpc.ncep.noaa.gov)

<br>

#### [U.S Census Bureau](http://www.census.gov)
<a href="http://commons.wikimedia.org/wiki/File:Census_Bureau_seal.svg#mediaviewer/File:Census_Bureau_seal.svg"><img alt="Census Bureau seal.svg" src="http://upload.wikimedia.org/wikipedia/commons/6/6b/Census_Bureau_seal.svg" height="145" width="145"></a>

The U.S. Census is the authority on national demographic data and creates standardized datasets for the nation on both census tract and block level.

  + [Topologically Integrated Geographic Encoding and Referencing (TIGER) Products](http://www.census.gov/geo/maps-data/data/tiger.html) 
  : TIGER products are spatial extracts from the Census Bureau's MAF/TIGER database containing features such as roads, railroads, rivers, as well as legal and statistical geographic areas. The Census Bureau offers (these products) in several file types[^2]."

<br>

#### Local and regional governments
 Most states maintain repositories of spatial data characteristic or pertinent to their scope. Some organizations to look for would be state geologic surveys, natural resource departments, city and county governments.

### Consumable Services

There is a variety of methods to access spatial data. The most obvious one is downloading a dataset to local machine. This can be the easiest option if the dataset is small enough to download quickly, and the data repository is easy to find. If this is not the case, there are several other options available:
  
  [Web Feature Service (WFS)](http://docs.opengeospatial.org/is/09-025e2/09-025r2.html#1) - Useful for modifying features in remote datasets
  : The WFS represents a change in the way geographic information is created, modified, and exchanged on the Internet. Rather than sharing geographic information at the file level using the File Transfer Protocol(FTP), the WFS offers direct fine-grained access to geographic information at the feature and feature property level. Web features services allow clients to only retrieve or modify the data they are seeking, rather than retrieving a file that contains the data they are seeking and possibly much more[^3].
<br><br>

  [Web Map Service (WMS)](http://www.opengeospatial.org/standards/wms) - Useful for visualizing remote datasets 
  : The Web Map Service Interface Standard provides a simple HTTP interface for requesting geo-registered map images from one or more distributed geospatial databases. The WMS response will return one or more geo-registered map images (JPEG, PNG, etc) to be display in a browser application[^4].
<br><br>

  [Web Processing Service (WPS)](http://www.opengeospatial.org/standards/wps) - Utilizes remote resources for computation
  : THe WPS Standard provides rule for standardizing inputs and outputs for geospatial processing services, such as polygon overlay. The standard also defines how a client can request the execution of a process and how the output of the process is handled[^5]. 
<br><br>

  [OPeNDAP](http://www.opendap.org)
  : OpeNDAP, the original developer of the Data Access Protocol, allows users to access data over the internet[^6]. OPeNDAP software requests data through URL. OPeNDAP services allow users to query and subset datasets that would be too large to download/manipulate locally. There are a variety of software programs that are OPeNDAP enabled, which allows users to combine local and remote data for visualizations. 

A few examples of these applications are:

  + [Panoply](http://giss.nasa.gov/tools/panoply)
  + [Integrated Data Viewer](http://unidata.usr.edu/software/idv)
  + [GrADS](http://www.iges.org/grads)


[^1]: http://www.gadm.org 
[^2]: http://www.census.gov/geo/maps-data/data/tiger.html
[^3]: http://docs.opengeospatial.org/is/09-025e2/09-025r2.html#1
[^4]: http://www.opengeospatial.org/standards/wms
[^5]: http://www.opengeospatial.org/standards/wps
[^6]: http://www.opendap.org
