'use strict';



const express = require('express');
const app = express();
const path = require('path');
var MimeLookup = require('mime-lookup');
var mime = new MimeLookup(require('mime-db'));

var fs = require('fs');


app.use(express.static("www"));


if (module === require.main) {
    // [START listen]
    const PORT = process.env.PORT || 10631;
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}`);
      console.log('Press Ctrl+C to quit.');
    });
    // [END listen]
  }
// [END app]

module.exports = app;
