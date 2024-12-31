let apiKey="ca1a6c57ce1565ed7d7b00e8872bbb7e";
let submit = document.querySelector("#submit");
submit.addEventListener("click",fetchWeather);
let div1 = document.querySelector("#demo");
let table = document.querySelector("table");
let h2 = document.querySelector("h2");



async function fetchWeather() {
let cityName = document.querySelector("#city").value.trim();
console.log(cityName);
h2.innerText=` WEATHER FORECAST OF ${cityName.toUpperCase()} :`;
let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

let weather = await fetch(url);
let weather1 = await weather.json();
// div1.innerText=weather1;
for(key in weather1.main) {
    
    
   let tr = document.createElement('tr');
   let td1=document.createElement('td');
   let td2=document.createElement('td');
   td1.textContent = key.toUpperCase();
   td2.textContent = weather1.main[key];
   if(key==='temp' || key==="feels_like" ||key==="temp_min"||key==="temp_max"){
    let arg = weather1.main[key];

    td2.textContent = `${(Number(arg)-273.15).toFixed(2)}C` ;
    table.style.visibility="visible";
    
   }
   if(key== "pressure"||key== "grnd_level"||key== "sea_level") {
      
      td2.textContent = `${weather1.main[key]} hPa`;

   }
   if(key == "pressure"){
      td1.textContent = "Pressure";
   }
   if(key == "grnd_level"){
      td1.textContent = "Ground level";
   }

   if(key == "sea_level"){
      td1.textContent = "Sea level";
   }
   if(key == "temp"){
      td1.textContent = "Temperature";
   }
   if(key == "feels_like"){
      td1.textContent = "Feels like";
   }

   if(key == "temp_min"){
      td1.textContent = "Min temperature";
   }
   if(key == "temp_max"){
      td1.textContent = "Max temperature";
   }
   if(key== "humidity") {
      td1.textContent = "Humidity";
      td2.textContent = `${weather1.main[key]}%`;

   }
   
   tr.appendChild(td1);
   tr.appendChild(td2);
   table.appendChild(tr);
   

}


}



