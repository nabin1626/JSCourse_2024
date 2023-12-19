const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNumbers = myNumbers.map( (num) => num+10);
// console.log(newNumbers);

// use two or more map
let newNums = myNumbers.map( (num) => num**2)
            .map((num) => num*10)
            .filter((num) => num>0);
        
            console.log(newNums);