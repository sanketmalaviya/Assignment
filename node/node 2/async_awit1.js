const add = (a,b) => {
    return new Promise(function(resolve,reject){
        return resolve(a+b);
        return reject("error");
    })
} 

const sub = (a,b) => {
    return new Promise(function(resolve,reject){
        return resolve(a-b);
        return reject("error");
    })
}

const mul = (a,b) => {
    return new Promise(function(resolve,reject){
        return resolve(a*b);
        return reject("error");
    })
}

const div = (a,b) => {
    return new Promise(function(resolve,reject){
        return resolve(a/b);
        return reject("error");
    })
}

 const call = async() =>{

        const ad = await add(10,20)
        console.log(ad);
        const su = await sub(20,10)
        console.log(su);
        const mu = await mul(10,10)
        console.log(mu);
        const di = await div(10,2)
        console.log(di);
    }  
  call();