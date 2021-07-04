const def = require("./cubic");



function randomRange(min, max) {
    return min + Math.random() * (max - min);
}

const width = 1000
const height = 800
const total_dots = 200
const mac =[]
let start_time = Math.floor(Math.random() * 1900) + 1000

pt1 = {
    x: randomRange(0, width),
    y: randomRange(0, height)
  }
  
pt2 = {
    x: randomRange(0, width),
    y: randomRange(0, height)
}
  
pt3 = {
    x: randomRange(0, width),
    y: randomRange(0, height)
}
  
pt4 = {
    x: randomRange(0, width),
    y: randomRange(0, height)
}

let array = []

for (let step = 0; step < total_dots; step++) {
    array.push(Math.round(Math.random()* 100) / 100)
}
  
array.sort(function(a, b) {
    return a - b;
});

array.forEach((element) => {
    dot = def.cubix(pt1, pt2, pt3, pt4, t=element)
    mac.push(dot)
})

    
var finalMact = ""



for (var i = 0; i < mac.length; i++) {
    x = Math.floor(mac[i].x)
    y = Math.floor(mac[i].y)

    start_time = start_time + Math.floor(Math.random() * 100) +1
    mact = i + ',1,' + start_time + ',' + x + ',' + y + ';'
    finalMact = finalMact + mact
}

console.log(finalMact)
