function validation(){
    var fname = document.getElementById("fname").Value;
    var pass = document.getElementById("pass").Value;
    var fnamee = document.getElementById("fnamee");
    var passe = document.getElementById("passe");

    if(fname == ""  || fname == null){
        fnamee.innerHTML = "Error"
        
    }

    else{
        fnamee.innerHTML = "";
    }

    if(pass == "" || pass == null){
        passe.innerHTML = "Error"
    }
    else{
        passe.innerHTML = "";
    }

}