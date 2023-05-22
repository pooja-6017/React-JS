// var arr = [1, "Hi", true, 56.23]
// console.log(arr)
// var ans = arr.push("Pooja")
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)
// console.log(arr.unshift("Hello"))
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)
// console.log(arr[2])

// Object
var Person = {                                              //defining Object
    name: "Pooja",
    address : {                                             //nested object 
        pincode:413216,
        city:"Solapur"
    },
    marks : 85.96,
    arr : [1, 23.6, "JS"]                                  //Adding array also with contains different data
}
console.log(Person.address.city)                            //Accessing nested object property
console.log(Person.name)
console.log(Person['address'])                          // Accessing the data using key 
Person.name = "Pritee"                                  // giving new value to the property 
console.log(Person.name)                            

Person.movies = ["thriller", "suspense", "comedy"]      //adding new property from outside the object
console.log(Person)
console.log(delete Person.address.pincode)              // delete pincode
console.log(Person)