var a = [10 ,20, 30,10, 40, 50];

var myVal = a.find(ele => {
    return ele == 10;
}) 

var myVal2 = a.filter(ele => {
    return ele == 10;
})    

console.log(myVal);
console.log(myVal2);