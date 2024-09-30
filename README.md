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