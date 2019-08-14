exec - main service class container
    handler - is what "handles" the page, rendering pages called views, showing and hiding elements etc.
              Includes most of my helper functions, some of them just replace jQuery syntax, since I don't really
              like jQuery too much.

    component - to keep things clean I made this to just wrap everything in a object Ex: a button on the page

    populator - is kind of the same as handler, but this only handles the process of loading info onto the page, like products to be displayed

I tried making most functions and "services" dynamic, meaning you could use it for any product, for an example not only GPUs,
but at the end, like the (populator), I rushed things a little bit just to make the page work, as I didn't have too much time
