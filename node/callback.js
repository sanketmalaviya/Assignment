 
 const square = (a,callback) => {
    callback(a*a)
 }

 const cube = (b,callback) => {
    callback(b*b*b)
 }
 const mul = (d,callback)=>{
    callback(d * 10)
 }

 square(10,(square)=>{
    console.log(square);
        cube(square,(c)=>{
            console.log(c);
                mul(c,(m)=>{
                    console.log(m);
                })
        })              
 })



 
