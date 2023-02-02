
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
        sub(20,10,(sub) => {
            console.log(sub);
                mul(10,10,(mul) => {
                    console.log(mul);
                        div(10,2,(div) => {
                            console.log(div);
                        })
                })
        })
})
