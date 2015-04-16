---
title: "Common Data Types"
layout: post
category: Know the Basics
tagline: 
tags : [intro, spatial data, data types]
---

{% include JB/setup %}

#### **Pre-requisites: Installing QGIS, Is Spatial Special?**

#### **Objectives:**

----

##Common Data Formats

 Here are some common data formats you may encounter:

 * Shapefile: Stores point, line, and polygon data. This file type is actually made up of a collection of files with the following endings: These are mandatory: .shp, .shx, .dbf There are many others which are optional, including the important .prj file that describes the projection information for that data.
 * Geodatabase: Esri proprietary spatial database. Very easy to load data into, not so easy to extract.
 * GeoJSON: Encodes points, lines, and polygons (and collections of those) along with information about them using JSON (JavaScript Object Notation). This format is popular for web maps.
 * GeoTIFF: A standard that allows embedding geographic information in a TIFF file.
 * NetCDF: A multidimensional data format that allows for multiple variables covering 1 or more dimensions.
 * Arcinfo/Ascii grid: Proprietary format by Esri
 * Database: There are various databases that, with extensions, can hold geographic objects. Some notable examples are PostgreSQL with PostGIS, and SQLite with the SpatiaLite extension. It is important to look into the level of spatial support within a database before performing any analysis. For example, MySQL\'s spatial extension has geometry support, but the geometries are all defined by bounding boxes rather than the true geometry.

----
