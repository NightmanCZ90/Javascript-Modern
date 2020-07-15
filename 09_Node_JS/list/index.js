#!/usr/bin/env node

//had troubles with npm link... added the relative path of AppData/Roaming/npm into PATH in environments

const fs = require('fs'); // file system module
const util = require('util');
const chalk = require('chalk');
const path = require('path');

//////////////////////////////////////////////////////
// Method #2 - CALLBACK BASED FUNCTIONS USING PROMISES
// const lstat = util.promisify(fs.lstat);

// Method #3 - another with promises
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  const statPromises = filenames.map(filename => {
    return lstat(path.join(targetDir, filename));
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(filenames[index]);
    } else {
      console.log(chalk.cyan(filenames[index]));
    }
  }

  // for (let filename of filenames) {
  //   try {
  //     const stats = await lstat(filename);
  
  //     console.log(filename, stats.isFile());
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
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

