const add = (a,b) => {
    return  new Promise(function(resolve,reject){
        return resolve(a+b)
        return reject("error")
    })
}

const sub = (c,d) => {
    return new Promise(function(resolve,reject){
        return resolve(c-d)
        return reject("error")
    })
}

const mul = (e,f) => {
    return new Promise(function(resolve,reject){
        return resolve(e*f)
        return reject("error")
    })
}

const div = (g,h) => {
    return new Promise(function(resolve,reject){
        return resolve(g/h)
        return reject("error")
    })
}

add(30,20) .then(add =>{
    console.log(add);
    return sub(add);
}).then (sub =>{
    console.log(sub);
    return mul(sub);
}).then(mul =>{
    console.log(mul);
    return div(mul);
}).then(div =>{
    console.log(div);
}).catch(error =>{
    console.log(error);
})