# Essence: Vue Server Side Rendering
This essence showcases a most basic server side rendering setup for VueJS.
Except for the build engine, there is no abstraction involved, so you can
see the process for server side rendering just within the code.

## Purpose
There are frameworks, like [Nuxt](https://nuxtjs.org/), 
that make server side rendering very easy and convenient to use.

The purpose of this essence is to abstract as little as possible while
maintaining a comfortable level of convenience.

This is, so you can see the programmatic steps to implement server side
rendering and understand how to expand upon it.

## Commands
The following commands can be executed.

### Development
Run `npm start` for starting the development server on port `3000`.

### Production
In order to build the application for production, execute:
```
npm run build
```

You can then launch the production application by running:
```
npm run production
```

This will start a production mode server on port `3000`.

## Further reading
For more information on how to use server side rendering with ViteJS, please
refer to the official documentation:

* [https://vitejs.dev/guide/ssr.html](https://vitejs.dev/guide/ssr.html)

VueJS itself also features a guide on how to implement server side rendering:

* [https://ssr.vuejs.org/](https://ssr.vuejs.org/)

If you are looking for server side rendering information on other popular frameworks
from the Vue ecosystem, you may also want to refer to the following sites:

* [Vuex](https://ssr.vuejs.org/guide/data.html)
* [Vue Router](https://ssr.vuejs.org/guide/routing.html#routing-with-vue-router)
