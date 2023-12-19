const myObj = {
    js : "javascript",
    cpp : "C++",
    swift: "swift by apple"
}

for(const key in myObj){
    console.log(`${key} for ${myObj[key]}`);
}

// for in loop for array
const array = ["js","ruby","html" , "python"];
for(const key in array){
    console.log(array[key]);
}