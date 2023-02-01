const square = (a) => {
    return new Promise( c =  (resolve,reject) => {
        return resolve(a*a)
        return reject("error")
    })
}
const cube = (b) => {
    return new Promise(d = (resolve , reject) =>{
      return resolve(b*b*b)
      return reject("error")
    })
}
const mul = (c) => {
    return new Promise(function(resolve,reject){
        return resolve(c * 10)
        return reject("error")
    })
}

square(10).then(result => {
    console.log(result);
  return  cube(result);
}).then(data => {
    console.log(data)
    return mul(data);
}).then(mul =>{     
    console.log(mul);
}).catch (err =>{
    console.log(err);
})
