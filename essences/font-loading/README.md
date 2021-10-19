# Essence: Font Loading
This essence shows a way of loading fonts, using the `document.fonts` API.
The goal is, to avoid FOIT (*Flash of invisible text*) while the desired font
is not yet loaded and reduce the amount FOUT (*Flash of unstyled text*) that
a fallback font will cause.


## Recommendations

### Preloading fonts
For this technique to work optimally, you want to preload the fonts, you are using.
In order to achieve that, add the following piece of HTML to the `head` section of your
page:

```html
<link rel="preload" as="font" href="/relative/path/to/font"/>
```

This will ensure, the download request for the font starts as soon as possible,
thus reducing the time it takes to be available to render.

### Caching fonts via service worker
Although not included in this *essence*, pre-caching fonts via service worker
is a great way to ensure that it is present on the client immediately, once they
fetched it from the network once.

The example provided here tries to mimic a similar effect, by saving the 
preloaded-state into the session storage and relying on disc-cache to
serve the font files.


## Further reading
Since there are several other techniques for loading fonts, each with their
respective up- and downsides, have a look at [this repository](https://github.com/zachleat/web-font-loading-recipes).
It shows various techniques (including those for older browsers) and is a great resource.
