
const getweather = () =>{
    const location=document.getElementById("cityname").value
    fetch(`/weather?location=${location}`).then(result =>{
        return result.json();
    }).then(data =>{
        city.innerHTML= data.city
        pressure.innerHTML=data.pressure
        humidity.innerHTML=data.humidity
        lat.innerHTML=data.lat
        lng.innerHTML = data.lng
    }).catch(err =>{
        console.log(err);
    })
}
const on=()=>{
    alert("ok");
}