#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
const argv = yargs(hideBin(process.argv));
import { fetchNow, weatherForecast } from "./components/Weather.js";

let date = new Date();

const options = argv
  .default("d", true)
  .usage("Needs an argument")
  .option("d", {
    alias: "date",
    describe: "Today's date",
    demandOption: false,
  })
  .usage("-w <city>")
  .option("w", {
    alias: "weather",
    describe: "Today's weather",
    demandOption: false,
  })
  .usage("-f <city>")
  .option("f", {
    alias: "forecast",
    describe: "city's weather forecast",
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
} else if (options.f) {
  console.log(weatherForecast(options.forecast));
} else if (options.w) {
  console.log(fetchNow(options.weather));
} else {
  console.log(`${date}`);
}
