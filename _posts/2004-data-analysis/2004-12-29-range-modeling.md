---
title: "Range Modeling"
layout: post
category: "Data Analysis"
tagline: "Creating a species range model"
tags: [range-modeling]
---

{% include JB/setup %}

# Species Range Modeling with Maxent

## Scope

This lesson will take us through the steps involved in creating a species range model using the Maximum Entropy probability distribution.

## Data Collection

This model will require a comma-separated list of species observation locations.

There are two viable inputs to the modeling algorithm:

CSV with species name, longitude, latitude

SWD file with raster values sampled from points

The SWD files make the Maximum entropy algorithm much more performant. 

We can use QGIS to create these files.

THe workflow is as follows:

Open QGIS:

Load a species CSV

Since the Species CSV comes in EPSG:4326, and the environmental variables come in a custom projection, we will need to repojrect the species layer.

The new projection has the following Proj4 definition:


+proj=laea +lat_0=15 +lon_0=-80 +x_0=0 +y_0=0 +ellps=WGS84 +toWGS84=0,0,0,0,0,0,0 +units=m +no_defs

To add this to QGIS you can go into the top menu:

Settings > Custom CRS...

Projection title: New World LAEA

In the box enter in the Proj4 Projection Definition.

In the output file: Specify a location for the output shapefile.

Add output to Map: true

Now that you have the points projected. We need to import the raster datasets.

