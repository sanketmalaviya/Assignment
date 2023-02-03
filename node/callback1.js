
const add = (a,b, val)=>{
    val(a+b)
}

const sub = (a,b,val)=>{
    val(a-b)
}

const mul = (a,b,val)=>{
    val(a*b)
}

const div = (a,b,val)=>{
    val(a/b)
}

add(10,20,(add) => {
    console.log(add);
        sub(add,(s) => {
            console.log(s);
                mul(s,(m) => {
                    console.log(m);
                        div(m,(d) => {
                            console.log(d);
                        })
                })
        })
})
