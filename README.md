## TSOSI Project blog

This is the blog for the Transparency to Sustain Open Science Infrastructure (TSOSI) project.

The site is built with [hugo](https://gohugo.io/), using the theme [Beautiful Hugo](https://github.com/halogenica/beautifulhugo.git).

## Install

- Install hugo - Ideally the same version as the one used to host the page (currently 0.132.2)
    ```bash
    # For debian system
    wget https://github.com/gohugoio/hugo/releases/download/v0.132.2/hugo_extended_0.132.2_linux-amd64.tar.gz
    tar -xvzf hugo_extended_0.132.2_linux-amd64.tar.gz 
    rm README.md 
    rm LICENSE 
    sudo mv hugo /usr/local/bin/
    hugo version # Should output 0.132.2
    ```
- Clone the repo and init the submodules
    ```bash
    git clone --recurse-submodules https://gitlab.com/tsosi/tsosi.gitlab.io.git
    ```


## Development

You can run the hugo development server by running

```bash
hugo server
```

## Slides

We use reveal.js to display slides on the website.
Presentation slides can be embedded as an iframe in any page using the following process:

-   Create a folder with the name of your presentation in the folder `content/presentation-standalone/`
-   In that folder, create a `index.md` file that will contains your presentation in markdown. Slides must be separated with `<!-- slide -->` and sub slides must be separated with `<!-- sub-slide -->`
-   Any additional files such as images must be present in the created folder.
-   The presentation can be embedded using the hugo shortcode `{{< presentation name="my_folder_name" >}}`.