




function findwhether() {
    var city = document.querySelector("#city").value

    let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da5913f441816ed6c8273f623edaacfa`
    const url = url1

    console.log(url);
    var arr = []
    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            // res
            arr.push(res)
            //var data=JSON.parse()
            //console.log(arr)
            appedData(arr)   /////main function
            //console.log(arr); 
        })
        .catch(function (err) {
            alert("Enter Valid City Name")
        })


     






}
function appedData(arr) {

    document.querySelector("#container").innerText = ""
    console.log(arr);
    arr.forEach(function (el) {
        //console.log("hello");
        // console.log(el.name);
        //console.log(el.current.temp_c);

        let h1 = document.createElement("h1")
        h1.innerText = el.name
        let h2 = document.createElement("h2")
        h2.innerText =Math.ceil( (el.main.temp)-270)+" °C"
        let h3=document.createElement("h2")
        let unix=el.sys.sunrise
        let date = new Date(unix*1000);
        h3.innerText=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" AM"





        var map=document.querySelector("#gmap_canvas")
        map.src=`https://maps.google.com/maps?q=${el.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
        document.querySelector("#container").append(h1, h2,h3)
        document.querySelector("#city").value = null
    })
}
//https://rapidapi.com/blog/weather-app-javascript-nodejs/
//logo src
// https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon

function success(pos) {
    var crd = pos.coords;   
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  

  
  navigator.geolocation.getCurrentPosition(success);


