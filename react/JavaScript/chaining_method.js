//from transaction array filter out positive numbers and calculate total amount

let transaction = [1000,3000,4000,2000,-898,3800,-4500]

let result = transaction.filter(function(n){
    return n>0
}).reduce(function(acc, value){
    return acc+value
}, 0)


console.log(result)
