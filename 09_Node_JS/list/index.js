#!/usr/bin/env node

//had troubles with npm link... added the relative path of AppData/Roaming/npm into PATH in environments

const fs = require('fs'); // file system module
const util = require('util');

//////////////////////////////////////////////////////
// Method #2 - CALLBACK BASED FUNCTIONS USING PROMISES
// const lstat = util.promisify(fs.lstat);

// Method #3 - another with promises
const { lstat } = fs.promises;


fs.readdir(process.cwd(), async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  for (let filename of filenames) {
    try {
      const stats = await lstat(filename);
  
      console.log(filename, stats.isFile());
    } catch (err) {
      console.log(err);
    }
  }
});

//////////////////////////////////////
// Method #1 - CALLBACK-BASED SOLUTION

// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         reject(err);
//       }

//       resolve(stats);
//     });
//   });
// };

