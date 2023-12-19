const arr = [1,3,4,5,6,7]
// arr.forEach( function (item){
//     console.log(item);
// })

arr.forEach((value) => {
    // console.log(value);
})

// array inside object forEach
const file = [
    { 
        FileName : "Nabin",
        FileId : "001"
    },
    { 
        FileName : "Rohan",
        FileId : "0045"
    },
    { 
        FileName : "Ayush",
        FileId : "0012"
    }
];

file.forEach( (Element) => {
    console.log(`Name: ${Element.FileName} and Id: ${Element.FileId}`);
})