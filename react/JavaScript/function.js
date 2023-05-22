//function in expression means in variable we declare function var add = function() { }
//this is called arrow function '=>'

let add = (a, b) => {           // using arrow funtion '=>'
    console.log(a+b)
}

let sub = function(a,b){           // simple function in expression
    console.log(a-b)
}

add(2, 3)
sub(5, 8)

