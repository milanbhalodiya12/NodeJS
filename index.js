console.log("Hello World");

function task(breadth, length, tile_size) {
    let area = breadth * length;
    console.log("The total sqare feet area is = " + area + "sq ft");
    let number_of_tiles = area / tile_size;
    console.log("The number of required tile of " + tile_size + "(sq ft) is = " + number_of_tiles);
}

let breadth = 50;
let length = 80;
let tile_size = 25;
task(breadth, length, tile_size)