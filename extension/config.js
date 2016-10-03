var ReColor = {};

ReColor.CONFIG = {
  /* if the URL of the page matches this regex the recoloring will take effect */
  URL_INCLUDE_REGEX: /.*/,
  /* if the URL of the page matches this regex the recoloring will NOT take effect */
  URL_EXCLUDE_REGEX: /$./,
  /* the colors that will be used to recolor the page */
  MY_COLORS: [
    "#002b36",
    "#073642",
    "#586e75",
    "#657b83",
    "#839496",
    "#93a1a1",
    "#eee8d5",
    "#fdf6e3",
    "#b58900",
    "#cb4b16",
    "#dc322f",
    "#d33682",
    "#6c71c4",
    "#268bd2",
    "#2aa198",
    "#859900"
  ],
  /* if you want to replace some of the new colors with others
     it is useful if you want to replace light colors with dark ones */
  MY_SWAP_RULES: {
    "#fdf6e3": "#002b36",
    "#eee8d5": "#073642",
    "#93a1a1": "#586e75",
    "#839496": "#657b83",
    "#002b36": "#fdf6e3",
    "#073642": "#eee8d5",
    "#586e75": "#93a1a1",
    "#657b83": "#839496"
  },
  /* if the URL of the page matches this regex the swap of the colors will take effect */
  URL_SWAP_INCLUDE_REGEX: /$./,
  /* if the URL of the page matches this regex the swap of the colors will NOT take effect */
  URL_SWAP_EXCLUDE_REGEX: /.*/
};

