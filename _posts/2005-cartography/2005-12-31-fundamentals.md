---
layout: post
category : Cartography
tagline: "Designing maps"
tags : [cartography, map design, colorbewer]
---

{% include JB/setup %}

## Cartography fundamentals

Map-making has historically  been both a science and an art. For visualizing scientific data on
maps, we now have new technologies that make it easy to create beautiful data visualizations.

Using the principles of art and design, we can take data and display it on the map as
easily understandable information that the general public can relate to.

Whether your goals are to publish, share your research, or reach a wider audience,
a good map design will make your data more powerful.

In practicing cartography, it is important to remember that often, the best
design is rooted in simplicity. The main focus should be the information.

## Elements of effective cartography

To help your audience understand what you're trying to convey,
the following elements can be included with your map.

 * Legend - The most important element for understanding the data, the legend should concisely explain what is on the map.
 * Labels - Labels can help your audience identify features on the map like cities, roads, and lakes, or they can serve to point out important areas.
 * Attribution - An attribution is often necessary when using geographic information, whether it be for the data itself,
 the map that is underneath the data, or the design elements included.
 * Scale - Although scale is often left out of zoomable web maps, it is an important element for static maps. The scale bar can be simple and near the bottom of your map.
 * North arrow

## Color

Colors can add meaning and beauty to your data, but it is important to select an appropriate color scheme for your goals. For example, for a choropleth map, you should use a monochromatic color scheme.

Color blindness is important factor when selecting color schemes.

[ColorBrewer 2.0](http://colorbrewer2.org/) is an excellent cartography tool for selecting colors and saving time. It considers colorblindness which should always be an important factor when selecting color schemes.

Grey scale maps for non-color-based printed maps.

Tools like [paletton.com](http://paletton.com/) are simply a color wheel that help the color picking process. Paletton.com has options such as monochromatic, adjacent colors, triad, and tetrad that pick colors based on a single color selection. This is actually meant for web designing but has the same principle of color theory.

<a href="http://paletton.com" target="_blank" alt="Spatial Data Bootcamp: Paletton.com color wheel">![Spatial Data Bootcamp: Paletton.com color wheel]({{site.baseurl}}{{ASSET_PATH}}/images/paletton.jpg)</a>


## Mapbox Suite

MapBox created the open source tool [TileMill](https://www.mapbox.com/tilemill/), and has since also released
[MapBox Studio](https://www.mapbox.com/design/) which has some more design features for creating map styles.
However, TileMill has what we need, so we focus on it for now.

>TileMill

What made TileMill popular was the ability to turn maps from many formats into tiles. The map is like one big picture,
which is then split up into squares. This speeds up the process of displaying maps on the web.

Besides being an easy way to make tiles, what makes TileMill great for visualizing our data is 'CartoCSS', which is just like CSS (Cascading Style Sheets), but for maps! You can type CartoCSS code directly into the TileMill desktop application.

After installing TileMill, the first thing you see when you open it is the projects page.

![TileMill First Opened]({{site.baseurl}}{{ASSET_PATH}}/images/tilemill/tilemillopen.png)




## QGIS Cartography

> basics of graphic design and exporting maps - print or web-based

> walkthrough of carto in qgis

<br>

----

<br>

References

[^1]:

[^2]:
