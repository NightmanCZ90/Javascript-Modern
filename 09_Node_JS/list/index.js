#!/usr/bin/env node

//had troubles with npm link... added the relative path of AppData/Roaming/npm into PATH in environments

const fs = require('fs'); // file system module

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err);
  }

  // const allStats = Array(filenames.length).fill(null);

  // for (let filename of filenames) {
  //   const index = filenames.indexOf(filename);

  //   fs.lstat(filename, (err, stats) => {
  //     if (err) {
  //       console.log(err);
  //     }

  //     allStats[index] = stats;

  //     const ready = allStats.every((stats) => {
  //       return stats;
  //     });

  //     if (ready) {
  //       allStats.forEach((stats, index) => {
  //         console.log(filenames[index], stats.isFile());
  //       });
  //     }
  //   });
  // }

  
});

