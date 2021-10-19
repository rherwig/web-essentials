# Essence: PWA Manifest
This essence shows the usage of a [Web App Manifest](https://developer.mozilla.org/de/docs/Web/Manifest)
for progressive web applications.

There are example icons and manifest files inside the `public/` directory, which
are included in the `index.html` file.

Visit the `Application` tab inside Chrome's dev tools to view more information
about what the manifest does.


## How to create the public assets
Creating all those different asset files might seem a daunting task at first,
but all you really need is a 512x512 image of your app-icon/favicon.

You then want to visit [https://realfavicongenerator.net/](https://realfavicongenerator.net/)
and follow the steps on the website.

You will end up with content very similar to what you see in the `public/` directory
of this essence.


## Recommendations
After generating the assets with the aforementioned site, make sure to check
the `site.webmanifest` as well as the code you are supposed to insert into
your `index.html` file.

Most likely, the `start_url` key is missing from your `site.webmanifest`. If this
is the case, refer to the manifest file in this project and copy the values accordingly.

Sometimes, the `theme-color` values, either in your HTML or manifest, are wrong.
Adjust them to match the primary color of your site.

## Further reading
If you are interested in reading more about the manifest file definition and special uses,
please refer to the links below:

* [https://web.dev/add-manifest/](https://web.dev/add-manifest/)
* [https://developer.mozilla.org/de/docs/Web/Manifest](https://developer.mozilla.org/de/docs/Web/Manifest)
