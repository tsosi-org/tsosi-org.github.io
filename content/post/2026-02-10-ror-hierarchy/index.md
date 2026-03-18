---
title: Adding ROR Parent–Child Relationships to TSOSI
date: 2026-03-18
author: Baptiste Lefeuvre, Maxence Larrieu
---


TSOSI has integrated the parent-child relationship from the Research Organization Registry (ROR)! This allows to better represent the organizational structures involved. If a support is done from an organization that is a "child" from another one, then the support also appears on the parent organization.

<!--more-->

### Persistent Identifiers coverage

As of February 2026, TSOSI has gathered the data from 1,036 organizations in 47 countries that have financially supported open infrastructures. The graph below shows the coverage of the two main persistent identifiers used in TSOSI, that is ROR and Wikidata.

<img src="coverage.png" alt="Data coverage" style="width: 80%; margin-top: 30px; margin-bottom: 30px;">


ROR and Wikidata identifiers allow us to highlight organizations with specific metadata, like Wikipeda description, website, logos, geographical location, and, now, hierarchical relationships!


### How is it shown? 

If a support is done by an organization that is the "child" from another one, then we _also_ display it on the "parent" organization, with a dedicated icon to inform the user. 

A good example is the [University of Oxford](https://tsosi.org/entities/052gg0110), as shown below, that also contains support from the [Oxford University Press](https://tsosi.org/entities/0336mm561).
</br>
</br>
<div style="text-align: center;">

*List of financial supports made by Oxford University Press to Open Science infrastructures*
</div>

<div style="display:flex; justify-content: center;">
    <a target="_blank"  href="https://tsosi.org/entities/052gg0110" style="display: block; width: 100%; margin-bottom: 30px;">
        <img src="oxford.png" alt="Oxford list of financial supports">
    </a>
</div>

### What has changed?

So far, ROR lists over 17,000 parent-child relationship instances across its registry of more than 116,000 organizations (see [their blog post](https://ror.org/blog/2023-02-27-parents-children-and-other-relationships-in-ror/)). We have added the ones that are part of TSOSI: 59 relationships between 67 institutions have been integrated, which is shown in the graph below (you can click to zoom)

<div style="display:flex; justify-content: center;">
    <a target="_blank" href="hierarchy.png" style="display: block; width: 80%; margin-top: 30px;">
        <img src="hierarchy.png" alt="Data coverage" title="Click to zoom" style="border: 1px solid black;">
    </a>
</div>
<div style="text-align: center; margin-bottom: 50px;">  

*Graph of relationships between institutions in TSOSI (Click to zoom)*
</div>

### What's next ?

This integration of ROR hierarchies contributes to a better understanding of the open infrastructure support landscape. Taking it further, we could also consider, for organizations without a ROR identifier, the hierarchical relationships present in Wikidata (the property [part of](https://www.wikidata.org/wiki/Property:P361)). 

Similarly, we also plan to integrate the [ROR metadata _type_](https://ror.readme.io/docs/ror-data-structure#types), which can, then, be used to filter on a specific type of supporters, such as funders, company, or government.