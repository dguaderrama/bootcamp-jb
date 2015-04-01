---
layout: post
category : Cartography
tagline: "Designing maps"
tags : [cartography, map design, colorbewer]
---

{% include JB/setup %}

## Cartography fundamentals

Set aside your analytical skills and put on your creativity hat.

Time to get creative.

Effectively communicate your data.

Cartography should be fun but don't create more work for yourself, keep it simple.

## Elements of effective cartography

Including necessary information leads to effective cartography.

Your audience must understand what you're trying to convey.

 * Legend
 * Colors
 * Fonts
 * Labels
 * Attribution
 * Scale
 * North arrow

## Colors are important

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
