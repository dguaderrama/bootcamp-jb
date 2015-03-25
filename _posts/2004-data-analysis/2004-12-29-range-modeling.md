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

Before we load in any data we should set the project projection. 

To add this to QGIS you can go into the top menu:

Settings > Custom CRS...

Click *Add new CRS* to create a new custom projection

{: .center }

![add-Crs]({{site.baseurl}}/{{ASSET_PATH}}/images/addNewCrs.png)

In the box labeled *Name:* enter *New World LAEA*

Under parameters enter the following Proj4 string:
{% highlight bash %}

+proj=laea +lat_0=15 +lon_0=-80 +x_0=0 +y_0=0 +ellps=WGS84 +toWGS84=0,0,0,0,0,0,0 +units=m +no_defs
{% endhighlight %}

The window should look like this:

![custom-CRS]({{site.baseurl}}/{{ASSET_PATH}}/images/customCrs.png)


Click OK to exit the window

To make set the project projection, in the top menu select Project > Project Properies

You will need to select *Enable 'on the fly' CRS transformation* to set the projection.

You can either scroll through the choices in the second window, or filter them by the string "New World"

Select the projection in the second window and Click *Apply*

![set-projection]({{site.baseurl}}{{ASSET_PATH}}/images/setProjection.png)


## Data Collection

This model will require a comma-separated list of species observation locations.

There are two viable inputs to the modeling algorithm:

CSV with species name, longitude, latitude

SWD file with raster values sampled from points

Since the SWD files make the Maximum entropy algorithm much more performant, we will create one from a regular csv.

We can use QGIS to create these files.

The workflow is as follows:


Load a species shapefile:

We will be loading the layers for this exercise using the QGIS Irods plugin.

<a href="http://irods.org">*iRods*</a>

To install the plugin, in the Top Menu go to Plugins > Manage and Install Plugins...

In the left sidebar click *Get more*

You can either scroll through the plugins or search for *iRods*

![irods-Plugin]({{site.baseurl}}/{{ASSET_PATH}}/images/irodsPlugin.png)

You can install the plugin by clicking *Install plugin* and you should receive this message

![plugin-Installed]({{site.baseurl}}/{{ASSET_PATH}}/images/pluginInstalled.png)

You can now click on *Installed* in the left sidebar to ensure that the iRods plugin is both installed and enabled.

![plugin-enabled]({{site.baseurl}}/{{ASSET_PATH}}/images/pluginEnabled.png)

If you have already set up your iPlant account and were given permissions to the Bootcamp dataset continue to the next steps. 

If not, make sure to [register for iPlant access](http://user.iplantcollaborative.org), and request access to the data store.

Once, you have access to the data store you can open up the iRods plugin to view the available datasets.

![irods-Logo]({{site.baseurl}}/{{ASSET_PATH}}/images/irodsLogo.png)

Once you click on the iRods icon, a window should show up where you can enter in your iplant account credentials

![irods-Login]({{site.baseurl}}/{{ASSET_PATH}}/images/irodsLogin.png)

This should open up a window with your local files, to get to the Bootcamp files, you will have to set the directory using *Set Datastore*

In the bottom right of the window click *Set Datastore*

In the next prompt, enter "/iplant/home/shared/aegis/Spatial-bootcamp"

![set-datastore]({{site.baseurl}}/{{ASSET_PATH}}/images/setDatastore.png)

Click set to close the dialog.

You should see a new window with a series of directories.

For this exercise our files will be found under "Range-model"

We can use the Abies amabilis shapefile titled: Abies_amabilis.shp

![range-model-files]({{site.baseurl}}/{{ASSET_PATH}}/images/rangeModelFiles.png)

The layer name should come up in the left Table of Contents and the points should show up on the center panel.

![abies-import]({{site.baseurl}}/{{ASSET_PATH}}/images/abiesImport.png)

Since the Species CSV comes in EPSG:4326, and the environmental variables come in a custom projection, we will need to repojrect the species layer.

The new projection has the following Proj4 definition:

Now that you have the points projected. We need to import the raster datasets.

These files will be stored in the sub-directory *Range-model/env*

They will need to be downloaded however, so the gdal drivers can merge them.

!!! Document the steps to download them either through the data store or from the irods plugin if you can get it to recognize the ascii raster !!!

In order to merge the rasters, we will need to load all of the environmental factors locally.
