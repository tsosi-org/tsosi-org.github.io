## TSOSI Project blog

This is the blog for the Transparency to Sustain Open Science Infrastructure (TSOSI) project.

The site is built with [hugo](https://gohugo.io/), using the theme [Beautiful Hugo](https://github.com/halogenica/beautifulhugo.git).

## Install

- Install hugo - Ideally the same version as the one used to host the page (currently 0.147.2)
    ```bash
    # For debian system
    wget -O hugo.deb https://github.com/gohugoio/hugo/releases/download/v0.147.2/hugo_extended_0.147.2_linux-amd64.deb
    sudo dpkg -i hugo.deb
    hugo version # Should output 0.147.2-something
    ```
- Clone the repo and init the submodules
    ```bash
    git clone --recurse-submodules $REPO_URL
    ```
    or 
    ```bash
    git clone $REPO_URL
    git submodule update --init
    ```


## Development

You can run the hugo development server by running

```bash
hugo server
```

## Post structure

Post are located in the [content/post/](/content/post/) folder. Each post is an individual folder whose name will be the URL to access the post.

The markdown content of the post must be written in the `index.md` file.
Associated data should be placed in the blog folder and accessed accordingly with a relative path.

The post's summary is delimited with the `<!--more-->` HTML comment, directly in the markdown file where you want the summary to stop.

Additionally, you can write raw HTML in the markdown file. It should be compiled as-is in the output page.

## Slides

We use reveal.js to display slides on the website.
Presentation slides can be embedded as an iframe in any page using the following process:

-   Create a folder with the name of your presentation in the folder `content/presentation-standalone/`
-   In that folder, create a `index.md` file that will contains your presentation in markdown. Slides must be separated with `<!-- slide -->` and sub slides must be separated with `<!-- sub-slide -->`
-   Any additional files such as images must be present in the created folder.
-   The presentation can be embedded using the hugo shortcode `{{< presentation name="my_folder_name" >}}`.