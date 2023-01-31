const square = (a) =>{
   return new Promise(function(resolve,reject){
      return resolve(a*a);
      return reject("error");
   }) 
}
const cube = (b) =>{
    return new Promise(function(resolve,reject){
        return resolve(b*b*b);
        return reject("error");
    })
}
const mul = (m) =>{
    return new Promise(function(resolve,reject){
        return resolve(m *10);
        return reject("error");
    })
}
const call = async () =>{
try{
    
        const s = await square(10)
        console.log(s);
        const c = await cube(s)
        console.log(c);
        const mu = await mul(c)
        console.log(mu);
    } 

catch (error){
  console.log(error);
}
}
call();