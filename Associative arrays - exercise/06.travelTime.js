function travel(input) {
    let destinations = {};

    //fill destinations
    for (let element of input) {
        let [country, town, cost] = element.split(" > ");

        //country does not exist
        if (!Object.keys(destinations).includes(country)) {
            destinations[country] = {};
        }
        //country exists
        //town does not exist
        if (!Object.keys(destinations[country]).includes(town)) {
            destinations[country][town] = Number(cost);
        }
        //town exists
        if (Number(cost) < destinations[country][town]) {
            destinations[country][town] = Number(cost);
        }
    }
    //console.log(destinations);
    let sortedCountries = Object
    .entries(destinations)
    .sort((a, b) => a[0].localeCompare(b[0]) || 
    Object.values(a[1]).reduce((x, y) => x + y) - Object.values(b[1]).reduce((x, y) => x + y));

   // console.log(sortedCountries);
   for (let [country, towns] of sortedCountries) {
       let townsAsEntries = Object.entries(towns).map(x => `${x[0]} -> ${x[1]}`);
       console.log(`${country} -> ${townsAsEntries.join(" ")}`);
   }
}