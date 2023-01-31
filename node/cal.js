function add() {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = Number(a) + Number(b);
    document.getElementById("c").innerHTML = c
}

function sub() {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = Number(a) - Number(b);
    document.getElementById("c").innerHTML = c
}


function mul() {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = Number(a) * Number(b);
    document.getElementById("c").innerHTML = c
}


function div() {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var c = Number(a) / Number(b);
    document.getElementById("c").innerHTML = c
}



setTimeout(() => {
    a.innerHTML = new Date()    
}, 1000);

setInterval(() => {
    a1.innerHTML = new Date()   
}, 1000);


