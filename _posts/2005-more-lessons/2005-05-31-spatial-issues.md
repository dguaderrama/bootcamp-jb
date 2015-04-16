---
title: Spatial Issues
layout: post
category: More Reading
---




### Spatial Dependence

> "Everything is related to everything else, but near things are more related than distant things" - Waldo Tobler

Tobler's First law of Geography is the fundamental basis of Spatial Analysis. 

This spatial dependence required the study of spatial effects and their influence on statistical studies.

> Spatial econometrics deals with methodological concerns that follow from the explicit consideration of *spatial effects*, such as spatial autocorrelation and spatial heterogeneity.[^3]

Spatial autocorrelation can be seen in clustering of values in a specific region, and the change of density in a larger extent.

----

###  Sorting and Indexes

Sorting data alphabetically and numerically comes pretty naturally. In fact, many databases come with the option sort either Ascending or Descending without specifying the data type. 

Sorting spatial data poses an interesting problem. Do you sort from North to south? West to East? What happens if you are sorting lines or polygons that overlap?

##### Indexing by Proximity

The R-Tree index was proposed by Antoine Guttman in 1984.

In order to handle spatial data efficiently, as required in computer aided design and geo-data applications, a database system needs an index mechanism that will help it retrieve data items quickly according to their spatial locations. An index based on objects' spatial location is desirable, but classical one-dimensional database indexing structures are not appropriate to multi-dimensional spatial searching.[^2] The R-Tree works by creating a series of heirarchical bounding boxes around the group of spatial features. 

<a title="By Skinkie, w:en:Radim Baca (Own work) [Public domain], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3AR-tree.svg"><img width="512" alt="R-tree" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/6f/R-tree.svg/512px-R-tree.svg.png"/></a>

----

###  Dimensions

Spatial Data requires at least 2 dimensions X and Y, which are traditionally held in Longitude, and Latitude. Spatial data can also require elevation(Z) and temporal (t) dimensions depending on the data. These dimension require novel methods for measure relationships between objects in multiple dimensions.

----

