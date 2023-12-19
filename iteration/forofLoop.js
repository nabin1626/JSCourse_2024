const array = [3,4,5,6,7,8];
for(const elm of array){
    // console.log(elm);
}

let map = new Map();
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('NP',"Nepal")

// console.log(map);
//print using for of loop
for(let [element,value] of map){
    // console.log(`${element} :- ${value}`);
}

// for of loop on object
// const myObject = 