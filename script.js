//tempreture reading
const day1TempF =32
const day2TempC =25
const day3TempF =70
const day4TempC =18
const day5TempF =80
const day6TempC =15
const day7TempF =72
const day8TempC =28
const day9TempF =68
const day10TempC =20
const day11TempF =75
const day12TempC =23
const day13TempF =82
const day14TempC =30
const day15TempF =65
const day16TempC =22
const day17TempF =77
const day18TempC =26
const day19TempF =78
const day20TempC =24
const day21TempF =73
const day22TempC =21
const day23TempF =79
const day24TempC =27
const day25TempF =71
const day26TempC =19
const day27TempF =74
const day28TempC =17
const day29TempF =76
const day30TempC =29
function convertCtoF(tempInCelsius) {
    return (tempInCelsius * 9 / 5) + 32;
}
  

function convertFtoC(tempInFahrenheit) {
  return (tempInFahrenheit - 32) * 5 / 9;
}
const temperatures = [
  day1TempF, day2TempC, day3TempF, day4TempC, day5TempF,
  day6TempC, day7TempF, day8TempC, day9TempF, day10TempC,
  day11TempF, day12TempC, day13TempF, day14TempC, day15TempF,
  day16TempC, day17TempF, day18TempC, day19TempF, day20TempC,
  day21TempF, day22TempC, day23TempF, day24TempC, day25TempF,
  day26TempC, day27TempF, day28TempC, day29TempF, day30TempC
];
let tot_temperature_in_fahrenheit = 0;
let tot_temperature_in_celsius = 0;

// 4. NOW loop to sum Fahrenheit
for (let temp of temperatures) {
  tot_temperature_in_fahrenheit += temp;
}

// 5. Loop to convert and sum Celsius
for (let temp of temperatures) {
  const tempInCelsius = (temp - 32) * 5 / 9;
  tot_temperature_in_celsius += tempInCelsius;
}
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / temperatures.length;
let avg_temperature_in_celsius = tot_temperature_in_celsius /temperatures.length
console.log("Average temperature in Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average temperature in Celsius:", avg_temperature_in_celsius);