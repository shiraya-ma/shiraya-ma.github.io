'use strict';
import { maiFonts } from "@shiraya-ma/mai-ui";
import { maiUIConfig } from "@shiraya-ma/mai-ui/setup";

module.exports = maiUIConfig({
  content: [],
  theme: {
    fontFamily: {
      ...maiFonts,
      logo: [ 'Robot Flex', 'sans-serif' ]
    }
  }
});
