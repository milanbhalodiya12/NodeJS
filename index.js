console.log("Hello World");

function task(breadth, length, tile_size) {
    let area = breadth * length;
    console.log("The total sqare feet area is = " + area + "sq ft");
    let number_of_tiles = area / tile_size;
    console.log("The number of required tile of " + tile_size + "(sq ft) is = " + number_of_tiles);
}
let breadth = 50;
let length = 80;
let tile_size = 12.5;
task(breadth, length, tile_size)

















// function task(sqrfeet) {
//     let cement = 50
//     let Sand = 100
//     let kapchi = 150
//     let water = 50
//     let chemical = 0.2
//     console.log("Total Sqrfeet : " + sqrfeet)
//     console.log("------------------------------------")
//     console.log("Cement : " + sqrfeet * cement)
//     console.log("Sand : " + sqrfeet * Sand)
//     console.log("kapchi : " + sqrfeet * kapchi)
//     console.log("Water : " + sqrfeet * water)
//     console.log("Chemical : " + sqrfeet * chemical)
// }
// let sqrfeet = 100
// task(sqrfeet)