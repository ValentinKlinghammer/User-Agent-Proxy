# Simple User Agent Proxy

This is a simple proxy that changes the user agent for a request.

It was developed while trying to load desktop, tablet and mobile versions of a website in an iframe for comparison.

This is a proof of concept stage and nowhere near complete or usable.

## Deployment

    node server.js

## Usage

    example.com/:device/:target

Where device can currently be one of the following:

* iPhone
* iPad

The proxy server then requests the *:target* with the set user agent and renders the page.

## Limitations

Though you can fool the server into thinking you're a mobile device, you can't fool the *:target*'s client site scripts. Especially the Desktop and Tablet discrimination often relies on client side user agent detection, which is almost impossible to fool.

Also, there is currently no error checking whatsoever.
