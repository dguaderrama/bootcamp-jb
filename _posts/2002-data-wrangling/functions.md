---
layout: post
category : General Spatial Functions
tagline: "Supporting tagline"
tags : [spatial functions]
---

# General Spatial Functions


####Vector Functions



  * Join - This will merge features from one layer to another by either a spatial proximity, query or intersection. Some spatial joins include:
    - Join school attendance ratings to census blocks
    - Join income demographic data to store locations
  * Intersect - Instersect extracts overlapping features from two layers. This is a spatial form of the SQL inner join. Examples of intersections:
      - All rivers within washington state boundary
      - Residential areas with past landslide

  * Union - Merges the two datasets spatial extents(logical AND). This comes in handy when aggregating datasets from that may border each other or occur in different extents.  Examples:
    - Merging census data for two states in a single layer (Useful for studying phenomena that do not respect political boundaries)
    - Merging state boundaries for Canada, U.S. and Mexico into a North American dataset (GADM makes this a breeze)
  * Disjoint - Extracts the areas only held by one layer or another and excludes overlapping areas(logical OR).
    - WHY IS THIS USEFUL?
  * Buffer - This will create an output holding areas covered by a designated radius of the layer's features. This allows you to analyze phenomena by proximity.
    - Instagram posts vs distance to local eatery
    - Tweets vs proximity to sporting event
  * Convex Hull - This creates the smallest polygon containing a given set of features
    - Bounding boxes, circles
    - Collision detection
  
####Raster Functions
  * Slope - This function will calculate a slope surface given a raster holding an elevation model
  * Aspect - This outputs a surface holding values 0-360 referencing the azimuth of the given surface
  * Raster Calculator - Performs a designated mathematical equation on all values within a raster. This can also be used to combine/difference rasters.
  * Interpolation - Useful for resurfacing a dataset. This can also be used to create a continuous surface from a point dataset.
  * Zonal Statistics -
  * Reclassify - Useful for creating discrete value categories from continous values(e.g.float data) also useful for creating presence absence datasets.
