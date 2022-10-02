#!/usr/bin/env node
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv));

let date = new Date();

const options = argv
  .default("d", true)
  .usage("Needs an argument")
  .option("d", {
    alias: "date",
    describe: "Today's date",
    demandOption: false,
  })
  .usage("Usage: -n <name>")
  .option("n", {
    alias: "name",
    describe: "Add your name",
    type: "string",
    demandOption: false,
  }).argv;

// output
if (options.n) {
  console.log(`Hello ${options.name}, today is ${date}`);
} else {
  console.log(`${date}`);
}
