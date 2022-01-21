//.....8 Essential Array Methods............


//..1-.......FILTER METHOD..................

// Filter method filters all those items which you needs
// to filter according to your condition or extract your 
// required items from the given array.
// const items = [

//     { name: "bike" , price: 100 },
//     { name: "tv" , price: 200 },
//     { name: "album" , price: 10 },
//     { name: "book" , price: 5 },
//     { name: "phone" , price: 500 },
//     { name: "computer" , price: 1000 },
//     { name: "keyboard" , price: 25 }
// ]

// const filteredItems = items.filter((item) => {

//     return item.price <= 100
// })

// console.log(items);
// console.log(filteredItems);


//..2-..............MAP METHOD.................


// Map method allows you to take one array and converted 
// into a new array so all items of the array are looking
// different.
 
// const items = [

//     { name: "bike" , price: 100 },
//     { name: "tv" , price: 200 },
//     { name: "album" , price: 10 },
//     { name: "book" , price: 5 },
//     { name: "phone" , price: 500 },
//     { name: "computer" , price: 1000 },
//     { name: "keyboard" , price: 25 }
// ]

// const itemNames = items.map((item) => {

//     return item.name
// })


// console.log(itemNames);


//..3-..............FIND METHOD.................

// Find method allows you to find a single object in an array.



// const items = [

//     { name: "bike" , price: 100 },
//     { name: "tv" , price: 200 },
//     { name: "album" , price: 10 },
//     { name: "book" , price: 5 },
//     { name: "phone" , price: 500 },
//     { name: "computer" , price: 1000 },
//     { name: "keyboard" , price: 25 }
// ]

// const foundItem = items.find((item) => {

//     return item.name === "book"
// })


// console.log(foundItem);



//..4-..............ForEach METHOD.................

// UnLike these other methods it does not return anything
// so we don't need return statement here.
// It is similar to for loop


// const items = [

//     { name: "bike" , price: 100 },
//     { name: "tv" , price: 200 },
//     { name: "album" , price: 10 },
//     { name: "book" , price: 5 },
//     { name: "phone" , price: 500 },
//     { name: "computer" , price: 1000 },
//     { name: "keyboard" , price: 25 }
// ]

// items.forEach((item) => {

//    console.log(item.name);
// //    console.log(item.price);
// })



//..5-..............some METHOD.................

// The some() method tests whether at least one element in 
// the array passes the test implemented by the provided 
// function. It returns true if, in the array, it finds an 
// element for which the provided function returns true; 
// otherwise it returns false.


// const items = [

//     { name: "bike" , price: 100 },
//     { name: "tv" , price: 200 },
//     { name: "album" , price: 10 },
//     { name: "book" , price: 5 },
//     { name: "phone" , price: 500 },
//     { name: "computer" , price: 1000 },
//     { name: "keyboard" , price: 25 }
// ]

// const hasInexpansiveItems = items.some((item) => {

   
//    return item.price <= 100
// })

// console.log(hasInexpansiveItems);



//..6-..............every METHOD.................

// The every() method tests whether all elements in the array
//  pass the test implemented by the provided function. It 
//  returns a Boolean value.


// const items = [

//     { name: "bike" , price: 100 },
//     { name: "tv" , price: 200 },
//     { name: "album" , price: 10 },
//     { name: "book" , price: 5 },
//     { name: "phone" , price: 500 },
//     { name: "computer" , price: 1000 },
//     { name: "keyboard" , price: 25 }
// ]

// const hasInexpansiveItems = items.every((item) => {

   
//    return item.price <= 1000
// })

// console.log(hasInexpansiveItems);



//..7-..............reduce METHOD.................

// This method is doing some operation on the array and returns
// a combination of all these operations.



// const items = [

//     { name: "bike" , price: 100 },
//     { name: "tv" , price: 200 },
//     { name: "album" , price: 10 },
//     { name: "book" , price: 5 },
//     { name: "phone" , price: 500 },
//     { name: "computer" , price: 1000 },
//     { name: "keyboard" , price: 25 }
// ]

// const total = items.reduce((currentTotal , item) => {

   
//    return item.price + currentTotal
// }, 0)

// console.log(total);


//..8-..............includes METHOD.................

// The includes() method determines whether an array includes
//  a certain value among its entries, returning true or false
//   as appropriate.


const items = [1, 2, 3, 4, 5, 6]

const includesTwo = items.includes(2)

console.log(includesTwo);