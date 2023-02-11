 const add = ()=>{
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = Number(a) + Number(b);
    document.getElementById("c").innerHTML = c
}

const sub = ()=> {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = Number(a) - Number(b);
    document.getElementById("c").innerHTML = c
}


const mul = ()=> {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = Number(a) * Number(b);
    document.getElementById("c").innerHTML = c
}


const div = ()=> {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = Number(a) / Number(b);
    document.getElementById("c").innerHTML = c
}



setTimeout(() => {
    a2.innerHTML = new Date()    
}, 1000);

setInterval(() => {
    a1.innerHTML = new Date()   
}, 1000);


