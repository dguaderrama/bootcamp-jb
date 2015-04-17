---
title: "Census Exercise"
layout: post
category : Clean your Data
tagline: "Supporting tagline"
tags : [applications, qgis, quantumgis]
---

{% include JB/setup %}




##### **4. Join Census Housing Data to TIGER Census Tracts**

1. Import Census Tracts shapefile **tl_2014_53_tract** ![Spatial Data Carpentry: Census Join - Add vector layer]({{site.baseurl}}{{ASSET_PATH}}/images/qgis/add-vector.png).<br>
![Spatial Data Carpentry: Census Join - Washington Census tracts]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-1.png)
1. Rename tl_2014_53_tract to census-tracts *Right-click layer > Rename*.
1. Open the tract **Attribute table** and leave it open: *Right-click tract layer > Attribute table*<br>
![Spatial Data Carpentry: Census Join - Washington tract attributes]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-2.png)
1. If you haven't yet, download your Census data and return to this step. SEE *ENTER EXERCISE NUMBER AND LINK HERE*<br>
1. Navigate to the Census Housing Units directory. You should have a soure_files directory with Census Housing Units, Census Home Values, and Census Tracts zip files and unzipped folders containing data.<br>
![Spatial Data Carpentry: Census Join - Washington Census data]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-3.png)
1. *Rename ACS_13_5YR_B25001_with_ann.csv to housing-units.csv*
![Spaital Data Bootcamp: Census Join - Rename housing data CSV]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-4.png)
1. Open housing-units.csv and inspect the data for columns to use for our joins. HINT: it's GEOID (tract shapefile) and GEO.id2 (ACS CSVs). We can only join data (tabular join) with *exact same* columns. The Census provides these columns for this purpose (I'm sure other purposes as well). See the tables below:<br>
![Spatial Data Carpentry: Census Join - Locate similar columns]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-5.png)
1. Remove the second row containing the annotations. Delete the columns: GEO.id, GEO.display-lable, and HD02_VD01. For the purposes of this exercise, we do not need the removed columns. Our objective is to join data and visualize (with minimal data wrangling). In LibreOffice, highlight the row/column, right-click and Delete Selected Columns. Excel should be the same/similar. Command-line users, AWK is an easy solution. It should look like the file below:<br>
![Spatial Data Carpentry: Census Join - Delete housing data annotation]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-6.png)
1. Rename header HD01_VD01 to TotalUnitsHome. Save your document, be sure it's stored as a Text CSV ![Spatial Data Carpentry: Census Join - Save as Text CSV]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-8.png). Excel users may have to select Text CSV from a drop-down list (I'll check back with this). Renaming the headers reduced confusion down the road. Also, notice how there are no spaces in the header name. Removing (or not having) spaces is in the top 10 list of best naming convention practices (on all computer systems.. everywhere in the digital world.. you should never have spaces in your file names or directories). Close the document.<br>
![Spatial Data Carpentry: Census Join - Rename HD01_VD01 to MeanValueHome]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-7.png)
1. Do the same for the Home Values CSV:
* Navigate to document
* Rename ACS_13_5YR_B25077_with_ann.csv to home-values.csv
* Delete second row with annotations
* Delete columns: GEO.id, GEO.display-label, HD02_VD01
* Rename HD01_VD01 to MedianValueHome
* Save your document in Text CSV format ![Spatial Data Carpentry: Census Join - Save as Text CSV]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-8.png)<br>
![Spatial Data Carpentry: Census Join - Wrangle Home Values CSV]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-9.png)
1. You're not quite finished with wrangling your data yet. If you have a quick look at your home-values.csv (it should still be open, Simon didn't say close!), you'll notice there are some invalid fields - number fields that contain non-numeric values. Lines 501 and 502 read 1,000,000+ and should be changed to 1000000.<br>
![Spatial Data Carpentry: Census Join - Wrangle Home Values CSV]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-10.png)
There are some median home value records with '-' and if you read your metadata you would know that:<br><br>*An '-' entry in the estimate column indicates that either no sample observations or too few sample observations were available to compute an estimate, or ratio of medians cannot be calculated because of one or both of the median estimates falls in the lowest interval or upper interval of an open-ended distribution.*<br><br>Let's cleanse this now:<br> LibreOffice and Excel users, **Find and Replace '-' (without single quotes) with NULL**<br>VIM (or similar) users: **%s#-#NULL#g**<br><br>Also, after making these changes the data type of the incorrect records have not changed - they're still string/text fields in a numeric universe (only in LibreOffice/Excel, however). We will instruct QGIS on how to read the column data types with a .CSVT. Be sure to save your home-values.csv in Text CSV format ![Spatial Data Carpentry: Census Join - Save as Text CSV]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-8.png).
![Spatial Data Carpentry: Census Join - Wrangle Home Values CSV]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-11.png)
1. Just wait right there, one does not simply join a string (tract's GEOID) to a number (ACS's GEO.ids). We now have to create our CSVTs (one for each home-values.csv and housing-units.csv). As a reminder, these indicate to QGIS the data types of each column of repsective CSVs. Our goal here is to join GEOID from tracts (shapefile) to GEO.id2 from home-values.csv and housing-units.csv. Go back into QGIS and open the census-tracts properties and navigate to **Fields**. Locate GEOID in the table and notice its **Type name** - **String**. With less wrangling we can make GEO.id2 a string for joining purposes. Close the properties window. The following steps outline how to create the CSVTs.<br>
![Spatial Data Carpentry: Census Join - Tract field data types]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-12.png)
1. Open a text editr (gedit, VIM, notepad, notepad++) and enter the following row:<br>
"String","Real(12.0)"<br>
![Spatial Data Carpentry: Census Join - Creating a CSVT]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-13.png)
What this means:<br>
There are two columns in this file separated by a common. The first column indicates string and the second is a real number with length of 12 and precision of 0. While preparing this exercise, QGIS didn't like multiplying integers (Field Calculator results with NULL), so we're using real number type. 0 precision removes unneccessary zeros after the decimal from real number types, also there are no fractions in the datasets.<br><br>
* Save this file as *home-values.csvt* within the *same* directory as *home-values.csv*<br><br>
1. Luckily, we wrangled both CSVs into the same format, so copy *home-values.csvt* and paste it into the *same* directory as *housing-units.csv*. Rename this pasted file as *housing-units.csvt*. Data types, lengths, and precisions will be the same for both files.<br>
![Spatial Data Carpentry: Census Join - Viewing housing-units.csvt]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-14.png)
1. Import CSVs into QGIS. Don't move just yet, there a little quirk about importing CSVs with CSVTs into QGIS. You *cannot* use the **Add Delimited Text Layer** tool, this does not recognize the CSVT precision and length. The best way to import with CSVTs is the ol' drag-n-drop method (this has only been tested on Ubuntu 14.04 as of yet). Drag-and-drop your housing-units.csv and home-values.csv into QGIS. Don't touch the associated CSVTs, QGIS reads these during the import process, just *don't* move these files. It's the same concept as shapefiles and the multitude of associates files per one shapefile.<br>
![Spatial Data Carpentry: Census Join - Drag and drop CSVs]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-15.png)
1. Your workspace should look like the image below. Save your workspace now.<br>
![Spatial Data Carpentry: Census Join - Workspace]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-16.png)
1. Now we are able to join our Census tabular data to the tracts shapefile. Join data by opening the **Properties** of the census-tracts layer and navigating to the **Joins** tab.<br>
![Spatial Data Carpentry: Census Join - view tracts properties]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-17.png)
1. Start the first join by clicking the green plus sign ![Spatial Data Carpentry: Census Join - green plus sign]({{site.baseurl}}{{ASSET_PATH}}/images/qgis/join-plus.png). We're joining home-values and housing-units to census-tracts with:<br>**Join field: GEO.id2<br>Target field: GEOID<br>Cache join layer in virtual memory: (checked)<br>Apply and OK onced both joined**<br>
![Spatial Data Carpentry: Census Join - joining data]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-18.png)
1. Open census-tracts **Attribute Table** and locate the MeanValueHome and TotalUnitsHome fields. Notice they've been renamed and cut-down. We can still decrypt these headings so we'll continue on. Close the attributes table.<br>
![Spatial Data Carpentry: Census Join - viewing joined data]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-19.png)
1. You have joined the data but it's currently being stored in the virtual memory, so we need to save census-tracts (with joined data) as a new shapefile: *Right-click shapefile > Save As*<br>
**Format: ESRI Shapefile<br>
Save as: tracts-values-units (save in your project directory)<br>
Add saved file to map: (checked)**<br>
![Spatial Data Carpentry: Census Join - save shapefile]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-20.png)
1. Let's now calculate total housing value per census tract (TotalUnitsHome X MedianValueHome). 
* **Open tracts-value-units attributes table > Toggle editing mode** ![Spatial Data Carpentry: Census Join - toggle edits]({{site.baseurl}}{{ASSET_PATH}}/images/qgis/toggle-editing-mode.png) **> Field Calculator** ![Spatial Data Carpentry: Census Join - field calculator]({{site.baseurl}}{{ASSET_PATH}}/images/qgis/field-calculator.png). 
* Configure Field Calculator inputs as follows:<br>
**Create a new field: (checked)**<br>
**Output field name: TotalValue**<br>
**Output field type: Decimal number (real)**<br>
**Output field width: 20**<br>
**Precision: 0**<br>
**Expression: "home-value" * "housing-un"**<br><br>
![Spatial Data Carpentry: Census Join - field calculator]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-21.png)
1. Locate **TotalValue** and confirm the calculation. NOTE: you should still have NULL values given that home-values.csv contains NULL values. Be sure to *Save edits* ![Spatial Data Carpentry: Census Join - save edits]({{site.baseurl}}{{ASSET_PATH}}/images/qgis/save-edits.png) and disable editing mode (Toggle editing mode) ![Spatial Data Carpentry: Census Join - toggle editing mode]({{site.baseurl}}{{ASSET_PATH}}/images/qgis/toggle-editing-mode.png). The editing options should now be grayed-out and disabled.<br>
![Spatial Data Carpentry: Census Join - TotalValue per tract]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-22.png)
1. You've successfully joined two sets of Census tabular data to a shapefile. 
1. Style tracts-values-units by categorizing by TotalValue and select a color ramp. QGIS will inform you that you have a high number of classes, click OK to confirm the categorization. We'll need to remove NULL values. Locate NULL within the category table (HINT: it contains no values and is blank - look towards the bottom), highlight and click 'Delete' (not Delete all!) - 'Delete' removes only selected rows. Click Apply then OK to confirm changes. Deactivate census-tracts layer by unchecking it activate box in the layers list. Save your workspace. <br>
![Spatial Data Carpentry: Census Join - completed]({{site.baseurl}}{{ASSET_PATH}}/images/census-join/census-join-24.png)

<br>

----
