---
title: "Consumable Services"
layout: post
category : Data Collection
tagline: "accessing spatial data"
tags : [data collection, wfs, wms, wps, opendap]
---

# Consumable Services

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
